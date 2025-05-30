// import React from 'react'
import { socials } from "../Data"

function FindMe() {
    return (
        <div className="max-w-[90%] sm:w-[943px] flex items-center justify-center flex-col mx-auto pb-5">
            <p className="text-2xl text-center font-bold">Find me</p>
            <div className=" w-full grid grid-cols-2 sm:grid-cols-3  gap-4 py-4">
                {socials.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="group bg-gray-100 flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg transition-shadow duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-16 h-16 mb-3 transition-transform duration-300"
                        />
                        <p className="text-gray-800 text-lg font-semibold group-hover:text-blue-500">
                            {item.name}
                        </p>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default FindMe