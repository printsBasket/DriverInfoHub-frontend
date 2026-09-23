import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Keep Drivers Updated | Driver Info Hub',
  description: 'Why keeping drivers updated matters and how to do it safely.',
}

export default function KeepUpdated() {
  return (
    <section className="block">
      <div className="container">
        <h1>Keep Drivers Updated</h1>
        <p>Regular driver maintenance keeps your system stable, secure, and performant.</p>
        <ol className="fixsteps" style={{ marginTop: '32px' }}>
          <li><strong>Back up first</strong><p>Create a restore point before any driver changes.</p></li>
          <li><strong>Use built-in OS updaters</strong><p>Windows Update and macOS Software Update handle most drivers automatically.</p></li>
          <li><strong>Visit vendor sites for specialized drivers</strong><p>For GPU, audio, and printer drivers, always download from the official manufacturer support page.</p></li>
        </ol>
        <div style={{ marginTop: '40px' }}>
          <Link href="/knowledge/" className="btn btn-primary">Visit Knowledge Hub</Link>
        </div>
      </div>
    </section>
  )
}
