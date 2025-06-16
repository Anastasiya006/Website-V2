import React, { useState } from "react";

const experiences = [
    {
        company: "Kaidu.ai",
        title: "Embedded Systems Engineer Intern",
        period: "May 2025 - Present", 
        logo: "/assets/logos/kaidu-logo.png",
        description: "Performing LTE-M HTTPS stress testing and optimizing secure communications on Nordic nRF9160 using Zephyr RTOS.",
        bg: "#ffffff30",
        hover: "#ffffff50",
        link: "https://www.kaidu.ai/",
    },
    {
        company: "Electrium Mobility (Electriumap)",
        title: "Backend Developer",
        period: "May 2025 - Present", 
        logo: "/assets/logos/electrium-mobility-logo.png",
        description: "Building a crowdsourced web app to help electric vehicle users locate and share charging spots.",
        bg: "#4eb34b20",
        hover: "#4eb34b50",
        link: "https://electriummobility.com",
    },
    {
        company: "Electrium Mobility",
        title: "Firmware Developer",
        period: "September 2024 - December 2024", 
        logo: "/assets/logos/electrium-mobility-logo.png",
        description: "Developed a high-speed CAN bus system linking three ESP32 microcontrollers and integrated VESC motor control to enable smooth, responsive performance at speeds up to 30 km/h.",
        bg: "#4eb34b20",
        hover: "#4eb34b50",
        link: "https://electriummobility.com",
    }
];

const ExperienceItem = ({ logo, company, title, period, description, bg, hover, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6 py-2 rounded-md transition-colors duration-200 hover:shadow-lg">
        {/* Left side: logo + company info */}
        <div className="flex space-x-4 items-start">
            {/* Only the logo box is clickable now */}
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <div
                className="w-15 h-15 rounded-md flex items-center justify-center"
                style={{ backgroundColor: isHovered ? hover : bg }}
            >
                <img src={logo} alt={company} className="w-11 h-11 object-contain" />
            </div>
            </a>

            {/* Company info */}
            <div>
            <h3 className="text-white text-lg font-semibold">{company}</h3>
            <p className="text-[#a1a1aa] text-sm font-light">{title}</p>
            <p className="text-[#a1a1aa] text-sm font-light">{period}</p>
            </div>
        </div>

        {/* Right side: description */}
        <p className="text-[#a1a1aa] text-md">{description}</p>
        </div>
    );
};


const ExperienceList = () => (
    <div className="bg-[#09090b] pt-6">
        {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
        ))}
    </div>
);

export default ExperienceList;