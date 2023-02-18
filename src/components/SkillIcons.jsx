import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Express from "../assets/express-js.png";

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
    else if(props.name==="MongoDB")
        icon=Mongo;
    else if(props.name==="Express.js")
        icon=Express;

    return(
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={icon} alt= {props.name+" icon"}/>
            <p className="my-4 uppercase">{props.name}</p>
        </div>
    );
}

export default SkillIcons;