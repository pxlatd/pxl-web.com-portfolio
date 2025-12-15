import { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Direct manipulation for instant, zero-lag tracking
        // translate3d(x, y, 0) is hardware accelerated
        // -50% centers the element on the coordinates
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className='fixed top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-50 transition-transform duration-75 ease-out will-change-transform'
      style={{
        // Initialize off-screen
        transform: 'translate3d(-500px, -500px, 0)',
      }}
    />
  );
}
