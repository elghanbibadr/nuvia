import React from 'react'
import Card from './Card'
import RecommandationIcon from "@/public/RecommandationIcon.svg"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const RecommandationCard = () => {
  const t = useTranslations('AIFeatures.recommendations');
  
  return (
    <Card className="dark-gradient2">
      <h4>{t('title')}</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
        {t('description')}
      </p>
      <Image className='mx-auto' src={RecommandationIcon} height={300} width={300} alt={t('title')} />
    </Card>
  )
}

export default RecommandationCard