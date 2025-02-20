import UserImg from '../assets/user.jpg';

function Hero() {
    return (
        <div id='hero' className="hero w-full bg-gray-100 text-gray-800 rounded flex flex-col-reverse items-center justify-between p-6 md:flex-row dark:bg-gray-600 dark:text-white gap-6 my-5">
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-bold text-center">Hi, I'm Muhammadali, <br /> a Web Developer</h1>
                <p className="text-lg text-center mt-4">I specialize in building responsive and interactive websites using modern frameworks like React and Node.js.</p>
            </div>
            <img src={UserImg} alt="user img" className="w-[60%] mx-auto md:w-1/3 rounded-full" />
        </div>
    );
}

export default Hero;
