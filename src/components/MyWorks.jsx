// import React from 'react' 

// data 
import { myWork } from '../Data'

// icons 
import { IoLinkOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


function MyWorks() {

    return (
        <div className='w-full bg-[#ebebeb] py-5' id='work'>
            <div className='sm:w-[943px] max-w-[90%]  mx-auto flex flex-col gap-3'>

                <div>
                    <p className='text-center text-2xl font-bold'>Here is my projects </p>
                    <p className='text-center text-gray-700'>This projects created for learn.</p>
                </div>

                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {myWork.map((e, index) => (
                        <li key={index} className='w-full border border-gray-300 bg-white rounded-lg overflow-hidden relative'>
                            {e.creating && <p className='py-0 px-3 bg-black text-white absolute rounded-lg top-2 left-2'>creating...</p>}
                            <img className='w-full h-48 object-cover' src={e.image} alt={e.name} />
                            <div className='p-3 flex flex-col gap-2'>
                                <p className='text-black font-bold'>{e.name}</p>
                                <p className='text-gray-700 h-[70px]'>{e.description}</p>
                                <div className="flex items-center justify-between">
                                    {e.netlifyLink ? (<a
                                        href={e.netlifyLink}
                                    >
                                        <button className="shadow hover:bg-gray-300 py-1 px-3 border flex items-center text-sm md:text-xl gap-2">
                                            <IoLinkOutline /> Link
                                        </button>
                                    </a>) : (<p></p>)}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={e.gitHubLink}
                                    >
                                        <button className="shadow hover:bg-gray-300 py-1 px-3 border flex items-center text-sm md:text-xl gap-1">
                                            <FiGithub /> GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </li>
                    ))
                    }
                </ul >
            </div >
        </div >
    )
}

export default MyWorks