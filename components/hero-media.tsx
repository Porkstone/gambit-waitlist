"use client"

import { useEffect, useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMobileLandscape, setIsMobileLandscape] = useState(false)

  useEffect(() => {
    const check = () => {
      const matches = window.matchMedia("(max-width: 900px) and (orientation: landscape)").matches
      setIsMobileLandscape(matches)
    }
    check()
    window.addEventListener("resize", check)
    window.addEventListener("orientationchange", check)
    return () => {
      window.removeEventListener("resize", check)
      window.removeEventListener("orientationchange", check)
    }
  }, [])

  if (isMobileLandscape) {
    return (
      <div className="fixed inset-0 z-50">
        <video
          ref={videoRef}
          src="/images/u.mp4"
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          onCanPlay={() => videoRef.current?.play().catch(() => {})}
        />
      </div>
    )
  }

  return (
    <div className="relative h-full px-4 lg:pl-8 lg:pr-16 py-4 lg:py-8">
      <div className="pointer-events-none absolute top-10 lg:top-14 left-0 right-0 z-20 flex justify-center">
        <div className="text-center px-3">
          <div className="text-primary text-3xl lg:text-4xl font-semibold tracking-wide pt-4">How it works</div>
          <div className="text-primary text-base lg:text-lg">(example on Booking.com)</div>
        </div>
      </div>
      <div className="relative z-10 mt-28 lg:mt-32 flex">
        <div className="relative ml-0 w-full max-w-[1100px] rounded-2xl ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] bg-black/60 overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <video
              ref={videoRef}
              src="/images/u.mp4"
              className="h-full w-full object-contain object-center lg:object-left"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onCanPlay={() => videoRef.current?.play().catch(() => {})}
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}
