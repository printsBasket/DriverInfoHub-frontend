import Seo from '../../../components/Seo'

export default function HowItWorks(){
  return (
    <section className="container mx-auto px-4 py-12">
      <Seo title="How Drivers Work - Driver Info Hub" description="How drivers translate between OS and hardware" />
      <h1 className="text-3xl font-semibold mb-4">How Drivers Work</h1>
      <p className="text-slate-700 mb-6">Drivers follow shared rulebooks that define how to talk to the OS and hardware, converting high-level requests into device commands.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">The Translator</h2>
      <p className="text-slate-600">Drivers bridge the language gap between software and hardware.</p>
    </section>
  )
}
