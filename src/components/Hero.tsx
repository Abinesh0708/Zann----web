import { motion } from 'motion/react';
import { ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gray-50/50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-accent">
            <Settings className="w-4 h-4" />
            <span>Digital & Engineering</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.9] text-primary mb-8 flex flex-col items-center">
            <span>BUILD.</span>
            <span className="text-accent italic">AUTOMATE.</span>
            <span>SCALE.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            At Zanntec, we deliver innovative web solutions, CAD design services, and automation systems that help businesses streamline operations and scale efficiently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/contact" className="group relative bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">Get Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all border-2 border-primary/10 text-primary">
              View Services
            </Link>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200">
          {[
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Happy Clients', value: '20+' },
            { label: 'Industries Served', value: '15+' },
            { label: 'Years Experience', value: '2+' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold font-display text-primary">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
