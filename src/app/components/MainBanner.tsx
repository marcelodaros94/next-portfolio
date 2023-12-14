"use client"

import React from "react";
import Arrow from "./Arrow";
import Link from "next/link";
import { useContent } from "../context/ContentContext";

export type Language = 'en' | 'es';

const MainBanner = () => {
    const { language, data, setLanguage } = useContent();
    const { title, description } = data[language];

    const handleClick = (language: Language) => {
        setLanguage(language);
    }

    return (
        <section className="bg-[#121212]  flex items-center justify-center relative">
            <div className="absolute top-5 left-5 italic underline">
                <span className="mr-5" onClick={() => handleClick('es')}>Español</span>
                <span onClick={() => handleClick('en')}>English</span>
            </div>            
            <div>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    { title }
                </h1>
                <p className="text-[#ADB7BE] text-justify text-base sm:text-lg mb-6 lg:text-xl">
                    { description }
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