import Seo from '../../../components/Seo'
import { ChevronRight, HelpCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const contentMap: Record<string, string> = {
  'printer': `<h2>Device Prints Blank or Garbled Pages</h2><p>When your printer outputs blank pages, garbled text, or corrupted images, the problem is almost always a driver issue. The printer hardware itself is usually fine — the operating system just cannot communicate with it correctly.</p><h3>Why This Happens</h3><p>Printer drivers translate your documents from digital formats into instructions the printer hardware understands. If the driver is outdated, corrupted, or incompatible with your operating system version, the translation breaks down. You might get blank pages, text that looks like random characters, images that do not render, or colors that are completely wrong.</p><h3>The Fix (Step by Step)</h3><ol><li><strong>Identify your exact printer model.</strong> Look at the physical device or check your system settings. Do not guess — download the wrong driver and the problem gets worse.</li><li><strong>Go to the manufacturer's website directly.</strong> Do not use generic driver download sites. Visit HP, Canon, Brother, Epson, Xerox, or whoever made your printer and find the official support page.</li><li><strong>Download the latest driver for your operating system version.</strong> Windows 10 and Windows 11 require different drivers. macOS Big Sur and Monterey have different requirements. Make sure you get the exact match.</li><li><strong>Uninstall the existing printer driver.</strong> Go to Settings → Devices → Printers &amp; Scanners (Windows) or System Preferences → Printers &amp; Scanners (macOS). Right-click your printer and select Remove. Check the option to remove the driver software too, if available.</li><li><strong>Restart your computer.</strong> A full restart clears the printer queue and forces the operating system to forget the old driver.</li><li><strong>Install the new driver.</strong> Run the installer you downloaded from the manufacturer.</li><li><strong>Restart again.</strong> Then test with a simple document.</li></ol><h3>If It Still Does Not Work</h3><p>Try a different USB cable if you have one. Cables wear out. If you are using Wi-Fi printing, restart both the printer and your router, then re-add the printer to your system as a new device.</p>`,
  
  'audio': `<h2>No Sound Coming Out</h2><p>Silent speakers, headphones that do not work, or audio that cuts out suddenly — these are almost always caused by driver problems or simple configuration mistakes. The good news: the fix is usually quick.</p><h3>Check These First (Before Touching Drivers)</h3><ul><li><strong>Is the correct output device selected?</strong> Windows: Settings → Sound → Volume → Advanced → App volume and device preferences. Check that your app is set to the right speaker or headphone output.</li><li><strong>Are the speakers or headphones actually plugged in?</strong> A loose connection is the most common cause. Unplug and plug back in.</li><li><strong>Is the volume muted?</strong> Check the system volume slider, and also check your app's internal volume setting.</li><li><strong>Try a different app.</strong> If music plays in YouTube but not in Spotify, the app has a bug, not your audio driver.</li></ul><h3>If These Do Not Help: Fix the Driver</h3><ol><li><strong>Identify your audio device.</strong> Windows: Device Manager → Sound, video and game controllers. Find your audio device (usually Realtek, Nvidia, Intel, or your motherboard maker).</li><li><strong>Visit the manufacturer's support page.</strong> Download the latest audio driver for your exact motherboard or laptop model.</li><li><strong>Uninstall the old driver.</strong> Device Manager → right-click your audio device → Uninstall device. Check the box to remove the driver software.</li><li><strong>Restart.</strong></li><li><strong>Install the new driver and restart again.</strong></li></ol><h3>Still Silent?</h3><p>Try a different pair of headphones or external speakers. Your audio jack or built-in speaker hardware might be physically damaged. If you hear sound through headphones but not your laptop speakers, the built-in speaker is likely broken.</p>`,
  
  'network': `<h2>Wi-Fi Drops Constantly</h2><p>A Wi-Fi connection that keeps disconnecting and reconnecting is usually caused by a misbehaving network driver or aggressive power-saving settings. The connection hardware works fine — the software layer just needs adjustment.</p><h3>The Power-Saving Problem (Fix This First)</h3><p>Modern laptops try to save battery by putting the network adapter into an aggressive low-power mode. This causes the adapter to drop the connection frequently. To disable it:</p><ol><li><strong>Windows:</strong> Device Manager → Network adapters → right-click your Wi-Fi adapter → Properties → Power Management tab. Uncheck "Allow the computer to turn off this device to save power."</li><li><strong>macOS:</strong> System Preferences → Network → Wi-Fi → Advanced → uncheck "Disassociate from networks when going to sleep" and reduce the power-saving aggressiveness if available.</li></ol><h3>If Dropping Continues: Update the Driver</h3><ol><li><strong>Identify your network adapter.</strong> Device Manager → Network adapters. Common makers: Intel, Qualcomm, Broadcom, Realtek.</li><li><strong>Visit the laptop or motherboard maker's support page.</strong> Not the Wi-Fi chip maker — your laptop or motherboard maker. They provide optimized drivers.</li><li><strong>Download the latest network driver.</strong></li><li><strong>Uninstall the old driver:</strong> Device Manager → right-click → Uninstall device. Check the box to remove driver software.</li><li><strong>Restart your computer and your router.</strong></li><li><strong>Install the new driver and restart once more.</strong></li></ol><h3>Also Try</h3><ul><li>Forget the Wi-Fi network and reconnect to it fresh.</li><li>Move closer to your router to rule out signal strength issues.</li><li>If dropping still happens, restart your router — it might be overloaded or stuck.</li></ul>`,
  
  'graphics': `<h2>Screen Flickers or Goes Black</h2><p>A screen that flickers, goes black for a moment, or shows visual glitches is almost always a graphics driver problem. Your monitor and GPU hardware are fine — the driver just needs a reset or update.</p><h3>Why Flickering Happens</h3><p>Graphics drivers manage the relationship between your GPU, monitor, and operating system. An outdated driver might not handle your specific monitor's refresh rate correctly, leading to flicker. A corrupted driver causes black screens. A driver conflict with your operating system version creates visual artifacts.</p><h3>The Fix</h3><ol><li><strong>Identify your GPU.</strong> Windows: Device Manager → Display adapters. You will see Nvidia, AMD, Intel, or your laptop's maker.</li><li><strong>Visit the GPU maker's official driver page:</strong><ul><li>Nvidia: nvidia.com/Download/driverDetails.aspx</li><li>AMD: amd.com/en/technologies/radeon-drivers</li><li>Intel: intel.com/content/www/us/en/support/detect.html</li></ul></li><li><strong>Download the latest driver for your GPU and operating system.</strong></li><li><strong>Uninstall the current driver:</strong> Device Manager → Display adapters → right-click your GPU → Uninstall device. Check "Delete the driver software for this device."</li><li><strong>Restart your computer.</strong> Windows will use a generic display driver temporarily.</li><li><strong>Install the new driver you downloaded.</strong></li><li><strong>Restart again and test.</strong> Open a video or game to stress the GPU and check for flicker.</li></ol><h3>If Flickering Persists</h3><ul><li><strong>Roll back to a known-good driver version.</strong> If a recent update caused the problem, go back one or two driver versions.</li><li><strong>Check your monitor cable.</strong> A loose or damaged cable can cause flicker that looks like a driver issue.</li><li><strong>Try a different monitor if you have one.</strong> If flicker goes away, your original monitor is faulty.</li></ul>`,
  
  'usb': `<h2>USB Device Not Recognised</h2><p>When you plug in a USB device and your computer does not recognize it, the problem is usually one of three things: the cable, the port, or the driver. The good news is you can troubleshoot all three without special tools.</p><h3>The Hardware Checks (Do These First)</h3><ol><li><strong>Try a different USB cable.</strong> Cables fray and fail. Borrow one if you need to — this eliminates a huge source of false problems.</li><li><strong>Try a different USB port.</strong> If one port does not work, try another. Do not use USB hubs initially — plug directly into your computer.</li><li><strong>Try a different computer if you have one.</strong> If the device works elsewhere, your computer has a driver or controller problem. If it does not work anywhere, the device hardware is broken.</li></ol><h3>If the Device Works Elsewhere: Fix Your USB Drivers</h3><ol><li><strong>Windows: Device Manager → Universal Serial Bus controllers.</strong> Look for any devices with a yellow warning icon or labeled "Unknown Device."</li><li><strong>Right-click → Update driver → Search automatically for updated driver software.</strong> Windows will search online.</li><li><strong>If that does not work, visit your motherboard or laptop maker's support page.</strong> Download the chipset driver and USB controller driver explicitly.</li><li><strong>Uninstall the problematic device:</strong> Device Manager → right-click → Uninstall device.</li><li><strong>Restart your computer.</strong></li><li><strong>Install the new USB and chipset drivers you downloaded.</strong></li><li><strong>Restart and test with your USB device.</strong></li></ol><h3>Special Case: External Hard Drive or Storage Device</h3><p>If the device is a hard drive or flash drive, also check if your system's BIOS recognizes it. Restart your computer and enter BIOS/UEFI (usually by pressing F2, F10, or Delete during startup). If the drive is not listed there, the problem is hardware-level and likely not fixable with driver updates.</p>`,
  
  'system': `<h2>Computer Feels Slow After Update</h2><p>Your computer was running fine until you updated Windows or macOS, and now everything feels sluggish — boot times are longer, apps take forever to start, games stutter. This is almost always because the update replaced your carefully tuned drivers with generic ones.</p><h3>Why Updates Break Performance</h3><p>Operating system updates sometimes swap out manufacturer-specific drivers for generic "class drivers" that work on any hardware but are not optimized for your exact device. A custom graphics driver from Nvidia is tuned for your GPU. A generic graphics driver works but runs everything 20% slower.</p><h3>The Fix</h3><ol><li><strong>Update your chipset driver first.</strong> Go to your motherboard or laptop maker's support page and download the latest chipset driver. This is the foundation for all other hardware communication.</li><li><strong>Restart after installing the chipset driver.</strong></li><li><strong>Update your GPU driver next.</strong> Visit Nvidia.com, AMD.com, or Intel.com (depending on your graphics hardware) and download the latest driver.</li><li><strong>Restart.</strong></li><li><strong>Update other critical drivers:</strong> Network (from your laptop or motherboard maker, not the chip maker), Audio (from your motherboard or laptop maker), and Storage/SATA controller drivers.</li><li><strong>Restart one final time.</strong> Then test performance with a demanding app or game.</li></ol><h3>Why This Order Matters</h3><p>The chipset driver is the "parent" driver — everything else depends on it. Update it first. The GPU driver is next because it handles rendering performance. Updating in the correct order prevents conflicts and ensures each driver installs cleanly.</p><h3>Performance Still Sluggish?</h3><ul><li>Check Task Manager (Windows) or Activity Monitor (macOS) for runaway background processes.</li><li>Disable startup programs you do not need: Windows → Settings → Apps → Startup.</li><li>Run Windows Update or macOS Software Update again to ensure all updates are installed.</li></ul>`,
  
  'kernel-mode-drivers': `<h2>Kernel-Mode Drivers</h2><p>Kernel-mode drivers operate within the most privileged layer of an operating system — the kernel itself. They execute in kernel space, which means they have direct, unmediated access to every system resource, including physical memory, hardware registers, and I/O ports. This high level of privilege is essential because these drivers need to respond to hardware events with minimal latency and maximum control.</p>`,
  'user-mode-drivers': `<h2>User-Mode Drivers</h2><p>User-mode drivers run in the less-privileged user space of the operating system, isolated from the kernel by a hardware-enforced memory boundary. This isolation provides a significant safety advantage: if a user-mode driver crashes or encounters an unhandled error, the failure is contained within the user space process, and the operating system can terminate and restart the driver without crashing the entire system.</p>`,
  'display-graphics': `<h2>Display / Graphics Drivers</h2><p>Display and graphics drivers manage GPU memory, shader scheduling, display output configuration, and the APIs that allow apps to use GPU power. They are updated frequently to unlock performance and fix compatibility issues.</p>`,
  'audio-drivers': `<h2>Audio Drivers</h2><p>Audio drivers handle low-latency audio streams, mixing, DSP, and sample-accurate timing for input and output devices. Professional audio workflows depend on optimized drivers for reliable performance.</p>`,
  'network-drivers': `<h2>Network Drivers</h2><p>Network drivers enable communication over wired and wireless networks, manage DMA for high throughput, and often implement offloads to reduce CPU usage.</p>`,
  'usb-drivers': `<h2>USB Drivers</h2><p>USB drivers form a layered stack including host controller drivers and class drivers. They handle enumeration, power states, and hot-plugging behavior for a wide range of devices.</p>`
}

export default async function KnowledgeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const content = contentMap[slug] || `<h2>${title}</h2><p>Detailed guide on ${title}. Includes FAQ and troubleshooting.</p>`

  return (
    <>
      <Seo title={`${title} - Knowledge Base`} description={`Guide: ${title}`} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-12 pb-8 sm:pt-20 sm:pb-12 border-b border-slate-200">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-100/50 blur-[80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
          <nav className="mb-6 flex text-sm font-medium text-slate-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/knowledge/" className="hover:text-blue-600 transition-colors">Knowledge Base</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-blue-600 truncate" aria-current="page">{title}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm mb-4">
            <HelpCircle className="h-4 w-4" />
            Knowledge Article
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm mb-12">
            <div 
              className="prose prose-lg prose-blue max-w-none text-slate-700 
                         prose-headings:font-bold prose-headings:text-slate-900 
                         prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl flex gap-3 items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm leading-relaxed m-0">
                This article is part of our extensive knowledge base. If you're experiencing specific hardware issues, we recommend checking the manufacturer's documentation as well.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  Can I use this on Windows and macOS?
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="h-4 w-4 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-5 text-slate-600 leading-relaxed bg-white">
                  Yes, most of the architectural concepts apply to both platforms, though the specific file formats (.sys vs .kext) and implementation details differ significantly.
                </div>
              </details>
              <details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  How often should these drivers be updated?
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="h-4 w-4 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-5 text-slate-600 leading-relaxed bg-white">
                  Generally, you only need to update them if you are experiencing hardware instability, security vulnerabilities, or if a specific software application requires a newer version to function properly.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
