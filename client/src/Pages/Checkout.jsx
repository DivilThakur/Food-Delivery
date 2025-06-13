import React, { useContext, useEffect, useState } from "react";
import DynamicBg from "../components/DynamicBg";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    totalAmount,
    totalQuantity,
    cartItems,
    backendUrl,
    token,
    clearCart,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const deliveryFee = 4;
  const finalAmount = totalAmount + deliveryFee;
  useEffect(() => {
    console.log(finalAmount);
  }, [finalAmount]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const simplifiedItems = cartItems?.map((item) => ({
      name: item?.productId?.name || 'Unknown Product',
      price: item?.productId?.discount || 0,
      quantity: item?.quantity || 0,
    })) || [];

    console.log(formData);

    const orderData = {
      items: simplifiedItems,
      amount: finalAmount * 85,
      address: formData,
    };

    try {
      let response = await axios.post(
        backendUrl + "/api/order/placeOrder",
        orderData,
        { headers: { token } }
      );

      if (response.data.success) {
        const razorpayOrder = response.data.order;
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: finalAmount * 85 * 100,
          Currency: "INR",
          order_id: razorpayOrder.id,
          handler: async function (paymentResponse) {
            await verifyPayment(paymentResponse);
          },
          prefill: {
            name: "Divil Thakur", // Replace with actual user's name
            email: "Divil@example.com", // Replace with actual user's email
            contact: "+11 22 33 44 55", // Replace with actual user's contact
          },
          theme: {
            color: "#F37254", // Customize the color if needed
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        console.log("error in handleform submit");
      }
    } catch (error) {
      console.log("errror", error.message);
    }
    setLoading(false);
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const verifyPayment = async (paymentResponse) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/verifyPayment",
        {
          paymentId: paymentResponse.razorpay_payment_id,
          orderId: paymentResponse.razorpay_order_id,
          signature: paymentResponse.razorpay_signature,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Payment Successfull");
        clearCart();
        navigate("/orders");
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Error verifying payment", error);
      alert("Payment verification failed!");
    }
  };

  return (
    <div>
      <DynamicBg title={"Checkout"} />
      <form
        onSubmit={handleFormSubmit}
        className=" flex flex-col md:flex-row justify-around my-20 lg:mx-20 "
      >
        <div className=" w-full p-4  flex flex-col space-y-10">
          <h1 className="text-3xl text-[#492d13] font-Outfit font-medium text-center">
            Delivery Information
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.firstName}
              placeholder="First name"
              name="firstName"
              required
              className="border p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.lastName}
              placeholder="Last name"
              name="lastName"
              required
              className="border p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.email}
              placeholder="Email address"
              name="email"
              required
              className="border col-span-2 p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.street}
              placeholder="Street"
              name="street"
              required
              className="border col-span-2 p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.city}
              placeholder="City"
              name="city"
              required
              className="border p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.state}
              placeholder="State"
              name="state"
              required
              className="border p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.zipCode}
              placeholder="Zip code"
              name="zipCode"
              required
              className="border p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.country}
              placeholder="Country"
              name="country"
              required
              className="border p-2 outline-[#492d13] rounded-lg"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={formData.phone}
              placeholder="Phone"
              name="phone"
              required
              className="border col-span-2 p-2 outline-[#492d13] rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-5 md:px-14 xl:px-28 py-10 space-y-4">
          <h1 className="text-3xl text-[#492d13] font-Outfit font-semibold text-center">
            Cart Totals
          </h1>
          <div className="flex justify-between">
            <p className="text-lg font-Outfit font-normal">Total Items</p>
            <p className="text-lg font-Outfit font-normal">{totalQuantity}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-lg font-Outfit font-normal">Subtotal</p>
            <p className="text-lg font-Outfit font-normal">${totalAmount}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-lg font-Outfit font-normal">Delivery Fee</p>
            <p className="text-lg font-Outfit font-normal">${deliveryFee}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-lg font-Outfit font-semibold text-[#492d13]">
              Total
            </p>
            <p className="text-lg font-Outfit font-semibold text-[#492d13]">
              ${totalAmount + deliveryFee}
            </p>
          </div>
          <div></div>
          <button
            type="submit"
            className="px-6 py-3 mx-auto bg-[#f29c52] rounded-lg text-white font-Outfit font-medium
                    hover:bg-[#492d13] transition-all duration-200 "
          >
            {loading ? "Loading..." : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
