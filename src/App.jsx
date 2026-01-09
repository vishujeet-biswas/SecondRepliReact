import React from 'react'
import Buttons from './components/Buttons'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Cards from './components/Cards'
import Insights from './components/Insights'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'


const App = () => {
  return (
    <div className="bg-[#111] w-full h-full">
      <Navbar />
      <Section />
      <section className="flex gap-4 px-3">
        <Cards heading="INDEPENDENCY" para={`Explore independent Style by Embracing Uniquenes
         with Our Exclusive Designer Appare!`} />
        <Cards heading="UNIQUITY" para="Explore independent Style by Embracing Uniqueness with Our Exclusive Designer Appare!" />
        <Cards heading="QUALITY" para="Explore independent Style by Embracing Uniqueness with Our Exclusive Designer Appare!" />
         <Cards heading="SUSTAINABILITY" para="Explore independent Style by Embracing Uniqueness with Our Exclusive Designer Appare!" />
      </section>

      <section className="flex justify-between px-13">
        <Insights tag="DESIGNERS" num="150+"/>
        <Insights tag="DESIGNERS" num="150+"/>
        <Insights tag="DESIGNERS" num="150+"/>
        <Insights tag="DESIGNERS" num="150+"/>
      </section>
      
      <Section2 />
      <div className="textone pl-14"><h1 className="tracking-wide text-white text-4xl">OUR ADVANTAGES</h1></div>
      <Section3 />
      <Section4 />

    </div>
  )
}

export default App
