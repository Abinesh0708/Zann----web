import { motion } from 'motion/react';
import { ArrowRight, Code, Monitor, PenTool, Database, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const CADFace = () => (
  <div className="w-full h-full rounded-2xl bg-[#0a0a0d]/90 border border-accent/50 shadow-[0_0_80px_rgba(255,102,0,0.15)] flex flex-col p-6 overflow-hidden">
    <div
      className="absolute inset-0 opacity-20"
      style={{ backgroundImage: 'linear-gradient(rgba(255, 102, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 102, 0, 0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
    />
    <div className="relative z-10 flex justify-between items-start mb-auto">
      <Cpu className="w-8 h-8 text-accent" />
      <span className="text-[10px] font-mono text-accent">SYS.CORE.01</span>
    </div>
    <div className="relative z-10 space-y-2 mt-auto">
      <div className="text-xl font-bold text-white tracking-widest uppercase">CAD Automation</div>
      <div className="h-1 w-12 bg-accent" />
      <div className="font-mono text-[10px] text-gray-400 mt-2 leading-tight">
        SolidWorks API mapped.<br />
        Generating toolpaths...<br />
        <span className="text-accent animate-pulse">Running automation...</span>
      </div>
    </div>
  </div>
);

const WebFace = () => (
  <div className="w-full h-full rounded-2xl bg-white/10 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col backdrop-blur-xl overflow-hidden pointer-events-none">
    <div className="w-full h-8 border-b border-white/20 flex items-center px-4 gap-1.5 bg-white/5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
    </div>
    <div className="p-6 flex flex-col h-full justify-between relative">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
          <Code className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-primary tracking-widest uppercase mb-1">Web Development</div>
          <div className="text-[10px] font-mono text-gray-500 bg-white/50 px-2 py-0.5 rounded">React.js Environment</div>
        </div>
      </div>
      <div className="space-y-2.5 w-full mt-6">
        <div className="w-3/4 h-2 rounded bg-primary/20" />
        <div className="w-full h-2 rounded bg-primary/10" />
        <div className="w-5/6 h-2 rounded bg-primary/20" />
        <div className="w-1/2 h-2 rounded bg-accent/40" />
      </div>
    </div>
  </div>
);

const CoreFace = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent to-primary flex items-center justify-center shadow-[0_0_100px_rgba(255,102,0,0.5)]">
    <Database className="w-10 h-10 text-white" />
  </div>
);

const DoubleSided = ({ children, className, containerStyle }: { children: React.ReactNode, className?: string, containerStyle?: React.CSSProperties }) => (
  <div className={className} style={{ ...containerStyle, transformStyle: "preserve-3d" }}>
    <div className="absolute inset-0 pointer-events-none" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
      {children}
    </div>
    <div className="absolute inset-0 pointer-events-none" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
      {children}
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden bg-[#fafafa]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 z-10 pt-8">

        {/* Left Side: Typography & Content */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left space-y-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="w-full mt-0 mb-2 md:mb-4 relative z-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight font-display leading-tight">
              Grow Your Business with<br className="hidden md:block" />
              <span className="text-accent"> Smart Digital Solutions</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-2 relative z-20"
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
              Zanntec is a leading web development company in Nagercoil specializing in SEO-optimized website development, ecommerce solutions, SolidWorks macro automation, and digital transformation services.
            </p>
            <p className="text-sm md:text-base text-accent font-bold uppercase tracking-widest mt-2">
              Serving businesses across Tamil Nadu, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 w-full"
          >
            <Link to="/contact" className="group relative bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full text-lg font-bold bg-white border-2 border-gray-100 text-primary hover:border-accent hover:text-accent transition-all shadow-sm max-w-max">
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Highly Detailed Double-Sided 3D Rotating Tech Engine */}
        <motion.div
          className="w-full md:w-[45%] h-[300px] sm:h-[400px] md:h-[600px] perspective-[2000px] flex items-center justify-center mt-6 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            animate={{ rotateY: [-20, 340], rotateX: [10, 25, 10] }}
            transition={{
              rotateY: { duration: 35, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square flex items-center justify-center scale-[0.65] sm:scale-75 md:scale-100"
          >
            {/* Outer Orbital Rings (HUD Elements) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent/40" style={{ transform: "rotateX(75deg) scale(1.5)" }} />
            <div className="absolute inset-4 rounded-full border border-primary/20" style={{ transform: "rotateY(60deg) rotateX(45deg) scale(1.3)" }} />
            <div className="absolute inset-8 rounded-full border-2 border-dotted border-gray-300/30" style={{ transform: "rotateZ(45deg) rotateY(70deg) scale(1.4)" }} />

            {/* Back Layer: Dark CAD / Automation Blueprint */}
            <DoubleSided className="absolute w-64 h-80" containerStyle={{ transform: "translateZ(-100px) translateX(40px)" }}>
              <CADFace />
            </DoubleSided>

            {/* Central Glowing Core Element */}
            <DoubleSided className="absolute w-24 h-24" containerStyle={{ transform: "translateZ(0px)" }}>
              <CoreFace />
            </DoubleSided>

            {/* Front Layer: Web UI Dashboard (Glossy Glassmorphism) */}
            <DoubleSided className="absolute w-72 h-64" containerStyle={{ transform: "translateZ(120px) translateX(-30px)" }}>
              <WebFace />
            </DoubleSided>

            {/* Detached Orbiting Data Nodes */}
            <DoubleSided className="absolute w-12 h-12" containerStyle={{ transform: "translateZ(180px) translateX(120px) translateY(-80px) rotateY(-30deg)" }}>
              <div className="w-full h-full bg-white/80 backdrop-blur-md rounded-xl border border-white shadow-xl flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
            </DoubleSided>

            <DoubleSided className="absolute w-14 h-14" containerStyle={{ transform: "translateZ(-150px) translateX(-120px) translateY(100px) rotateX(45deg)" }}>
              <div className="w-full h-full bg-black/80 backdrop-blur-md rounded-full border border-accent flex items-center justify-center shadow-[0_0_30px_rgba(255,102,0,0.3)]">
                <PenTool className="w-6 h-6 text-accent" />
              </div>
            </DoubleSided>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
