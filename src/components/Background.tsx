export default function Background() {
  return (
    <div className='fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950'>
      {/* Grid Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      
      {/* Global Vignette: Darkens edges, transparent center */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,transparent,rgba(2,6,23,0.8))]' />
    </div>
  );
}
