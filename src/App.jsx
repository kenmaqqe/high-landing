import React from 'react'
import { AboutUs, Faqs, Footer, Header, Hero, HowItWork, Pricing } from './Component'


const App = () => {
  return (
    <>
    <main className='px-4  xl:px-20 max-w-[1400px] mx-auto font-sans'>
      <Header/>
      <Hero/>
      <AboutUs/>
      <HowItWork/>
      <Pricing/>
      <Faqs/>
    </main>
    <footer className='bg-black mt-20 lg:mt-48 pt-5 flex flex-col w-screen'>
      <Footer/>
    </footer>
    </>
  )
}

export default App