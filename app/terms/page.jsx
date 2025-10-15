'use client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const TermsAndConditions = () => {
  const t = useTranslations('Terms');

  return (
    <div className="min-h-screen bg-[#0F1419] text-white">
      {/* Back Button */}
      <div className="px-6 lg:px-12 pt-8">
        <Link href="/" className="inline-flex items-center text-white hover:text-slate-300 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('back')}
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 max-w-4xl mx-auto lg:px-12 py-12">
        <h3 className=" mb-8">{t('title')}</h3>

        {/* Header Info */}
        <div className="mb-12 space-y-4">
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">{t('effectiveDate')}</p>
            <p className="text-[#FFFFFFCC]">{t('effectiveDateValue')}</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">{t('company')}</p>
            <p className="text-[#FFFFFFCC]">{t('companyValue')}</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">{t('registrationNumber')}</p>
            <p className="text-[#FFFFFFCC]">{t('registrationNumberValue')}</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC] font-semibold">{t('registeredAddress')}</p>
            <p className="text-[#FFFFFFCC]">{t('registeredAddressValue')}</p>
          </div>
        </div>

        <p className="text-[#FFFFFFCC] mb-12">
          {t('intro')}
        </p>

        {/* Section 1 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section1.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section1.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section1.paragraph2')}
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section2.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section2.intro')}
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section2.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item4')}</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section3.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section3.intro')}
          </p>
          
          <p className="text-[#FFFFFFCC] font-semibold mb-3">{t('section3.characteristicsTitle')}</p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• {t('section3.characteristic1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.characteristic2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.characteristic3')}</li>
          </ul>

          <p className="text-[#FFFFFFCC] font-semibold mb-3">{t('section3.protectionsTitle')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section3.protection1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.protection2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.protection3')}</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section4.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section4.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section4.paragraph2')}
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section5.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section5.intro')}</p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• {t('section5.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section5.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section5.item3')}</li>
          </ul>
          <p className="text-[#FFFFFFCC]">
            {t('section5.paragraph')}
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section6.title')}</h3>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section6.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section6.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section6.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section6.item4')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section6.item5')}</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section7.title')}</h3>
          <p className="text-[#FFFFFFCC]">
            {t('section7.paragraph')}
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section8.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section8.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section8.paragraph2')}
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section9.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section9.intro')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section9.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section9.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section9.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section9.item4')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section9.item5')}</li>
          </ul>
          <p className="text-[#FFFFFFCC] mt-4">
            {t('section9.conclusion')}
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section10.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section10.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section10.paragraph2')}
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section11.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section11.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section11.paragraph2')}
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section12.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section12.intro')}
          </p>
          <ul className="space-y-2 ml-6 mb-4">
            <li className="text-[#FFFFFFCC]">• {t('section12.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section12.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section12.item3')}</li>
          </ul>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section12.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section12.paragraph2')}
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section13.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section13.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section13.paragraph2')}
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section14.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section14.paragraph1')}
          </p>
          <p className="text-[#FFFFFFCC]">
            {t('section14.paragraph2')}
          </p>
        </section>

        {/* Section 15 */}
        <section className="mb-12">
          <h3 className=" mb-4">{t('section15.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section15.intro')}</p>
          <div className="text-[#FFFFFFCC] space-y-1">
            <p>{t('section15.companyName')}</p>
            <p>{t('section15.address')}</p>
            <p>{t('section15.email')}</p>
            <p className="mt-4">{t('section15.copyright')}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;