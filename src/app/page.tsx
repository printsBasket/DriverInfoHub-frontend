import Link from "next/link";
import HomeTabs from "../components/HomeTabs";
import Marquee from "../components/Marquee";
import Image from "next/image";
import { ArrowRight, Printer, ShieldCheck, Layers, Monitor, Volume2, Wifi, Bluetooth, Usb, HardDrive, Cpu, Settings, Keyboard, Languages, Heart, ChevronRight, FileQuestion, BookOpen, AlertTriangle, MonitorPlay, Zap, Server, Globe, Search, Wrench, Download, Image as ImageIcon } from "lucide-react";

export default function Home() {
  const driverCategories = [
    { name: "Kernel-Mode Drivers",   desc: "Low-level drivers with direct hardware and memory access.",                icon: ShieldCheck, href: "/drivers/kernel-mode/" },
    { name: "User-Mode Drivers",     desc: "Safer drivers that run separately from the operating system kernel.",      icon: Layers,      href: "/drivers/user-mode/" },
    { name: "Printer Drivers",       desc: "Installation, updates, compatibility and troubleshooting guides.",         icon: Printer,     href: "/drivers/printer/" },
    { name: "Graphics Drivers",      desc: "GPU updates, gaming performance and display optimization.",                icon: Monitor,     href: "/drivers/graphics/" },
    { name: "Audio Drivers",         desc: "Fix sound issues and understand audio device communication.",              icon: Volume2,     href: "/drivers/audio/" },
    { name: "Network Drivers",       desc: "Wi-Fi, Ethernet and connectivity troubleshooting resources.",              icon: Wifi,        href: "/drivers/network/" },
    { name: "Bluetooth Drivers",     desc: "Pairing, connectivity and Bluetooth device support.",                     icon: Bluetooth,   href: "/drivers/bluetooth/" },
    { name: "USB Drivers",           desc: "Device recognition, installation and USB troubleshooting.",               icon: Usb,         href: "/drivers/usb/" },
    { name: "Chipset Drivers",       desc: "The foundation that connects all your hardware together.",                 icon: Cpu,         href: "/drivers/chipset/" },
    { name: "Storage Drivers",       desc: "SSD, HDD, and external storage performance and reliability.",             icon: HardDrive,   href: "/drivers/storage/" },
    { name: "Input Devices",         desc: "Keyboards, mice, touchpads, and game controller support.",                icon: Keyboard,    href: "/drivers/input-devices/" },
    { name: "Virtual Device Drivers",desc: "Software-created devices used by virtualization and emulation tools.",    icon: Server,      href: "/drivers/virtual-devices/" },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="home-hero-wrap">
        {/* BG image with overlay */}
        <div className="home-hero-bg" aria-hidden="true" />
        <div className="home-hero-overlay" aria-hidden="true" />

        <div className="home-hero-content">
          <div className="home-hero-left">
            {/* Badge */}
            <div className="home-hero-badge">
              <span className="home-hero-badge-dot" />
              <span>Trusted Driver Knowledge Base</span>
            </div>

            {/* Headline */}
            <h2 className="home-hero-h2 text-white">
             Keep Your Drivers Updated,
              <span className="home-hero-gradient">Keep Your PC Running Better.</span>
            </h2>


            <p className="home-hero-p">
             Discover how to update device drivers safely, improve system performance, 
             troubleshoot common hardware issues, and keep your Windows PC running smoothly with easy-to-follow guides.
            </p>

            {/* CTAs */}
            <div className="home-hero-btns">
              <Link href="/drivers/" className="home-hero-btn-primary">
                Explore Drivers
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/knowledge/" className="home-hero-btn-ghost">
                Learn More
              </Link>
            </div>

            {/* Stats */}
           
          </div>

          {/* Floating card */}
          <div className="home-hero-right">
            <div className="home-hero-card">
              <div className="home-hero-card-head">
                <div className="home-hero-card-icon">
                  <Printer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="home-hero-card-title">Driver Knowledge Center</p>
                  <p className="home-hero-card-sub">Learn • Update • Optimize</p>
                </div>
              </div>
              <div className="home-hero-card-items">
                {["Driver Update Guides", "Installation Tutorials", "Troubleshooting Articles", "Compatibility & Requirements"].map((item) => (
                  <div key={item} className="home-hero-card-item">
                    <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="home-hero-card-stat">
                <p className="home-hero-card-stat-num">1000+</p>
                <p className="home-hero-card-stat-lbl">Monthly Readers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee — no bg color, just scrolling items */}
      <Marquee />

      {/* 3. What is a Driver Section */}
      <HomeTabs />

      {/* 4. Explore Driver Categories */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.3] pointer-events-none"></div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 md:mb-16 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-700 shadow-sm mb-6">
              <BookOpen className="h-3 w-3" />
              What We Cover
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Explore Driver Categories
            </h2>
            <p className="text-lg sm:text-xl leading-8 text-slate-600">
              Learn, troubleshoot and understand every major driver category through simple, practical explanations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {driverCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-400"
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg shadow-blue-900/20">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700 border border-blue-200">Guide</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{category.name}</h3>
                  <p className="mb-7 text-sm leading-7 text-slate-600">
                    {category.desc}
                  </p>
                  <div className="flex items-center gap-3 text-sm font-bold text-blue-600">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Drivers Matter */}
      <section className="py-8 md:py-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 bg-center pointer-events-none"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">Why Drivers Matter</span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold mb-5 leading-tight">The bridge between software and hardware.</h2>
              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                Every click, print command, and device action needs a driver working behind the scenes. Drivers translate instructions between your operating system and physical hardware.
              </p>
              <ul className="space-y-3 mb-8">
                {['Understand what drivers actually do', 'Fix common device and connectivity issues', 'Clear explanations without technical jargon'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 rounded-full bg-blue-500/20 items-center justify-center">
                      <ChevronRight className="h-3 w-3 text-blue-400" />
                    </div>
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/knowledge/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm">
                Explore Knowledge Hub <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl">
                <MonitorPlay className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-base font-bold mb-1 text-white">Software</h3>
                <p className="text-slate-300 text-xs">Apps &amp; Operating System</p>
              </div>
              <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-900/50 sm:translate-y-6">
                <Languages className="h-8 w-8 text-white mb-3" />
                <h3 className="text-base font-bold mb-1 text-white">Driver</h3>
                <p className="text-blue-100 text-xs">Real-time Translator</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl">
                <Printer className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-base font-bold mb-1 text-white">Hardware</h3>
                <p className="text-slate-300 text-xs">Printers &amp; Devices</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl sm:translate-y-6">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">100+</p>
                    <p className="text-xs text-slate-300 uppercase font-semibold">Guides</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">24/7</p>
                    <p className="text-xs text-slate-300 uppercase font-semibold">Resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Driver Locations */}
      <section className="py-8 md:py-10 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Driver Locations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Where Do Drivers Actually Live on Your PC?</h2>
            <p className="text-lg text-slate-600">
              Spoiler: they're not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/deviceManager.webp" alt="Inside the Device Manager" fill className="object-cover" priority />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Inside the Device Manager</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This is the friendliest place to start on a Windows PC. Right-click the Start button and pick "Device Manager," and a tidy list of every piece of hardware on your machine appears. Click any item and you can see its driver, check its version, update it, roll it back, or remove it entirely.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 w-full bg-slate-200">
                <Image src="/settingUpdate.webp" alt="Through Settings & Updates" fill className="object-cover" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Through Settings & Updates</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  On modern Windows systems, head to Settings, then Windows Update, then "Advanced options" and look for "Optional updates." Many driver updates quietly arrive here. On macOS, drivers are bundled into regular system updates. On Linux, your distribution's package manager does the same job.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 w-full bg-slate-200">
                <Image src="/website.jpg" alt="The Hardware Maker's Website" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Hardware Maker's Website</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every reputable hardware maker keeps a "Support" or "Drivers" section on its official website where you can download the very latest driver for your exact model. Always download directly from the official site — never from a random pop-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Driver Identification */}
      <section className="py-8 md:py-10 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Driver Identification</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">How to Know Which Driver You're Actually Using</h2>
            <p className="text-lg text-slate-600">
              Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks to find out — no special tools required.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[{
              os: "On Windows",
              image: "/windows.webp",
              desc: "Open Device Manager, expand any category, and right-click your device. Choose 'Properties,' then click the 'Driver' tab. You'll instantly see the driver name, publisher, release date, and exact version number."
            },{
              os: "On macOS",
              image: "/mack.webp",
              desc: "Click the system menu, choose 'About This Mac,' then click 'More Info' and 'System Report.' A detailed window opens with sections listing the underlying driver (kext) along with its version."
            },{
              os: "On Linux",
              image: "/linux.webp",
              desc: "Open a terminal and try friendly commands like `lspci -k` for connected hardware and `lsusb` for USB devices, or `lsmod` to see every driver module currently loaded into the kernel."
            }].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform hover:bg-slate-50 shadow-sm flex flex-col">
                <div className="relative h-48 w-full bg-slate-100 p-6 flex items-center justify-center">
                  <Image src={item.image} alt={item.os} fill className="object-contain p-4" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="p-8 border-t border-slate-100 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.os}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Troubleshooting: Common Problems */}
      <section className="py-8 md:py-10 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Troubleshooting</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Common Driver-Related Problems</h2>
            <p className="text-lg text-slate-600">
              Understanding these common driver issues helps in diagnosing and resolving hardware and software problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Driver Conflicts", desc: "Occur when two or more drivers compete for the same hardware resource, causing unpredictable behavior or system instability. OS manages this, but misconfigurations require manual resolution." },
              { title: "Outdated Drivers", desc: "As operating systems evolve, drivers that haven't been updated may fail silently or exhibit reduced performance. Graphics drivers are particularly susceptible to becoming obsolete." },
              { title: "Corrupted Driver Files", desc: "Caused by incomplete installations, disk errors, or malware. A corrupted driver may fail to load or produce incorrect behavior. Reinstalling from a known good source resolves this." },
              { title: "Missing Drivers After OS Install", desc: "Certain hardware components may not be recognized or function only with basic generic drivers. Downloading the appropriate driver from the manufacturer resolves these issues." },
              { title: "Incompatible Drivers", desc: "Occur when a driver designed for one OS version is used with a different version, causing instability or broken functionality. Using a certified driver avoids these problems." },
              { title: "Signed vs Unsigned Drivers", desc: "Driver signing uses digital certificates to confirm a driver is verified. Unsigned drivers introduce significant security risks. Always prefer signed drivers from the hardware manufacturer." }
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-colors shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Helpful Topics We Cover */}
      <section className="py-8 md:py-10 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Helpful Topics We Cover</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Pick a Hardware Category and Dive In</h2>
            <p className="text-base text-slate-600">
              Each overview is bite-sized, friendly, and written to make sense the very first time you read it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Printer Drivers",  icon: Printer, desc: "Why your device needs special software, what goes wrong, and how to keep output painless across home, office, and shared setups.", href: "/drivers/printer/" },
              { title: "Graphics Drivers", icon: Monitor, desc: "How GPUs, displays, and modern apps stay in sync — and why a tiny driver update can transform game performance.",              href: "/drivers/graphics/" },
              { title: "Audio Drivers",    icon: Volume2, desc: "The quiet software shaping every chime, voice call, and music track that comes out of your speakers and headphones.",          href: "/drivers/audio/" },
              { title: "Network Drivers",  icon: Wifi,    desc: "The bridge between your operating system and the wired or wireless chip that connects you to the wider internet.",            href: "/drivers/network/" },
              { title: "USB & Devices",    icon: Usb,     desc: "How keyboards, mice, drives, webcams, and controllers get recognised the instant you plug them in.",                          href: "/drivers/usb/" },
              { title: "System Drivers",   icon: Cpu,     desc: "The chipset, CPU, and storage drivers you never see — but always feel — making your machine boot fast and run smoothly.",     href: "/knowledge/" },
            ].map((topic, i) => (
              <Link key={i} href={topic.href} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all flex flex-col gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <topic.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{topic.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{topic.desc}</p>
                <span className="inline-flex items-center text-sm font-bold text-blue-600 gap-1">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. About Driver Info Hub */}
      <section className="py-8 md:py-10 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 flex items-center justify-center aspect-video sm:aspect-square md:aspect-[4/3] lg:aspect-auto h-full min-h-[200px] sm:min-h-[300px]">
               <Image src="/website.jpg" alt="Person working at a clean desk with laptop" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">About Driver Info Hub</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">A Friendly Voice in a Noisy Tech World</h2>
              <div className="prose prose-slate prose-lg text-slate-600">
                <p>We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.</p>
                <p>No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.</p>
                <ul className="not-prose space-y-3 mt-8 mb-8">
                  <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-blue-600" /><span className="font-medium text-slate-800">Independent and free to read, always</span></li>
                  <li className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-blue-600" /><span className="font-medium text-slate-800">Plain-English first, technical accuracy second to none</span></li>
                  <li className="flex items-center gap-3"><Globe className="h-5 w-5 text-blue-600" /><span className="font-medium text-slate-800">Privacy-respecting — no aggressive trackers</span></li>
                </ul>
                <Link href="/about/" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                  Read More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Driver Deep Dive (Full List) */}
      <section className="py-8 md:py-10 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Driver Deep Dive</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understand Every Type of Driver</h2>
            <p className="text-lg text-slate-600">
              Explore the different kinds of drivers that make your hardware work—from kernel-mode foundations to virtual devices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {driverCategories.map((cat, i) => (
              <Link key={i} href={cat.href} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-4">{cat.desc}</p>
                <span className="text-sm font-bold text-blue-600 group-hover:underline">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-8 md:py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Start Here</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Common First Questions</h2>
            <p className="text-base text-slate-600">The questions readers ask most before exploring our guides.</p>
          </div>

          <div className="space-y-3">
            {[
              { q: "What is a device driver?", a: "A device driver is a small software program that allows your operating system to communicate with a hardware component — like a printer, graphics card, or sound chip. Without the correct driver, your OS would not know how to talk to that device." },
              { q: "Why are drivers important?", a: "Drivers are the bridge between software and hardware. They translate generic OS instructions into the exact commands your specific hardware understands. Without them, your hardware is essentially invisible to your computer." },
              { q: "How do I update my drivers?", a: "The safest way is to visit the hardware manufacturer's official support website, find your exact model, and download the latest driver for your operating system. On Windows you can also use Device Manager or Windows Update's Optional Updates section." },
              { q: "Are driver updates safe?", a: "Yes, when downloaded from the official manufacturer's website. Avoid third-party 'driver updater' tools — they often bundle unnecessary software and can install the wrong driver for your hardware variant." },
              { q: "What happens if my drivers are outdated?", a: "Outdated drivers can cause poor performance, hardware malfunctions, system crashes, security vulnerabilities, and compatibility issues with newer software. Keeping drivers reasonably current prevents most of these problems." },
              { q: "How do I find the correct driver for my device?", a: "Identify your exact hardware model (visible in Device Manager on Windows or System Report on macOS), then search the manufacturer's support page. Match the driver version to your operating system version and architecture (32-bit or 64-bit)." },
              { q: "Can outdated drivers cause performance issues?", a: "Absolutely. GPU drivers in particular have a significant impact on gaming and display performance. Network adapter drivers affect Wi-Fi speed and reliability. An outdated audio driver can reduce sound quality or introduce latency." },
              { q: "How often should I update my drivers?", a: "There is no fixed schedule. Update when you experience a specific problem the new driver addresses, when you upgrade your OS, or when the manufacturer releases a security fix. Stable, working systems do not require aggressive update cycles." },
              { q: "What is a printer driver?", a: "A printer driver translates your document from the format your application uses into a page description language your specific printer understands. It also exposes the printer's features — paper sizes, quality settings, duplex printing — to your OS." },
              { q: "What is a graphics driver?", a: "A graphics driver sits between your operating system and your GPU, translating rendering instructions from apps into commands the graphics chip executes. It manages video memory, multi-monitor layouts, and enables hardware acceleration for video and games." },
              { q: "What is a network driver?", a: "A network driver connects your OS's networking stack to your physical Wi-Fi or Ethernet chip. It manages packet transmission, power saving modes, and wireless association — and is the most common culprit when Wi-Fi drops or speeds are unexpectedly slow." },
              { q: "What should I do if a driver installation fails?", a: "First, restart your computer and try again. If it still fails, uninstall the existing driver completely via Device Manager (select 'Delete the driver software for this device'), restart, then install the freshly downloaded package. Make sure you're running the installer as Administrator." },
              { q: "Do you provide driver downloads?", a: "No. We are an educational site only. The safest source for any driver is always your hardware manufacturer's official support page or your operating system's built-in update tool. We explain what to look for, never host files." },
              { q: "Is this site affiliated with any hardware company?", a: "No. Driver Info Hub is entirely independent. We don't accept sponsorships from driver updater tools or hardware manufacturers, which allows us to remain completely unbiased in our recommendations." },
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors text-sm">
                  <span className="flex items-center gap-3">
                    <FileQuestion className="h-4 w-4 text-blue-600 shrink-0" />
                    {faq.q}
                  </span>
                  <span className="transition-transform group-open:rotate-180 shrink-0 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="h-3.5 w-3.5 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-5 py-4 text-slate-600 leading-relaxed text-sm bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
