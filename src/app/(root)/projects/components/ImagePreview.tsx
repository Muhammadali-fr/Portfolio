"use client"
import ButtonLoader from "@/src/components/loaders/ButtonLoader";
import { ProjectProp } from "@/src/types/project";
import Image from "next/image";
import { useState } from "react";


export default function ProjectImage({ project }: { project: ProjectProp }) {
    const [imageLoader, setImageLoader] = useState(true);
    return (
        <div className="w-full  h-[300px] relative rounded-3xl">
            {imageLoader && <div className="w-full h-full backdrop-blur-3xl absolute top-0 rounded-3xl flex items-center justify-center">
                <ButtonLoader />
            </div>}
            <Image onLoad={() => setImageLoader(false)} width={400} height={300} src={project.image} alt={project.title} className="w-full h-full rounded-3xl object-cover" />
        </div>
    );
};