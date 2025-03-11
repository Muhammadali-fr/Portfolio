import MyPic from "../assets/my-pic.jpg"

function Hero() {

    const date = new Date();
    const nowYear = date.getFullYear();
    const myBirth = nowYear - 2007;

    return (
        <div id='hero' className='sm:container w-[90%] mx-auto'>
            <div className='my-5'>
                <p className='text-3xl font-bold'>Jamolov Muhammadali</p>
                <p className='text-sm text-gray-700'>Frontend developer, {myBirth} year old.</p>
            </div>

            <div className='bg-img rounded-lg bg-black items-center justify-between px-10 flex flex-col lg:flex-row py-5 lg:mx-auto'>
                <div>
                    <p className='text-3xl font-bold text-white max-w-[500px] md:text-5xl'>Success is not final, failure is not fatal.</p>
                    <p className="text-white"> - Winston Churchill</p>
                </div>
                <img className="mt-5 lg:m-0 max-w-[500px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full " src={MyPic} alt="my pic" />
            </div>
        </div>
    );
}

export default Hero;