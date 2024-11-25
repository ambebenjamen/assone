// pages/index.js
"use client"
import BannerComponent from './components/banner/BannerComponent';
import Card from './components/cards/Card';
import NavbarComponent from './components/navbar/NavbarComponent'; // Corrected the case in NavbarComponent
import Cards from './components/subcard/Cards'; // Ensure 'Cards' is the correct filename and component name
import CustomCard from './components/tcards/CustomCard';

const products = [
  { id: 1, image: '/images/image 1.png', title: 'Product 1', price: 19.99 },
  { id: 2, image: '/images/image 2.png', title: 'Product 2', price: 29.99 },
  { id: 3, image: '/images/image 3.png', title: 'Product 3', price: 39.99 },
  { id: 4, image: '/images/image 4.png', title: 'Product 4', price: 49.99 },
  { id: 5, image: '/images/image 5.png', title: 'Product 5', price: 59.99 },
];

const cardsData = [
  { title: 'mobile', image: '/image2/image1.png' },
  { title: 'cosmetics', image: '/image2/image2.png' },
  { title: 'electronics', image: '/image2/image3.png' },
  { title: 'furniture', image: '/image2/image4.png' },  // Fixed the typo here
  { title: 'watches', image: '/image2/image5.png' },
  { title: 'decor', image: '/image2/image6.png' },
  { title: 'accessories', image: '/image2/ellipse7.png' },
];

export default function Home() {
  return (
    <div className="p-2">
      <NavbarComponent />
      <BannerComponent />
    
      <h1 className="text-3xl font-semibold underline text-gray-800 mb-8">
        grab the best deal on <span className="text-blue-500">smartphones</span>  {/* Updated class name to valid Tailwind */}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Card key={product.id} image={product.image} title={product.title} price={product.price} />
        ))}
      </div>
       <h1 className="text-3xl font-semibold underline text-gray-800 mb-8">shop from <span className="text-blue-500"> top categories</span></h1>
      <div className="flex flex-wrap justify-center mt-8">
        {cardsData.map((card, index) => (
          <Cards key={index} title={card.title} image={card.image} />
        ))}
      </div>
      <CustomCard />
    </div>
  );
}
