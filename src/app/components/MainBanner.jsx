import React from "react";
import Arrow from "./Arrow";

const MainBanner = () => {
    return (
        <section>
            <div>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    Hello, I'm Marcelo
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Over 7 years as a Fullstack Artist. And yes, passionate about UX, Marketing and Leadership too :)
                </p>
            </div>
            <Arrow />
        </section>
    )
}

export default MainBanner;