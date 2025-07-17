import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
 
} from "@material-tailwind/react";
import { NavLink } from "react-router";

const Header =()=> {
  const [openNav, setOpenNav] = React.useState(false);
  
   const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
     const handleProgramsMouseEnter = () => {
    setProgramsDropdownOpen(true);
  };

  const handleProgramsMouseLeave = () => {
    setProgramsDropdownOpen(false);
  };
const [staffDropdownOpen, setStaffDropdownOpen] = useState(false);
     const handleStaffMouseEnter = () => {
    setStaffDropdownOpen(true);
  };

  const handleStaffMouseLeave = () => {
    setStaffDropdownOpen(false);
  };
  
 const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
     const handleAboutMouseEnter = () => {
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setAboutDropdownOpen(false);
  };
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
        className="p-1 font-bold text-2xl hover:bg-white hover:text-black hover:p-2"

      >
        <NavLink to='/'>
          Home
        </NavLink>
      </Typography>
      

 <div
        className="relative"
        onMouseEnter={handleProgramsMouseEnter}
        onMouseLeave={handleProgramsMouseLeave}
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className="text-2xl  font-bold mt-1 hover:bg-white hover:text-black cursor-pointer"
        >
          Programs
        </Typography>
        {programsDropdownOpen && (
          <ul className="absolute top-full z-20 mt-2 bg-white text-black shadow-lg p-2 rounded-lg w-40">
            <li className="hover:bg-primary hover:text-gray-400 p-2 rounded">
              <NavLink to="/IT">Diploma in IT</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-gray-400 p-2 rounded">
              <NavLink to="/Vet">Diploma in Animal Science</NavLink>
            </li>
            <li className="hover:bg-white hover:text-gray-400 p-2 rounded">
              <NavLink to="/Plant">Diploma in Plant Science</NavLink>
            </li>
           
          </ul>
        )}
      </div>

     <div
        className="relative"
        onMouseEnter={handleStaffMouseEnter}
        onMouseLeave={handleStaffMouseLeave}
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className="text-2xl  font-bold mt-1 hover:bg-white hover:text-black cursor-pointer"
        >
          Staff Details
        </Typography>
        {staffDropdownOpen && (
          <ul className="absolute top-full z-20 mt-2 bg-white text-black shadow-lg p-2 rounded-lg w-40">
            <li className="hover:bg-primary hover:text-gray-400 p-2 rounded">
              <NavLink to="/Administrative">Administrator</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-gray-400 p-2 rounded">
              <NavLink to="/Instructor">Instructor</NavLink>
            </li>
           
           
          </ul>
        )}
      </div>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl  hover:bg-white hover:text-black hover:p-2"
      >
        <NavLink to='/Admission'>
          Admission Form
        </NavLink>
      </Typography>
       <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-2xl  hover:bg-white hover:text-black hover:p-2"
      >
        <NavLink to='/Notice'>
          Notice
        </NavLink>
      </Typography>
       <Typography
         as="li"
        variant="small"
        color="white"
        className="p-1 font-bold  text-2xl  hover:bg-white hover:text-black hover:p-2"
      >
        <NavLink to='/Syllabus'>
          Syllabus
        </NavLink>
      </Typography>
      <div
        className="relative"
        onMouseEnter={handleAboutMouseEnter}
        onMouseLeave={handleAboutMouseLeave}
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className="text-2xl mt-2 font-bold  hover:bg-white hover:text-black cursor-pointer"
        >
          About
        </Typography>
        {aboutDropdownOpen && (
          <ul className="absolute top-full z-20 mt-2 bg-white text-black shadow-lg p-2 rounded-lg w-40">
            <li className="hover:bg-primary hover:text-gray-400 p-2 rounded">
              <NavLink to="/Principal">Principal Message</NavLink>
            </li>
            <li className="hover:bg-primary hover:text-gray-400 p-2 rounded">
              <NavLink to="/Rpi">Rpi brief</NavLink>
            </li>
            
           
          </ul>
        )}
      </div>
    </ul>
  );
 
  return (
    <div className="sticky top-0">
    
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky mt-6 top-0 bg-blue-900  h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
           
          <div className="flex items-center gap-4">
            <div className="">{navList}</div>
           
            
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