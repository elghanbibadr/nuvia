import React from 'react';
import Link from 'next/link';

const TermsAndConditions = () => {
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
        <h3 className=" mb-8">Terms & Conditions for NÜVIA OÜ</h3>

        {/* Header Info */}
        <div className="mb-12 space-y-4">
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">Effective Date:</p>
            <p className="text-[#FFFFFFCC]">22 September 2025</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">Company:</p>
            <p className="text-[#FFFFFFCC]">NÜVIA OÜ ("NÜVIA", "we", "us", "our")</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">Registration Number:</p>
            <p className="text-[#FFFFFFCC]">17301668</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">Registered Address:</p>
            <p className="text-[#FFFFFFCC]">Ahtri tn 12, Tallinn, Estonia, 15551</p>
          </div>
        </div>

        <p className="text-[#FFFFFFCC] mb-12">
          This document, along with our Privacy Policy and Cookie Policy, governs the use of all digital services, platforms, and travel arrangements offered by NÜVIA OÜ, in accordance with EU laws and GDPR compliance.
        </p>

        {/* Section 1 */}
        <section className="mb-12">
          <h3 className=" mb-4">1. Acceptance of Terms</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            These Terms and Conditions ("Terms") govern your access to and use of all digital platforms, applications, and travel services provided by NÜVIA. By accessing or using any of our services, you agree to these Terms. If you do not agree, do not use our services.
          </p>
          <p className="text-[#FFFFFFCC]">
            This contract is concluded electronically and becomes legally binding upon your use of our services, as per EU Regulation (EU) No 910/2014 on electronic identification and trust services (eIDAS).
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h3 className=" mb-4">2. Our Services</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            NÜVIA is a travel technology platform based in Estonia, operating under EU consumer protection and digital services laws. We assist users in planning, customizing, and booking travel services. Our offerings include:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• AI-powered planning and trip generation based on user preferences.</li>
            <li className="text-[#FFFFFFCC]">• Booking of travel services (flights, accommodations, insurance, transfers, excursions) provided by third parties.</li>
            <li className="text-[#FFFFFFCC]">• Centralized access to travel documents and itinerary management.</li>
            <li className="text-[#FFFFFFCC]">• Service aggregation and optional integration into Linked Travel Arrangements (LTAs).</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h3 className=" mb-4">3. Linked Travel Arrangements (LTA)</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            As per Directive (EU) 2015/2302, some bookings made on our platform may constitute Linked Travel Arrangements (LTA), which are not package holidays.
          </p>
          
          <p className="text-[#FFFFFFCC] font-semibold mb-3">Characteristics of an LTA:</p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• You purchase at least two different travel services (e.g., hotel and flight) for the same trip.</li>
            <li className="text-[#FFFFFFCC]">• Services are booked under separate contracts.</li>
            <li className="text-[#FFFFFFCC]">• NÜVIA facilitates the booking of the second service within 24 hours via a targeted interface.</li>
          </ul>

          <p className="text-[#FFFFFFCC] font-semibold mb-3">Consumer Protections:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Limited insolvency protection applies to the travel services directly booked through NÜVIA.</li>
            <li className="text-[#FFFFFFCC]">• You will be informed at checkout whether your combination constitutes an LTA.</li>
            <li className="text-[#FFFFFFCC]">• LTAs do not offer the same rights to modification, refunds, or assistance as package holidays.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h3 className=" mb-4">4. User Eligibility</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            You must be at least 18 years old and have legal capacity under applicable national laws to use our services.
          </p>
          <p className="text-[#FFFFFFCC]">
            Under EU consumer law (Directive 2011/83/EU), minors may use the service only with the verifiable consent of a parent or legal guardian.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h3 className=" mb-4">5. Account and Security</h3>
          <p className="text-[#FFFFFFCC] mb-4">You are responsible for:</p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• Providing accurate and complete registration data.</li>
            <li className="text-[#FFFFFFCC]">• Securing your credentials.</li>
            <li className="text-[#FFFFFFCC]">• Notifying us of unauthorized access.</li>
          </ul>
          <p className="text-[#FFFFFFCC]">
            You are liable for all actions conducted under your account unless proven otherwise under applicable security provisions (e.g., GDPR Article 32).
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h3 className=" mb-4">6. Booking and Payment</h3>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Prices and availability are subject to change until your booking is confirmed.</li>
            <li className="text-[#FFFFFFCC]">• Charges may include applicable VAT, duties, or surcharges under Council Directive 2006/112/EC.</li>
            <li className="text-[#FFFFFFCC]">• Payments are processed via compliant third-party providers (e.g., Stripe, Adyen) and protected via SSL encryption.</li>
            <li className="text-[#FFFFFFCC]">• In case of LTAs, each travel service is subject to the payment terms of its provider.</li>
            <li className="text-[#FFFFFFCC]">• Currency conversion fees may apply depending on your bank or card issuer.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h3 className=" mb-4">7. Cancellations and Modifications</h3>
          <p className="text-[#FFFFFFCC]">
            Each service provider defines their own cancellation and refund policy. Under EU law (Directive 2011/83/EU), your right of withdrawal may not apply to time-specific travel services or to flights and hotels with individual terms. Review each individual terms before confirming your booking.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h3 className=" mb-4">8. Travel Documents and Requirements</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            You are solely responsible for ensuring that you meet entry and exit requirements for all countries you visit, including passports, visas, vaccination proofs, and insurance.
          </p>
          <p className="text-[#FFFFFFCC]">
            NÜVIA is not responsible for denied boarding, visa refusals, or other administrative decisions by border or airline authorities. We may assist by offering relevant information platform-based services.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h3 className=" mb-4">9. Platform Use and Conduct</h3>
          <p className="text-[#FFFFFFCC] mb-4">You agree not to:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• Violate applicable EU or national laws.</li>
            <li className="text-[#FFFFFFCC]">• Infringe on third-party intellectual property rights.</li>
            <li className="text-[#FFFFFFCC]">• Use bots, scrapers, or automated systems without prior authorization.</li>
            <li className="text-[#FFFFFFCC]">• Upload or transmit malicious software.</li>
            <li className="text-[#FFFFFFCC]">• Attempt to interfere with service operation or infrastructure.</li>
          </ul>
          <p className="text-[#FFFFFFCC] mt-4">
            Violation may lead to account suspension or permanent termination of your access.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h3 className=" mb-4">10. Intellectual Property</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            All trademarks, software, design, and content are the intellectual property of NÜVIA OÜ or its licensors and are protected under the Estonian Copyright Act and EU Intellectual Property directives (e.g., Directive 2001/29/EC).
          </p>
          <p className="text-[#FFFFFFCC]">
            Unauthorized reproduction or commercial use is prohibited.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h3 className=" mb-4">11. Third-party Services and Liability</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            NÜVIA facilitates access to third-party services but does not act as an agent or principal in those services, unless expressly stated.
          </p>
          <p className="text-[#FFFFFFCC]">
            Disputes, refunds, or performance claims must be directed to the relevant service provider in line with Regulation (EC) No 261/2004 (for flights) or applicable national contract laws.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <h3 className=" mb-4">12. Limitation of Liability</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            To the maximum extent permitted by EU and Estonian law, NÜVIA shall not be liable for:
          </p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• Indirect profits, reputational or consequential damages.</li>
            <li className="text-[#FFFFFFCC]">• Delays or failures caused by third-party providers or force majeure.</li>
            <li className="text-[#FFFFFFCC]">• Loss of data or access disruptions beyond our control.</li>
          </ul>
          <p className="text-[#FFFFFFCC] mb-4">
            Our liability for claims related to our services is capped at the total amount paid by you in the past 12 months.
          </p>
          <p className="text-[#FFFFFFCC]">
            This clause does not limit liability for death or personal injury caused by negligence, fraud, or breach of mandatory consumer protections.
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-12">
          <h3 className=" mb-4">13. Changes to the Terms</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            We reserve the right to amend these Terms in line with changes to applicable legislation or our services. Material changes will be communicated via email or in-app notification at least 14 days prior to taking effect.
          </p>
          <p className="text-[#FFFFFFCC]">
            Continued use of our services after the effective date will constitute acceptance.
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-12">
          <h3 className=" mb-4">14. Governing Law</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            These Terms shall be governed by and interpreted in accordance with the laws of the Republic of Estonia and applicable European Union law.
          </p>
          <p className="text-[#FFFFFFCC]">
            Consumers residing in other EU countries may also benefit from additional protections under their national consumer laws.
          </p>
        </section>

        {/* Section 15 */}
        <section className="mb-12">
          <h3 className=" mb-4">15. Contact Us</h3>
          <p className="text-[#FFFFFFCC] mb-4">Legal address for communication:</p>
          <div className="text-[#FFFFFFCC] space-y-1">
            <p>NÜVIA OÜ</p>
            <p>Ahtri tn 12, Tallinn, Estonia, 15551</p>
            <p>Email: support@nuvia.me</p>
            <p className="mt-4">© 2025 NÜVIA OÜ. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;