import React from 'react'

const Buttons = ({text,className}) => {
  return (
    <div>
      <button className={`${className} px-3 py-2 text-white bg-[#1D1D1D] rounded-2xl  `}>{text}</button>
    </div>
  )
}

export default Buttons
