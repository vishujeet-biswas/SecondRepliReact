import React from 'react'
import Buttons from './Buttons'
const Navbar = () => {
  return (
    <div className="navbar pt-5">
         <div className="flex justify-between items-center ">

      <div className="h3 pl-4"><h3 className="text-white text-2xl">DVSY</h3></div>
      <div className="navbtn flex justify-around gap-2 pr-4">
        <Buttons text="DESIGNERS"/>
        <Buttons  text="COLLABS"/>
        <Buttons  text="EVENTS"/>
        <Buttons text="BLOGS"/>
        <Buttons  text="CARD"/>
        <button className="px-2 py-1 bg-[#EC6F56] text-black font-medium rounded-lg ">GET IN TOUCH</button>
      </div>

    </div>
    </div>
   
  )
}

export default Navbar
