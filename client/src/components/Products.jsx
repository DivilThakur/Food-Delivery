import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { addToCart, addingStates, food_list, backendUrl } =
    useContext(AppContext);

  return (
    <div className="min-h-screen bg-white mb-20 relative">
      <img
        src={assets.absolute1}
        alt=""
        className="absolute -top-12 -left-7 lg:top-0 lg:left-0  z-0"
      />
      <img
        src={assets.absolute2}
        alt=""
        className="absolute  bottom-0 right-0 "
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col justify-center items-center lg:space-y-5 mt-12 sm:mt-8 lg:pt-20"
      >
        <h1
          className="font-Outfit font-semibold tracking-wide text-[#f29c52] bg-white
              px-7 py-3 rounded-full text-sm shadow-lg uppercase
            "
        >
          Latest Products
        </h1>
        <p className="font-Outfit font-bold text-2xl sm:text-4xl md:text-5xl text-[#492d13]">
          Delicious Meals Delivered
        </p>
      </motion.div>
      <div className="grid grid-cols-2 z-10 sm:grid-cols-3 lg:grid-cols-4 p-10 gap-10 xl:mx-40 sm:mt-5 lg:mt-14">
        {food_list.slice(0, 8).map((item) => (
          <motion.div
            key={item._id}
            className="bg-[#fef7f1] rounded-lg overflow-hidden z-10 group"
            initial={{ opacity: 0, y: 80 }}
            whileHover={{
              boxShadow: "4px 4px 10px rgba(242 ,156 ,82,0.3)",
              scale: 1.05,
            }}
            transition={{ duration: 0.4 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={backendUrl + "/images/" + item.image}
              alt=""
              className=""
            />
            <div className="flex flex-col justify-center items-center my-3 relative ">
              <h1 className="text-[#492d13] font-Outfit font-semibold  sm:text-xl text-center">
                {item.name}
              </h1>
              <div className="flex justify-around w-full items-center mt-7 my-3 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300">
                <h1 className="text-[#f29c52] text-xs sm:text-[16px]  font-Outfit font-medium">
                  ${item.discount.toFixed(2)} USD
                </h1>
                <h1 className="text-neutral-400 text-xs sm:text-[16px]  font-Outfit font-normal line-through">
                  ${item.price.toFixed(2)} USD
                </h1>
              </div>
              <motion.button
                className="px-2 py-2 mt-4 sm:px-4 sm:py-2 opacity-0 scale-0 top-6 absolute group-hover:scale-105 group-hover:opacity-100  border rounded-full bg-[#f29c52] md:text-[16px] text-white font-Outfit sm:font-medium
                        hover:bg-[#492d13] transition-all duration-300
                    "
                onClick={() => addToCart(item)}
              >
                {addingStates[item._id] ? "Adding.." : "Add to cart"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
