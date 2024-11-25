import React from 'react';
import Image from 'next/image';

const BannerComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 space-y-6 sm:space-y-0 bg-gray-700 rounded-lg shadow-lg">
      
      {/* Left side (Text) */}
      <div className="text-container max-w-lg sm:text-left text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Best Deal Online on Smart Watches</h1>
        <p className="text-lg mb-6 text-gray-700">
          Smart wearable for a better lifestyle
        </p>
        <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
          Up to 80% Off
        </button>
      </div>

      {/* Right side (Image) */}
      <div className="relative w-full bg-gray-600 sm:w-[300px] rounded-md h-[250px] sm:h-[300px]">
        <Image 
          src="/image 2.png" 
          alt="Smart Watch Banner"
          layout="intrinsic" 
          width={600} 
          height={400} 
          objectFit="cover" 
          className="rounded-lg shadow-md overslow-"
        />
      </div>

    </div>
  );
};

export default BannerComponent;
