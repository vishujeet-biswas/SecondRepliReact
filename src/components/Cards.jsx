import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Cards = ({ heading, para }) => {
  return (
    <div className="pb-5 pt-5">

      <div className="card p-5 flex flex-wrap flex-col w-[40wh] h-[40vh] bg-[#1E1E1E] border rounded-4xl">
        <div className="card-child flex flex-col pl-6.5 pt-13 gap-4">
            <h2 className="tracking-wide text-white font-medium">{heading}</h2>

        <p className="tracking-wide text-white">{para}</p>

        <div className="flex items-center gap-2 pt-5 cursor-pointer">
          <FaArrowRight className="text-white bg-white/20 text-3xl rotate-320 border border-white/30  bg-black rounded-full p-1.5" />
          <h4 className="text-white font-light  text-md tracking-wide">
            LEARN MORE
          </h4>
        </div>

        </div>
        

      </div>
    </div>
  );
};

export default Cards;
