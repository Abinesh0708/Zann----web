import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEOHead from '../components/SEOHead';
import { CheckCircle2, Factory, MonitorSmartphone, ShoppingCart, TrendingUp, Pickaxe, Building2, Star, Quote, ArrowRight } from 'lucide-react';

export default function Home() {
    const parallaxRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const homeJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Web Development Company in Nagercoil | CAD Automation Services India | Zanntec",
        "description": "Zanntec is a leading web development company in Nagercoil, Tamil Nadu offering affordable website design, ecommerce website development, SolidWorks CAD automation, SEO services, and digital transformation solutions for businesses across India.",
        "url": "https://www.zanntec.org/",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Zanntec",
            "url": "https://www.zanntec.org",
            "telephone": "+91-82480-94054",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagercoil",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <main className="overflow-hidden">
            <SEOHead
                title="Web Development Company in Nagercoil | CAD Automation & SEO Services | Zanntec"
                description="Zanntec is a leading web development company in Nagercoil, Tamil Nadu. We offer affordable website design, ecommerce website development, SolidWorks macro automation, custom admin dashboards, and SEO services for small businesses across Tirunelveli and Tamil Nadu."
                canonicalPath="/"
                keywords="web development company in nagercoil, website design in tirunelveli, best web developer in tamil nadu, ecommerce website development nagercoil, affordable website design tirunelveli, CAD automation services India, SolidWorks macro automation services, local seo company nagercoil, digital marketing company tirunelveli, startup website development nagercoil, Zanntec web solutions"
                jsonLd={homeJsonLd}
            />
            <Hero />

            {/* Why Choose Zanntec Section */}
            <section className="py-16 md:py-32 bg-primary text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Why Zanntec</div>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
                            WHY CHOOSE <br />
                            <span className="text-accent italic">ZANNTEC</span>
                        </h2>
                        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
                            As the best startup tech company in Tamil Nadu, we blend deep industry expertise with cutting-edge digital innovation to deliver scalable website solutions for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "SEO-Optimized Website Development", desc: "Every website we build is fully SEO optimized — from fast loading speeds to mobile-friendly design — ensuring your business ranks higher on Google India." },
                            { title: "Industrial CAD Automation Expertise", desc: "From SolidWorks macro automation to CAD workflow optimization, we deliver automation solutions for mechanical design that reduce production time by up to 85%." },
                            { title: "Scalable E-Commerce Solutions", desc: "Our ecommerce website development services are built to grow alongside your expanding customer base, with custom admin dashboards and real-time inventory management." },
                            { title: "Fast Turnaround Time", desc: "We deploy lean methodologies to deliver high-quality, fast loading website development — from responsive websites to custom admin panels — rapidly without sacrificing detail." },
                            { title: "Affordable & Cost-Effective", desc: "We offer affordable website design services in Tirunelveli and Nagercoil. Our automation pipelines reduce manual labor hours, converting directly to significant cost savings for your business." },
                            { title: "Dedicated Local Support", desc: "As an engineering service provider in Nagercoil, we provide round-the-clock website maintenance services, regular check-ins, and proactive troubleshooting for all our partners across Tamil Nadu." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-[30px] flex flex-col items-start gap-4 hover:bg-white/10 transition-colors group"
                            >
                                <CheckCircle2 className="w-10 h-10 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold leading-snug">{feature.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Solutions / Case Studies */}
            <section className="py-16 md:py-32 bg-secondary overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Case Studies</div>
                            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary">
                                PROVEN <span className="text-accent italic">RESULTS</span>
                            </h2>
                        </div>
                        <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors pb-4">
                            Explore All Services <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-primary">
                        <Link to="/case-study/ecommerce" className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-accent rounded-[40px]">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="rounded-[40px] overflow-hidden mb-8 h-[400px] relative">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2500&auto=format&fit=crop"
                                        alt="Ecommerce Website Development - Scalable E-Commerce Platform by Zanntec"
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                                        E-Commerce Scaling <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold group-hover:text-accent transition-colors break-words hyphens-auto">Next-Gen Industrial E-Commerce Platform</h3>
                                    <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-xl">
                                        We engineered a high-converting, scalable ecommerce website for local shops and industrial businesses, capable of handling 100k+ concurrent users with integrated inventory management systems.
                                    </p>
                                </div>
                            </motion.div>
                        </Link>

                        <Link to="/case-study/cad-automation" className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-accent rounded-[40px]">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="rounded-[40px] overflow-hidden mb-8 h-[400px] relative">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                                        alt="CAD Automation Services - SolidWorks Macro Automation by Zanntec"
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                                        CAD VBA Automation <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold group-hover:text-accent transition-colors break-words hyphens-auto">Automated Parametric CAD Modeling</h3>
                                    <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-xl">
                                        By developing custom SolidWorks macros and CAD design automation for manufacturing, we reduced manual modeling time by 85% for a top-tier manufacturing client — a showcase of our engineering CAD services in Tamil Nadu.
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Parallax Image Break */}
            <section ref={parallaxRef} className="h-[60vh] relative overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-primary/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop"
                        alt="Industrial Web Development and CAD Engineering Solutions"
                        referrerPolicy="no-referrer"
                        className="w-full h-[150%] object-cover object-center"
                    />
                </motion.div>
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
                        INNOVATION IN EVERY <span className="text-accent italic">DETAIL</span>
                    </h2>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                        We don't just build software or draw models. We architect comprehensive digital transformation solutions — combining web development and CAD automation to bring your business visions into reality.
                    </p>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-16 md:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Methodology</div>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary">
                            OUR <span className="text-accent italic">PROCESS</span>
                        </h2>
                        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto font-medium">
                            From requirement analysis to deployment, we follow a strict, iterative blueprint ensuring transparency, agility, and uncompromising quality. Our website development process is optimized for fast loading, secure, and high-converting results.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute left-[3.5rem] top-12 bottom-12 w-1 bg-primary/10" />

                        <div className="space-y-16">
                            {[
                                { title: 'Requirement Analysis', desc: 'We begin with deep-dive technical workshops to fully understand your operational pain points, business goals, and target audience — whether you need a startup website development in Nagercoil or an industrial CAD automation solution.' },
                                { title: 'Planning & Strategy', desc: 'Our architects develop wireframes, UI/UX designs, SEO strategies, and comprehensive sprint timelines — ensuring total alignment before development begins. We plan for responsive, mobile-friendly website design from day one.' },
                                { title: 'Design & Development', desc: 'Our cross-functional teams execute the blueprint with precision, building SEO-optimized, fast-loading websites and custom admin dashboards using modern frameworks like React and Next.js.' },
                                { title: 'Testing & Optimization', desc: 'Rigorous QA protocols, performance testing, and SEO audits guarantee your website loads fast, ranks higher on Google India, and converts visitors into customers.' },
                                { title: 'Delivery & Support', desc: 'Deployment is just the beginning. We provide complete website maintenance services including security patches, performance monitoring, and ongoing support for businesses across Tamil Nadu.' },
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col md:flex-row gap-8 md:gap-16 relative"
                                >
                                    <div className="w-28 h-28 rounded-[30px] bg-secondary text-primary border border-gray-100 flex items-center justify-center text-4xl font-extrabold shrink-0 z-10 shadow-sm">
                                        0{i + 1}
                                    </div>
                                    <div className="flex-1 pt-4">
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 break-words hyphens-auto">{step.title}</h3>
                                        <p className="text-gray-600 font-medium text-xl leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-32 bg-primary text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Client Feedback</div>
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-20">
                        WHAT OUR <span className="text-accent italic">PARTNERS</span> SAY
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            { name: "Sarah Jenkins", role: "CTO, TechBuild Manufacturing", text: "Zanntec completely revolutionized our CAD drafting pipeline. The SolidWorks VBA automation scripts they delivered cut our design iteration time in half. Best CAD automation services in India." },
                            { name: "Marcus Chen", role: "Founder, Apex Retail", text: "Scaling our E-Commerce platform seemed insurmountable until Zanntec's team rebuilt our backend architecture. Their ecommerce website development expertise is unmatched." },
                            { name: "Elena Rostova", role: "Director of IT, Global Logistics", text: "Their commitment to client support is unmatched. When we had a critical security update requirement, Zanntec had it resolved within the hour. Truly a secure website development company." }
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-10 rounded-[30px] relative"
                            >
                                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/10" />
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-5 h-5 text-accent fill-accent" />
                                    ))}
                                </div>
                                <p className="text-xl font-medium leading-relaxed text-gray-200 mb-8">
                                    "{t.text}"
                                </p>
                                <div>
                                    <div className="font-bold text-lg">{t.name}</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-accent mt-1">{t.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-16 md:py-32 bg-secondary overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Sectors</div>
                    <h2 className="text-3xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-20">
                        INDUSTRIES WE <span className="text-accent italic">SERVE</span>
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
                        {[
                            { name: 'Engineering & Manufacturing', icon: Factory },
                            { name: 'Mining & Industrial', icon: Pickaxe },
                            { name: 'E-commerce Businesses', icon: ShoppingCart },
                            { name: 'Startups & Enterprises', icon: TrendingUp },
                            { name: 'Construction & Infrastructure', icon: Building2 },
                        ].map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group px-2 py-5 sm:p-4 md:p-8 rounded-[30px] bg-white border border-gray-100 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 hover:bg-primary transition-colors shadow-sm cursor-pointer text-center box-border"
                            >
                                <div className="bg-secondary group-hover:bg-white/10 p-3 sm:p-4 md:p-6 rounded-full transition-colors shrink-0">
                                    <industry.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent" />
                                </div>
                                <h3 className="font-bold text-primary group-hover:text-white transition-colors text-xs sm:text-sm md:text-lg leading-snug hyphens-auto break-words">{industry.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-accent text-white text-center overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-8">Ready to Transform Your Business?</h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Whether you need a responsive website, an ecommerce platform, or CAD automation solutions — let's discuss how our digital services can grow your business in Tamil Nadu and beyond.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
