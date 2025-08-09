export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full text-white px-6 py-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">MyPortfolio</div>
      <ul className="flex space-x-6">
        <li>
          <a 
            href="#about" 
            className="transition-colors duration-300 hover:text-green-400"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="transition-colors duration-300 hover:text-green-400"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="transition-colors duration-300 hover:text-green-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
