import React from 'react';
import { FaBars } from "react-icons/fa6";

// pages 

// assets 

function MainLayout() {
    return (
        <div className="w-full bg-white dark:bg-gray-900">
            <div className="container mx-auto min-h-screen bg-white dark:bg-gray-900">
                <nav className="w-full mx-auto flex justify-between items-center px-6 py-4 dark:bg-gray-700  shadow-md">

                    <ul className="hidden md:flex space-x-6">
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Home</li>
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">About</li>
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Services</li>
                        <li className="dark:bg-gray-700 dark:text-white text-black py-2 px-5 rounded cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-300 bg-white">Contact</li>
                    </ul>

                    <div className="md:hidden">
                        <p>Muhammadali</p>
                    </div>

                    <div className="md:hidden">
                        <FaBars />
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default MainLayout;
