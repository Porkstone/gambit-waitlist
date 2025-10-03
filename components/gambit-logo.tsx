export function GambitLogo() {
  return (
    <div className="flex flex-row items-center gap-2 sm:gap-3">
      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 shrink-0">
        {/* Purple geometric G shape */}
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M4 4h12v4H8v16h12v-8h-4v-4h8v16H4V4z" fill="#8B5CF6" />
        </svg>
      </div>
      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 antialiased tracking-tight leading-none">Gambit</span>
    </div>
  )
}
