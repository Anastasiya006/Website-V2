import { ArrowLeft, Calendar, Wrench, Users, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  { image: "./src/assets/byte-buddy/idle.png", action: "Idle", input: "N/A" },
  { image: "./src/assets/byte-buddy/walk.png", action: "Walk", input: "N/A" },
  { image: "./src/assets/byte-buddy/pick-up.png", action: "Drag & Drop", input: "Pick up and release with cursor" },
  { image: "./src/assets/byte-buddy/scratch.png", action: "Scratch", input: "Hold cursor nearby" },
  { image: "./src/assets/byte-buddy/stand.png", action: "Stand", input: "N/A" },
  { image: "./src/assets/byte-buddy/eat.png", action: "Eat", input: "Right click" },
  { image: "./src/assets/byte-buddy/sleep.png", action: "Sleep", input: "N/A" },
  { image: "./src/assets/byte-buddy/poop.png", action: "Poop", input: "N/A" },
];

const ByteBuddy = () => {
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
                Byte Buddy
            </h1>

            <div className="overflow-hidden rounded-md">
                <img
                src="./src/assets/test.png"
                alt="Byte Budy"
                className="w-full h-100 object-cover"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-md text-gray-400 pt-5">
                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Calendar className="w-4 h-4 text-white" />
                </div>
                <span>April 2024</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Wrench className="w-4 h-4 text-white" />
                </div>
                <span>Python, Tkinter</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Users className="w-4 h-4 text-white" />
                </div>
                <span>
                <a
                    href="https://www.linkedin.com/in/xiaowei-vivian-ji/" 
                    className="underline hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vivian Ji
                </a>
                {", "}
                <a
                    href="https://www.linkedin.com/in/claire-jl-guo/" 
                    className="underline hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Claire Guo
                </a>
                </span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <LinkIcon className="w-4 h-4 text-white" />
                </div>
                <a
                    href="https://github.com/Anastasiya006/Byte-Buddy"
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
                A fully-interactive virtual desktop pet application developed using Python's Tkinter library. 
                The virtual pet walks around the screen, responds to user actions, and interacts with its environment. 
                Users can pick up and drop the pet, feed it, and watch as it playfully interacts with the mouse cursor, 
                creating an engaging and dynamic desktop companion experience.
            </p>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Actions
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 text-left text-md text-gray-300">
                <thead className="bg-[#111111] text-gray-400 uppercase">
                    <tr>
                    <th className="px-4 py-2 border border-gray-700">Image</th>
                    <th className="px-4 py-2 border border-gray-700">Action</th>
                    <th className="px-4 py-2 border border-gray-700">User Input</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map(({ image, action, input }, i) => (
                    <tr key={i} className="bg-[#1a1a1a] even:bg-[#121212]">
                        <td className="px-4 py-2 border border-gray-700">
                        <img src={image} alt={action} className="w-12 h-12" />
                        </td>
                        <td className="px-4 py-2 border border-gray-700">{action}</td>
                        <td className="px-4 py-2 border border-gray-700">{input}</td>
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

export default ByteBuddy;