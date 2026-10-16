import { useState, useId } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const serviceOptions = [
  'Business Website Development',
  'E-Commerce Development',
  'CRM Solutions',
  'CMS Solutions',
  'Multiple Services',
  'Other Digital Requirements'
];

const budgetOptions = [
  'Select an estimated budget range, if known',
  'Under ₹25,000 / $300',
  '₹25,000 – ₹50,000 / $300 – $600',
  '₹50,000 – ₹1,50,000 / $600 – $1,800',
  '₹1,50,000+ / $1,800+',
  'Flexible / To be determined'
];

const timelineOptions = [
  'When would you like to begin or launch?',
  'Immediately (Within 1-2 weeks)',
  'Within 1 month',
  'Within 2-3 months',
  'Flexible / Exploratory stage'
];

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const countryId = useId();
  const serviceId = useId();
  const budgetId = useId();
  const timelineId = useId();
  const detailsId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    service: serviceOptions[0],
    budget: budgetOptions[0],
    timeline: timelineOptions[0],
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Enquiry: ${formData.service} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Business Email: ${formData.email}\n` +
      `Company Name: ${formData.company}\n` +
      `Country/Region: ${formData.country}\n` +
      `Service Required: ${formData.service}\n` +
      `Estimated Budget: ${formData.budget}\n` +
      `Expected Timeline: ${formData.timeline}\n\n` +
      `Project Details:\n${formData.details}`
    );
    window.location.href = `mailto:info@zanntec.org?subject=${subject}&body=${body}`;
  };

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Zanntec',
    description: 'Start a project enquiry with Zanntec for website development, e-commerce, CRM and CMS solutions.',
    url: 'https://www.zanntec.org/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Zanntec',
      email: 'info@zanntec.org',
      telephone: '+91-82480-94054',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#050f16] overflow-hidden pt-20 sm:pt-24 md:pt-28">
      <SEOHead
        title="Contact Us | Zanntec Digital Solutions"
        description="Looking for a partner to develop your business website, build an online store, implement a CRM or improve your content management workflow? Start a project enquiry today."
        canonicalPath="/contact"
        keywords="contact zanntec, start project enquiry, hire web developer, ecommerce quote, crm enquiry"
        jsonLd={contactJsonLd}
      />

      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        <div className="w-full">
          <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mb-2">
            Start a Project Enquiry
          </span>
          <h1 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.92] text-[#050f16]">
            LET'S TALK ABOUT <br />
            <span className="text-[#ff7a1f]">YOUR NEXT PROJECT</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#394852] font-medium max-w-2xl mt-4 sm:mt-6 leading-relaxed">
            Looking for a partner to develop your business website, build an online store, implement a CRM or improve your content management workflow? Tell us what you need. We will review your enquiry and discuss the requirements, possible approach and next steps.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="px-4 sm:px-6 md:px-12 pb-16 sm:pb-24 md:pb-36">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Direct Intake Form (data-ui enabled) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 md:p-12 shadow-xs" data-ui="intake-form">
            <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl text-[#050f16] mb-6 sm:mb-8">
              START A PROJECT ENQUIRY
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 font-sans">
              <div>
                <label htmlFor={nameId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-1">
                  Full Name
                </label>
                <span className="text-xs text-[#7a8a94] block mb-2">How should we address you?</span>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={emailId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-1">
                  Business Email
                </label>
                <span className="text-xs text-[#7a8a94] block mb-2">Where can we contact you about your project?</span>
                <input
                  id={emailId}
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={companyId} className="block font-display font-bold text-base uppercase tracking-tight text-[#050f16] mb-1">
                    Company Name
                  </label>
                  <span className="text-xs text-[#7a8a94] block mb-2">Tell us about your business or organisation.</span>
                  <input
                    id={companyId}
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor={countryId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-1">
                    Country or Region
                  </label>
                  <span className="text-xs text-[#7a8a94] block mb-2">Where is your business based?</span>
                  <input
                    id={countryId}
                    type="text"
                    required
                    placeholder="e.g. India, UAE, UK, Singapore"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={serviceId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-2">
                  Service Required
                </label>
                <select
                  id={serviceId}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor={budgetId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-2">
                    Project Budget
                  </label>
                  <select
                    id={budgetId}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={timelineId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-2">
                    Expected Timeline
                  </label>
                  <select
                    id={timelineId}
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={detailsId} className="block font-display font-bold text-sm sm:text-base uppercase tracking-tight text-[#050f16] mb-1">
                  Project Details
                </label>
                <span className="text-xs text-[#7a8a94] block mb-2">
                  Describe your business, goals, required functionality and any existing platforms or integrations we should know about.
                </span>
                <textarea
                  id={detailsId}
                  rows={5}
                  required
                  placeholder="Tell us about what you want to achieve..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full p-3.5 sm:p-4 text-base bg-[#f4f4f2] text-[#050f16] font-medium border border-[#050f16]/20 focus:border-[#ff7a1f] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#050f16] text-[#f4f4f2] hover:bg-[#ff7a1f] hover:text-[#050f16] py-4 sm:py-5 px-6 sm:px-8 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color,color] duration-150 cursor-pointer active:scale-[0.98]"
                >
                  <span>Submit Project Enquiry</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Process & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#050f16] text-[#f4f4f2] p-8 md:p-10">
              <span className="font-sans text-sm font-semibold text-[#ff7a1f] block mb-3">
                Process
              </span>
              <h3 className="font-display font-extrabold uppercase text-3xl text-white mb-4">
                WHAT HAPPENS NEXT?
              </h3>
              <p className="font-sans text-base text-[#95a3ad] font-medium leading-relaxed">
                We review the information you provide, clarify any missing requirements and discuss the scope of the project. If the project is a suitable fit, the next step may involve a consultation, proposal or more detailed requirements discussion.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10">
              <span className="font-sans text-sm font-semibold text-[#7a8a94] block mb-3">
                Prefer Email?
              </span>
              <h3 className="font-display font-extrabold uppercase text-3xl text-[#050f16] mb-4">
                DIRECT EMAIL INQUIRY
              </h3>
              <p className="font-sans text-base text-[#394852] font-medium leading-relaxed mb-4">
                Email us with a short overview of your project:
              </p>
              <a
                href="mailto:info@zanntec.org"
                className="font-display font-bold uppercase text-2xl text-[#050f16] hover:text-[#ff7a1f] transition-[color] duration-150 block"
              >
                info@zanntec.org
              </a>
              <p className="font-sans text-xs text-[#7a8a94] mt-4">
                We welcome enquiries from businesses looking for website development, e-commerce, CRM and CMS solutions.
              </p>
            </div>

            <div className="bg-[#e8e8e5] p-8">
              <div className="font-display font-bold uppercase text-xl text-[#050f16]">
                Zanntec Studio
              </div>
              <p className="font-sans text-sm text-[#394852] font-medium mt-1">
                Based in Tamil Nadu, India. Open to project enquiries from businesses worldwide.
              </p>
              <a
                href="tel:+918248094054"
                className="font-display font-bold text-lg text-[#050f16] hover:text-[#ff7a1f] block mt-2 tabular"
              >
                +91 82480 94054
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
