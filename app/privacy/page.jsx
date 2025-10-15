'use client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const PrivacyPolicy = () => {
  const t = useTranslations('Privacy');

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
        <h3 className="mb-8">{t('title')}</h3>

        {/* Header Info */}
        <div className="mb-12 space-y-4">
          <div>
            <p className="text-[#FFFFFFCC]">{t('effectiveDate')}</p>
            <p className="text-[#FFFFFFCC]">{t('effectiveDateValue')}</p>
          </div>
          
          <div>
            <p className="text-[#FFFFFFCC]">{t('dataController')}</p>
            <p className="text-[#FFFFFFCC]">{t('dataControllerValue')}</p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section1.title')}</h3>
          <p className="text-[#FFFFFFCC]">
            {t('section1.paragraph')}
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section2.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section2.intro')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section2.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item4')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section2.item5')}</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section3.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section3.intro')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section3.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section3.item4')}</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section4.title')}</h3>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section4.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section4.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section4.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section4.item4')}</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section5.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section5.intro')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section5.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section5.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section5.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section5.item4')}</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section6.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">
            {t('section6.intro')}
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section6.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section6.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section6.item3')}</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section7.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section7.intro')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section7.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section7.item2')}</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section8.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section8.intro')}</p>
          <ul className="space-y-2 ml-6">
            <li className="text-[#FFFFFFCC]">• {t('section8.item1')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section8.item2')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section8.item3')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section8.item4')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section8.item5')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section8.item6')}</li>
            <li className="text-[#FFFFFFCC]">• {t('section8.item7')}</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section9.title')}</h3>
          <p className="text-[#FFFFFFCC]">
            {t('section9.paragraph')}
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h3 className="mb-4">{t('section10.title')}</h3>
          <p className="text-[#FFFFFFCC] mb-4">{t('section10.intro')}</p>
          <div className="text-[#FFFFFFCC] space-y-1">
            <p>{t('section10.email')}</p>
            <p>{t('section10.address')}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;