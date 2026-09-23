import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Driver Info Hub',
  description: 'How Driver Info Hub collects, uses, and safeguards your information.',
}

const sections: {
  title: string
  content: { subtitle?: string; text: string }[]
}[] = [
  {
    title: '1. What Information Do We Collect?',
    content: [
      {
        subtitle: 'Personal information you disclose to us',
        text: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. The personal information we collect may include the following: names, phone numbers, email addresses.',
      },
      {
        subtitle: 'Information automatically collected',
        text: 'Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services. We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.',
      },
      {
        subtitle: 'Location Data',
        text: 'We collect location data such as information about your device\'s location, which can be either precise or imprecise. You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device.',
      },
    ],
  },
  {
    title: '2. How Do We Process Your Information?',
    content: [
      {
        text: 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.',
      },
      {
        subtitle: 'To deliver services',
        text: 'We may process your information to provide you with the requested service.',
      },
    ],
  },
  {
    title: '3. What Legal Bases Do We Rely On To Process Your Personal Information?',
    content: [
      {
        text: 'We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law. If you are located in Canada, we may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.',
      },
    ],
  },
  {
    title: '4. When and With Whom Do We Share Your Personal Information?',
    content: [
      {
        text: 'We may share information in specific situations and with specific third parties. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
      },
    ],
  },
  {
    title: '5. Do We Use Cookies and Other Tracking Technologies?',
    content: [
      {
        text: 'We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.',
      },
      {
        subtitle: 'Google Analytics',
        text: 'We may share your information with Google Analytics to track and analyze the use of the Services. To opt out, visit https://tools.google.com/dlpage/gaoptout.',
      },
    ],
  },
  {
    title: '6. How Long Do We Keep Your Information?',
    content: [
      {
        text: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law.',
      },
    ],
  },
  {
    title: '7. How Do We Keep Your Information Safe?',
    content: [
      {
        text: 'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.',
      },
    ],
  },
  {
    title: '8. Do We Collect Information From Minors?',
    content: [
      {
        text: 'We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction.',
      },
    ],
  },
  {
    title: '9. What Are Your Privacy Rights?',
    content: [
      {
        text: 'In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, request rectification or erasure, restrict the processing of your personal information, and not be subject to automated decision-making.',
      },
      {
        text: 'You can make such a request by contacting us at support@driverinfohub.com. We will respond within 30 days.',
      },
    ],
  },
  {
    title: '10. Controls For Do-Not-Track Features',
    content: [
      {
        text: 'Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.',
      },
    ],
  },
  {
    title: '11. Do United States Residents Have Specific Privacy Rights?',
    content: [
      {
        text: 'If you are a resident of Ohio, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have specific rights regarding your personal information.',
      },
      {
        text: 'You have rights under certain US state data protection laws including the right to know, access, correct, delete, and obtain a copy of your personal data. To exercise these rights, contact us at support@driverinfohub.com.',
      },
    ],
  },
  {
    title: '12. Do We Make Updates to This Notice?',
    content: [
      {
        text: 'We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. We encourage you to review this Privacy Notice frequently. Continued use of Driver Info Hub after any changes constitutes acceptance of the updated policy.',
      },
    ],
  },
  {
    title: '13. How Can You Learn More About This Notice?',
    content: [
      {
        text: 'If you have questions or comments about this notice, you may email us at: support@driverinfohub.com. We aim to respond to all privacy-related inquiries within 5 business days.',
      },
    ],
  },
  {
    title: '14. How Can You Review, Update, or Delete the Data We Collect From You?',
    content: [
      {
        text: 'Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please contact us via email at support@driverinfohub.com.',
      },
    ],
  },
]

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <p className="text-sm text-slate-600">Last updated: June 20, 2026</p>
            <p className="text-sm text-slate-600">Reading time: 8 mins</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          
          <p className="text-lg text-slate-700 mb-6">
            Your privacy is our priority. We are committed to protecting your personal information and being transparent about how we process it.
          </p>
          
          <p className="text-slate-700 mb-4">
            This Privacy Notice for <strong>Driver Info Hub</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
          </p>
          
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
            <li>Visit our website at driverinfohub.com or any website of ours that links to this Privacy Notice</li>
            <li>Use Driver Info Hub. At Driver Info Hub, we focus on providing clear, plain-English driver guides and resources</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          
          <p className="text-slate-700 mb-6">
            Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@driverinfohub.com" className="text-blue-600 hover:underline">support@driverinfohub.com</a>.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Summary of Key Points</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-900 mb-2">What personal information do we process?</p>
              <p className="text-slate-700">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">Do we process any sensitive personal information?</p>
              <p className="text-slate-700">We do not process sensitive personal information.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">Do we collect any information from third parties?</p>
              <p className="text-slate-700">We do not collect any information from third parties.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">How do we process your information?</p>
              <p className="text-slate-700">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">In what situations and with which parties do we share personal information?</p>
              <p className="text-slate-700">We may share information in specific situations and with specific third parties.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">How do we keep your information safe?</p>
              <p className="text-slate-700">We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">What are your rights?</p>
              <p className="text-slate-700">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
            </div>
            
            <div>
              <p className="font-semibold text-slate-900 mb-2">How do you exercise your rights?</p>
              <p className="text-slate-700">The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {sections.map((sec, i) => (
            <section key={i} className="border-b border-slate-200 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{sec.title}</h2>
              <div className="space-y-4">
                {sec.content.map((block, j) => (
                  <div key={j}>
                    {block.subtitle && (
                      <h3 className="font-semibold text-slate-900 mb-2">{block.subtitle}</h3>
                    )}
                    <p className="text-slate-700 leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  )
}
