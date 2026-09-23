import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "USB Drivers Explained — Plug and Play | Driver Info Hub",
  description: "How the USB driver stack lets you plug almost anything in and have it just work, plus fixes for unknown devices and drives that keep disconnecting."
}

export default function KnowledgeUsb() {
  return (
    <>
      {/* Hero - Light gradient for accessibility */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#024AD8]/5 to-slate-50 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#024AD8]/20 bg-white px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#024AD8] mb-6 shadow-sm">
              USB & Devices
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Universal Translator for
              <span className="bg-gradient-to-r from-[#024AD8] to-[#003BA8] bg-clip-text text-transparent">
                Plug-and-Play
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Plug something in and within a second your computer knows exactly what it is and how to talk to it. That little feat of engineering is your USB driver stack in action!
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What the USB Stack Does</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                When you connect a USB device, a chain of drivers springs into action: host controller driver manages the physical port, hub driver tracks what's attached, and class or device-specific driver handles talking to that type of hardware!
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Together they enumerate, assign resources, and load correct software so it just works, often without you lifting a finger!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Detects and enumerates new devices automatically",
                  "Loads the right class or device-specific driver",
                  "Manages power delivery and port resources",
                  "Supports hubs, daisy-chaining, and hot swapping"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 rounded-2xl">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#024AD8] text-white">
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/usb-what.svg"
                  alt="Diagram showing USB driver stack connecting devices to computer"
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
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/usb-fix.svg"
                  alt="Diagram showing USB device troubleshooting steps"
                  width={600}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">When USB Devices Act Up</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Unknown device error in Device Manager", desc: "Try another port/cable, or install maker's specific driver!" },
                  { title: "External drive mounts but disappears", desc: "Check cable, port, and disable USB selective suspend!" },
                  { title: "USB device charges but won't connect", desc: "The data pins are damaged or cable is power-only!" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#024AD8]/20 hover:shadow-lg transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#024AD8] text-white text-xl font-bold shadow-md">
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
                Most USB issues can be solved with "swap cable → try new port → reinstall device driver" — that's your go-to first three steps for almost any USB problem!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Steps */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#024AD8] uppercase tracking-widest mb-4 block">Step-by-step guide</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fix it in 5 Careful Steps</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Swap the cable first",
                desc: "Cables fail way more often than ports or drivers — this saves so much time!"
              },
              {
                title: "Try another port",
                desc: "Move from a hub or front panel to a port directly on your computer itself!"
              },
              {
                title: "Reinstall device driver",
                desc: "Uninstall device in Device Manager, unplug, restart, reconnect!"
              },
              {
                title: "Update USB controller driver",
                desc: "Install chipset/USB controller from your PC or motherboard maker!"
              },
              {
                title: "Disable USB selective suspend",
                desc: "If device drops out when idle, turn off USB selective suspend in power settings!"
              }
            ].map((step, i) => (
              <div key={i} className="group flex gap-6 p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-[#024AD8]/5 border border-slate-200 hover:border-[#024AD8]/20 hover:shadow-xl transition-all">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8] text-white text-2xl font-extrabold shadow-lg">
                  {i+1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#024AD8] transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Manager Codes */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common USB Device Manager Codes</h2>
            <p className="text-lg text-slate-600">The usual suspects and what to do about them!</p>
          </div>

          <div className="overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-50 to-[#024AD8]/5">
                  <tr>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">Code</th>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">What it Means</th>
                    <th className="px-8 py-5 font-extrabold text-slate-900 border-b border-slate-200">The Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    {
                      code: "Code 43",
                      meaning: "USB device misbehaved and was stopped by OS!",
                      fix: "Try another cable/port, then reinstall device driver!"
                    },
                    {
                      code: "Code 28",
                      meaning: "No driver found for the device!",
                      fix: "Install official driver from manufacturer!"
                    },
                    {
                      code: "Code 45",
                      meaning: "Device disconnected or port lost connection!",
                      fix: "Reseat connection and replace bad cables!"
                    },
                    {
                      code: "Code 10",
                      meaning: "The USB device cannot start!",
                      fix: "Uninstall in Device Manager, unplug, restart, reconnect!"
                    }
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

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Questions we get asked most about USB and device drivers!</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "USB device shows as 'Unknown Device' — what now?",
                a: "Try a different cable/port first! If that doesn't work, install manufacturer's specific driver!"
              },
              {
                q: "Why does my external drive keep disconnecting randomly?",
                a: "Usually power management putting port to sleep or a flaky cable! Disable selective suspend and swap the cable!"
              },
              {
                q: "Do I need to 'safely remove' my USB drives?",
                a: "For storage drives — yes, good practice to flush pending writes! For mice/keyboards, just unplug!"
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-slate-900 bg-slate-50 hover:bg-[#024AD8]/5 transition-colors">
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
