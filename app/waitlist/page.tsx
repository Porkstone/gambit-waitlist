"use client"

import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"
import Link from "next/link"
import { HeroMedia } from "@/components/hero-media"

export default function WaitlistPage() {
  return (
    <div className="h-screen flex flex-col gradient-bg overflow-hidden relative text-white selection:bg-yellow-400 selection:text-purple-900">
      <ParticleBackground />
      
      {/* Header */}
      <header className="relative z-20 w-full p-6 lg:px-0 flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Left Header Content (Logo) */}
        <div className="lg:w-1/2 flex lg:justify-end lg:pr-12 px-6 lg:px-0">
          <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
            <GambitLogo className="text-white" />
          </div>
        </div>
        
        {/* Right Header Content (Award Badge) - Aligned with Video */}
        <div className="hidden lg:flex lg:w-1/2 justify-start pt-1">
          <div className="w-full max-w-3xl lg:mr-auto flex justify-end pr-16">
             <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full py-1.5 pl-1.5 pr-4 transition-all hover:bg-white/10 hover:border-white/20">
                <div className="bg-white/10 rounded-full p-1">
                  <Image
                    src="/images/ai-award-badge.png"
                    alt="Award Icon"
                    width={24}
                    height={24}
                    className="h-4 w-4 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-white/80 tracking-wide">The Future of AI 2025 Top 50</span>
             </div>
          </div>
        </div>

        {/* Mobile Award Badge (Right aligned) */}
        <div className="lg:hidden flex justify-end px-6">
          <Image
            src="/images/ai-award-badge.png"
            alt="The Future of AI 2025 Top 50"
            width={400}
            height={100}
            className="h-6 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 grid lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-[1600px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:pl-12 lg:pr-0 pb-12 lg:pb-0">
          <div className="space-y-10 max-w-xl mx-auto lg:mx-0 lg:ml-auto">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl/tight xl:text-6xl/tight font-bold text-balance drop-shadow-sm">
                The tool that <span className="underline decoration-yellow-400/80 decoration-4 underline-offset-4">actually</span> gets you
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400">
                  up to $150 off
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-medium text-white/90">
                  each hotel booking
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-purple-100/80 font-medium tracking-wide max-w-md">
                With this new travel hack. <span className="text-yellow-300 font-semibold">Coming soon.</span>
              </p>
            </div>

            <div className="space-y-8">
              <WaitlistForm />

              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40">
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
                      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Image
                        src={logo.src}
                        alt={`${logo.name} Logo`}
                        width={logo.w}
                        height={24}
                        className="relative h-6 w-auto opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 brightness-0 invert group-hover:invert-0 group-hover:brightness-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Media */}
        <div className="relative h-full w-full min-h-[400px] lg:min-h-auto flex items-start pt-12 lg:pt-20">
          <div className="w-full max-w-3xl lg:mr-auto">
            <HeroMedia />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 text-center">
        <p className="text-white/40 text-xs">
          By using Gambit Technologies Ltd, you agree to our{" "}
          <Link href="/terms" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
            Terms
          </Link>{" "}
          and have read our{" "}
          <Link href="/privacy" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
