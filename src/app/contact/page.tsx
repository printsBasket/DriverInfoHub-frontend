import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Driver Info Hub — Questions & Topic Ideas',
  description: 'Get in touch with Driver Info Hub. We love reader questions, article suggestions, and feedback.',
}

const infoCards = [
  { icon: '📧', title: 'Email Us', body: 'support@driverinfohub.com', href: 'mailto:support@driverinfohub.com' },
  { icon: '🕒', title: 'Response Time', body: 'We aim to reply within 2–3 working days.' },
  { icon: '🛡️', title: 'Privacy First', body: 'We never share your details. Your data is safe with us.' },
]

const faqItems = [
  { q: 'Can you fix my PC remotely?', a: 'No, we are an educational publisher. We provide guides and point you to official sources.' },
  { q: 'Will you cover my suggestion?', a: 'Very likely! Many of our articles start as reader questions. Tell us what you need.' },
  { q: 'Is my data safe?', a: 'Absolutely. We only use your information to reply to your inquiry. See our privacy policy for more.' },
]

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              Get in Touch
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Have a Question or <br />
              Topic Idea?
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We love hearing from our readers. Whether you have a question, a suggestion for a new topic, or just want to say hi, drop us a line below. We read every message and use your feedback to improve our guides.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50" id="form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Send a Message
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                While we can't offer one-to-one technical support, we read every message and use your feedback to improve our guides.
              </p>
              
              <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Direct Contact
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Other Ways to Reach Us
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Prefer a more direct line? Here's how else you can get in touch.
              </p>
              
              <div className="space-y-6 mb-8">
                {infoCards.map((card, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-2xl shadow-lg">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                      {card.href ? (
                        <a 
                          href={card.href} 
                          className="text-blue-700 font-medium hover:text-blue-800 transition-colors text-lg"
                        >
                          {card.body}
                        </a>
                      ) : (
                        <p className="text-slate-600 text-lg">{card.body}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6">
                <p className="text-slate-600">
                  <strong className="text-amber-800">Note:</strong> We can't offer live technical support or diagnose individual machines remotely. For hardware fixes, always consult your device manufacturer's official support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Quick Answers
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Common questions before reaching out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white text-xl mb-6">
                  {index === 0 ? '💻' : index === 1 ? '📝' : '🔒'}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.q}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
