import {
  Github,
  Linkedin,
  Mail,
  File,
} from "lucide-react"; 

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-8 mt-30 mb-20">
      <a href="https://github.com/Anastasiya006" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 text-[#a1a1aa] hover:text-white transition" />
      </a>
      <a href="https://www.linkedin.com/in/anastasiya-volgina/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-[#a1a1aa] hover:text-white transition" />
      </a>
      <a href="mailto:avolgina@uwaterloo.ca">
        <Mail className="w-6 h-6 text-[#a1a1aa] hover:text-white transition" />
      </a>
      <a href="https://drive.google.com/file/d/1HnsuV2-IvYn12GtaodQGBaQrd1gyGcAO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <File className="w-6 h-6 text-[#a1a1aa] hover:text-white transition" />
      </a>
    </div>
  );
};

export default SocialIcons;