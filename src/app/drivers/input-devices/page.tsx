import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Input Device Drivers Explained — Keyboards, Mice, Touchpads',
  description: 'Learn how input device drivers manage keyboards, mice, touchpads, game controllers, and other input peripherals.',
}

export default function InputDevicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-50 py-16">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-1/3 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-1/3 bottom-1/3 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-6 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4 shadow-sm">
              Peripheral Drivers
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Input Device Drivers:
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Every Click, Keystroke, and Touch</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Input device drivers translate physical signals from keyboards, mice, touchpads, game controllers, and touchscreens into events your operating system and applications understand. They're how you communicate with your computer.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Input Drivers */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              The Translation Layer Between You and Your Computer
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Every time you press a key, move a mouse, or touch a screen, an input device driver is interpreting that physical action and converting it into digital signals your OS can understand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Physical Signal Translation', desc: 'Input devices send raw electrical signals. Drivers interpret these signals and convert them into standardized events (key press, mouse movement, button click, etc.).' },
              { title: 'Standard Protocol Support', desc: 'Most input devices use the USB HID (Human Interface Device) class protocol. Drivers implement this standard to support thousands of different device models.' },
              { title: 'Device-Specific Features', desc: 'Advanced mice with programmable buttons, trackpads with gesture recognition, and gaming controllers with force feedback require proprietary drivers for full feature access.' },
              { title: 'Low-Latency Response', desc: 'Input drivers need minimal latency so your actions feel immediate. Delays become noticeable at just 20-30 milliseconds.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Different Input Devices, Different Drivers
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Input devices range from basic keyboard and mouse to advanced gesture-enabled touchpads and gaming peripherals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Keyboards', desc: <><strong>Standard:</strong> USB HID<br/><strong>Features:</strong> Key detection, modifier keys<br/><strong>Advanced Features:</strong> Programmable keys, RGB backlighting, macro recording (require custom driver).</> },
              { title: 'Mice', desc: <><strong>Standard:</strong> USB HID<br/><strong>Features:</strong> Movement, click detection<br/><strong>Advanced Features:</strong> Programmable buttons, variable DPI, wireless connectivity (require vendor driver).</> },
              { title: 'Touchpads', desc: <><strong>Standard:</strong> USB HID, I2C<br/><strong>Features:</strong> Touch position, single-touch<br/><strong>Advanced Features:</strong> Multi-touch gestures, palm rejection, pressure sensitivity (require precision touchpad drivers).</> },
              { title: 'Game Controllers', desc: <><strong>Standard:</strong> USB HID<br/><strong>Features:</strong> D-pad, buttons, analog sticks<br/><strong>Advanced Features:</strong> Force feedback, pressure-sensitive buttons, gyroscope input (console-specific drivers).</> },
              { title: 'Touchscreens', desc: <><strong>Standard:</strong> USB HID, I2C<br/><strong>Features:</strong> Touch detection, position<br/><strong>Advanced Features:</strong> Multi-touch, stylus pressure, gesture recognition (device-specific drivers).</> },
              { title: 'Graphics Tablets', desc: <><strong>Standard:</strong> USB HID<br/><strong>Features:</strong> Pen position, pressure levels<br/><strong>Advanced Features:</strong> Tilt detection, button mapping, calibration (Wacom, Huion drivers).</> },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USB HID Protocol */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              How USB HID Works
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Most input devices use the USB Human Interface Device class, a standardized protocol that defines how they communicate.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { num: 1, title: 'Device Descriptors', desc: 'When you plug in an input device, it sends a "device descriptor" — a binary document that describes what type of device it is, what buttons/keys it has, and how it reports their status.' },
              { num: 2, title: 'Report Format', desc: 'Input devices send periodic reports containing the current state of all buttons and axes. A keyboard report includes which keys are pressed; a mouse report includes X/Y movement and button states.' },
              { num: 3, title: 'Standardized Parsing', desc: 'The HID driver uses the device descriptor to understand the report format. This allows one driver to support thousands of different devices — they all speak the same HID language.' },
              { num: 4, title: 'Event Generation', desc: 'The driver parses each report and generates standardized events: WM_KEYDOWN for keyboards, WM_MOUSEMOVE for mice. Applications receive these events through the OS message queue.' },
            ].map((item, i) => (
              <div key={i} className="group flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white text-2xl font-extrabold shadow-lg">
                  {item.num}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic vs Advanced Drivers */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Generic Drivers vs. Vendor-Specific Drivers
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Most basic input devices work with Windows's built-in HID drivers. Advanced features require manufacturer-specific drivers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-blue-200 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-2xl shadow-lg text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Built-in Generic Drivers</h3>
                  <p className="text-slate-500 text-sm">Instant functionality</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Keyboard input works immediately',
                  'Mouse movement and clicks',
                  'Basic game controller support',
                  'Standard touchpad with clicking',
                  'No installation required'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-blue-200 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-2xl shadow-lg text-white">
                  ⚙
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Vendor-Specific Drivers</h3>
                  <p className="text-slate-500 text-sm">Advanced features</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Programmable buttons/keys',
                  'RGB lighting control',
                  'Gesture recognition',
                  'Force feedback effects',
                  'Advanced calibration'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              What Premium Input Drivers Enable
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Programmable Buttons', desc: 'Advanced mice allow remapping buttons to different functions. Drivers store these remappings in device memory.' },
              { title: 'Variable DPI Settings', desc: 'Gaming mice support multiple DPI levels for different games. Drivers manage DPI switching and profiles.' },
              { title: 'Gesture Recognition', desc: 'Touchpad drivers recognize multi-finger gestures (pinch to zoom, three-finger swipe) and convert them to commands.' },
              { title: 'Force Feedback', desc: 'Game controller drivers send vibration patterns to motors in the controller, making games more immersive.' },
              { title: 'RGB Lighting', desc: 'Drivers control LED backlighting in keyboards and mice, allowing custom color profiles and effects.' },
              { title: 'Pressure Sensitivity', desc: 'Stylus and graphics tablet drivers track pressure levels for natural drawing and painting.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latency and Performance */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Why Input Latency Matters
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Input drivers must maintain extremely low latency to avoid noticeable delays.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { range: '<10ms', perception: 'Feels instant and responsive', color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200', icon: '⚡' },
              { range: '10-20ms', perception: 'Barely noticeable for most users', color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200', icon: '👍' },
              { range: '20-50ms', perception: 'Noticeable, feels sluggish', color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-200', icon: '😐' },
              { range: '50-100ms', perception: 'Clearly delayed, annoying', color: 'text-red-600', bg: 'bg-red-100', border: 'border-red-200', icon: '😕' },
              { range: '100ms+', perception: 'Severely delayed, frustrating', color: 'text-red-800', bg: 'bg-red-200', border: 'border-red-300', icon: '😤' }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 p-4 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl font-extrabold ${item.color}`}>{item.range}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <p className="text-sm text-slate-700">{item.perception}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 text-center">
            <p className="text-lg text-white leading-relaxed font-bold">
              Modern polling rates ensure input latency stays well below 10ms. USB devices poll at 125Hz (8ms) minimum, with gaming devices at 1000Hz (1ms) or higher.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Common Input Device Driver Problems
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Device Not Recognized', desc: <><strong>Cause:</strong> USB driver issue or device not detected by HID driver.<br/><strong>Solution:</strong> Unplug and replug device; try different USB port; update chipset and USB drivers.</> },
              { title: 'Cursor Movement Jerky or Stuttering', desc: <><strong>Cause:</strong> Driver polling rate too low or system resource contention.<br/><strong>Solution:</strong> Update input drivers; check for USB hub issues; try different port.</> },
              { title: 'Advanced Features Not Working', desc: <><strong>Cause:</strong> Vendor driver not installed, only generic HID driver loaded.<br/><strong>Solution:</strong> Install manufacturer's device software (Logitech SetPoint, Razer Synapse, etc.).</> },
              { title: 'Wireless Device Disconnects', desc: <><strong>Cause:</strong> USB receiver driver issue or power management interfering.<br/><strong>Solution:</strong> Update wireless receiver drivers; disable USB selective suspend in power options.</> },
              { title: 'Touchpad Gestures Not Working', desc: <><strong>Cause:</strong> Precision Touchpad driver not installed or disabled.<br/><strong>Solution:</strong> Install chipset drivers first; check Settings → Touchpad for gesture options.</> },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Getting the Most From Your Input Devices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '1. Install Vendor Drivers', desc: 'For gaming mice, trackpads, and specialized controllers, install the manufacturer\'s driver software for full feature access.' },
              { title: '2. Update Regularly', desc: 'Manufacturer software gets updates for compatibility with new games, OS versions, and new device models.' },
              { title: '3. Check USB Port Health', desc: 'Devices plug into USB ports that connect through chipset drivers. A bad port or hub causes driver issues.' },
              { title: '4. Disable Power Saving', desc: 'USB Selective Suspend can disconnect input devices. Disable it for keyboard and mouse to prevent disconnects.' },
              { title: '5. Clean Device Contacts', desc: 'Occasionally clean USB connector contacts to maintain reliable device detection and communication.' },
              { title: '6. Test Before Gaming', desc: 'For gaming peripherals, verify polling rates and settings are correct in device software before competitive play.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              What You Should Remember About Input Drivers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '1. Often Invisible', desc: 'Most input devices work with generic drivers you never install. They just work.' },
              { title: '2. USB HID Standard', desc: 'Standardized protocol allows one driver to support thousands of different devices.' },
              { title: '3. Low Latency Critical', desc: 'Input drivers must maintain response times under 10ms to feel responsive.' },
              { title: '4. Vendor Software Unlocks Features', desc: 'Advanced mice, keyboards, and controllers need manufacturer drivers for programmable buttons, RGB, gestures.' },
              { title: '5. Chipset Dependency', desc: 'USB input devices depend on chipset and USB drivers. Install those first for reliable input device support.' },
              { title: '6. User Space or Kernel', desc: 'Input can work at both user mode (for complex features) and kernel mode (for basic HID), depending on requirements.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
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
