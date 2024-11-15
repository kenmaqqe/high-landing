import React from "react";
import Title from "./../UI/Title";
import HowItWorksImg from '../assets/HowItWorks.svg'
import Steps from '../data/howItWorksData'

const HowItWork = () => {
  return (
    <section id="HowItWorks" className="mt-20 lg:mt-48 pt-5 flex flex-col">
      <Title name={"How it works"} />
      <div className="flex">
      <div className="lg:w-1/2">
        <h2 className="text-wrap md:text-7xl text-5xl mt-10">Building the best space for collaboration.</h2>
        <div className="flex justify-center lg:hidden"><img src={HowItWorksImg} alt="How-it-works-section-image" className="h-[400px]"/></div>
        {Steps.map((a,key)=>{
          return(
            <div key={key} className="flex flex-col lg:flex-row my-8 w-full justify-between lg:items-center">
              <div className="w-1/5"><img src={a.img} alt={a.name}/></div>
              <div className="lg:w-4/5">
                <h3 className="text-2xl mb-2 font-bold mt-2">{a.name}</h3>
                <p className="text-lg">{a.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="hidden lg:flex justify-center w-1/2">
        <img src={HowItWorksImg} alt="How-it-works-section-image"/>
      </div>
      </div>
    </section>
  );
};

export default HowItWork;
