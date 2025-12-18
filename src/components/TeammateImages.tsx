
// next 
import Image from "next/image";
import Link from "next/link";

// assets 
import myLogoImage from "@/public/assets/my-image-logo.webp";
import shukurulloLogoImage from '@/public/assets/shukurullo-logo.webp';
import mardonbekLogoImage from '@/public/assets/mardonbek-logo.webp';

export default function TeammateImages() {
    return (
        <ul className="flex items-center justify-center">
            <li title="Hamidov Mardonbek">
                <Link href={"/"}>
                    <Image width={65} height={65} className="rounded-full object-cover object-center relative left-3" src={mardonbekLogoImage} alt="Mardonbek Khamidov" />
                </Link>
            </li>
            <li title="me: Jamolov Muhammadali" className="z-2">
                <Image width={75} height={75} className="rounded-full object-cover object-center" src={myLogoImage} alt="Jamolov Muhammadali" />
            </li>

            <li title="Boburov Shukurullo">
                <Link target="_blank" href={"https://boburov.uz/"}>
                    <Image width={65} height={65} className="rounded-full object-cover object-center relative right-3" src={shukurulloLogoImage} alt="Boburov Shukurullo" />
                </Link>
            </li>
        </ul>
    );
};