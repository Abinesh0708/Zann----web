import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Server, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudyEcommerce() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/ecommerce_platform.png"
                        alt="E-Commerce Architecture"
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
                            <span>Retail Logistics</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
                            Next-Gen Industrial <br />
                            <span className="text-accent italic">Retail Platform</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl">
                            How we engineered a bespoke e-commerce architecture capable of handling 100k+ concurrent users, seamlessly integrated with legacy localized inventory systems.
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
                                <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-primary break-words hyphens-auto">The Challenge</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Our client, an international industrial supplier, was constrained by a monolithic legacy Magento instance. As their catalog grew past 150,000 SKUs distributed across 40 distinct regional warehouses, their platform suffered from severe performance degradation during high-traffic procurement periods. They needed a system capable of real-time inventory synchronization without sacrificing millisecond page load responses.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-primary break-words hyphens-auto">Our Architectural Approach</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                                    We migrated their infrastructure entirely from the ground up, utilizing a decoupled "headless" architecture. By separating the React/Next.js frontend from the Node.js microservices backend, we established a deeply resilient operational structure.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "GraphQL Federation for aggregated microservice querying.",
                                        "Redis distributed caching layer to nullify database bottlenecks on product variations.",
                                        "Custom Event-Driven Sync engine to keep 40 physical warehouse ERPs perfectly synced with frontend stock availability.",
                                        "Kubernetes auto-scaling clusters for Black Friday procurement readiness."
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
                                        <div className="text-5xl font-extrabold text-accent mb-2">100k+</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Concurrent Users</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-extrabold text-accent mb-2">3x</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Faster Page Loads</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-extrabold text-accent mb-2">40%</div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Conversion Increase</div>
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
                    <h2 className="text-center text-lg sm:text-xl md:text-3xl font-extrabold mb-12 md:mb-16 uppercase tracking-tight sm:tracking-normal md:tracking-wider text-primary break-normal">Core Technology Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Next.js & React", desc: "Providing lightning-fast static generation and dynamic routing constraints." },
                            { icon: Server, title: "Node.js Microservices", desc: "Decoupled logic mapped specifically to Orders, Inventory, and User Auth." },
                            { icon: Shield, title: "Redis & Kubernetes", desc: "Elastic scale with ultra-low latency memory caching." }
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to Scale Your Platform?</h2>
                    <p className="text-xl text-white/90 font-medium mb-10">
                        Stop letting legacy architecture hold your revenue captive. Let's architect your success.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Start Your Project <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
