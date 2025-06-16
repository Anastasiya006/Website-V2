import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-8 pb-5">
      <a href="https://github.com/Anastasiya006" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-5.5 h-5.5 text-zinc-100 hover:text-[#4c8d07] transition" />
      </a>
      <a href="https://www.linkedin.com/in/anastasiya-volgina/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="w-6 h-6 text-zinc-100 hover:text-[#4c8d07] transition" />
      </a>
      <a href="mailto:avolgina@uwaterloo.ca">
        <HiOutlineMail className="w-8 h-7 text-zinc-100 hover:text-[#4c8d07] transition" />
      </a>
    </div>
  );
};

export default SocialIcons;