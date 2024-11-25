import { FiAlignRight, FiAlignJustify, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';

const NavbarComponent = () => {
  return (
    <div>
    <nav className="bg-black text-white p-4">
      {/* Main Navbar Container */}
      <div className="container mx-auto flex items-center  justify-between">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <FiAlignRight size={24} />
          <Image src="/image.png" alt="logo" width={70} height={70} />
        </Link>

        {/* Center: Search Bar */}
        <div className="flex items-center space-x-2 bg-slate-600 rounded-full px-4 py-2 max-w-xs w-full">
          <FiAlignJustify size={20} color="red" />
          <input
            type="text"
            placeholder="Search, groceries, and more"
            className="w-full bg-transparent outline-none text-black placeholder-gray-500"
          />
        </div>

        {/* Right side: User and Cart */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiUser size={24} />
            <p>Sign Up / Sign In</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiShoppingCart size={24} />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </nav>
    <div className="flex justify-between p-3">
      <ul className="flex justify-between items-center rounded-md gap-8">
      <li className="rounded-xl p-3 bg-blue-800">groceries</li>
      <li className="rounded-md p-3 ">premium fruits</li>
      <li className="rounded-md p-3 ">home & kitchen</li>
      <li className="rounded-md p-3 ">fashion</li>
      <li className="rounded-md p-3 ">electronics</li>
      <li className="rounded-md p-3 ">beauty</li>
      <li className="rounded-md p-3 ">home improvement</li>
      <li className="rounded-md p-3 ">sports,toys & luggage</li>
      </ul>
    </div>
    </div>
  );
};

export default NavbarComponent;
