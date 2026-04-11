import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, FileText, Pencil, Image, Settings, Globe2, Lock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function BlogHowCMSWorks() {
    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How CMS Works: A Simple Guide for Business Owners",
        "description": "Understand what a Content Management System (CMS) is, how it works, and why it's the smartest choice for managing your business website without touching code.",
        "author": { "@type": "Organization", "name": "Zanntec" },
        "publisher": { "@type": "Organization", "name": "Zanntec", "logo": { "@type": "ImageObject", "url": "https://www.zanntec.org/assets/logo.png" } },
        "datePublished": "2026-04-11",
        "dateModified": "2026-04-11",
        "url": "https://www.zanntec.org/blog/how-cms-works-guide-for-businesses",
        "mainEntityOfPage": "https://www.zanntec.org/blog/how-cms-works-guide-for-businesses"
    };

    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="How CMS Works: A Simple Guide for Business Owners | Zanntec Blog"
                description="Understand what a Content Management System (CMS) is, how it works, and why it's the smartest choice for managing your business website. Compare WordPress, Headless CMS, and custom solutions."
                canonicalPath="/blog/how-cms-works-guide-for-businesses"
                keywords="best CMS for business website India, custom website vs template website India, website maintenance services India, how CMS works, content management system guide"
                jsonLd={blogJsonLd}
            />

            <article className="max-w-4xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest mb-8 hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-8">
                        <span className="bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">Web Development</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-primary mb-6">
                        How CMS Works: A Simple Guide for Business Owners
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium mb-12 pb-12 border-b border-gray-100">
                        <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Zanntec Team</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> April 11, 2026</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7 min read</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg max-w-none"
                >
                    <div className="space-y-8 text-gray-700 font-medium leading-relaxed text-lg">

                        <p>
                            You've heard it before — "You need a CMS for your website." But what exactly is a CMS, and how does it work? If you're a business owner in Nagercoil, Tirunelveli, or anywhere in Tamil Nadu, this guide will explain everything in simple terms so you can make the best decision for your business website.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary !mb-6 !mt-12">What is a CMS?</h2>
                        <p>
                            A <strong>Content Management System (CMS)</strong> is software that lets you create, edit, and manage the content on your website — <strong>without writing any code</strong>. Think of it as a control panel for your website. Just like you use WhatsApp to send messages without understanding networking protocols, a CMS lets you update your website without understanding HTML, CSS, or JavaScript.
                        </p>
                        <p>
                            With a CMS, you can add new pages, update text and images, publish blog posts, manage products, and more — all through a user-friendly dashboard.
                        </p>

                        {/* Visual: How CMS Works */}
                        <div className="rounded-[30px] bg-primary text-white p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">The 3 Layers of a CMS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { icon: Pencil, title: "Content Creation", desc: "Write and format text, upload images, embed videos — all through a visual editor that feels like using Microsoft Word." },
                                    { icon: Settings, title: "Management Layer", desc: "Organize pages, set navigation menus, manage user permissions, schedule posts, and control who can edit what." },
                                    { icon: Globe2, title: "Presentation Layer", desc: "Your website's design and layout. The CMS applies your content to pre-built templates so everything looks professional automatically." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                                        <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-7 h-7 text-accent" />
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-300 text-base font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary !mb-6 !mt-12">How Does a CMS Actually Work?</h2>
                        <p>Here's the simple process:</p>

                        <div className="space-y-6">
                            {[
                                { step: "1", title: "You Log In", desc: "Open your browser, go to your website's admin URL (like yoursite.com/admin), and log in with your credentials." },
                                { step: "2", title: "Create or Edit Content", desc: "Use the visual editor to write text, upload images, or modify existing pages. No coding needed — it works like a word processor." },
                                { step: "3", title: "Click Publish", desc: "Hit the publish button. The CMS stores your content in a database and instantly updates your live website." },
                                { step: "4", title: "Visitors See the Update", desc: "When someone visits your website, the CMS pulls the latest content from the database and displays it with your design template." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-extrabold shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary !mb-6 !mt-12">Popular CMS Options in India</h2>

                        <div className="rounded-[30px] bg-secondary p-8 md:p-12 border border-gray-100">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-extrabold text-primary mb-2">WordPress</h3>
                                    <p className="text-gray-600">The world's most popular CMS. Powers 43% of all websites globally. Best for blogs, business sites, and basic e-commerce. Huge plugin ecosystem but requires regular security updates and maintenance.</p>
                                </div>
                                <div className="border-t border-gray-200 pt-8">
                                    <h3 className="text-xl font-extrabold text-primary mb-2">Headless CMS (Strapi, Contentful)</h3>
                                    <p className="text-gray-600">Modern approach where content is separated from design. Offers maximum flexibility for custom websites and apps. Ideal for businesses that need high performance and scalability. Used by enterprises and tech-forward companies.</p>
                                </div>
                                <div className="border-t border-gray-200 pt-8">
                                    <h3 className="text-xl font-extrabold text-primary mb-2">Custom CMS (Built for You)</h3>
                                    <p className="text-gray-600">A tailor-made content management system designed specifically for your business needs. No bloat, no unnecessary features — just exactly what you need. This is what Zanntec recommends for businesses that want complete control and maximum performance.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary !mb-6 !mt-12">Custom Website vs Template Website</h2>
                        <p>
                            This is one of the most common questions business owners ask. Here's the honest comparison:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse rounded-2xl overflow-hidden">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="p-4 text-left font-bold">Feature</th>
                                        <th className="p-4 text-left font-bold">Template (WordPress)</th>
                                        <th className="p-4 text-left font-bold">Custom Built</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Design", "Pre-made, limited customization", "100% unique to your brand"],
                                        ["SEO Performance", "Average", "Fully optimized from ground up"],
                                        ["Loading Speed", "Often slow due to plugins", "Ultra-fast, clean code"],
                                        ["Security", "Frequent vulnerabilities", "Enterprise-grade security"],
                                        ["Scalability", "Limited by theme/plugins", "Unlimited growth potential"],
                                        ["Cost (Initial)", "₹5,000 – ₹20,000", "₹30,000 – ₹2,00,000+"],
                                        ["Long-term Cost", "High (plugin fees, fixes)", "Low (maintenance only)"],
                                        ["Best For", "Simple blogs, basic sites", "Serious businesses, e-commerce"]
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-secondary' : 'bg-white'}>
                                            <td className="p-4 font-bold text-primary">{row[0]}</td>
                                            <td className="p-4 text-gray-600">{row[1]}</td>
                                            <td className="p-4 text-gray-600">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            For businesses serious about growth, a custom-built website with a tailored CMS is the better investment. You get exactly what you need, it runs faster, ranks better on Google, and costs less in the long run.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary !mb-6 !mt-12">Why Your Business Needs a CMS</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Update content without hiring a developer",
                                "Publish blog posts for SEO ranking",
                                "Manage products and inventory",
                                "Control multiple user permissions",
                                "Schedule content in advance",
                                "Keep your website fresh and relevant"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span className="font-bold text-primary">{item}</span>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary !mb-6 !mt-12">The Bottom Line</h2>
                        <p>
                            A CMS is the engine that keeps your website running smoothly. It lets you take control of your content, reduce dependency on developers, and keep your website updated and engaging. Whether you choose WordPress, a headless CMS, or a custom-built solution — having a CMS is essential for any business website in 2026.
                        </p>
                        <p>
                            The best CMS for your business depends on your needs, budget, and growth plans. If you're unsure which option to choose, we're here to help you make the right decision.
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <div className="mt-16 mb-16 pt-12 border-t border-gray-100">
                    <div className="bg-secondary p-8 md:p-12 rounded-[30px] text-center">
                        <h3 className="text-2xl font-extrabold text-primary mb-4">Need a Website with a Custom CMS?</h3>
                        <p className="text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
                            Zanntec builds custom CMS-powered websites for businesses in Nagercoil, Tirunelveli, and Tamil Nadu. Easy to manage, fast to load, and built for growth.
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all">
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
