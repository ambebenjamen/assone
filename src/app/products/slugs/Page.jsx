// 'use client';

// import { IoHeartOutline } from "react-icons/io5";
// import NavbarComponent from '@/src/components/navbar/NavbarComponent';
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { products } from "@/src/utils/data"; // Import products from your data

// export default function ProductPage({ params }) {
//   const { slug } = params; // Get the slug from params dynamically
//   const [mainProduct, setMainProduct] = useState(null); // State for main product
//   const [bigImage, setBigImage] = useState(""); // State for the big image

//   // Use effect to set the main product based on slug when the component mounts
//   useEffect(() => {
//     const foundProduct = products.find(product => product.slug === slug);
//     if (foundProduct) {
//       setMainProduct(foundProduct);
//       setBigImage(foundProduct.images[0]); // Set the default big image
//     }
//   }, [slug]);

//   // If the product is not found, display an error message
//   if (!mainProduct) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="w-full max-w-screen-xl h-full flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-xl">
//         <NavbarComponent />
//         <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
//           {/* Thumbnails Section */}
//           <div className="w-full md:w-1/4 flex flex-col gap-4 items-center">
//             {mainProduct.images.map((image, index) => (
//               <div
//                 key={index}
//                 onMouseOver={() => setBigImage(image)} // Change the main image on hover
//                 onClick={() => setBigImage(image)} // Change the main image on click as well
//                 className="w-24 h-24 cursor-pointer transition-transform transform hover:scale-110 rounded-md overflow-hidden shadow-lg hover:shadow-2xl"
//               >
//                 <Image
//                   src={image}
//                   alt={`Product Image ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="w-full h-full rounded-md object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="w-full md:w-2/4 flex justify-center items-center">
//             <Image
//               src={bigImage}
//               alt="Main Product"
//               width={500}
//               height={500}
//               className="w-full max-w-md rounded-md object-cover shadow-xl"
//             />
//           </div>

//           {/* Product Details Section */}
//           <div className="w-full md:w-1/4 flex flex-col gap-6">
//             <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">{mainProduct?.name}</h1>
//             <p className="text-gray-600 text-lg text-center md:text-left">{mainProduct?.description}</p>
//             <p className="text-xl font-semibold text-gray-900 text-center md:text-left">{mainProduct?.price}</p>

//             <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
//               Add to Cart
//             </button>
//             <button className="flex w-full py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 items-center justify-center">
//               Add to Favorite
//               <IoHeartOutline className="w-5 h-5 ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
