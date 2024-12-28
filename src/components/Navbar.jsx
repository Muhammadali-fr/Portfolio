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
            <nav
                id="navbar"
                className="w-full flex justify-between items-center px-6 py-4 dark:bg-gray-800 shadow-md"
            >
                <ul className="hidden md:flex space-x-6">
                    <a href="#navbar">
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">
                            Home
                        </li>
                    </a>
                    <a href="#work">
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">
                            Work
                        </li>
                    </a>
                    <a href="#skills">
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">
                            Skills
                        </li>
                    </a>
                    <a href="#contact">
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">
                            Contact
                        </li>
                    </a>
                </ul>

                <a
                    className="p-3 text-xl bg-white rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
                    href="https://github.com/Muhammadali-fr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiGithub />
                </a>
                <p className="md:hidden dark:text-white">Muhammadali</p>

                <button
                    className="md:hidden text-3xl dark:text-white"
                    onClick={handleToggle}
                    aria-expanded={showSidebar}
                    aria-label="Toggle navigation"
                >
                    {showSidebar ? <IoIosClose className="text-3xl" /> : <FaBars className="text-base" />}
                </button>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transition-transform transform ${showSidebar ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="h-screen dark:bg-black dark:text-white p-6 flex flex-col justify-between shadow-lg">
                    <div>
                        <div className="text-center">
                            <p className="text-xl font-bold">Jamolov Muhammadali</p>
                            <p className="text-sm text-gray-400 mt-2">
                                {myAge} years old.
                            </p>
                        </div>
                        <hr className="my-6 border-gray-700" />

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#navbar"
                                    onClick={closeSidebar}
                                    className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    onClick={closeSidebar}
                                    className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    onClick={closeSidebar}
                                    className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={closeSidebar}
                                    className="block py-3 px-4 rounded-lg text-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <a
                            href="https://github.com/Muhammadali-fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-blue-600 text-white py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition-all duration-300"
                        >
                            Open my GitHub
                        </a>
                    </div>
                </div>
            </div>

            {showSidebar && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                    onClick={handleToggle}
                ></div>
            )}
        </>
    );
}

export default Navbar;

