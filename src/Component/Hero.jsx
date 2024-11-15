import React from "react";
import Button from "../UI/Button";
import HeroImg from '../assets/Hero.svg'
import VisaLogo from '../assets/Visa.svg'
import MasterCardLogo from '../assets/MasterCard.svg'
import PayPalLogo from '../assets/PayPal.svg'

const Hero = () => {
  const image = [
    {
      url: VisaLogo,
      name: 'Visa-logo'
    },
    {
      url: MasterCardLogo,
      name: 'MasterCard-logo'
    },
    {
      url: PayPalLogo,
      name: 'PayPal-logo'
    }
  ]
  return (
    <section className="flex lg:mt-20">
      <div className="md:w-2/3 lg:w-1/2">
        <h2 className="text-wrap md:text-7xl text-5xl">Always Track & Analyze Your Business Statistics To Succeed.</h2>
        <p className="text-base">A better way to manage your sales, team, clients & marketing
        — on a single platform. Powerful, affordable & easy.</p>
        <form action="" className="mt-5">
          <span className="h-fit flex"><input type="email" className="h-[54px] w-36 md:w-[220px] px-3" placeholder="Enter email"/><Button name={'Get started'} colorBg={'button-black'}/></span>
        </form>
        <div className="flex">
          {image.map((a,key)=>{
            return (<img src={a.url} alt={a.name} key={key} className="bg-transparent grayscale hover:grayscale-0 w-24 h-26 cursor-pointer"/>)
          })}
        </div>
      </div>
      <div className="hidden md:flex justify-center items-start md:w-2/3 w-1/2">
        <img src={HeroImg} alt="Hero-image" />
      </div>
    </section>
  );
};

export default Hero;
