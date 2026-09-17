'use client'

import { useState } from 'react'
import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { Activities } from '@/components/activities'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { AuthModal, type AuthMode } from '@/components/auth-modal'

export function AtharLanding() {
  const [auth, setAuth] = useState<{ open: boolean; mode: AuthMode }>({
    open: false,
    mode: 'login',
  })

  const openAuth = (mode: AuthMode) => setAuth({ open: true, mode })
  const closeAuth = () => setAuth((a) => ({ ...a, open: false }))

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader onAuth={openAuth} />
        <main className="flex-1">
          <Hero onAuth={openAuth} />
          <Stats />
          <Activities />
          <Contact />
        </main>
        <SiteFooter />
      </div>
      <AuthModal open={auth.open} mode={auth.mode} onClose={closeAuth} />
    </LanguageProvider>
  )
}
