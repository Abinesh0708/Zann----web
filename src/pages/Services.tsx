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
        subtitle: 'Responsive Website Design Services India',
        desc: 'We are a leading web development company in Nagercoil offering responsive, fast-loading, and SEO-optimized website development services. From high-converting landing page design to scalable corporate portals, our frontend and backend engineers use modern frameworks (React, Next.js, Node.js) to deliver mobile-friendly website design that ranks higher on Google.',
        features: ['Responsive Website Design', 'SEO-Optimized Development', 'Mobile-Friendly Architecture', 'Fast Loading Performance'],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop',
        reversed: false
    },
    {
        id: "cms",
        icon: Code,
        title: 'Website Maintenance & CMS',
        subtitle: 'Secure Website Development Company',
        desc: 'Deploying a website is only the first step. Keep your infrastructure updated, immune to vulnerabilities, and optimized with our ongoing website maintenance services in India. We build and integrate custom Content Management Systems (CMS) — the best CMS for business websites in India — so your team can manage assets effortlessly.',
        features: ['Headless CMS Integrations', 'Real-time Security Patching', 'Performance Optimization', '24/7 Server Monitoring'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        reversed: true
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        title: 'E-Commerce Solutions',
        subtitle: 'Ecommerce Website Development Nagercoil',
        desc: 'We engineer highly scalable ecommerce websites for local shops in Tamil Nadu and businesses across India. Our e-commerce configurations come fully equipped with inventory sync, custom admin panel website development, conversion rate optimization, and secure payment gateways — designed to increase your business revenue.',
        features: ['Inventory Synchronization', 'Custom Payment Gateways', 'Admin Dashboard Development', 'Conversion Rate Optimization'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2500&auto=format&fit=crop',
        reversed: false
    },
    {
        id: "cad",
        icon: PenTool,
        title: 'CAD Design & Drafting',
        subtitle: 'Engineering CAD Services Tamil Nadu',
        desc: 'Leverage our precision-driven engineering CAD services in Tamil Nadu, tailored exclusively for high-stakes mechanical engineering, architectural, and industrial manufacturing applications. We produce pixel-perfect geometric blueprints compliant with international engineering standards (ISO/ASME/BS) — combining CAD design automation for manufacturing with expert drafting.',
        features: ['Complex 3D Solid Modeling', 'Parametric 2D Drafting', 'BOM & Assembly Animations', 'Rapid Prototyping Ready'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
        reversed: true
    },
    {
        id: "automation",
        icon: Cpu,
        title: 'CAD Automation',
        subtitle: 'SolidWorks Macro Automation Services',
        desc: 'If you draw the same part multiple times, you are losing money. Our CAD automation services India help manufacturing companies automate repetitive design processes using SolidWorks macro automation, CAD workflow optimization, and automation solutions for mechanical design — generating thousands of part variations instantly from Excel configurations.',
        features: ['SolidWorks API/VBA Control', 'Rule-Based Design Logic', 'Custom Macro Toolbars', 'Automated Drawing Generation'],
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop',
        reversed: false
    }
];

const faqs = [
    {
        q: "How long does a typical website development project take?",
        a: "A standard small business website takes around 4-6 weeks from requirement gathering to deployment. Complex ecommerce websites or custom CAD automation tools typically require 8-12 weeks depending on the scope. We offer the fastest turnaround for website development in Nagercoil and Tamil Nadu."
    },
    {
        q: "How much does website development cost in Tamil Nadu?",
        a: "Website development cost in Tamil Nadu varies based on complexity. A basic business website starts from ₹15,000, while custom ecommerce platforms and admin dashboards range from ₹50,000 to ₹2,00,000+. We offer affordable website design services in Tirunelveli and Nagercoil with flexible payment plans."
    },
    {
        q: "Why does every business need a website in 2026?",
        a: "In 2026, 85% of customers research online before making a purchase. A professional website increases your Google visibility, builds customer trust, captures mobile users, and helps you stand out from local competition in Nagercoil, Tirunelveli, and Tamil Nadu."
    },
    {
        q: "Do you offer SEO services for small businesses?",
        a: "Yes! As a local SEO company in Nagercoil, we provide comprehensive SEO services for small businesses including on-page optimization, local SEO, keyword research, content strategy, and Google ranking improvement. We help businesses rank their website on Google India."
    },
    {
        q: "What is the difference between custom website and template website?",
        a: "A custom website is built from scratch specifically for your business needs, offering unique design, better SEO, faster loading, and full scalability. Template websites are pre-built and cheaper but limited in customization. For businesses serious about growth, custom website development is the better investment in India."
    },
    {
        q: "What CAD software do you automate?",
        a: "Our engineering team specializes in SolidWorks macro automation using VBA and the SolidWorks API/C# Interop. We also have expertise in AutoCAD and Autodesk Inventor automation workflows. Our CAD automation services help manufacturing companies in India reduce design time by up to 85%."
    },
    {
        q: "Can you help my business get more clients using a website?",
        a: "Absolutely. We build high-converting landing pages, implement SEO-optimized content strategies, and design clear call-to-action elements that turn website visitors into paying customers. Our clients in Nagercoil and Tirunelveli have seen 3x increase in online inquiries."
    }
];

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const combinedJsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Web Development, CAD Automation & SEO Services | Zanntec",
            "description": "Explore Zanntec's specialized services: responsive website development, ecommerce solutions, SolidWorks CAD automation, admin dashboard development, and SEO services for businesses in Nagercoil, Tirunelveli, and Tamil Nadu.",
            "url": "https://www.zanntec.org/services"
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        }
    ];

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Website Development & CAD Automation Services in Nagercoil, Tamil Nadu | Zanntec"
                description="We provide SEO-optimized website development services designed to increase your online visibility, attract customers, and grow your business. Our solutions are tailored for startups, small businesses, and industrial enterprises in Nagercoil, Tirunelveli, and Tamil Nadu."
                canonicalPath="/services"
                keywords="responsive website design services India, SEO optimized website development, high converting landing page design India, admin panel website development, scalable website solutions for business, UI UX design services Tamil Nadu, fast loading website development India, mobile friendly website design service, website maintenance services India, secure website development company, CAD automation services India, SolidWorks macro automation services, ecommerce website development nagercoil"
                jsonLd={combinedJsonLd}
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
                        We provide SEO-optimized website development services designed to increase your online visibility, attract customers, and grow your business. Our solutions are tailored for startups, small businesses, and industrial enterprises.
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
                                        alt={`${service.title} - ${service.subtitle} | Zanntec`}
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
                        <p className="text-xl text-gray-400 font-medium">Common questions about our web development, CAD automation, and SEO services.</p>
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
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-8">Ready to Scale Your Business?</h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Whether you need a responsive website, ecommerce platform, CAD automation, or SEO services — let's discuss how our digital solutions can grow your business in Nagercoil, Tirunelveli, and across Tamil Nadu.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </Link>
                </div>
            </section>

        </main>
    );
}
