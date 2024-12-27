// data 
import { skills } from "../Data";

const Skills = () => {
    return (

        <div id="skills" className="w-full">
            <div className="flex items-center justify-center my-10" id='work'>
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="dark:text-gray-300 text-gray-700 text-sm mx-4">My Skills</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-0 ">
                {skills.map((item, index) => (
                    <div key={index} className="mx-auto p-4 m-0 bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-48 md:w-56 lg:w-64 xl:w-72">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32  mx-auto mb-4"
                        />
                        <strong className="text-xl font-semibold text-center text-gray-800">{item.name}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
