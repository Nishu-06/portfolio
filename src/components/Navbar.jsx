import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(255,255,255,0.8)] backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-gray-900">
            Nishu<span className="text-pink-500">Kumari</span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Achievements", link: "#achievements" }, // ✅ Added
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
