import Link from 'next/link'
import { ChevronRight, DollarSign, Megaphone, Ban, Link2, BarChart2, Shield, Mail } from 'lucide-react'

export const metadata = {
  title: 'Advertising Disclosure | Driver Info Hub',
  description: 'Our advertising and affiliate policy — and the deceptive formats we ban outright.',
}

export default function AdvertisingDisclosurePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-slate-900">Advertising Disclosure</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Advertising Disclosure
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              How This Site Is Funded — our advertising and affiliate policy, and the deceptive formats we ban outright.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
              Last updated: May 21, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Intro */}
          <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <p className="text-lg leading-8 text-slate-700 font-medium">
              Driver Info Hub is a free educational resource. To keep it free, the site may display advertising and participate in affiliate programmes. This page explains how that works and the standards we follow.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. How This Site Is Funded</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Driver Info Hub may be supported by third-party advertising networks and affiliate links. We do not sell software, subscriptions, or services, and we never charge readers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Ads Are Always Separate From Content</h2>
              </div>
              <p className="leading-8 text-slate-600">
                All advertisements are served by third-party networks and are clearly distinct from editorial content. Sponsored placements, if used, will always be labelled. Ads never influence our writing or recommendations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600">
                  <Ban className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. No Deceptive Elements — Ever</h2>
              </div>
              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <p className="leading-8 text-slate-700">
                  We strictly prohibit misleading design patterns such as fake download buttons, system warnings, or deceptive UI elements. We do not host downloads or impersonate system alerts.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <Link2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Affiliate Links</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Some links may be affiliate links, meaning we may earn a commission at no extra cost to you. These relationships never influence editorial content or recommendations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <BarChart2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Interest-Based Advertising and Your Choices</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Advertising partners may use cookies to show relevant ads. You can opt out via cookie settings, browser controls, or network opt-out tools. We also respect Global Privacy Control (GPC) signals where applicable.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Advertiser Responsibility</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Third-party ads are the responsibility of the advertisers themselves. We do not endorse advertised products and are not responsible for external transactions, purchases, or agreements made through third-party websites.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Contact</h2>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6 space-y-2">
                <p className="font-bold text-slate-900">Driver Info Hub Media LLC</p>
                <p className="text-slate-600">
                  Email:{' '}
                  <a href="mailto:support@driverinfohub.com" className="text-blue-600 hover:underline">support@driverinfohub.com</a>
                  <span className="text-slate-400 ml-2 text-sm">— Subject: Advertising Inquiry</span>
                </p>
                <p className="text-slate-600">
                 95 Broadacre Dr, Kitchener,<br />
                   ON N2R 0S5, Canada<br />
                 16904599 CANADA INC.
                </p>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link href="/cookie-policy/" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Cookie Policy →</p>
              <p className="mt-1 text-sm text-slate-500">Cookies and your choices</p>
            </Link>
            <Link href="/privacy/" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Privacy Policy →</p>
              <p className="mt-1 text-sm text-slate-500">How we handle your data</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}