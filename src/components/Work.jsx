import React from "react";

const Work=()=>{
    return(
        <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                <p className="text-4xl inline font-bold border-pink-600 border-b-4">Work</p>
                <p className="py-6">//Check out some of my recent work</p>
                </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                <div className="">
                    <span></span>
                    <div>
                        <a>
                            <button></button>
                        </a>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Work;