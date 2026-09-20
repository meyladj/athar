import React, { useState } from 'react';
import '../styles/association/calendar.css';

// Assets
import assocCalBanner from '../assets/assoc-cal-banner.png';
import assocCalMadagh from '../assets/assoc-cal-madagh.png';
import assocCalGhardaia from '../assets/assoc-cal-ghardaia.png';
import assocCalConstantine from '../assets/assoc-cal-constantine.png';
import assocCalTizi from '../assets/assoc-cal-tizi.png';

// Clean SVG Icons (zero emojis)
function IconChevronLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconCalendar({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconMapPin({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconUsers({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const UPCOMING_EVENTS_FR = [
  {
    id: 'ev-1',
    title: "Nettoyage de la plage d'Aïn El Turk",
    location: 'Oran',
    date: 'Sam. 12 avr. 2025',
    volunteers: '32 / 50',
    percent: 64,
    badge: 'Inscriptions ouvertes',
    badgeType: 'open',
    img: assocCalMadagh
  },
  {
    id: 'ev-2',
    title: 'Soutien scolaire à Ghardaïa',
    location: 'Ghardaïa',
    date: 'Mar. 15 avr. 2025',
    volunteers: '18 / 30',
    percent: 60,
    badge: "En cours d'organisation",
    badgeType: 'organizing',
    img: assocCalGhardaia
  },
  {
    id: 'ev-3',
    title: 'Reboisement – Djebel El Ouahch',
    location: 'Constantine',
    date: 'Sam. 26 avr. 2025',
    volunteers: '25 / 40',
    percent: 62,
    badge: 'Inscriptions ouvertes',
    badgeType: 'open',
    img: assocCalConstantine
  },
  {
    id: 'ev-4',
    title: 'Distribution de denrées aux familles',
    location: 'Tizi Ouzou',
    date: 'Mer. 30 avr. 2025',
    volunteers: '40 / 50',
    percent: 80,
    badge: 'Confirmation en cours',
    badgeType: 'open',
    img: assocCalTizi
  }
];

const UPCOMING_EVENTS_AR = [
  {
    id: 'ev-1',
    title: "تنظيف شاطئ عين الترك",
    location: 'وهران',
    date: 'السبت 12 أفريل 2025',
    volunteers: '32 / 50',
    percent: 64,
    badge: 'التسجيلات مفتوحة',
    badgeType: 'open',
    img: assocCalMadagh
  },
  {
    id: 'ev-2',
    title: 'دروس دعم مدرسي في غرداية',
    location: 'غرداية',
    date: 'الثلاثاء 15 أفريل 2025',
    volunteers: '18 / 30',
    percent: 60,
    badge: 'قيد التنظيم',
    badgeType: 'organizing',
    img: assocCalGhardaia
  },
  {
    id: 'ev-3',
    title: 'حملة تشجير – جبل الوحش',
    location: 'قسنطينة',
    date: 'السبت 26 أفريل 2025',
    volunteers: '25 / 40',
    percent: 62,
    badge: 'التسجيلات مفتوحة',
    badgeType: 'open',
    img: assocCalConstantine
  },
  {
    id: 'ev-4',
    title: 'توزيع الطرود الغذائية على العائلات',
    location: 'تيزي وزو',
    date: 'الأربعاء 30 أفريل 2025',
    volunteers: '40 / 50',
    percent: 80,
    badge: 'قيد التأكيد النهائي',
    badgeType: 'open',
    img: assocCalTizi
  }
];

export default function AssociationCalendar({ currentLang = 'fr' }) {
  const isAr = currentLang === 'ar';
  const upcomingEvents = isAr ? UPCOMING_EVENTS_AR : UPCOMING_EVENTS_FR;
  const weekdays = isAr 
    ? ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد']
    : ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const [viewMode, setViewMode] = useState('mois'); // 'mois' | 'semaine'
  const [selectedDay, setSelectedDay] = useState(12);

  const days = [
    { day: 31, isPrev: true },
    { day: 1 },
    { day: 2 },
    { day: 3, dots: ['#16a34a'] },
    { day: 4 },
    { day: 5, dots: ['#2563eb'] },
    { day: 6 },
    { day: 7 },
    { day: 8, dots: ['#2563eb'] },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12, highlight: true, dots: ['#16a34a', '#eab308', '#2563eb'] },
    { day: 13 },
    { day: 14 },
    { day: 15, dots: ['#eab308'] },
    { day: 16 },
    { day: 17 },
    { day: 18, dots: ['#ea580c'] },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22, dots: ['#16a34a'] },
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26, dots: ['#16a34a'] },
    { day: 27 },
    { day: 28, dots: ['#2563eb'] },
    { day: 29 },
    { day: 30, dots: ['#16a34a', '#2563eb'] }
  ];

  return (
    <div className="assoc-cal-root" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. CARTE BANNIÈRE DE BIENVENUE DU CALENDRIER */}
      <div
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          height: '190px',
          boxShadow: 'var(--assoc-shadow-xs)',
          border: '1px solid var(--assoc-border)'
        }}
      >
        <img
          src={assocCalBanner}
          alt={isAr ? "جدول المواعيد الميدانية" : "Bannière Calendrier"}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ffffff' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 6px', color: '#ffffff' }}>
            {isAr ? 'جدول المبادرات والفعاليات الميدانية' : 'Calendrier des interventions & événements'}
          </h1>
          <p style={{ fontSize: '14px', color: '#e2e8f0', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
            {isAr
              ? 'تخطيط وتنسيق المبادرات التطوعية على الميدان، حشد الطاقات ومتابعة الجداول الزمنية بدقة.'
              : 'Planifiez vos missions sur le terrain, mobilisez les équipes et assurez un suivi temporel rigoureux.'}
          </p>
        </div>
      </div>

      {/* 2. GRILLE DEUX COLONNES */}
      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '26px', alignItems: 'start' }}>
        {/* COLONNE GAUCHE : CALENDRIER & MISSIONS DU MOIS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Carte Calendrier */}
          <div className="assoc-cal-card">
            {/* Contrôles d'en-tête */}
            <div className="assoc-cal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button type="button" className="assoc-cal-nav-btn">
                  <IconChevronLeft className="w-4 h-4" />
                </button>
                <h2 className="assoc-cal-month-title">{isAr ? 'أفريل 2025' : 'Avril 2025'}</h2>
                <button type="button" className="assoc-cal-nav-btn">
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  style={{
                    padding: '7px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--assoc-border)',
                    background: '#ffffff',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: 'var(--assoc-text-body)',
                    cursor: 'pointer'
                  }}
                >
                  {isAr ? 'اليوم' : "Aujourd'hui"}
                </button>

                <div style={{ display: 'flex', background: 'var(--assoc-bg-subtle)', borderRadius: '10px', padding: '3px' }}>
                  <button
                    type="button"
                    onClick={() => setViewMode('mois')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: viewMode === 'mois' ? 'var(--assoc-emerald)' : 'transparent',
                      color: viewMode === 'mois' ? '#ffffff' : 'var(--assoc-text-muted)',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {isAr ? 'شهر' : 'Mois'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('semaine')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: viewMode === 'semaine' ? 'var(--assoc-emerald)' : 'transparent',
                      color: viewMode === 'semaine' ? '#ffffff' : 'var(--assoc-text-muted)',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {isAr ? 'أسبوع' : 'Semaine'}
                  </button>
                </div>
              </div>
            </div>

            {/* Jours de la semaine */}
            <div className="assoc-cal-weekdays">
              {weekdays.map((d, idx) => (
                <div key={idx} className="assoc-cal-weekday">
                  {d}
                </div>
              ))}
            </div>

            {/* Grille des jours */}
            <div className="assoc-cal-days-grid">
              {days.map((item, idx) => {
                const isSelected = selectedDay === item.day && !item.isPrev;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!item.isPrev) setSelectedDay(item.day);
                    }}
                    className={`assoc-cal-day-cell ${item.isPrev ? 'other-month' : ''} ${item.highlight ? 'today' : ''}`}
                    style={isSelected ? { borderColor: 'var(--assoc-emerald)', backgroundColor: 'var(--assoc-emerald-tint)' } : {}}
                  >
                    <span className="assoc-cal-day-num">{item.day}</span>
                    {item.dots && (
                      <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                        {item.dots.map((dotColor, dIdx) => (
                          <span
                            key={dIdx}
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: dotColor
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Légende thématique */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--assoc-border-subtle)', fontSize: '12px', fontWeight: 600, color: 'var(--assoc-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16a34a' }} />
                <span>{isAr ? 'بيئة وتشجير' : 'Environnement'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                <span>{isAr ? 'تضامن وإغاثة' : 'Solidarité & Social'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2563eb' }} />
                <span>{isAr ? 'تعليم وتكوين' : 'Éducation'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ea580c' }} />
                <span>{isAr ? 'صحة وإسعاف' : 'Santé'}</span>
              </div>
            </div>
          </div>

          {/* Missions publiées ce mois-ci */}
          <div className="assoc-cal-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)', margin: 0 }}>
                {isAr ? 'المبادرات المنشورة لشهر أفريل 2025' : 'Missions publiées pour avril 2025'}
              </h3>
              <span style={{ fontSize: '12.5px', color: 'var(--assoc-emerald)', fontWeight: 700, cursor: 'pointer' }}>
                {isAr ? 'عرض الكل ←' : 'Voir tout →'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {upcomingEvents.map((ev) => (
                <div
                  key={ev.id}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '14px',
                    border: '1px solid var(--assoc-border)',
                    backgroundColor: 'var(--assoc-bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                    <img src={ev.img} alt={ev.title} style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--assoc-text-primary)', margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {ev.title}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--assoc-text-muted)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <IconMapPin className="w-3 h-3" />
                          <span>{ev.location}</span>
                        </span>
                        <span>·</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <IconCalendar className="w-3 h-3" />
                          <span>{ev.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: isAr ? 'left' : 'right', flexShrink: 0, width: '130px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--assoc-text-body)' }}>{ev.volunteers} ({ev.percent}%)</div>
                    <div style={{ width: '100%', height: '6px', borderRadius: '999px', backgroundColor: '#e2e8f0', overflow: 'hidden', marginTop: '4px' }}>
                      <div style={{ height: '100%', backgroundColor: 'var(--assoc-emerald)', width: `${ev.percent}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : ÉVÉNEMENTS À VENIR & RÉCAPITULATIF */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="assoc-cal-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)', margin: 0 }}>
                {isAr ? 'المحطات اللوجستية القادمة' : 'Prochaines étapes logistiques'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--assoc-border-subtle)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#16a34a', marginTop: '5px', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--assoc-text-primary)', display: 'block' }}>
                    {isAr ? '12 أفريل 2025 · شاطئ عين الترك وهران' : "12 avr. 2025 · Plage d'Aïn El Turk"}
                  </strong>
                  <small style={{ fontSize: '12px', color: 'var(--assoc-text-muted)' }}>
                    {isAr ? 'التجمع على 08:30 صباحاً لتوزيع العتاد وأكياس الفرز.' : 'Rassemblement à 08h30 pour distribution du matériel et des sacs de tri.'}
                  </small>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--assoc-border-subtle)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb', marginTop: '5px', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--assoc-text-primary)', display: 'block' }}>
                    {isAr ? '15 أفريل 2025 · دعم مدرسي في غرداية' : '15 avr. 2025 · Soutien scolaire à Ghardaïa'}
                  </strong>
                  <small style={{ fontSize: '12px', color: 'var(--assoc-text-muted)' }}>
                    {isAr ? 'المصادقة النهائية على البطاقات البيداغوجية مع المتطوعين.' : 'Validation finale des fiches pédagogiques avec les tuteurs bénévoles.'}
                  </small>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#16a34a', marginTop: '5px', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--assoc-text-primary)', display: 'block' }}>
                    {isAr ? '26 أفريل 2025 · جبل الوحش قسنطينة' : '26 avr. 2025 · Djebel El Ouahch Constantine'}
                  </strong>
                  <small style={{ fontSize: '12px', color: 'var(--assoc-text-muted)' }}>
                    {isAr ? 'استلام 1 000 شتلة شجرية من المشتلة الولائية.' : 'Livraison des 1 000 jeunes plants d\'arbres par la pépinière.'}
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Vue d'ensemble chiffrée */}
          <div className="assoc-cal-card">
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 16px' }}>
              {isAr ? 'إحصائيات الشهر' : 'Statistiques mensuelles'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ padding: '14px', background: 'var(--assoc-bg-subtle)', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--assoc-navy)' }}>8</div>
                <div style={{ fontSize: '11px', color: 'var(--assoc-text-muted)', fontWeight: 600 }}>
                  {isAr ? 'فعاليات هذا الشهر' : 'Événements ce mois'}
                </div>
              </div>
              <div style={{ padding: '14px', background: 'var(--assoc-bg-subtle)', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--assoc-navy)' }}>215</div>
                <div style={{ fontSize: '11px', color: 'var(--assoc-text-muted)', fontWeight: 600 }}>
                  {isAr ? 'متطوعاً مجنداً' : 'Bénévoles mobilisés'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
