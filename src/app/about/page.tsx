import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Driver Info Hub — Independent, Plain-English Driver Guides',
  description: 'Driver Info Hub is a small, independent education project: plain-English driver overviews, no downloads, no sponsorships. Learn who we are and what we cover.',
}

/* ── data ──────────────────────────────────────────────── */
const featureChips = [
  'Beginner-friendly explanations',
  'No unnecessary technical jargon',
  'Real-world troubleshooting focus',
  'Fast, practical solutions',
]

const mission = [
  { n: '1', title: 'Education First',   body: 'We focus on understanding, not just quick fixes.' },
  { n: '2', title: 'No Sponsorships',   body: 'Our advice is always unbiased and independent.'  },
  { n: '3', title: 'Beginner-Friendly', body: 'We assume nothing and explain everything.'        },
]

const story = [
  {
    title: 'The spark',
    body:  'Driver Info Hub started with a simple frustration: trying to help a family member fix a printer driver issue, and every search result either assumed too much knowledge or tried to sell something.',
  },
  {
    title: 'Building the first guides',
    body:  'What began as a small collection of notes for friends and family quickly grew. We realised there was a real need for calm, clear explanations of driver basics — what they do, why they matter, and how to fix common issues.',
  },
  {
    title: 'Growing into a resource',
    body:  'Over time, we expanded our coverage to include every major driver category, added a knowledge hub for quick fixes, and launched a blog to explore broader computing concepts in plain English. Today, Driver Info Hub serves thousands of readers every month.',
  },
]

const journey = [
  { year: '2021', title: 'The Beginning',        body: 'Created the first printer driver guides for friends and family.' },
  { year: '2022', title: 'Expanding Coverage',   body: 'Added graphics, audio, and network driver overviews.' },
  { year: '2023', title: 'Knowledge Hub Launch', body: 'Launched the troubleshooting hub with symptom-based fixes.' },
  { year: '2024', title: 'Blog Goes Live',        body: 'Started publishing explainers about how computers really work.' },
  { year: '2025', title: 'Today',                 body: 'Helping thousands of readers every month with plain-English driver advice.' },
]

const weDo   = ['Explain how drivers work in friendly, plain language','Cover the full range of hardware categories','Help you understand the symptoms of common driver issues','Provide curated, evergreen reference material','Publish step-by-step fix overviews for every common symptom','Respect your time, attention, and privacy']
const weDont = ['Host or distribute any driver downloads','Provide one-on-one technical support or repair services','Recommend specific brands, retailers, or paid services','Run intrusive ads or sell your personal information','Pretend to be the manufacturer of any device','Use scare tactics to push downloads or paid tools']

const editorial = [
  {
    title: 'Researched and Reviewed',
    body: 'Every factual claim about how drivers function is grounded in documented OS specifications, driver development frameworks, or first-hand testing. No copy-pasted forum posts, no AI hallucinations passed off as fact.',
  },
  {
    title: 'Written by Humans',
    body: 'Articles are drafted, edited, and signed off by people. We use research tools to gather and verify information, but the writing voice — friendly, calm, occasionally enthusiastic about a particularly elegant piece of engineering — is entirely human.',
  },
  {
    title: 'Updated as Things Change',
    body: 'When OS updates change how a driver behaves, the affected articles are revisited and updated. Driver concepts are evergreen, but specific behaviour evolves — keeping things current is part of the job.',
  },
]

export default function About() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              About Driver Info Hub
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              We Translate the Technical, <br />
              So You Can Get On With Your Day
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Driver Info Hub is a small, independent education project with one stubborn belief: technology should not feel intimidating. Every guide here is written for beginners while still being useful for advanced users who want clarity without noise.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why We Exist Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Why We Exist
              </p>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Most technical documentation assumes too much knowledge or buries simple answers under layers of complexity. We exist to fix that.
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Driver Info Hub turns confusing driver issues into clear, actionable explanations. We believe technology should feel approachable, not intimidating.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {featureChips.map(c => (
                  <div key={c} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">✓</div>
                    <span className="text-slate-700 font-medium">{c}</span>
                  </div>
                ))}
              </div>
              
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 p-6">
                <p className="text-2xl font-bold text-blue-900 mb-1">Simple. Clear. Useful.</p>
                <p className="text-slate-600">That's the Driver Info Hub promise.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative">
                <Image
                  src="/assets/images/home-translator.svg"
                  alt="Software speaking to hardware through a driver"
                  width={560}
                  height={480}
                  priority
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Friendly Voice Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative">
                <Image
                  src="/assets/images/knowledge-flow.svg"
                  alt="Driver Info Hub knowledge flow diagram"
                  width={560}
                  height={480}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                About Driver Info Hub
              </p>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                A Friendly Voice in a Noisy Tech World
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.
              </p>
              
              <div className="space-y-4">
                {[
                  'Independent and free to read, always',
                  'Plain-English first, technical accuracy second to none',
                  'Privacy-respecting — no aggressive trackers or sold data'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">✓</div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Our Mission
            </p>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Making drivers accessible for everyone
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Our mission is to demystify device drivers so that anyone, regardless of technical background, can understand, troubleshoot, and maintain their hardware with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mission.map(m => (
              <div key={m.n} className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-2xl font-bold text-white shadow-lg mb-6">
                    {m.n}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">What drives us</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We've all been there: staring at a confusing error message, not knowing where to turn. Driver Info Hub exists to be the calm, helpful resource we wish we had in those moments.
              </p>
            </div>
            
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <p className="text-xl font-bold text-slate-900 mb-4">Our Promise</p>
              <ul className="space-y-3">
                {[
                  'Always plain language, no jargon',
                  'No hidden agendas or sales pitches',
                  'Safety first, always'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How Driver Info Hub came to be
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {story.map((s, i) => (
              <div key={s.title} className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Our path so far
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-sky-400 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {journey.map((j, i) => (
                <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}></div>
                  
                  <div className="absolute left-8 md:left-1/2 top-6 w-6 h-6 -translate-x-1/2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg"></div>
                    <div className="absolute -inset-2 rounded-full bg-blue-200 opacity-30 animate-ping"></div>
                  </div>
                  
                  <div className="flex-1 ml-16 md:ml-0">
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                      <p className="text-sm font-bold text-blue-600 mb-2">{j.year}</p>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{j.title}</h3>
                      <p className="text-slate-600">{j.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. What to Expect Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              What Driver Info Hub Does — And What It Does Not
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">What We Do</h3>
              </div>
              
              <ul className="space-y-4">
                {weDo.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* What We Don't */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-gray-500 shadow-lg">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">What We Do Not</h3>
              </div>
              
              <ul className="space-y-4">
                {weDont.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700 font-bold text-sm">✗</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Editorial Standards Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Editorial Standards
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              How Driver Info Hub Is Written and Reviewed
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every article on this site is written, fact-checked, and reviewed against a clear set of editorial standards designed to keep things accurate, useful, and free of marketing fluff.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {editorial.map((e, i) => (
              <div key={e.title} className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{e.title}</h3>
                <p className="text-slate-600 leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Prose Sections + Sidebar */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why we exist</h2>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  Most driver advice online falls into two camps: dense documentation written for engineers, or pushy "speed up your PC" pages trying to sell you something. We wanted a calm third option.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Driver Info Hub explains what each kind of driver actually does, in plain English, and walks through the most common problems with patience instead of jargon. We don't host downloads, we don't run a help desk, and we don't take sponsorships from the companies we write about. That independence is the whole point — it's what lets us stay neutral and honest.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What you'll find here</h2>
                <ul className="space-y-4">
                  {[
                    'Driver overviews for every major hardware family — graphics, audio, network, USB, system, and output devices.',
                    'A knowledge hub with calm, ordered fixes for the symptoms readers ask about most.',
                    'A friendly blog with short explainers about how your computer really works underneath.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">•</span>
                      <span className="text-lg text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What we are not</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are not affiliated with any hardware maker, software publisher, or operating-system vendor. We don't sell software, offer paid repairs, or provide one-to-one technical support. When you need to change something on your own machine, the safest source is always the official documentation from your device maker — and we'll always point you there.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">A note on our tone</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Plain English, always. Friendly, never condescending. If a sentence here ever reads like it was written to impress rather than to help, we got it wrong — and we'd genuinely like to know.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-xl">
                  Get in touch
                </Link>
                <Link href="/drivers/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-400 hover:text-blue-700 transition-all">
                  Browse drivers
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <p className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Quick links</p>
                <ul className="space-y-3">
                  {[
                    { label: 'All Driver Overviews', href: '/drivers/' },
                    { label: 'Troubleshooting Hub', href: '/knowledge/' },
                    { label: 'Driver Blog', href: '/blog/' },
                    { label: 'Contact Us', href: '/contact/' }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                        <span className="text-blue-500">→</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-700">7+</span>
                    <span className="text-sm text-slate-600">Driver families covered</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-700">0</span>
                    <span className="text-sm text-slate-600">Downloads hosted</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-700">100%</span>
                    <span className="text-sm text-slate-600">Independent editorial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Band */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              Community Driven
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Want us to explain<br />another driver topic?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop. Tell us what to write next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/drivers/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-xl">
                Browse All Topics
              </Link>
              <Link href="/knowledge/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-slate-400 text-white font-bold hover:border-blue-400 hover:bg-blue-500/20 transition-all">
                Need Help? Visit Knowledge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
