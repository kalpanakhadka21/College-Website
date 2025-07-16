import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Routelayout from './ui/Routelayout'
// import Program from './Features/Program'
// import Staff from './Features/Staff'
import Home from './Features/Home'
import Notice from './Features/Notice'
import Syllabus from './Features/Syllabus'

import Principal from './Features/Principal'
import IT from './Features/IT'
import Vet from './Features/Vet'
import Plant from './Features/Plant'
import Admission from './Features/Admission'
import Admin from './Features/Admin'
import Administrative from './Features/Administrative'
import Instructor from './Features/Instructor'
import Rpi from './Features/Rpi'


const router=createBrowserRouter([{
  path:'/',
  element:<Routelayout/>,
  children:[

{path:'home',element:<Home/>},
    
   {path:'administrative',element:<Administrative/>},
{path:'instructor',element:<Instructor/>},
{path:'Rpi',element:<Rpi/>},
{path:'Principal',element:<Principal/>},


      {path:'notice',element:<Notice/>},
       {path:'syllabus',element:<Syllabus/>},
        
        {path:'principal',element:<Principal/>},
        {path:'it',element:<IT/>},
        {path:'vet',element:<Vet/>},
        {path:'plant',element:<Plant/>},
        {path:'admission',element:<Admission/>},
        {path:'admin', element:<Admin/>}
       
  ]
}])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
     
    </div>
  )
}

export default App
