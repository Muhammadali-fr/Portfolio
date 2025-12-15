import Link from "next/link";

export default function Header() {
    return (
    <header className="w-full border-b c-border-color c-gray">
            <div className="c-width  py-3 flex items-center justify-between ">
                <p>Jamolov</p>
                <ul className="flex items-center justify-center gap-5 font-[17px]">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>Skills</Link></li>
                    <li><Link href={"/"}>Contact</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                </ul>
            </div>
        </header>
    );
};