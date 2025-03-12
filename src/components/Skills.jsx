// data 
import { skills } from "../Data";

const Skills = () => {
    return (
        <div id="skills" className="sm:w-[943px] max-w-[90%] mx-auto flex flex-col gap-5">
            <p className="text-center text-2xl font-bold">Skills </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:p-0">
                {skills.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer mx-auto flex flex-col "
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-25 h-20 mx-auto "
                        />
                        <strong className="text-center">
                            {item.name}
                        </strong>
                        {item.learning && (<p className="text-white bg-gray-700 rounded-3xl text-center px-5">learning...</p>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
