import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Audio Drivers Explained — Sound & Voice | Driver Info Hub",
  description: "What an audio driver does, why sound glitches happen, and how to fix common audio issues. Plain English, no downloads."
}

export default function KnowledgeAudio() {
  return (
    <>
      {/* Hero - Audio-focused unique design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#024AD8] to-slate-900 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#024AD8]/20/30 bg-white/10 backdrop-blur px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-200 mb-6 shadow-sm">
              Audio Drivers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              The Soundtrack Between Your PC and
              <span className="bg-gradient-to-r from-blue-400 to-[#003BA8] bg-clip-text text-transparent">
                Speakers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every beep, music track, or voice chat you hear is translated from digital data into electrical signals by the audio driver.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What an Audio Driver Does</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                An audio driver tells the operating system how to communicate with the sound hardware — the chip that produces analog waveforms for your speakers or headphones. It handles formats, sample rates, and volume control, and bridges applications (like music players or video calls) to the hardware.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Translates digital audio streams into hardware signals",
                  "Manages channels, sample rates, and mixing",
                  "Provides volume, mute, and device selection APIs",
                  "Enables special features like surround sound or voice activation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 rounded-2xl">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#024AD8] text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-blue-100 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/audio-what.svg"
                  alt="Audio driver data flow"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting - Cards Layout */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/assets/images/audio-fix.svg"
                  alt="Common audio driver fixes"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Typical Sound Issues & Fixes</h2>
              <div className="space-y-4">
                {[
                  { title: "No Sound", desc: "Reinstall the driver from the hardware maker" },
                  { title: "Static or Crackling", desc: "Update to the latest driver and check audio format settings" },
                  { title: "Wrong Device Selected", desc: "Ensure the correct output device is selected in system sound settings" },
                  { title: "Latency in Voice Chat", desc: "Use the high-performance driver mode and disable audio enhancements" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#024AD8]/20 hover:shadow-lg transition-all">
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
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fix Audio in 5 Simple Steps</h2>
            <p className="text-lg text-slate-600 mt-4">A step-by-step plan to get your audio back on track quickly</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Identify the hardware",
                desc: "Open Device Manager → Sound, video and game controllers and note the exact model."
              },
              {
                title: "Download the correct driver",
                desc: "Get it from the manufacturer's website or your PC maker's support page."
              },
              {
                title: "Uninstall the old driver",
                desc: "In Device Manager, uninstall and tick 'Delete the driver software' if available."
              },
              {
                title: "Install the new driver",
                desc: "Run the installer, choose a clean install if that option is presented."
              },
              {
                title: "Restart and verify",
                desc: "Reboot, then play a test sound and check that the correct device is selected."
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start p-7 rounded-3xl bg-gradient-to-br from-[#024AD8]/5 to-[#024AD8]/5 border border-indigo-100">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8] text-white text-2xl font-extrabold shadow-lg">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#024AD8]/5 to-[#024AD8]/5 border-l-4 border-[#024AD8]/50 p-6 rounded-r-2xl flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#024AD8]/5 text-[#024AD8] text-2xl">
              💡
            </div>
            <p className="text-slate-700 italic text-base leading-relaxed">
              If anything feels beyond your comfort level, a local technician can run this exact routine in minutes. No special tools required!
            </p>
          </div>
        </div>
      </section>

      {/* Audio Formats Section - Cards for technical info */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Understanding Audio Formats & Sample Rates</h2>
            <p className="text-lg text-slate-600">Audio on your computer is stored and transmitted in different formats — let's break it down.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sample Rate",
                desc: "How many times per second the audio is sampled. 44.1 kHz (CD), 48 kHz (streaming)."
              },
              {
                title: "Bit Depth",
                desc: "The precision of each audio sample. 16-bit (CD), 24-bit (professional)."
              },
              {
                title: "Channels",
                desc: "Mono (1), Stereo (2), Surround (5.1/7.1)."
              },
              {
                title: "Why it Matters",
                desc: "Sample/bit rate mismatches cause muffled or tunnel-like sound!"
              }
            ].map((card, i) => (
              <div key={i} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Issues Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Audio Problems Decoded</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "No Sound at All",
                desc: "Check basics first (volume/muted/connected), then reinstall the driver if needed!"
              },
              {
                title: "Crackling or Static",
                desc: "Update driver, close background apps, disable audio enhancements in sound settings!"
              },
              {
                title: "Sound from Wrong Device",
                desc: "Right-click volume icon to check the default output device — easy fix!"
              },
              {
                title: "Audio Latency in Chat/Games",
                desc: "Lower your sample rate, go wired, disable audio enhancements!"
              },
              {
                title: "Sound Works in 1 App Only",
                desc: "Fix app-level audio settings; apps sometimes select wrong devices!"
              },
              {
                title: "Headphones Quiet vs Speakers",
                desc: "Drivers treat headphones/speakers as separate devices; check each volume!"
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

      {/* Simple Tweaks Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-[#024AD8]/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Simple Audio Driver Tweaks</h2>
            <p className="text-lg text-slate-600">These small changes can make a huge difference!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Turn Off Audio Enhancements",
                desc: "Right-click speaker → Sound settings → Advanced. These often cause more issues!"
              },
              {
                title: "Use Exclusive Mode",
                desc: "Allows apps to take full control for cleaner, direct audio output!"
              },
              {
                title: "Set Correct Default Format",
                desc: "Match the format to your typical use (48kHz for streaming, 44.1kHz for music)."
              },
              {
                title: "Keep Driver Updated",
                desc: "Check monthly; manufacturers release fixes for common issues regularly."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-lg hover:border-[#024AD8]/20 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
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
