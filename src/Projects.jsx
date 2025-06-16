import { Link } from "react-router-dom";

export const projects = [
  {
    title: "Byte Buddy",
    description: "Fully-interactive virtual desktop pet application",
    image: "/src/assets/byte-buddy/byte-buddy.png",
    link: "./byte-buddy",
  },
  {
    title: "Jagame",
    description: "Java graphics library for beginner game developers",
    image: "/src/assets/jagame/jagame.png",
    link: "./jagame",
  },
  {
    title: "Poké-Pop",
    description: "2D turn-based Pokémon fighting game",
    image: "/src/assets/poke-pop/poke-pop.png",
    link: "./poke-pop",
  },
  {
    title: "Heaven and Hell",
    description: "2D platformer game",
    image: "/src/assets/heaven-and-hell/heaven-and-hell.png",
    link: "./heaven-and-hell",
  },
];

const ProjectCard = ({ title, description, image, link }) => (
  <Link to={link} className="block hover:opacity-90 transition">
    <div className="rounded-lg overflow-hidden shadow-lg bg-[#0f0f0f]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-55 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-sm text-[#a1a1aa] text-light">{description}</p>
      </div>
    </div>
  </Link>
);

export default ProjectCard;