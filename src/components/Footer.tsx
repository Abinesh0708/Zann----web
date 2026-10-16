import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050f16] text-[#f4f4f2] min-h-[85svh] flex flex-col justify-between pt-16 sm:pt-20 pb-0 px-4 sm:px-6 md:px-12 overflow-hidden select-none">
      {/* Upper Area: Project Prompt & Directory Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
        {/* Columns 1-5: Brand Statement & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
          <Link to="/" className="inline-block">
            <span className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-white block">
              ZANNTEC
            </span>
            <span className="font-sans text-xs sm:text-sm font-semibold text-[#ff7a1f] uppercase tracking-wider block mt-1">
              Digital Solutions. Built for Business.
            </span>
          </Link>

          <p className="font-sans text-sm sm:text-base text-[#95a3ad] max-w-md font-medium leading-relaxed">
            We help businesses build professional websites, launch online stores and organise customer relationships and content through practical digital solutions.
          </p>

          <div className="pt-2 space-y-3 w-full sm:w-auto">
            <span className="font-display font-bold text-base sm:text-lg uppercase text-white block">
              Have a Project in Mind?
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#95a3ad] max-w-sm">
              Let's discuss your goals and find a practical approach to your digital requirements.
            </p>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff7a1f] text-[#050f16] hover:bg-white hover:text-[#050f16] px-6 py-3.5 font-display font-bold text-base uppercase tracking-wider transition-[background-color,color] duration-150 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Columns 6-12: Links & Contact */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 font-sans text-sm">
          {/* Services */}
          <div>
            <div className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">
              Services
            </div>
            <ul className="space-y-3 font-medium text-[#95a3ad]">
              <li>
                <Link to="/services#business-websites" className="hover:text-white transition-[color] duration-150">
                  Business Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="hover:text-white transition-[color] duration-150">
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link to="/services#crm" className="hover:text-white transition-[color] duration-150">
                  CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#cms" className="hover:text-white transition-[color] duration-150">
                  CMS Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <div className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">
              Company
            </div>
            <ul className="space-y-3 font-medium text-[#95a3ad]">
              <li>
                <Link to="/about" className="hover:text-white transition-[color] duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-[color] duration-150">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-[color] duration-150">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/#work" className="hover:text-white transition-[color] duration-150">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-[color] duration-150">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-[color] duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <div className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">
              Get in Touch
            </div>
            <ul className="space-y-3 font-medium text-[#95a3ad]">
              <li>
                <a href="mailto:info@zanntec.org" className="text-[#ff7a1f] hover:underline block font-semibold">
                  info@zanntec.org
                </a>
              </li>
              <li>
                <a href="tel:+918248094054" className="text-white hover:underline block tabular">
                  +91 82480 94054
                </a>
              </li>
              <li className="pt-2 text-xs text-[#7a8a94] leading-relaxed">
                Based in Tamil Nadu, India. Open to project enquiries from businesses worldwide.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Area: Legal Line & Cropped Wordmark */}
      <div className="w-full mt-16 md:mt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#7a8a94] font-sans pb-3 gap-2">
          <span>© 2026 Zanntec. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

        {/* Cropped Wordmark */}
        <div className="overflow-hidden w-full leading-[0.72] text-center select-none pointer-events-none">
          <div
            className="font-display font-extrabold uppercase text-[28vw] tracking-[-0.04em] text-white/10 whitespace-nowrap"
            style={{ transform: 'translateY(28%)' }}
          >
            ZANNTEC
          </div>
        </div>
      </div>
    </footer>
  );
}
