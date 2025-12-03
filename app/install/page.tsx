"use client"

import { GambitLogo } from "@/components/gambit-logo"
import Image from "next/image"
import Link from "next/link"

export default function InstallPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-yellow-100 selection:text-purple-900 font-sans">
      {/* Header */}
      <header className="relative z-20 w-full bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
          <div className="flex items-center gap-12 flex-1">
            <GambitLogo className="text-gray-900" />
            
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

      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[1400px] mx-auto w-full px-6 lg:px-8 py-12 lg:py-20 gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="flex-1 space-y-8 max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight text-balance">
              Gambit automatically finds and applies the best voucher codes at checkout
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              We search for the best voucher codes on the Internet and automatically apply them to your bag. Save on all your purchases with just one click!
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://chromewebstore.google.com/detail/gambit/hejkfeegfmfjnnbdjanjkibllehoaphk"
              className="inline-flex items-center gap-4 bg-[#FF6B00] hover:bg-[#E65D00] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Chrome Logo */}
              <div className="bg-white rounded-full p-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0z" fill="#EA4335"/>
                  <path d="M21.382 14.033a6.679 6.679 0 01.307 2.214A11.985 11.985 0 0112 24c-4.546 0-8.744-2.507-10.883-6.549l8.140-14.103a5.46 5.46 0 018.08 7.497l3.044-5.269 6.604 11.458h-6.603z" fill="#34A853"/>
                  <path d="M3.069 7.765c-.16.294-.314.59-.456.893L12 12l5.091-8.816A5.46 5.46 0 0112 6.545a5.46 5.46 0 01-8.931-1.22z" fill="#FBBC04"/>
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0z" fill="#4285F4"/>
                  <circle cx="12" cy="12" r="4.5" fill="white"/>
                  <circle cx="12" cy="12" r="3.5" fill="#4285F4"/>
                </svg>
              </div>
              <span>Add to Chrome - It's Free</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFB800] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                4.9 out of 5 based on 200,000+ users
              </span>
            </div>
          </div>
        </div>

        {/* Right Device Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[1200px]">
          <DeviceMockup />
        </div>
      </main>

      {/* How It Works Section */}
      <section className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-8 pt-8 lg:pt-12 pb-16 lg:pb-24 text-center">
        <div className="flex justify-center mb-24">
          <Image
            src="/images/ai-award-badge.png"
            alt="The Future of AI 2025 Top 50"
            width={400}
            height={100}
            className=""
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How Gambit Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Saving money when you shop online is as easy as 1, 2, 3.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-gray-100 bg-gray-50">
        <p className="text-gray-500 text-sm">
          By using Gambit Technologies Ltd, you agree to our{" "}
          <Link href="/terms" className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors">
            Terms
          </Link>{" "}
          and have read our{" "}
          <Link href="/privacy" className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors">
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
    <div className="relative w-full">
        <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-gray-900/5">
        <div className="bg-white rounded-[2rem] overflow-hidden h-full min-h-[350px] lg:min-h-[400px] aspect-[16/9]">
          {/* Browser Bar */}
          <div className="bg-gray-50 px-6 py-3 flex items-center gap-4 border-b border-gray-100">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
            <div className="flex-1 bg-white rounded-md px-4 py-1.5 text-xs text-gray-400 shadow-sm border border-gray-100 flex items-center justify-between">
              <span>shopping.example.com</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </div>
            <div className="relative flex items-center gap-3">
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="relative">
                <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#FF6B00] rounded-full border-2 border-white text-[10px] font-bold text-white flex items-center justify-center">
                  8
                </div>
              </div>
            </div>
          </div>

          {/* Product Page Content */}
          <div className="h-full">
            <div className="w-full h-full relative overflow-hidden bg-black">
              <video
                src="/images/u.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
