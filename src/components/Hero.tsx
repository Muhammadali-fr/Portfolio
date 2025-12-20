// components
import TeammateImages from "./TeammateImages";

export default function Hero() {
    return (
        <section className="c-width py-16 space-y-6 text-center">
            <TeammateImages />

            <div className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                    <span className="text-[#0071e3]">Web</span> Developer
                </p>

                <h1 className="text-6xl font-bold">
                    Jamolov Muhammadali
                </h1>

                <p className="max-w-xl text-lg text-gray-600">
                    Building reliable, modern, and scalable web applications.
                </p>

                <div className="flex items-center gap-5 my-5">
                    <button className="px-5 py-2 c-blue text-white rounded-3xl cursor-pointer">View Porjects</button>
                    <button className="px-5 py-2 c-white rounded-3xl border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white cursor-pointer">Contact me</button>
                </div>
            </div>
        </section>
    );
}
