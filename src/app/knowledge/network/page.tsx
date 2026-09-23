import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Wi-Fi & Network Drivers Explained | Driver Info Hub",
  description: "Network drivers connect your PC to the internet. Learn what they do and how to fix dropping Wi-Fi, slow speeds, and connections that won't wake from sleep."
}

export default function KnowledgeNetwork() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#024AD8]/5 to-[#024AD8]/5 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#024AD8]/20 bg-white px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#024AD8] mb-6 shadow-sm">
              Wi-Fi & Network Drivers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Bridge Between Your
              <span className="bg-gradient-to-r from-[#024AD8] to-[#003BA8] bg-clip-text text-transparent">
                PC and the Internet
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every page you load, every video you stream, every call you join passes through a network driver before it ever reaches your screen!
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What a Network Driver Does</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                A network driver is the software layer connecting your operating system's networking stack to the physical Wi-Fi or Ethernet chip in your computer!
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                On wireless, it handles access point association, encryption, and adapts transmission rates as you move around.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Moves packets between OS and hardware",
                  "Handles Wi-Fi connection & authentication",
                  "Manages features like checksum offload",
                  "Reports signal strength and link health"
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
                  src="/assets/images/network-what.svg"
                  alt="Diagram showing how the network driver works"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting - Cards on top */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common Connectivity Frustrations</h2>
            <p className="text-lg text-slate-600">Wi-Fi dropping, slow speeds, or connections not waking up — we've all been there!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
              <div className="md:w-1/2">
                <Image
                  src="/assets/images/network-fix.svg"
                  alt="Network driver troubleshooting diagram"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Fix: Clean Reinstall + Power Tweaks</h3>
                <p className="text-slate-600 leading-relaxed">
                  A fresh driver, paired with turning off aggressive OS power-saving on the network chip, resolves 90% of issues!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                "Wi-Fi dropping every few minutes",
                "Speeds way slower than other devices",
                "Won't connect or asks for password repeatedly",
                "Ethernet works but Wi-Fi won't stay up"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#024AD8]/20 hover:shadow-lg transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#024AD8] to-[#003BA8] text-white text-xl font-bold shadow-md">
                    {i+1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-slate-800">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - 5 steps again, unique layout */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#024AD8] uppercase tracking-widest mb-4 block">Step-by-step guide</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fix it in 5 Careful Steps</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "Identify the adapter",
                desc: "Device Manager → Network adapters and note exact model!"
              },
              {
                num: 2,
                title: "Download first while you still can",
                desc: "Grab driver from laptop maker (for notebooks) or chip maker while online!"
              },
              {
                num: 3,
                title: "Uninstall old driver completely",
                desc: "Delete the device in Device Manager, tick to remove driver software!"
              },
              {
                num: 4,
                title: "Restart & install fresh",
                desc: "Reboot, run the downloaded installer, reconnect to network!"
              },
              {
                num: 5,
                title: "Turn off aggressive power saving",
                desc: "Adapter properties → Power Management → untick let OS turn it off!"
              }
            ].map((step, i) => (
              <div key={i} className="group flex gap-6 p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-[#024AD8]/5 border border-slate-200 hover:border-[#024AD8]/20 hover:shadow-xl transition-all">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8] text-white text-2xl font-extrabold shadow-lg">
                  {step.num}
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

      {/* Ethernet vs Wi-Fi - Fun comparison */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Ethernet vs Wi-Fi</h2>
            <p className="text-lg text-slate-600">Understanding your driver makes choosing easier!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Ethernet (Wired)</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Direct, stable, low-interference link",
                  "100 Mbps, 1 Gbps, and even 10 Gbps options",
                  "Best for gaming or streaming"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#024AD8]/5 text-[#024AD8]">
                      ✓
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 italic text-sm">Driver's job is simple: move data quickly and reliably!</p>
            </div>

            <div className="bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Wi-Fi (Wireless)</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "No cables, perfect for laptops/mobile",
                  "802.11ac/WiFi5: up to 1-3 Gbps",
                  "802.11ax/WiFi6: up to 10 Gbps+",
                  "Driver handles roaming, encryption, rate adaption"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#024AD8]/5 text-[#024AD8]">
                      ✓
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 italic text-sm">Driver has more to do — keep it updated!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speed & Stability Issues - Cards grid */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Speed & Stability Issues Decoded</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wi-Fi Drops Frequently",
                desc: "Power management! Untick 'let OS turn off adapter'!"
              },
              {
                title: "Slower Than Other Devices",
                desc: "Update driver, disable power saving, check router!"
              },
              {
                title: "Won't Connect to Wi-Fi",
                desc: "Forget & rejoin, update driver, check router band!"
              },
              {
                title: "High Ping/Latency in Games",
                desc: "Go wired, update driver, move closer, no QoS!"
              },
              {
                title: "No 5 GHz Visible",
                desc: "Check if adapter supports it, check bands on router!"
              },
              {
                title: "Ethernet Good but Wi-Fi Not",
                desc: "Wi-Fi hardware/driver specific issue, update driver first!"
              }
            ].map((card, i) => (
              <div key={i} className="rounded-3xl bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Optimization Tips */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Quick Network Driver Tweaks</h2>
            <p className="text-lg text-slate-600">These changes are super impactful!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Disable Power Saving for Adapter",
                desc: "The #1 fix for Wi-Fi dropouts! We said it once, we'll say it again!"
              },
              {
                title: "Check Your Band/Channel",
                desc: "2.4 GHz for range, 5 GHz for speed!"
              },
              {
                title: "Keep Router Firmware Updated Too",
                desc: "Log into router and check for updates!"
              },
              {
                title: "Keep Driver Current",
                desc: "Monthly check for updates on manufacturer's site!"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Manager Codes Table */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common Device Manager Codes</h2>
            <p className="text-lg text-slate-600">Here's what they mean and what to do!</p>
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
                      code: "Code 10",
                      meaning: "The network adapter cannot start!",
                      fix: "Reinstall the driver!"
                    },
                    {
                      code: "Code 31",
                      meaning: "The driver failed to load!",
                      fix: "Uninstall device, restart, install fresh driver!"
                    },
                    {
                      code: "Code 43",
                      meaning: "Adapter reported an error, has been stopped!",
                      fix: "Clean driver reinstall; for USB adapters try new port!"
                    },
                    {
                      code: "Code 45",
                      meaning: "Not currently connected (often after sleep)!",
                      fix: "Restart + disable power management!"
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
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "Why is my laptop slower than my phone?",
                a: "Power management + old driver! Turn off power saving and update the driver!"
              },
              {
                q: "Wi-Fi drops when laptop sleeps?",
                a: "OS powers adapter down and driver doesn't wake cleanly; disable power management!"
              },
              {
                q: "Ethernet works but Wi-Fi doesn't?",
                a: "Different chips & different drivers, points directly to Wi-Fi driver/settings!"
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

      {/* CTA Section */}
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
