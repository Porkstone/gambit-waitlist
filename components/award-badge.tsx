export function AwardBadge() {
    return (
      <div className="flex items-center gap-4">
        <svg
          width="64"
          height="96"
          viewBox="0 0 64 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          {/* Left side of circular wreath */}
          <path
            d="M28 8C26 10 24 13 22 16C20 19 18 22 16 25C15 27 14 29 13 31C12 33 11 35 10 37
               M26 10L24 12L22 10L24 8L26 10Z
               M24 14L22 16L20 14L22 12L24 14Z
               M22 18L20 20L18 18L20 16L22 18Z
               M20 22L18 24L16 22L18 20L20 22Z
               M18 26L16 28L14 26L16 24L18 26Z
               M16 30L14 32L12 30L14 28L16 30Z
               M14 34L12 36L10 34L12 32L14 34Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
          />
        </svg>
  
        {/* Text Content */}
        <div className="text-center">
          <div className="text-gray-600 text-xs font-medium tracking-wide whitespace-nowrap">The Future of AI 2025</div>
          <div className="text-black text-lg font-bold tracking-tight">Top 50</div>
        </div>
  
        <svg
          width="64"
          height="96"
          viewBox="0 0 64 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          {/* Right side of circular wreath */}
          <path
            d="M4 8C6 10 8 13 10 16C12 19 14 22 16 25C17 27 18 29 19 31C20 33 21 35 22 37
               M6 10L8 12L10 10L8 8L6 10Z
               M8 14L10 16L12 14L10 12L8 14Z
               M10 18L12 20L14 18L12 16L10 18Z
               M12 22L14 24L16 22L14 20L12 22Z
               M14 26L16 28L18 26L16 24L14 26Z
               M16 30L18 32L20 30L18 28L16 30Z
               M18 34L20 36L22 34L20 32L18 34Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
          />
        </svg>
      </div>
    )
  }
  