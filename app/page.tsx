import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white py-6 lg:py-8 px-6 lg:px-12 relative shadow-sm">
        <div className="flex items-center justify-between lg:justify-start">
          <GambitLogo />
          <Image
            src="/images/ai-award-badge.png"
            alt="The Future of AI 2025 Top 50"
            width={400}
            height={100}
            className="h-6 w-auto lg:hidden"
          />
        </div>
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/ai-award-badge.png"
            alt="The Future of AI 2025 Top 50"
            width={400}
            height={100}
            className="h-10 w-auto"
          />
        </div>
      </header>

      <div className="flex-1 gradient-bg relative overflow-hidden flex flex-col">
        <ParticleBackground />

        {/* Main Content - Full Height Grid */}
        <main className="relative z-10 grid lg:grid-cols-2 flex-1">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 lg:px-12 relative">
            <div className="space-y-8 max-w-lg">
            <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-foreground text-balance leading-relaxed lg:leading-loose">
                
                <span className="text-white">
                  THE TOOL THAT <span className="underline">ACTUALLY</span> GETS YOU 
                </span>
              
              
                <span className="text-white"> UP TO</span>
                <span className="text-yellow-400"> $150 OFF EACH HOTEL BOOKING </span>
              
              <br />
              <span className="text-white whitespace-nowrap">WITH THIS NEW TRAVEL HACK</span>
            </h1>

            <p className="text-sm lg:text-base text-white font-medium tracking-wide whitespace-nowrap">
              COMING SOON.
            </p>

              <WaitlistForm />

              <div className="flex items-center gap-8 pt-4">
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/logos/netflix-logo.png"
                    alt="Netflix Logo"
                    width={80}
                    height={24}
                    className=""
                  />
                </div>
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/logos/airbnb-logo.png"
                    alt="Airbnb Logo"
                    width={80}
                    height={24}
                  />
                </div>
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/logos/uber-logo.png"
                    alt="Uber Logo"
                    width={80}
                    height={24}
                  />
                </div>
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/logos/visa-logo.png"
                    alt="Visa Logo"
                    width={80}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image - Full Height */}
          <div className="relative h-full">
            <Image
              src="/images/hero-woman-city.png"
              alt="Woman in city with golden particles"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </main>

        <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 px-6">
          <p className="text-center text-white/70 text-xs lg:text-sm">
            By using Gambit Technologies Ltd, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white transition-colors">
              Terms
            </Link>{" "}
            and have read our{" "}
            <Link href="/privacy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
