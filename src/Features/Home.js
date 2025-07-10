import React from 'react'
import princi from './Images/princi.jpg'
import Caro from '../Components/Caro'
import { Button } from '@material-tailwind/react'
import vet from './Images/vet.jpg'
import plant from './Images/plant.jpg'
import it from './Images/it.png'
import lab from'./Images/lab.jpg'
import hostel1 from './Images/hostel1.jpg'
import library from './Images/library.jpg'
import tour from './Images/tour.jpg'
import sport from './Images/sport.jpg'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
    <div>
      <Caro/>
      </div>
      
      <div className='bg-brown-50 p-16 flex'>
        <div>
        <img className='h-96 w-80 mt-10 rounded-xl' src={princi} alt='photo'/>
        <h1 className='rounded-xl p-5 w-60 mt-4 ml-4 text-xl font-bold bg-brown-300'>Tej pratap Dubye Principal</h1>
        </div>
        <div className='bg-white rounded-xl w-[700px] p-8  ml-40 '>
          <h2 className='underline text-4xl mt-5 text-center font-bold'>Message From Our Principal</h2>
         <h2 className='mt-5  text-[20px] '> Dear Students, Parents, and Esteemed Stakeholders</h2>

<h2 className='mt-4 text-[20px] text-justify '>It is with great pleasure that I welcome you to Rolpa Poly technic Institute, a prestigious constituent
   institute of the Council for Technical and Vocational Training. Established
    in 2074 BS, our institution is committed to 
    providing high-quality technical cducation and vocational training to the youth of our region and beyond. Located in the hilly arcas, where the majority of the population comes from low-income backgrounds, we understand the importance of accessible, skill-based education that can pave the way for a better future.
</h2>
<div>
  <NavLink to='/principal'>
          <Button className='ml-96 mt-6 bg-yellow-700 rounded-full font-bold w-40'>See more</Button>
        </NavLink>
        </div>
        </div>
        
      </div>
      
        <div>
        <h1 className='text-center underline  text-4xl font-bold mt-7'>Our Program</h1>
      <div className='bg-gray-50 p-16 flex space-x-20 ml-28'>
     
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
          
            <card >
              <img className='rounded-xl w-[250px] h-[200px] ' src={vet} alt=''/>
              <h1 className='font-bold'>Animal Science</h1>
              <NavLink to='/Vet'>
              <Button className='rounded-full '>Know More</Button>
              </NavLink>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
            <card >
              <img className='rounded-xl w-[300px] h-[200px] ' src={plant} alt=''/>
              <h1 className='font-bold'>Plant Science</h1>
              <NavLink to='/Plant'>
              <Button className='rounded-full '>Know More</Button>
              </NavLink> </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
            <card >
              <img className='rounded-xl w-[300px] h-[200px] ' src={it} alt=''/>
              <h1 className='font-bold'>Information Technology</h1>
               <NavLink to='/IT'>
              <Button className='rounded-full '>Know More</Button>
              </NavLink>  </card>
        </div>
      </div>
      </div>
      
       <div className='bg-gray-200 '>
        <h1 className='text-center underline  text-4xl font-bold pt-3'>Areas of Facilities</h1>
      <div className=' p-16 flex space-x-20 '>
     
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
          
            <card >
              <img className='rounded-xl w-[250px] h-[150px] ' src={lab} alt=''/>
              <h1 className='font-bold'>Laboratories</h1>
              <Button className='rounded-full '>See More</Button>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
            <card >
              <img className='rounded-xl w-[300px] h-[150px] ' src={library} alt=''/>
              <h1 className='font-bold'>Library</h1>
              <Button className='rounded-full '>See More</Button>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
            <card >
              <img className='rounded-xl w-[300px] h-[150px] ' src={sport} alt=''/>
              <h1 className='font-bold'>Sport</h1>
              <Button className='rounded-full '>See More</Button>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
            <card >
              <img className='rounded-xl w-[300px] h-[150px] ' src={tour} alt=''/>
              <h1 className='font-bold'>Tour</h1>
              <Button className='rounded-full '>See More</Button>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-7 rounded-xl text-center'>
            <card >
              <img className='rounded-xl w-[300px] h-[150px] ' src={hostel1} alt=''/>
              <h1 className='font-bold'>Girls Hostel</h1>
              <Button className='rounded-full '>See More</Button>
            </card>
        </div>
      </div>
      </div>

      <div className='flex space-x-32 p-10 bg-gray-100'>
       
        <div>
 <h1 className='font-bold text-4xl text-center underline'>About us</h1>
 <h1 className='mt-4 text-xl text-justify'>The Council for Technical Education and Vocational Training (CTEVT) was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal. It is mandated to produce basic,middle, and higher level technical workforce essential for the country's development. The Council for Technical Education and Vocational Training was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal.

</h1>
<div>
  <NavLink to='/about'>
          <Button  className='ml-96 mt-6 bg-yellow-700 rounded-full font-bold w-40'>See more</Button>
          </NavLink>
        </div>
        </div>
        <div className='h-[800] w-[800] '>
          <img src={hostel1} alt='about us'/>
        </div>
        
      </div>
      <div className='bg-gray-200 p-10'>
        <h1 className='font-bold text-4xl text-center underline'>Our Gallery</h1>
        <div className='h-60 w-60 mt-6 ml-3 flex gap-9 '>
<img  className ='rounded-xl'src={hostel1}alt=''/>
<img  className ='rounded-xl'src={hostel1}alt=''/>
   
   <img  className ='rounded-xl'src={hostel1}alt=''/>
   
   <img  className ='rounded-xl'src={hostel1}alt=''/>
   
   <img  className ='rounded-xl'src={hostel1}alt=''/>
   
  
        </div>
        <div>
          <Button className='ml-[650px] mt-6 bg-yellow-700 rounded-full font-bold w-40'>See more</Button>
        </div>
    

      </div>
      
    </div>
  )
}

export default Home
