import React from "react";
import Arrow from "./Arrow";
import Link from "next/link";

const MainBanner = () => {
    return (
        <section className="bg-[#121212]  flex items-center justify-center">
            <div>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    Hello, I'm Marcelo
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Over 7 years as a Fullstack Artist. And yes, passionate about UX, Marketing and Leadership too :)
                </p>
                <Link href="https://github.com/marcelodaros94" target="_blank" className="block mx-auto text-center border border-solid border-gray-300  text-base sm:text-lg mb-6 lg:text-xl p-2 rounded-full">
                    Github code
                </Link>
            </div>
            <Arrow />
        </section>
    )
}

export default MainBanner;