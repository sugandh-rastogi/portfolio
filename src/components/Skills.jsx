import React from "react";
import SkillIcons from "./SkillIcons";


const Skills=()=>{
    return(
        <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline font-bold border-pink-600 border-b-4">Skills</p>
                    <p className="py-4">//These are the tecnologies I have worked with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                    <SkillIcons name="HTML"></SkillIcons>
                    <SkillIcons name="CSS"></SkillIcons>
                    <SkillIcons name="Javascript"></SkillIcons>
                    <SkillIcons name="React"></SkillIcons>
                    <SkillIcons name="MongoDB"></SkillIcons> 
                    <SkillIcons name="Express.js"></SkillIcons>
                </div>
            </div>
        </div>
    );
}

export default Skills;
