import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  alt: string;
}

const articles: ArticleItem[] = [
  {
    slug: 'why-every-business-needs-website-2026',
    title: 'Why Every Business in Nagercoil Needs Bespoke Web Architecture in 2026',
    excerpt: 'Examining why custom handwritten web applications outperform slow CMS templates in search visibility, customer conversion, and mobile network performance across Tamil Nadu.',
    date: 'April 11, 2026',
    readTime: '8 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engineering blueprint and strategic technical planning'
  },
  {
    slug: 'how-ecommerce-works-complete-guide',
    title: 'How High-Volume E-Commerce Systems Work Behind the Scenes',
    excerpt: 'An engineering breakdown of inventory synchronization, payment state machines, automated reconciliation, and edge caching for modern commerce platforms.',
    date: 'April 11, 2026',
    readTime: '10 min read',
    category: 'Systems',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-throughput commercial inventory handling terminal'
  },
  {
    slug: 'how-cms-works-guide-for-businesses',
    title: 'Content Management Architectures: Headless vs Monolithic CMS',
    excerpt: 'Why decoupled headless architectures protect enterprise databases and allow rapid frontend updates without exposing administrative backends to web vulnerabilities.',
    date: 'April 11, 2026',
    readTime: '7 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    alt: 'Code terminal and content architecture schema'
  }
];

export default function Blog() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Zanntec Engineering Journal',
    description: 'Technical insights on web development, e-commerce architectures, and technical SEO from Zanntec studio in Nagercoil.',
    url: 'https://www.zanntec.org/blog'
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-28">
      <SEOHead
        title="Engineering Journal | Zanntec Studio"
        description="Technical articles and architectural notes on web development, high-throughput ecommerce, and search performance from Zanntec studio in Nagercoil."
        canonicalPath="/blog"
        keywords="web development blog tamil nadu, ecommerce architecture guide, headless cms engineering, local seo strategy nagercoil"
        jsonLd={blogJsonLd}
      />

      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="w-full">
          <h1 className="font-display font-extrabold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[#050f16] max-w-[20ch]">
            ENGINEERING JOURNAL <br />
            <span className="text-[#ff7a1f]">AND FIELD NOTES</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#394852] font-medium max-w-2xl mt-6 leading-relaxed">
            Technical write-ups, architectural analyses, and performance benchmarks from our software practice in Nagercoil, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Articles Grid (Clean Editorial Plates, Zero Shadows, Zero Hairlines) */}
      <section className="px-6 md:px-12 pb-24 md:pb-36">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {articles.map((post) => (
            <article
              key={post.slug}
              className="bg-white flex flex-col justify-between p-6 hover:bg-[#e8e8e5] transition-[background-color] duration-150 group"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#050f16] mb-6">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-102 transition-[transform] duration-300"
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-sans text-[#7a8a94] mb-3">
                  <span className="font-semibold uppercase tracking-wider text-[#ff7a1f]">
                    {post.category}
                  </span>
                  <span className="tabular">{post.date} · {post.readTime}</span>
                </div>

                <h2 className="font-display font-bold uppercase text-2xl md:text-3xl leading-[0.96] text-[#050f16] mb-4 group-hover:text-[#ff7a1f] transition-[color] duration-150">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="font-sans text-sm md:text-base text-[#394852] font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-display font-bold text-base uppercase tracking-wider text-[#050f16] group-hover:text-[#ff7a1f] transition-[color] duration-150"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Newsletter / Consultation Strip */}
      <section className="py-20 px-6 md:px-12 bg-[#050f16] text-[#f4f4f2]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl leading-none text-white">
              NEED AN ARCHITECTURAL AUDIT?
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#95a3ad] font-medium mt-2">
              We analyze legacy bottlenecks, TTFB latency scores, and database bottlenecks for businesses across Tamil Nadu.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-[#ff7a1f] text-[#050f16] hover:bg-white hover:text-[#050f16] px-8 py-4 font-display font-bold text-lg uppercase tracking-wider transition-[background-color,color] duration-150 inline-block text-center"
          >
            Request Code Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
