'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

export function Logo({
  showWordmark = true,
  className = '',
}: {
  showWordmark?: boolean
  className?: string
}) {
  const { lang } = useLanguage()

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="inline-flex items-center justify-center rounded-xl dark:bg-white/95 dark:p-1 dark:shadow-sm">
        <Image
          src="/images/athar-logo.png"
          alt={lang === 'ar' ? 'شعار أثر' : 'ATHAR logo'}
          width={72}
          height={72}
          priority
          className="h-14 w-14 object-contain"
        />
      </span>
      {showWordmark && lang === 'ar' && (
        <span className="font-serif text-2xl font-bold tracking-wide text-foreground">
          أثر
        </span>
      )}
    </span>
  )
}
