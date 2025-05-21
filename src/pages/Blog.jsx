import { RevealOnScroll } from "../components/RevealOnScroll";

export const Blog = () => {
    return (
        <section id="blog" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="flex justify-center items-center w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgba(var(--tertiary-color-rgb),1)] to-[rgba(var(--primary-color-rgb),1)] bg-clip-text text-transparent">
                    Blog
                </h2>
            </div>
            <div className="flex justify-center items-center w-full relative">
                <div className="w-75 h-75 rounded-4px overflow-hidden border-4 border-[var(--tertiary-color)] shadow-lg shadow-[var(--tertiary-color)]">
                    <img
                        src="https://i.imgur.com/iTGmpOE.gif"
                        alt="Under construction animation: zoolander in mine"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://i.imgur.com/C4WjWkF.png'; // Replace with a static image URL fallback if you have one
                        }}
                    />
                </div>
            </div>

            <div className="px-4 py-5 w-full md:w-150 text-center text-2xl">
                🚧 Under Construction 🚧
            </div>
            </RevealOnScroll>
        </section>
    );
}