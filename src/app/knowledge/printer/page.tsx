import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Settings, AlertCircle, Wrench, FileQuestion } from 'lucide-react'

export const metadata: Metadata = {
  title: "Printer Drivers Explained — Queues, 'Offline', Fixes | Driver Info Hub",
  description: "What a printer driver does, why printers show 'offline' or print gibberish, and the five-step routine that fixes most printing problems. Plain English, no downloads.",
}

export default function KnowledgePrinter() {
  return (
    <>
      {/* Hero Section - Printer-specific vibrant design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#024AD8]/5 to-[#024AD8]/5 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#024AD8]/20 bg-white px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#024AD8] mb-6 shadow-sm">
              Printer Drivers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Translator Between Your Document and the
              <span className="bg-gradient-to-r from-[#024AD8] to-[#003BA8] bg-clip-text text-transparent">
                Printed Page
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              You click Print, and a small chain of software springs into action — formatting the page, queueing the job, and speaking your printer's exact language. Here's how it works, and how to un-jam it when it doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                What a Printer Driver Does
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A printer driver takes the page your application has laid out and converts it into the page-description language your specific printer understands — where every line, image, and character should land on the paper. It also presents the printer's abilities to you: paper sizes, print quality, double-sided printing, color or draft mode.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Between the click and the paper sits the print queue (the spooler), which the driver feeds. Jobs wait their turn there, your application gets to move on instantly, and status — ink levels, paper jams, that blinking light — flows back the other way so you know what's happening.
              </p>
              <ul className="space-y-4">
                {[
                  "Converts your document into the printer's page language",
                  "Exposes paper size, quality, and double-sided options",
                  "Queues jobs through the spooler so apps don't wait",
                  "Reports ink, paper, and error status back to you"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#024AD8] text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/printer-what.svg"
                  alt="Diagram showing how the printer drivers layer carries work from applications to hardware"
                  width={600}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/printer-fix.svg"
                  alt="Diagram showing the common symptom and the clean-reinstall fix for printer drivers"
                  width={600}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Why Printers Go "Offline" (and Other Classics)
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                A printer that shows "offline" while sitting right there, a queue that won't move, pages of gibberish symbols, or blank sheets — these are the printing classics, and nearly all of them live in software, not in the machine.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                "Offline" simply means the computer can't reach the printer at that moment — a Wi-Fi hiccup, a sleeping device, or a stuck job blocking the queue. Gibberish output means the job was rendered with the wrong driver, often a near-match model. The reliable cure for both: clear the queue, then reinstall the full driver package for your exact model from the maker's support page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Steps Section - Unique design for this page */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#024AD8] uppercase tracking-widest mb-4 block">Step-by-step Guide</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fix it in 5 Careful Steps</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "Clear the Print Queue",
                desc: "Open the queue and cancel every document. If a job refuses to leave, restart both the computer and the printer — the queue clears on boot."
              },
              {
                num: 2,
                title: "Check the Connection",
                desc: "For USB, reseat the cable. For Wi-Fi, confirm the printer and the computer are on the same network — most printers can print a network status page from their own control panel."
              },
              {
                num: 3,
                title: "Set the Right Default",
                desc: "Make sure the actual printer — not 'Save as PDF' or a duplicate 'Copy 1' entry — is set as the default printer."
              },
              {
                num: 4,
                title: "Reinstall the Maker's Driver",
                desc: "Download the full package for your exact model and operating-system version from the manufacturer's support page, remove the old printer entry, and install fresh."
              },
              {
                num: 5,
                title: "Print a Test Page",
                desc: "Use the driver's own test-page button. If the test page prints but your document doesn't, the application's print settings are the remaining suspect."
              },
            ].map((step, i) => (
              <div key={i} className="group flex gap-6 p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#024AD8]/20 hover:shadow-xl transition-all">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8] text-white text-xl font-extrabold shadow-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#024AD8] transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#024AD8]/5 to-[#024AD8]/5 border-l-4 border-[#024AD8]/50 p-6 rounded-r-2xl flex gap-4 items-start">
            <AlertCircle className="h-8 w-8 text-[#024AD8] shrink-0 mt-0.5" />
            <p className="text-slate-700 italic text-base leading-relaxed">
              If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.
            </p>
          </div>
        </div>
      </section>

      {/* Device Manager Codes Table */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common Device Manager Codes</h2>
            <p className="text-lg text-slate-600">Printers speak in statuses more than codes, but when the printer itself shows a problem in Device Manager, these are the usual suspects:</p>
          </div>

          <div className="overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-50 to-[#024AD8]/5">
                  <tr>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">Code</th>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">What it Means in Plain English</th>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">The Usual Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    {
                      code: "Code 28",
                      meaning: "No driver is installed for the print device.",
                      fix: "Install the full software package for your exact model from the maker's site."
                    },
                    {
                      code: "Code 43",
                      meaning: "A USB-connected printer misbehaved and was stopped.",
                      fix: "Try another cable and port, then reinstall the printer's driver."
                    },
                    {
                      code: "Code 45",
                      meaning: "The printer isn't currently connected.",
                      fix: "Power-cycle the printer and re-check the USB or network connection."
                    },
                    {
                      code: "Error – Printing",
                      meaning: "A job is stuck and blocking the queue.",
                      fix: "Cancel all documents in the queue; if it won't clear, restart the computer and the printer."
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#024AD8]/5 transition-colors">
                      <td className="px-8 py-6"><code className="bg-[#024AD8]/5 text-[#024AD8] px-3 py-1 rounded-lg font-bold">{row.code}</code></td>
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

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#024AD8] uppercase tracking-widest mb-4 block">Quick Answers</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">The questions readers send us most about this topic.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "My printer shows 'offline' but it's switched on. What now?",
                a: "'Offline' means the computer can't reach it right now. Confirm the printer and computer are on the same network, power-cycle the printer, clear any stuck jobs in the queue, and make sure it's set as the default printer. Re-running the maker's setup utility re-finds it in stubborn cases."
              },
              {
                q: "Why does my printer print gibberish or strange symbols?",
                a: "The job was rendered with the wrong driver — often one for a near-match model. Install the driver for your exact model, remove lookalike printer entries, clear the queue, then resend the document."
              },
              {
                q: "Is the generic driver built into my OS good enough?",
                a: "For basic printing, yes — and it's wonderfully quick to set up. Install the maker's full package when you want the extras: scanning on multifunction devices, ink-level reporting, duplex defaults, and speciality paper settings."
              },
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-slate-900 bg-slate-50 hover:bg-[#024AD8]/5 transition-colors">
                  <span className="flex items-center gap-3">
                    <FileQuestion className="h-6 w-6 text-[#024AD8]" />
                    {faq.q}
                  </span>
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

      {/* CTA Section - Printer-specific */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#024AD8] to-slate-900 px-6 py-8 text-center shadow-sm md:px-8 md:py-10">
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-[#024AD8]/20 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-[#024AD8]/50/15 blur-3xl" />
            </div>
            <div className="relative">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">Explore More</span>
              <h2 className="mx-auto max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                Want us to explain another driver topic?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#024AD8] to-[#003BA8] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  href="/drivers/"
                >
                  Browse all topics
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
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
