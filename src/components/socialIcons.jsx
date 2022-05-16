import React from "react";
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";    
const SocialIcons=(props)=>{
    let icon;
    if(props.children==="Linkedin")
        icon=<FaLinkedin size={30}/>
    else if(props.children==="Github")
        icon=<FaGithub size={30}/>
    else if(props.children==="Email")
        icon=<HiOutlineMail size={30}/>
    else if(props.children==="Resume")
        icon=<BsFillPersonLinesFill size={30}/>

    return(
        <li className={'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '+props.color}>
            <a href={props.href} target="_blank" className="flex justify-between items-center w-full text-gray-300 ">
                {props.children} {icon}
            </a>
        </li>
    );
}

export default SocialIcons;