import { ArrowLeft, ArrowUpRight, ShoppingCart, CreditCard, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const coreComponents = [
  {
    icon: ShoppingCart,
    tag: 'Layer 01',
    title: 'The Storefront',
    desc: 'The performant user interface where customers discover, filter, and evaluate products with instant response times.'
  },
  {
    icon: CreditCard,
    tag: 'Layer 02',
    title: 'Payment Engine',
    desc: 'Encrypted checkout pipelines processing credit cards, UPI, and global payment rails with zero drop-off.'
  },
  {
    icon: Package,
    tag: 'Layer 03',
    title: 'Fulfillment & Inventory',
    desc: 'Real-time database reconciliation, webhook triggers, and automated shipping workflows across regional warehouses.'
  }
];

const transactionSteps = [
  {
    step: 'Phase 01',
    name: 'Customer Authentication & Tokenization',
    desc: 'The customer enters billing information. Sensitive card or UPI tokens are encrypted at the client level and transmitted to payment gateway APIs without exposing raw credentials to server logs.'
  },
  {
    step: 'Phase 02',
    name: 'Real-Time Clearing & Bank Reconciliation',
    desc: 'The payment processor verifies available funds through card networks or central banking rails, returns a signed verification token, and updates transaction state.'
  },
  {
    step: 'Phase 03',
    name: 'Atomic Inventory Decrement',
    desc: 'Database transactions atomically lock and deduct SKU quantities from the operational catalog to prevent duplicate purchases during concurrent high-traffic spikes.'
  },
  {
    step: 'Phase 04',
    name: 'Asynchronous Webhook Fulfillment',
    desc: 'Transactional webhooks fire simultaneously to generate PDF invoices, dispatch customer notifications, and route order details to logistics dispatch teams.'
  }
];

export default function BlogHowEcommerceWorks() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.zanntec.org/blog/how-ecommerce-works-complete-guide'
    },
    headline: 'How High-Volume E-Commerce Systems Work Behind the Scenes',
    description: 'An engineering breakdown of inventory synchronization, payment state machines, automated reconciliation, and edge caching for modern commerce platforms.',
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
    dateModified: '2026-04-11'
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-28 pb-24">
      <SEOHead
        title="How High-Volume E-Commerce Systems Work Behind the Scenes | Zanntec Journal"
        description="An engineering breakdown of inventory synchronization, payment state machines, automated reconciliation, and edge caching for modern commerce platforms."
        canonicalPath="/blog/how-ecommerce-works-complete-guide"
        keywords="ecommerce architecture, online store development, payment gateway integration, inventory synchronization, zanntec blog"
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
              Commerce Systems Engineering
            </span>
            <h1 className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-[#050f16] mb-6">
              HOW HIGH-VOLUME E-COMMERCE <br />
              <span className="text-[#ff7a1f]">SYSTEMS WORK BEHIND THE SCENES</span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 font-sans text-sm text-[#7a8a94] font-medium py-4">
              <span>Author: Zanntec Practice</span>
              <span className="tabular">Published: April 11, 2026</span>
              <span className="tabular">Read Time: 10 min read</span>
            </div>
          </div>

          {/* Lead Abstract Box */}
          <div className="mt-8 bg-[#e8e8e5] p-8 md:p-10 font-sans text-lg md:text-xl text-[#050f16] font-medium leading-relaxed">
            E-Commerce extends far beyond a digital catalog storefront. It operates as an interconnected ecosystem coordinating client-side UI latency, multi-currency payment settlement, distributed database concurrency, and automated physical warehouse fulfillment.
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1: Core Components */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] mb-4">
              THE THREE OPERATIONAL LAYERS OF MODERN COMMERCE
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed mb-8">
              When a customer visits an online store, they interact exclusively with the presentation layer. However, reliable e-commerce development requires three coordinated sub-systems operating with sub-second synchronization:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreComponents.map((item, i) => (
                <div key={i} className="bg-white p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-sm font-semibold text-[#ff7a1f] block mb-2">
                      {item.tag}
                    </span>
                    <h3 className="font-display font-bold uppercase text-2xl text-[#050f16] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#394852] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <item.icon className="w-6 h-6 text-[#050f16]" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Transaction Lifecycle */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] mb-4">
              THE ORDER TRANSACTION LIFECYCLE
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed mb-8">
              From the instant a buyer submits payment to the moment warehouse dispatch receives the manifest, transactions undergo rigorous state validation across isolated servers:
            </p>

            <div className="space-y-4">
              {transactionSteps.map((step, idx) => (
                <div key={idx} className="bg-[#101b24] text-white p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-white">
                      {step.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-[#ff7a1f] shrink-0">
                      {step.step}
                    </span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-[#95a3ad] font-medium leading-relaxed m-0">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Bespoke Engineering vs Generic Store Builders */}
          <section className="bg-white p-8 md:p-12">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] mb-4">
              CUSTOM ARCHITECTURE VERSUS OFF-THE-SHELF TEMPLATES
            </h2>
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed">
              <p>
                Standard templates and hosted platforms provide a low barrier to entry for early experiments. However, as an e-commerce enterprise scales its catalogue beyond hundreds of products, off-the-shelf platforms encounter critical performance bottlenecks:
              </p>
              <p>
                1. <strong>Compounding Transaction Fees:</strong> Standard SaaS platforms deduct 1.5% to 3% on top of payment provider fees, capturing substantial margins from high-volume operations.
              </p>
              <p>
                2. <strong>Heavy Plugin Bloat:</strong> Adding routine features like tiered B2B pricing, regional tax calculation, and localized delivery scheduling requires dozens of third-party plugins that drag mobile loading speeds down past 4 seconds.
              </p>
              <p>
                3. <strong>Restricted Data Ownership:</strong> Custom database structures allow direct integration with internal ERPs, dedicated CRM pipelines, and local logistics partners without artificial API throttling.
              </p>
            </div>
          </section>

          {/* Bottom Project Intake CTA Plate */}
          <section className="bg-[#050f16] text-[#f4f4f2] p-10 md:p-14">
            <div className="max-w-2xl space-y-4">
              <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block">
                Next Steps
              </span>
              <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                READY TO ARCHITECT <br />
                <span className="text-[#ff7a1f]">YOUR DIGITAL STORE?</span>
              </h2>
              <p className="font-sans text-base text-[#95a3ad] font-medium leading-relaxed">
                We design and engineer bespoke e-commerce platforms with custom checkout flows, inventory synchronization, and zero percentage-based platform fees.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#ff7a1f] text-[#050f16] hover:bg-white hover:text-[#050f16] px-8 py-4 font-display font-bold text-lg uppercase tracking-wider transition-[background-color,color] duration-150"
                >
                  <span>Request Commerce Proposal</span>
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
