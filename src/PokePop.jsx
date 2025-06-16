import { ArrowLeft, Calendar, Wrench, Users, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mechanics = [
  { command: "./src/assets/poke-pop/mouse.png", action: "Move mouse to aim" },
  { command: "./src/assets/poke-pop/mouse-click.png", action: "Click to freeze & unfreeze aim" },
  { command: "./src/assets/poke-pop/fire-icon.png", action: "Press [FIRE] to release ball" },
];

const orbs = [
  { type: "Normal", image: "./src/assets/poke-pop/normal-orb.png", description: "+2 damage points" },
  { type: "Bomb", image: "./src/assets/poke-pop/bomb-orb.png", description: "+50 damage points" },
  { type: "Health", image: "./src/assets/poke-pop/health-orb.png", description: "+10 health points" },
  { type: "Restore", image: "./src/assets/poke-pop/restore-orb.png", description: "Renews all orbs" },
];

const PokePop = () => {
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
                Poké-Pop
            </h1>

            <div className="overflow-hidden rounded-md">
                <img
                src="./src/assets/poke-pop/poke-pop.png"
                alt="Byte Budy"
                className="w-full h-155 object-cover"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-md text-gray-400 pt-5">
                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Calendar className="w-4 h-4 text-white" />
                </div>
                <span>June 2023</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Wrench className="w-4 h-4 text-white" />
                </div>
                <span>Java, SWING, AWT</span>
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
                    href="https://github.com/Anastasiya006/Poke-Pop"
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
                A single player, 2D turn-based Pokémon fighting game. 
                Each turn challenges the player to participate in a bubble-popping mini-game. 
                The points earned by popping bubbles are then converted into damage, 
                which is dealt to the enemies in the following round. 
                As the player progresses through levels, they face an increasing number of enemies, 
                each more difficult than the last, providing a constantly escalating challenge.
            </p>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Mechanics
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 text-left text-md text-gray-300">
                <thead className="bg-[#111111] text-gray-400 uppercase">
                    <tr>
                    <th className="px-4 py-2 border border-gray-700">Command</th>
                    <th className="px-4 py-2 border border-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mechanics.map(({ command, action }, i) => (
                    <tr key={i} className="bg-[#1a1a1a] even:bg-[#121212]">
                        <td className="px-4 py-2 border border-gray-700">
                        <img src={command} alt={command} className="w-12 h-12" />
                        </td>
                        <td className="px-4 py-2 border border-gray-700">{action}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Orbs
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 text-left text-md text-gray-300">
                <thead className="bg-[#111111] text-gray-400 uppercase">
                    <tr>
                    <th className="px-4 py-2 border border-gray-700">Type</th>
                    <th className="px-4 py-2 border border-gray-700">Image</th>
                    <th className="px-4 py-2 border border-gray-700">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {orbs.map(({ type, image, description }, i) => (
                    <tr key={i} className="bg-[#1a1a1a] even:bg-[#121212]">
                        <td className="px-4 py-2 border border-gray-700">{type}</td>
                        <td className="px-4 py-2 border border-gray-700">
                        <img src={image} alt={image} className="w-12 h-12" />
                        </td>
                        <td className="px-4 py-2 border border-gray-700">{description}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Demo
            </h2>
            <div className="overflow-hidden rounded-md">
                <video
                    src="./src/assets/poke-pop/poke-pop.mp4" 
                    controls
                    autoPlay={true}
                    loop={true}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default PokePop;