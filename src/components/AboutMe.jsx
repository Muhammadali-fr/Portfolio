import React from "react";

const AboutMe = () => {
    return (
        <div className="w-full bg-[#ebebeb] py-5" >
            <div className="sm:w-[943px] max-w-[90%] mx-auto flex flex-col gap-3 text-center">
                <p className="text-2xl font-bold">About Me</p>
                <p>Hello, my name is Jamolov Muhammadali, a Software Engineer from Uzbekistan. <br /> I have experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
                <p>I'm learning Node.js by myself, and I can create authentication <br /> and authorization using the MERN stack.</p>
                <p className="font-bold text-2xl">Education</p>
                <p>I study front-end development at IT center. <br /> For back-end development, I learned from YouTube, specifically from <a className="text-blue-700 underline" href="#">Farkhod Dadajanov</a> .</p>
                <p>My front-end teacher is <a className="text-blue-700 underline" href="#">Kadirov Samandar</a>.</p>
                <p className="font-bold text-2xl">Goals</p>
                <p>My goal is to become a highly skilled full-stack developer and work on <br /> innovative projects that make a real impact. I'm always eager to learn <br /> new technologies and improve my problem-solving skills.</p>
            </div>
        </div>
    );
};

export default AboutMe;
