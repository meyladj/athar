import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';
import heroBgImg from '../assets/athar-hero.png';
import panoramicImg from '../assets/algeria-panoramic.jpg';

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

function MissionCardSkeleton() {
  return (
    <div className="mission-card skeleton-card">
      <div>
        <div className="mission-img-wrap skeleton-shimmer" style={{ height: '210px' }}>
          <div className="skeleton-badge skeleton-shimmer"></div>
        </div>
        <div className="mission-content">
          <div className="skeleton-line skeleton-shimmer" style={{ width: '45%', height: '14px', marginBottom: '12px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '85%', height: '20px', marginBottom: '10px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '60%', height: '20px', marginBottom: '16px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '100%', height: '13px', marginBottom: '8px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '88%', height: '13px', marginBottom: '22px' }}></div>
          <div className="mission-details">
            <div className="skeleton-line skeleton-shimmer" style={{ width: '55%', height: '14px' }}></div>
            <div className="skeleton-line skeleton-shimmer" style={{ width: '50%', height: '14px' }}></div>
            <div className="skeleton-line skeleton-shimmer" style={{ width: '65%', height: '14px' }}></div>
          </div>
        </div>
      </div>
      <div className="mission-action">
        <div className="skeleton-btn skeleton-shimmer"></div>
      </div>
    </div>
  );
}

function DefaultLanguageDropdown({ currentLang = 'fr', setCurrentLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'fr', label: 'Français', badge: 'FR' },
    { code: 'ar', label: 'العربية', badge: 'AR' },
    { code: 'en', label: 'English', badge: 'EN' }
  ];

  return (
    <div className="lang-dropdown-wrapper" ref={ref}>
      <button
        type="button"
        className="lang-dropdown-btn"
        onClick={() => setOpen(!open)}
        aria-label="Changer de langue"
        title="Changer de langue / Change language / تغيير اللغة"
      >
        <svg className="lang-globe-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="lang-current-code">{(currentLang || 'FR').toUpperCase()}</span>
        <svg className={`lang-chevron ${open ? 'rotate' : ''}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown-menu">
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              className={`lang-menu-item ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => {
                if (setCurrentLang) setCurrentLang(lang.code);
                setOpen(false);
              }}
            >
              <span>{lang.label}</span>
              <span className="lang-badge">{lang.badge}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const defaultMissions = [
  {
    id: 1,
    title: "Plantation d'arbres et reboisement à Zéralda",
    association_name: "Association Green Future",
    category: "Environnement",
    location: "Zéralda, Alger",
    wilaya: "Alger",
    date_str: "Sam. 12 avr. 2025",
    spots_remaining: 15,
    image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    description: "Participez à notre grande action de reboisement dans la forêt récréative de Zéralda. Ensemble, contribuons à restaurer la canopée méditerranéenne et à sensibiliser les familles à la biodiversité locale."
  },
  {
    id: 2,
    title: "Campagne de distribution de colis alimentaires solidaires",
    association_name: "Croissant Rouge Algérien",
    category: "Solidarité",
    location: "Bab Ezzouar, Alger",
    wilaya: "Alger",
    date_str: "Sam. 19 avr. 2025",
    spots_remaining: 20,
    image_url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    description: "Tri, conditionnement méticuleux et acheminement de colis alimentaires solidaires destinés à 300 familles nécessiteuses recensées. Une action humanitaire directe au service des personnes les plus vulnérables."
  },
  {
    id: 3,
    title: "Ateliers de lecture et éveil artistique pour enfants",
    association_name: "Lire pour Demain",
    category: "Éducation",
    location: "Hydra, Alger",
    wilaya: "Alger",
    date_str: "Mer. 16 avr. 2025",
    spots_remaining: 8,
    image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: "Animation de contes bilingues, jeux de rôles créatifs et éveil au plaisir de lire pour un groupe de 25 enfants de 6 à 11 ans au centre culturel communautaire."
  }
];

export default function LandingPage({
  currentLang = 'fr',
  setCurrentLang,
  t: tProp,
  volunteerUser,
  openLogin = () => {},
  openSignup = () => {},
  showToast = () => {},
  LanguageDropdown: LanguageDropdownProp,
  missions
}) {
  const LanguageDropdown = LanguageDropdownProp || DefaultLanguageDropdown;

  const defaultTranslations = {
    navHome: currentLang === 'ar' ? 'الرئيسية' : currentLang === 'en' ? 'Home' : 'Accueil',
    navMissions: currentLang === 'ar' ? 'المهمات' : currentLang === 'en' ? 'Missions' : 'Missions',
    navAssociations: currentLang === 'ar' ? 'الجمعيات' : currentLang === 'en' ? 'Associations' : 'Associations',
    navAbout: currentLang === 'ar' ? 'من نحن' : currentLang === 'en' ? 'About' : 'À propos',
    navVolunteers: currentLang === 'ar' ? 'المتطوعون' : currentLang === 'en' ? 'Volunteers' : 'Bénévoles',
    navSearch: currentLang === 'ar' ? 'بحث' : currentLang === 'en' ? 'Search' : 'Rechercher',
    navLogin: currentLang === 'ar' ? 'تسجيل الدخول' : currentLang === 'en' ? 'Log in' : 'Connexion',
    navSignup: currentLang === 'ar' ? 'انضم إلينا' : currentLang === 'en' ? 'Join us' : 'Rejoindre',
    statVolunteers: currentLang === 'ar' ? 'متطوع مسجل' : currentLang === 'en' ? 'Active volunteers' : 'Bénévoles engagés',
    statAssocs: currentLang === 'ar' ? 'جمعية شريكة' : currentLang === 'en' ? 'Partner associations' : 'Associations partenaires',
    statMissions: currentLang === 'ar' ? 'مهمة منجزة' : currentLang === 'en' ? 'Missions completed' : 'Missions réalisées',
    statWilayas: currentLang === 'ar' ? 'ولاية مغطاة' : currentLang === 'en' ? 'Wilayas covered' : 'Wilayas couvertes',
    causesTitle: currentLang === 'ar' ? 'مجالات العمل التطوعي' : currentLang === 'en' ? 'Volunteer Causes' : 'Des causes variées pour chaque vocation',
    causesSubtitle: currentLang === 'ar' ? 'اختر المجال الذي يتوافق مع مهاراتك وشغفك للمساهمة في الميدان.' : currentLang === 'en' ? 'Choose causes aligned with your passion and make a tangible difference.' : 'Trouvez les actions qui résonnent avec vos convictions et mettez vos compétences à profit.',
    causeSolidarityTitle: currentLang === 'ar' ? 'التضامن والعمل الإنساني' : currentLang === 'en' ? 'Solidarity & Humanitarian' : 'Solidarité & Humanitaire',
    causeSolidarityDesc: currentLang === 'ar' ? 'قوافل تضامنية، طرود غذائية، ومرافقة العائلات في المناطق المعزولة.' : currentLang === 'en' ? 'Food drives, winter aid packages and direct support for underserved families.' : 'Distribution de colis de première nécessité, aides hivernales et assistance directe aux familles isolées.',
    causeEducationTitle: currentLang === 'ar' ? 'التعليم ودعم الطفولة' : currentLang === 'en' ? 'Education & Youth' : 'Éducation & Jeunesse',
    causeEducationDesc: currentLang === 'ar' ? 'دروس دعم، ورشات قراءة، ومرافقة أكاديمية لأطفال المدارس.' : currentLang === 'en' ? 'Tutoring, book reading clubs, and digital literacy workshops for children.' : 'Soutien scolaire gratuit, ateliers de lecture et accompagnement méthodologique des jeunes écoliers.',
    causeEnvironmentTitle: currentLang === 'ar' ? 'البيئة والتشجير' : currentLang === 'en' ? 'Environment & Reforestation' : 'Environnement & Climat',
    causeEnvironmentDesc: currentLang === 'ar' ? 'حملات تشجير كبرى، تنظيف الشواطئ والمحميات الطبيعية.' : currentLang === 'en' ? 'Tree planting initiatives, coastal cleanups and environmental awareness.' : 'Reboisement forestier, nettoyage citoyen du littoral et sensibilisation aux éco-gestes durables.',
    causeHealthTitle: currentLang === 'ar' ? 'الصحة والتبرع بالدم' : currentLang === 'en' ? 'Health & Blood Donation' : 'Santé & Don de Sang',
    causeHealthDesc: currentLang === 'ar' ? 'حملات دورية للتبرع بالدم، دعم المستشفيات، وقوافل طبية متنقلة.' : currentLang === 'en' ? 'Blood donation drives, hospital assistance and preventive healthcare days.' : 'Campagnes de don de sang, soutien logistique aux CHU et sensibilisation au dépistage précoce.'
  };

  const t = (key) => {
    if (typeof tProp === 'function') {
      try {
        const val = tProp(key);
        if (val && val !== key) return val;
      } catch (e) {}
    }
    return defaultTranslations[key] || key;
  };

  // Animated counters on scroll
  const statsRef = useRef(null);
  const [counts, setCounts] = useState({
    volunteers: 12500,
    associations: 350,
    missions: 1200,
    wilayas: 69
  });

  useEffect(() => {
    const el = statsRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    let animFrame = null;
    const duration = 1600;
    const targets = {
      volunteers: 12500,
      associations: 350,
      missions: 1200,
      wilayas: 69
    };

    setCounts({ volunteers: 0, associations: 0, missions: 0, wilayas: 0 });

    const runCount = () => {
      let t0 = null;
      const step = (ts) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCounts({
          volunteers: Math.round(targets.volunteers * ease),
          associations: Math.round(targets.associations * ease),
          missions: Math.round(targets.missions * ease),
          wilayas: Math.round(targets.wilayas * ease)
        });
        if (p < 1) {
          animFrame = requestAnimationFrame(step);
        } else {
          setCounts(targets);
        }
      };
      animFrame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  // Category filter & Missions state
  const categories = [
    'Toutes',
    'Environnement',
    'Solidarité',
    'Éducation',
    'Santé',
    'Aide d\'urgence',
    'Patrimoine'
  ];

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('Toutes');
  const [isMissionsLoading, setIsMissionsLoading] = useState(false);
  const [selectedMission, setSelectedMission] = useState('');

  const handleCategoryChange = (cat) => {
    if (cat === selectedCategoryFilter) return;
    setIsMissionsLoading(true);
    setSelectedCategoryFilter(cat);
    setTimeout(() => setIsMissionsLoading(false), 320);
  };

  const missionsToDisplay = (missions && missions.length > 0) ? missions : defaultMissions;

  const filteredMissions = missionsToDisplay.filter((m) => {
    if (selectedCategoryFilter === 'Toutes') return true;
    return m.category === selectedCategoryFilter;
  });

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
                href="#stats-section"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('stats-section');
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
                {currentLang === 'ar' ? "المتطوعون" : currentLang === 'en' ? "Volunteers" : "Bénévoles"}
              </a>
              <a
                href="#stats-section"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('stats-section') || document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('navAbout')}
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
