'use client'

import Image from 'next/image'
import { HeartHandshake, Building2, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import type { AuthMode } from '@/components/auth-modal'

export function Hero({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  const { t, dir } = useLanguage()
  const h = t.hero
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 start-[-6rem] h-72 w-72 rounded-full bg-coral/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {h.badge}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            {h.titleLine1}
            <br />
            <span className="text-teal">{h.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {h.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() => onAuth('signup')}
              className="group h-13 rounded-2xl bg-teal px-7 py-6 text-base text-primary-foreground shadow-lg shadow-teal/20 hover:bg-teal/90"
            >
              <HeartHandshake className="me-1 h-5 w-5" />
              {h.ctaVolunteer}
              <Arrow className="ms-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </Button>
            <Button
              onClick={() => onAuth('signup')}
              variant="outline"
              className="h-13 rounded-2xl border-2 border-border px-7 py-6 text-base text-foreground hover:border-coral hover:bg-coral/5 hover:text-foreground"
            >
              <Building2 className="me-1 h-5 w-5 text-coral" />
              {h.ctaAssociation}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-2xl">
            <Image
              src="/images/athar-hero.png"
              alt={h.imageAlt}
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 start-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur rtl:translate-x-1/2">
            <p className="mb-3 text-center text-sm font-semibold text-foreground">
              {h.floatingTitle}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onAuth('signup')}
                className="flex items-center gap-2 rounded-xl bg-teal/8 px-3 py-2.5 text-start transition-colors hover:bg-teal/15"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/15 text-teal">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {h.floatingVolunteer}
                </span>
              </button>
              <button
                onClick={() => onAuth('signup')}
                className="flex items-center gap-2 rounded-xl bg-coral/8 px-3 py-2.5 text-start transition-colors hover:bg-coral/15"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-coral/15 text-coral">
                  <Building2 className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {h.floatingAssociation}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
