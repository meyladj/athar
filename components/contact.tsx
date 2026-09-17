'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Globe, Send, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {c.subtitle}
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow icon={<Mail className="h-5 w-5" />} text="hello@athar.dz" />
            <ContactRow icon={<Phone className="h-5 w-5" />} text="+213 23 45 67 89" />
            <ContactRow
              icon={<MapPin className="h-5 w-5" />}
              text="Alger, Algérie"
            />
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-foreground">{c.reachUs}</p>
            <div className="flex gap-3">
              {[Globe, Send, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground transition-colors hover:bg-teal hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="space-y-4"
        >
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-foreground">
              {c.name}
            </span>
            <input
              required
              placeholder={c.namePlaceholder}
              className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-foreground">
              {c.email}
            </span>
            <input
              required
              type="email"
              placeholder={c.emailPlaceholder}
              className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-foreground">
              {c.message}
            </span>
            <textarea
              required
              rows={4}
              placeholder={c.messagePlaceholder}
              className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </label>
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-teal text-base text-primary-foreground hover:bg-teal/90"
          >
            {c.send}
          </Button>
          {sent && (
            <p className="rounded-xl bg-teal/10 px-4 py-3 text-center text-sm font-medium text-teal">
              {c.sent}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function ContactRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
        {icon}
      </span>
      <span className="text-sm text-foreground">{text}</span>
    </div>
  )
}
