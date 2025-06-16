import React from 'react';
import ExperienceList from './Experience';
import SocialIcons from './Socials';
import { projects } from "./Projects";
import ProjectCard from "./Projects";
import { SlSocialFoursqare } from 'react-icons/sl';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { FaBriefcase } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import Mouse from './Mouse';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="bg-zinc-950 text-white">
            <Mouse />

            {/* About Section */}
            <section id="about" className="flex items-center justify-center px-6 my-65">
                <div className="flex flex-col space-y-6 max-w-4xl text-left">
                    <h1 className="text-5xl font-bold text-zinc-100">Anastasiya Volgina</h1>

                    <p className="text-lg text-zinc-400">
                        Currently studying 2A Computer Engineering @ University of Waterloo. Seeking Winter 2026 internships.
                        <br />
                        ❝ Too busy watering my own grass to notice if it's <span className="text-[#4c8d07]">greener</span> on the other side 🌱 ❞
                    </p>

                    <SocialIcons />

                    <a
                        href="#experience"
                        className="group inline-flex justify-center items-center space-x-2 border-[0.2px] border-zinc-600 w-40 px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        <span>See More</span>
                        <MdOutlineKeyboardDoubleArrowDown className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="pt-20">
                <div className="flex flex-col max-w-4xl mx-auto text-left">
                    <h2 className="text-2xl font-bold flex items-center">
                        <FaBriefcase className="w-8 h-8 pr-3" /> Work
                    </h2>

                   <ExperienceList />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mt-50 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-10 flex items-center">
                        <FaTools className="w-8 h-8 pr-3" /> Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;