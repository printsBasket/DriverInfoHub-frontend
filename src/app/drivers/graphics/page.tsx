import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Graphics Drivers Explained — GPU & Display | Driver Info Hub",
  description: "What a graphics driver does, why screens flicker or go black, and how a clean reinstall fixes most GPU and display problems. Plain English, no downloads."
}

export default function GraphicsDrivers() {
  return (
    <>
      {/* Hero - Dark gradient for gaming vibe */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 backdrop-blur px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-200 mb-6 shadow-sm">
              Graphics Drivers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Where Your GPU Meets the
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Real World
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every frame on your screen is the result of a quiet conversation between your operating system, your graphics card, and a remarkable piece of software called the graphics driver!
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What a Graphics Driver Does</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                A graphics driver receives drawing instructions from your OS and applications, then translates them into commands your specific GPU understands perfectly!
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                It also enables hardware video decoding, manages multi-monitor setups, and delivers game-ready optimizations!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Translates rendering to GPU commands",
                  "Manages VRAM and frame buffers",
                  "Handles multi-monitor, scaling, refresh",
                  "Enables hardware video acceleration"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/graphics-what.svg"
                  alt="Diagram showing how graphics driver connects GPU to display"
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/graphics-fix.svg"
                  alt="Troubleshooting diagram for graphics driver issues"
                  width={600}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Common Display Frustrations</h2>
              <div className="space-y-4">
                {[
                  { title: "Screen flickering or going black", desc: "Classic driver conflict!" },
                  { title: "Stuttering or low FPS in games", desc: "Driver is out of date or corrupted!" },
                  { title: "Resolution won't stick or wrong refresh", desc: "Driver needs a clean reinstall!" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white text-xl font-bold shadow-md">
                      {i+1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-lg text-slate-600 mt-8 leading-relaxed">
                The solution is almost always a clean, full reinstall of the latest driver from your GPU manufacturer's site! For laptops, your laptop maker's tuned build is often best!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Steps Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-4 block">Step-by-step guide</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fix it in 5 Careful Steps</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Note your exact GPU model",
                desc: "Device Manager → Display adapters (or Settings → About → System info)!"
              },
              {
                title: "Download the right driver first",
                desc: "Get official driver from NVIDIA/AMD/Intel or laptop manufacturer first!"
              },
              {
                title: "Uninstall current driver cleanly",
                desc: "In Device Manager, delete adapter and tick to remove software!"
              },
              {
                title: "Restart, install fresh driver",
                desc: "Reboot, run installer you downloaded, choose clean/custom install!"
              },
              {
                title: "Restart one last time",
                desc: "Full reboot confirms everything is loaded cleanly!"
              }
            ].map((step, i) => (
              <div key={i} className="group flex gap-6 p-7 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white text-2xl font-extrabold shadow-lg">
                  {i+1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Refresh / Resolution */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Refresh Rate, Resolution & Scaling</h2>
            <p className="text-lg text-slate-600">Understanding your display settings helps you get the best visuals and performance!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Refresh Rate (Hz)",
                desc: "60 Hz for basic, 120/144+ for gaming. Driver matches this to your panel!"
              },
              {
                title: "Resolution (Pixels)",
                desc: "1080p, 1440p, 4K — higher needs more VRAM and power!"
              },
              {
                title: "Scaling & DPI",
                desc: "Makes content bigger for high-res displays; driver handles this!"
              },
              {
                title: "VRAM Usage",
                desc: "More VRAM means better performance at higher settings/resolutions!"
              }
            ].map((card, i) => (
              <div key={i} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Monitor */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Multi-Monitor Setup & Connections</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HDMI",
                desc: "Most common, great for most monitors; limited to 60Hz at 4K on older cables!"
              },
              {
                title: "DisplayPort",
                desc: "Best for high refresh rates! Supports 144+ Hz at 1440p/4K with newer cables!"
              },
              {
                title: "USB-C/Thunderbolt",
                desc: "Convenient for laptops; carries data, power, and video over one cable!"
              },
              {
                title: "Setting Up Multiple Monitors",
                desc: "Windows detects them automatically; arrange them in Display Settings!"
              },
              {
                title: "Primary Display",
                desc: "Choose which monitor is main for Windows, apps, and games!"
              },
              {
                title: "Performance with Multiple Monitors",
                desc: "Extra displays use some GPU resources, but usually fine for most tasks!"
              }
            ].map((card, i) => (
              <div key={i} className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Manager Codes */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common Device Manager Codes</h2>
            <p className="text-lg text-slate-600">Here's what they mean and the usual fix!</p>
          </div>

          <div className="overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-50 to-blue-50">
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
                      meaning: "The driver told the OS the GPU has stopped responding!",
                      fix: "Clean driver reinstall!"
                    },
                    {
                      code: "Code 31",
                      meaning: "The OS couldn't load the display driver!",
                      fix: "Uninstall, restart, install fresh driver!"
                    },
                    {
                      code: "Code 22",
                      meaning: "The display adapter is disabled!",
                      fix: "Enable the device in Device Manager, then restart!"
                    },
                    {
                      code: "Code 10",
                      meaning: "The adapter cannot start! Usually corrupt/mismatched driver!",
                      fix: "Remove old driver software completely, install fresh!"
                    }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                      <td className="px-8 py-6"><code className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-bold">{row.code}</code></td>
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
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Questions readers ask most often about graphics drivers!</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "My screen flickers after a driver update — what do I do?",
                a: "Flicker is usually old/new driver conflicts — clean reinstall of driver + verify refresh rate matches panel!"
              },
              {
                q: "Second monitor not detected — is that the driver?",
                a: "Often! Clean driver reinstall + check cable/port/input on the monitor!"
              },
              {
                q: "Should I update my graphics driver if everything works?",
                a: "For regular use, every few months is okay! For gaming, update for new games' day-one patches!"
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-slate-900 bg-slate-50 hover:bg-blue-50 transition-colors">
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
      <section className="py-12 md:py-16">
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
