import { GambitLogo } from "@/components/gambit-logo"
import { ParticleBackground } from "@/components/particle-background"
import { BackButton } from "@/components/back-button"
import Image from "next/image"
import Link from "next/link"
export const metadata = {
  title: "Privacy Policy | Gambit",
  description: "Learn how Gambit collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white py-5 lg:py-7 px-4 lg:px-12 relative z-20 shadow-sm min-h-16 lg:min-h-24">
        <div className="flex items-center justify-between lg:justify-start">
          <div className="flex items-center gap-4">
            <BackButton />
            <Link href="/" aria-label="Go to home">
              <GambitLogo />
            </Link>
          </div>
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

      <div className="flex-1 gradient-bg relative flex flex-col">
        <ParticleBackground />

        <main className="relative z-10 grid lg:grid-cols-2 min-h-0">
          <div className="flex flex-col justify-center px-6 lg:px-12 py-8 lg:py-12 relative overflow-y-auto">
            <div className="space-y-4 max-w-lg">
              <h1 className="text-xl font-bold tracking-tight text-white">Privacy Policy</h1>
              <p className="text-xs text-white/70">Last updated: October 2025</p>

              <div className="space-y-4 text-xs leading-5 text-white/90">
                <p>
                  Your privacy matters to us. This Privacy Policy explains what information we
                  collect, how we use it, and your choices. By using Gambit, you agree to the
                  collection and use of information in accordance with this policy.
                </p>

                <section>
                  <h2 className="text-sm font-semibold text-white">Information We Collect</h2>
                  <ul className="mt-1.5 list-disc pl-5 space-y-1">
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
                  <h2 className="text-sm font-semibold text-white">How We Use Your Information</h2>
                  <ul className="mt-1.5 list-disc pl-5 space-y-1">
                    <li>To provide and improve our services and user experience.</li>
                    <li>To communicate updates, announcements, and relevant marketing.</li>
                    <li>To maintain the security and reliability of our platform.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-sm font-semibold text-white">Google Data Usage</h2>
                  <p className="mt-1.5">
                    We use Google services, including Google Analytics and other Google products, to help us understand how visitors interact with our website and improve our services. Google may collect and process data about your use of our website in accordance with Google's Privacy Policy. This data may include information such as your IP address, browser type, device information, and pages visited. You can learn more about how Google uses data when you visit our website by visiting{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                      Google's Privacy Policy
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-semibold text-white">Data Retention</h2>
                  <p className="mt-1.5">
                    We retain personal information only for as long as necessary to fulfill the
                    purposes outlined in this policy or as required by law. You can request
                    deletion of your information at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-semibold text-white">Your Choices</h2>
                  <ul className="mt-1.5 list-disc pl-5 space-y-1">
                    <li>Opt-out of marketing emails using the unsubscribe link in our emails.</li>
                    <li>Request access, correction, or deletion of your data by contacting us.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-sm font-semibold text-white">Contact Us</h2>
                  <p className="mt-1.5">
                    If you have questions about this Privacy Policy or our data practices,
                    contact us at <span className="font-medium">privacy@gambit.app</span>.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] lg:h-full hidden lg:block">
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


