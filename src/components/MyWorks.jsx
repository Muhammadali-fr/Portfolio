import React from 'react'
import myWork from '../Data'
import { IoLinkOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


function MyWorks() {

    return (
        <div className='w-full py-5'>
            <div className="flex items-center justify-center my-10">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="text-gray-300 text-sm mx-4">SOME OF MY LATEST WORK</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 dark:text-gray-300'>
                {myWork.map((item, index) => (
                    <li className='w-full p-2 border border-gray-500 rounded shadow-lg' key={index}>
                        <img className='w-full rounded border-gray-200' src={item.image} alt={item.image} />
                        <strong className='block text-2xl m-3'>{item.name}</strong>
                        <div className="m-3 flex items-center justify-between">
                            <a target="_blank" rel="noopener noreferrer" href={item.netlifyLink}> <button className='shadow hover:bg-gray-300 py-1 px-5 border flex items-center text-xl gap-2 dark:hover:bg-gray-600'><IoLinkOutline /> link</button></a>
                            <a target="_blank" rel="noopener noreferrer" href={item.gitHubLink}> <button className='shadow hover:bg-gray-300 py-1 px-5 border flex items-center text-xl gap-2 dark:hover:bg-gray-600'><FiGithub />Git hub</button></a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyWorks