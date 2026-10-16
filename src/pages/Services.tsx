import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  headline: string;
  desc: string;
  includes: string[];
  idealFor: string;
  prioritiesTitle: string;
  priorities: string[];
  ctaText: string;
}

const serviceList: ServiceItem[] = [
  {
    id: 'business-websites',
    badge: 'Core Service',
    title: 'Business Website Development',
    headline: 'Your Business Deserves a Better Online Presence.',
    desc: 'A professional website helps customers understand your business, explore your services and take the next step with confidence. Zanntec develops business websites around your brand, audience and objectives, with an emphasis on clear communication, responsive layouts and useful functionality.',
    includes: [
      'Corporate and company websites',
      'Small business websites',
      'Service-based business websites',
      'Landing pages and campaign portals',
      'Professional portfolio websites',
      'Website redesigns and legacy migrations',
      'Custom web functionality & APIs',
      'Contact forms and enquiry workflows',
      'Basic technical and on-page SEO foundations'
    ],
    idealFor: 'Startups, professional service providers, growing companies and established businesses improving their online presence.',
    prioritiesTitle: 'Our Engineering Priorities',
    priorities: [
      'Clear, professional presentation of your core business value',
      'Responsive layouts tested for mobile, tablet and desktop',
      'Intuitive navigation hierarchy and logical content structure',
      'Fast-loading pages and fully optimised static assets',
      'Search-friendly page structure and semantic metadata',
      'Functional enquiry forms with zero delivery failure'
    ],
    ctaText: 'Build Your Business Website'
  },
  {
    id: 'ecommerce',
    badge: 'Commerce Service',
    title: 'E-Commerce Development',
    headline: 'Turn Your Products Into an Online Shopping Experience.',
    desc: 'Your online store should help customers move from product discovery to purchase through a clear, reliable shopping journey. Zanntec develops e-commerce solutions based on your products, catalogue structure, business requirements and customer experience goals.',
    includes: [
      'Online store design and responsive development',
      'Product catalogues and structured product pages',
      'Product variations, categories and faceted filtering',
      'Shopping cart and checkout functionality',
      'Secure payment gateway integration',
      'Order management and processing features',
      'Inventory integration, where supported',
      'Customer account functionality and order histories',
      'Shipping, tax and delivery integrations'
    ],
    idealFor: 'Retail businesses, product brands, emerging online stores and businesses expanding into digital commerce.',
    prioritiesTitle: 'Designed Around Your Business',
    priorities: [
      'Structured catalog organisation tailored to product volume',
      'Frictionless checkout paths engineered for high conversion',
      'Multi-currency and local payment gateway support',
      'Inventory synchronisation with operational backends',
      'Security-first transaction and customer account records',
      'Maintainable architecture planned for catalog expansion'
    ],
    ctaText: 'Build Your Online Store'
  },
  {
    id: 'crm',
    badge: 'Operations Service',
    title: 'CRM Solutions',
    headline: 'Make Customer Management More Organised.',
    desc: 'When customer details, sales conversations and follow-up tasks are spread across different tools, important information can become difficult to track. A suitable CRM solution gives your team a more structured way to manage customer information, enquiries and sales activities. Zanntec helps businesses evaluate, configure or develop CRM solutions around their workflows.',
    includes: [
      'CRM requirements analysis and workflow audit',
      'Customer and contact management repositories',
      'Lead capture and multi-channel enquiry tracking',
      'Sales pipeline and opportunity deal stages',
      'Follow-up tasks, reminders and activity logs',
      'Customer communication logs and notes',
      'Team access and granular role-based permissions',
      'Workflow automation and operational notifications',
      'Reporting dashboards and sales visibility metrics'
    ],
    idealFor: 'Sales teams, service businesses, B2B companies and growing organisations that need a more structured way to manage customer relationships.',
    prioritiesTitle: 'Implementation Approach',
    priorities: [
      'Thorough analysis of existing lead intake methods',
      'Custom pipeline stages aligned with team sales milestones',
      'Centralized records eliminating siloed spreadsheets',
      'Automated follow-up alerts preventing lost opportunities',
      'Role permissions ensuring operational data security',
      'Website-to-CRM form integration for immediate capture'
    ],
    ctaText: 'Explore CRM Solutions'
  },
  {
    id: 'cms',
    badge: 'Content Service',
    title: 'CMS Solutions',
    headline: 'Take Control of Your Website Content.',
    desc: 'Your website changes as your business grows. New services, updated information, articles and product details should be manageable without unnecessary technical effort. Zanntec helps businesses choose, implement and improve content management systems that support their websites and publishing workflows.',
    includes: [
      'CMS-based website development from the ground up',
      'CMS integration with existing website codebases',
      'Editable pages and reusable structured content blocks',
      'Blog, knowledge base and article publishing modules',
      'Asset, document and media management libraries',
      'Taxonomy, category and content tag organisation',
      'User roles and publishing approval permissions',
      'CMS migration and data import from legacy systems',
      'Ongoing CMS enhancements and workflow optimizations'
    ],
    idealFor: 'Businesses with frequently updated websites, content teams, publishers and organisations that want greater control over routine updates.',
    prioritiesTitle: 'The Right CMS Approach',
    priorities: [
      'Clean editing interfaces without confusing technical overhead',
      'Modular content blocks reusable across multiple pages',
      'Role-based permissions for editors, writers, and admins',
      'Media library optimization for instant image rendering',
      'Direct deployment workflows without code regressions',
      'Training and structured handover for business staff'
    ],
    ctaText: 'Find Your CMS Solution'
  }
];

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What does Zanntec do?',
        a: 'Zanntec focuses on business website development, e-commerce development, CRM solutions and CMS solutions.'
      },
      {
        q: 'Who can work with Zanntec?',
        a: 'Our services are intended for startups, small and medium-sized businesses, e-commerce brands and other organisations seeking digital development or business software solutions.'
      },
      {
        q: 'Do you work with international clients?',
        a: 'We welcome enquiries from businesses worldwide. Project feasibility, communication arrangements, applicable requirements and delivery scope are evaluated for each engagement.'
      },
      {
        q: 'How do I get started?',
        a: 'Submit a project enquiry describing your business, requirements, goals and expected timeline. We can then discuss the appropriate next steps.'
      }
    ]
  },
  {
    category: 'Website Development',
    questions: [
      {
        q: 'How much does a business website cost?',
        a: 'Pricing depends on the number of pages, design complexity, functionality, integrations and content requirements. A proposal can be prepared after the scope is understood.'
      },
      {
        q: 'How long does development take?',
        a: 'Timelines depend on the project complexity, content readiness, integration requirements and feedback cycles. A project schedule is agreed after the requirements are defined.'
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Yes, subject to the existing platform and technical requirements. We can assess whether a redesign, improvement or redevelopment is appropriate.'
      },
      {
        q: 'Will the website be mobile-friendly?',
        a: 'Responsive behaviour is part of the agreed website scope, with layouts tested and engineered for all supported screen sizes.'
      }
    ]
  },
  {
    category: 'E-Commerce',
    questions: [
      {
        q: 'Can you develop an online store for international markets?',
        a: 'We can discuss stores intended for international audiences. Payment provider eligibility, currencies, shipping, taxes and relevant compliance requirements must be assessed for the target markets.'
      },
      {
        q: 'Can you integrate payment gateways?',
        a: 'We can evaluate suitable gateways based on the business location, platform, target countries and provider requirements.'
      },
      {
        q: 'Can you help migrate an existing online store?',
        a: 'Migration may be possible depending on the current platform, data structure, available export options and required functionality.'
      },
      {
        q: 'Can features be added later?',
        a: 'Additional features can be planned as separate enhancements based on technical feasibility and the agreed scope.'
      }
    ]
  },
  {
    category: 'CRM',
    questions: [
      {
        q: 'Does my business need a CRM?',
        a: 'A CRM may be useful if your team manages many enquiries, needs visibility into sales opportunities or struggles to maintain consistent customer records and follow-ups.'
      },
      {
        q: 'Can you customise a CRM?',
        a: 'Customisation depends on the chosen platform, available APIs, licensing and technical requirements.'
      },
      {
        q: 'Can you build a custom CRM?',
        a: 'Custom CRM development can be considered when standard platforms do not adequately support your workflows. We can assess the scope and feasibility before recommending an approach.'
      },
      {
        q: 'Can a CRM connect with my website?',
        a: 'Website-to-CRM integration may be possible for enquiry forms, lead records and other supported workflows, depending on the website and CRM platforms.'
      }
    ]
  },
  {
    category: 'CMS',
    questions: [
      {
        q: 'What is a CMS?',
        a: 'A content management system is software that allows authorised users to create, edit and manage website content through a structured interface.'
      },
      {
        q: 'Can I update pages without coding?',
        a: 'Yes, where the selected CMS and implementation provide the necessary editing features.'
      },
      {
        q: 'Can you add a CMS to my existing website?',
        a: 'This depends on the current technology, website architecture and migration or integration requirements.'
      },
      {
        q: 'Can a CMS support multiple users?',
        a: 'Many CMS platforms support multiple users and permissions. The exact configuration depends on the chosen system and project requirements.'
      }
    ]
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        q: 'Do you provide ongoing support?',
        a: 'Ongoing support and maintenance can be discussed as part of the project or a separate service agreement. Coverage and response arrangements depend on the agreed terms.'
      },
      {
        q: 'Can features be added after launch?',
        a: 'Additional functionality can be evaluated and planned based on the existing implementation, technical feasibility and the new project scope.'
      }
    ]
  }
];

export default function ServicesPage() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Website, E-Commerce, CRM and CMS Development',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Zanntec',
      url: 'https://www.zanntec.org',
      email: 'info@zanntec.org'
    }
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-28">
      <SEOHead
        title="Our Services | Zanntec Digital Solutions"
        description="Explore Zanntec's services: business website development, e-commerce development, CRM solutions and CMS solutions designed for modern business needs."
        canonicalPath="/services"
        keywords="business website development, ecommerce development, crm solutions, cms solutions, zanntec services"
        jsonLd={servicesJsonLd}
      />

      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="w-full">
          <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
            Our Services
          </span>
          <h1 className="font-display font-extrabold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[#050f16] max-w-[20ch]">
            DIGITAL SOLUTIONS <br />
            <span className="text-[#ff7a1f]">FOR MODERN BUSINESSES</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#394852] font-medium max-w-2xl mt-6 leading-relaxed">
            Your business deserves digital tools that fit the way you work and the customers you serve. We provide website development, e-commerce development, CRM solutions and CMS solutions to help businesses establish their online presence, support digital sales and organise essential workflows.
          </p>
        </div>
      </section>

      {/* The 4 Core Services */}
      <section className="w-full">
        {serviceList.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`w-full py-20 md:py-28 px-6 md:px-12 ${
                isEven ? 'bg-white text-[#050f16]' : 'bg-[#f4f4f2] text-[#050f16]'
              }`}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Heading, Subtitle, Description */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="font-sans text-sm font-semibold text-[#ff7a1f] block mb-2">
                      {service.badge}
                    </span>
                    <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl leading-[0.94] text-[#050f16]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-display font-bold text-xl md:text-2xl text-[#050f16] leading-snug">
                    {service.headline}
                  </p>

                  <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Priorities Grid */}
                  <div className="bg-[#e8e8e5] p-6 font-sans">
                    <span className="text-xs font-bold uppercase text-[#050f16] block mb-3">
                      {service.prioritiesTitle}
                    </span>
                    <ul className="space-y-2 text-sm text-[#394852] font-medium">
                      {service.priorities.map((item, pi) => (
                        <li key={pi} className="flex items-start gap-2">
                          <span className="text-[#ff7a1f] font-bold select-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#e8e8e5] p-6 font-sans">
                    <span className="text-xs font-bold uppercase text-[#7a8a94] block mb-2">
                      Ideal For
                    </span>
                    <p className="font-medium text-sm md:text-base text-[#050f16] m-0">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 bg-[#050f16] text-[#f4f4f2] hover:bg-[#ff7a1f] hover:text-[#050f16] px-8 py-4 font-display font-bold text-lg uppercase tracking-wider transition-[background-color,color] duration-150"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Inclusions List */}
                <div className="lg:col-span-6 bg-[#101b24] text-white p-8 md:p-12">
                  <span className="font-display font-bold text-xl uppercase tracking-tight block mb-6 text-[#ff7a1f]">
                    What Our Services Can Include
                  </span>
                  <ul className="space-y-3 font-sans text-sm md:text-base text-[#95a3ad]">
                    {service.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#ff7a1f] font-bold text-lg leading-none select-none">—</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Need More Than One Service? */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050f16] text-[#f4f4f2]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block">
            Integration &amp; Combined Workflows
          </span>
          <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-white">
            NEED MORE THAN <br />
            <span className="text-[#ff7a1f]">ONE SERVICE?</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#95a3ad] font-medium leading-relaxed">
            Your digital requirements may extend across multiple platforms. For example, an e-commerce business may need a website connected to a CRM, while a service company may need a CMS-powered website and a structured lead management system.
          </p>
          <p className="font-sans text-base sm:text-lg text-[#95a3ad] font-medium leading-relaxed">
            We can discuss the individual requirements, integration possibilities and implementation priorities to help you plan a suitable solution.
          </p>
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#ff7a1f] text-[#050f16] hover:bg-white hover:text-[#050f16] px-8 py-4 font-display font-bold text-lg uppercase tracking-wider transition-[background-color,color] duration-150"
            >
              <span>Discuss Your Requirements</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-white text-[#050f16]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
              Knowledge Repository
            </span>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl text-[#050f16]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium mt-3">
              Clear answers regarding our services, timelines, pricing and technical approaches.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveFaqCategory(idx);
                  setOpenFaq(0);
                }}
                className={`px-5 py-3 font-display font-bold text-sm uppercase tracking-wider transition-[background-color,color] duration-150 cursor-pointer ${
                  activeFaqCategory === idx
                    ? 'bg-[#050f16] text-[#f4f4f2]'
                    : 'bg-[#e8e8e5] text-[#050f16] hover:bg-[#d5d5d1]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4" data-ui="faq">
            {faqCategories[activeFaqCategory].questions.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-[#f4f4f2] p-6 transition-[background-color] duration-150">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-[#050f16] pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[#ff7a1f] shrink-0">
                      {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 font-sans text-base text-[#394852] font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="font-sans text-base text-[#394852] font-medium mb-4">
              Still have questions about your upcoming project?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-display font-bold text-lg uppercase tracking-wider text-[#050f16] hover:text-[#ff7a1f] transition-[color] duration-150"
            >
              <span>Contact Zanntec</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
