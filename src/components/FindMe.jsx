// import React from 'react'
import { socials } from "../Data"

function FindMe() {
    return (
        <div className="w-full flex items-center justify-center flex-col">

            <div className="flex items-center justify-center my-10" id='work'>
                <div className="border-t border-gray-800 flex-grow"></div>
                <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">You can find me in</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className=" w-full grid grid-cols-2 sm:grid-cols-3  gap-4 p-4">
                {socials.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="group bg-gray-100 flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300"
                        />
                        <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold group-hover:text-blue-500">
                            {item.name}
                        </p>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default FindMe