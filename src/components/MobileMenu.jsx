export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(var(--quinary-color-rgb),0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[rgba(var(--primary-color-rgb),1)] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      <button
        onClick={() => handleScroll("home")}
        className={`text-2xl font-semibold text-[rgba(var(--primary-color-rgb),1)] my-4 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Home
      </button>
      <button
        onClick={() => handleScroll("about")}
        className={`text-2xl font-semibold text-[rgba(var(--primary-color-rgb),1)] my-4 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        About
      </button>
      <button
        onClick={() => handleScroll("blog")}
        className={`text-2xl font-semibold text-[rgba(var(--primary-color-rgb),1)] my-4 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Blog
      </button>
      <button
        onClick={() => handleScroll("contact")}
        className={`text-2xl font-semibold text-[rgba(var(--primary-color-rgb),1)] my-4 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Contact
      </button>
    </div>
  );
};
