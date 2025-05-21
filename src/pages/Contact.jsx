import { useState } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the honeypot field is empty
        if (e.target._honey.value) {
            console.log("Honeypot field is filled. Not sending email.");
            return;
        }

        // Send the email using EmailJS
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        }).catch(() => alert("Oops! Something went wrong. Please try again later."));

    };

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="px-4 w-full md:w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgba(var(--tertiary-color-rgb),1)] to-[rgba(var(--primary-color-rgb),1)] bg-clip-text text-transparent">
                    Get In Touch
                </h2>
            </div>
            

            <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Honeypot field */}
                <input type="text" id="_honey" name="_honey" style={{ display: "none" }} />

                <div className="relative">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    className="w-full bg-[rgba(var(--primary-color-rgb),0.05)] border border-[rgba(var(--primary-color-rgb),0.1)] rounded px-4 py-3 text-[rgba(var(--primary-color-rgb),1)] transition focus:outline-none focus:border-[rgba(var(--tertiary-color-rgb),1)] focus:bg-[rgba(var(--tertiary-color-rgb),0.05)]"
                    placeholder="John Smith"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                </div>

                <div className="relative">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full bg-[rgba(var(--primary-color-rgb),0.05)] border border-[rgba(var(--primary-color-rgb),0.1)] rounded px-4 py-3 text-[rgba(var(--primary-color-rgb),1)] transition focus:outline-none focus:border-[rgba(var(--tertiary-color-rgb),1)] focus:bg-[rgba(var(--tertiary-color-rgb),0.05)]"
                    placeholder="johnsmith@gmail.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                </div>

                <div className="relative">
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    value={formData.message}
                    className="w-full bg-[rgba(var(--primary-color-rgb),0.05)] border border-[rgba(var(--primary-color-rgb),0.1)] rounded px-4 py-3 text-[rgba(var(--primary-color-rgb),1)] transition focus:outline-none focus:border-[rgba(var(--tertiary-color-rgb),1)] focus:bg-[rgba(var(--tertiary-color-rgb),0.05)]"
                    placeholder="Message..."
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
                </div>

                <button
                type="submit"
                className="w-full bg-[rgba(var(--tertiary-color-rgb),1)] text-[rgba(var(--primary-color-rgb),1)] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgba(var(--tertiary-color-rgb),0.4)]"
                >
                Send Message
                </button> 
            </form>
            </RevealOnScroll>
        </section>
    );
}