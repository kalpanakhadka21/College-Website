import React from 'react'
import it from './Images/it.png'
import suceel from './Images/suceel.jpg'

const IT = () => {
  return (
    <div className='mt-4'>
      <div>
        <h1 className='font-bold text-3xl text-center underline p-4 bg-gray-100'>About of Information Technology</h1>
      </div>
      <div>
        <div className='flex p-8 bg-gray-50 text-justify gap-48'>
            <div>
            <img className='h-[300px] w-[300px] rounded-xl mt-10 ml-10' src={it}alt=''/>
            </div>
            <div className='h-96 w-[800px]'>
                <h1 className='font-bold underline text-2xl text-center'>Information Technology</h1>
            <h1 className='text-xl p-8 ml-6'> Information technology is a set of related fields that encompass computer systems, software, programming languages, data and information processing, and storage. IT forms part of information and communications technology. IT makes communication more efficient and allows for remote work IT includes software and hardware that make communication possible on the internet and within organizations</h1>
        </div>
        </div>
      </div>
      <div className='flex gap-40 bg-gray-100'>
        <div className='p-6'>
             <img className='h-[300px] w-[300px] rounded-xl mt-24 ml-10' src={suceel}alt=''/>
             <h1 className='bg-orange-50 text-center rounded-xl font-bold w-80 p-2 ml-6 mt-2 text-xl'>Sushil Kc <br/>
IT Co-ordinator</h1>
        </div>
        <div className='bg-white p-8 mt-6 rounded-xl mb-8 w-[900px]'> 
            <h1 className='font-bold text-center underline text-4xl'>Message From Animal Science Co-ordinator</h1>
            <h1 className='text-justify text-xl mt-5'>Dear Students and Parents,<br/><br/>

Greetings from Rolpa Polytechnic Institute!<br/>

As the IT Coordinator, my goal is to ensure that students have access to the best technology resources for their education. We are committed to providing a smooth digital learning experience through reliable internet access, online learning platforms, and IT support services. For any technical assistance or inquiries, please feel free to contact our IT team. We encourage students to use technology responsibly and make the most of the digital tools available. Thank you for your support. Let’s work together for a bright future!<br/><br/>

Best regards <br/>
Sushil KC<br/>
IT Coordinator<br/>
Rolpa Polytechnic Institute</h1>
        </div>
      </div>
    </div>
  )
}

export default IT
