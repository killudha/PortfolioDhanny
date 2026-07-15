import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter text-stone-800">
          DAQAJ<span className="text-emerald-600">.</span>
        </span>
        <div className="flex gap-4 text-stone-600">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/dhannyabdulqodira" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}