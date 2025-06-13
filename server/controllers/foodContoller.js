import foodModel from "../models/foodModel.js";

export const addFood = async (req, res) => {
  let img_FileName = `${req.file.filename}`;
  const { name, price, category, description, discount } = req.body;

  if (isNaN(price) || price <= 0) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid price value." });
  }

  const priceNumber = parseFloat(price);

  const discountValue = discount ? parseFloat(discount) : priceNumber + 3;

  const food = new foodModel({
    name: name,
    image: img_FileName,
    price: priceNumber,
    discount: discountValue,
    category: category,
    note: description,
  });
  try {
    await food.save();
    res.status(200).json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log("error in add food  (food model) ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, foods });
  } catch (error) {
    console.log("error in get food (food controller)", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteFood = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.json({ success: false, message: "food id required" });
    }
    const food = await foodModel.findByIdAndDelete(id);
    if (!food) {
      return res.json({ success: false, message: "food not found" });
    }

    const updatedFoods = await foodModel.find({});

    return res.status(200).json({
      success: true,
      message: "Food item deleted successfully",
      data: updatedFoods,
    });
  } catch (error) {
    console.log("error in deletefood api ", error);
  }
};
