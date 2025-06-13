import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="text-center space-y-8 relative">
        {/* Logo and Title with Animation */}
        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold">
            <span className="inline-block animate-[slideIn_0.5s_ease-out]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-gradient-x">
                Snack
              </span>
            </span>
            <span className="inline-block animate-[slideIn_0.5s_ease-out]" style={{ animationDelay: '0.2s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 animate-gradient-x">
                Dash
              </span>
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium tracking-wide animate-[fadeIn_0.5s_ease-out]" style={{ animationDelay: '0.4s' }}>
            Food Delivery
          </p>
        </div>

        {/* Animated Food Icons */}
        <div className="relative w-80 h-80 mx-auto perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Pizza Slice */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-[float3D_6s_cubic-bezier(0.4,0,0.2,1)_infinite]">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🍕</div>
            </div>
            {/* Burger */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-[float3D_7s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🍔</div>
            </div>
            {/* Fries */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-[float3D_5.5s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🍟</div>
            </div>
            {/* Ice Cream */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 animate-[float3D_6.5s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🍦</div>
            </div>
            {/* Taco */}
            <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 animate-[float3D_5.8s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🌮</div>
            </div>
            {/* Sushi */}
            <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 animate-[float3D_6.2s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🍱</div>
            </div>
            {/* Donut */}
            <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 animate-[float3D_5.7s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🍩</div>
            </div>
            {/* Hot Dog */}
            <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 animate-[float3D_6.8s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ animationDelay: '1.8s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transform-gpu">🌭</div>
            </div>
          </div>
        </div>

        {/* Loading Text with Enhanced Animation */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <p className="text-gray-700 dark:text-gray-200 font-medium animate-[fadeIn_0.5s_ease-out]" style={{ animationDelay: '0.6s' }}>
              Loading your experience
            </p>
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
          
          {/* Progress Bar with Enhanced Animation */}
          <div className="w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-[loading_5s_ease-in-out,gradient_3s_ease_infinite] bg-[length:200%_200%]"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float3D {
            0% { 
              transform: translate3d(0, 0, 0) rotate(0deg);
              opacity: 1;
            }
            20% { 
              transform: translate3d(8px, -12px, 15px) rotate(3deg);
              opacity: 0.9;
            }
            40% { 
              transform: translate3d(-4px, -20px, 30px) rotate(-3deg);
              opacity: 1;
            }
            60% { 
              transform: translate3d(-12px, -12px, 15px) rotate(3deg);
              opacity: 0.9;
            }
            80% { 
              transform: translate3d(-4px, -4px, 5px) rotate(-2deg);
              opacity: 0.95;
            }
            100% { 
              transform: translate3d(0, 0, 0) rotate(0deg);
              opacity: 1;
            }
          }
          @keyframes slideIn {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-gpu {
            transform-style: preserve-3d;
            backface-visibility: hidden;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen; 