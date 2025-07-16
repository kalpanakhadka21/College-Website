import React from 'react'
import logo from './images/logo.png'

import animation from './images/animation.gif'
const Top = () => {
  return (
    <div>
           <div className="flex gap-20">
       
      <div>
        <img className="h-36 w-36- mt-10 ml-44 " src={logo} alt="logo"/>
      </div>
      <div className="text-center ml-36 mt-10 ">
        <h1 className="text-red-600 font-bold ">'सिप हुन्छ हातमा,रोजगारी साथमा'</h1>
        <h1 className="text-blue-400 font-bold ">प्राविधिक शिक्षा तथा व्यवसायिक तालिम परिषद्</h1>
        <h1 className="text-blue-600 font-bold text-3xl">रोल्पा बहुप्राविधिक शिक्षालय</h1>
        <h1 className="text-blue-400 font-bold">रोल्पा न.पा. १- मेवाङ् रोल्पा </h1>
      </div>
      <div>
       <img className="h-36 w-32 ml-40 mt-5" src={animation} alt="flag"/>
      </div>
      </div>
      <div className="bg-pink-50 text-center p-1 mt-6">
        <marquee>ROLPA POLYTECHNIC INSTITUTE ROLPA RURAL MUNICIPALITY -1 MEWANG ROLPA</marquee>
      </div>
    </div>
  )
}

export default Top
