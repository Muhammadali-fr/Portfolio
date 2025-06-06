import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggle = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    const date = new Date();
    const year = date.getFullYear();
    const myAge = year - 2007;

    return (
        <>
            {/* Navbar */}
            <div className="w-full border-b border-gray-200 sticky top-0 backdrop-blur-lg bg-white/30 z-10">
                <nav className="sm:w-[943px] max-w-[90%]  mx-auto flex justify-between items-center py-2">
                    <ul className="hidden md:flex space-x-6">
                        <a href="#">
                            <li className="text-black font-bold py-1 rounded cursor-pointe">
                                Home
                            </li>
                        </a>
                        <a href="#work">
                            <li className="text-black font-bold py-1 rounded cursor-pointer">
                                Work
                            </li>
                        </a>
                        <a href="#skills">
                            <li className="text-black font-bold py-1 rounded cursor-pointer">
                                Skills
                            </li>
                        </a>
                        <a href="#contact">
                            <li className="text-black font-bold py-1 rounded cursor-pointer">
                                Contact
                            </li>
                        </a>
                    </ul>

                    <a
                        className="p-2 text-xl hover:bg-[#ebebeb] rounded"
                        href="https://github.com/Muhammadali-fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                    </a>
                    <p className="md:hidden">Muhammadali</p>

                    <button
                        className="md:hidden text-3xl"
                        onClick={handleToggle}
                        aria-expanded={showSidebar}
                        aria-label="Toggle navigation"
                    >
                        {showSidebar ? <IoIosClose className="text-3xl" /> : <FaBars className="text-base" />}
                    </button>
                </nav>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform transform ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-screen p-6 flex flex-col justify-between shadow-lg">
                    <div>
                        <div className="text-center">
                            <p className="text-xl font-bold">Jamolov Muhammadali</p>
                            <p className="text-sm text-gray-400 mt-2">{myAge} years old.</p>
                        </div>
                        <hr className="my-6 border-gray-700" />

                        <ul className="space-y-4">
                            <li>
                                <a href="#" onClick={closeSidebar} className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#work" onClick={closeSidebar} className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#skills" onClick={closeSidebar} className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={closeSidebar} className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <a href="https://github.com/Muhammadali-fr" target="_blank" rel="noopener noreferrer" className="block bg-black text-white py-3 px-4 rounded-lg text-center hover:bg-black/90 transition-all duration-300">
                            Open my GitHub
                        </a>
                    </div>
                </div>
            </div>

            {showSidebar && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={handleToggle}></div>
            )}
        </>
    );
}

export default Navbar;
