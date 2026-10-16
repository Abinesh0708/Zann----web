import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled || isMenuOpen
            ? 'bg-[#f4f4f2]/95 backdrop-blur-md shadow-xs text-[#050f16]'
            : 'bg-transparent text-[#050f16]'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-10 py-3.5 sm:py-4 md:py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center group relative z-50"
            aria-label="Zanntec Home"
          >
            <img
              src="/assets/zanntec_logo_horizontal.png"
              alt="Zanntec"
              className="h-7 sm:h-8 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[#050f16] hover:text-[#ff7a1f] transition-[color] duration-150 py-1"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#050f16] text-white hover:bg-[#ff7a1f] hover:text-[#050f16] px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-[background-color,color] duration-150 active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2.5 text-[#050f16] hover:text-[#ff7a1f] focus:outline-none cursor-pointer rounded-sm active:bg-black/5"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-0 z-40 bg-[#f4f4f2] flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
        >
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-[#050f16] hover:text-[#ff7a1f] py-2.5 border-b border-[#050f16]/10 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-[#ff7a1f] opacity-60" />
              </Link>
            ))}
          </nav>

          {/* Mobile Action Buttons & Direct Contact */}
          <div className="pt-6 space-y-3">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#050f16] text-white py-4 px-6 font-display font-bold text-lg uppercase tracking-wider hover:bg-[#ff7a1f] hover:text-[#050f16] transition-colors shadow-sm active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+918248094054"
                className="flex items-center justify-center gap-2 bg-white border border-[#050f16]/15 text-[#050f16] py-3.5 px-3 font-display font-bold text-sm uppercase tracking-wider hover:bg-[#e8e8e5] transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#ff7a1f]" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:info@zanntec.org"
                className="flex items-center justify-center gap-2 bg-white border border-[#050f16]/15 text-[#050f16] py-3.5 px-3 font-display font-bold text-sm uppercase tracking-wider hover:bg-[#e8e8e5] transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-[#ff7a1f]" />
                <span>Email Us</span>
              </a>
            </div>

            <div className="pt-2 text-center">
              <span className="font-sans text-xs text-[#7a8a94] font-medium">
                Tamil Nadu, India · Worldwide Delivery
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
