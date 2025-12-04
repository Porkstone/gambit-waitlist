"use client"

import { GambitLogo } from "@/components/gambit-logo"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-yellow-100 selection:text-purple-900 font-sans">
      {/* Header */}
      <header className="relative z-20 w-full bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
          <div className="flex items-center gap-12 flex-1">
            <div className="flex items-center gap-4">
              <BackButton />
              <Link href="/" aria-label="Go to home">
                <GambitLogo className="text-gray-900" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Last updated: October 2025</p>

          <div className="space-y-8 text-base leading-7 text-gray-700">
            <p>
              Your privacy matters to us. This Privacy Policy explains what information we
              collect, how we use it, and your choices. By using Gambit, you agree to the
              collection and use of information in accordance with this policy.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our services and user experience.</li>
                <li>To communicate updates, announcements, and relevant marketing.</li>
                <li>To maintain the security and reliability of our platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Google Data Usage</h2>
              <p>
                We use Google services, including Google Analytics and other Google products, to help us understand how visitors interact with our website and improve our services. Google may collect and process data about your use of our website in accordance with Google's Privacy Policy. This data may include information such as your IP address, browser type, device information, and pages visited. You can learn more about how Google uses data when you visit our website by visiting{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">
                  Google's Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the
                purposes outlined in this policy or as required by law. You can request
                deletion of your information at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opt-out of marketing emails using the unsubscribe link in our emails.</li>
                <li>Request access, correction, or deletion of your data by contacting us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices,
                contact us at <span className="font-medium">privacy@gambit.app</span>.
              </p>
            </section>
          </div>
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
  )
}
