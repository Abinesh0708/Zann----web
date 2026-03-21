import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, DraftingCompass, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudyCAD() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/cad_automation.png"
                        alt="CAD Automation"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="text-accent font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
                            <span>Case Study</span>
                            <span className="w-12 h-px bg-accent"></span>
                            <span>Manufacturing Tech</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
                            Automated Parametric <br />
                            <span className="text-accent italic">Modeling</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl">
                            How custom SolidWorks macros embedded in VBA reduced manual 3D modeling time by 85% for a top-tier manufacturing client.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview & Core Metrics */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8 space-y-12">
                            <div>
                                <h2 className="text-3xl font-extrabold mb-6 text-primary">The Engineering Bottleneck</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Our client manufactures complex industrial robotic arm assemblies. Each custom client order required their engineering department to manually adjust hundreds of dimensions, mating geometry, and custom tolerances in SolidWorks. The average custom assembly required over 40 hours of repetitive CAD redesign before it could be pushed to CAM software for production, creating a massive bottleneck in delivery lead times.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-extrabold mb-6 text-primary">The Automated Solution</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                                    We didn't just simplify their geometry; we completely fully automated it. By tapping into the SolidWorks API via an advanced VBA wrapper, we built a standalone "Product Configurator."
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "Automated geometric generation based strictly on inputted sales parameters.",
                                        "Programmatic mating configurations ensuring zero collision detection failures.",
                                        "Instant generation of standard DXFs, STEP files, and PDF drawing views.",
                                        "Direct integration pulling ERP material constraints in real-time."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                            <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                                            <span className="text-gray-700 font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="bg-primary rounded-[40px] p-8 text-white sticky top-32">
                                <h3 className="text-2xl font-extrabold mb-8 border-b border-white/10 pb-6">Project Impact</h3>
                                <div className="space-y-8">
                                    <div>
                                        <div className="text-5xl font-extrabold text-accent mb-2">85%</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Decrease in CAD Time</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-extrabold text-accent mb-2">40h → 6h</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Time to Push to CAM</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-extrabold text-accent mb-2">200%</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Engineer Throughput</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-lg sm:text-xl md:text-3xl font-extrabold mb-12 md:mb-16 uppercase tracking-tight sm:tracking-normal md:tracking-wider text-primary break-normal">Technical Implementation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: DraftingCompass, title: "SolidWorks API", desc: "Driving the core mathematical geometry arrays from the ground up." },
                            { icon: Layers, title: "VBA Macros", desc: "Building the custom front-end configurator directly accessible inside the SW Task Pane." },
                            { icon: Cpu, title: "ERP Connector", desc: "Custom REST APIs bridging the gap between legacy manufacturing servers and active CAD software." }
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-accent" />
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-4">{title}</h4>
                                <p className="text-gray-600 font-medium leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-accent py-20 md:py-32 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to Automate Your Engineering?</h2>
                    <p className="text-xl text-white/90 font-medium mb-10">
                        Stop drawing the same components over and over. Let's build your automation engine.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Start Your Automation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
