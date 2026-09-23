"use client";

import React, { useState } from "react";

const driverData = [
  {
    id: "printer",
    name: "Printer Drivers",
    what: "Translate print jobs from your OS into signals your printer understands.",
    why: "Without the right driver, prints can be garbled, low-quality, or fail entirely.",
    tip: "Check the manufacturer's website for the latest version when you install a new printer.",
  },
  {
    id: "scanner",
    name: "Scanner Drivers",
    what: "Allow your OS to communicate with a scanner's hardware engine.",
    why: "A proper driver gives you access to scan resolution, color depth, and document formats.",
    tip: "Use the vendor's bundled software for advanced features like OCR.",
  },
  {
    id: "graphics",
    name: "Graphics Drivers",
    what: "Talk to your GPU, translating drawing commands into pixels on the screen.",
    why: "Up-to-date graphics drivers improve game performance and fix visual glitches.",
    tip: "Enable automatic driver updates through Windows Update for major GPU releases.",
  },
  {
    id: "audio",
    name: "Audio Drivers",
    what: "Bridge the OS audio stack with your sound card or built-in chipset.",
    why: "Missing or broken audio drivers cause silence, crackling, or microphone issues.",
    tip: 'Run Windows "Troubleshoot Sound Problems" to fix common audio issues.',
  },
  {
    id: "network",
    name: "Network Drivers",
    what: "Control Wi-Fi, Ethernet, and other network adapters.",
    why: "They connect your hardware to the internet and impact speed and stability.",
    tip: "Check adapter settings if your Wi-Fi connection feels slow.",
  },
  {
    id: "bluetooth",
    name: "Bluetooth Drivers",
    what: "Enable pairing and communication with Bluetooth devices.",
    why: "Outdated drivers can cause pairing failures and unstable connections.",
    tip: "Remove old devices before pairing new peripherals.",
  },
  {
    id: "usb",
    name: "USB Drivers",
    what: "Manage communication between the OS and USB devices.",
    why: "They ensure devices are recognized and function correctly.",
    tip: "Try a different USB port if a device isn't detected.",
  },
  {
    id: "chipset",
    name: "Chipset Drivers",
    what: "Allow the operating system to communicate with motherboard components.",
    why: "Chipset drivers improve overall system performance and stability.",
    tip: "Install chipset drivers before installing other hardware drivers.",
  },
  {
    id: "storage",
    name: "Storage Drivers",
    what: "Manage SSDs, HDDs, and external storage devices.",
    why: "They affect speed, reliability, and power management.",
    tip: "Keep SSD firmware and storage drivers updated.",
  },
  {
    id: "input",
    name: "Input Device Drivers",
    what: "Control keyboards, mice, touchpads, and game controllers.",
    why: "They improve responsiveness and device compatibility.",
    tip: "Update gaming peripherals through the manufacturer's software.",
  },
];

export default function DriverDetails() {
  const [active, setActive] = useState(driverData[0].id);

  const activeDriver = driverData.find(
    (driver) => driver.id === active
  );

  return (
    <section
      id="driver-details"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
           Keep Your Drivers Updated,
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
           Keep Your PC Running Better.
          </h2>

          <p className="mt-4 text-slate-600">
           Discover how to update device drivers safely, improve system performance, troubleshoot
            common hardware issues, and keep your Windows PC running smoothly with easy-to-follow guides.
          </p>

  
        </div>

        {/* Driver Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {driverData.map((driver) => (
            <button
              key={driver.id}
              onClick={() => setActive(driver.id)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  active === driver.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
            >
              {driver.name}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeDriver && (
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl bg-white shadow-xl border border-slate-100 p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-slate-900">
                  {activeDriver.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* What */}
                <div className="rounded-2xl bg-blue-50 p-6 border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">
                    What It Does
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {activeDriver.what}
                  </p>
                </div>

                {/* Why */}
                <div className="rounded-2xl bg-blue-50 p-6 border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">
                    Why It Matters
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {activeDriver.why}
                  </p>
                </div>

                {/* Tip */}
                <div className="rounded-2xl bg-blue-50 p-6 border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">
                    Quick Tip
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {activeDriver.tip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}