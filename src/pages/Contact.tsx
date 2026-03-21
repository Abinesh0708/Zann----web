import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Contact() {
    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen">
            <SEOHead
                title="Contact Us | Zanntec"
                description="Get in touch with Zanntec. Reach us by email at info@zanntec.com or call +91 82480 94054. Our engineering team is ready to help you scale your operations."
                canonicalPath="/contact"
            />
            {/* Header */}
            <section className="max-w-4xl mx-auto px-6 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Get In Touch</div>
                    <h1 className="text-3xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
                        WE'RE HERE TO <br />
                        <span className="text-accent italic">HELP YOU SCALE</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Whether you have a question about our engineering processes, pricing, or need technical support, our team is ready to answer all your questions.
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
                        <p className="text-gray-600 font-medium mb-6">Reach out for sales, proposals, custom quotes, or general inquiries.</p>
                        <a href="mailto:info@zanntec.com" className="text-xl font-bold text-primary hover:text-accent transition-colors truncate block">info@zanntec.com</a>
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
                        <p className="text-gray-300 font-medium mb-6">Need immediate technical assistance or have a pressing operational question?</p>
                        <a href="tel:+918248094054" className="text-xl font-bold text-accent hover:text-white transition-colors">+91 82480 94054</a>
                    </motion.div>

                    {/* Global Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-secondary p-10 rounded-[40px] border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Globe2 className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Global Support</h3>
                        <p className="text-gray-600 font-medium mb-6">Our engineering team is distributed to solve complex, mission-critical issues fast.</p>
                        <div className="text-xl font-bold text-primary">Priority Handling</div>
                    </motion.div>
                </div>
            </section>

            {/* Global Headquarters & Details */}
            <section className="bg-primary py-16 md:py-32 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Global Headquarters</h2>
                                <p className="text-xl text-gray-300 font-medium leading-relaxed">
                                    Our engineering hubs are strategically located to provide comprehensive, global coverage for our enterprise and automation clients.
                                </p>
                            </div>

                            <div className="space-y-8">


                                <div className="flex gap-6 items-start">
                                    <Phone className="w-8 h-8 text-accent shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">Direct Line</h4>
                                        <a href="tel:+918248094054" className="text-gray-400 font-medium hover:text-accent transition-colors text-lg">+91 82480 94054</a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <Clock className="w-8 h-8 text-accent shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">Operating Hours</h4>
                                        <p className="text-gray-400 font-medium leading-relaxed">
                                            Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                                            Saturday - Sunday: Emergency Support Only
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl relative">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
                                <img
                                    src="https://picsum.photos/seed/zanntec_office/800/600"
                                    alt="Office Location"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
