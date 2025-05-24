import React from 'react';
import ExperienceList from './Experience';
import SocialIcons from './Socials';

const Home = () => {
    return (
        <div className="flex h-screen ">
            <div className="w-[40%] fixed h-screen bg-[#09090b] text-[#e4e4e7] p-4 pt-20 px-20">
                <h1 className="text-3xl font-bold mb-4">Anastasiya Volgina</h1>
                <p className="text-md font-light">2A Computer Engineering @ University of Waterloo <br /> Looking for Winter 2026 internships</p>
                
                <h2 className="text-md my-8 font-light">❝ Too busy watering my own grass 🌱 <br /> to notice if it's <span className="text-[#4c8d07]">greener</span> on the other side ❞</h2>
                
                <ExperienceList />

                <SocialIcons />
            </div>

            <div className="ml-[40%] w-[60%] h-screen overflow-y-scroll bg-[#09090b] text-[#e4e4e7] p-4 pt-20 pl-20">
                <h2 className="text-2xl font-bold mb-4">Fixed Section</h2>
                <p>This part stays visible while scrolling.</p>
            </div>
        </div>
    );
};

export default Home;