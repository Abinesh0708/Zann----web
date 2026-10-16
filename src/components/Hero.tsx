import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] sm:min-h-[92svh] md:min-h-svh bg-[#f4f4f2] text-[#050f16] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 select-none overflow-hidden">
      {/* Top micro note */}
      <div className="pt-2">
        <span className="font-sans text-xs sm:text-sm font-semibold text-[#7a8a94] uppercase tracking-wider block">
          Serving businesses worldwide · Based in Tamil Nadu, India
        </span>
      </div>

      {/* Main Two-Line Statement */}
      <div className="w-full my-auto flex flex-col justify-center py-6 sm:py-8">
        <div className="overflow-hidden leading-[0.88] block text-left">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold uppercase text-[9.6vw] sm:text-[10.5vw] md:text-[9.5vw] lg:text-[8.5vw] tracking-[-0.035em] text-[#050f16] whitespace-nowrap block m-0 p-0"
          >
            DIGITAL SOLUTIONS.
          </motion.h1>
        </div>

        <div className="overflow-hidden leading-[0.88] block text-left md:text-right mt-1 md:mt-3">
          <motion.div
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold uppercase text-[9.6vw] sm:text-[10.5vw] md:text-[9.5vw] lg:text-[8.5vw] tracking-[-0.035em] text-[#ff7a1f] whitespace-nowrap inline-block m-0 p-0"
          >
            BUILT FOR BUSINESS.
          </motion.div>
        </div>
      </div>

      {/* Bottom baseline row: supporting paragraph and dual CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 pt-6 sm:pt-8"
      >
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#050f16] font-medium leading-relaxed m-0">
            We build websites and business software that help companies grow, sell online and manage customer relationships more effectively.
          </p>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#394852] font-medium leading-relaxed m-0">
            From professional business websites and e-commerce platforms to CRM and CMS solutions, Zanntec helps businesses turn digital ideas into practical tools for everyday operations.
          </p>
        </div>

        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#050f16] text-[#f4f4f2] hover:bg-[#ff7a1f] hover:text-[#050f16] px-6 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color,color] duration-150 text-center active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-[#050f16]/10 text-[#050f16] hover:bg-[#e8e8e5] px-6 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-[background-color] duration-150 text-center active:scale-[0.98]"
          >
            Explore Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
