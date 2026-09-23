import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Driver Blog — Friendly, Useful Reads | Driver Info Hub',
  description: 'Plain-English articles about device drivers — how they work, how to update them safely, and how to fix the most common problems. New posts every fortnight.',
  alternates: { canonical: '/blog/' },
}

const featured = {
  slug: 'what-is-a-driver',
  tag: 'Beginner',
  date: 'June 10, 2024',
  readTime: '5 min',
  title: 'What Is a Driver, Really? A Five-Minute Friendly Explainer',
  desc: 'Forget the jargon — a driver is just a translator between your computer and the hardware connected to it. This piece starts with the core idea and works outward, until you have a working mental model that holds up across every category covered on this site.',
  image: '/assets/images/home-translator.svg',
}

const posts = [
  {
    slug: 'inside-a-graphics-driver-update',
    tag: 'Graphics',
    tagColor: '#2563EB',
    date: 'May 21, 2026',
    readTime: '9 min',
    title: 'Inside a Graphics Driver Update: What Actually Changes',
    desc: 'A "minor" update can deliver double-digit performance gains in a brand-new game. Here\'s what GPU makers quietly change between versions — and how to update without drama.',
    image: '/assets/images/graphics-what.svg',
  },
  {
    slug: 'the-hidden-world-of-audio-drivers',
    tag: 'Audio',
    tagColor: '#3b82f6',
    date: 'May 21, 2026',
    readTime: '7 min',
    title: 'The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software',
    desc: 'Two laptops with identical speakers can sound completely different. The reason is rarely the hardware — it\'s the audio driver and its processing chain.',
    image: '/assets/images/audio-what.svg',
  },
  {
    slug: 'why-your-wifi-is-slower',
    tag: 'Networking',
    tagColor: '#0284c7',
    date: 'May 21, 2026',
    readTime: '6 min',
    title: "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",
    desc: 'Same router, same room, very different speeds. The explanation usually lives inside your laptop — in the network adapter, its driver, and one greedy power setting.',
    image: '/assets/images/network-what.svg',
  },
  {
    slug: 'plug-and-play-demystified',
    tag: 'USB',
    tagColor: '#0ea5e9',
    date: 'May 21, 2026',
    readTime: '7 min',
    title: 'Plug-and-Play, Demystified: How Your PC Knows What You Just Connected',
    desc: 'You plug in a device, and within a second your computer knows what it is, what it can do, and how to talk to it. Here is the quiet choreography behind that moment.',
    image: '/assets/images/usb-what.svg',
  },
  {
    slug: 'the-quiet-chipset-driver',
    tag: 'System',
    tagColor: '#1d4ed8',
    date: 'May 21, 2026',
    readTime: '8 min',
    title: 'The Quiet Importance of the Chipset Driver Nobody Talks About',
    desc: 'It has no fans, no settings app, and no fame — yet the chipset driver is the most foundational software on your PC.',
    image: '/assets/images/system-what.svg',
  },
  {
    slug: 'kernel-mode-vs-user-mode',
    tag: 'Architecture',
    tagColor: '#2563EB',
    date: 'May 21, 2026',
    readTime: '8 min',
    title: 'Kernel-Mode vs User-Mode: Why Some Drivers Live Closer to the Metal',
    desc: 'Some drivers run with deep system access; others are safely sandboxed. That one design choice explains why some crashes take the whole machine down.',
    image: '/assets/images/architecture.svg',
  },
  {
    slug: 'how-to-update-drivers-safely',
    tag: 'How-To',
    tagColor: '#1e40af',
    date: 'May 22, 2026',
    readTime: '7 min',
    title: 'How to Update Drivers Safely (Without Breaking Anything)',
    desc: 'Updating drivers can fix issues and improve performance — but it can also cause new problems if done carelessly. Here is the safe, step-by-step approach.',
    image: '/assets/images/system-fix.svg',
  },
  {
    slug: 'why-do-drivers-crash',
    tag: 'Troubleshooting',
    tagColor: '#3730a3',
    date: 'May 23, 2026',
    readTime: '6 min',
    title: 'Why Do Drivers Crash? (And What You Can Do About It)',
    desc: 'A crashing driver can be frustrating, but understanding why it happens makes it much easier to fix — and to stop it happening again.',
    image: '/assets/images/printer-fix.svg',
  },
  {
    slug: 'ssd-drivers-what-you-need-to-know',
    tag: 'Storage',
    tagColor: '#1e3a8a',
    date: 'May 24, 2026',
    readTime: '5 min',
    title: 'SSD Drivers: Do You Need to Update Them?',
    desc: 'SSDs are fast and reliable, but do their drivers ever need attention? Here is what you actually need to know about SSD driver updates.',
    image: '/assets/images/knowledge-flow.svg',
  },
  {
    slug: 'why-your-device-stopped-after-update',
    tag: 'Troubleshooting',
    tagColor: '#312e81',
    date: 'May 25, 2026',
    readTime: '6 min',
    title: 'Why Your Device Stopped Working After the Last Update',
    desc: 'A driver update was supposed to fix things, but now your device doesn\'t work. Here is what happened and how to get back on track quickly.',
    image: '/assets/images/printer-what.svg',
  },
  {
    slug: 'driver-signing-explained',
    tag: 'Security',
    tagColor: '#2563EB',
    date: 'May 26, 2026',
    readTime: '7 min',
    title: 'Driver Signing: Why Your Computer Cares Who Made the Software',
    desc: 'Modern operating systems refuse to load unsigned drivers by default. Here is what that means, why it matters, and when it is safe to proceed.',
    image: '/assets/images/bluetooth-what.svg',
  },
  {
    slug: 'virtual-drivers-what-they-do',
    tag: 'Architecture',
    tagColor: '#2563EB',
    date: 'May 27, 2026',
    readTime: '7 min',
    title: "Virtual Drivers: When the 'Hardware' Is Not Hardware At All",
    desc: 'Some drivers don\'t talk to physical devices at all. They create virtual devices that trick your computer into doing useful things.',
    image: '/assets/images/scanner-what.svg',
  },
  {
    slug: 'how-to-set-up-a-new-printer',
    tag: 'Printer',
    tagColor: '#2563EB',
    date: 'July 2, 2026',
    readTime: '8 min',
    title: 'How to Set Up a New Printer',
    desc: 'Unboxing a new printer is exciting, but getting it ready to print requires a few careful steps. Here is the straightforward process from box to first page.',
    image: '/assets/images/printer-what.svg',
  },
  {
    slug: 'how-to-connect-printer-to-wifi',
    tag: 'Printer',
    tagColor: '#2563EB',
    date: 'July 2, 2026',
    readTime: '7 min',
    title: 'How to Connect a Printer to Wi-Fi',
    desc: 'A wireless printer lets you print from anywhere in your home. Here is how to get your printer on your network without the frustration.',
    image: '/assets/images/network-what.svg',
  },
  {
    slug: 'how-to-add-printer-to-computer',
    tag: 'Printer',
    tagColor: '#2563EB',
    date: 'July 2, 2026',
    readTime: '9 min',
    title: 'How to Add a Printer to a Computer (Windows & Mac)',
    desc: 'Your printer is on the network, but your computer does not know about it yet. Here is how to introduce them on both Windows and macOS.',
    image: '/assets/images/printer-fix.svg',
  },
  {
    slug: 'how-to-fix-printer-offline',
    tag: 'Troubleshooting',
    tagColor: '#DC2626',
    date: 'July 2, 2026',
    readTime: '6 min',
    title: 'How to Fix a Printer That Is Offline',
    desc: 'Your printer says it is offline, but you know it is sitting right there. Here is how to bring it back online and get printing again.',
    image: '/assets/images/printer-fix.svg',
  },
]

const finds = [
  'Driver installation and update guides',
  'Computer hardware explained simply',
  'Troubleshooting tips and practical fixes',
  'Technology concepts without the jargon',
]

const popularTags = ['Driver Errors', 'Wi-Fi Issues', 'GPU Updates', 'Printer Problems']

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              The Driver Blog
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Friendly, Useful Reads About <br />
              How Your Computer Actually Works
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Plain-English articles, calm knowledge, and the occasional "wait, that's what it does?" moment. Written for curious users who want practical answers without getting buried in technical jargon.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Find Strip */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                What You'll Find
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Helpful reads for everyday users
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that understanding your computer shouldn't require a degree in computer science.
              </p>
              
              <div className="space-y-4">
                {finds.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">✓</span>
                    <span className="text-slate-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl"></div>
                
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-6">
                    NEW ARTICLES ADDED REGULARLY
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Learn Something Useful Today
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Short reads, practical explanations, and helpful technology insights for everyday users. No jargon, just clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Editor's Pick
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              This Week's Featured Read
            </h2>
          </div>
          
          <Link href={`/blog/${featured.slug}/`} className="group">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-shadow">
              <div className="relative h-80 lg:h-[400px]">
                <div className="absolute inset-0 bg-white rounded-2xl p-8">
                  <Image 
                    src={featured.image} 
                    alt={featured.title} 
                    fill 
                    style={{ objectFit: 'contain', padding: '20px' }}
                    priority
                  />
                </div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    Beginner
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                    5 Minute Read
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                    {featured.tag}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {featured.date} · {featured.readTime} read · Featured
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {featured.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {featured.desc}
                </p>
                
                <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
                  Read the Full Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white" id="latest">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Latest Articles
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Fresh Reads From The Driver Blog
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Bite-sized, friendly, and always written by humans who enjoy this stuff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="relative h-52 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      style={{ objectFit: 'contain', padding: '10px' }}
                    />
                  </div>
                  <span 
                    className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: post.tagColor }}
                  >
                    {post.tag}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">{post.desc}</p>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <span className="text-slate-500 text-sm">Driver Info Hub editorial team</span>
                </div>
                
                <div className="flex items-center gap-2 text-blue-700 font-bold">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Requests CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Reader Requests
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Want a Topic Covered?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Drop us a line with a question, a confused symptom, or a topic you wish someone would just explain plainly. We pick reader questions for new articles all the time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-xl">
                  Suggest a Topic
                </Link>
                <Link href="/knowledge/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-400 hover:text-blue-700 transition-all">
                  Need Help Right Now?
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Reader Questions</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Many of our most popular articles started as a simple reader question.
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Plain-English Answers</h3>
                <p className="text-slate-600 leading-relaxed">
                  We focus on practical explanations without the jargon, acronyms, or unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
