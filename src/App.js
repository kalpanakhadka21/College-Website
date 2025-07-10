import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Routelayout from './ui/Routelayout'
import Program from './Features/Program'
import Staff from './Features/Staff'
import Home from './Features/Home'
import Notice from './Features/Notice'
import Syllabus from './Features/Syllabus'
import About from './Features/About'
import Principal from './Features/Principal'
import IT from './Features/IT'
import Vet from './Features/Vet'
import Plant from './Features/Plant'
import Admission from './Features/Admission'

const router=createBrowserRouter([{
  path:'/',
  element:<Routelayout/>,
  children:[
{path:'home',element:<Home/>},
    {path:'program',element:<Program/>},
    {path:'staff',element:<Staff/>},
      {path:'notice',element:<Notice/>},
       {path:'syllabus',element:<Syllabus/>},
        {path:'about',element:<About/>},
        {path:'principal',element:<Principal/>},
        {path:'it',element:<IT/>},
        {path:'vet',element:<Vet/>},
        {path:'plant',element:<Plant/>},
        {path:'admission',element:<Admission/>}
       
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
