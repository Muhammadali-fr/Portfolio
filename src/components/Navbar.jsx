import React from 'react'
// icons 
import { FaBars } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Navbar() {
    return (
        <nav id='navbar' className="w-full mx-auto flex justify-between items-center px-6 py-4 dark:bg-gray-800  shadow-md">

            <ul className="hidden md:flex space-x-6">
                <a href="#navbar">
                    <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Home</li>
                </a>
                <a href="#work">
                    <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Work</li>
                </a>
               <a href="#skills">
               <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Skills</li>
               </a>
                <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Contact</li>
            </ul>

            <a className='p-3 text-xl bg-white rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white' href="https://github.com/Muhammadali-fr" target="_blank" rel="noopener noreferrer">
                <FiGithub />
            </a>

            <div className="md:hidden text-xl dark:text-white">
                <p>Muhammadali</p>
            </div>

            <div className="md:hidden dark:text-white cursor-pointer">
                <FaBars />
            </div>
        </nav>
    )
}

export default Navbar