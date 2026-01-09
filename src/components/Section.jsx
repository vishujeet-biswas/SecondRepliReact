import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Section = () => {
  return (
    <div className="">
      <div className="section ">
        <div className="img relative w-full overflow-hidden px-3 pt-5">
            <img className="w-full  h-[100vh] rounded-2xl" src="../assests/girl2.png" alt="" />
            <div className="text-con text-9xl absolute top-80 left-25 flex flex-col">
                    <div className="text1  text-white tracking-wider">DESIGN</div>
                    <div className="text2 text-white tracking-wider"><h1 className="pl-35 ">& FREEDOM</h1><br /></div>
            </div>
            <p className="text-white font-light text-xl tracking-wider absolute bottom-22 left-62">Explore independent Style by Embracing Uniqueness <br />with Our Exclusive Designer Appare!</p>
           
            <div className="btn absolute bottom-33 right-18">
            <div className="flex items-center gap-2 cursor-pointer">    
                <FaArrowRight className="text-white bg-white/20 text-3xl rotate-90 border border-white/30  bg-black rounded-full p-2 " />
                <h4 className="text-white font-light  text-md tracking-wide">LEARN MORE</h4>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Section
