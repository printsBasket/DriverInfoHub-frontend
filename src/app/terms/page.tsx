import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Driver Info Hub',
  description: 'The rules for using Driver Info Hub: a clear summary of what\'s allowed, what isn\'t, and how disputes are handled.',
}

const sections = [
  {
    title: '1. Our Services',
    content: [
      'The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.',
      'The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services.',
    ],
  },
  {
    title: '2. Intellectual Property Rights',
    content: [
      'We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").',
      'Our Content and Marks are protected by copyright and trademark laws and treaties in the United States and around the world.',
      'Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to: (1) access the Services; and (2) download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.',
      'Except as set out in this section, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.',
    ],
  },
  {
    title: '3. User Representations',
    content: [
      'By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.',
      'If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).',
    ],
  },
  {
    title: '4. Prohibited Activities',
    content: [
      'You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:',
      '• Systematically retrieve data or other content from the Services to create or compile any collection, compilation, database, or directory without written permission from us.',
      '• Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.',
      '• Circumvent, disable, or otherwise interfere with security-related features of the Services.',
      '• Use any information obtained from the Services in order to harass, abuse, or harm another person.',
      '• Use the Services in a manner inconsistent with any applicable laws or regulations.',
      '• Upload or transmit (or attempt to upload or transmit) viruses, Trojan horses, or other material that interferes with any party\'s use and enjoyment of the Services.',
      '• Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
      '• Delete the copyright or other proprietary rights notice from any Content.',
      '• Attempt to impersonate another user or person or use the username of another user.',
      '• Use a buying agent or purchasing agent to make purchases on the Services.',
      '• Engage in unauthorized framing of or linking to the Services.',
    ],
  },
  {
    title: '5. User Generated Contributions',
    content: [
      'The Services may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").',
      'When you create or make available any Contributions, you represent and warrant that: (1) the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights of any third party; (2) you are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and authorize us to use your Contributions; (3) you have written consent from each person identifiable in your Contributions; (4) your Contributions are not false, inaccurate, or misleading; (5) your Contributions are not unsolicited advertising, promotional materials, spam, or other forms of solicitation; and (6) your Contributions do not violate any applicable law, regulation, or rule.',
      'You are solely responsible for your Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of this section.',
    ],
  },
  {
    title: '6. Contribution License',
    content: [
      'You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).',
      'By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.',
      'We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions. We are not liable for any statements or representations in your Contributions provided by you.',
    ],
  },
  {
    title: '7. Services Management',
    content: [
      'We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who violates the law or these Legal Terms, including reporting such user to law enforcement authorities; (3) refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; (4) remove from the Services or otherwise disable all files and content that are excessive in size or burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.',
    ],
  },
  {
    title: '8. Privacy Policy',
    content: [
      'We care about data privacy and security. Please review our Privacy Policy at driverinfohub.com/privacy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.',
      'Please be advised the Services are hosted in the United States. If you access the Services from any other region with laws governing personal data collection that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.',
    ],
  },
  {
    title: '9. Term and Termination',
    content: [
      'These Legal Terms shall remain in full force and effect while you use the Services. WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.',
      'If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including pursuing civil, criminal, and injunctive redress.',
    ],
  },
  {
    title: '10. Modifications and Interruptions',
    content: [
      'We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.',
      'We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.',
    ],
  },
  {
    title: '11. Governing Law',
    content: [
      'These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Ontario, Canada, applicable to agreements made and to be entirely performed within Ontario, without regard to its conflict of law principles.',
    ],
  },
  {
    title: '12. Dispute Resolution',
    content: [
      'Any legal action brought by either you or us shall be commenced or prosecuted in the state and federal courts located in Ontario, Canada. If you are located outside of Ontario or Canada, you hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such courts.',
      'Application of the United Nations Convention on Contracts for the International Sale of Goods is excluded from these Legal Terms.',
    ],
  },
  {
    title: '13. Corrections',
    content: [
      'There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.',
    ],
  },
  {
    title: '14. Disclaimer',
    content: [
      'THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES\' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS.',
    ],
  },
  {
    title: '15. Limitations of Liability',
    content: [
      'IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      'NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.',
      'CERTAIN LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.',
    ],
  },
  {
    title: '16. Indemnification',
    content: [
      'You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys\' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services.',
      'We reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims.',
    ],
  },
  {
    title: '17. User Data',
    content: [
      'We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.',
      'You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.',
    ],
  },
  {
    title: '18. Electronic Communications, Transactions, and Signatures',
    content: [
      'Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.',
      'YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.',
    ],
  },
  {
    title: '19. Miscellaneous',
    content: [
      'These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.',
      'These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.',
      'If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.',
      'There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.',
    ],
  },
  {
    title: '20. Contact Us',
    content: [
      'In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at: support@driverinfohub.com',
    ],
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <p className="text-sm text-slate-600">Last updated: June 20, 2026</p>
            <p className="text-sm text-slate-600">Reading time: 15 mins</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
          
          <p className="text-lg text-slate-700 mb-6">
            Please read these terms carefully before using our services. They constitute a legally binding agreement between you and Driver Info Hub.
          </p>
          
          <p className="text-slate-700 mb-6">
            We are <strong>Driver Info Hub</strong> ("Company," "we," "us," or "our"). We operate the website driverinfohub.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          
          <p className="text-slate-700 mb-6">
            You can contact us by email at <a href="mailto:support@driverinfohub.com" className="text-blue-600 hover:underline">support@driverinfohub.com</a>.
          </p>
          
          <p className="text-slate-700 mb-6">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Driver Info Hub, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
          </p>
          
          <p className="text-slate-700 mb-6">
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates.
          </p>
          
          <p className="text-slate-700 mb-6">
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sections.map((sec, i) => (
              <a key={i} href={`#section-${i}`} className="text-blue-600 hover:underline text-sm">
                {sec.title}
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {sections.map((sec, i) => (
            <section key={i} id={`section-${i}`} className="border-b border-slate-200 pb-8">
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

