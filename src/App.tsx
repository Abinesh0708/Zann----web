/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Contact from './pages/Contact';
import CaseStudyEcommerce from './pages/CaseStudyEcommerce';
import CaseStudyCAD from './pages/CaseStudyCAD';
import NagercoilWebDevelopment from './pages/NagercoilWebDevelopment';
import TirunelveliWebDesign from './pages/TirunelveliWebDesign';
import TamilNaduSEOServices from './pages/TamilNaduSEOServices';
import Blog from './pages/Blog';
import BlogWhyBusinessNeedsWebsite from './pages/BlogWhyBusinessNeedsWebsite';
import BlogHowEcommerceWorks from './pages/BlogHowEcommerceWorks';
import BlogHowCMSWorks from './pages/BlogHowCMSWorks';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-accent text-white rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/ecommerce" element={<CaseStudyEcommerce />} />
        <Route path="/case-study/cad-automation" element={<CaseStudyCAD />} />
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
