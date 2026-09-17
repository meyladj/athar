'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/components/language-provider'
import type { AuthMode } from '@/components/auth-modal'

export function SiteHeader({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  const { t, lang, setLang } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.missions, href: '#activities' },
    { label: t.nav.associations, href: '#stats' },
    { label: t.nav.about, href: '#activities' },
    { label: t.nav.blog, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="ATHAR home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangSwitcher lang={lang} setLang={setLang} />
          <div className="hidden items-center gap-2 sm:flex">
            <Button
              variant="ghost"
              onClick={() => onAuth('login')}
              className="rounded-xl text-foreground hover:bg-foreground/5 hover:text-foreground"
            >
              {t.nav.login}
            </Button>
            <Button
              onClick={() => onAuth('signup')}
              className="rounded-xl bg-teal text-primary-foreground hover:bg-teal/90"
            >
              {t.nav.signup}
            </Button>
          </div>
          <button
            className="rounded-xl p-2 text-foreground lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setMobileOpen(false)
                onAuth('login')
              }}
              className="flex-1 rounded-xl border-border text-foreground"
            >
              {t.nav.login}
            </Button>
            <Button
              onClick={() => {
                setMobileOpen(false)
                onAuth('signup')
              }}
              className="flex-1 rounded-xl bg-teal text-primary-foreground hover:bg-teal/90"
            >
              {t.nav.signup}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-teal"
    >
      {mounted && isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}

function LangSwitcher({
  lang,
  setLang,
}: {
  lang: 'en' | 'ar'
  setLang: (l: 'en' | 'ar') => void
}) {
  return (
    <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
      <button
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === 'en' ? 'bg-navy text-white' : 'text-foreground/60 hover:text-foreground'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLang('ar')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === 'ar' ? 'bg-navy text-white' : 'text-foreground/60 hover:text-foreground'
        }`}
        aria-pressed={lang === 'ar'}
      >
        AR
      </button>
    </div>
  )
}
