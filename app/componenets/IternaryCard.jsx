import React from 'react'
import Card from './Card'
import Image from 'next/image'
import iternaryIcon from "@/public/iternary.svg"
import { useTranslations } from 'next-intl'

const IternaryCard = () => {
  const t = useTranslations('AIFeatures.itinerary');
  
  return (
    <Card className="dark-gradient2 h-full" >
      <h4>{t('title')}</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
        {t('description')}
      </p>
      <Image className='mx-auto' src={iternaryIcon} height={300} width={300} alt={t('title')} />
    </Card>
  )
}

export default IternaryCard