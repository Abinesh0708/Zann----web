import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const blogPosts = [
    {
        slug: 'why-every-business-needs-website-2026',
        title: 'Why Every Business in Nagercoil Needs a Website in 2026',
        excerpt: 'Discover why having a professional website is essential for businesses in Nagercoil and Tamil Nadu. From Google visibility to customer trust — here\'s why 2026 is the year to go digital.',
        date: 'April 11, 2026',
        readTime: '8 min read',
        author: 'Zanntec Team',
        category: 'Business Growth',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop'
    },
    {
        slug: 'how-ecommerce-works-complete-guide',
        title: 'How E-Commerce Works: A Complete Guide for Business Owners',
        excerpt: 'Learn how e-commerce websites work behind the scenes — from product listings to payment gateways, inventory management, and order fulfillment. Everything you need to know before building your online store.',
        date: 'April 11, 2026',
        readTime: '10 min read',
        author: 'Zanntec Team',
        category: 'E-Commerce',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2670&auto=format&fit=crop'
    },
    {
        slug: 'how-cms-works-guide-for-businesses',
        title: 'How CMS Works: A Simple Guide for Business Owners',
        excerpt: 'Understand what a Content Management System (CMS) is, how it works, and why it\'s the smartest choice for managing your business website without touching code.',
        date: 'April 11, 2026',
        readTime: '7 min read',
        author: 'Zanntec Team',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop'
    }
];

export default function Blog() {
    return (
        <main className="pt-24 md:pt-32 pb-0 bg-white min-h-screen overflow-hidden">
            <SEOHead
                title="Blog | Web Development, E-Commerce & SEO Insights | Zanntec"
                description="Read the latest articles from Zanntec on web development, e-commerce, CMS, SEO strategies, and digital transformation tips for businesses in Nagercoil, Tirunelveli, and Tamil Nadu."
                canonicalPath="/blog"
                keywords="web development blog, ecommerce guide, CMS guide, why business needs website, SEO tips tamil nadu, digital marketing blog nagercoil"
            />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Insights & Resources</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
                        OUR <span className="text-accent italic">BLOG</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        Expert insights on web development, e-commerce, CMS, SEO, and digital transformation to help your business grow.
                    </p>
                </motion.div>
            </section>

            {/* Blog Grid */}
            <section className="bg-secondary py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link to={`/blog/${post.slug}`} className="block group h-full">
                                    <article className="bg-white rounded-[30px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-sm text-gray-400 font-medium mb-4">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                                            </div>
                                            <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest">
                                                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-accent text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6">Need Help with Your Website?</h2>
                    <p className="text-xl font-medium mb-10 text-white/90">
                        Whether you need an ecommerce store, CMS website, or business website — we're here to help.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
