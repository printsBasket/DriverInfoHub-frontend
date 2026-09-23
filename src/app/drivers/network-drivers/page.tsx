import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Network Drivers Explained — Bridge Between PC and Internet | Driver Info Hub",
  description: "Detailed guide on network drivers, common issues, quick fixes, and troubleshooting for Wi‑Fi and Ethernet connections.",
}

export default function NetworkDrivers() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Network Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Network Drivers</span>
            <h1>The Bridge Between Your PC and the Internet</h1>
            <p className="hero-lede">Every page you load, every video you stream, and every call you join passes through a network driver before it ever reaches your screen.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What a Network Driver Does</h2>
              <p>A network driver is the software layer that connects your OS networking stack to the physical Wi‑Fi or Ethernet chip. It moves packets between the hardware and the OS, manages Wi‑Fi association, roaming, power‑saving, and reports link speed.</p>
              <ul className="ticks">
                <li>Moves packets between the OS and the network chip</li>
                <li>Handles wireless association, authentication, and roaming</li>
                <li>Implements checksum offload, packet queuing, and link‑speed reporting</li>
                <li>Manages power‑saving to keep battery life healthy</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/network-what.svg" alt="Network driver stack diagram" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/network-fix.svg" alt="Network driver troubleshooting illustration" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>When a Network Driver Isn't Recognised</h2>
              <p>A device that drops, slows, or refuses to connect is often a driver or power‑management issue. Stale driver versions, aggressive power‑saving, or corrupted driver packages cause most symptoms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fix Steps */}
      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Fix it in five careful steps</span>
            <h2 style={{ textAlign: 'center' }}>Fix it in five careful steps</h2>
            <ol className="fixsteps">
              <li><strong>Identify the adapter</strong> — Open Device Manager → Network adapters and note the exact name.</li>
              <li><strong>Download the latest driver</strong> — Get it from the laptop or chipset manufacturer before uninstalling.</li>
              <li><strong>Uninstall the old driver</strong> — In Device Manager, remove the adapter and tick “Delete the driver software”.</li>
              <li><strong>Restart and install</strong> — Reboot, run the installer you downloaded, and reconnect.</li>
              <li><strong>Tame power management</strong> — Open adapter properties and untick “Allow the computer to turn off this device to save power”.</li>
            </ol>
            <p className="note-soft">If anything feels out of your depth, a local technician can run this routine in minutes – no special tools required.</p>
          </div>
        </div>
      </section>

      {/* Device Manager Codes */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the Jargon</span>
            <h2>Common Device Manager codes</h2>
            <p>These are the most common Device Manager errors and what they usually mean.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th>Code</th><th>What it means in plain English</th><th>The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 28</code></td><td>No driver is installed for the device.</td><td>Install the correct driver from the manufacturer.</td></tr>
                <tr><td><code>Code 10</code></td><td>The device cannot start.</td><td>Reinstall the driver and restart the computer.</td></tr>
                <tr><td><code>Code 45</code></td><td>The device isn’t currently connected.</td><td>Reconnect the device and check cables or power.</td></tr>
                <tr><td><code>Code 19</code></td><td>The device’s configuration information is damaged.</td><td>Uninstall the device and let Windows reinstall it.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Network Help</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions readers ask most about Wi‑Fi, Ethernet, and network driver issues.</p>
          </div>
          <div className="faq">
            <details>
              <summary>Why is my Wi‑Fi slower on my laptop than my phone?</summary>
              <div className="faq-body"><p>Often the laptop driver is older or the power‑saving profile limits the radio. Updating the driver and disabling aggressive power‑saving usually fixes it.</p></div>
            </details>
            <details>
              <summary>My Wi‑Fi disconnects when the laptop sleeps. Is that normal?</summary>
              <div className="faq-body"><p>Yes – Windows can turn off the adapter to save power. Untick “Allow the computer to turn off this device to save power” in the adapter properties.</p></div>
            </details>
            <details>
              <summary>Ethernet works but Wi‑Fi doesn’t – what does that tell me?</summary>
              <div className="faq-body"><p>Likely a Wi‑Fi driver or radio‑power issue. Reinstall the Wi‑Fi driver, check BIOS Wi‑Fi enablement, and verify the power settings.</p></div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="rounded-2xl bg-[var(--navy)] px-6 py-8 text-center text-white shadow-sm md:px-8 md:py-10">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">Explore More</span>
            <h2 className="mx-auto max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">Want us to explain another driver topic?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--text-light)] md:text-base">Our friendly overview covers every major hardware category – from the device on your desk to the chips inside your laptop.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" href="/drivers/">Browse all topics</Link>
              <Link className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15" href="/knowledge/">Visit Knowledge Hub</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
