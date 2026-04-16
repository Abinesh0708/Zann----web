import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Contact() {
    const contactJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Zanntec - Web Development Company in Nagercoil",
        "description": "Contact Zanntec for web development, CAD automation, and SEO services in Nagercoil, Tirunelveli, and Tamil Nadu. Get a free consultation today.",
        "url": "https://www.zanntec.org/contact",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Zanntec",
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
            "openingHours": "Mo-Fr 09:00-18:00",
            "areaServed": ["Nagercoil", "Tirunelveli", "Tamil Nadu", "India"]
        }
    };

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Contact Zanntec | Web Development & CAD Services in Nagercoil, Tamil Nadu"
                description="Contact Zanntec for affordable website development, ecommerce solutions, SolidWorks CAD automation, and SEO services in Nagercoil, Tirunelveli, and Tamil Nadu. Call +91 82480 94054 for a free consultation."
                canonicalPath="/contact"
                keywords="web development company in nagercoil, digital marketing company tirunelveli, local seo company nagercoil, engineering service provider nagercoil, startup website development nagercoil, affordable website design tirunelveli, digital solutions company nagercoil"
                jsonLd={contactJsonLd}
            />
            {/* Header */}
            <section className="max-w-4xl mx-auto px-6 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Get In Touch</div>
                    <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider md:tracking-tighter leading-tight text-primary mb-8">
                        GET YOUR <br />
                        <span className="text-accent italic">FREE CONSULTATION</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Whether you need a website for your business in Nagercoil, ecommerce development in Tirunelveli, CAD automation services, or SEO help in Tamil Nadu — our team is ready to help you scale.
                    </p>
                </motion.div>
            </section>

            {/* Direct Contact Methods Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary p-10 rounded-[40px] border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Mail className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Email Us</h3>
                        <p className="text-gray-600 font-medium mb-6">Reach out for web development quotes, CAD automation inquiries, or SEO consultations.</p>
                        <a href="mailto:info@zanntec.org" className="text-xl font-bold text-primary hover:text-accent transition-colors truncate block">info@zanntec.org</a>
                    </motion.div>

                    {/* Call Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-primary text-white p-10 rounded-[40px] text-center hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4"
                    >
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Direct Line</h3>
                        <p className="text-gray-300 font-medium mb-6">Need immediate help with your website, ecommerce platform, or CAD project?</p>
                        <a href="tel:+918248094054" className="text-xl font-bold text-accent hover:text-white transition-colors">+91 82480 94054</a>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-secondary p-10 rounded-[40px] border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <MapPin className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Our Location</h3>
                        <p className="text-gray-600 font-medium mb-6">Serving businesses across Nagercoil, Tirunelveli, and all of Tamil Nadu, India.</p>
                        <div className="text-xl font-bold text-primary">Nagercoil, Tamil Nadu</div>
                    </motion.div>
                </div>
            </section>

            {/* High-Performance Delivery Section */}
            <section className="bg-primary py-16 md:py-32 text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12 text-center"
                    >
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Commitment</div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 leading-tight break-words hyphens-auto">
                                Precision Engineering. <br />
                                <span className="text-accent italic">Reliable Support.</span>
                            </h2>
                            <p className="text-xl text-gray-300 font-medium leading-relaxed">
                                We deliver uncompromising quality in every website, admin dashboard, and CAD model. Whether you're a startup in Nagercoil or an enterprise in Tamil Nadu, our digital solutions are built to perform flawlessly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            {[
                                {
                                    icon: Globe2,
                                    title: 'Secure & Scalable',
                                    desc: 'From secure website development to scalable ecommerce platforms, we follow rigorous quality assurance protocols for every project.',
                                },
                                {
                                    icon: Clock,
                                    title: 'Fast Turnaround',
                                    desc: 'We deploy lean methodologies to deliver fast loading websites and CAD automation solutions without ever sacrificing quality.',
                                },
                                {
                                    icon: Phone,
                                    title: 'Dedicated Support',
                                    desc: 'Mon – Fri: 9 AM – 6 PM IST. Website maintenance services and emergency support available via our direct line for critical systems.',
                                },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-accent" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{title}</h4>
                                    <p className="text-gray-400 font-medium leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
