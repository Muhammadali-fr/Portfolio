
// components 
import TeammateImages from "./TeammateImages";

export default function Hero() {
    return (
        <section className="c-width py-5 space-y-3">
            <TeammateImages />
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl font-semibold">Jamolov Muhammadali</p>
                <h1 className="text-7xl font-bold">Frontend Developer</h1>

            </div>
        </section>
    );
};