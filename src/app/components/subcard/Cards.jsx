import Image from 'next/image';
import React from 'react';

const Cards = ({ title, image }) => (
  <div className="flex flex-col items-center p-2 m-2 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
    {/* Image with Tailwind classes */}
    <div className="relative w-40 h-40 mb-4">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800">{title}</h3>
  </div>
);

export default Cards;
