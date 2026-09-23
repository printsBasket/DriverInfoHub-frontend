import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | Driver Info Hub',
  description: 'Cookies, tracking, and your choices. Learn how Driver Info Hub uses cookies and similar technologies.',
}

const sections = [
  {
    title: '1. What Are Cookies?',
    content: [
      'Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies help websites function efficiently, enhance user experience, and provide information to website owners about how visitors interact with the site.',
      'Cookies do not give us access to your device or personal files.',
    ],
  },
  {
    title: '2. How We Use Cookies',
    content: [
      'Driver Info Hub uses cookies and similar technologies to:',
      '• Ensure the Website functions properly',
      '• Maintain security and prevent fraudulent activity',
      '• Remember user preferences and settings',
      '• Analyze Website performance and usage patterns',
      '• Improve our services and user experience',
      'Cookies may collect technical information such as IP address, browser type, device information, and browsing behavior, as described in our Privacy Policy.',
    ],
  },
  {
    title: '3. Types of Cookies We Use',
    content: [
      'Essential Cookies: These cookies are strictly necessary for the Website to operate correctly. They enable core functionality such as security, page navigation, and access to essential features. Without these cookies, the Website may not function properly.',
      'Performance and Analytics Cookies: These cookies help us understand how visitors interact with our Website by collecting aggregated and anonymized information. This allows us to measure performance, identify errors, and improve Website functionality.',
      'Functional Cookies: Functional cookies allow the Website to remember choices you make, such as language preferences or region, to provide a more personalized experience.',
      'Advertising and Third-Party Cookies: We may allow trusted third-party service providers to place cookies on our Website for analytics or advertising purposes. These cookies may be used to deliver relevant advertisements and measure campaign effectiveness, subject to applicable laws and user consent where required as per our Privacy Policy.',
    ],
  },
  {
    title: '4. Third-Party Tracking Technologies',
    content: [
      'We may use third-party services such as Google Analytics to analyze Website usage and traffic patterns. These third parties may use cookies or similar technologies to collect information about your online activities across different websites.',
      'You can learn more about Google\'s data practices by visiting Google\'s Privacy & Terms page or opt out using Google\'s opt-out tools, as referenced in our Privacy Policy.',
    ],
  },
  {
    title: '5. Your Cookie Choices and Controls',
    content: [
      'You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when cookies are being sent.',
      'Please note that disabling cookies may affect certain features or functionality of the Website. For more information on managing cookies, visit your browser\'s help section.',
    ],
  },
  {
    title: '6. Do Not Track Signals',
    content: [
      'Some browsers offer a "Do Not Track" (DNT) feature. At this time, there is no uniform industry standard for recognizing DNT signals, and Driver Info Hub does not currently respond to such signals as detailed in our Privacy Policy.',
    ],
  },
  {
    title: '7. Updates to This Cookie Policy',
    content: [
      'We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. Any updates will be indicated by a revised "Last Updated" date at the top of this policy.',
    ],
  },
  {
    title: '8. Learn More',
    content: [
      'If you have questions or concerns about this Cookie Policy or our use of cookies, you may contact us at: support@driverinfohub.com',
    ],
  },
]

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <p className="text-sm text-slate-600">Last updated: June 20, 2026</p>
            <p className="text-sm text-slate-600">Reading time: 4 mins</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Cookie Policy</h1>
          
          <p className="text-lg text-slate-700 mb-6">
            Ensuring transparency and clarity in our cookie usage to protect your privacy and provide a seamless browsing experience.
          </p>
          
          <p className="text-slate-700 mb-6">
            This Cookie Policy explains how <strong>Driver Info Hub</strong> ("Company," "we," "us," or "our") uses cookies and similar tracking technologies when you visit our website driverinfohub.com (the "Website"). This policy should be read together with our Privacy Policy and Terms of Service.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {sections.map((sec, i) => (
            <section key={i} className="border-b border-slate-200 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{sec.title}</h2>
              <div className="space-y-3">
                {sec.content.map((paragraph, j) => (
                  <p key={j} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  )
}
