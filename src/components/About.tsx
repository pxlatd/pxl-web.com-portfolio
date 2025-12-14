import { motion } from 'framer-motion';
import { Activity, Server, Shield, Globe, Database, Code2 } from 'lucide-react';

const MODULES = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'C++', 'Java', 'C#', 'PHP', 'Swift', 'Kotlin', 'Ruby', 'Lua', 'Haskell', 'Scala', 'Elixir'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'Svelte', 'Angular', 'Solid', 'Three.js', 'WebGL', 'Tailwind', 'Sass', 'Framer Motion', 'Redux', 'Zustand', 'GraphQL', 'Apollo'],
  Backend: ['Node.js', 'Bun', 'Deno', 'Django', 'Laravel', 'Spring Boot', 'FastAPI', 'Flask', 'Express', 'NestJS', 'gRPC', 'tRPC', 'WebSockets', 'Nginx', 'Apache'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'Elasticsearch', 'Neo4j', 'Supabase', 'Firebase', 'DynamoDB', 'CockroachDB', 'ClickHouse', 'Prisma', 'Drizzle'],
  DevOps: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'CircleCI', 'Linux', 'Bash', 'Prometheus', 'Grafana']
};

export default function About() {
  const startYear = 1772;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;

  return (
    <section id='about' className='py-32 bg-slate-950 relative'>
      {/* Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='mb-16'>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3'
          >
            <span className='text-cyan-500'>01.</span>
            <span className='bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent'>
              My Langs
            </span>
            <div className='h-px bg-slate-800 flex-grow ml-4' />
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
          {/* Status Panel (About Text) */}
          <div className='lg:col-span-1 space-y-12'>
            <div className='bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm'>
              <div className='flex items-center gap-2 mb-6 border-b border-slate-800 pb-4'>
                <Activity className='w-5 h-5 text-cyan-500' />
                <span className='font-mono text-sm text-slate-400'>SYSTEM_STATUS</span>
                <span className='ml-auto px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400 font-mono animate-pulse'>
                  OPERATIONAL
                </span>
              </div>
              
              <div className='space-y-4 font-mono text-sm text-slate-400 leading-relaxed'>
                <p>
                  {">"} INITIATING USER_BIO_SEQUENCE...
                </p>
                <p>
                  <span className='text-cyan-500'>current_role:</span> "Full Stack Dev"<br/>
                  <span className='text-cyan-500'>location:</span> "Remote"<br/>
                  <span className='text-cyan-500'>mission:</span> "Building scalable code meant for consumers and beyond."
                </p>
                <p>
                  {">"} POLYGLOT_DETECTED: TRUE
                </p>
                <p className='text-slate-300'>
                  I create code that that solves solutions. With a large understanding of low and high level systems, I fix the trench between big requirements and beautiful execution.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800'>
                <div className='p-3 bg-slate-950 rounded border border-slate-800/50'>
                  <div className='text-xs text-slate-500 font-mono mb-1'>UPTIME</div>
                  <div className='text-xl font-bold text-white'>{experience}+ Years</div>
                </div>
                <div className='p-3 bg-slate-950 rounded border border-slate-800/50'>
                  <div className='text-xs text-slate-500 font-mono mb-1'>PROJECTS</div>
                  <div className='text-xl font-bold text-white'>None yet.. ^^'</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Modules (Skills) */}
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {Object.entries(MODULES).map(([category, skills], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors ${category === 'Languages' ? 'md:col-span-2' : ''}`}
                >
                  <div className='flex items-center gap-3 mb-4'>
                    {category === 'Languages' && <Code2 className='w-5 h-5 text-purple-400' />}
                    {category === 'Frontend' && <Globe className='w-5 h-5 text-blue-400' />}
                    {category === 'Backend' && <Server className='w-5 h-5 text-emerald-400' />}
                    {category === 'Database' && <Database className='w-5 h-5 text-amber-400' />}
                    {category === 'DevOps' && <Shield className='w-5 h-5 text-red-400' />}
                    <h3 className='font-bold text-slate-200'>{category}</h3>
                  </div>
                  
                  <div className='flex flex-wrap gap-2'>
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className='px-2 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
