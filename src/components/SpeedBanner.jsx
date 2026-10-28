export default function SpeedBanner() {
  return (
    <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 h-full w-24 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={{ animation: 'speed-lines 2s linear infinite' }}></div>
    </div>
  );
}
