'use client'

import { useEffect, useState } from 'react'
import { HeartHandshake, Building2, X, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export type AuthMode = 'login' | 'signup'
type Profile = 'volunteer' | 'association'
type Step = 'choose' | 'form'

export function AuthModal({
  open,
  mode,
  onClose,
}: {
  open: boolean
  mode: AuthMode
  onClose: () => void
}) {
  const { t, dir } = useLanguage()
  const m = t.modal
  const [step, setStep] = useState<Step>('choose')
  const [profile, setProfile] = useState<Profile>('volunteer')
  const [currentMode, setCurrentMode] = useState<AuthMode>(mode)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (open) {
      setStep('choose')
      setDone(false)
      setCurrentMode(mode)
    }
  }, [open, mode])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft
  const isAssociation = profile === 'association'
  const accent = isAssociation ? 'text-coral' : 'text-teal'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-serif text-xl font-bold text-foreground">
            {step === 'choose'
              ? m.title
              : currentMode === 'login'
                ? m.loginTitle
                : m.signupTitle}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 'choose' ? (
            <>
              <p className="mb-6 text-sm text-muted-foreground">{m.subtitle}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <ProfileCard
                  active={profile === 'volunteer'}
                  onClick={() => setProfile('volunteer')}
                  icon={<HeartHandshake className="h-7 w-7" />}
                  title={m.volunteerTitle}
                  text={m.volunteerText}
                  tone="teal"
                />
                <ProfileCard
                  active={profile === 'association'}
                  onClick={() => setProfile('association')}
                  icon={<Building2 className="h-7 w-7" />}
                  title={m.associationTitle}
                  text={m.associationText}
                  tone="coral"
                />
              </div>
              <Button
                onClick={() => setStep('form')}
                className="mt-6 h-12 w-full rounded-xl bg-teal text-base text-primary-foreground hover:bg-teal/90 data-[assoc=true]:bg-coral data-[assoc=true]:hover:bg-coral/90"
                data-assoc={isAssociation}
              >
                {isAssociation ? m.continueAssociation : m.continueVolunteer}
              </Button>
            </>
          ) : done ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <p className="font-serif text-lg font-semibold text-foreground">
                {currentMode === 'login' ? m.loginTitle : m.signupTitle} —{' '}
                {isAssociation ? m.asAssociation : m.asVolunteer}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.contact.sent}
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setDone(true)
              }}
              className="space-y-4"
            >
              <p className={`text-sm font-medium ${accent}`}>
                {isAssociation ? m.asAssociation : m.asVolunteer}
              </p>

              {currentMode === 'signup' && (
                <Field
                  label={isAssociation ? m.orgName : m.fullName}
                  placeholder={
                    isAssociation ? m.orgNamePlaceholder : m.fullNamePlaceholder
                  }
                />
              )}
              <Field label={m.email} type="email" placeholder="you@example.com" />
              <Field label={m.password} type="password" placeholder="••••••••" />

              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-teal text-base text-primary-foreground hover:bg-teal/90 data-[assoc=true]:bg-coral data-[assoc=true]:hover:bg-coral/90"
                data-assoc={isAssociation}
              >
                {currentMode === 'login' ? m.submitLogin : m.submitSignup}
              </Button>

              <div className="flex items-center justify-between pt-1 text-sm">
                <button
                  type="button"
                  onClick={() => setStep('choose')}
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  <Back className="h-4 w-4" />
                  {m.back}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentMode(currentMode === 'login' ? 'signup' : 'login')
                  }
                  className="font-medium text-teal hover:underline"
                >
                  {currentMode === 'login' ? m.switchToSignup : m.switchToLogin}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function ProfileCard({
  active,
  onClick,
  icon,
  title,
  text,
  tone,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  title: string
  text: string
  tone: 'teal' | 'coral'
}) {
  const ring = tone === 'teal' ? 'border-teal ring-teal/30' : 'border-coral ring-coral/30'
  const badge = tone === 'teal' ? 'bg-teal/10 text-teal' : 'bg-coral/10 text-coral'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-start gap-3 rounded-2xl border-2 bg-card p-5 text-start transition-all hover:-translate-y-0.5 ${
        active ? `${ring} ring-4` : 'border-border'
      }`}
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${badge}`}>
        {icon}
      </span>
      <span className="font-serif text-base font-bold text-foreground">{title}</span>
      <span className="text-sm leading-relaxed text-muted-foreground">{text}</span>
    </button>
  )
}

function Field({
  label,
  type = 'text',
  placeholder,
}: {
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </label>
  )
}
