import React from "react";
import Title from "../UI/Title";
import PricingImage from "../assets/PricingImage.svg";
import PricingCard from "../UI/PricingCard";
import PricingArray from '../data/pricingCardData'

const Pricing = () => {
  return (
    <section id="Pricing" className="mt-20 lg:mt-48 pt-5 flex flex-col">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-2/3">
          <img src={PricingImage} alt="Pricing-section-image" />
        </div>
        <div className="lg:w-1/3 flex flex-col lg:items-end">
          <Title name={"Pricing"} />
          <h2 className="text-wrap md:text-7xl text-5xl mt-10 lg:text-end">Select a membership level the right price for you.</h2>
          <p className="text-base mt-5 mb-5 lg:text-end">Prices listed in USD. Taxes may apply. By using program you agree to our terms and policies.</p>
        </div>
      </div>
      <div className="flex items-center lg:justify-between lg:flex-row flex-col space-y-5 lg:space-x-5 lg:space-y-0 w-full mt-10">
        {PricingArray.map((a,key)=>{
          return (
            <PricingCard price={a.price} description={a.description} list={a.list} theme={a.theme} buttonTheme={a.buttonTheme} key={key} />
          )
        })}
      </div>
    </section>
  );
};

export default Pricing;
