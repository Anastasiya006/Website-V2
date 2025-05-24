import React, { useState } from "react";

const experiences = [
    {
        company: "deepPIXEL",
        title: "Engineering Intern",
        period: "May 2025 - August 2025", 
        logo: "/src/assets/deeppixel-logo.png",
        bg: "#ffffff70",
        hover: "#ffffff90",
        link: "https://www.deeppixel.ai",
    },
    {
        company: "Electrium Mobility (Electriumap)",
        title: "Backend Developer",
        period: "May 2025 - July 2025", 
        logo: "/src/assets/electrium-mobility-logo.png",
        bg: "#4eb34b20",
        hover: "#4eb34b50",
        link: "https://electriummobility.com",
    },
    {
        company: "Electrium Mobility",
        title: "Firmware Developer",
        period: "September 2024 - December 2024", 
        logo: "/src/assets/electrium-mobility-logo.png",
        bg: "#4eb34b20",
        hover: "#4eb34b50",
        link: "https://electriummobility.com",
    }
];

const ExperienceItem = ({ logo, company, title, period, bg, hover, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <div className="flex space-x-4 mb-4 py-2 rounded-md transition-colors duration-200 hover:shadow-lg">
            <div
            className="w-12 h-12 rounded-md flex items-center justify-center"
            style={{ backgroundColor: isHovered ? hover : bg }}
            >
            <img src={logo} alt={company} className="w-9 h-9 object-contain" />
            </div>
            <div>
            <h3 className="text-white text-md font-semibold">{company}</h3>
            <p className="text-[#a1a1aa] text-sm font-light">{title}</p>
            <p className="text-[#a1a1aa] text-sm font-light">{period}</p>
            </div>
        </div>
        </a>
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