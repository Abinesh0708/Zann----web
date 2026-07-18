import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin, Search, Globe2, TrendingUp, BarChart3, Star, Quote } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TamilNaduSEOServices() {
    const pageJsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zanntec - SEO & Digital Marketing Services in Tamil Nadu",
        "description": "Best web developer in Tamil Nadu offering SEO services, website redesign, digital marketing, and manufacturing digital transformation services across the state.",
        "url": "https://www.zanntec.org/tamilnadu-seo-services",
        "telephone": "+91-82480-94054",
        "email": "info@zanntec.org",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nagercoil",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "areaServed": {
            "@type": "State",
            "name": "Tamil Nadu"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00"
    };

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Best Web Developer in Tamil Nadu | SEO & Digital Marketing Services | Zanntec"
                description="Zanntec is the best web developer in Tamil Nadu offering SEO services, website redesign, small business website services, digital transformation, and admin dashboard development across Tamil Nadu, India."
                canonicalPath="/tamilnadu-seo-services"
                keywords="best web developer in tamil nadu, small business website services tamil nadu, website redesign services tamil nadu, SEO services tamil nadu, ecommerce website for local shops tamil nadu, digital transformation services, innovative tech company tamil nadu, best startup tech company tamil nadu, website development cost in tamil nadu"
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
                        <MapPin className="w-4 h-4" /> Tamil Nadu, India
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
                        SEO & DIGITAL <br />
                        <span className="text-accent italic">MARKETING SERVICES</span> <br />
                        IN TAMIL NADU
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        Zanntec is the best web developer in Tamil Nadu offering comprehensive SEO services, website redesign, small business website services, and manufacturing digital transformation solutions. We help businesses across the state grow their online presence and rank higher on Google India.
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

            {/* Services */}
            <section className="bg-secondary py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Services Across Tamil Nadu</div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-primary">
                            HOW WE HELP <span className="text-accent italic">YOUR BUSINESS</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Search, title: 'SEO Services', desc: 'Comprehensive SEO services for businesses across Tamil Nadu. We help you rank higher on Google India with local SEO, on-page optimization, and content strategy.' },
                            { icon: Globe2, title: 'Website Redesign', desc: 'Website redesign services in Tamil Nadu. We transform outdated websites into modern, fast-loading, mobile-friendly digital platforms that convert visitors into customers.' },
                            { icon: TrendingUp, title: 'Digital Transformation', desc: 'Digital transformation services for businesses. We build modern web solutions, admin dashboards, and ecommerce platforms to modernize business workflows across Tamil Nadu.' },
                            { icon: BarChart3, title: 'Small Business Services', desc: 'Small business website services in Tamil Nadu. Affordable website development, ecommerce solutions, and SEO packages designed for startups and growing businesses.' }
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

            {/* Why Tamil Nadu Businesses Choose Us */}
            <section className="py-16 md:py-32 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                            WHY WE'RE THE <span className="text-accent italic">BEST</span> <br />IN TAMIL NADU
                        </h2>
                        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto font-medium">
                            As an innovative tech company in Tamil Nadu, we combine deep industry expertise with cutting-edge digital marketing to deliver measurable results for businesses across the state.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            "Best web developer in Tamil Nadu with proven results",
                            "Affordable SEO services starting from ₹5,000/month",
                            "Website redesign services that improve Google rankings by 3x",
                            "Ecommerce website development for local Tamil Nadu shops",
                            "Manufacturing digital transformation for engineering companies",
                            "Digital transformation combining web + dashboard expertise",
                            "Small business website packages with SEO included",
                            "Transparent pricing — website development cost in Tamil Nadu made clear"
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

            {/* How to Rank on Google - SEO Content */}
            <section className="py-16 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">SEO Guide</div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-primary">
                            HOW TO RANK YOUR <span className="text-accent italic">WEBSITE</span> ON GOOGLE
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            { step: "01", title: "SEO-Optimized Website Development", desc: "Start with a website that's built for search engines from the ground up. Mobile-friendly design, fast loading speeds, and clean code structure are essential for ranking on Google India." },
                            { step: "02", title: "Local SEO Strategy", desc: "Target location-specific keywords like 'web development company in nagercoil' or 'website design in tirunelveli'. Create Google Business Profile and build local citations across Tamil Nadu." },
                            { step: "03", title: "Quality Content Creation", desc: "Publish blog posts, case studies, and guides that answer questions your target audience is searching for. Topics like 'why businesses need a website in 2026' and 'custom website vs template website' drive organic traffic." },
                            { step: "04", title: "Technical SEO Fixes", desc: "Submit sitemap to Google Search Console, add proper meta titles and descriptions, use H1/H2 heading hierarchy, optimize images with alt tags, and improve page loading speed." },
                            { step: "05", title: "Conversion Optimization", desc: "Turn visitors into customers with high-converting landing page design, clear CTAs, trust signals like testimonials, and professional UI/UX design that builds credibility." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-8 items-start"
                            >
                                <div className="text-5xl font-extrabold text-gray-100 shrink-0 w-16">{item.step}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
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
                            "Zanntec's SEO services helped our manufacturing company reach page 1 on Google. Their unique combination of web development and engineering expertise makes them the best startup tech company in Tamil Nadu."
                        </p>
                        <div className="font-bold text-xl text-primary">Manufacturing Company Director</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-accent mt-1">Tamil Nadu, India</div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-accent text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-8">
                        Ready to Rank Higher on Google?
                    </h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Get professional SEO services and website development in Tamil Nadu. Let's boost your online visibility and business growth together.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
