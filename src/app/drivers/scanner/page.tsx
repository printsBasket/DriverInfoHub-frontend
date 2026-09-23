import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Scanner Drivers Explained — Detection & Fixes | Driver Info Hub",
  description: "How scanner drivers let every app drive your scanner, why printing can work while scanning doesn't, and the fixes for 'scanner not detected'. Plain English, no downloads.",
}

export default function ScannerDrivers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Scanner Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Scanner drivers</span>
            <h1>How Your Scanner Talks to <span style={{ color: 'var(--primary)' }}>Every App You Own</span></h1>
            <p className="hero-lede">Scan from the maker's utility, a photo editor, or your operating system's built-in tool — and somehow they all drive the same hardware. A scanner driver's job is making that universal access work.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What a Scanner Driver Does</h2>
              <p>A scanner driver implements the standard scanning interfaces that imaging applications rely on. When any app asks for “a 300 dpi colour scan of this area,” the driver translates that request into hardware commands, runs the sensor across the page, and streams the image data back to whichever program asked.</p>
              <p>On multifunction printer-scanner devices there's an important wrinkle: the scanning driver is a separate piece of software from the printing driver. They ship together in the maker's full package — but a print-only installation quietly leaves scanning out, which explains one of the most common support mysteries below.</p>
              <ul className="ticks">
                <li>Implements the standard interfaces scanning apps rely on</li>
                <li>Carries resolution, colour, and area settings to the hardware</li>
                <li>Streams the scanned image back to your software</li>
                <li>Installs separately from printing on multifunction devices</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/scanner-what.svg" alt="Diagram showing how the scanner drivers layer carries work from applications to hardware" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/scanner-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for scanner drivers" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>When the Printer Works but the Scanner Doesn't</h2>
              <p>It's the classic multifunction complaint: printing is flawless, yet every scanning app insists no scanner exists. Nine times out of ten, the machine was set up with a basic or print-only driver, and the scanning half of the software simply was never installed.</p>
              <p>The second classic is network scanning: printing travels one way, but scans travel back from the device to your computer — and a firewall can silently block that return path. Installing the maker's full package and allowing its scan utility through the firewall resolves the overwhelming majority of cases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Step-by-step guide</span>
            <h2 style={{ textAlign: 'center' }}>Fix it in five careful steps</h2>
            <ol className="fixsteps">
              <li><strong>Test with the maker's own utility</strong> — If the manufacturer's scan tool sees the device, the driver is fine and the problem is in the other app's settings.</li>
              <li><strong>Install the FULL package</strong> — Download the complete software bundle for your exact model — the one that lists scanning — not the basic print driver.</li>
              <li><strong>Open the firewall for network scanning</strong> — Allow the maker's scanning utility through your firewall so the scanned image can travel back to the computer.</li>
              <li><strong>For USB: go direct</strong> — Connect to a port on the computer itself with a known-good cable — skip hubs while troubleshooting.</li>
              <li><strong>Restart both ends</strong> — Power-cycle the scanner and reboot the computer, then run a test scan from the OS's built-in tool.</li>
            </ol>
            <p className="note-soft">If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.</p>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the jargon</span>
            <h2>Common Device Manager codes for this category</h2>
            <p>A scanner that's visible to the system but unhappy will show one of these Device Manager codes:</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th scope="col">Code</th><th scope="col">What it means in plain English</th><th scope="col">The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 28</code></td><td>No driver is installed for the scanner.</td><td>Install the maker's full package — not the print-only driver — for your OS version.</td></tr>
                <tr><td><code>Code 10</code></td><td>The scanner cannot start.</td><td>Uninstall the device in Device Manager, restart, and reinstall the full package.</td></tr>
                <tr><td><code>Code 45</code></td><td>The scanner isn't currently connected.</td><td>Reseat the USB cable or re-check the network connection, then power-cycle the device.</td></tr>
                <tr><td><code>Code 19</code></td><td>The device's configuration information is damaged.</td><td>Uninstall the device and let it reinstall cleanly on restart.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Quick Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions readers send us most about this topic.</p>
          </div>
          <div className="faq">
            <details>
              <summary>My printer prints but won't scan. How is that possible?</summary>
              <div className="faq-body">
                <p>On multifunction devices, printing and scanning use separate drivers. A quick or print-only setup installs just the printing half. Download the full software package for your exact model and the scanner half appears alongside it.</p>
              </div>
            </details>
            <details>
              <summary>Scanning works over USB but not over Wi-Fi. Why?</summary>
              <div className="faq-body">
                <p>Scans travel from the device back to your computer, and firewalls sometimes block that inbound path. Allow the maker's scanning utility through your firewall and ensure both devices are on the same network.</p>
              </div>
            </details>
            <details>
              <summary>Will my older scanner work with a new operating system?</summary>
              <div className="faq-body">
                <p>Check the maker's support page for a driver matching your OS version. Makers eventually stop updating drivers for older models — if yours has been dropped, the OS's built-in scan support sometimes still operates it at a basic level.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container">
          <div className="rounded-2xl bg-[var(--navy)] px-6 py-8 text-center text-white shadow-sm md:px-8 md:py-10">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">Explore More</span>
            <h2 className="mx-auto max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">Want us to explain another driver topic?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--text-light)] md:text-base">Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" href="/drivers/">
                Browse all topics
              </Link>
              <Link className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15" href="/knowledge/">
                Visit Knowledge Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
