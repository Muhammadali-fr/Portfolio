import React from "react";

const AboutMe = () => {
    return (
        <div className="dark:text-white text-gray-700">
            <div className="flex items-center justify-center my-10" id='work'>
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">ABOUT ME</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <section className="dark:text:white p-5">
                <p className="text-lg leading-relaxed max-w-[400px] text-center mx-auto">
                I am Muhammadali Jamolov, born in 2007, living in Uzbekistan.
                    <br />
                    I am proficient in React, JavaScript, HTML, and CSS. Currently, I am learning Node.js and Ruby on Rails while exploring C#.
                    <br />
                    My goal is to contribute to digital growth by creating modern and functional web projects.
                </p>
            </section>

        </div>
    );
};

export default AboutMe;
