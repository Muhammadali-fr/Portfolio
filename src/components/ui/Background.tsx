// components/Background.tsx
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f8fafc] to-[#f3f6ff]" />

      {/* Blue glow (primary) */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-300/25 blur-[140px]" />

      {/* Indigo glow (secondary) */}
      <div className="absolute top-1/3 right-[-200px] h-[480px] w-[480px] rounded-full bg-indigo-500/25 blur-[140px]" />

      {/* Neutral glow (very subtle depth) */}
      <div className="absolute bottom-[-250px] left-1/3 h-[520px] w-[520px] rounded-full bg-slate-500/25 blur-[160px]" />
    </div>
  );
}
