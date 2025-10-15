import React from 'react'
import Card from './Card'
import Image from 'next/image'
import priceMonitoring from "@/public/priceMonitoring.svg"
import { useTranslations } from 'next-intl'

const DynamicPriceMonitoring = () => {
  const t = useTranslations('AIFeatures.priceMonitoring');
  
  return (
    <Card className="dark-gradient2">
      <h4>{t('title')}</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
        {t('description')}
      </p>
      <Image className='mx-auto mt-10' src={priceMonitoring} height={300} width={300} alt={t('title')} />
    </Card>
  )
}

export default DynamicPriceMonitoring