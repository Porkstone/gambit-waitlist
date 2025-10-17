"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const hasScheduledShowRef = useRef(false)
  const showTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (showTimeoutRef.current !== null)
        clearTimeout(showTimeoutRef.current)
    }
  }, [])

  return (
    <div className="relative h-full pl-4 pr-8 lg:pl-8 lg:pr-16 py-4 lg:py-8">
      <div
        className={`pointer-events-none absolute top-0 left-0 right-0 z-20 flex justify-center transition-opacity duration-700 ${showVideo ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!showVideo}
      >
        <div className="text-center px-3">
          <div className="text-white text-2xl lg:text-3xl font-semibold tracking-wide pt-4">How it works</div>
          <div className="text-white/80 text-[20px] lg:text-2xl">(example on Booking.com)</div>
        </div>
      </div>
      <video
        ref={videoRef}
        src="/images/u.mp4"
        className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-700 ${showVideo ? "opacity-100" : "opacity-0"}`}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        onCanPlay={() => {
          if (hasScheduledShowRef.current)
            return
          hasScheduledShowRef.current = true
          videoRef.current?.play().catch(() => {})
          showTimeoutRef.current = window.setTimeout(() => {
            setShowVideo(true)
          }, 3000)
        }}
      />
      <Image
        src="/images/hero-woman-city.png"
        alt="Woman in city with golden particles"
        fill
        className={`object-cover object-center transition-opacity duration-700 ${showVideo ? "opacity-0" : "opacity-100"}`}
        priority
      />
    </div>
  )
}


