// HamburgerMenu.jsx
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative">
      <button
        className="p-4 focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="space-y-2">
          <span className="block w-9 h-1 bg-gray-800 "></span>
          <span className="block w-9 h-1 bg-gray-800 "></span>
          <span className="block w-9 h-1 bg-gray-800 "></span>
        </div>
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute right-0 fadeOut  mt-2 w-48 bg-[#1F3E97] rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white hover:text-[#1F3E97]">Home</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white hover:text-[#1F3E97]">About</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white hover:text-[#1F3E97]">Services</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white hover:text-[#1F3E97]">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
