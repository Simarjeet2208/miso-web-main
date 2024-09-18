import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='w-full bg-white mx-auto text-purple-400 px-4 py-3 flex items-center gap-20'>
        <div className='l-shape-border px-2 h-[100%] flex items-center border border-transparent cursor-pointer duration-100'>
          <img className='w-24 mt-2' src='./images/Logo.png' alt="logo" />
        </div>

        <div className="relative group l-shape-border border border-transparent hover:border-x-purple-500 cursor-pointer duration-100 overflow-visible">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Protest Guerrilla' }}>PERSONALIZED GIFTS</h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <ul className="p-4 position:relative">
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Custom Mugs</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Personalized Frames</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Nameplates</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Star Maps</li>
            </ul>
          </div>
        </div>

        <div className="relative group l-shape-border border border-transparent hover:border-x-purple-500 cursor-pointer duration-100 overflow-visible">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Protest Guerrilla' }}>WOODEN ENGRAVED ITEMS</h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <ul className="p-4">
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Templates</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Customizable Keychains</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Engraved Wooden Plaques</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Engraved Wooden Coasters</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Engraved Wooden Boxes</li>
            </ul>
          </div>
        </div>

        <div className="relative group l-shape-border border border-transparent hover:border-x-purple-500 cursor-pointer duration-100 overflow-visible">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Protest Guerrilla' }}>PERSONALIZED GREETING CARDS</h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <ul className="p-4">
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Birthday Cards</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Anniversary Cards</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Wedding Cards</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Festive Cards</li>
              <li className="py-2 px-2 rounded hover:text-purple-500 hover:underline hover:decoration-purple-500">Thank You Cards</li>
            </ul>
          </div>
        </div>

        <div>
          <ShoppingBagIcon />
        </div>

        <div className='flex items-center'>
          <Link to="/blogs">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Blogs
            </button>
          </Link>
          <Link to="/login">
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
