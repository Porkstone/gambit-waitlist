import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import Image from "next/image"
import Link from "next/link"
export const metadata = {
  title: "Terms of Service | Gambit",
  description: "Read the terms and conditions for using Gambit.",
}

export default function TermsPage() {
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
              <h1 className="text-2xl font-bold tracking-tight text-white">Terms of Service</h1>
              <p className="text-sm text-white/70">Last updated: October 2025</p>

              <div className="space-y-6 text-sm leading-6 text-white/90">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of Gambit.
                  By accessing or using the site, you agree to be bound by these Terms.
                </p>

                <section>
                  <h2 className="text-lg font-semibold text-white">Use of the Service</h2>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>You must be at least the age of majority in your jurisdiction.</li>
                    <li>Do not misuse the service or attempt to disrupt its operation.</li>
                    <li>You agree to comply with all applicable laws and regulations.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Accounts and Communications</h2>
                  <p className="mt-2">
                    When you join our waitlist, you agree to receive communications related to
                    Gambit. You can unsubscribe at any time using the link in our emails.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Intellectual Property</h2>
                  <p className="mt-2">
                    All content, trademarks, and branding displayed on Gambit are the property of
                    their respective owners and protected by applicable laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Disclaimers</h2>
                  <p className="mt-2">
                    The service is provided on an "as is" and "as available" basis without
                    warranties of any kind, whether express or implied. We do not guarantee
                    uninterrupted or error-free operation.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Limitation of Liability</h2>
                  <p className="mt-2">
                    To the fullest extent permitted by law, Gambit shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages arising out
                    of or related to your use of the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Changes to These Terms</h2>
                  <p className="mt-2">
                    We may modify these Terms from time to time. Changes become effective when
                    posted. Your continued use of the service indicates acceptance of the updated
                    Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-white">Contact Us</h2>
                  <p className="mt-2">
                    For questions about these Terms, contact us at
                    <span className="font-medium"> terms@gambit.app</span>.
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


