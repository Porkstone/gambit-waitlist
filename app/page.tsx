"use client"

import { GambitLogo } from "@/components/gambit-logo"
import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"
import Link from "next/link"
import { HeroMedia } from "../components/hero-media"
import { useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function ChromeRedirect() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const isDebugMode = searchParams.get('debug') === 'true'
    
    if (isDebugMode)
      return

    const isChromeDesktop = () => {
      if (typeof window === 'undefined') return false
      
      const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isDesktop = !isMobile && window.innerWidth >= 768
      
      return isChrome && isDesktop
    }

    if (isChromeDesktop())
      router.push('/install')
  }, [router, searchParams])

  return null
}

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <ChromeRedirect />
      </Suspense>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-yellow-100 selection:text-purple-900 font-sans">
        {/* Header */}
        <header className="relative z-20 w-full bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
            <div className="flex items-center gap-12 flex-1">
              <Link href="/" aria-label="Go to home">
                <GambitLogo className="text-gray-900" />
              </Link>
              
              <div className="hidden lg:block max-w-xl w-full relative">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Start Searching..."
                    className="w-full bg-gray-50 border border-transparent hover:bg-gray-100 focus:bg-white focus:border-gray-200 rounded-lg px-4 py-2.5 pl-11 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition-all duration-200"
                  />
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 shrink-0">
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                Categories 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 text-gray-500 group-hover:text-gray-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Log in
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[1400px] mx-auto w-full px-6 lg:px-8 py-12 lg:py-20 gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight text-balance">
                The tool that <span className="underline decoration-yellow-400/80 decoration-4 underline-offset-4">actually</span> gets you
                <span className="block mt-2 text-[#FF6B00]">
                  up to $150 off
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-medium text-gray-700">
                  each hotel booking
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                With this new travel hack. <span className="text-[#FF6B00] font-semibold">Coming soon.</span>
              </p>
            </div>

            <div className="space-y-8">
              <WaitlistForm />

              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                  Used by employees at
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {[
                    { name: "Netflix", src: "/images/logos/netflix-logo.png", w: 80 },
                    { name: "Airbnb", src: "/images/logos/airbnb-logo.png", w: 80 },
                    { name: "Uber", src: "/images/logos/uber-logo.png", w: 70 },
                    { name: "Visa", src: "/images/logos/visa-logo.png", w: 70 },
                  ].map((logo) => (
                    <div key={logo.name} className="relative group">
                      <Image
                        src={logo.src}
                        alt={`${logo.name} Logo`}
                        width={logo.w}
                        height={24}
                        className="relative h-6 w-auto opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Media */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[1200px]">
            <HeroMedia />
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-20 py-8 px-6 text-center border-t border-gray-100 bg-gray-50">
          <p className="text-gray-500 text-sm">
            By using Gambit Technologies Ltd, you agree to our{" "}
            <Link href="/terms" className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors inline-block py-1 px-1 pointer-events-auto">
              Terms
            </Link>{" "}
            and have read our{" "}
            <Link href="/privacy" className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors inline-block py-1 px-1 pointer-events-auto">
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </div>
    </>
  )
}
