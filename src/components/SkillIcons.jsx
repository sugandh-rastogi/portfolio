import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";

const SkillIcons=(props)=>{
    let icon;
    if(props.name==="HTML")
        icon=HTML;
    else if(props.name==="React")
        icon=ReactImg;
    else if(props.name==="Javascript")
        icon=Javascript;
    else if(props.name==="CSS")
        icon=CSS;

    return(
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={icon} alt= {props.name+" icon"}/>
            <p className="my-4 uppercase">{props.name}</p>
        </div>
    );
}

export default SkillIcons;