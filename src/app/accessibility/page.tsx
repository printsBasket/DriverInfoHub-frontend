import Link from 'next/link'
import { ChevronRight, Accessibility, CheckCircle, RefreshCw, Puzzle, MessageCircle, Mail } from 'lucide-react'

export const metadata = {
  title: 'Accessibility Statement | Driver Info Hub',
  description: 'Our commitment to digital accessibility for people with disabilities.',
}

const features = [
  'Clear and consistent navigation throughout the site.',
  'Keyboard-accessible menus and interactive elements.',
  'Alternative text for meaningful images.',
  'Sufficient color contrast for readability.',
  'Responsive layouts for various screen sizes.',
  'Structured headings for screen reader support.',
]

export default function AccessibilityPage() {
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
            <span className="font-medium text-slate-900">Accessibility</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Accessibility Statement
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              Our commitment to digital accessibility for people with disabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Intro */}
          <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <p className="text-lg leading-8 text-slate-700 font-medium">
              At Driver Info Hub, we strive to make our website accessible and usable for all visitors, regardless of technology or ability. Our goal is to create an inclusive online environment that enables every user to access information and services efficiently.
            </p>
          </div>

          <div className="space-y-6">
            {/* Standards */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <Accessibility className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Accessibility Standards</h2>
              </div>
              <p className="leading-8 text-slate-600">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA wherever possible. These guidelines explain how to make web content more accessible for people with a wide range of disabilities, including visual, auditory, cognitive, and motor impairments.
              </p>
            </div>

            {/* Features */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Accessibility Features</h2>
              </div>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-slate-600 leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ongoing */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Ongoing Improvements</h2>
              </div>
              <p className="leading-8 text-slate-600">
                Accessibility is an ongoing effort. We regularly review our website, test new features, and identify areas for improvement to enhance usability for all visitors. We welcome feedback from users regarding accessibility barriers they may encounter.
              </p>
            </div>

            {/* Third-party */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <Puzzle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Content</h2>
              </div>
              <p className="leading-8 text-slate-600">
                While we strive to ensure accessibility across our website, some third-party tools, plugins, or external content may not fully meet accessibility standards. We encourage providers to improve accessibility wherever possible.
              </p>
            </div>

            {/* Feedback */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Feedback and Assistance</h2>
              </div>
              <p className="leading-8 text-slate-600">
                If you experience any difficulty accessing content on this website or require assistance, please contact our support team. We value your feedback and will make reasonable efforts to address accessibility concerns promptly.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Us</h2>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6 space-y-2">
                <p className="text-slate-600">
                  Email:{' '}
                  <a href="mailto:support@driverinfohub.com" className="text-blue-600 hover:underline">support@driverinfohub.com</a>
                </p>
                <p className="text-slate-600">Website: www.driverinfohub.com</p>
                <p className="mt-3 text-slate-500 text-sm">
                  We are committed to responding to accessibility-related feedback and inquiries in a timely manner.
                </p>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link href="/contact/" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Contact Us →</p>
              <p className="mt-1 text-sm text-slate-500">Get in touch with our team</p>
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