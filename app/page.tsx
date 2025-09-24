import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />

      {/* Main Content - Full Height Grid */}
      <main className="relative z-10 grid lg:grid-cols-2 h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-12 relative">
          <div className="absolute top-6 left-6 lg:left-12">
            <GambitLogo />
          </div>

          <div className="space-y-8 max-w-lg">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground leading-tight text-balance">
              <span className="text-white">{"WE'RE LAUNCHING AN INNOVATIVE CONCEPT TO SAVE PEOPLE UP TO "}</span>
              <span className="text-yellow-400">$150 OFF HOTEL BOOKINGS WORLDWIDE </span>
              <span className="text-white">WITH THIS NEW TRAVEL HACK</span>
            </h1>

            <p className="text-sm lg:text-base text-white font-medium tracking-wide whitespace-nowrap">
              COMING SOON. ACCESS IS LIMITED. BE AMONG THE FIRST.
            </p>

            <WaitlistForm />

            <div className="flex items-center gap-8 pt-4">
              <div className="opacity-70 hover:opacity-100 transition-opacity">
              <span className="bg-neutral-100 rounded-md px-4 py-2 mr-2 inline-block">
                <img src="/images/netflix.png" alt="Netflix Logo" className="h-8 md:h-10 inline-block mr-1" />
                </span>
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
              <span className="bg-neutral-100 rounded-md px-4 py-2 mr-2 inline-block">
                <img src="/images/airbnb.png" alt="Airbnb Logo" className="h-8 md:h-10 inline-block mr-1" />
                </span>
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <span className="bg-neutral-100 rounded-md px-4 py-2 mr-2 inline-block">
                  <img src="/images/uber.jpg" alt="Uber Logo" className="h-8 md:h-10 inline-block mr-1" />
                  </span>
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity"> 
                <span className="bg-neutral-100 rounded-md px-4 py-2 mr-1 inline-block">
                  <img src="/images/visa.webp" alt="Visa Logo" className="h-8 md:h-10 inline-block" />
                </span>
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
    </div>
  )
}
