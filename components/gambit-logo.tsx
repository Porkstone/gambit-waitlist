export function GambitLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-8 h-8">
        {/* Purple geometric G shape */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h12v4H8v16h12v-8h-4v-4h8v16H4V4z" fill="#8B5CF6" />
        </svg>
      </div>
      <span className="text-2xl font-semibold text-foreground tracking-tight">Gambit</span>
    </div>
  )
}
