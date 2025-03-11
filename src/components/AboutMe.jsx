import React from "react";

const AboutMe = () => {
    return (
        // <div className="dark:text-white text-gray-700">
        //     <div className="flex items-center justify-center my-10" id='work'>
        //         <div className="border-t border-gray-300 flex-grow"></div>
        //         <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">ABOUT ME</span>
        //         <div className="border-t border-gray-300 flex-grow"></div>
        //     </div>
        //     <section className="dark:text:white p-5">
        //         <p className="text-lg leading-relaxed max-w-[400px] text-center mx-auto">
        //             I am Muhammadali Jamolov, born in 2007, living in Uzbekistan.
        //             <br />
        //             I am proficient in React, JavaScript, HTML, and CSS. Currently, I am learning Node.js.
        //             <br />
        //             My goal is to become senior devoloper.
        //         </p>
        //     </section>
        // </div>

        <div className="w-full bg-[#ebebeb] py-5" >
            <div className="sm:container w-[90%] mx-auto flex flex-col gap-3 text-center">
                <p className="text-2xl font-bold">About Me</p>
                <p>Hello, my name is Jamolov Muhammadali, a Software Engineer from Uzbekistan. <br /> I have experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
                <p>I'm learning Node.js by myself, and I can create authentication <br /> and authorization using the MERN stack.</p>
                <p className="font-bold text-2xl">Education</p>
                <p>I study front-end development at WEB KING. <br /> For back-end development, I learned from YouTube, specifically from Farkhod Dadajanov.</p>
                <p>My front-end teacher is <a className="text-blue-700 underline" href="#">Kadirov Samandar</a>.</p>
                <p className="font-bold text-2xl">Goals</p>
                <p>My goal is to become a highly skilled full-stack developer and work on <br /> innovative projects that make a real impact. I'm always eager to learn <br /> new technologies and improve my problem-solving skills.</p>
            </div>
        </div>
    );
};

export default AboutMe;
