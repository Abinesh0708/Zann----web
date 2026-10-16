import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const projectFramework = [
  {
    step: 'The Challenge',
    question: 'What did the business need to achieve, improve or solve?'
  },
  {
    step: 'The Objective',
    question: 'What was the intended outcome of the project?'
  },
  {
    step: 'Our Solution',
    question: 'How did we approach the design, development and implementation?'
  },
  {
    step: 'What We Delivered',
    question: 'Which pages, features, integrations and functional components were included?'
  },
  {
    step: 'Tools and Technologies',
    question: 'Which technologies were genuinely used to complete the work?'
  },
  {
    step: 'The Result',
    question: 'What was delivered, what functionality became available and what measurable impact can be verified?'
  }
];

const selectedProjects = [
  {
    id: 'industrial-ecommerce',
    title: 'Industrial Supply Commerce Platform',
    category: 'E-Commerce Development',
    challenge: 'A growing distributor needed to replace an unorganized catalog with a high-capacity digital store supporting categorized browsing, tiered pricing, and instant quotation requests.',
    objective: 'Create an intuitive shopping journey that reduced checkout friction and unified inventory inquiries into a structured pipeline.',
    delivered: 'Custom responsive storefront, 1,200+ SKU catalog indexing, faceted filtering, multi-tier cart & checkout, and automated enquiry routing.',
    tech: 'React, Node.js, PostgreSQL, Stripe & Razorpay Gateways'
  },
  {
    id: 'corporate-portal',
    title: 'Consulting & Logistics Corporate Presence',
    category: 'Business Website Development',
    challenge: 'An established service firm had an outdated digital presence that failed to convey their specialized capabilities to international enterprise buyers.',
    objective: 'Re-architect the website from the ground up with clear messaging, responsive layouts, fast page performance, and validated inquiry workflows.',
    delivered: 'Complete corporate website redesign, service capability matrices, leadership profiles, case study library, and technical on-page SEO foundations.',
    tech: 'Vite, Modern CSS Architecture, Headless CMS integration'
  },
  {
    id: 'sales-crm-pipeline',
    title: 'Multi-Branch Sales & Lead Management Workflow',
    category: 'CRM Solutions',
    challenge: 'Customer inquiries arriving across email, telephone, and website forms were tracked across separate spreadsheets, resulting in lost leads and missed follow-ups.',
    objective: 'Centralize contact records, enquiry tracking, and stage-by-stage sales pipelines with role-based visibility for regional representatives.',
    delivered: 'Centralized lead capture dashboard, opportunity stage tracking, task alerts, communication history log, and operational performance reports.',
    tech: 'Custom CRM Architecture, RESTful API endpoints, Webhook synchronizers'
  }
];

const globalPillars = [
  {
    title: 'Remote-Friendly Collaboration',
    desc: 'We discuss project requirements, share design references, review deliverables and coordinate milestones through structured online communication tools.'
  },
  {
    title: 'Clear Project Scope',
    desc: 'We define the expected deliverables, functionality, responsibilities and project milestones before implementation begins.'
  },
  {
    title: 'Solutions Matched to Your Business',
    desc: 'We consider your target audience, preferred platforms, business processes and technical requirements when planning the solution.'
  },
  {
    title: 'Communication Throughout the Project',
    desc: 'We maintain clear communication about progress, feedback, decisions and changes to the agreed scope at every checkpoint.'
  }
];

export default function Work() {
  const workJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Work | Zanntec Digital Solutions',
    description: 'Explore digital solutions built around business needs: website development, e-commerce platforms, CRM and CMS systems.',
    url: 'https://www.zanntec.org/work'
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-28">
      <SEOHead
        title="Our Work & Global Collaboration | Zanntec"
        description="Digital projects built around business needs. Explore how Zanntec plans, delivers, and measures website development, e-commerce and business software engagements."
        canonicalPath="/work"
        keywords="zanntec portfolio, digital projects, web development work, ecommerce case studies, crm implementation"
        jsonLd={workJsonLd}
      />

      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="w-full">
          <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
            Selected Work
          </span>
          <h1 className="font-display font-extrabold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[#050f16] max-w-[20ch]">
            DIGITAL PROJECTS <br />
            <span className="text-[#ff7a1f]">BUILT FOR BUSINESS</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#394852] font-medium max-w-2xl mt-6 leading-relaxed">
            Every business has a different challenge. Our work focuses on understanding those challenges and delivering digital solutions aligned with the project's objectives.
          </p>
        </div>
      </section>

      {/* Selected Projects Showcase */}
      <section className="px-6 md:px-12 pb-24">
        <div className="space-y-12 max-w-7xl mx-auto">
          {selectedProjects.map((proj, idx) => (
            <article
              key={proj.id}
              className={`p-8 md:p-14 ${
                idx % 2 === 0 ? 'bg-white text-[#050f16]' : 'bg-[#101b24] text-white'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <span className={`font-sans text-sm font-semibold block ${idx % 2 === 0 ? 'text-[#ff7a1f]' : 'text-[#ff7a1f]'}`}>
                    {proj.category}
                  </span>
                  <h2 className={`font-display font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl leading-[0.95] ${idx % 2 === 0 ? 'text-[#050f16]' : 'text-white'}`}>
                    {proj.title}
                  </h2>
                  <div className="pt-2 space-y-4">
                    <div>
                      <span className={`font-sans text-sm font-semibold block mb-1 ${idx % 2 === 0 ? 'text-[#7a8a94]' : 'text-[#7a8a94]'}`}>
                        The Challenge
                      </span>
                      <p className={`font-sans text-base leading-relaxed ${idx % 2 === 0 ? 'text-[#394852]' : 'text-[#95a3ad]'}`}>
                        {proj.challenge}
                      </p>
                    </div>
                    <div>
                      <span className={`font-sans text-sm font-semibold block mb-1 ${idx % 2 === 0 ? 'text-[#7a8a94]' : 'text-[#7a8a94]'}`}>
                        The Objective
                      </span>
                      <p className={`font-sans text-base leading-relaxed ${idx % 2 === 0 ? 'text-[#394852]' : 'text-[#95a3ad]'}`}>
                        {proj.objective}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 p-6 md:p-8 space-y-6 ${idx % 2 === 0 ? 'bg-[#f4f4f2]' : 'bg-[#050f16]'}`}>
                  <div>
                    <span className={`font-sans text-sm font-semibold block mb-2 ${idx % 2 === 0 ? 'text-[#7a8a94]' : 'text-[#7a8a94]'}`}>
                      What We Delivered
                    </span>
                    <p className={`font-sans text-base leading-relaxed ${idx % 2 === 0 ? 'text-[#050f16]' : 'text-[#f4f4f2]'}`}>
                      {proj.delivered}
                    </p>
                  </div>

                  <div>
                    <span className={`font-sans text-sm font-semibold block mb-2 ${idx % 2 === 0 ? 'text-[#7a8a94]' : 'text-[#7a8a94]'}`}>
                      Tools &amp; Technologies
                    </span>
                    <p className={`font-sans text-sm font-semibold ${idx % 2 === 0 ? 'text-[#394852]' : 'text-[#ff7a1f]'}`}>
                      {proj.tech}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider transition-[color] duration-150 ${
                        idx % 2 === 0 ? 'text-[#050f16] hover:text-[#ff7a1f]' : 'text-white hover:text-[#ff7a1f]'
                      }`}
                    >
                      <span>Discuss a Similar Build</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How We Present Our Projects (Framework Grid) */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
              Evaluation Methodology
            </span>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl text-[#050f16]">
              HOW WE PRESENT OUR PROJECTS
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#394852] font-medium mt-3 max-w-2xl leading-relaxed">
              Every case study and engagement is evaluated through a structured, objective lens to ensure transparent communication and measurable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectFramework.map((item, idx) => (
              <div key={idx} className="bg-[#f4f4f2] p-8 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-sm font-semibold text-[#ff7a1f] block mb-2">
                    Criterion 0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold uppercase text-2xl text-[#050f16] mb-3">
                    {item.step}
                  </h3>
                  <p className="font-sans text-base text-[#394852] font-medium leading-relaxed">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK WITH ZANNTEC (Worldwide Collaboration) */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#050f16] text-[#f4f4f2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 max-w-3xl">
            <span className="font-sans text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
              Work With Zanntec
            </span>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-white">
              DIGITAL SOLUTIONS <br />
              <span className="text-[#ff7a1f]">FOR BUSINESSES WORLDWIDE</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#95a3ad] font-medium mt-6 leading-relaxed">
              Great digital projects can be delivered across borders when the requirements, communication and workflow are clearly defined.
            </p>
            <p className="font-sans text-base text-[#95a3ad] font-medium mt-3 leading-relaxed">
              Whether you are launching a startup, modernising an established business website or improving your customer management processes, we focus on understanding your needs and aligning the project with your objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {globalPillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#101b24] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold uppercase text-2xl text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-base text-[#95a3ad] font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#ff7a1f] text-[#050f16] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#050f16] leading-tight">
                LET'S DISCUSS YOUR REQUIREMENTS
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#050f16] font-medium mt-3 leading-relaxed">
                Tell us where your business operates, what you want to build and what the project needs to accomplish.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#050f16] text-[#f4f4f2] hover:bg-white hover:text-[#050f16] px-8 py-5 font-display font-bold text-lg uppercase tracking-wider transition-[background-color,color] duration-150 shrink-0"
            >
              <span>Start a Global Project Enquiry</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
