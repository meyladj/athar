'use client'

import { Logo } from '@/components/logo'
import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer
  const n = t.nav

  const columns = [
    { title: f.explore, links: [n.home, n.missions, n.associations] },
    { title: f.company, links: [n.about, n.blog, t.contact.title] },
    { title: f.legal, links: [f.privacy, f.terms] },
  ]

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-flex rounded-xl bg-white/95 px-3 py-2">
              <Logo />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {f.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} ATHAR · {f.rights}
        </div>
      </div>
    </footer>
  )
}
