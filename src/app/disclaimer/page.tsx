import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, Info, ExternalLink, HelpCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disclaimer | The Driver Learner',
  description: 'Important legal information and disclaimers regarding the use of our services, content, and professional advice.',
}

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-sky-50 via-white to-white py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-slate-900">Disclaimer</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              Legal Notice
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Our Disclaimer
            </h1>

            <p className="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
              Important legal information and disclaimers regarding the use of our services, content, and professional advice.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
                Last updated: May 12, 2026
              </div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
                Reading time: 3 mins
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Sections */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Info className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. General Disclaimer</h2>
              </div>
              <p className="leading-8 text-slate-600">
                The information provided by The Driver Learner ("we," "us," or "our") on <a href="http://thedriverlearner.co" className="text-blue-600 hover:underline">http://thedriverlearner.co</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
              </p>
              <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <p className="leading-8 text-slate-700 font-medium uppercase text-sm">
                  UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Professional Disclaimer</h2>
              </div>
              <p className="leading-8 text-slate-600">
                The Site cannot and does not contain legal or medical advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                We do not provide any kind of hardware repair or software installation services. <span className="font-semibold uppercase">THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.</span>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <ExternalLink className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. External Links Disclaimer</h2>
              </div>
              <p className="leading-8 text-slate-600">
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="leading-8 text-slate-700 font-medium uppercase text-sm">
                  WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                </p>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Learn More</h2>
              </div>
              <p className="mb-6 leading-8 text-slate-600">
                If you require any more information or have any questions about our site's disclaimer, please feel free to Learn More by email at:
              </p>
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="font-bold text-slate-900">The Driver Learner • Information Compliance Team</p>
                <p className="mt-2 text-slate-600">
                  Email:{' '}
                  <a href="mailto:info@thedriverlearner.co" className="text-blue-600 hover:underline">
                    info@thedriverlearner.co
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Related legal links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link href="/privacy/" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Privacy Policy →</p>
              <p className="mt-1 text-sm text-slate-500">How we handle your data</p>
            </Link>
            <Link href="/terms/" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Terms of Use →</p>
              <p className="mt-1 text-sm text-slate-500">Rules for using this site</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

