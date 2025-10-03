export function GambitLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        {/* Modern geometric G icon with gradient */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gambitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
          <path d="M5 5h18v5H10v20h18v-12h-6v-5h11v22H5V5z" fill="url(#gambitGradient)" />
        </svg>
      </div>
      <span className="text-lg font-bold text-gray-900 tracking-tight">Gambit</span>
    </div>
  )
}