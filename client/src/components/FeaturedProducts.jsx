import { MoveLeft, MoveRight } from "lucide-react";
import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "../context/AppContext";

const FeaturedProducts = () => {
  const { addToCart, addingStates, backendUrl, food_list } =
    useContext(AppContext);
  const sliderRef = useRef(null);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="mt-20 mb-40">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-start p-10 lg:mx-28 "
      >
        <h1
          className=" text-[#f29c52] shadow-lg inline px-5 sm:px-7 py-3 rounded-full font-medium uppercase text-sm font-Outfit 
             "
        >
          Featured Item
        </h1>
        <div className="flex justify-between items-end md:items-baseline  w-full">
          <h1 className=" text-3xl md:text-5xl mt-8 font-Outfit font-bold text-[#492d13]">
            Featured Products
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <MoveLeft
              size={55}
              color="#492d13"
              className="border border-[#fff5ed] p-4 rounded-full
                  hover:bg-[#fff5ed] cursor-pointer transition-all duration-300 "
              onClick={handlePrev}
            />
            <MoveRight
              size={55}
              color="#492d13"
              className="border border-[#fff5ed] p-4 rounded-full cursor-pointer
            hover:bg-[#fff5ed] transition-all duration-300 "
              onClick={handleNext}
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="lg:mx-20 lg:mt-20 px-5 ">
        <div className="justify-center items-center">
          <Slider {...settings} ref={sliderRef}>
            {food_list.slice(5, 15).map((item, i) => (
              <div
                key={i}
                className="bg-[#fef7f1] rounded-lg overflow-hidden group z-10"
              >
                <img
                  src={backendUrl + "/images/" + item.image}
                  alt=""
                  className=""
                />
                <div className="flex flex-col justify-center items-center my-5">
                  <h1 className="text-[#492d13] font-Outfit font-semibold  sm:text-xl text-center">
                    {item.name}
                  </h1>
                  <div className="flex justify-around w-full items-center  my-3 group-hover:opacity-0 group-hover:scale-0 transition-all duration-200 ">
                    <h1 className="text-[#f29c52] text-xs sm:text-[16px]  font-Outfit font-medium">
                      ${item.discount.toFixed(2)} USD{" "}
                    </h1>
                    <h1 className="text-neutral-400 text-xs sm:text-[16px]  font-Outfit font-normal line-through">
                      ${item.price.toFixed(2)} USD
                    </h1>
                  </div>
                  <motion.button
                    className="px-2 py-2 sm:px-4 sm:py-2 absolute opacity-0 scale-0 group-hover:scale-105 group-hover:opacity-100 bottom-5 border rounded-full bg-[#f29c52] md:text-[16px] text-white font-Outfit sm:font-medium
                   hover:bg-[#492d13] transition-all duration-300 "
                    onClick={() => addToCart(item)}
                  >
                    {addingStates[item._id] ? "Adding.." : "Add to cart"}
                  </motion.button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
