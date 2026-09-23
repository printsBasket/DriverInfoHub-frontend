import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import DriverDetails from '@/components/DriverDetails'

export const metadata: Metadata = {
  title: 'Device Drivers Explained — Every Family | Driver Info Hub',
  description: 'A plain-English map of every device driver family: printer, scanner, graphics, audio, Wi-Fi & network, Bluetooth, and USB.',
}

const driverFamilies = [
  { id: 'printer', name: 'Printer Drivers', desc: 'Installation, updates, compatibility and troubleshooting guides.', image: '/assets/images/printer-what.svg' },
  { id: 'scanner', name: 'Scanner Drivers', desc: 'Learn how scanners communicate with your operating system.', image: '/assets/images/scanner-what.svg' },
  { id: 'graphics', name: 'Graphics Drivers', desc: 'GPU updates, gaming performance and display optimization.', image: '/assets/images/graphics-what.svg' },
  { id: 'audio', name: 'Audio Drivers', desc: 'Fix sound issues and understand audio device communication.', image: '/assets/images/audio-what.svg' },
  { id: 'network', name: 'Network Drivers', desc: 'Wi-Fi, Ethernet and connectivity troubleshooting resources.', image: '/assets/images/network-what.svg' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Pairing, connectivity and Bluetooth device support.', image: '/assets/images/bluetooth-what.svg' },
  { id: 'usb', name: 'USB Drivers', desc: 'Device recognition, installation and USB troubleshooting.', image: '/assets/images/usb-what.svg' },
  { id: 'chipset', name: 'Chipset Drivers', desc: 'The foundation that connects all your hardware together.', image: '/assets/images/system-what.svg' },
  { id: 'storage', name: 'Storage Drivers', desc: 'SSD, HDD, and external storage performance and reliability.', image: '/assets/images/system-what.svg' },
  { id: 'input', name: 'Input Devices', desc: 'Keyboards, mice, touchpads, and game controller support.', image: '/assets/images/system-what.svg' },
  { id: 'troubleshooting', name: 'Troubleshooting Hub', desc: 'Step-by-step fixes for common driver and device problems.', image: '/assets/images/system-what.svg' },
]

export default function Drivers() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              Driver Overviews
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Every Driver Family, Explained in Plain English
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Drivers are simply translators between your software and your hardware. Explore each driver category to understand what it does, why it matters, and how to keep it working smoothly — no technical jargon required.
            </p>
          </div>
        </div>
      </section>

      {/* Why Use This Guide */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Why Use This Guide
              </p>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Understanding Drivers Made Simple
              </h2>
              
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Every piece of hardware on your computer — from your printer to your graphics card — needs a driver to work. But understanding drivers doesn't require a technical degree. Our guides break down what each one does, why updates matter, and how to keep everything running smoothly.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether you're troubleshooting a problem or just curious about how your PC works, we explain things in plain English, step by step, with no jargon.
              </p>
            </div>

            {/* Right Column: Cards */}
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hardware Categories</h3>
                <p className="text-slate-600">Learn about printer, graphics, audio, network, chipset, and storage drivers.</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Clear Explanations</h3>
                <p className="text-slate-600">No complex terminology — just practical, understandable guidance.</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Maintenance Tips</h3>
                <p className="text-slate-600">Understand updates, compatibility, and common troubleshooting practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Categories */}
      <section className="py-16 md:py-24 bg-white" id="families">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Driver Categories
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Explore Every Driver Family
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From printers to chipsets, every hardware category has a guide written in simple, straightforward language.
            </p>
          </div>
        </div>
        
        {/* Driver Details */}
        <div id="driver-details">
          <DriverDetails />
        </div>
      </section>

      {/* Advanced Driver Types */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Deep Dives
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Advanced Driver Architecture
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore the deeper layers of driver technology. Understand privilege levels, driver isolation, and the differences between kernel and user mode.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/drivers/kernel-mode/" className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                Kernel-Mode Drivers →
              </h3>
              <p className="text-slate-600"><strong>Privileged execution.</strong> Direct hardware access with system-wide responsibility. Essential for storage and GPU, but risky.</p>
            </Link>
            <Link href="/drivers/user-mode/" className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                User-Mode Drivers →
              </h3>
              <p className="text-slate-600"><strong>Safe isolation.</strong> Run in restricted user space. If they crash, only the driver stops, not your system.</p>
            </Link>
            <Link href="/drivers/chipset/" className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                Chipset Drivers →
              </h3>
              <p className="text-slate-600"><strong>System foundation.</strong> Manage your motherboard's chipset. Install these first — everything else depends on them.</p>
            </Link>
            <Link href="/drivers/storage/" className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                Storage Drivers →
              </h3>
              <p className="text-slate-600"><strong>Data management.</strong> Handle SSDs, HDDs, and NVMe. Critical for performance and reliability of your storage devices.</p>
            </Link>
            <Link href="/drivers/input-devices/" className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                Input Devices →
              </h3>
              <p className="text-slate-600"><strong>Every click and keystroke.</strong> Keyboards, mice, touchpads, game controllers. Usually work with generic drivers.</p>
            </Link>
            <Link href="/drivers/virtual-devices/" className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                Virtual Device Drivers →
              </h3>
              <p className="text-slate-600"><strong>Software hardware.</strong> VMs, VPNs, and emulators use virtual drivers that pretend to be real hardware.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Driver Locations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Driver Locations
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Where Do Drivers Actually Live on Your PC?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Spoiler: they're not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <div className="w-full h-48 relative mb-6">
                <Image
                  src="/assets/images/windows-logo.svg"
                  alt="Windows Device Manager"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'contain', padding: '20px' }}
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inside the Device Manager</h3>
              <p className="text-slate-600 leading-relaxed">
                This is the friendliest place to start on a Windows PC. Right-click the Start button and pick "Device Manager," and a tidy list of every piece of hardware on your machine appears — neatly grouped by category. Click any item and you can see its driver, check its version, update it, roll it back if a recent update caused trouble, or remove it entirely. It's like a backstage pass to the people running the show.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <div className="w-full h-48 relative mb-6">
                <Image
                  src="/assets/images/system-fix.svg"
                  alt="Settings & Updates"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'contain', padding: '20px' }}
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Through Settings & Updates</h3>
              <p className="text-slate-600 leading-relaxed">
                On modern Windows systems, head to Settings, then Windows Update, then "Advanced options" and look for "Optional updates." Many driver updates quietly arrive here — already tested for your machine. On macOS, drivers are bundled into regular system updates, so just keep your OS current. On Linux, your distribution's package manager (or a built-in "Additional Drivers" tool) does the same job.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <div className="w-full h-48 relative mb-6">
                <Image
                  src="/website.jpg"
                  alt="Hardware Maker's Website"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Hardware Maker's Website</h3>
              <p className="text-slate-600 leading-relaxed">
                Every reputable hardware maker keeps a "Support" or "Drivers" section on its official website where you can download the very latest driver for your exact model. This is the go-to spot when you need a brand-new feature, a performance boost, or a fix for a specific bug. Always download directly from the official site — never from a random pop-up — and double-check the driver matches your operating system version.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Driver Info Hub */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src="/website.jpg"
                  alt="About Driver Info Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                About Driver Info Hub
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                A Friendly Voice in a Noisy Tech World
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Independent and free to read, always',
                  'Plain-English first, technical accuracy second to none',
                  'Privacy-respecting — no aggressive trackers or sold data'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/about/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-xl">
                Read More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Check Your Drivers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Driver Identification
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              How to Know Which Driver You're Actually Using
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks to find out — no special tools required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">On Windows</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Open Device Manager:</strong> Right-click the Start button and select "Device Manager." This shows every piece of hardware on your computer.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Find your device:</strong> Expand the category your device is in (Display adapters for GPU, Sound, video and game controllers for audio, etc.).
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Check the driver:</strong> Right-click your device and select "Properties." Click the "Driver" tab to see the driver name, date, version, and publisher. This tells you exactly what's running.
              </p>
              <p className="text-sm text-slate-500 italic">
                This is the cleanest way to confirm what's running before you decide to update.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">On macOS</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Open System Report:</strong> Click the Apple menu, choose "About This Mac," then click "More Info" and "System Report."
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Browse hardware:</strong> Look at sections like Graphics, Audio, USB, Bluetooth, or Network. Each section lists the underlying driver (called a "kext" or "extension") along with its version.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Understand what you see:</strong> macOS handles most drivers automatically behind the scenes, so what you're usually seeing are clean, system-managed entries that just work.
              </p>
              <p className="text-sm text-slate-500 italic">
                macOS rarely needs driver updates because they're bundled into OS updates.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">On Linux</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Open a terminal:</strong> Use these friendly commands to see what drivers you have loaded:
              </p>
              <div className="bg-white rounded-lg p-4 mb-4 font-mono text-sm border border-slate-200">
                <code className="text-slate-800">lspci -k</code>
              </div>
              <p className="text-slate-600 mb-4">Shows connected hardware and their drivers.</p>
              <div className="bg-white rounded-lg p-4 mb-4 font-mono text-sm border border-slate-200">
                <code className="text-slate-800">lsusb</code>
              </div>
              <p className="text-slate-600 mb-4">Lists USB devices and drivers.</p>
              <div className="bg-white rounded-lg p-4 mb-4 font-mono text-sm border border-slate-200">
                <code className="text-slate-800">lsmod</code>
              </div>
              <p className="text-slate-600">Shows every driver module currently loaded in the kernel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Update Drivers */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Updates & Maintenance
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              How to Update Drivers Safely
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Driver updates can fix bugs, improve performance, and add new features. Here's the safe, step-by-step approach that works on any operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                Step 1: Know What You're Updating
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Use Device Manager (Windows) or System Report (Mac/Linux) to identify exactly which driver you need to update. Write down the device name, model, and current driver version.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                Step 2: Back Up Your System
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Create a system restore point (Windows) or backup (Mac/Linux) before updating. This gives you an escape hatch if something goes wrong.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                Step 3: Download from Official Sources
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Go directly to the hardware maker's official website. Search for your exact device model and download the driver that matches your operating system version (32-bit vs 64-bit, Windows 10 vs 11, etc.).
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                Step 4: Disable Antivirus Temporarily
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Some antivirus software can interfere with driver installation. Temporarily disable it, install the driver, then turn it back on immediately after.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                Step 5: Install and Restart
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Run the driver installer and follow the prompts. Many drivers require a full system restart to take effect. Don't skip this step — restart your computer completely.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                Step 6: Test and Verify
              </h3>
              <p className="text-slate-600 leading-relaxed">
                After restart, test your device to make sure it's working properly. Check Device Manager again to confirm the new driver version is installed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Update */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Timing Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              When Should You Update Your Drivers?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Not all drivers need updates right away. Here's when updates actually matter and when you can safely wait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-sm font-semibold text-[#024AD8]">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Update Immediately</h3>
                  <p className="mt-1 text-sm text-slate-600">Critical issues that can affect reliability or security.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Your device isn\'t working at all',
                  'You just installed a new operating system',
                  'Your system is crashing or unstable',
                  'A security vulnerability was announced'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#024AD8]/10 text-[#024AD8] font-semibold text-[10px]">✓</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-sm font-semibold text-[#024AD8]">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Update Soon</h3>
                  <p className="mt-1 text-sm text-slate-600">Situations where updates improve performance and compatibility.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Performance has degraded over time',
                  'A specific feature you need is missing',
                  'Your device is making weird noises or acting odd',
                  'After a major OS update (Windows 11, macOS Sonoma, etc.)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#024AD8]/10 text-[#024AD8] font-semibold text-[10px]">✓</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#024AD8]/10 text-sm font-semibold text-[#024AD8]">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Can Wait</h3>
                  <p className="mt-1 text-sm text-slate-600">Minor updates that are safe to postpone when everything is stable.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Everything is working perfectly',
                  'It\'s a minor version bump (1.5 → 1.6)',
                  'You use the device rarely or for basic tasks',
                  'The update just adds a small feature you don\'t use'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#024AD8]/10 text-[#024AD8] font-semibold text-[10px]">✓</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Troubleshooting
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Common Driver Problems & What to Do
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Driver issues are more common than you'd think. Here are the problems we see most often and how to fix them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">"Device Not Found" or "Unknown Device"</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>What it means:</strong> Windows can't figure out what hardware this is, so it can't load the right driver.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>How to fix:</strong> Go to Device Manager, find the unknown device, right-click it, and select "Update driver." Choose "Browse my computer" and point it to the manufacturer's driver folder.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Device Works But Performance is Slow</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>What it means:</strong> The driver is installed but may be outdated or not optimized for your hardware.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>How to fix:</strong> Check the manufacturer's website for a newer driver version. Download and install it, then restart. Performance should improve noticeably.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Device Stopped Working After an Update</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>What it means:</strong> A recent driver update broke something, or your system is incompatible with the new version.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>How to fix:</strong> Right-click the device in Device Manager and select "Roll back driver" to go back to the previous version that was working.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Your Computer Crashes When Using a Device</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>What it means:</strong> The driver has a bug that causes system instability when the device is used.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>How to fix:</strong> Update to the latest driver first. If crashes continue, try an older stable version. Contact the manufacturer if neither works.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Driver Installation Keeps Failing</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>What it means:</strong> Something is preventing the driver from installing properly (antivirus, corrupted installer, etc.).
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>How to fix:</strong> Disable antivirus temporarily, delete any old driver files, restart your computer, then try installing again.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">You Can't Find a Driver for Your Device</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>What it means:</strong> The device is old, rare, or the manufacturer didn't release drivers for your OS version.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>How to fix:</strong> Try a generic or alternative driver from the OS vendor. Contact the manufacturer for old devices. Sometimes the device just won't work on your OS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Getting Started
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Where to Start If You're New to All This
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              If you're just learning about drivers, here's the best path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Learn the Basics</h3>
              <p className="text-slate-600 leading-relaxed">
                Start with the driver category guides above. Pick one that matches a device you actually use (your printer, graphics card, network adapter). Reading about drivers you interact with makes it all click faster.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Check Your Current Drivers</h3>
              <p className="text-slate-600 leading-relaxed">
                Open Device Manager on Windows (or System Report on Mac) and browse around. Look at the devices on your computer. See how many drivers you actually have running right now? It's probably way more than you realized.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Visit the Manufacturer's Website</h3>
              <p className="text-slate-600 leading-relaxed">
                Find your device (printer, GPU, motherboard, etc.) and go to the "Support" section of the manufacturer's website. This is where drivers actually come from. Bookmark it — you'll use it eventually.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Try Updating One Driver</h3>
              <p className="text-slate-600 leading-relaxed">
                Pick a device that's working fine. Go through the 6-step update process above. See how painless it is when you take it step by step? Now you have the confidence to do it again.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. Explore Our Guides</h3>
              <p className="text-slate-600 leading-relaxed">
                Each driver category has a dedicated guide on this site. They explain not just what a driver is, but why it matters for your specific use case.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">6. Ask for Help</h3>
              <p className="text-slate-600 leading-relaxed">
                Stuck on something specific? Visit our <Link href="/knowledge/" className="text-blue-700 font-bold hover:underline">Knowledge Base</Link> for step-by-step troubleshooting, or <Link href="/contact/" className="text-blue-700 font-bold hover:underline">contact us</Link> with questions. We're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
