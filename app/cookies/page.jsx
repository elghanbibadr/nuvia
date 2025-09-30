import React from 'react';
import Link from 'next/link';

const CookiesPolicy = () => {
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
        <h3 className="mb-8">Cookies Policy – NÜVIA OÜ (ePrivacy & GDPR Compliant)</h3>

        {/* Header Info */}
        <div className="mb-12 space-y-4">
          <div>
            <p className="text-[#FFFFFFCC]">Effective Date:</p>
            <p className="text-[#FFFFFFCC]">22 September 2025</p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h3 className="mb-4">1. What Are Cookies?</h3>
          <p className="text-[#FFFFFFCC]">
            Cookies are small text files stored on your device when you visit a website. They help us improve functionality, remember user preferences, and collect analytical/performance data.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h3 className="mb-4">2. Types of Cookies Used</h3>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Essential cookies: required for basic functionality</li>
            <li className="text-[#FFFFFFCC]">• Functional cookies: remember user preferences</li>
            <li className="text-[#FFFFFFCC]">• Performance cookies: measure website performance</li>
            <li className="text-[#FFFFFFCC]">• Analytics/Advertising cookies: track user activity for analytics and advertising purposes</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h3 className="mb-4">3. Lawful Use of Cookies</h3>
          <p className="text-[#FFFFFFCC] mb-4">We comply with:</p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• Directive 2002/58/EC (ePrivacy Directive)</li>
            <li className="text-[#FFFFFFCC]">• GDPR Article 6 and Article 7</li>
          </ul>
          <p className="text-[#FFFFFFCC]">
            Non-essential cookies are only placed after obtaining your clear, informed, and freely given consent via a cookie banner.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h3 className="mb-4">4. Managing Cookies</h3>
          <p className="text-[#FFFFFFCC] mb-4">You may control your cookie preferences:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Via our cookie banner</li>
            <li className="text-[#FFFFFFCC]">• Through your browser settings</li>
            <li className="text-[#FFFFFFCC]">• By withdrawing consent at any time</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h3 className="mb-4">5. Third-Party Cookies</h3>
          <p className="text-[#FFFFFFCC]">
            We may use third-party services (e.g., Google Analytics). These providers may place cookies subject to their own privacy policies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h3 className="mb-4">6. Contact</h3>
          <p className="text-[#FFFFFFCC] mb-4">For questions about cookie usage:</p>
          <div className="text-[#FFFFFFCC] space-y-1">
            <p>Email: contact@nuvia.me</p>
            <p>Address: Ahtri tn 12, Tallinn 15551, Estonia</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;