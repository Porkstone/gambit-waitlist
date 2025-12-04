"use client"

import { GambitLogo } from "@/components/gambit-logo"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-12">Last updated: October 2025</p>

          <div className="space-y-8 text-base leading-7 text-gray-700">
            <p>
              These Terms of Service ("Terms") govern your access to and use of Gambit.
              By accessing or using the site, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Use of the Service</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least the age of majority in your jurisdiction.</li>
                <li>Do not misuse the service or attempt to disrupt its operation.</li>
                <li>You agree to comply with all applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Accounts and Communications</h2>
              <p>
                When you join our waitlist, you agree to receive communications related to
                Gambit. You can unsubscribe at any time using the link in our emails.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
              <p>
                All content, trademarks, and branding displayed on Gambit are the property of
                their respective owners and protected by applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimers</h2>
              <p>
                The service is provided on an "as is" and "as available" basis without
                warranties of any kind, whether express or implied. We do not guarantee
                uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Gambit shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out
                of or related to your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to These Terms</h2>
              <p>
                We may modify these Terms from time to time. Changes become effective when
                posted. Your continued use of the service indicates acceptance of the updated
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <span className="font-medium">terms@gambit.app</span>.
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
