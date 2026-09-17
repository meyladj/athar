'use client'

import { Users, Building2, ClipboardList, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Users, Building2, ClipboardList, MapPin]

export function Stats() {
  const { t } = useLanguage()
  const s = t.stats

  return (
    <section id="stats" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
          {s.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{s.subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {s.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-transform hover:-translate-y-1"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/15 to-gold/15 text-teal">
                <Icon className="h-6 w-6" />
              </span>
              <div className="font-serif text-3xl font-bold text-foreground">
                {item.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
