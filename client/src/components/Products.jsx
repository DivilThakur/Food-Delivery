import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { addToCart, addingStates, backendUrl, food_list, isLoading } =
    useContext(AppContext);

  return (
    <div className="mt-20 mb-40">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-start p-10 lg:mx-28"
      >
        <h1 className="text-[#f29c52] shadow-lg inline px-5 sm:px-7 py-3 rounded-full font-medium uppercase text-sm font-Outfit">
          Popular Item
        </h1>
        <h1 className="text-3xl md:text-5xl mt-8 font-Outfit font-bold text-[#492d13]">
          Popular Products
        </h1>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl text-[#492d13]">Loading...</p>
        </div>
      ) : food_list && food_list.length > 0 ? (
        <div className="grid grid-cols-2 z-10 sm:grid-cols-3 lg:grid-cols-4 p-10 gap-10 xl:mx-40 sm:mt-5 lg:mt-14">
          {food_list.slice(0, 8).map((item) => (
            item && (
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
                <div className="relative w-full aspect-square">
                  <img
                    src={item?.image || ''}
                    alt={item?.name || 'Product'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center my-5">
                  <h1 className="text-[#492d13] font-Outfit font-semibold sm:text-xl text-center">
                    {item?.name || 'Product Name'}
                  </h1>
                  <div className="flex justify-around w-full items-center my-3 group-hover:opacity-0 group-hover:scale-0 transition-all duration-200">
                    <h1 className="text-[#f29c52] text-xs sm:text-[16px] font-Outfit font-medium">
                      ${(item?.discount || 0).toFixed(2)} USD
                    </h1>
                    <h1 className="text-neutral-400 text-xs sm:text-[16px] font-Outfit font-normal line-through">
                      ${(item?.price || 0).toFixed(2)} USD
                    </h1>
                  </div>
                  <motion.button
                    className="px-1 py-1 text-xs sm:px-4 sm:text-lg sm:py-2 absolute opacity-0 scale-0 group-hover:scale-105 group-hover:opacity-100 bottom-4 sm:bottom-8 border rounded-full bg-[#f29c52] md:text-[16px] text-white font-Outfit sm:font-medium hover:bg-[#492d13] transition-all duration-300"
                    onClick={() => item?._id && addToCart(item)}
                  >
                    {item?._id && addingStates[item._id] ? "Adding.." : "Add to cart"}
                  </motion.button>
                </div>
              </motion.div>
            )
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl text-[#492d13]">No products available</p>
        </div>
      )}
    </div>
  );
};

export default Products;
