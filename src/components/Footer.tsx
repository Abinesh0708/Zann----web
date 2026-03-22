import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="space-y-6 lg:col-span-2">
            <Link to="/" className="inline-block w-fit">
              <img src="/assets/logo.png" alt="Zanntec Logo" className="h-[80px] md:h-[120px] w-auto transition-all duration-300 brightness-0 invert opacity-90 hover:opacity-100" />
            </Link>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Engineering Digital & CAD Solutions for Modern Businesses. We deliver innovative web solutions and engineering services.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@zanntec.org" className="hover:text-white transition-colors">
                  info@zanntec.org
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+918248094054" className="hover:text-white transition-colors">
                  +91 82480 94054
                </a>
              </div>
              <div className="flex items-start gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>
                  India
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-400 font-medium">
            © 2026 Zanntec. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
