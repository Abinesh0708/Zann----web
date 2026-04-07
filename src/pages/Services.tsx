import { motion } from 'motion/react';
import { Monitor, Code, ShoppingBag, PenTool, Cpu, ArrowRight, CheckCircle2, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const services = [
    {
        id: "web-dev",
        icon: Monitor,
        title: 'Website Development',
        subtitle: 'High-Performance Digital Experiences',
        desc: 'We design and develop modern, ultra-responsive, and high-performance websites meticulously tailored to your corporate goals. From sleek landing pages to massive corporate portals, our frontend and backend engineers utilize modern frameworks (React, Next.js, Node.js) to deliver seamless, accessible, and SEO-optimized digital platforms.',
        features: ['Custom Frontend Architecture', 'Corporate Business Sites', 'Interactive Web Applications', 'Data-Driven UI/UX Design'],
        image: '/assets/web_development.png',
        reversed: false
    },
    {
        id: "cms",
        icon: Code,
        title: 'Website Maintenance & CMS',
        subtitle: 'Secure, Scalable Infrastructure Management',
        desc: 'Deploying a website is only the first step. Keep your infrastructure updated, immune to zero-day vulnerabilities, and optimized with our ongoing DevOps and support services. We build and integrate custom Content Management Systems (CMS) so your internal team can manage assets effortlessly without touching a single line of code.',
        features: ['Headless CMS Integrations', 'Real-time Security Patching', 'Latency Optimization', '24/7 Server Monitoring'],
        image: '/assets/web_development.png',
        reversed: true
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        title: 'E-Commerce Solutions',
        subtitle: 'Enterprise-Grade Digital Storefronts',
        desc: 'We engineer highly scalable online stores designed specifically to eliminate friction, drive conversions, and enhance the overall user checkout experience. Our e-commerce configurations come fully equipped with localized inventory sync, advanced analytics pipelines, and fortified payment gateway methodologies.',
        features: ['Inventory Synchronization', 'Custom Payment Gateways', 'Admin Management Suites', 'Conversion Rate Optimization'],
        image: '/assets/ecommerce_platform.png',
        reversed: false
    },
    {
        id: "cad",
        icon: PenTool,
        title: 'CAD Design & Drafting',
        subtitle: 'Precision Mechanical Engineering',
        desc: 'Leverage our precision-driven Computer-Aided Design (CAD) services tailored exclusively for high-stakes engineering, architectural, and industrial manufacturing applications. We produce pixel-perfect geometric blueprints compliant with top international engineering standards (ISO/ASME/BS).',
        features: ['Complex 3D Solid Modeling', 'Parametric 2D Drafting', 'BOM & Assembly Animations', 'Rapid Prototyping Ready'],
        image: '/assets/cad_automation.png',
        reversed: true
    },
    {
        id: "automation",
        icon: Cpu,
        title: 'CAD Automation',
        subtitle: 'Algorithmic Design Generation',
        desc: 'If you draw the same part multiple times, you are losing money. Automate repetitive geometric design processes and drastically improve your team\'s efficiency using advanced programmatic CAD automation techniques. We develop deep-level macros that generate thousands of part variations instantly based on Excel configurations.',
        features: ['SolidWorks API/VBA Control', 'Rule-Based Design Logic', 'Custom Macro Toolbars', 'Automated Drawing Generation'],
        image: '/assets/cad_automation.png',
        reversed: false
    }
];

const faqs = [
    {
        q: "How long does a typical digital project take?",
        a: "A standard corporate website takes around 4-6 weeks from requirement gathering to deployment. Complex e-commerce platforms or custom CAD automation tools typically require 8-12 weeks depending on the technical scope."
    },
    {
        q: "Do you offer post-deployment support?",
        a: "Absolutely. We offer customized Service Level Agreements (SLAs) tailored to your operational needs. This includes 24/7 server monitoring, security patching, and ongoing feature development."
    },
    {
        q: "What CAD software do you primarily automate?",
        a: "Our engineering team specializes heavily in Dassault Systèmes SolidWorks utilizing VBA and the SolidWorks API/C# Interop, but we also have deep expertise in AutoCAD and Autodesk Inventor automation workflows."
    },
    {
        q: "Can you rescue an existing broken e-commerce site?",
        a: "Yes. We offer legacy migration and code-rescue services where we audit your current architecture, plug active security leaks, and transition your platform to a modern, headless stack without losing SEO ranking."
    }
];

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Our Services | Web Development, E-Commerce & CAD Design by Zanntec"
                description="Explore Zanntec's services: Custom Website Development, Headless E-Commerce, UX/UI Design, CAD Drafting, and SolidWorks VBA Automation."
                canonicalPath="/services"
            />

            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Core Capabilities</div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8 flex flex-col items-center">
                        <span>DIGITAL &</span>
                        <span className="text-accent italic">ENGINEERING</span>
                        <span>EXPERTISE</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        We don't offer generic templates or cookie-cutter drafting. We architect comprehensive, highly tailored solutions designed explicitly to accelerate your growth and streamline operational workflows.
                    </p>
                </motion.div>
            </section>

            {/* Detailed Service Blocks */}
            <section className="bg-secondary py-16 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-32">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col lg:flex-row gap-16 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] group shadow-xl">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors z-10 duration-700" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center z-20 shadow-lg">
                                        <service.icon className="w-8 h-8 text-accent" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-accent mb-3">{service.subtitle}</div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight hyphens-auto">{service.title}</h2>
                                </div>

                                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                    {service.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {service.features.map((feature, j) => (
                                        <div key={j} className="flex items-start gap-3 text-primary font-bold">
                                            <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors group">
                                        Discuss this service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-32 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-6">FREQUENTLY ASKED</h2>
                        <p className="text-xl text-gray-400 font-medium">Common intelligence regarding our operational protocols.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-[20px] overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-xl font-bold pr-8">{faq.q}</span>
                                    <Plus className={`w-6 h-6 shrink-0 text-accent transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} />
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-8 pt-2 text-lg text-gray-400 font-medium leading-relaxed border-t border-white/10 mx-8 mt-2">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-accent text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-8">Ready to Scale Your Operations?</h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Let's bypass the buzzwords and calculate exactly how our engineering and digital stacks can aggressively augment your bottom line.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Schedule Technical Discovery
                    </Link>
                </div>
            </section>

        </main>
    );
}
