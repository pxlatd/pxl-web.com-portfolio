import { useState } from 'react';
import { Terminal, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <Terminal className='w-6 h-6 text-cyan-500' />
            <span className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Pixel
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a href='#home' className='hover:text-cyan-400 px-3 py-2 rounded-md transition-colors'>Home</a>
              <a href='#about' className='hover:text-cyan-400 px-3 py-2 rounded-md transition-colors'>About</a>
              <a href='#projects' className='hover:text-cyan-400 px-3 py-2 rounded-md transition-colors'>Projects</a>
              <a href='#contact' className='hover:text-cyan-400 px-3 py-2 rounded-md transition-colors'>Contact</a>
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className='hidden md:flex items-center gap-4'>
            <a href='https://github.com/pxlatd' target='_blank' rel='noopener noreferrer' className='text-slate-400 hover:text-white transition-colors'>
              <Github className='w-5 h-5' />
            </a>
            <a href='https://www.linkedin.com/in/pixel-ated-3b529a394/' target='_blank' rel='noopener noreferrer' className='text-slate-400 hover:text-white transition-colors'>
              <Linkedin className='w-5 h-5' />
            </a>
            <a href='mailto:james_jangalang@pxl-web.com' className='text-slate-400 hover:text-white transition-colors'>
              <Mail className='w-5 h-5' />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-slate-400 hover:text-white p-2'>
              {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-slate-950 border-b border-slate-800'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href='#home' className='block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-slate-900 rounded-md' onClick={() => setIsOpen(false)}>Home</a>
            <a href='#about' className='block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-slate-900 rounded-md' onClick={() => setIsOpen(false)}>About</a>
            <a href='#projects' className='block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-slate-900 rounded-md' onClick={() => setIsOpen(false)}>Projects</a>
            <a href='#contact' className='block px-3 py-2 text-base font-medium hover:text-cyan-400 hover:bg-slate-900 rounded-md' onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
