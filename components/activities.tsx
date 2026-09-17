'use client'

import { HandHeart, GraduationCap, Leaf, HeartPulse } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const config = [
  { Icon: HandHeart, tone: 'teal' },
  { Icon: GraduationCap, tone: 'navy' },
  { Icon: Leaf, tone: 'gold' },
  { Icon: HeartPulse, tone: 'coral' },
] as const

const toneMap: Record<string, string> = {
  teal: 'from-teal/15 to-teal/5 text-teal',
  navy: 'from-navy/15 to-navy/5 text-foreground',
  gold: 'from-gold/20 to-gold/5 text-gold',
  coral: 'from-coral/15 to-coral/5 text-coral',
}

export function Activities() {
  const { t } = useLanguage()
  const a = t.activities

  return (
    <section id="activities" className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {a.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {a.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.items.map((item, i) => {
            const { Icon, tone } = config[i]
            return (
              <article
                key={item.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${toneMap[tone]}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
