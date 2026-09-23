import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "System Drivers Explained — The Backbone of Your PC | Driver Info Hub",
  description: "How system drivers power your motherboard, chipset, and every critical component, plus fixes for stability issues and boot problems."
}

export default function KnowledgeSystem() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-[#024AD8]/5 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl" />
          <div className="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 mb-6 shadow-sm">
              System Drivers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Backbone of
              <span className="bg-gradient-to-r from-slate-700 to-[#003BA8] bg-clip-text text-transparent">
                Your Entire Computer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              System drivers are the silent heroes that keep your motherboard, chipset, and every critical component talking to each other — without them, your PC wouldn't even boot!
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What System Drivers Control</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                System drivers manage the lowest-level components of your PC: the chipset that connects everything, the power management that keeps things cool, and the memory controllers that shuttle data around at lightning speed!
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                They're so foundational that you should always install them first after a fresh OS install — everything else depends on them!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Manages motherboard chipset communication",
                  "Controls power delivery and thermal management",
                  "Handles memory and storage controllers",
                  "Ensures stability for all other components"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-slate-50 to-[#024AD8]/5 border border-slate-100 rounded-2xl">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-[#024AD8]/5 border border-slate-100 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/system-what.svg"
                  alt="Diagram showing system driver architecture connecting CPU, chipset, and components"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/system-fix.svg"
                  alt="Diagram showing system driver troubleshooting steps"
                  width={600}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">When Your System Gets Unstable</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Random crashes or blue screens", desc: "Usually outdated chipset or power management drivers!" },
                  { title: "Storage drives not detected", desc: "Install latest chipset and storage controller drivers!" },
                  { title: "USB/ports not working after boot", desc: "Update motherboard chipset and USB controller drivers!" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-[#003BA8] text-white text-xl font-bold shadow-md">
                      {i+1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                System driver issues often show up as random instability — always start with a chipset driver update from your motherboard maker!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Steps */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 block">Step-by-step guide</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fix System Issues in 5 Steps</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Update chipset drivers first",
                desc: "Always install motherboard chipset drivers first — everything else relies on them!"
              },
              {
                title: "Update storage controller drivers",
                desc: "For SSD/HDD issues, get the latest storage driver from your motherboard or CPU maker!"
              },
              {
                title: "Check BIOS/UEFI settings",
                desc: "Some system features need specific BIOS settings enabled to work properly!"
              },
              {
                title: "Install power management software",
                desc: "For laptops, use the maker's power management software for best stability!"
              },
              {
                title: "Verify memory settings",
                desc: "Run a memory test (Windows Memory Diagnostic) to rule out RAM issues!"
              }
            ].map((step, i) => (
              <div key={i} className="group flex gap-6 p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8] text-white text-2xl font-extrabold shadow-lg">
                  {i+1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Codes */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common System Driver Issues</h2>
            <p className="text-lg text-slate-600">The usual suspects and how to fix them!</p>
          </div>

          <div className="overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-50 to-[#024AD8]/5">
                  <tr>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">Issue</th>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">What it Means</th>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">The Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    {
                      issue: "BSOD (Blue Screen)",
                      meaning: "Critical system driver failure caused a crash!",
                      fix: "Boot into Safe Mode and roll back or update the faulty driver!"
                    },
                    {
                      issue: "Boot Loop",
                      meaning: "System driver conflict preventing boot!",
                      fix: "Use System Restore or boot from USB to repair drivers!"
                    },
                    {
                      issue: "Missing Storage",
                      meaning: "Storage controller driver not loaded!",
                      fix: "Load chipset/storage drivers during OS install or update them!"
                    },
                    {
                      issue: "Slow Boot Times",
                      meaning: "Outdated system drivers delaying boot process!",
                      fix: "Update chipset and all system-related drivers!"
                    }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6"><code className="bg-slate-100 text-slate-800 px-3 py-1 rounded-lg font-bold">{row.issue}</code></td>
                      <td className="px-8 py-6 text-slate-600">{row.meaning}</td>
                      <td className="px-8 py-6 text-slate-600">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Questions we get asked most about system drivers!</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Why install chipset drivers first after Windows install?",
                a: "Because every other component connects through the chipset — without them, nothing else works properly!"
              },
              {
                q: "Do I need to update system drivers often?",
                a: "Only if you're having stability issues or want new features — if it's working, you don't need to update!"
              },
              {
                q: "Where do I get official system drivers?",
                a: "Always from your motherboard or PC manufacturer's support site — never use third-party updaters!"
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-slate-500">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-6 text-slate-600 leading-relaxed bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-950 via-[#024AD8]/95 to-slate-900 px-6 py-10 text-center shadow-[0_20px_60px_rgba(2,74,216,0.18)] sm:px-8 md:px-12 md:py-14">
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#024AD8]/25 blur-3xl sm:h-56 sm:w-56" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl sm:h-56 sm:w-56" />
            </div>
            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-100">
                Continue Learning
              </span>
              <h2 className="mx-auto max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Want to Learn About All Driver Types?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Understand the full spectrum from user-mode to kernel-mode, and when each is the right choice.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#024AD8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
                  href="/drivers/"
                >
                  Browse All Driver Types
                </Link>
                <Link
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 sm:w-auto"
                  href="/knowledge/"
                >
                  Visit Knowledge Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
