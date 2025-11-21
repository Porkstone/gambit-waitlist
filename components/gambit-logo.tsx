import { cn } from "@/lib/utils"

export function GambitLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-row items-center gap-2 sm:gap-3", className)}>
      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 shrink-0">
        {/* Purple geometric G shape */}
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M4 4h12v4H8v16h12v-8h-4v-4h8v16H4V4z" fill="currentColor" />
        </svg>
      </div>
      <span className="text-lg sm:text-xl lg:text-2xl font-bold antialiased tracking-tight leading-none">Gambit</span>
    </div>
  )
}
