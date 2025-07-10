import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
 
} from "@material-tailwind/react";
import { NavLink } from "react-router";
import logo from './images/logo.png'

import animation from './images/animation.gif'
const Header =()=> {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="flex  gap-7 mt-4  ml-96">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/Home'>
          Home
        </NavLink>
      </Typography>
      <Typography
         as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/Program'>
         Program
        </NavLink>
      </Typography>
      <Typography
         as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/Staff'>
          Staff Details
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/Admission'>
          Admission Form
        </NavLink>
      </Typography>
       <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/Notice'>
          Notice
        </NavLink>
      </Typography>
       <Typography
         as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/Syllabus'>
          Syllabus
        </NavLink>
      </Typography>
       <Typography
         as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl"
      >
        <NavLink to='/about'>
        About Us
        </NavLink>
      </Typography>
    </ul>
  );
 
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
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll ">
      <Navbar className="sticky mt-6 top-0 bg-blue-900 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
           
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
           
            
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
           
          </div>
        </MobileNav>
      </Navbar>
    </div>
    </div>
  );
}
export default Header