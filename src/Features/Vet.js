import React from 'react'
import vet from './Images/vet.jpg'
import sanjeev from './Images/sanjeev.jpg'

const Vet = () => {
  return (
    <div className='mt-4'>
      <div>
        <h1 className='font-bold text-3xl text-center underline p-4 bg-gray-100'>About of Animal Science</h1>
      </div>
      <div>
        <div className='flex p-8 bg-gray-50 text-justify gap-48'>
            <div>
            <img className='h-[300px] w-[300px] rounded-xl mt-10 ml-10' src={vet}alt=''/>
            </div>
            <div className='h-96 w-[800px]'>
                <h1 className='font-bold underline text-2xl text-center'>Animal Science</h1>
            <h1 className='text-xl p-8 ml-6'> Animal science is a multidisciplinary field that focuses on the study of animals, addressing various aspects such as their biology, physiology, nutrition, genetics, behavior, and management practices. It encompasses the understanding of how animals function biologically and respond to their environments, as well as the nutritional needs critical for their health and productivity. Key areas include genetics and breeding, which aim to enhance traits like productivity and resistance to diseases, and animal behavior, which examines how animals interact within their social structures and habitats</h1>
        </div>
        </div>
      </div>
      <div className='flex gap-40 bg-gray-100'>
        <div className='p-6'>
             <img className='h-[400px] w-[300px] rounded-xl mt-20 ml-10' src={sanjeev}alt=''/>
             <h1 className='bg-orange-50 text-center rounded-xl font-bold w-80 p-2 ml-6 mt-2 text-xl'>Dr.Sanjeev Acharya <br/> Animal Science Coordinator</h1>
        </div>
        <div className='bg-white p-8 mt-6 rounded-xl mb-8 w-[900px]'> 
            <h1 className='font-bold text-center underline text-4xl'>Message From Animal Science Co-ordinator</h1>
            <h1 className='text-justify text-xl mt-5'>Dear Students, <br/><br/>

Greetings from Rolpa Polytechnic Institute! <br/>
Welcome to the Department of Animal Science! It is my pleasure to introduce you to the field of Animal Science, an essential discipline dedicated to the health and well-being of animals.<br/>
As the veterinary coordinator, my goal is to ensure that students must provide a comprehensive curriculum that combines theoretical knowledge with hands-on clinical training. We have well-equipped labs,clinics,farms and friendly teaching- learning environment with well qualified and supporting teaching staffs for research facilities that help students to gain practical experience. We are committed to excellence in education, research, and clinical practice, ensuring that future veterinarians are well-equipped to care for animals and contribute to public health.<br/><br/>

Best regards,<br/>
Dr.Sanjeev Acharya<br/>
Veterinary Coordinator</h1>
        </div>
      </div>
    </div>
  )
}

export default Vet
