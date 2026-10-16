import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const cmsLayers = [
  {
    layer: 'Layer 01',
    title: 'Content Authoring Interface',
    desc: 'Structured editing environments allowing non-technical marketing and editorial teams to update copy, schedule articles, and manage rich media without touching code.'
  },
  {
    layer: 'Layer 02',
    title: 'Management & Access Control',
    desc: 'Granular role-based permissions, draft approval workflows, taxonomies, and version control protecting database integrity across multi-seat operations.'
  },
  {
    layer: 'Layer 03',
    title: 'Decoupled Presentation Engine',
    desc: 'High-speed frontend interfaces pulling cached data via instantaneous API responses, isolating the public user experience from administrative infrastructure.'
  }
];

const publishingWorkflow = [
  {
    phase: 'Stage 01',
    title: 'Structured Entry & Asset Upload',
    desc: 'Writers compose content in markdown or rich block fields. High-resolution images are automatically compressed, formatted into modern WebP variants, and distributed to CDN storage.'
  },
  {
    phase: 'Stage 02',
    title: 'Validation & Editorial Review',
    desc: 'Editorial checks verify metadata, OpenGraph preview cards, canonical URLs, and schema markers before committing changes to staging.'
  },
  {
    phase: 'Stage 03',
    title: 'Atomic Database Mutation',
    desc: 'The CMS commits structured JSON payloads to relational or document databases with automatic transaction rollback safeguards in place.'
  },
  {
    phase: 'Stage 04',
    title: 'Static Invalidation & Edge Delivery',
    desc: 'Webhooks trigger instant cache purge across regional edge nodes, displaying the updated page to global visitors in under 100 milliseconds.'
  }
];

const comparisonMatrix = [
  { feature: 'Frontend Architecture', legacy: 'Coupled monolith (PHP/HTML)', modern: 'Decoupled modern frontend (React/Vite)' },
  { feature: 'Page Load Speed', legacy: '1.8s – 4.5s (heavy plugin overhead)', modern: '200ms – 600ms (pre-rendered static assets)' },
  { feature: 'Security Vulnerability Surface', legacy: 'High (public admin panels & plugins)', modern: 'Minimal (headless API with isolated backend)' },
  { feature: 'Editorial Independence', legacy: 'Requires frequent developer fixes', modern: 'Zero code required for routine content updates' },
  { feature: 'Scalability Under Traffic', legacy: 'Requires expensive server clustering', modern: 'Global edge distribution handles traffic surges without performance degradation' }
];

export default function BlogHowCMSWorks() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Content Management Architectures: Headless vs Monolithic CMS',
    description: 'Why decoupled headless architectures protect enterprise databases and allow rapid frontend updates without exposing administrative backends to web vulnerabilities.',
    author: {
      '@type': 'Organization',
      name: 'Zanntec'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zanntec',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.zanntec.org/assets/logo.png'
      }
    },
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    url: 'https://www.zanntec.org/blog/how-cms-works-guide-for-businesses',
    mainEntityOfPage: 'https://www.zanntec.org/blog/how-cms-works-guide-for-businesses'
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-28 pb-24">
      <SEOHead
        title="Content Management Architectures: Headless vs Monolithic CMS | Zanntec Journal"
        description="Why decoupled headless architectures protect enterprise databases and allow rapid frontend updates without exposing administrative backends to web vulnerabilities."
        canonicalPath="/blog/how-cms-works-guide-for-businesses"
        keywords="headless cms vs monolithic, content management architecture, strapi headless, cms security, zanntec journal"
        jsonLd={blogJsonLd}
      />

      {/* Header Context */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider text-[#050f16] hover:text-[#ff7a1f] transition-[color] duration-150 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </Link>

          <div>
            <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-3">
              Content Architecture &amp; Security
            </span>
            <h1 className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-[#050f16] mb-6">
              CONTENT MANAGEMENT ARCHITECTURES: <br />
              <span className="text-[#ff7a1f]">HEADLESS VS MONOLITHIC CMS</span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 font-sans text-sm text-[#7a8a94] font-medium py-4">
              <span>Author: Zanntec Practice</span>
              <span className="tabular">Published: April 11, 2026</span>
              <span className="tabular">Read Time: 7 min read</span>
            </div>
          </div>

          {/* Lead Abstract Box */}
          <div className="mt-8 bg-[#e8e8e5] p-8 md:p-10 font-sans text-lg md:text-xl text-[#050f16] font-medium leading-relaxed">
            Content management architectures govern how digital assets are structured, versioned, and published. Transitioning from legacy monolithic templates to modern decoupled systems isolates administrative backends from public exploits while delivering sub-second page transitions to end users.
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1: The Three Layers */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] mb-4">
              THE THREE LAYERS OF MODERN CONTENT MANAGEMENT
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed mb-8">
              A Content Management System (CMS) enables authorized business staff to create, edit, organize, and publish web content without writing code. In modern production deployments, this responsibility is split into three decoupled tiers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cmsLayers.map((layer, idx) => (
                <div key={idx} className="bg-white p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-sm font-semibold text-[#ff7a1f] block mb-2">
                      {layer.layer}
                    </span>
                    <h3 className="font-display font-bold uppercase text-2xl text-[#050f16] mb-3">
                      {layer.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#394852] font-medium leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Publishing Pipeline */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] mb-4">
              THE FOUR-STAGE PUBLISHING PIPELINE
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed mb-8">
              Reliable content workflows protect production stability by automating image processing, validation, and edge distribution at every deployment step:
            </p>

            <div className="space-y-4">
              {publishingWorkflow.map((item, i) => (
                <div key={i} className="bg-[#101b24] text-white p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-white">
                      {item.title}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-[#ff7a1f] shrink-0">
                      {item.phase}
                    </span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-[#95a3ad] font-medium leading-relaxed m-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Comparison Table */}
          <section className="bg-white p-8 md:p-12">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] mb-4">
              ARCHITECTURAL COMPARISON: DECOUPLED VS MONOLITH
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed mb-8">
              Comparing traditional coupled CMS setups with modern decoupled architectures:
            </p>

            <div className="overflow-x-auto" data-ui="table">
              <table className="w-full text-left font-sans text-sm md:text-base">
                <thead>
                  <tr className="bg-[#050f16] text-[#f4f4f2]">
                    <th className="p-4 font-display font-bold uppercase tracking-wider text-base">Dimension</th>
                    <th className="p-4 font-display font-bold uppercase tracking-wider text-base text-[#95a3ad]">Traditional Monolith</th>
                    <th className="p-4 font-display font-bold uppercase tracking-wider text-base text-[#ff7a1f]">Decoupled Architecture</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#f4f4f2]' : 'bg-white'}>
                      <td className="p-4 font-bold text-[#050f16]">{row.feature}</td>
                      <td className="p-4 text-[#7a8a94] font-medium">{row.legacy}</td>
                      <td className="p-4 text-[#050f16] font-semibold">{row.modern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Project Intake CTA Plate */}
          <section className="bg-[#050f16] text-[#f4f4f2] p-10 md:p-14">
            <div className="max-w-2xl space-y-4">
              <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block">
                Take Control
              </span>
              <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                NEED A CUSTOM CMS <br />
                <span className="text-[#ff7a1f]">FOR YOUR ORGANISATION?</span>
              </h2>
              <p className="font-sans text-base text-[#95a3ad] font-medium leading-relaxed">
                We develop fast, secure content management systems tailored to your internal editorial workflows, team permissions, and publishing cadence.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#ff7a1f] text-[#050f16] hover:bg-white hover:text-[#050f16] px-8 py-4 font-display font-bold text-lg uppercase tracking-wider transition-[background-color,color] duration-150"
                >
                  <span>Request CMS Consultation</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
