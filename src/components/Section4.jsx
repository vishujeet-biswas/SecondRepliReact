import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Section4 = () => {
  return (
    <div className="pt-10 pb-10 px-5 ">
      <div className="section3 gap-2 flex flex">
      
              <div className="img flex flex-col gap-5  w-[50%] h-[60vh] rounded-3xl overflow-hidden px-5">
      
                <div className="one relative flex flex-col p-7 text-white tracking-wide bg-[#1E1E1E] w-full h-[50%] rounded-3xl">
                  <h4 className="text-white font-light text-md tracking-wide pt-3">INDEPENDENT DESGNERS</h4>
                  <h6 className="pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    alias, temporibus tenetur ipsam mollitia quas neque repudiandae
                    corporis dolores rerum architecto ab eum obcaecati?
                  </h6>
      
                  <div className="sub-ele absolute bottom-5 right-7">
                    <div className="flex items-center gap-2 pt-5 cursor-pointer">
                      <FaArrowRight className="text-white bg-white/20 text-3xl rotate-320 border border-white/30  bg-black rounded-full p-1.5" />
                      <h4 className="text-white font-light  text-md tracking-wide">
                        EXPLORE
                      </h4>
                    </div>
                  </div>
      
                  </div>
      
                <div className="two bg-[#1E1E1E] w-full h-[50%] rounded-3xl">
                   <div className="one relative flex flex-col p-7 text-white tracking-wide bg-[#1E1E1E] w-full h-full rounded-3xl">
                  <h4 className="text-white font-light text-md tracking-wide pt-3">INDEPENDENT DESGNERS</h4>
                  <h6 className="pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    alias, temporibus tenetur ipsam mollitia quas neque repudiandae
                    corporis dolores rerum architecto ab eum obcaecati?
                  </h6>
      
                  <div className="sub-ele absolute bottom-5 right-7">
                    <div className="flex items-center gap-2 pt-5 cursor-pointer">
                      <FaArrowRight className="text-white bg-white/20 text-3xl rotate-320 border border-white/30  bg-black rounded-full p-1.5" />
                      <h4 className="text-white font-light  text-md tracking-wide">
                        EXPLORE
                      </h4>
                    </div>
                  </div>
      
                  </div>
      
                </div>
              </div>

              <div className="img w-[50%] h-[60vh] rounded-3xl overflow-hidden px-5">
                <img
                  className=" rounded-4xl object-top"
                  src="./assests/girllast.png"
                  alt=""
                />
              </div>
            </div>
    </div>
  )
}

export default Section4
