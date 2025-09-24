export function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Golden particles */}
      <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="particle absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full opacity-80"></div>
      <div className="particle absolute bottom-1/3 left-1/5 w-3 h-3 bg-yellow-500 rounded-full opacity-40"></div>
      <div className="particle absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-70"></div>
      <div className="particle absolute bottom-1/4 right-1/5 w-2 h-2 bg-yellow-300 rounded-full opacity-50"></div>

      {/* Additional scattered particles */}
      <div className="particle absolute top-1/5 left-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="particle absolute bottom-1/5 left-1/3 w-2 h-2 bg-yellow-500 rounded-full opacity-40"></div>
      <div className="particle absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-70"></div>
    </div>
  )
}
