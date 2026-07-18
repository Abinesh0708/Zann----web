import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin, Code, ShoppingBag, Search, Smartphone, Star, Quote } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NagercoilWebDevelopment() {
    const pageJsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zanntec - Web Development Company in Nagercoil",
        "description": "Leading web development company in Nagercoil offering affordable website design, ecommerce website development, startup website services, local SEO, and admin dashboard solutions.",
        "url": "https://www.zanntec.org/nagercoil-web-development",
        "telephone": "+91-82480-94054",
        "email": "info@zanntec.org",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nagercoil",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "8.1833",
            "longitude": "77.4119"
        },
        "areaServed": {
            "@type": "City",
            "name": "Nagercoil"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00"
    };

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Web Development Company in Nagercoil | Affordable Website Design | Zanntec"
                description="Zanntec is the leading web development company in Nagercoil. We offer affordable website design, ecommerce website development, startup website services, local SEO, custom admin dashboards, and digital transformation services for businesses in Nagercoil and Kanyakumari district."
                canonicalPath="/nagercoil-web-development"
                keywords="web development company in nagercoil, ecommerce website development nagercoil, startup website development nagercoil, local seo company nagercoil, engineering service provider nagercoil, digital solutions company nagercoil, affordable website design nagercoil, best web developer nagercoil, SEO services for small business nagercoil"
                jsonLd={pageJsonLd}
            />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                        <MapPin className="w-4 h-4" /> Nagercoil, Tamil Nadu
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
                        WEB DEVELOPMENT <br />
                        COMPANY IN <br />
                        <span className="text-accent italic">NAGERCOIL</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        Zanntec is the leading web development company in Nagercoil, specializing in affordable website design, ecommerce website development, and digital transformation solutions for businesses in Kanyakumari district and across Tamil Nadu.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all gap-2">
                            Get Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold border-2 border-primary/10 text-primary hover:bg-gray-100 transition-all">
                            View Our Services
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Services We Offer in Nagercoil */}
            <section className="bg-secondary py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Services in Nagercoil</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-primary">
                            WHAT WE <span className="text-accent italic">OFFER</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Code, title: 'Website Development', desc: 'Responsive, SEO-optimized, fast-loading website development for startups and businesses in Nagercoil. From landing pages to corporate portals.' },
                            { icon: ShoppingBag, title: 'E-Commerce Development', desc: 'Custom ecommerce website development for local shops in Nagercoil. Scalable online stores with inventory management and secure payments.' },
                            { icon: Search, title: 'Local SEO Services', desc: 'Local SEO company in Nagercoil helping small businesses rank higher on Google. On-page SEO, keyword optimization, and Google Business Profile setup.' },
                            { icon: Smartphone, title: 'Admin Dashboards', desc: 'Custom admin dashboard development for businesses in Nagercoil. Powerful admin panels with real-time analytics, user management, and scalable backend architecture.' }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[30px] border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                    <service.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us for Nagercoil */}
            <section className="py-16 md:py-32 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                            WHY BUSINESSES IN <span className="text-accent italic">NAGERCOIL</span> <br />CHOOSE ZANNTEC
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            "Local team with deep understanding of Nagercoil's business landscape",
                            "Affordable website design packages for small businesses and startups",
                            "SEO-optimized websites that rank on Google India",
                            "Ecommerce solutions for local shops to sell online",
                            "Fast turnaround — your website ready in 2-4 weeks",
                            "Combined web + digital services unique to the region",
                            "Website maintenance and ongoing support included",
                            "Free consultation and transparent pricing"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-7 h-7 text-accent shrink-0 mt-0.5" />
                                <span className="text-lg font-medium text-gray-200">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm relative"
                    >
                        <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100" />
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                            ))}
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-8">
                            "Zanntec built our business website from scratch. Their affordable website design and local SEO services helped us get found on Google within the first month. Best web development company in Nagercoil!"
                        </p>
                        <div className="font-bold text-xl text-primary">Local Business Owner</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-accent mt-1">Nagercoil, Tamil Nadu</div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-accent text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-8">
                        Ready to Build Your Website in Nagercoil?
                    </h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Get a professional, SEO-optimized website for your business in Nagercoil. From startup websites to ecommerce platforms — we've got you covered.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
