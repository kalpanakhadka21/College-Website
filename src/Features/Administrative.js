import React from 'react'
import tej from './Images/tej.jpg'
import ganj from './Images/ganj.jpg'
import khim from './Images/khim.jpg'
import dharma from './Images/dharma.jpg'
import dharmendra from './Images/dhamendra.jpg'
import susma from './Images/susma.jpg'
import gaurab from './Images/gaurab.jpg'
import lalsari from './Images/lalsari.jpg'
import tham from './Images/tham.jpg'
const Administrative = () => {
  return (
    <div>
        <div> 
            <h1 className='text-4xl text-center font-bold mt-4 underline bg-blue-gray-50 p-4'>Administrative</h1>
      <div className='flex gap-10 grid grid-cols-4'>
      <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={tej} alt=''/>
              <h1 className='font-bold text-xl'>Tej pratap Dubey</h1>
              <h1>Principal</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={ganj} alt=''/>
              <h1 className='font-bold text-xl'>Ganj Bdr Kuwar</h1>
              <h1>Accountant</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={dharmendra} alt=''/>
              <h1 className='font-bold text-xl'>Dharmendra Kawar</h1>
              <h1>Assistant Administration</h1>
            </card>
        </div>
         <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={dharma} alt=''/>
              <h1 className='font-bold text-xl'>Dharmajit Oli</h1>
              <h1>Assistant Administration</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={khim} alt=''/>
              <h1 className='font-bold text-xl'>Khim Bdr Kawar</h1>
              <h1>Assistant Administration</h1>
            </card>
        </div>
        </div>
        </div>
         <div> 
            <h1 className='text-4xl text-center font-bold mt-4 underline bg-blue-gray-50 p-4'>Office Assistants</h1>
      <div className='flex gap-10 grid grid-cols-4'>
      <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={lalsari} alt=''/>
              <h1 className='font-bold text-xl'>Lalsari Bk</h1>
              <h1>Office Assistant</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={gaurab} alt=''/>
              <h1 className='font-bold text-xl'>Gaurab Mahara</h1>
              <h1>Office Assistant</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={susma} alt=''/>
              <h1 className='font-bold text-xl'>Susma Sen</h1>
              <h1>Office Assistant</h1>
            </card>
        </div>
         <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={gaurab} alt=''/>
              <h1 className='font-bold text-xl'>gaurab</h1>
              <h1>Office Assistant</h1>
            </card>
        </div>
        
        </div>
        </div>
         <div> 
            <h1 className='text-4xl text-center font-bold mt-4 underline bg-blue-gray-50 p-4'>Security Guard</h1>
      <div className='flex gap-10 grid grid-cols-4'>
      <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={khim} alt=''/>
              <h1 className='font-bold text-xl'>Tukman Mahara</h1>
              <h1>Security Guard</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={khim} alt=''/>
              <h1 className='font-bold text-xl'>Khim Kuwar</h1>
              <h1>Security Guard</h1>
            </card>
        </div>
        <div className='bg-gray-100 w-[300px] h-[300px] p-11 mt-10 rounded-xl text-center'>
          
            <card >
              <img className='rounded-full w-[250px] h-[200px] ' src={tham} alt=''/>
              <h1 className='font-bold text-xl'>Tham Bdr Sunar</h1>
              <h1>Security Guard</h1>
            </card>
        </div>
         
        
        </div>
        </div>
    </div>
  )
}

export default Administrative
