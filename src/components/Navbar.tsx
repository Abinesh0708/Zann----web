import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-3xl shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col justify-center items-start">
          <img src="/assets/logo.png" alt="Zanntec Logo" className="h-[72px] md:h-[96px] w-auto drop-shadow-sm transition-all duration-300 brightness-0" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                location.pathname === link.href ? "text-accent" : "text-primary hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-accent transition-all">
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col space-y-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-lg font-bold transition-colors",
                  location.pathname === link.href ? "text-accent" : "text-primary hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-accent transition-all">
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
