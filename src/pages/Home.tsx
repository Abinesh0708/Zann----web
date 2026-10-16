import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import SEOHead from '../components/SEOHead';

const coreFoundations = [
  {
    title: 'Business Website Development',
    desc: 'Make a strong first impression with a professional website that communicates your value, showcases your services and helps potential customers take the next step.',
    link: '/services#business-websites'
  },
  {
    title: 'E-Commerce Development',
    desc: 'Turn your products into an online shopping experience with organised catalogues, intuitive navigation and the functionality needed to support online sales.',
    link: '/services#ecommerce'
  },
  {
    title: 'CRM Solutions',
    desc: 'Bring customer information, enquiries, sales activities and follow-ups into a more organised workflow with customer relationship management solutions tailored to your requirements.',
    link: '/services#crm'
  },
  {
    title: 'CMS Solutions',
    desc: 'Manage your website content with greater flexibility. Create, update and organise pages, images and other content without needing to change code for every routine update.',
    link: '/services#cms'
  }
];

const businessStages = [
  {
    stage: 'Launch',
    title: 'Digital Foundation',
    desc: 'Build your digital foundation with a professional website that introduces your business, explains your offering and gives customers a clear way to contact you.'
  },
  {
    stage: 'Grow',
    title: 'Commercial Expansion',
    desc: 'Expand your reach with e-commerce platforms and digital experiences that help customers discover, evaluate and purchase your products.'
  },
  {
    stage: 'Organise',
    title: 'Operational Workflow',
    desc: 'Improve how your business handles customer information, sales enquiries and content through appropriate CRM and CMS solutions.'
  },
  {
    stage: 'Evolve',
    title: 'Continuous Adaptability',
    desc: 'Adapt your digital systems as your business grows, with improvements and additional functionality based on changing requirements.'
  }
];

const differentiators = [
  {
    title: 'Business-First Thinking',
    desc: 'We begin with your objectives, challenges and users, then identify the digital solution that fits your requirements.'
  },
  {
    title: 'Designed Around Your Needs',
    desc: 'We consider your workflows, content, customers and business model rather than forcing every project into the same template.'
  },
  {
    title: 'Usability at the Centre',
    desc: 'We focus on clear navigation, intuitive interfaces and straightforward user experiences across supported devices.'
  },
  {
    title: 'Built for Practical Use',
    desc: 'We consider performance, maintainability, functionality and future requirements during the planning and development process.'
  },
  {
    title: 'Clear Communication',
    desc: 'We work toward clear expectations, defined deliverables and transparent communication throughout the project.'
  }
];

const processSteps = [
  {
    step: 'Discover',
    desc: 'We learn about your business, target audience, objectives and project requirements.'
  },
  {
    step: 'Define',
    desc: 'We establish the project scope, features, priorities, deliverables and technical approach.'
  },
  {
    step: 'Design',
    desc: 'We plan the structure and user experience, creating a design direction suited to your brand and audience.'
  },
  {
    step: 'Develop',
    desc: 'We build the agreed solution, implement its functionality and connect the required systems and integrations.'
  },
  {
    step: 'Test and Deliver',
    desc: 'We review the solution against the agreed requirements, address identified issues and prepare the final deliverables for handover.'
  },
  {
    step: 'Improve',
    desc: 'Where ongoing support is agreed, we help maintain and improve your digital solution as your needs evolve.'
  }
];

const clientTypes = [
  {
    title: 'Startups',
    desc: 'Establish your online presence and build the digital foundation for your next stage of growth.'
  },
  {
    title: 'Small and Medium-Sized Businesses',
    desc: 'Present your services professionally, reach customers online and improve business workflows.'
  },
  {
    title: 'E-Commerce Brands',
    desc: 'Create an online shopping experience that supports your products, customers and operational requirements.'
  },
  {
    title: 'Growing Sales Teams',
    desc: 'Explore CRM solutions that help organise enquiries, track opportunities and manage customer relationships.'
  },
  {
    title: 'Agencies and Business Partners',
    desc: 'Collaborate on website development, commerce projects and business software requirements with clearly defined scopes and deliverables.'
  }
];

export default function Home() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Zanntec | Digital Solutions. Built for Business.',
    description: 'We build websites and business software that help companies grow, sell online and manage customer relationships more effectively.',
    url: 'https://www.zanntec.org/'
  };

  return (
    <main className="overflow-hidden bg-[#f4f4f2] text-[#050f16]">
      <SEOHead
        title="Zanntec | Digital Solutions. Built for Business."
        description="We build websites and business software that help companies grow, sell online and manage customer relationships more effectively. Professional websites, e-commerce, CRM, and CMS."
        canonicalPath="/"
        keywords="business website development, ecommerce development, crm solutions, cms solutions, digital solutions company"
        jsonLd={homeJsonLd}
      />

      {/* Hero Section */}
      <Hero />

      {/* SECTION 1: Build a Better Digital Foundation */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-16 md:mb-24">
            <div className="lg:col-span-8">
              <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
                Digital Foundation
              </span>
              <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-[#050f16]">
                BUILD A BETTER <br />
                DIGITAL FOUNDATION
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-base sm:text-lg text-[#394852] font-medium leading-relaxed m-0">
                Your digital presence extends beyond a website. It is how customers discover your business, understand your value, interact with your brand and choose to work with you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {coreFoundations.map((item, idx) => (
              <div key={idx} className="bg-[#f4f4f2] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl md:text-3xl text-[#050f16] mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#394852] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider text-[#050f16] hover:text-[#ff7a1f] transition-[color] duration-150"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 sm:pt-4">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#050f16] text-[#f4f4f2] hover:bg-[#ff7a1f] hover:text-[#050f16] px-6 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color,color] duration-150 active:scale-[0.98]"
            >
              <span>Discover Our Services</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Digital Solutions for Every Stage of Business */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f4f4f2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-24">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-[#050f16]">
              DIGITAL SOLUTIONS <br />
              <span className="text-[#ff7a1f]">FOR EVERY STAGE</span>
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#394852] font-medium mt-3 sm:mt-4 max-w-xl">
              Whether you are launching a new company, expanding an online store or improving internal customer workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {businessStages.map((stage, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
                    Phase: {stage.stage}
                  </span>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#050f16] mb-2 sm:mb-3">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#394852] font-medium leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: What Makes Our Approach Different? (Statements on Colour Field) */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#050f16] text-[#f4f4f2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-24">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-white">
              WHAT MAKES OUR <br />
              <span className="text-[#ff7a1f]">APPROACH DIFFERENT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {differentiators.map((diff, i) => (
              <div
                key={i}
                className={`bg-[#101b24] p-6 sm:p-8 flex flex-col justify-between md:col-span-1 lg:col-span-2 ${
                  i === 3 ? 'lg:col-start-2' : ''
                } ${
                  i === 4
                    ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2'
                    : ''
                }`}
              >
                <div>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-white mb-2 sm:mb-3">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#95a3ad] font-medium leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Process (Clean Process Stages) */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-24">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl text-[#050f16]">
              OUR PROCESS
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#394852] font-medium mt-3 max-w-xl">
              A structured, transparent workflow from first discovery to deployment and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="bg-[#f4f4f2] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] block mb-2">
                    Stage {i + 1}
                  </span>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl md:text-3xl text-[#050f16] mb-2 sm:mb-3">
                    {item.step}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#394852] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Who We Work With */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f4f4f2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-24">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl text-[#050f16]">
              WHO WE WORK WITH
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#394852] font-medium mt-3 max-w-xl">
              Solutions designed around your operational requirements, whether launching or scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {clientTypes.map((client, i) => (
              <div
                key={i}
                className={`bg-white p-6 sm:p-8 flex flex-col justify-between md:col-span-1 lg:col-span-2 ${
                  i === 3 ? 'lg:col-start-2' : ''
                } ${
                  i === 4
                    ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2'
                    : ''
                }`}
              >
                <div>
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#050f16] mb-2 sm:mb-3">
                    {client.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#394852] font-medium leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Let's Build Something That Moves Your Business Forward */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#ff7a1f] text-[#050f16]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] text-[#050f16]">
            LET'S BUILD SOMETHING <br />
            THAT MOVES YOU FORWARD
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#050f16] font-medium max-w-2xl leading-relaxed">
            Whether you need a new website, an online store or a better way to manage customers and content, we would like to understand your goals. Tell us about your project, your challenges and what you want to achieve.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#050f16] text-[#f4f4f2] hover:bg-white hover:text-[#050f16] px-6 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color,color] duration-150 text-center active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#050f16] hover:bg-[#050f16] hover:text-white px-6 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color,color] duration-150 text-center active:scale-[0.98]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
