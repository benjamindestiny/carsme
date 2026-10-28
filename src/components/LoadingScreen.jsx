import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Slowed down to 3 seconds so you can see the animation
    const timer = setTimeout(() => setIsExiting(true), 3000);
    const finishTimer = setTimeout(() => onFinish(), 3500);

    return () => { clearTimeout(timer); clearTimeout(finishTimer); };
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}>
      
      {/* Speed Lines Background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-20">
        <div className="h-1 bg-accent w-full animate-speed-lines"></div>
        <div className="h-0.5 bg-accent2 w-3/4 animate-speed-lines" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-1 bg-accent w-5/6 animate-speed-lines" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* The Car - Slower animation class */}
      <div className="relative z-10" style={{ animation: 'drive-slowly 3s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}>
        <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 55H190C195 55 200 50 200 45C200 40 195 35 190 35H160L140 15H80L50 35H20C10 35 5 40 5 45C5 50 5 55 10 55Z" fill="#ff2e63"/>
          <circle cx="45" cy="55" r="15" fill="#14141c" stroke="#ff2e63" strokeWidth="4"/>
          <circle cx="155" cy="55" r="15" fill="#14141c" stroke="#ff2e63" strokeWidth="4"/>
          <path d="M140 15H80L60 35H140L140 15Z" fill="#00e5ff" opacity="0.8"/>
        </svg>
      </div>

      {/* Text */}
      <div className="mt-12 text-center z-10">
        <h2 className="text-2xl font-bold tracking-widest uppercase text-white">Loading CarsMe</h2>
        <p className="text-gray-400 text-sm mt-2">Warming up the engine...</p>
      </div>
    </div>
  );
}
