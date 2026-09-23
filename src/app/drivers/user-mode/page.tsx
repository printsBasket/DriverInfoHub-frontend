import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'User-Mode Drivers Explained — Safe, Isolated Driver Architecture',
  description: 'Learn how user-mode drivers provide better stability and safety by running isolated from the kernel, preventing crashes from affecting the entire system.',
}

export default function UserModeDriversPage() {
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
              Driver Architecture
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              User-Mode Drivers:
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Safety Through Isolation</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              User-mode drivers run in the less-privileged user space, isolated from the kernel by a hardware-enforced memory boundary. If a user-mode driver crashes, the OS simply restarts it without taking down the entire system.
            </p>
          </div>
        </div>
      </section>

      {/* What Are User-Mode Drivers */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Safer Drivers That Keep Your System Stable
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              User-mode drivers run in the less-privileged user space, separated from the kernel by memory protection boundaries enforced at the CPU level. This isolation means driver failures are contained.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Hardware-Enforced Isolation',
                desc: 'The CPU\'s memory management unit (MMU) enforces a boundary between user-mode and kernel-mode address spaces. User-mode drivers cannot directly access kernel memory.'
              },
              {
                title: 'Graceful Failure Recovery',
                desc: 'If a user-mode driver crashes or hangs, the operating system can detect this, terminate the process, and restart a fresh instance without affecting the wider system.'
              },
              {
                title: 'Standard API Communication',
                desc: 'User-mode drivers communicate with hardware through well-defined kernel APIs. They delegate low-level operations to kernel-mode components and receive results back through controlled channels.'
              },
              {
                title: 'Lower Complexity Requirements',
                desc: 'User-mode drivers don\'t need to manage interrupt handlers, synchronization primitives, or direct hardware access. This reduces implementation complexity and debugging difficulty.'
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Where You'll Find User-Mode Drivers
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              These devices use user-mode drivers because their performance requirements don't demand kernel-level access:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Printers and Scanners',
                desc: 'Print and scan operations don\'t require real-time performance. The user-mode driver prepares data, sends it through the kernel\'s USB subsystem, and handles status reporting.'
              },
              {
                title: 'Webcams',
                desc: 'Video capture drivers run in user mode. The kernel handles the low-level USB transfers; the driver formats the video frames for applications.'
              },
              {
                title: 'USB Devices',
                desc: 'Most USB peripherals (mice, keyboards above the basic HID level, external hard drives) use user-mode drivers that communicate through the USB subsystem.'
              },
              {
                title: 'Sensor Devices',
                desc: 'Environmental sensors, motion detectors, and other IoT devices typically use user-mode drivers that read sensor data at regular intervals.'
              },
              {
                title: 'Display Adapters (Some)',
                desc: 'Modern operating systems are moving display drivers to user mode (DriverKit on macOS, WDDM on newer Windows versions) to improve stability.'
              },
              {
                title: 'Game Controllers',
                desc: 'While basic joystick functionality uses kernel drivers, advanced gaming peripherals often include user-mode drivers for programmable buttons and force feedback.'
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stability vs Performance Tradeoff */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              The Stability vs Performance Trade-Off
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              User-mode drivers prioritize system stability and security while accepting a small performance overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-xl text-white">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Stability Advantages</h3>
                  <p className="text-slate-500 text-sm">Safer and more reliable operation</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Driver crashes are contained",
                  "No system-wide instability",
                  "Can be restarted without reboot",
                  "Memory corruption is isolated",
                  "Improves overall system reliability"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✔</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-xl text-white">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Performance Trade-Offs</h3>
                  <p className="text-slate-500 text-sm">Small overhead for improved stability</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "User-kernel boundary crossings",
                  "Context switch overhead",
                  "Additional latency in I/O operations",
                  "Cannot directly handle interrupts",
                  "Data copying between address spaces"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-slate-700">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <h3 className="text-xl text-white font-bold mb-2 text-center">
                Why Modern Operating Systems Prefer User-Mode Drivers
              </h3>
              <p className="text-slate-100 leading-relaxed text-center max-w-4xl mx-auto text-lg font-semibold">
                A slight performance cost is usually worth the significant gain in system stability, security, and reliability. That's why modern platforms increasingly move drivers out of the kernel whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How User-Mode Works */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              The Architecture Behind User-Mode Execution
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              User-mode drivers use a layered communication approach to safely interact with hardware through the kernel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: '1. System Calls (IOCTL)',
                desc: 'The primary method. User-mode drivers call kernel functions with I/O Control (IOCTL) codes that specify the operation. The kernel validates the request and performs the actual hardware operation.'
              },
              {
                title: '2. Memory-Mapped Buffers',
                desc: 'For high-throughput operations, the kernel can allocate memory that\'s simultaneously accessible to both user-mode and kernel-mode code. Device data is placed in these buffers.'
              },
              {
                title: '3. Shared Memory Segments',
                desc: 'The operating system creates shared memory regions where the driver and kernel can exchange data without copying, reducing overhead.'
              },
              {
                title: '4. Device Frameworks',
                desc: 'Windows User-Mode Driver Framework (UMDF), macOS DriverKit, and Linux user-space I/O (UIO) provide structured APIs for safe driver development.'
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
                <h5 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h5>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Memory Protection</h4>
              <ul className="space-y-2 text-slate-600">
                <li><strong>Separate Address Spaces:</strong> Each user-mode process (including drivers) has its own virtual address space completely isolated from others.</li>
                <li><strong>Page Table Isolation:</strong> Page table entries prevent user-mode code from accessing kernel memory.</li>
                <li><strong>Privilege Level Enforcement:</strong> CPU instructions that access kernel memory only work in Ring 0; attempts from user mode raise exceptions.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Interrupt Handling Model</h4>
              <ul className="space-y-2 text-slate-600">
                <li>Hardware raises an interrupt</li>
                <li>Kernel's interrupt handler processes it at Ring 0</li>
                <li>Kernel posts an event or callback to the user-mode driver</li>
                <li>User-mode driver wakes up and handles the event in user space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Device Frameworks */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Device Frameworks for User-Mode Drivers
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Modern operating systems provide frameworks that make user-mode driver development practical:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Windows UMDF',
                desc: 'The User-Mode Driver Framework provides APIs for printers, scanners, cameras, and USB devices. Drivers are C++ COM objects with clear lifecycle management.'
              },
              {
                title: 'Windows KMDF',
                desc: 'The Kernel-Mode Driver Framework offers kernel-space equivalent APIs. Developers can write similar code for kernel or user mode depending on device needs.'
              },
              {
                title: 'macOS DriverKit',
                desc: 'Apple\'s newer driver framework runs in user space using Swift/C++. Apple is actively migrating more drivers away from kernel mode for stability.'
              },
              {
                title: 'Linux UIO',
                desc: 'User-space I/O framework allows drivers to run as regular applications. Common for specialized devices and rapid prototyping.'
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Choosing the Right Architecture
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              The choice between user-mode and kernel-mode depends on performance requirements and reliability concerns.
            </p>
          </div>
          <div className="overflow-hidden bg-white rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">Aspect</th>
                    <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">User-Mode</th>
                    <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">Kernel-Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { a: 'Privilege Level', b: 'Ring 3 (restricted)', c: 'Ring 0 (unrestricted)' },
                    { a: 'Crash Impact', b: 'Process isolated', c: 'System-wide crash' },
                    { a: 'Latency', b: 'Milliseconds typical', c: 'Microseconds available' },
                    { a: 'Communication', b: 'Through kernel APIs', c: 'Direct hardware access' },
                    { a: 'Recovery', b: 'Can be restarted', c: 'Requires system reboot' },
                    { a: 'Best For', b: 'Most peripherals', c: 'Storage, GPU, network' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-slate-900 font-medium">{row.a}</td>
                      <td className="px-6 py-4 text-slate-600">{row.b}</td>
                      <td className="px-6 py-4 text-slate-600">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Developers */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Why Developers Choose User-Mode When Possible
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Simpler Debugging', desc: 'User-mode code runs with standard debugging tools. Kernel-mode debugging requires specialized equipment and expertise.' },
              { title: 'Faster Development', desc: 'No need for recompilation of the OS or special test hardware. Drivers can be tested like regular applications.' },
              { title: 'Safer Testing', desc: 'A buggy user-mode driver stops the driver process, not the entire OS. Tests are less risky and more practical.' },
              { title: 'Better Tools', desc: 'Standard profilers, memory analyzers, and debuggers work with user-mode code. Kernel-mode needs specialized kernel debugging tools.' },
              { title: 'Easier Portability', desc: 'User-mode code using standard frameworks is more portable across OS versions and can be more easily ported to other systems.' },
              { title: 'Reduced Liability', desc: 'User-mode driver failures don\'t risk system stability, reducing risk to end users and potential liability for developers.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              What You Should Remember About User-Mode Drivers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '1. Safe by Design', desc: 'Hardware-enforced memory boundaries mean a user-mode driver crash affects only that driver, never the system.' },
              { title: '2. Better Reliability', desc: 'User-mode drivers contribute to overall system stability. A crashing printer driver won\'t affect your productivity.' },
              { title: '3. Industry Trend', desc: 'Operating systems are moving toward user-mode drivers for devices that don\'t need real-time performance.' },
              { title: '4. Small Performance Cost', desc: 'For most peripherals (printers, USB devices, cameras), the latency of user mode is acceptable and worth the stability gain.' },
              { title: '5. Kernel APIs', desc: 'User-mode drivers communicate through well-defined kernel APIs. The kernel handles all direct hardware interaction.' },
              { title: '6. Future Direction', desc: 'Modern frameworks like macOS DriverKit and Windows UMDF make user-mode driver development practical for most device types.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
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
