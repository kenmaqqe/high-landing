import React from 'react'
import Logo from '../assets/LogoWhite.svg'
import Button from '../UI/Button'
import Facebook from '../assets/FaceBook.svg'
import X from '../assets/X.svg'
import Google from '../assets/Google.svg'
import Linkedin from '../assets/Linkedin.svg'
import YouTube from '../assets/YouTube.svg'

const Footer = () => {
  const navigation = [
    {
      name: 'About us',
      url: '#AboutUs',
    },
    {
      name: 'How it works',
      url: '#HowItWorks'
    },
    {
      name: 'Pricing',
      url: '#Pricing'
    },
    {
      name: 'FAQs',
      url: '#Faqs'
    }
  ];
  const socials = [
    {
      name: 'Facebook',
      url: Facebook
    },
    {
      name: 'X',
      url: X
    },
    {
      name: 'Google',
      url: Google,
    },
    {
      name: "Linkedin",
      url: Linkedin
    },
    {
      name: 'YouTube',
      url: YouTube
    }
  ]

  return (
    <section>
      <div className='px-4 mx-auto xl:px-20 max-w-[1400px] text-white'>
      <div className='flex w-full justify-between md:flex-row flex-col'>
        <div className='md:w-1/3'>
          <img src={Logo} alt="footer-logo" className='cursor-pointer'/>
          <h2 className="text-wrap text-[52px] font-normal mt-10">Want to recieve our awesome stories?</h2>
          <form action="" className="mt-5">
            <span className="h-fit flex"><input type="email" className="h-[54px] w-36 md:w-[220px] px-3 text-black" placeholder="Enter email"/><Button name={'Subscribe'} colorBg={'button-white'}/></span>
          </form>
        </div>
        <div className='flex md:w-1/3 justify-between md:flex-row flex-col items-center md:items-start'>
          <ul className='space-y-5 my-5'>
            {navigation.map((a,key)=>{
              return (
                <li key={key}><a href={a.url} className='hover:text-gray-500'>{a.name}</a></li>
              )
            })}
          </ul>
          <ul className='space-y-5 my-5'>
            {['Lead generation','Customer engagement','Customer support','Help Center Articles','Outbound Messages'].map((a,key)=>{
              return (
                <li className='hover:text-gray-500 cursor-pointer' key={key}>{a}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='flex justify-between mt-5 mb-5 md:flex-row flex-col-reverse items-center'>
        <div><h3>© Created by <a href='https://www.linkedin.com/in/kenmaqqe/' target='_blank'>Kenmaqqe</a>, </h3><h3>All rights reserved.</h3></div>
        <div>
          <span className='flex space-x-4 my-5'>
            {socials.map((a,key)=>{
              return (
                <img src={a.url} alt={a.name} key={key} className='cursor-pointer'/>
              )
            })}
          </span>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Footer