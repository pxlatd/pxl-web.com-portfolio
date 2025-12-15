import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';
import Background from './components/Background';

function App() {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative'>
      <Background />
      <MouseFollower />
      <Navbar />
      
      <main className='relative z-10'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
