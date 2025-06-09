import { Minus, Plus, X } from "lucide-react";
import React, { Profiler, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const {
    cartItems,
    clearCart,
    setCartOpen,
    cartOpen,
    totalAmount,
    setCartItems,
    removeFromCart,
    backendUrl,
    token,
  } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const goToCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  const IncreaseItem = async (product) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/add",
        { productId: product.productId._id },
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData.items);
      }
      console.log(product);
    } catch (error) {
      console.log("error in increaseItem", error.message);
    }
  };

  const DecreaseItem = async (product) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/remove",
        { productId: product.productId._id },
        { headers: { token } }
      );
      console.log(response);
      if (response.data.success) {
        setCartItems(response.data.cartData.items);
      }
    } catch (error) {
      console.log("error in decrease item", error.message);
    }
  };

  return (
    <div
      className="absolute h-screen top-0 bottom-0 right-0 left-0 z-30 backdrop-blur-sm bg-black/80 overflow-hidden flex justify-end 
         transition-transform duration-500 ease-in-out transform "
    >
      <div className=" flex-1" onClick={() => setCartOpen(false)} />
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: cartOpen ? "0" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "tween" }}
        className=" w-full md:w-[50%] xl:w-[30%] bg-white flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <X
            onClick={() => setCartOpen(false)}
            color="#492d13"
            className=" cursor-pointer hover:rotate-12 transition-all duration-150"
          />
          <h1 className="text-2xl font-Outfit font-bold text-[#492d13]">
            Your Cart
          </h1>
          <Trash2
            onClick={() => clearCart()}
            className="cursor-pointer hover:rotate-12 transition-all duration-200"
            color="#492d13"
          />
        </div>
        <div className="flex flex-col flex-grow overflow-y-scroll hideScroll ">
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center  h-full">
              <p className="text-3xl text-[#] font-Outfit font-bold ">
                Cart Is Empty{" "}
              </p>
            </div>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="flex justify-between p-4  ">
                <div className="flex ">
                  <img
                    src={backendUrl + "/images/" + item.productId.image}
                    alt=""
                    className="w-24  sm:w-32 "
                  />
                  <div className="p-2 flex flex-col items-start space-y-1 md:space-y-2 justify-center ">
                    <p className=" text-lg leading-5 md:text-xl font-Outfit font-medium">
                      {item.productId.name}
                    </p>
                    <p className=" text-xs sm:text-[16px] font-Outfit font-normal text-zinc-500">
                      ${item.productId.discount} USD
                    </p>
                    <p
                      className=" text-xs sm:text-[16px] font-Outfit font-normal text-[#ff4c0a] hover:text-[#f29c52] cursor-pointer "
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3 p-2">
                  <Minus
                    className="border p-1 cursor-pointer"
                    onClick={() => DecreaseItem(item)}
                  />
                  <p className=" text-sm sm:text-xl">{item.quantity}</p>
                  <Plus
                    className="border p-1 cursor-pointer"
                    onClick={() => IncreaseItem(item)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t  flex flex-col p-2 space-y-2 ">
          <div className="flex justify-between items-center p-2 px-2">
            <p className="font-Outfit font-semibold text-zinc-500">Subtotal</p>
            <p className="font-Outfit font-medium text-zinc-500">
              $ {totalAmount.toFixed(2)} USD
            </p>
          </div>
          <button
            onClick={() => goToCheckout()}
            disabled={cartItems.length === 0}
            className={`border px-6 py-3 mx-20  text-white font-Outfit font-medium rounded-full
                        ${
                          cartItems.length === 0
                            ? "bg-zinc-500"
                            : "bg-[#f29c52]"
                        } `}
          >
            Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
