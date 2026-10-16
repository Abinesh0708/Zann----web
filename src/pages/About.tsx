import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const whatWeDoItems = [
  {
    title: 'Website Development',
    desc: 'We create business websites that communicate your offering, strengthen your digital presence and make it easier for customers to connect with you.'
  },
  {
    title: 'E-Commerce Development',
    desc: 'We develop online shopping experiences designed around your products, customers, catalogue structure and business requirements.'
  },
  {
    title: 'CRM Solutions',
    desc: 'We help businesses organise customer information and sales workflows through suitable customer relationship management solutions.'
  },
  {
    title: 'CMS Solutions',
    desc: 'We help businesses manage digital content more efficiently through content management platforms suited to their websites and workflows.'
  }
];

const values = [
  {
    title: 'Clarity',
    desc: 'We believe successful projects begin with a clear understanding of the problem, the expected outcome and the work required.'
  },
  {
    title: 'Purpose',
    desc: 'Every design and development decision should serve the user\'s needs or the business objective.'
  },
  {
    title: 'Quality',
    desc: 'We aim to deliver work that meets agreed requirements and is reviewed carefully before handover.'
  },
  {
    title: 'Collaboration',
    desc: 'We value open communication, useful feedback and shared expectations throughout the project.'
  },
  {
    title: 'Adaptability',
    desc: 'We recognise that every business has different needs. Our solutions should reflect the project rather than follow a one-size-fits-all approach.'
  }
];

export default function About() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Zanntec',
    description: 'Helping businesses make better use of technology through website development, e-commerce, CRM and CMS solutions.',
    url: 'https://www.zanntec.org/about'
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-20 sm:pt-24 md:pt-28">
      <SEOHead
        title="About Us | Zanntec Digital Solutions"
        description="Zanntec is a digital solutions company focused on website development, e-commerce, CRM and CMS solutions for businesses worldwide."
        canonicalPath="/about"
        keywords="about zanntec, digital solutions company, business website development, ecommerce development, crm solutions, cms solutions"
        jsonLd={aboutJsonLd}
      />

      {/* Header Statement */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        <div className="w-full">
          <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
            About Zanntec
          </span>
          <h1 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.92] text-[#050f16]">
            HELPING BUSINESSES <br />
            <span className="text-[#ff7a1f]">USE TECHNOLOGY BETTER</span>
          </h1>
          <div className="mt-6 sm:mt-8 max-w-3xl space-y-3 sm:space-y-4 font-sans text-base sm:text-lg md:text-xl text-[#394852] font-medium leading-relaxed">
            <p>
              Zanntec is a digital solutions company focused on website development, e-commerce, customer relationship management and content management systems.
            </p>
            <p>
              We work with businesses that want to establish a stronger online presence, create better digital experiences and organise important business processes through technology.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#050f16]">
              We believe technology should serve a clear purpose. A website should communicate value. An online store should make purchasing straightforward. A CRM should help teams manage customer relationships. A CMS should make everyday content management easier.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision (2-Tone Chapter) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#050f16] text-[#f4f4f2] p-6 sm:p-10 md:p-16 flex flex-col justify-between">
          <div>
            <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2 sm:mb-3">
              Our Mission
            </span>
            <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-4 sm:mb-6">
              EFFECTIVE DIGITAL EXPERIENCES
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#95a3ad] font-medium leading-relaxed">
              To help businesses worldwide build effective digital experiences and adopt practical software solutions that support their goals, customers and everyday operations.
            </p>
          </div>
        </div>

        <div className="bg-[#ff7a1f] text-[#050f16] p-6 sm:p-10 md:p-16 flex flex-col justify-between">
          <div>
            <span className="font-sans text-xs sm:text-sm font-semibold text-[#050f16] uppercase tracking-wider block mb-2 sm:mb-3">
              Our Vision
            </span>
            <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#050f16] mb-4 sm:mb-6">
              A TRUSTED SOLUTIONS PARTNER
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#050f16] font-medium leading-relaxed">
              To become a trusted digital solutions partner for businesses seeking to build, improve and scale their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-24">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl text-[#050f16]">
              WHAT WE DO
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#394852] font-medium mt-3 max-w-xl">
              Practical planning, thoughtful design and development aligned with each project's requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whatWeDoItems.map((item, idx) => (
              <div key={idx} className="bg-[#f4f4f2] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl md:text-3xl text-[#050f16] mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#394852] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f4f4f2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-24">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl text-[#050f16]">
              OUR VALUES
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#394852] font-medium mt-3 max-w-xl">
              Principles guiding every design, development, and architectural decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 sm:p-8 flex flex-col justify-between md:col-span-1 lg:col-span-2 ${
                  idx === 3 ? 'lg:col-start-2' : ''
                } ${
                  idx === 4 ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#050f16] mb-2 sm:mb-3">
                    {v.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#394852] font-medium leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & Work Together */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#050f16] text-[#f4f4f2]">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block">
            Our Commitment
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-white">
            PRACTICAL PLANNING. <br />
            <span className="text-[#ff7a1f]">USEFUL OUTCOMES.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#95a3ad] font-medium max-w-2xl mx-auto leading-relaxed">
            We aim to make digital projects easier to understand, plan and execute. From the first conversation to final delivery, we focus on understanding your requirements, communicating clearly and producing useful outcomes.
          </p>
          <div className="pt-4 sm:pt-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff7a1f] text-[#050f16] hover:bg-white hover:text-[#050f16] px-6 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color,color] duration-150 active:scale-[0.98]"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
