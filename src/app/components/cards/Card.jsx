import Image from 'next/image';

const Card = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl text-gray-600">${price}</p>
      </div>
    </div>
  );
};

export default Card;
