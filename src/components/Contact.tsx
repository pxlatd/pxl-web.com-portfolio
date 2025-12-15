import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2, Loader2, Mail, Github, Linkedin, AlertCircle } from 'lucide-react';

// REPLACE THIS WITH YOUR FORMSPREE ENDPOINT
const FORM_ENDPOINT = "https://formspree.io/f/mzznwknl";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        // Reset status after 5 seconds so they can send another if needed
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id='contact' className='py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        
        <div className='mb-24 text-center'>
          <h2 className='text-3xl font-bold mb-4 font-mono text-white'>
            <span className='text-cyan-500'>$</span> ./initiate_contact.sh
          </h2>
          <p className='text-slate-400 font-mono text-sm'>
            Enter your credentials to establish a connection.
          </p>
        </div>

        {/* Terminal Window */}
        <div className='bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-cyan-900/10'>
          {/* Terminal Header */}
          <div className='h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50' />
            <div className='w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50' />
            <div className='w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50' />
            <div className='ml-auto flex items-center gap-2 text-xs text-slate-500 font-mono'>
              <Terminal className='w-3 h-3' />
              bash — 80x24
            </div>
          </div>

          {/* Terminal Body */}
          <div className='p-6 font-mono text-sm md:text-base'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              
              {/* Name Input */}
              <div 
                className={`group transition-opacity ${status === 'processing' ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => document.getElementById('name-input')?.focus()}
              >
                <div className='flex flex-wrap items-center gap-3 text-slate-300'>
                  <span className='text-green-400'>root@portfolio:~$</span>
                  <span className='text-blue-400'>input_name</span>
                  <div className='flex-grow flex items-center'>
                    <span className='mr-2 text-slate-500'>{'>'}</span>
                    <input
                      id='name-input'
                      name='name'
                      type='text'
                      required
                      disabled={status === 'processing'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className='bg-transparent border-none outline-none text-white w-full placeholder-slate-600 focus:ring-0 p-0'
                      placeholder='_'
                      autoComplete='off'
                    />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div 
                className={`group transition-opacity ${status === 'processing' ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => document.getElementById('email-input')?.focus()}
              >
                <div className='flex flex-wrap items-center gap-3 text-slate-300'>
                  <span className='text-green-400'>root@portfolio:~$</span>
                  <span className='text-blue-400'>input_email</span>
                  <div className='flex-grow flex items-center'>
                    <span className='mr-2 text-slate-500'>{'>'}</span>
                    <input
                      id='email-input'
                      name='email'
                      type='email'
                      required
                      disabled={status === 'processing'}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className='bg-transparent border-none outline-none text-white w-full placeholder-slate-600 focus:ring-0 p-0'
                      placeholder='_'
                      autoComplete='off'
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div 
                className={`group transition-opacity ${status === 'processing' ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => document.getElementById('message-input')?.focus()}
              >
                <div className='flex flex-col gap-2 text-slate-300'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <span className='text-green-400'>root@portfolio:~$</span>
                    <span className='text-blue-400'>input_message</span>
                  </div>
                  <div className='flex items-start'>
                    <span className='mr-2 text-slate-500 mt-1'>{'>'}</span>
                    <textarea
                      id='message-input'
                      name='message'
                      required
                      disabled={status === 'processing'}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className='bg-transparent border-none outline-none text-white w-full placeholder-slate-600 focus:ring-0 p-0 resize-none'
                      placeholder='Type your message here..'
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button / Status Area */}
              <div className='pt-4 border-t border-slate-800/50 mt-4'>
                <AnimatePresence mode='wait'>
                  {status === 'idle' && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      type='submit'
                      className='group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors'
                    >
                      <span className='text-green-400'>root@portfolio:~$</span>
                      <span>./send_message.sh --force</span>
                      <div className='w-2.5 h-4 bg-cyan-500/50 animate-pulse ml-1' />
                    </motion.button>
                  )}

                  {status === 'processing' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='flex items-center gap-2 text-slate-400'
                    >
                      <Loader2 className='w-4 h-4 animate-spin text-cyan-500' />
                      <span>Transmitting message...</span>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='flex items-center gap-2 text-emerald-400'
                    >
                      <CheckCircle2 className='w-4 h-4' />
                      <span>Transmission successful.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='flex items-center gap-2 text-red-400'
                    >
                      <AlertCircle className='w-4 h-4' />
                      <span>Transmission failed. Check network integrity.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>
        </div>

        {/* Footer Links */}
        <footer className='mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm font-mono'>
          <p>&copy; {new Date().getFullYear()} System. All rights reserved.</p>
          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <a href='https://github.com/pxlatd' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-400 transition-colors flex items-center gap-2'>
              <Github className='w-4 h-4' /> github
            </a>
            <a href='https://www.linkedin.com/in/pixel-ated-3b529a394/' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-400 transition-colors flex items-center gap-2'>
              <Linkedin className='w-4 h-4' /> linkedin
            </a>
            <a href='mailto:james_jangalang@pxl-web.com' className='hover:text-cyan-400 transition-colors flex items-center gap-2'>
              <Mail className='w-4 h-4' /> email
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
}
