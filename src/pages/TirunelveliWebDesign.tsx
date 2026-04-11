import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin, Code, Megaphone, Search, Palette, Star, Quote } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TirunelveliWebDesign() {
    const pageJsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zanntec - Website Design & Digital Marketing in Tirunelveli",
        "description": "Affordable website design and digital marketing company in Tirunelveli. We offer responsive web development, ecommerce solutions, SEO services, and UI/UX design for businesses across Tirunelveli district.",
        "url": "https://www.zanntec.org/tirunelveli-web-design",
        "telephone": "+91-82480-94054",
        "email": "info@zanntec.org",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tirunelveli",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "8.7139",
            "longitude": "77.7567"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tirunelveli"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00"
    };

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Website Design in Tirunelveli | Digital Marketing Company | Zanntec"
                description="Zanntec offers affordable website design in Tirunelveli, responsive web development, ecommerce solutions, digital marketing, and SEO services. We are the leading digital marketing company in Tirunelveli helping businesses grow their online presence."
                canonicalPath="/tirunelveli-web-design"
                keywords="website design in tirunelveli, affordable website design tirunelveli, digital marketing company tirunelveli, web development tirunelveli, ecommerce website tirunelveli, SEO services tirunelveli, UI UX design services, responsive website design, mobile friendly website design service"
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
                        <MapPin className="w-4 h-4" /> Tirunelveli, Tamil Nadu
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
                        WEBSITE DESIGN & <br />
                        <span className="text-accent italic">DIGITAL MARKETING</span> <br />
                        IN TIRUNELVELI
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        Zanntec is a leading digital marketing company in Tirunelveli offering affordable website design, responsive web development, SEO services, and UI/UX design for businesses across Tirunelveli district and southern Tamil Nadu.
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

            {/* Services We Offer */}
            <section className="bg-secondary py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Services in Tirunelveli</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-primary">
                            WHAT WE <span className="text-accent italic">OFFER</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Code, title: 'Website Design', desc: 'Affordable website design in Tirunelveli. We build responsive, mobile-friendly websites that look stunning on every device and load blazing fast.' },
                            { icon: Megaphone, title: 'Digital Marketing', desc: 'Full-service digital marketing company in Tirunelveli. Social media marketing, content strategy, and online advertising to grow your business.' },
                            { icon: Search, title: 'SEO Services', desc: 'Comprehensive SEO services to help Tirunelveli businesses rank higher on Google. Local SEO, on-page optimization, and keyword strategy.' },
                            { icon: Palette, title: 'UI/UX Design', desc: 'Professional UI UX design services creating intuitive, visually appealing interfaces that increase user engagement and drive business results.' }
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

            {/* Why Tirunelveli Businesses Choose Us */}
            <section className="py-16 md:py-32 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                            WHY BUSINESSES IN <span className="text-accent italic">TIRUNELVELI</span> <br />CHOOSE ZANNTEC
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            "Affordable website design packages starting from ₹15,000",
                            "Expert digital marketing team focused on Tirunelveli market",
                            "Mobile-friendly, responsive website design for all devices",
                            "SEO-optimized websites that drive organic traffic from Google",
                            "Custom ecommerce solutions for local Tirunelveli businesses",
                            "Professional UI/UX design that converts visitors to customers",
                            "Website redesign services for outdated business websites",
                            "Ongoing support and website maintenance included"
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
                            "Zanntec designed a beautiful, mobile-friendly website for my business. Their affordable website design and digital marketing helped us reach more customers in Tirunelveli. Highly recommended!"
                        </p>
                        <div className="font-bold text-xl text-primary">Small Business Owner</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-accent mt-1">Tirunelveli, Tamil Nadu</div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-accent text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-8">
                        Ready for a Stunning Website in Tirunelveli?
                    </h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Get affordable, professional website design and digital marketing services in Tirunelveli. Let's grow your online presence together.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
