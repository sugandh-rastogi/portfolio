import React from "react";
import SocialIcons from "./socialIcons";
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
const NavBar=()=>{

    const [nav,setNav]=React.useState(false);
    const handleClick=()=>setNav(!nav)
    return(
        <div className="fixed w-full h-[88px] flex  justify-end items-center px-4 bg-[#0a192f] text-gray-300">
            <ul className="hidden md:flex">
                <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
                
            </ul>
         
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={!nav ? "hidden":"absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                    <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                    </li>
                    <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                    </Link>
                    </li>
                    <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                    </li>
                    <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                    </li>
                    
                </ul>

                <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        <SocialIcons color={"bg-blue-600"} href="https://www.linkedin.com/in/sugandh-rastogi-538ba7214/">Linkedin</SocialIcons> 
                        <SocialIcons color={"bg-[#333]"}  href="https://github.com/sugandh-rastogi">Github</SocialIcons> 
                        <SocialIcons color={"bg-[#6fc2b0]"} href="mailto:sugandhrastogi27@gmail.com" >Email</SocialIcons> 
                        <SocialIcons color={"bg-[#565f69]"} href="https://drive.google.com/file/d/1xC4d6F4qwQ54gkNFdbK_pUn5lMaovvhX/view?usp=share_link">Resume</SocialIcons> 
                    </ul>
                </div>
        </div>
    );
}

export default NavBar;