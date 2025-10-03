import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import Image from "next/image"
import Link from "next/link"
export const metadata = {
  title: "Privacy Policy | Gambit",
  description: "Learn how Gambit collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white py-4 px-6 lg:px-12 relative z-20 shadow-sm">
        <div className="flex items-center">
          <GambitLogo />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/ai-award-badge.png"
            alt="The Future of AI 2025 Top 50"
            width={400}
            height={100}
            className="h-8 lg:h-10 w-auto"
          />
        </div>
      </header>

      <div className="flex-1 gradient-bg relative overflow-hidden flex flex-col">
        <ParticleBackground />

        <main className="relative z-10 grid lg:grid-cols-2 flex-1">
          <div className="flex flex-col justify-center px-6 lg:px-12 relative">
            <div className="space-y-6 max-w-lg">
              <h1 className="text-2xl font-bold tracking-tight text-white">Privacy Policy</h1>
              <p className="text-sm text-white/70">Last updated: October 2025</p>

              <div className="space-y-6 text-sm leading-6 text-white/90">
                <p>
                  Your privacy matters to us. This Privacy Policy explains what information we
                  collect, how we use it, and your choices. By using Gambit, you agree to the
                  collection and use of information in accordance with this policy.
                </p>

                <section>
                  <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>
                      Contact information: such as your email address when you join the waitlist.
                    </li>
                    <li>
                      Usage data: basic analytics about how you interact with our site (e.g.,
                      pages visited, timestamps, and device information).
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">How We Use Your Information</h2>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>To provide and improve our services and user experience.</li>
                    <li>To communicate updates, announcements, and relevant marketing.</li>
                    <li>To maintain the security and reliability of our platform.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Data Retention</h2>
                  <p className="mt-2">
                    We retain personal information only for as long as necessary to fulfill the
                    purposes outlined in this policy or as required by law. You can request
                    deletion of your information at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Your Choices</h2>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Opt-out of marketing emails using the unsubscribe link in our emails.</li>
                    <li>Request access, correction, or deletion of your data by contacting us.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Contact Us</h2>
                  <p className="mt-2">
                    If you have questions about this Privacy Policy or our data practices,
                    contact us at <span className="font-medium">privacy@gambit.app</span>.
                  </p>
                </section>
              </div>
            </div>
          </div>

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


