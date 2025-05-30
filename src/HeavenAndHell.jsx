import { ArrowLeft, Calendar, Wrench, Users, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mechanics = [
  { key: "R", action: "Reset the level" },
  { key: "Space", action: "Single or double jump to avoid obstacles" },
  { key: "← →", action: "Move left or right to navigate characters" },
];

const HeavenAndHell = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen max-w-4xl mx-auto py-20 overflow-y-auto scroll-smooth">
            <button
                onClick={() => navigate(-1)}
                className="mb-2 flex items-center text-sm text-[#e4e4e7] hover:text-white transition"
                >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back
            </button>

            <h1 className="text-center font-semibold text-3xl text-white pb-8">
                Heaven and Hell
            </h1>

            <div className="overflow-hidden rounded-md">
                <img
                src="./src/assets/heaven-and-hell/heaven-and-hell.png"
                alt="Byte Budy"
                className="w-full h-100 object-cover"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-md text-gray-400 pt-5">
                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Calendar className="w-4 h-4 text-white" />
                </div>
                <span>June 2022</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Wrench className="w-4 h-4 text-white" />
                </div>
                <span>Python, pygame</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Users className="w-4 h-4 text-white" />
                </div>
                <span> N/A </span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <LinkIcon className="w-4 h-4 text-white" />
                </div>
                <a
                    href="https://github.com/Anastasiya006/Heaven-and-Hell-Game"
                    className="underline hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                </div>
            </div>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Overview
            </h2>
            <p className="text-sm text-gray-400">
                A single player, 2D-platformer made with Python and pygame. 
                The game’s objective is simple: collect all the diamonds to proceed to the next level, 
                but beware of the opposing gravities between the two characters! 
                Unlike most platformer games, Heaven and Hell has both characters controlled using the same keys, p
                roviding a challenging twist on classic platformer mechanics.
            </p>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Actions
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 text-left text-md text-gray-300">
                <thead className="bg-[#111111] text-gray-400 uppercase">
                    <tr>
                    <th className="px-4 py-2 border border-gray-700">Key</th>
                    <th className="px-4 py-2 border border-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mechanics.map(({ key, action }, i) => (
                    <tr key={i} className="bg-[#1a1a1a] even:bg-[#121212]">
                        <td className="w-1/3 px-4 py-2 border border-gray-700">{key}</td>
                        <td className="w-2/3 px-4 py-2 border border-gray-700">{action}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Demo
            </h2>
            <div className="overflow-hidden rounded-md">
                <img
                src="./src/assets/test.png"
                alt="Byte Budy"
                className="w-full h-100 object-cover"
                />
            </div>
        </div>
    );
};

export default HeavenAndHell;