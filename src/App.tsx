/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import CaseStudyEcommerce from './pages/CaseStudyEcommerce';

import NagercoilWebDevelopment from './pages/NagercoilWebDevelopment';
import TirunelveliWebDesign from './pages/TirunelveliWebDesign';
import TamilNaduSEOServices from './pages/TamilNaduSEOServices';
import Blog from './pages/Blog';
import BlogWhyBusinessNeedsWebsite from './pages/BlogWhyBusinessNeedsWebsite';
import BlogHowEcommerceWorks from './pages/BlogHowEcommerceWorks';
import BlogHowCMSWorks from './pages/BlogHowCMSWorks';

export default function App() {

  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-svh bg-[#f4f4f2] text-[#050f16]">

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-[#050f16] text-white z-40 flex items-center justify-center hover:bg-[#ff7a1f] hover:text-[#050f16] transition-[background-color,color] duration-150 cursor-pointer shadow-lg active:scale-95"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/ecommerce" element={<CaseStudyEcommerce />} />

        <Route path="/nagercoil-web-development" element={<NagercoilWebDevelopment />} />
        <Route path="/tirunelveli-web-design" element={<TirunelveliWebDesign />} />
        <Route path="/tamilnadu-seo-services" element={<TamilNaduSEOServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/why-every-business-needs-website-2026" element={<BlogWhyBusinessNeedsWebsite />} />
        <Route path="/blog/how-ecommerce-works-complete-guide" element={<BlogHowEcommerceWorks />} />
        <Route path="/blog/how-cms-works-guide-for-businesses" element={<BlogHowCMSWorks />} />
      </Routes>

      <Footer />
    </div>
  );
}
