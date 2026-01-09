import React from 'react'

const Section2 = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="rawcrds flex  gap-5  text-white">

        <div className="div1 bg-[#1E1E1E] w-[50%] h-[57vh] rounded-3xl flex flex-col gap-5 pl-10 ml-5 pt-7 p">

            <div className="one font-bold">ABOUT</div>
            <div className="two text-5xl mt-7">WHERE FASHION MEETS<br/>FREEDOM</div>
            <div className="three flex gap-3 justify-center items-center mx-auto pr-5 pt-8">
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae reprehenderit pariatur vero eveniet corporis enim, odio dolorem voluptatibus vel.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, odit.</p>
                <p className="pb-5.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam commodi sequi, autem reiciendis dignissimos eum delectus odio iure ut ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequuntur.</p>
            </div>
        </div>
        <div className="div2 w-[50%] h-[57vh] rounded-3xl overflow-hidden px-5"><img className=" rounded-3xl object-top" src="./assests/girl3.png" alt="" /></div>

      </div>
    </div>
  )
}

export default Section2
