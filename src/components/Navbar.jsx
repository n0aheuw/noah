import { useEffect } from "react";
import logo from "../assets/logo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(var(--quaternary-color-rgb),0.8)] backdrop-blur-lg border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img
            style={{ width: 80, height: 80 }}
            src={logo}
            alt="My Logo"
          />

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScroll("home")}
              className="text-[rgba(var(--primary-color-rgb),1)] hover:text-[rgba(var(--tertiary-color-rgb),1)] transition-colors font-lato font-bold"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="text-[rgba(var(--primary-color-rgb),1)] hover:text-[rgba(var(--tertiary-color-rgb),1)] transition-colors font-lato font-bold"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("blog")}
              className="text-[rgba(var(--primary-color-rgb),1)] hover:text-[rgba(var(--tertiary-color-rgb),1)] transition-colors font-lato font-bold"
            >
              Blog
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-[rgba(var(--primary-color-rgb),1)] hover:text-[rgba(var(--tertiary-color-rgb),1)] transition-colors font-lato font-bold"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};