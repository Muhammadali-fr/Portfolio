import React from 'react';
import { FaBars } from "react-icons/fa6";
import Hero from '../components/Hero';
import { FiGithub } from "react-icons/fi";

// pages 

// assets 

function MainLayout() {
    return (
        <div className="w-full bg-white dark:bg-gray-900">
            <div className="container mx-auto min-h-screen bg-white dark:bg-gray-900">
                <nav className="w-full mx-auto flex justify-between items-center px-6 py-4 dark:bg-gray-800  shadow-md">

                    <ul className="hidden md:flex space-x-6">
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Home</li>
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">About</li>
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Services</li>
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Contact</li>
                    </ul>
        
                    <a className='p-3 text-xl bg-white rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white' href="https://github.com/Muhammadali-fr"  target="_blank" rel="noopener noreferrer">
                        <FiGithub/>
                    </a>

                    <div className="md:hidden text-xl dark:text-white">
                        <p>Muhammadali</p>
                    </div>

                    <div className="md:hidden dark:text-white cursor-pointer">
                        <FaBars />
                    </div>
                </nav>

                <Hero/>
            </div>
        </div>
    );
}

export default MainLayout;
