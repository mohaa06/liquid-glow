const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 animated-bg overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#184D39]/40 to-transparent blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-[#1a5c42]/30 to-transparent blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#184D39]/20 via-transparent to-[#0d2e22]/20 blur-3xl animate-pulse-slow" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(150 30% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(150 30% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-[#184D39]/40 animate-float" />
      <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-[#1a5c42]/30 animate-float-delayed" />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-[#184D39]/50 animate-float" />
      <div className="absolute bottom-20 right-1/4 w-4 h-4 rounded-full bg-[#0d2e22]/40 animate-float-delayed" />

      {/* Top Light Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-gradient-to-b from-[#184D39]/20 to-transparent blur-3xl" />
    </div>
  );
};

export default AnimatedBackground;
