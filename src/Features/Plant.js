import React from 'react'
import pawan from './Images/pawan.jpg'
import ag from './Images/ag.jpg'

const Plant = () => {
  return (
    <div className='mt-4'>
      <div>
        <h1 className='font-bold text-3xl text-center underline p-4 bg-gray-100'>About of Plant Science</h1>
      </div>
      <div>
        <div className='flex p-8 bg-gray-50 text-justify gap-48'>
            <div>
            <img className='h-[300px] w-[300px] rounded-xl mt-10 ml-10' src={ag}alt=''/>
            </div>
            <div className='h-96 w-[800px]'>
                <h1 className='font-bold underline text-2xl text-center'>Plant Science</h1>
            <h1 className='text-xl p-8 ml-6'> Plant science, also known as botany, is a vibrant field that explores the biology of plants and their interactions with the environment. This discipline encompasses various aspects, including plant physiology, genetics, ecology, taxonomy, and horticulture. Plant scientists investigate how plants grow, develop, and reproduce, focusing on processes such as photosynthesis, nutrient uptake, and response to environmental stressors. Genetics plays a crucial role in plant science, as researchers work on breeding strategies to enhance desirable traits like disease resistance, yield, and climate adaptability.</h1>
        </div>
        </div>
      </div>
      <div className='flex gap-40 bg-gray-100'>
        <div className='p-6'>
             <img className='h-[400px] w-[300px] rounded-xl mt-20 ml-10' src={pawan}alt=''/>
             <h1 className='bg-orange-50 text-center rounded-xl font-bold w-80 p-2 ml-6 mt-2 text-xl'>Pawan Kumar Khadka <br/>
Plant Science Co-ordinator</h1>
        </div>
        <div className='bg-white p-8 mt-6 rounded-xl mb-8 w-[900px]'> 
            <h1 className='font-bold text-center underline text-4xl'>Message From Plant Science Co-ordinator</h1>
            <h1 className='text-justify text-xl mt-5'>Dear Students and Parents,<br/><br/>

I hope this message finds you well. As the Agriculture Coordinator, I would like to take a moment to share the exciting opportunities available in our agricultural program. Agriculture plays a vital role in our communities, not just as a career path, but as an essential part of our everyday lives. To the students, I encourage you to explore the many aspects of agriculture, from sustainable farming practices to innovative agricultural technologies. These subjects will not only broaden your knowledge but will also prepare you for a wide range of future opportunities in an industry that is continually evolving. Be curious, engaged, and proactive in your learning journey. We look forward to an exciting year of learning and growth in agriculture, and we are here to support every student in their journey.<br/><br/>

Thank you for your continuous support.<br/><br/>

Warm regards, <br/>
Pawan Kumar Khadka<br/>
Agriculture Coordinator</h1>
        </div>
      </div>
    </div>
  )
}

export default Plant
