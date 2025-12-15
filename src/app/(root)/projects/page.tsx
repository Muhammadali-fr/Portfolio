
// array 
import { projects } from "@/src/data/projects";
import ProjectImage from "./components/ImagePreview";

export default function Products() {



    return (
        <section className="c-width grid grid-cols-2 py-3 gap-3">


            {projects.map((project, i) => (
                <div key={i} className="w-full h-[400px] rounded-3xl border c-border-color c-gray">
                    <ProjectImage project={project} />
                    <div className="m-3">
                        <ul className="text-sm flex gap-1">
                            <li className="p-1 bg-[#577399] text-white inline rounded-lg">Front-end</li>
                        </ul>
                        <p className="text-2xl font-semibold">Delizi</p>
                    </div>
                </div>
            ))}

        </section>
    );
};