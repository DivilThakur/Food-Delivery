import { MoveLeft, MoveRight } from "lucide-react";
import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "../context/AppContext";

const FeaturedProducts = () => {
  const { addToCart, addingStates, backendUrl, food_list, isLoading } =
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
    dots: true,
    dotsClass: "slick-dots",
    customPaging: function (i) {
      return <div className="w-2 h-2 bg-[#f29c52] rounded-full mt-4"></div>;
    },
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
        breakpoint: 768,
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
    <div className="relative my-20">
      <div className="flex justify-between items-center lg:mx-20 px-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-Outfit font-bold text-[#492d13]">
          Featured Products
        </h1>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 border rounded-full hover:bg-[#f29c52] hover:text-white transition-all duration-200"
          >
            <MoveLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 border rounded-full hover:bg-[#f29c52] hover:text-white transition-all duration-200"
          >
            <MoveRight />
          </button>
        </div>
      </div>
      <div className="lg:mx-20 lg:mt-20 px-5">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-xl text-[#492d13]">Loading...</p>
          </div>
        ) : food_list && food_list.length > 0 ? (
          <div className="featured-products-slider">
            <Slider {...settings} ref={sliderRef}>
              {food_list.slice(5, 15).map((item, i) => (
                <div key={i} className="px-2">
                  <div className="bg-[#fef7f1] rounded-lg overflow-hidden group z-10 h-full flex flex-col">
                    <div className="relative w-full aspect-square">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={360}
                        height={280}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow p-4">
                      <h1 className="text-[#492d13] font-Outfit font-semibold text-base sm:text-lg text-center mb-2">
                        {item.name}
                      </h1>
                      <div className="flex justify-around w-full items-center mb-4 group-hover:opacity-0 group-hover:scale-0 transition-all duration-200">
                        <h1 className="text-[#f29c52] text-sm sm:text-base font-Outfit font-medium">
                          ${item.discount.toFixed(2)} USD
                        </h1>
                        <h1 className="text-neutral-400 text-sm sm:text-base font-Outfit font-normal line-through">
                          ${item.price.toFixed(2)} USD
                        </h1>
                      </div>
                      <button
                        className="w-full px-4 py-2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 border rounded-full bg-[#f29c52] text-sm sm:text-base text-white font-Outfit font-medium hover:bg-[#492d13] transition-all duration-300"
                        onClick={() => addToCart(item)}
                      >
                        {addingStates[item._id] ? "Adding.." : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-xl text-[#492d13]">No products available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
