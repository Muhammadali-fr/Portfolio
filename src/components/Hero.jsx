import UserImg from '../assets/user.jpg';

function Hero() {
    return (
        <div
            id='hero'
            className="hero w-full bg-gray-100 text-gray-800 rounded-lg flex flex-col-reverse items-center justify-between p-6 md:flex-row dark:bg-gray-600 dark:text-white gap-6 my-5 shadow-lg"
            style={{
                backgroundImage: "url('https://source.unsplash.com/random/1920x1080')", // Replace with your desired background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
                <h1 className="text-4xl font-bold text-center md:text-left">
                    Hi, I'm Muhammadali, <br /> a Web Developer
                </h1>
                <p className="text-lg text-center md:text-left mt-4">
                    I specialize in building responsive and interactive websites using modern frameworks like React and Node.js.
                </p>
                <a
                    href="#portfolio"
                    className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    View My Work
                </a>
            </div>
            <img
                src={UserImg}
                alt="user img"
                className="w-[60%] mx-auto md:w-1/3 rounded-full border-4 border-white shadow-lg"
            />
        </div>
    );
}

export default Hero;