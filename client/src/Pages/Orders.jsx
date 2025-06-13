import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import DynamicBg from "../components/DynamicBg";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";

const Orders = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [orderData, setOrderData] = useState([]);
  const [isTracking, setIsTracking] = useState(false);

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'prepared':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ready':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/order/getOrders", {
        headers: { token },
      });
      if (response.data.success) {
        setOrderData(response.data.data);
      }
    } catch (error) {
      console.log("error in fetchorderData", error.message);
    }
  };

  const handleTrackOrders = async () => {
    setIsTracking(true);
    try {
      const response = await axios.get(backendUrl + "/api/order/getOrders", {
        headers: { token },
      });
      if (response.data.success) {
        setOrderData(response.data.data);
      }
    } catch (error) {
      console.log("error in tracking orders", error.message);
    } finally {
      setIsTracking(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchOrderData();
  }, [token]);

  return (
    <div>
      <DynamicBg title={"Orders"} />
      <div className="min-h-[50vh] flex flex-col justify-center items-center py-32">
        {orderData.length === 0 ? (
          <div className="text-4xl text-[#492d13] text-center font-Outfit font-semibold">
            No orders yet 😥
          </div>
        ) : (
          <>
            <div className="w-full flex justify-end px-4 md:px-10 lg:px-28 mb-6">
              <button
                onClick={handleTrackOrders}
                disabled={isTracking}
                className="border py-2 px-6 rounded-lg bg-[#f29c52] text-white font-Outfit font-medium
                hover:bg-[#492d13] transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isTracking ? "Updating..." : "Track All Orders"}
              </button>
            </div>
            <div className="mx-2 md:mx-10 lg:mx-28 space-y-10">
              {orderData.map((order, idx) => (
                <div
                  key={idx}
                  className="border-[3px] border-[#fff5ed] p-4 gap-1 xl:gap-10 grid grid-cols-4 lg:grid-cols-7 justify-center items-center space-x-4 xl:space-x-8"
                >
                  <img
                    src={assets.parcelicon}
                    alt=""
                    className="flex w-10 md:w-24"
                  />
                  <div className="col-span-3 lg:col-span-2 font-Outfit font-normal text-[12px] md:text-[16px]">
                    {order?.items?.map((item, i) => {
                      if (!item) return '';
                      if (i === (order.items.length - 1)) {
                        return `${item?.name || 'Unknown'} x ${item?.quantity || 0}`;
                      } else {
                        return ` ${item?.name || 'Unknown'} x ${item?.quantity || 0}, `;
                      }
                    })}
                  </div>
                  <p className="font-Outfit font-medium text-[12px] md:text-[16px] text-center p-1">
                    ${(order?.amount || 0).toFixed(2)}
                  </p>
                  <p className="font-Outfit font-medium text-[12px] md:text-[16px] text-center p-1">
                    Items: {order?.items?.length || 0}
                  </p>
                  <div className="font-Outfit font-medium text-[12px] md:text-[16px] text-center">
                    <span className={`px-3 py-1 rounded-full border ${getStatusStyle(order?.status || '')}`}>
                      {order?.status || 'Unknown'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
