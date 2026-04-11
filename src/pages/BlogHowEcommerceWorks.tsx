import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShoppingCart, CreditCard, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function BlogHowEcommerceWorks() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.zanntec.org/blog/how-ecommerce-works-complete-guide"
    },
    "headline": "How E-Commerce Works: A Complete Guide for Businesses",
    "description": "Understanding the fundamental backend processes of an e-commerce platform and why scaling your retail business online is critical in 2026.",
    "author": {
      "@type": "Organization",
      "name": "Zanntec"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zanntec",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.zanntec.org/assets/logo.png"
      }
    },
    "datePublished": "2026-04-11",
    "dateModified": "2026-04-11"
  };

  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <SEOHead
        title="How E-Commerce Works: A Complete Guide | Zanntec Blog"
        description="Understanding the fundamental backend processes of an ecommerce website development platform and why scaling your retail business online is critical."
        canonicalPath="/blog/how-ecommerce-works-complete-guide"
        jsonLd={blogJsonLd}
      />

      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
            <span className="bg-gray-100 px-4 py-2 rounded-full">E-Commerce</span>
            <span>5 Min Read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight text-primary mb-8">
            How E-Commerce Works: <br />
            <span className="text-accent italic">A Complete Guide</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed border-l-4 border-accent pl-6">
            E-Commerce is more than just a digital storefront. It is an intricate ecosystem connecting front-end user experience, payment gateways, and backend inventory management. Here is how it really works.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-p:text-gray-600 prose-a:text-accent">
          <h2>The Core Components of an E-Commerce Website</h2>
          <p>
            When a customer visits an online store, they only see the visual 'front-end'. However, successful <strong>ecommerce website development</strong> requires a robust 'back-end' infrastructure to handle transactions securely and manage inventory efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 not-prose">
            {[
              { icon: ShoppingCart, title: "The Storefront", desc: "The UI where customers browse products." },
              { icon: CreditCard, title: "The Gateway", desc: "Securely processes credit cards and UPI." },
              { icon: Package, title: "The Fulfillment", desc: "Inventory updates and automated shipping logic." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-[20px] border border-gray-100">
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2>The Transaction Lifecycle</h2>
          <p>
            The lifecycle of an online purchase spans milliseconds across multiple global servers:
          </p>
          <ul>
            <li><strong>Step 1: Authorization.</strong> The customer enters payment details. The e-commerce backend communicates with a Payment Gateway (like Razorpay or Stripe) via an API.</li>
            <li><strong>Step 2: Processing.</strong> The gateway encrypts the data and confirms funds with the bank networks.</li>
            <li><strong>Step 3: Inventory Action.</strong> Upon success, the database subtracts the item from active stock.</li>
            <li><strong>Step 4: Fulfillment.</strong> Webhooks trigger automated emails to the customer and order details to the warehouse.</li>
          </ul>

          <h2>Why Custom Development Beats Templates</h2>
          <p>
            While Shopify or WooCommerce templates are great starting points, scalable businesses eventually hit limitations. As a leading <strong>web development company in Nagercoil</strong>, we build custom architectures that don't charge you percentage fees on every transaction and offer limitless CRM integrations.
          </p>

          <div className="bg-primary text-white p-8 sm:p-12 rounded-[30px] my-16 not-prose">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to build your digital store?</h3>
            <p className="text-gray-400 font-medium mb-8">
              We specialize in powerful ecommerce website development for retail businesses across Tamil Nadu.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all">
              Request a Proposal <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
