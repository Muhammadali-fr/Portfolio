import MyPic from "../assets/my-pic.jpg"

function Hero() {

    const date = new Date();
    const nowYear = date.getFullYear();
    const myBirth = nowYear - 2007;

    return (
        <div id='hero' className='container mx-auto '>
            <div className='my-5'>
                <p className='text-3xl font-bold'>Jamolov Muhammadali</p>
                <p className='text-sm text-gray-700'>Frontend developer, {myBirth} year old.</p>
            </div>

            <div className='bg-img rounded-lg bg-black h-96 flex items-center justify-between px-10'>
                <p className='text-5xl font-bold text-white w-[500px]'>Success is not final, failure is not fatal.</p>
                <img className="w-64 h-64 object-cover rounded-full " src={MyPic} alt="my pic" />
            </div>
        </div>
    );
}

export default Hero;