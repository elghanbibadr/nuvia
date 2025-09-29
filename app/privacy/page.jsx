import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0F1419] text-white">
      {/* Back Button */}
      <div className="px-6 lg:px-12 pt-8">
        <Link href="/" className="inline-flex items-center text-white hover:text-slate-300 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 max-w-4xl mx-auto lg:px-12 py-12">
        <h3 className="mb-8">Privacy Policy – NÜVIA OÜ (GDPR-Compliant)</h3>

        {/* Header Info */}
        <div className="mb-12 space-y-4">
          <div>
            <p className="text-[#FFFFFFCC]">Effective Date:</p>
            <p className="text-[#FFFFFFCC]">22 September 2025</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC]">Data Controller:</p>
            <p className="text-[#FFFFFFCC]">NÜVIA OÜ, Reg. No. 17301668, Estonia</p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h3 className="mb-4">1. Introduction</h3>
          <p className="text-[#FFFFFFCC]">
            This Privacy Policy explains how NÜVIA OÜ collects, uses, discloses, and protects your personal data in accordance with the EU General Data Protection Regulation (GDPR) and other applicable data protection laws.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h3 className="mb-4">2. What Data We Collect</h3>
          <p className="text-[#FFFFFFCC] mb-4">We collect the following categories of data:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Identity and contact data (e.g., name, email, phone)</li>
            <li className="text-[#FFFFFFCC]">• Technical data (e.g., IP address, device type, browser, OS)</li>
            <li className="text-[#FFFFFFCC]">• Usage data (e.g., pages visited, clicks, time spent)</li>
            <li className="text-[#FFFFFFCC]">• Cookies and tracking IDs (see separate Cookies Policy)</li>
            <li className="text-[#FFFFFFCC]">• Any information voluntarily provided via forms, feedback</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h3 className="mb-4">3. Legal Basis for Processing (GDPR Article 6)</h3>
          <p className="text-[#FFFFFFCC] mb-4">We process your personal data lawfully, on one or more of the following bases:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Consent (Art. 6(1)(a))</li>
            <li className="text-[#FFFFFFCC]">• Contractual necessity (Art. 6(1)(b))</li>
            <li className="text-[#FFFFFFCC]">• Legal obligation (Art. 6(1)(c))</li>
            <li className="text-[#FFFFFFCC]">• Legitimate interests (Art. 6(1)(f)), e.g., fraud prevention, analytics, service improvement</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h3 className="mb-4">4. Purposes of Processing</h3>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• To provide and improve our services</li>
            <li className="text-[#FFFFFFCC]">• To communicate with users</li>
            <li className="text-[#FFFFFFCC]">• To analyze usage patterns</li>
            <li className="text-[#FFFFFFCC]">• To ensure security and regulatory compliance</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h3 className="mb-4">5. Data Sharing & Disclosure</h3>
          <p className="text-[#FFFFFFCC] mb-4">We may share your personal data with:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Hosting, analytics, and communication service providers</li>
            <li className="text-[#FFFFFFCC]">• Legal authorities where required</li>
            <li className="text-[#FFFFFFCC]">• No sale of personal data occurs under any circumstances</li>
            <li className="text-[#FFFFFFCC]">• Data is only shared with proper contractual safeguards</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h3 className="mb-4">6. International Data Transfers</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            Data may be transferred to processors outside the EU/EEA. In such cases, we ensure protection via:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Standard Contractual Clauses (SCCs)</li>
            <li className="text-[#FFFFFFCC]">• Adequacy decisions under Article 45 GDPR</li>
            <li className="text-[#FFFFFFCC]">• Binding corporate rules (BCRs) where applicable</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h3 className="mb-4">7. Data Retention</h3>
          <p className="text-[#FFFFFFCC] mb-4">We retain your personal data:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• As long as necessary to fulfill the purposes stated</li>
            <li className="text-[#FFFFFFCC]">• Or as required under Estonian and EU legal retention obligations (e.g., accounting, tax)</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h3 className="mb-4">8. Your Rights under GDPR</h3>
          <p className="text-[#FFFFFFCC] mb-4">You have the right to:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Access your data (Art. 15 GDPR)</li>
            <li className="text-[#FFFFFFCC]">• Rectify inaccurate data (Art. 16)</li>
            <li className="text-[#FFFFFFCC]">• Erase your data ("right to be forgotten", Art. 17)</li>
            <li className="text-[#FFFFFFCC]">• Restrict or object to processing (Art. 18-21)</li>
            <li className="text-[#FFFFFFCC]">• Data portability (Art. 20)</li>
            <li className="text-[#FFFFFFCC]">• Withdraw consent at any time without affecting prior processing</li>
            <li className="text-[#FFFFFFCC]">• Lodge a complaint with a Data Protection Authority</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h3 className="mb-4">9. Supervisory Authority Contact</h3>
          <p className="text-[#FFFFFFCC]">
            You may contact the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon) at www.aki.ee
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h3 className="mb-4">10. Contact</h3>
          <p className="text-[#FFFFFFCC] mb-4">For privacy inquiries:</p>
          <div className="text-[#FFFFFFCC] space-y-1">
            <p>Email: contact@nuvia.me</p>
            <p>Address: Ahtri tn 12, Tallinn 15551, Estonia</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;