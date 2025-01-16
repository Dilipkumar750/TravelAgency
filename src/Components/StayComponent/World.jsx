import React, { useEffect, useRef, useState } from "react";
import australia from "../../assets/flags/australia.png";
import bangladesh from "../../assets/flags/bangladesh.png";
import brazil from "../../assets/flags/brazil.png";
import canada from "../../assets/flags/canada.png";
import dubai from "../../assets/flags/dubai.png";
import germany from "../../assets/flags/germany.png";
import india from "../../assets/flags/india.png";
import malaysia from "../../assets/flags/malaysia.png";
import maldives from "../../assets/flags/maldives.png";
import myanmar from "../../assets/flags/myanmar.png";
import palestine from "../../assets/flags/palestine.png";
import singapore from "../../assets/flags/singapore.png";
import srilanka from "../../assets/flags/srilanka.png";
import switzerland from "../../assets/flags/switzerland.jpeg"; // Note: JPEG format
import tailand from "../../assets/flags/tailand.png";
import uk from "../../assets/flags/uk.png";
import usa from "../../assets/flags/usa.png";
import vietnam from "../../assets/flags/vietnam.png";
import pakistan from "../../assets/flags/pakistan.png";
import italy from "../../assets/flags/italy.png";
import spain from "../../assets/flags/spain.png";
import bangkok from "../../assets/flags/bangkok.png";
import norway from "../../assets/flags/norway.png";
import { Link } from "react-router-dom";

const World = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const flags = [
        { src: australia, alt: "Australia", country: "Australia", delay: 150 },
        { src: bangladesh, alt: "Bangladesh", country: "Bangladesh", delay: 200 },
        { src: brazil, alt: "Brazil", country: "Brazil", delay: 250 },
        { src: canada, alt: "Canada", country: "Canada", delay: 300 },
        { src: dubai, alt: "Dubai", country: "Dubai", delay: 350 },
        { src: germany, alt: "Germany", country: "Germany", delay: 400 },
        { src: india, alt: "India", country: "India", delay: 450 },
        { src: malaysia, alt: "Malaysia", country: "Malaysia", delay: 500 },
        { src: maldives, alt: "Maldives", country: "Maldives", delay: 550 },
        { src: myanmar, alt: "Myanmar", country: "Myanmar", delay: 600 },
        { src: palestine, alt: "Palestine", country: "Palestine", delay: 650 },
        { src: singapore, alt: "Singapore", country: "Singapore", delay: 700 },
        { src: srilanka, alt: "Sri Lanka", country: "Sri Lanka", delay: 750 },
        { src: switzerland, alt: "Switzerland", country: "Switzerland", delay: 800 },
        { src: tailand, alt: "Thailand", country: "Thailand", delay: 850 },
        { src: uk, alt: "United Kingdom", country: "England", delay: 900 },
        { src: usa, alt: "United States", country: "America", delay: 950 },
        { src: vietnam, alt: "Vietnam", country: "Vietnam", delay: 1000 },
        { src: pakistan, alt: "Pakistan", country: "Pakistan", delay: 1050 },
        { src: italy, alt: "Italy", country: "Italy", delay: 1100 },
        { src: spain, alt: "Spain", country: "Spain", delay: 1150 },
        { src: bangkok, alt: "Bangkok", country: "Bangkok", delay: 1200 },
        { src: norway, alt: "Norway", country: "norway", delay: 1200 },
    ];

    // Set up Intersection Observer to trigger animation when section becomes visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Update visibility state
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="mt-10">
                <h2 className="text-center font-bold text-xl sm:text-2xl md:text-4xl text-gray-800 mb-8">
                    Explore Our World Tour Destinations
                </h2>
            </div>

            <section
                ref={sectionRef}
                className="flex flex-wrap gap-5 bg-blue-300 sm:gap-10 justify-center p-4 mb-20 mt-20"
            >
                {flags.map((flag, index) => (
                     <Link to="/Destinations" key={index} className="w-24 h-16 sm:w-36 sm:h-32">
                    <div
                        key={index}
                        className={`w-24 h-16 sm:w-36 sm:h-32 p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center ${
                            isVisible ? "animate-fadeIn" : "" // Trigger animation only when section is visible
                        }`}
                        style={{
                            backgroundImage: "linear-gradient(145deg, #f5f5f5, #ffffff)",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            animationDelay: `${flag.delay}ms`,
                        }}
                    >
                        <img
                            loading="lazy"
                            src={flag.src}
                            alt={flag.alt}
                            className="h-full w-auto rounded-md mb-2"
                        />
                        <p className="text-center text-sm sm:text-base text-gray-800 font-semibold">{flag.country}</p>
                    </div>
                    </Link>
                ))}
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 1.5s ease-in-out forwards; /* Increased animation duration for a slower effect */
                }
            `}</style>
        </>
    );
};

export default World;
