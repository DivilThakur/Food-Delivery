import { Search } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { food_list } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Foods = () => {
  const footItemsRef = useRef(null);
  const { addToCart, addingStates, food_list, backendUrl } =
    useContext(AppContext);

  const { displayFood, categorise, category } = useContext(AppContext);

  const [currPage, setCurrPage] = useState(1);
  const [rowsPerPage] = useState(9);

  const handleNextCLick = () => {
    setCurrPage((prev) => Math.min(prev + 1, totalPages));
    scrollToFootItems();
  };

  const handlePrevClick = () => {
    setCurrPage((prev) => Math.max(prev - 1, 1));
    scrollToFootItems();
  };

  const scrollToFootItems = () => {
    if (footItemsRef.current) {
      footItemsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const indexOfLastItem = currPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currItem =
    displayFood && displayFood.length > 0
      ? displayFood.slice(indexOfFirstItem, indexOfLastItem)
      : [];
  const totalPages = displayFood
    ? Math.ceil(displayFood.length / rowsPerPage)
    : 0;

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row my-32">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" p-6 md:p-10 space-y-10 flex flex-col items-center"
      >
        <div className="flex items-center p-3 rounded-lg border-2 border-[#fff5ed]">
          <input
            type="text"
            placeholder="search here..."
            className="text-lg border-none outline-none font-normal font-Outfit p-1 "
          />
          <Search color="#f29c52" />
        </div>
        <div>
          <select
            name=""
            id=""
            className="border-2 p-4 outline-none w-full rounded-lg border-[#fff5ed]
                font-Outfit font-normal text-lg text-neutral-500 "
          >
            <option value="">Default Sorting</option>
            <option value="">Sort by Popularity</option>
            <option value="">Price : Low to High</option>
            <option value="">Price : High to Low</option>
          </select>
        </div>

        {/* category  */}
        <div className=" mx-auto space-y-10  w-full">
          <h1 className="text-2xl font-Outfit font-bold text-center ">
            Pick Category
          </h1>
          <div className="grid grid-cols-2 gap-5 ">
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "All"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("All")}
            >
              All
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Rolls"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Rolls")}
            >
              Rolls
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Deserts"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Deserts")}
            >
              Deserts
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Sandwich"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Sandwich")}
            >
              Sandwich
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Cake"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Cake")}
            >
              Cake
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Pure Veg"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Pure Veg")}
            >
              Pure Veg
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Salad"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Salad")}
            >
              Salad
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Pasta"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              } hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Pasta")}
            >
              Pasta
            </h1>
            <h1
              className={`border-2 p-2 text-center text-base font-Outfit font-normal text-neutral-500 cursor-pointer rounded-lg ${
                category === "Noodles"
                  ? "bg-[#f29c52] text-white "
                  : "bg-transparent"
              }hover:bg-[#f29c52] transition-all duration-200 border-[#fff5ed] hover:text-white `}
              onClick={() => categorise("Noodles")}
            >
              Noodles
            </h1>
          </div>
        </div>

        {/* show foods  */}
      </motion.div>
      <div className="" id="foot-items" ref={footItemsRef}>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 p-4 xl:p-10 gap-10 xl:mx-20">
          {currItem && currItem.length > 0 && currItem.map((item) => (
            item && (
              <motion.div
                key={item._id}
                className="bg-[#fef7f1] rounded-lg overflow-hidden z-10 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ boxShadow: "4px 4px 10px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.4 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <img
                  src={item?.image || ''}
                  alt={item?.name || 'Product'}
                  className=""
                  width={360}
                  height={280}
                />
                <div className="flex flex-col justify-center items-center my-5">
                  <h1 className="text-[#492d13] font-Outfit font-semibold text-sm sm:text-xl text-center">
                    {item?.name || 'Product Name'}
                  </h1>
                  <div className="flex justify-around w-full group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 items-center mt-5">
                    <h1 className="text-[#f29c52] text-xs sm:text-[16px] font-Outfit font-medium">
                      ${(item?.discount || 0).toFixed(2)} USD
                    </h1>
                    <h1 className="text-neutral-400 text-xs sm:text-[16px] font-Outfit font-normal line-through">
                      ${(item?.price || 0).toFixed(2)} USD
                    </h1>
                  </div>
                  <button
                    className="px-1 py-1 text-xs sm:px-4 sm:text-lg absolute bottom-4 sm:bottom-7 sm:py-2 opacity-0 group-hover:opacity-100 group-hover:scale-105 border rounded-full bg-[#f29c52] md:text-[16px] text-white font-Outfit sm:font-medium hover:bg-[#492d13] transition-all duration-200 border-[#fff5ed] delay-[50ms]"
                    onClick={() => item?._id && addToCart(item)}
                  >
                    {item?._id && addingStates[item._id] ? "Adding.." : "Add to cart"}
                  </button>
                </div>
              </motion.div>
            )
          ))}
        </div>
        <div className=" flex items-center justify-center gap-10 my-5">
          <button
            className={`px-6 py-3 font-Outfit font-medium  rounded-full ${
              currPage === 1
                ? "bg-[#492d13] text-white"
                : " bg-[#fff5ed] text-[#492d13] hover:bg-[#f29c52] hover:text-white transition-all duration-200 border-[#fff5ed] shadow-lg "
            } `}
            disabled={currPage === 1}
            onClick={handlePrevClick}
          >
            {" "}
            Prev
          </button>

          <button
            className={`px-6 py-3 font-Outfit font-medium text-[#492d13] ${
              currPage === totalPages
                ? "bg-[#492d13] text-white"
                : "bg-[#fff5ed]  hover:bg-[#f29c52] hover:text-white transition-all duration-200 border-[#fff5ed] shadow-lg"
            } rounded-full `}
            disabled={currPage === totalPages}
            onClick={handleNextCLick}
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
