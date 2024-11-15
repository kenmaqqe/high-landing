import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './../UI/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    toast("That's not work at this time");
  };

  return (
    <nav className="py-4 text-lg">
      <div className='md:hidden flex justify-between items-center px-4 py-3'>
        <a href="#" className="block">
          <img src="./Logo.svg" alt="Logo" className="h-8" />
        </a>
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg shadow-lg z-10 p-4">
            <ul className="space-y-4 px-4">
              <li>
                <a href="#AboutUs" onClick={toggleMenu} className="hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#HowItWorks" onClick={toggleMenu} className="hover:text-gray-700">
                  How it works
                </a>
              </li>
              <li>
                <a href="#Pricing" onClick={toggleMenu} className="hover:text-gray-700">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#Faqs" onClick={toggleMenu} className="hover:text-gray-700">
                  FAQs
                </a>
              </li>
            </ul>
            <div className="mt-4 space-x-4">
              <Button name={"Login"} colorBg={"button-white"} onClick={handleButtonClick} />
              <Button name={"Sign Up"} colorBg={"button-black"} onClick={handleButtonClick} />
            </div>
          </div>
        )}
      </div>
      <div className="md:flex justify-between hidden w-full">
        <div className='w-3/5 lg:w-2/5'>
          <ul className='flex justify-between w-co items-center font-semibold'>
            <li>
              <a href="#!" className="hover:text-gray-700">
                <img src="./Logo.svg" alt="Logo" className='w-12'/>
              </a>
            </li>
            <li>
              <a href="#AboutUs" className="hover:text-gray-700">
                <p>About Us</p>
              </a>
            </li>
            <li>
              <a href="#HowItWorks" className="hover:text-gray-700">
                <p>How it work</p>
              </a>
            </li>
            <li>
              <a href="#Pricing" className="hover:text-gray-700">
                <p>Pricing</p>
              </a>
            </li>
            <li>
              <a href="#Faqs" className="hover:text-gray-700">
                <p>FAQs</p>
              </a>
            </li>
          </ul>
        </div>
        <div className='space-x-4'>
          <Button name={"Login"} colorBg={"button-white"} onClick={handleButtonClick} />
          <Button name={"Sign Up"} colorBg={"button-black"} onClick={handleButtonClick} />
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default BurgerMenu;
