import React from "react";

const ContactForm=()=>{
    return(
    <div name="contact" className="bg-[#0a192f]  w-full h-screen flex  justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/c0061790-0e2e-4bbc-8ab1-40060ed05ea4" className=" flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl inline font-bold border-pink-600 border-b-4 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">//Submit the form below or shoot me an email -sugandhrastogi27@gmail.com</p>
            </div>
            <input type="text" placeholder="Name" name="name" className="bg-[#ccd6f6] p-2"></input>
            <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6]" ></input>
            <textarea name="message" rows="6" placeholder="Message"  className="my-4 p-2 bg-[#ccd6f6]"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-8 mb-4 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
    );
}

export default ContactForm;