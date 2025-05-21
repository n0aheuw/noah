
export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-40 bg-[rgba(var(--quaternary-color-rgb),0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3">
        <p className="text-secondary text-sm">&copy; {new Date().getFullYear()} Noah. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/noahjohnson-cse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary hover:text-tertiary transition-colors"
          >
            <i className={`fa fa-linkedin fa-2x`} aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/n0aheuw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary hover:text-tertiary transition-colors"
          >
            <i className={`fa fa-github fa-2x`} aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
