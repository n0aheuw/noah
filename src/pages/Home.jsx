import { RevealOnScroll } from "../components/RevealOnScroll";
import profilePic from '../assets/profile.jpeg';


export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="flex justify-center items-center w-full">
            <div className="w-75 h-75 rounded-full overflow-hidden border-4 border-[var(--tertiary-color)] shadow-lg shadow-[var(--tertiary-color)]">
                <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[rgba(var(--tertiary-color-rgb),1)] to-[rgba(var(--secondary-color-rgb),1)] bg-clip-text text-transparent">
                Hello, I'm Noah
            </h1>

            <p className="text-[rgba(var(var(--primary-colour-rgb), 1))]text-lg mb-8 max-w-lg mx-auto">
                "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it."
                <br/> Ferris Bueller     
            </p>
            <div className="flex justify-center space-x-4">
                <a
                    href="#blog"
                    className="bg-[rgba(var(--tertiary-color-rgb),1)] text-[rgba(var(--primary-color-rgb),1)] px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(var(--tertiary-color-rgb),0.4)]"
                >
                    View Blog
                </a>

                <a
                    href="#contact"
                    className="border border-[rgba(var(--tertiary-color-rgb),0.5)] text-[rgba(var(--tertiary-color-rgb),1)] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(var(--tertiary-color-rgb),0.2)] hover:bg-[rgba(var(--tertiary-color-rgb),0.1)]"
                >
                    Contact Me
                </a>
            </div>          
        </div>
        </RevealOnScroll>
    </section>
    );
}