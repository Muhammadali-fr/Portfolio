// import React from 'react' 

// data 
import {myWork} from '../Data'

// icons 
import { IoLinkOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


function MyWorks() {

    return (
        <div className='w-full py-5'>
            <div className="flex items-center justify-center my-10" id='work'>
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">SOME OF MY LATEST WORK</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="container mx-auto p-4 md:p-0">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 dark:text-gray-300">
                    {myWork.map((item, index) => (
                        <li
                            className="w-full p-2 border border-gray-500 rounded shadow-lg"
                            key={index}
                        >
                            <img
                                className="w-full rounded border-gray-200 object-cover min-h-[70%]"
                                src={item.image}
                                alt={item.name}
                            />
                            <strong className="block text-xl lg:text-2xl m-3">{item.name}</strong>
                            <div className="m-3 flex items-center justify-between">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={item.netlifyLink}
                                >
                                    <button className="shadow hover:bg-gray-300 py-1 px-3 border flex items-center text-sm md:text-xl gap-2 dark:hover:bg-gray-600">
                                        <IoLinkOutline /> Link
                                    </button>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={item.gitHubLink}
                                >
                                    <button className="shadow hover:bg-gray-300 py-1 px-3 border flex items-center text-sm md:text-xl gap-1 dark:hover:bg-gray-600">
                                        <FiGithub /> GitHub
                                    </button>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default MyWorks