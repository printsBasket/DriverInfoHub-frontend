import Link from 'next/link'
import Seo from '../../../components/Seo'

export default function Overview(){
  return (
    <section className="container mx-auto px-4 py-12">
      <Seo title="Overview - Driver Info Hub" description="Overview of drivers and categories" />
      <h1 className="text-3xl font-semibold mb-4">Overview</h1>
      <p className="text-slate-700 mb-4">Welcome to the knowledge overview. Tap cards to explore the basics and deep dives on drivers.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/home/categories/" className="bg-white p-6 rounded-lg">Driver Categories</Link>
        <Link href="/home/how-it-works/" className="bg-white p-6 rounded-lg">How It Works</Link>
        <Link href="/home/keep-updated/" className="bg-white p-6 rounded-lg">Keep Drivers Updated</Link>
      </div>
    </section>
  )
}
