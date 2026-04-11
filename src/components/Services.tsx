import { motion } from 'motion/react';
import { Layout, Search, Megaphone, Smartphone, Code, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'We are a trusted web development company offering responsive, fast-loading, and SEO-optimized website development services for startups, small businesses, and enterprises across India.',
  },
  {
    icon: Layout,
    title: 'E-Commerce Solutions',
    description: 'Custom ecommerce website development designed for local shops and businesses. We build scalable, high-converting online stores with secure payment gateways and inventory management.',
  },
  {
    icon: Settings,
    title: 'CAD Automation',
    description: 'Industry-leading CAD automation services including SolidWorks macro automation, CAD workflow optimization, and design automation for manufacturing companies across India.',
  },
  {
    icon: Smartphone,
    title: 'Admin Dashboards',
    description: 'Custom admin dashboard development for business management. We build powerful admin panel websites with real-time analytics, user management, and scalable backend architecture.',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Local SEO company providing comprehensive SEO services for small businesses. We help businesses in Nagercoil and Tamil Nadu rank higher on Google and drive organic traffic.',
  },
  {
    icon: Megaphone,
    title: 'UI/UX Design',
    description: 'Professional UI UX design services in Tamil Nadu. We create mobile-friendly, intuitive interfaces with modern design practices that increase user engagement and conversions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Services</div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight break-words hyphens-auto">
              WE PROVIDE <br />
              <span className="text-accent italic">CREATIVE</span> SOLUTIONS
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-md font-medium">
            We provide SEO-optimized website development services designed to increase your online visibility, attract customers, and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-3xl bg-secondary border border-gray-100 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors shadow-sm">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <div className="w-8 h-[2px] bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
