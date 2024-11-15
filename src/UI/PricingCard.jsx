import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PricingCard = ({ price, description, list, theme, buttonTheme }) => {

  const handleButtonClick = () => {
    toast("That's not work at this time");
  };

  return (
    <div className={`${theme} lg:w-[320px] max-w-[330px] lg:h-[650px] flex flex-col p-8  flex-1`}>
      <div className="mb-8">
        <span className="flex">
          <p className="text-xl font-bold pt-6">$</p>
          <h2 className="text-[80px] font-extrabold">{price}</h2>
          <div className='flex items-center'><p className="text-xl ml-2">per/mo</p></div>
        </span>
        <p className="mt-4 text-xl">{description}</p>
      </div>
      <ul className="suare flex-grow mt-10 ml-5 text-lg space-y-4">
        {list.map((item, key) => (
          <li key={key}>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <button className={`w-full h-14 ${buttonTheme}`} onClick={handleButtonClick}>Join</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PricingCard;
