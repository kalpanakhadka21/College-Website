import React from 'react'
import hostel1 from './Images/hostel1.jpg'

const Rpi = () => {
  return (
    <div>
        <div className='flex space-x-32 p-10 bg-gray-100'>
       
        <div>
 <h1 className='font-bold text-4xl text-center underline'>About us</h1>
 <h1 className='mt-4 text-xl text-justify'>The Council for Technical Education and Vocational Training (CTEVT) was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal. It is mandated to produce basic,middle, and higher level technical workforce essential for the country's development. The Council for Technical Education and Vocational Training was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal.

</h1>
<h1 className=' text-xl text-justify'>The Rolpa Polytechnic Institute (RPI) college was established in 2017.It developed for the students skills standards, skill testing, quality assurance and providing trainings. The Rolpa Polytechnic Institute (RPI) college was established in 2017.It developed for the students skills standards, skill testing, quality assurance and providing trainings.</h1>

        </div>
        <div className='h-[900] w-[900] '>
          <img className ='rounded-xl mt-10' src={hostel1} alt='about us'/>
        </div>
        
      </div>
    </div>
  )
}

export default Rpi
