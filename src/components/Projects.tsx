import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/ecommerce/800/1000',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://picsum.photos/seed/branding/800/600',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/mobile/800/600',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Creative Portfolio',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/portfolio/800/1000',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Digital Marketing',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/marketing/800/600',
    className: 'md:col-span-2 md:row-span-1',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Portfolio</div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              LATEST <br />
              <span className="text-accent italic">CREATIVE</span> PROJECTS
            </h2>
          </div>
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white ${project.className}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                  {project.category}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
