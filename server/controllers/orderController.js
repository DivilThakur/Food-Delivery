import Razorpay from "razorpay";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;

    const newOrder = new orderModel({
      userId: req.user,
      items: items,
      amount: amount,
      address: address,
    });

    await newOrder.save();

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: newOrder._id.toString(),
      payment_capture: 1,
    };

    razorpay.orders.create(options, async (err, order) => {
      if (err) {
        console.log("Razorpay order creation failed", err);
        return res.json({
          success: false,
          message: "Error creating payment order",
        });
      }

      newOrder.razorpayOrderId = order.id;
      await newOrder.save();
      res.json({
        success: true,
        message: "order successfull",
        order: order,
        orderId: newOrder._id,
      });

      await userModel.findByIdAndUpdate(req.user, { cartData: [] });
    });
  } catch (error) {
    console.log("error in place order (order controller) ", error.message);
    res.json({ success: false, message: "error in server" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { paymentId, orderId, signature } = req.body;

    const order = await orderModel.findOne({ razorpayOrderId: orderId });
    if (!order) {
      return res.json({ success: false, message: "order not found" });
    }
    const secret = process.env.RAZORPAY_SECRET;
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(orderId + "|" + paymentId)
      .digest("hex");

    if (generatedSignature === signature) {
      order.payment = true;
      await order.save();
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.json({ success: false, message: "Payment verified failed" });
    }
  } catch (error) {
    console.log("error in payment verification", error.message);
    res.json({ success: false, message: "server error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const userId = req.user;
    const orderData = await orderModel.find({ userId });
    res.json({ success: true, data: orderData });
  } catch (error) {
    console.log("error in get orders", error.message);
    res.json({ success: false, message: "error in server" });
  }
};
