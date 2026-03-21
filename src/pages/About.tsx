import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Users, Trophy, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function About() {
    return (
        <main className="pt-24 md:pt-32 pb-20 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="About Us | Zanntec"
                description="Learn about Zanntec — a premier technology firm bridging heavy industry and modern software. 20+ engineers, 99% client retention, 500+ automated models, and 24/7 DevOps support."
                canonicalPath="/about"
            />

            {/* Header Section */}
            <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl"
                >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Who We Are</div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
                        EMPOWERING <br />
                        BUSINESSES <br />
                        WITH <span className="text-accent italic">SMART</span> <br />
                        SOLUTIONS
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        Zanntec is a premier technology-driven firm unconditionally focused on delivering high-quality digital architectures and engineering workflows. Founded with a vision to bridge the gap between heavy industry and modern software, we specialize in high-performance website development, CAD modeling, mechanical drafting, and systemic automation services specifically tailored to industrial, e-commerce, and enterprise business needs.
                    </p>
                </motion.div>
            </section>

            {/* Animated Stats Bar */}
            <section className="bg-primary py-16 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { val: "20+", label: "Expert Engineers" },
                            { val: "99%", label: "Client Retention" },
                            { val: "500+", label: "Models Automated" },
                            { val: "24/7", label: "DevOps Support" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-6xl font-extrabold font-display text-accent mb-2">{stat.val}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-secondary py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 md:p-16 rounded-[40px] shadow-sm border border-gray-100"
                        >
                            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                                <Target className="w-10 h-10 text-accent" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-primary mb-6">Our Mission</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
                                To empower forward-thinking businesses with smart, scalable, and relentlessly efficient solutions. We achieve this through disciplined innovation, uncompromising precision, and the deployment of bleeding-edge technology.
                            </p>
                            <ul className="space-y-4">
                                {["Eliminate operational bottlenecks", "Accelerate time-to-market", "Provide sustainable infrastructure"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-primary">
                                        <ChevronRight className="w-5 h-5 text-accent" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary text-white p-12 md:p-16 rounded-[40px] shadow-sm"
                        >
                            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                                <Eye className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-extrabold mb-6">Our Vision</h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-medium mb-8">
                                To become the universally recognized, most trusted global partner in digital transformation and engineering services. We envision a future where technology seamlessly amplifies human ingenuity securely and sustainably.
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                {["Global enterprise network expansion", "Pioneering AI in CAD automation", "Carbon-neutral server operations"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-white">
                                        <ChevronRight className="w-5 h-5 text-accent" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Principles</div>
                        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary">
                            OUR CORE <span className="text-accent italic">VALUES</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Velocity", desc: "Speed is a feature. We deliver rapid iterations without compromising the structural integrity or security of our deliverables." },
                            { icon: ShieldCheck, title: "Integrity", desc: "Transparency in process and billing. What we promise is exactly what we architect, code, and deploy." },
                            { icon: Trophy, title: "Excellence", desc: "Good enough is never enough. We strictly adhere to elite engineering standards and best practices across all verticals." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[30px] bg-secondary border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                                    <val.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{val.title}</h3>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Methodology */}
            <section className="py-16 md:py-32 bg-primary text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Methodology</div>
                        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
                            HOW WE <span className="text-accent italic">OPERATE</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mt-6 text-xl">
                            Our proprietary 3-phase engineering methodology ensures maximum efficiency, eliminating scope creep and delivering robust solutions on time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[50%] left-[15%] right-[15%] h-1 bg-white/10 -translate-y-1/2 z-0" />

                        {[
                            { step: "01", title: "Discovery Archive", desc: "Rigorous technical auditing, requirement gathering, and architectural blueprinting." },
                            { step: "02", title: "Iterative Build", desc: "Agile sprints combining mechanical engineering principles with modern clean-code." },
                            { step: "03", title: "Scale & Automate", desc: "Deployment, stress-testing, and implementing systems for perpetual growth." }
                        ].map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative z-10 bg-[#0a0a0a] p-10 rounded-[40px] border border-white/5 hover:border-accent/30 transition-colors"
                            >
                                <div className="text-6xl font-extrabold text-white/5 mb-6">{phase.step}</div>
                                <h4 className="text-2xl font-bold mb-4">{phase.title}</h4>
                                <p className="text-gray-400 font-medium leading-relaxed">{phase.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
