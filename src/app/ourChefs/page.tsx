import React from 'react'
import Hero from "./Hero"
import ChefGrid from "./ChefGrid"
 import chef1 from "/Chef1.png";
 import chef2 from "/chef2.png";
import chef3 from "/Cart3.png";
 import chef4 from "/Cart4.png";
  import Image from "next/image"

const OurChefs = () => {
  const chef1 = '/Chef1.png';
const chef2 = '/chef2.png';
  const chef3 = '/Chef3.png';
const chef4 = '/chef4.png';
  return (
    <div>
      <Hero />
      <ChefGrid />

      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src={chef1} alt="" className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src={chef2} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef3} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef4} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
      </section>
    </div>
  )
}

export default OurChefs
