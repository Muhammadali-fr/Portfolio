import React, { useState } from 'react'

// assets 
import HandShake from "../assets/handshake.png"

const Parter = () => {

    const [open, setOpen] = useState(false)

    const handleHand = () => {
        setOpen(!open);
    }

    return (
        <div>
            {/* friend ship  */}
            <div onClick={handleHand} title='view partner' className='w-[50px] h-[50px] flex items-center justify-center border border-[#4c4c4c] bg-[#e4e5e2] fixed rounded-full bottom-5 right-5 cursor-pointer' >
                <img className='w-[40px] h-[40px]' src={HandShake} alt="handshake" />
            </div >

            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                    onClick={handleHand}
                ></div>
            )}

            {/* sidebar  */}
            <div className={`flex flex-col transition-all fixed z-20 top-0 w-[300px] h-screen bg-gray-300 ${open ? "right-0" : "right-[-300px]"}`}>
                <img className='absolute bottom-0 right-[-42px]' src="https://silvante.netlify.app/assets/logo_transparent-B2CXiCXi.png" alt="Friend img" />
                <p className='absolute left-0 bottom-20 rotate-90 text-2xl font-semibold'>Khamidov</p>

                <p className='text-center mt-2 text-3xl font-bold'>Partner</p>
                <p className='text-center mt-5'>name :</p>
                <p className='text-center'>Mardonbek Khamidov</p>

                <p className='text-center mt-5'>git hub :</p>
                <a className='mx-auto' href="https://github.com/silvante/"><button className='rounded px-4 py-2 bg-black text-white'>open github</button></a>

                <p className='text-center mt-5'>portfolio :</p>
                <a className='mx-auto' href="https://silvante.netlify.app/"><button className='rounded px-4 py-2 bg-[#12918e] text-white'>open portfolio</button></a>
            </div>
        </div >

    )
}

export default Parter