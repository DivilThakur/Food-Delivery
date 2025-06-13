import foodModel from "../models/foodModel.js";
import redisClient from "../config/redisClient.js";


export const addFood = async (req, res) => {
  
  const { name,image, price, category, description, discount } = req.body;

  if (isNaN(price) || price <= 0) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid price value." });
  }

  const priceNumber = parseFloat(price);
  const discountValue = discount ? parseFloat(discount) : priceNumber + 3;

  const food = new foodModel({
    name,
    image,
    price: priceNumber,
    discount: discountValue,
    category,
    note: description,
  });

  try {
    await food.save();

    await redisClient.del("all_foods");

    res.status(200).json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log("Error adding food:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFood = async (req, res) => {
  try {
    const cachedData = await redisClient.get("all_foods");
    if (cachedData) {
      return res
        .status(200)
        .json({ success: true, foods: JSON.parse(cachedData) });
    }

    const foods = await foodModel.find({});
    await redisClient.set("all_foods", JSON.stringify(foods), { EX: 300 });

    res.status(200).json({ success: true, foods });
  } catch (error) {
    console.log("Error fetching food:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.json({ success: false, message: "Food ID required" });

    const food = await foodModel.findByIdAndDelete(id);
    if (!food) return res.json({ success: false, message: "Food not found" });

    await redisClient.del("all_foods");

    const updatedFoods = await foodModel.find({});
    res.status(200).json({
      success: true,
      message: "Food item deleted successfully",
      data: updatedFoods,
    });
  } catch (error) {
    console.log("Error deleting food:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
