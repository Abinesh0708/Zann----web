import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Contact() {
    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Hire Expert SolidWorks Developers & B2B Web Engineers | Zanntec"
                description="Contact Zanntec to hire specialized SolidWorks API developers and enterprise B2B web engineers. Call +91 82480 94054 for rapid technical macro solutions."
                canonicalPath="/contact"
            />
            {/* Header */}
            <section className="max-w-4xl mx-auto px-6 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Get In Touch</div>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
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
                                We deliver uncompromising quality in every line of code and CAD model, ensuring your enterprise systems perform flawlessly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            {[
                                {
                                    icon: Globe2,
                                    title: 'Uncompromising Quality',
                                    desc: 'From digital architectures to mechanical drafting, we follow rigorous quality assurance protocols.',
                                },
                                {
                                    icon: Clock,
                                    title: 'Rapid Execution',
                                    desc: 'We deploy lean methodologies to deliver high-quality work without ever sacrificing detail.',
                                },
                                {
                                    icon: Phone,
                                    title: 'Dedicated Client Support',
                                    desc: 'Mon – Fri: 9 AM – 6 PM IST. Emergency support available via our direct line for critical systems.',
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
