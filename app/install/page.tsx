"use client"

import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import Image from "next/image"
import Link from "next/link"

export default function InstallPage() {
  return (
    <div className="min-h-screen flex flex-col gradient-bg overflow-hidden relative text-white selection:bg-yellow-400 selection:text-purple-900">
      <ParticleBackground />
      
      {/* Header */}
      <header className="relative z-20 w-full bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <GambitLogo className="text-white" />
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Start Searching..."
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 text-sm text-white placeholder:text-white/60 w-64 focus:outline-none focus:border-white/40 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="text-sm text-white/80 hover:text-white transition-colors">Categories ▼</button>
            <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              Log in
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-12 lg:py-20 gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-8 max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Gambit automatically finds and applies the best voucher codes at checkout
            </h1>
            <p className="text-lg sm:text-xl text-purple-100/80 leading-relaxed">
              We search for the best voucher codes on the Internet and automatically apply them to your bag. Save on all your purchases with just one click!
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              {/* Chrome Logo - Simplified */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0z" fill="#EA4335"/>
                <path d="M21.382 14.033a6.679 6.679 0 01.307 2.214A11.985 11.985 0 0112 24c-4.546 0-8.744-2.507-10.883-6.549l8.14-14.103a5.46 5.46 0 018.08 7.497l3.044-5.269 6.604 11.458h-6.603z" fill="#34A853"/>
                <path d="M3.069 7.765c-.16.294-.314.59-.456.893L12 12l5.091-8.816A5.46 5.46 0 0112 6.545a5.46 5.46 0 01-8.931-1.22z" fill="#FBBC04"/>
                <circle cx="12" cy="12" r="3" fill="#4285F4"/>
              </svg>
              <span>Add to Chrome - It's Free</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/80">
                4.9 out of 5 based on 200,000+ users
              </span>
            </div>
          </div>
        </div>

        {/* Right Device Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end max-w-2xl">
          <DeviceMockup />
        </div>
      </main>

      {/* How It Works Section */}
      <section className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-16 lg:py-24 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">How Gambit Works</h2>
        <p className="text-lg sm:text-xl text-purple-100/80 max-w-2xl mx-auto">
          Saving money when you shop online is as easy as 1, 2, 3.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 text-center border-t border-white/10">
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

function DeviceMockup() {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl transform -rotate-3 lg:rotate-0">
        <div className="bg-white rounded-[1.5rem] overflow-hidden">
          {/* Browser Bar */}
          <div className="bg-gray-100 px-4 py-2 flex items-center gap-3 border-b border-gray-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-500">
              shopping.example.com
            </div>
            <div className="relative">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Product Page */}
          <div className="p-6 space-y-6">
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-gray-300 text-sm">Sneakers Image</div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Sneakers</h3>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>

              {/* Color Swatches */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-900 border-2 border-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-gray-300"></div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600">-</button>
                <span className="text-gray-900 font-medium">1</span>
                <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600">+</button>
              </div>

              {/* Add to Bag Button */}
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium">
                Add to Bag
              </button>
            </div>
          </div>

          {/* Shopping Cart Icon */}
          <div className="absolute bottom-6 left-6">
            <div className="relative">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
