import Image from 'next/image';
import React from 'react';

const CustomCard = () => (
  <div className="flex mx-auto justify-between gap-2 p-6 rounded-lg shadow-md">
    {/* 1st Outer Div */}
    <div className="flex justify-between items-center mb-4">
      {/* 1st Inner Div */}
      <div className="flex w-full">
        <div className="w-1/2 p-2">
          <h3 className="text-xl font-semibold text-gray-800">iPhone</h3>
          <p className="text-gray-600">This is the left side content of the first section.</p>
        </div>
        <div className="w-1/2 p-2 flex ">
          <div className="relative w-24 h-24">
            <Image src="/images/image 1.png" alt="Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>

    {/* 2nd Outer Div */}
    <div className="flex justify-between items-center mb-4">
      {/* 2nd Inner Div */}
      <div className="flex w-full">
        <div className="w-1/2 p-2">
          <h3 className="text-xl font-semibold text-gray-800">Realme</h3>
          <p className="text-gray-600">This is the left side content of the second section.</p>
        </div>
        <div className="w-1/2 p-2 flex ">
          <div className="relative w-24 h-24">
            <Image src="/images/image 2.png" alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>

    {/* 3rd Outer Div */}
    <div className="flex justify-between items-center">
      {/* 3rd Inner Div */}
      <div className="flex w-full">
        <div className="w-1/2 p-2">
          <h3 className="text-xl font-semibold text-gray-800">Xiaomi</h3>
          <p className="text-gray-600">This is the left side content of the third section.</p>
        </div>
        <div className="w-1/2 p-2 flex ">
          <div className="relative w-24 h-24">
            <Image src="/images/image 3.png" alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CustomCard;
