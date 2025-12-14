import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Terminal, Cpu } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A robust full-stack application demonstrating scalable architecture and real-time data processing capabilities.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    links: { demo: '#', github: '#' },
    icon: <Terminal className='w-10 h-10 text-emerald-400' />,
    gradient: 'from-emerald-500/20 to-cyan-500/20'
  },
  {
    title: 'Project Beta',
    description: 'An experimental interface exploring new frontend paradigms and advanced state management patterns.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    links: { demo: '#', github: '#' },
    icon: <Cpu className='w-10 h-10 text-purple-400' />,
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Project Gamma',
    description: 'High-performance backend service designed for microservices communication and distributed systems.',
    tags: ['Go', 'gRPC', 'Redis', 'Kubernetes'],
    links: { demo: '#', github: '#' },
    icon: <Code2 className='w-10 h-10 text-amber-400' />,
    gradient: 'from-amber-500/20 to-orange-500/20'
  }
];

export default function Projects() {
  return (
    <section id='projects' className='py-32 bg-slate-950 relative overflow-hidden'>
      {/* Background Decor */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='mb-24'>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3'
          >
            <span className='text-cyan-500'>02.</span>
            <span className='bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent'>
              My projects
            </span>
            <div className='h-px bg-slate-800 flex-grow ml-4' />
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group relative'
            >
              {/* Card Container */}
              <div className='relative h-full bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors backdrop-blur-sm'>
                
                {/* Terminal Header */}
                <div className='h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50' />
                  <div className='w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50' />
                  <div className='w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50' />
                  <div className='ml-auto text-xs text-slate-500 font-mono'>bash</div>
                </div>

                {/* Content Body */}
                <div className='p-6 relative'>
                  {/* Glowing Backdrop */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className='relative z-10'>
                    <div className='mb-6 p-4 bg-slate-950/50 rounded-lg border border-slate-800/50 group-hover:border-cyan-500/20 transition-colors'>
                      {project.icon}
                    </div>

                    <h3 className='text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors'>
                      {project.title}
                    </h3>
                    
                    <p className='text-slate-400 text-sm leading-relaxed mb-6 h-20'>
                      {project.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-8'>
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className='px-2 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/30 rounded border border-cyan-900/50'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center gap-4 mt-auto'>
                      <a 
                        href={project.links.github} 
                        className='flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors hover:underline underline-offset-4'
                      >
                        <Github className='w-4 h-4' />
                        <span className='font-mono'>git checkout</span>
                      </a>
                      <a 
                        href={project.links.demo} 
                        className='flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors ml-auto'
                      >
                        <ExternalLink className='w-4 h-4' />
                        <span className='font-mono'>./preview</span>
                      </a>
                    </div>
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
