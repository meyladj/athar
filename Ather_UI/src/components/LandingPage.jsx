import React from 'react';
import logoImg from '../assets/logo.png';
import heroBgImg from '../assets/athar-hero.png';
import panoramicImg from '../assets/algeria-panoramic.jpg';
import YouthSolidarityCorps from './YouthSolidarityCorps';
import ExploreThematicMagazine from './ExploreThematicMagazine';
import LiveCommunityFeed from './LiveCommunityFeed';
import BloodDonationCenter from './BloodDonationCenter';
import TraceabilityLedger from './TraceabilityLedger';


function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconShieldCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function IconMapPin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconCalendar({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}

function IconUsers({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconDroplet({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  );
}

function IconMail({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}


export default function LandingPage({
  currentLang = 'fr',
  setCurrentLang,
  t,
  volunteerUser,
  openLogin,
  openSignup,
  showToast,
  LanguageDropdown
}) {
  return (
        <>
          {/* HEADER */}
          <header>
            <div className="wrap">
              <nav className="nav">
                <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <img
                    src={logoImg}
                    alt="Athar Platform أثر"
                    style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>

                <div className="menu">
                  <a
                    href="#accueil"
                    className="active"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('accueil');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {t('navHome')}
                  </a>
                  <a
                    href="#missions"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('missions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navMissions')}
                  </a>
                  <a
                    href="#corps-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('corps-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navCorps')}
                  </a>
                  <a
                    href="#explore-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('explore-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navExplore')}
                  </a>
                  <a
                    href="#feed-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('feed-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navPulse')}
                  </a>
                  <a
                    href="#blood-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('blood-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navBlood')}
                  </a>
                  <a
                    href="#traceability-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('traceability-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navTrace')}
                  </a>
                  <a
                    href="#associations-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('associations-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navAssociations')}
                  </a>
                  <a
                    href="#stats-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('stats-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('navVolunteers')}
                  </a>
                </div>

            <div className="right">
              <div
                className="icon-btn"
                title={t('navSearch')}
                onClick={() => showToast(currentLang === 'ar' ? "البحث سيكون متاحاً قريباً!" : "Recherche bientôt disponible !")}
              >
                <IconSearch className="w-4 h-4" />
              </div>

              <button className="btn btn-ghost" onClick={() => openLogin('volunteer')}>
                {t('navLogin')}
              </button>

              <button className="btn btn-green" onClick={() => openSignup('choice')}>
                <span>{t('navSignup')}</span>
                <IconArrowRight className={`w-3.5 h-3.5 inline ${currentLang === 'ar' ? 'mr-1 transform rotate-180' : 'ml-1'}`} />
              </button>

              {/* SÉLECTEUR DE LANGUE DISCRET & ÉLÉGANT */}
              <LanguageDropdown currentLang={currentLang} setCurrentLang={setCurrentLang} />
            </div>
          </nav>
        </div>
      </header>

      {/* HERO SECTION OFFICIELLE ATHAR (Photo en fond plein écran, texte par-dessus) */}
      <section
        className="hero"
        id="accueil"
        style={{
          '--hero-bg': `url(${heroBgImg})`
        }}
      >
        <div className="wrap">
          <div className="herotext">
            <div className="eyebrow">
              {currentLang === 'ar'
                ? 'العمل التطوعي في خدمة جزائر متضامنة'
                : currentLang === 'en'
                ? 'Volunteering in service of a united Algeria'
                : "Le bénévolat au service d'une Algérie solidaire"}
            </div>
            <h1>
              <span className="blue">
                {currentLang === 'ar'
                  ? 'امنح من وقتك.'
                  : currentLang === 'en'
                  ? 'Give your time.'
                  : 'Donnez de votre temps.'}
              </span>
              <br />
              <span className="green">
                {currentLang === 'ar'
                  ? 'اصنع فرقاً.'
                  : currentLang === 'en'
                  ? 'Create impact.'
                  : "Créez de l'impact."}
              </span>
            </h1>
            <div className="cta" style={{ marginTop: '28px' }}>
              <button
                type="button"
                className="btn btn-green btn-lg"
                onClick={() => openSignup('choice')}
              >
                <span>
                  {currentLang === 'ar'
                    ? 'إنشاء حساب ←'
                    : currentLang === 'en'
                    ? 'Create an account →'
                    : 'Créer un compte →'}
                </span>
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-lg"
                onClick={() => {
                  const el = document.getElementById('missions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>
                  {currentLang === 'ar'
                    ? 'اكتشف المهام'
                    : currentLang === 'en'
                    ? 'Discover missions'
                    : 'Découvrir les missions'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DÉFINITION + STATISTIQUES (style Wyze) */}
      <section className="about" id="stats-section">
        <div className="wrap">
          <div className="atop">
            <h2 className="atitle">
              Choisir Athar, c'est faire<br />grandir l'impact,<br />
              <span className="or">pas seulement aider.</span>
            </h2>
            <div className="adesc">
              <p>
                Athar est la plateforme qui connecte les <b>bénévoles</b> et les <b>associations</b> en Algérie,
                pour faire grandir l'impact ensemble. Nous rapprochons les femmes et les hommes de terrain
                des causes qui ont besoin d'eux, partout dans le pays.
              </p>
              <p className="anote">
                Rejoignez une communauté engagée et participez à des missions qui ont du sens, près de chez vous.
              </p>
            </div>
          </div>

          <div className="stats" ref={statsRef}>
            <div className="stat">
              <div className="num">
                {counts.volunteers.toLocaleString('fr-FR').replace(/\s/g, ' ')}
              </div>
              <div className="lb">{t('statVolunteers')}</div>
            </div>
            <div className="stat">
              <div className="num">
                {counts.associations}
              </div>
              <div className="lb">{t('statAssocs')}</div>
            </div>
            <div className="stat">
              <div className="num">
                {counts.missions.toLocaleString('fr-FR').replace(/\s/g, ' ')}
              </div>
              <div className="lb">{t('statMissions')}</div>
            </div>
            <div className="stat">
              <div className="num">
                {counts.wilayas}
              </div>
              <div className="lb">{t('statWilayas')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS EXPLORER SECTION (exactement comme la capture d'écran) */}
      <section id="missions" className="missions">
        <div className="wrap">
          <div className="missions-head-row">
            <div className="missions-head-left">
              <div className="eyebrow">SUR LE TERRAIN</div>
              <h2>Missions engagées près de chez vous</h2>
              <p>Explorez des missions vérifiées dans différentes wilayas et thématiques.</p>
            </div>

            {/* Filtres thématiques alignés à droite */}
            <div className="missions-filter-bar">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryChange(cat)}
                  className={`filter-btn ${selectedCategoryFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des missions spacieuse avec skeleton loader */}
          <div className="missions-grid">
            {isMissionsLoading ? (
              [1, 2, 3].map((n) => <MissionCardSkeleton key={n} />)
            ) : filteredMissions.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px 16px', color: '#64748B' }}>
                <p style={{ fontSize: '18px', fontWeight: 600 }}>Aucune mission trouvée pour cette catégorie.</p>
              </div>
            ) : (
              filteredMissions.slice(0, 3).map((m) => (
                <div key={m.id} className="mission-card">
                  <div>
                    <div className="mission-img-wrap">
                      <img src={m.image_url} alt={m.title} />
                      <span className="mission-tag">{m.category}</span>
                    </div>

                    <div className="mission-content">
                      <div className="mission-asso">
                        <IconShieldCheck className="w-4 h-4 shrink-0" />
                        <span>{m.association_name}</span>
                      </div>

                      <h3 className="mission-title">{m.title}</h3>

                      <p className="mission-desc">{m.description}</p>

                      <div className="mission-details">
                        <div className="mission-detail-row">
                          <IconMapPin className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{m.location}</span>
                        </div>
                        <div className="mission-detail-row">
                          <IconCalendar className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{m.date_str}</span>
                        </div>
                        <div className="mission-detail-row spots">
                          <IconUsers className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{m.spots_remaining} places disponibles</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mission-action">
                    <button
                      onClick={() => {
                        setSelectedMission(m.title);
                        openLogin('volunteer');
                      }}
                      className="mission-btn"
                    >
                      <span>Je participe à cette mission</span>
                      <IconArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bouton centré 'Voir plus' ouvrant la modale de connexion */}
          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => openLogin('volunteer')}
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 32px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'var(--primary-teal)',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 109, 91, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Voir plus</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

              {/* 2. LE CORPS SOLIDAIRE NATIONAL DE LA JEUNESSE (Inspiré de youth.europa.eu) */}
      <section id="corps-section" style={{ padding: '80px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="wrap">
          <YouthSolidarityCorps
            currentLang={currentLang}
            volunteerUser={volunteerUser}
            onOpenLogin={() => openLogin('volunteer')}
            onToast={showToast}
          />
        </div>
      </section>

      {/* 3. LE MAGAZINE THÉMATIQUE — EXPLORE PAGE STYLE SUBSTACK */}
      <section id="explore-section" style={{ padding: '80px 0 40px', background: '#ffffff', borderTop: '1px solid #E2E8F0' }}>
        <div className="wrap">
          <ExploreThematicMagazine
            currentLang={currentLang}
            onSelectTheme={(themeKey) => {
              const el = document.getElementById('missions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onActionPledge={() => openLogin('volunteer')}
          />
        </div>
      </section>

      {/* 4. FIL D'IMPACT EN DIRECT — ATHAR PULSE */}
      <section id="feed-section" style={{ padding: '70px 0', background: 'var(--bg-cream)', borderTop: '1px solid #E2E8F0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <div className="eyebrow" style={{ color: 'var(--primary-teal)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', marginBottom: '8px' }}>
              {currentLang === 'ar' ? 'المجتمع الحي في الميدان' : 'LE RÉSEAU SOCIAL DU BÉNÉVOLAT'}
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--primary-navy)', margin: '0 0 12px' }}>
              {currentLang === 'ar' ? 'نبض أثر : شارك أفعالك وأثرك الميداني' : "Athar Pulse : L'impact citoyen en direct"}
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              {currentLang === 'ar'
                ? 'قصص يومية، صور من الميدان، وإنجازات حقيقية تصنعها سواعد الشباب والجمعيات في كل ولايات الجزائر.'
                : 'Stories du jour, photos de terrain, et réussites partagées par les bénévoles et associations à travers l\'Algérie.'}
            </p>
          </div>
          <LiveCommunityFeed
            currentLang={currentLang}
            volunteerUser={volunteerUser}
            onToast={showToast}
          />
        </div>
      </section>

      {/* 5. SOS SANG & ÉCOSYSTÈME HOSPITALIER */}
      <section id="blood-section" style={{ padding: '70px 0', background: '#ffffff', borderTop: '1px solid #E2E8F0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <div className="eyebrow" style={{ color: '#b91c1c', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', marginBottom: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <IconDroplet className="w-4 h-4 text-rose-600" />
              <span>URGENCES VITALES & HÔPITAUX</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--primary-navy)', margin: '0 0 12px' }}>
              {currentLang === 'ar' ? 'نجدة الدم : تبرع بساعة، أنقذ ثلاثة أرواح' : 'SOS Sang : Chaque goutte compte pour nos hôpitaux'}
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              {currentLang === 'ar'
                ? 'ربط مباشر مع مراكز حقن الدم في المستشفيات الجامعية (مصطفى باشا، باب الواد، البليدة، وهران، قسنطينة). احصل على تصريح المتبرع الرقمي.'
                : 'Connexion directe avec les Centres de Transfusion Sanguine hospitaliers (CHU Mustapha, Bab El Oued, Blida, Oran, Constantine). Générez votre Pass Donneur numérique.'}
            </p>
          </div>
          <BloodDonationCenter
            currentLang={currentLang}
            onOpenLogin={() => openLogin('volunteer')}
            isVolunteer={false}
            volunteerUser={volunteerUser}
          />
        </div>
      </section>

      {/* 6. REGISTRE PUBLIC DE TRAÇABILITÉ & PREUVES D'IMPACT */}
      <section id="traceability-section" style={{ padding: '70px 0', background: 'var(--bg-cream)', borderTop: '1px solid #E2E8F0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <div className="eyebrow" style={{ color: 'var(--primary-teal)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', marginBottom: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <IconShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>TRANSPARENCE CIVIQUE & CONFIANCE</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--primary-navy)', margin: '0 0 12px' }}>
              {currentLang === 'ar' ? 'سجل توثيق الأثر الشفاف وغير القابل للتزوير' : 'Registre Public de Traçabilité & Preuves de Terrain'}
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              {currentLang === 'ar'
                ? 'كل قفة غذائية، كل كيس دم، وكل شجرة مغروسة مسجلة بختم رقمي وصور توثيقية حقيقية لضمان الثقة والشفافية المطلقة.'
                : 'Chaque colis d\'aide, poche de sang et arbre planté dispose d\'un hachage numérique certifié et de photos de remise vérifiées.'}
            </p>
          </div>
          <TraceabilityLedger
            currentLang={currentLang}
            isAssociation={false}
            onToast={showToast}
          />
        </div>
      </section>

      {/* 7. ASSOCIATIONS PARTENAIRES & RÉFÉRENCES (id="associations-section") */}
      <section id="associations-section" style={{ padding: '70px 0', background: '#ffffff', borderTop: '1px solid #E2E8F0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div className="eyebrow" style={{ color: 'var(--primary-teal)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', marginBottom: '8px' }}>
              ÉCOSYSTÈME DE CONFIANCE
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--primary-navy)', margin: '0 0 12px' }}>
              {t('assocsSectionTitle')}
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              {t('assocsSectionSub')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {[
              { name: "Croissant Rouge Algérien", tag: "Solidarité & Secourisme", wilaya: "National (69 wilayas)", verified: true, desc: "Aide humanitaire d'urgence, banques alimentaires nationales et secourisme de proximité.", icon: "🚑" },
              { name: "Association Green Future", tag: "Environnement & Climat", wilaya: "Alger & Oran", verified: true, desc: "Régénération forestière méditerranéenne, protection du littoral et sensibilisation scolaire.", icon: "🌲" },
              { name: "Association El Chifa Santé", tag: "Santé Publique & Don", wilaya: "Constantine & Blida", verified: true, desc: "Soutien aux urgences hospitalières, don du sang et dépistage préventif pour tous.", icon: "🩸" },
              { name: "Lire pour Demain", tag: "Éducation & Jeunesse", wilaya: "Alger & Béjaïa", verified: true, desc: "Accès au livre, bibliothèques nomades dans les zones d'ombre et mentorat citoyen.", icon: "📚" }
            ].map((assoc, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontSize: '32px' }}>{assoc.icon}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: '#ECFDF5', color: '#006D5B', border: '1px solid #A7F3D0', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      ✓ Agréée Officielle
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 6px' }}>{assoc.name}</h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-teal)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <IconMapPin className="w-3.5 h-3.5" />
                    <span>{assoc.wilaya}</span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.55, margin: '0 0 16px' }}>{assoc.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => openLogin('volunteer')}
                  style={{ width: '100%', padding: '10px 16px', borderRadius: '10px', border: '1px solid #CBD5E1', background: '#F8FAFC', color: 'var(--primary-navy)', fontWeight: 700, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <span>{t('btnViewAssoc')}</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CAUSES / TYPES DE MISSIONS */}
      <section className="causes" id="causes">
        <div className="wrap">
          <div className="chead">
            <h2>{t('causesTitle')}</h2>
            <p>
              {t('causesSubtitle')}
            </p>
          </div>

          <div className="cgrid">
            <div className="cc">
              <div className="cc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
                  alt={t('causeSolidarityTitle')}
                  className="cc-img"
                  loading="lazy"
                />
              </div>
              <div className="cc-body">
                <h3>{t('causeSolidarityTitle')}</h3>
                <p>{t('causeSolidarityDesc')}</p>
              </div>
            </div>

            <div className="cc">
              <div className="cc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt={t('causeEducationTitle')}
                  className="cc-img"
                  loading="lazy"
                />
              </div>
              <div className="cc-body">
                <h3>{t('causeEducationTitle')}</h3>
                <p>{t('causeEducationDesc')}</p>
              </div>
            </div>

            <div className="cc">
              <div className="cc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                  alt={t('causeEnvironmentTitle')}
                  className="cc-img"
                  loading="lazy"
                />
              </div>
              <div className="cc-body">
                <h3>{t('causeEnvironmentTitle')}</h3>
                <p>{t('causeEnvironmentDesc')}</p>
              </div>
            </div>

            <div className="cc">
              <div className="cc-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                  alt={t('causeHealthTitle')}
                  className="cc-img"
                  loading="lazy"
                />
              </div>
              <div className="cc-body">
                <h3>{t('causeHealthTitle')}</h3>
                <p>{t('causeHealthDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="ccard2">
            <div className="cleft">
              <h2>Contactez-nous</h2>
              <p className="clead">
                Une question, une idée de partenariat, ou juste envie de dire bonjour ? Nous serions ravis d'échanger avec vous.
              </p>
              <div className="cinfo">
                <div className="crow">
                  <span className="cico">
                    <IconMail className="w-4 h-4" />
                  </span>
                  <span>hello@athar.dz</span>
                </div>
                <div className="crow">
                  <span className="cico">
                    <IconPhone className="w-4 h-4" />
                  </span>
                  <span>+213 23 45 67 89</span>
                </div>
                <div className="crow">
                  <span className="cico">
                    <IconMapPin className="w-4 h-4" />
                  </span>
                  <span>Alger, Algérie</span>
                </div>
              </div>

              <div className="creach">Suivez-nous</div>
              <div className="csoc">
                <a className="sb" onClick={() => showToast("Réseaux sociaux Athar bientôt en ligne !")}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>
                  </svg>
                </a>
                <a className="sb" onClick={() => showToast("Réseaux sociaux Athar bientôt en ligne !")}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M22 3 11 14M22 3l-7 18-4-7-7-4 18-7Z"/>
                  </svg>
                </a>
                <a className="sb" onClick={() => showToast("Réseaux sociaux Athar bientôt en ligne !")}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="6" cy="12" r="2.4"/>
                    <circle cx="18" cy="6" r="2.4"/>
                    <circle cx="18" cy="18" r="2.4"/>
                    <path d="M8.2 11 15.8 7M8.2 13l7.6 4"/>
                  </svg>
                </a>
              </div>
            </div>

            <form
              className="cform"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Message envoyé avec succès ! Notre équipe vous répondra sous peu.");
                e.target.reset();
              }}
            >
              <label>Nom complet</label>
              <input type="text" required placeholder="Votre nom" />

              <label>Email</label>
              <input type="email" required placeholder="vous@exemple.com" />

              <label>Message</label>
              <textarea required placeholder="Comment pouvons-nous vous aider ?"></textarea>

              <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 12. MAIN FOOTER (comme le tout premier) */}
      <footer className="footer-dark">
        <div className="wrap">
          <div className="footer-grid">
            {/* Col 1 */}
            <div>
              <div className="footer-brand-badge">
                <img
                  src={logoImg}
                  alt="Athar Logo"
                />
              </div>
              <p className="footer-lead">
                Plateforme nationale algérienne dédiée à l'engagement bénévole et à la solidarité active. Chaque action laisse une empreinte.
              </p>
              <div className="footer-tagline">
                Fièrement développé pour l'Algérie
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="footer-col-title">
                Navigation
              </h4>
              <ul className="footer-links">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#missions">Missions</a></li>
                <li><a href="#causes">Causes</a></li>
                <li><a href="#about">À propos</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="footer-col-title">
                Espaces
              </h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => openLogin('volunteer')}>
                    Espace Bénévole
                  </button>
                </li>
                <li>
                  <button onClick={() => openLogin('association')}>
                    Espace Association
                  </button>
                </li>
                <li><a href="#missions">69 Wilayas</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="footer-col-title">
                Contact
              </h4>
              <p className="footer-contact-info">
                Alger, Algérie<br />
                contact@athar.dz
              </p>
              <div className="footer-contact-copy">
                © 2025 Plateforme Athar. Tous droits réservés.
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              Athar – Le bénévolat au service d'une Algérie solidaire.
            </div>
            <div className="footer-cities">
              <span>Alger</span>
              <span>•</span>
              <span>Oran</span>
              <span>•</span>
              <span>Constantine</span>
              <span>•</span>
              <span>69 Wilayas</span>
            </div>
          </div>
        </div>
      </footer>
        </>

  );
}
