"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(false)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setTimeElapsed(true), 3000)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (timeElapsed && canPlay)
      setShowVideo(true)
  }, [timeElapsed, canPlay])

  return (
    <div className="relative h-full pl-4 pr-8 lg:pl-8 lg:pr-16 py-4 lg:py-8">
      <div
        className={`pointer-events-none absolute top-10 lg:top-14 left-0 right-0 z-20 flex justify-center transition-opacity duration-700 ${showVideo ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!showVideo}
      >
        <div className="text-center px-3">
          <div className="text-primary text-2xl lg:text-3xl font-semibold tracking-wide pt-4">How it works</div>
          <div className="text-primary text-[20px] lg:text-2xl">(example on Booking.com)</div>
        </div>
      </div>
      <div className="relative z-10 mt-24 lg:mt-32 flex">
        <div
          className={`relative ml-0 w-full max-w-[1100px] rounded-2xl ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] bg-black/60 overflow-hidden transition-opacity duration-700 ${showVideo ? "opacity-100" : "opacity-0"}`}
          aria-hidden={!showVideo}
        >
          <AspectRatio ratio={16 / 9}>
            <video
              ref={videoRef}
              src="/images/u.mp4"
              className={`h-full w-full object-contain object-left transition-opacity duration-700 ${showVideo ? "opacity-100" : "opacity-0"}`}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onCanPlay={() => {
                setCanPlay(true)
                videoRef.current?.play().catch(() => {})
              }}
            />
          </AspectRatio>
        </div>
      </div>
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


