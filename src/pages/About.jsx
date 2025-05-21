import { RevealOnScroll } from "../components/RevealOnScroll";


export const About = () => {
    const Skills = [
        "orCAD",
        "Linux",
        "Python",
        "Excel",
        "HTML5",
        "CSS",
        "MATLAB",
        "Java"
    ]

    const Icons = [
        "fa-desktop",
        "fa-linux",
        "fa-cogs",
        "fa-table",
        "fa-html5",
        "fa-css3",
        "fa-flask",
        "fa-cubes"
    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[rgba(var(--tertiary-color-rgb),1)] to-[rgba(var(--primary-color-rgb),1)] bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-[rgba(var(--primary-color-rgb),1)] mb-6">
                        IET Accredited <strong>Engineer Technician</strong> and <strong>Computer Systems Engineer</strong>.
                    </p>

                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Professional Skills</h3>
                        <div className="grid grid-cols-2 gap-4 text-[rgba(var(--primary-color-rgb),1)]">
                        {Skills.map((skill, index) => (
                            <span className="flex items-center justify-center bg-[rgba(var(--tertiary-color-rgb),0.5)] text-[rgba(var(--primary-color-rgb),1)] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition" key={index}>
                                <i className={`fa ${Icons[index]} fa-2x`} aria-hidden="true"></i>
                                <span className="ml-2 font-bold">{skill}</span>
                            </span>
                        ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside">
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>BEng Computer Systems Engineering</strong> <i>(Electrical Engineering Focus)</i> <br/>University of Bath (2021 - 2025) <br/> <strong>Expected 2:1 Honours</strong>
                        </li>
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>A-Levels</strong> <br/>Hills Road Sixth Form College (2019 - 2021) <br/> <strong>4 x A (Physics, Maths, Chemistry, Extended Project Qualification)</strong>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">⚙️ Engineering Experience</h3>
                    <div className="space-y-10 text-[rgba(var(--primary-color-rgb),1)]">
                        <div>
                            <h4 className="text-lg font-semibold text-[rgba(var(--primary-color-rgb),1)]">University Projects</h4>
                            <p>
                                Created a <strong>PCB Sensor Shield using the Arduino UNO</strong>. This was a challenging task and forced us to be creative with our solutions in order to consider 
                                component placement and code efficiency. This was a paired project and I found that my partner and I excelled in effective communication and feeding 
                                off each other's ideas to solve problems.
                                <br/><br/>
                                Designed a <strong>PCB intended for real-world use</strong>, incorporating a piezoelectric material as a voltage source. I was required to think about shape, component 
                                placement, and whether to use surface-mount or through-hole technology to make this genuinely viable in the real world. This project helped me grasp an 
                                understanding of low power electronics and provided an introduction into the business considerations of an engineering project.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-[rgba(var(--primary-color-rgb),1)]">GE Aerospace, Cheltenham Campus (June 2023 - July 2024)</h4>
                            <p>
                                3rd year University Industry Placement with <strong>GE Aerospace</strong> where I worked as a Systems Engineer on the power distribution system. This placement year was incredibly useful 
                                and insightful, allowing me to both develop and strengthen my engineering and employee skill set, whilst consistently developing my understanding of the various roles within 
                                a large company. My responsibilities within the team increased as my experience grew which helped build my confidence within the field. I consistently endeavoured to 
                                contribute to the wider project as much as possible to expose me to as many departments as possible to improve my overall project picture and understanding. Furthermore, 
                                whilst at <strong>GE Aerospace</strong> I gained my professional accreditation as an <strong>Engineering Technician with the IET</strong>.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-[rgba(var(--primary-color-rgb),1)]">Jumptech, Bradfield Centre Cambridge (June - September 2021)</h4>
                            <p>
                                Summer Internship 2021 (following A levels) with the software development company <strong>Jumptech</strong>. This internship provided me with a fantastic overview of how a successful company 
                                operates and utilises a small team effectively. Throughout the summer, I was stationed in the Testing and Customer Support departments, where my main role was to identify bugs 
                                within the system, and escalate these to the software team for correction. The interactions I had with other team members helped me grasp an understanding of the development loop 
                                and allowed me to improve my communication skills whilst working in a small team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Other Professional Experience</h3>
                    <div className="space-y-10 text-[rgba(var(--primary-color-rgb),1)]">
                        <ul className="list-disc list-inside">
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>Waiter</strong> | Gonville & Caius College, Cambridge (October - September 2019 & 2020)
                            <br/>
                            This was my first proper job and taught me a lot about responsibility, punctuality, and organisation.
                        </li>
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>Crew Member</strong> | McDonald's, Caxton Gibbet Cambridgeshire (July - September 2022)
                            <br/>
                            Became efficient at interacting with customers in a professional yet friendly environment.
                        </li>
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>Bar & Waiting Staff</strong> | Hall & Woodhouse, Bath (October 2022 - April 2023)
                        </li>
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>Waiting Staff</strong> | Comptoir Libanais, Bath (August 2024 - current)
                        </li>
                        <li className="text-[rgba(var(--primary-color-rgb),1)] mb-2">
                            <strong>Farm Hand</strong> | Wood Farm, Waresley Cambridgeshire (on and off since 2018)
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}