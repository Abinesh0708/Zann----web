import { motion } from 'motion/react';
import { Layout, Search, Megaphone, Smartphone, Code, Palette } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'We create intuitive and visually appealing user interfaces that provide a seamless user experience.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Our team builds high-performance, responsive websites using the latest technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'We design and develop cross-platform mobile applications that engage users on the go.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'We help brands reach their target audience through strategic digital marketing campaigns.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'We optimize your website to rank higher on search engines and drive organic traffic.',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'We help brands define their unique identity and communicate their values effectively.',
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
            We offer a wide range of services to help your brand stand out in the digital landscape.
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
