import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import { configDotenv } from "dotenv";
import foodRoute from "./routes/foodRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import adminRoute from "./routes/adminRoute.js";
configDotenv();

const PORT = process.env.PORT || 4000;
const app = express();

connectDb();
app.use(cors());
app.use(express.json());

app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/food", foodRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/admin", adminRoute);

app.listen(PORT, () => console.log("Server running on PORT :", PORT));
