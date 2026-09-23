import Link from "next/link";
import {
  Home,
  FileText,
  BookOpen,
  Info,
  Mail,
  Cpu,
  Printer,
  Monitor,
  Volume2,
  Wifi,
  Usb,
  HardDrive,
  Keyboard,
  Bluetooth,
  Layers,
  Shield,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Site Map | Driver Knowledge Hub",
  description: "Everything on this site, organized for quick access.",
};

export default function SiteMapPage() {
  const mainPages = [
    { title: "Home", desc: "Homepage", href: "/", icon: Home },
    { title: "Drivers", desc: "Full category map", href: "/drivers", icon: Layers },
    { title: "Knowledge Hub", desc: "Troubleshooting guides", href: "/knowledge", icon: BookOpen },
    { title: "Blog", desc: "Articles & explainers", href: "/blog", icon: FileText },
    { title: "About Us", desc: "Who we are", href: "/about", icon: Info },
    { title: "Contact", desc: "Get in touch", href: "/contact", icon: Mail },
  ];

  const driverPages = [
    {
      title: "Kernel-Mode Drivers",
      desc: "Core system and hardware access",
      icon: Cpu,
    },
    {
      title: "User-Mode Drivers",
      desc: "Safer isolated driver environment",
      icon: Shield,
    },
    {
      title: "Printer & Output Drivers",
      desc: "Printing and output devices",
      icon: Printer,
    },
    {
      title: "Graphics & Display Drivers",
      desc: "GPU and display management",
      icon: Monitor,
    },
    {
      title: "Audio Drivers",
      desc: "Sound and microphone support",
      icon: Volume2,
    },
    {
      title: "Network Drivers",
      desc: "Wi-Fi and Ethernet connectivity",
      icon: Wifi,
    },
    {
      title: "USB & Peripheral Drivers",
      desc: "USB devices and peripherals",
      icon: Usb,
    },
    {
      title: "Storage Drivers",
      desc: "SSD, HDD and storage controllers",
      icon: HardDrive,
    },
    {
      title: "Input Device Drivers",
      desc: "Keyboard, mouse and touch input",
      icon: Keyboard,
    },
    {
      title: "Chipset Drivers",
      desc: "Motherboard and chipset communication",
      icon: Cpu,
    },
    {
      title: "Bluetooth Drivers",
      desc: "Wireless device connectivity",
      icon: Bluetooth,
    },
    {
      title: "Virtual Device Drivers",
      desc: "Virtual machines and software devices",
      icon: Layers,
    },
  ];

  const articles = [
    ["Inside a Graphics Driver Update", "Graphics · 9 min"],
    ["The Hidden World of Audio Drivers", "Audio · 7 min"],
    ["Why Your Wi-Fi Is Slower", "Networking · 6 min"],
    ["Plug-and-Play, Demystified", "USB · 7 min"],
    ["The Quiet Importance of the Chipset Driver", "System · 8 min"],
    ["Kernel-Mode vs User-Mode", "Architecture · 8 min"],
    ["How to Update Drivers Safely", "How-To · 7 min"],
    ["Why Do Drivers Crash?", "Troubleshooting · 6 min"],
    ["SSD Drivers: Do You Need to Update Them?", "Storage · 5 min"],
    [
      "Why Your Device Stopped Working After the Last Update",
      "Troubleshooting · 6 min",
    ],
    ["Driver Signing Explained", "Security · 7 min"],
    ["Virtual Drivers: What They Do", "Architecture · 7 min"],
  ];

  const policies = [
    ["Privacy Policy", "How we handle data"],
    ["Terms of Use", "Rules of the site"],
    ["Disclaimer", "Educational use only"],
    ["Cookie Policy", "Cookies and choices"],
    ["Advertising Disclosure", "How the site is funded"],
    ["Accessibility Statement", "Built for everyone"],
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-600 transition">
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/legal/" className="hover:text-cyan-600 transition">
            Legal
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-900">
            Site Map
          </span>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Site Map
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-700">
            Everything on This Site, One Page
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            A human-readable index of every page we publish.
            (Search engines: the XML sitemap is linked in the footer.)
          </p>
        </div>

        {/* Intro */}
        <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-bold">
            Sitemap
          </h3>

          <p className="text-slate-600">
            Everything on this site, organized for quick access.
          </p>
        </section>

        {/* Main Pages */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Main Pages
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainPages.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
                >
                  <Icon className="mb-4 h-8 w-8 text-cyan-600" />

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Driver Overviews */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Driver Overviews
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {driverPages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
                >
                  <Icon className="mb-4 h-8 w-8 text-cyan-600" />

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Articles */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Articles
          </h2>

          <div className="space-y-4">
            {articles.map(([title, meta]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-semibold text-lg">
                  {title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {meta}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal */}
        <section>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Legal & Policies
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policies.map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
              >
                <h3 className="font-semibold text-lg">
                  {title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
