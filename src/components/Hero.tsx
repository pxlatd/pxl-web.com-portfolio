import { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

// --- Utilities ---
const CHARS = '-_~=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const ScrambleText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let timeout: any;
    let interval: any;

    const startScramble = () => {
      let pos = 0;

      interval = setInterval(() => {
        const scrambled = text.split('').map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        }).join('');

        setDisplayText(scrambled);
        pos++;

        if (pos >= text.length * CYCLES_PER_LETTER) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, SHUFFLE_TIME);
    };

    timeout = setTimeout(startScramble, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className={className}>{displayText}</span>
  );
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id='home' 
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 group'
      onMouseMove={handleMouseMove}
    >
      {/* --- Interactive Grid Background --- */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none' />
      
      <motion.div 
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(14, 165, 233, 0.15),
            transparent 80%
          )`
        }}
      />

      {/* --- Floating Tech Particles --- */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[Code2, Database, Layout, Terminal, Cpu, Globe].map((Icon, i) => (
          <motion.div
            key={i}
            className='absolute text-slate-800/20'
            initial={{ 
              x: Math.random() * 100 - 50 + '%', 
              y: Math.random() * 100 - 50 + '%', 
              scale: 0.5 + Math.random(), 
              rotate: Math.random() * 360 
            }}
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 10, -10, 0], 
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: 'easeInOut',
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          >
            <Icon size={48 + Math.random() * 48} />
          </motion.div>
        ))}
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center space-y-12'>
          {/* --- Scramble Header --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='inline-block mb-4'
          >
            <div className='flex items-center justify-center gap-2 mb-4'>
              <div className='h-px w-8 bg-cyan-500/50' />
              <span className='text-cyan-400 font-mono text-sm tracking-widest uppercase'>
                System Online
              </span>
              <div className='h-px w-8 bg-cyan-500/50' />
            </div>
            
            <h1 className='text-5xl md:text-8xl font-bold tracking-tight text-white'>
              <ScrambleText 
                text='HELLO, WORLD.' 
                className='block text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                delay={500}
              />
              <span className='block mt-2 text-slate-200'>
                I AM A{' '}
                <span className='relative whitespace-nowrap'>
                  <span className='absolute -inset-1 bg-cyan-500/10 -skew-y-2 rounded-lg' />
                  <span className='relative text-cyan-200'>CREATOR</span>
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className='text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed'
          >
            I break down complex problems and reassemble them into elegant interfaces.
            Welcome to my digital workspace.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-10'
          >
            <a 
              href='#projects' 
              className='group relative px-8 py-4 bg-cyan-600 rounded-full font-bold text-white shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] transition-all hover:-translate-y-1 overflow-hidden'
            >
              <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
              <span className='relative flex items-center gap-2'>
                View Architecture <ArrowRight className='w-4 h-4' />
              </span>
            </a>
            
            <a 
              href='#contact' 
              className='px-8 py-4 rounded-full font-bold text-cyan-100 border border-cyan-500/30 hover:bg-cyan-950/50 transition-all hover:border-cyan-500/80 backdrop-blur-sm'
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
