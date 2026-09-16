import React, { useState, useEffect, useRef } from 'react';
import './style.css';

// Clean SVG Icons (zero external library dependency, zero emoji)
function IconMapPin({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconCalendar({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}

function IconUsers({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconShieldCheck({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function IconArrowRight({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}

function IconPaperclip({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
  );
}

function IconBuilding({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15"/>
      <path d="M15 10h4a1 1 0 0 1 1 1v10"/>
      <path d="M2 21h20"/>
      <path d="M7 9h.01M7 13h.01M7 17h.01M11 9h.01M11 13h.01M11 17h.01"/>
    </svg>
  );
}

function IconMail({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="m3 7 9 6 9-6"/>
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>
    </svg>
  );
}

function IconChevronLeft({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );
}

function IconChevronRight({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

// Skeleton Placeholder for Mission Card
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

export default function App() {
  // Loading state with skeleton placeholders
  const [isMissionsLoading, setIsMissionsLoading] = useState(true);

  // Modals state
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [signupView, setSignupView] = useState('choice'); // 'choice' | 'ben' | 'asso'
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState('');
  const [appliedFileName, setAppliedFileName] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Category filter for missions
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('Toutes');

  // Initial skeleton loading timer
  useEffect(() => {
    const timer = setTimeout(() => setIsMissionsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat) => {
    if (cat === selectedCategoryFilter) return;
    setIsMissionsLoading(true);
    setSelectedCategoryFilter(cat);
    setTimeout(() => setIsMissionsLoading(false), 380);
  };

  const categories = [
    'Toutes',
    'Environnement',
    'Solidarité',
    'Éducation',
    'Santé',
    'Aide d\'urgence',
    'Patrimoine'
  ];

  // 6 verified Algerian missions from previous version
  const [missionsList, setMissionsList] = useState([
    {
      id: 1,
      title: "Plantation d'arbres à Zéralda",
      association_name: "Association Green Future",
      category: "Environnement",
      location: "Zéralda, Alger",
      wilaya: "Alger",
      date_str: "Sam. 12 avr. 2025",
      time_str: "9h00 – 15h00",
      spots_remaining: 15,
      spots_total: 30,
      image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      description: "Participez à notre grande action de reboisement dans la forêt récréative de Zéralda. Matériel de jardinage et gants fournis sur place."
    },
    {
      id: 2,
      title: "Campagne de distribution de paniers alimentaires",
      association_name: "Croissant Rouge Algérien",
      category: "Solidarité",
      location: "Bab Ezzouar, Alger",
      wilaya: "Alger",
      date_str: "Sam. 19 avr. 2025",
      time_str: "9h00 – 16h00",
      spots_remaining: 20,
      spots_total: 40,
      image_url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      description: "Tri, conditionnement et acheminement de colis alimentaires solidaires destinés à 300 familles nécessiteuses recensées."
    },
    {
      id: 3,
      title: "Ateliers de lecture pour enfants",
      association_name: "Lire pour Demain",
      category: "Éducation",
      location: "Hydra, Alger",
      wilaya: "Alger",
      date_str: "Mer. 16 avr. 2025",
      time_str: "14h00 – 17h00",
      spots_remaining: 8,
      spots_total: 15,
      image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      description: "Animation de contes, jeux de rôles et éveil à la lecture pour un groupe d'enfants de 6 à 11 ans au centre culturel."
    },
    {
      id: 4,
      title: "Nettoyage et préservation des plages des Andalouses",
      association_name: "Association Green Future",
      category: "Environnement",
      location: "Les Andalouses, Oran",
      wilaya: "Oran",
      date_str: "Ven. 2 mai 2025",
      time_str: "8h30 – 14h00",
      spots_remaining: 25,
      spots_total: 50,
      image_url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      description: "Grande journée citoyenne de dépollution marine et sensibilisation au tri sélectif le long du littoral oranais."
    },
    {
      id: 5,
      title: "Caravane de don du sang et dépistage au CHU",
      association_name: "Association El Chifa Santé",
      category: "Santé",
      location: "CHU Benbadis, Constantine",
      wilaya: "Constantine",
      date_str: "Jeu. 8 mai 2025",
      time_str: "9h00 – 16h30",
      spots_remaining: 12,
      spots_total: 25,
      image_url: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
      description: "Organisation logistique et accueil des donneurs de sang volontaires au Centre de Transfusion Sanguine."
    },
    {
      id: 6,
      title: "Soutien scolaire et tutorat pour collégiens",
      association_name: "Association Amel Solidarité",
      category: "Éducation",
      location: "Belouizdad, Alger",
      wilaya: "Alger",
      date_str: "Sam. 26 avr. 2025",
      time_str: "10h00 – 13h00",
      spots_remaining: 6,
      spots_total: 12,
      image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      description: "Aide aux devoirs et révisions en mathématiques et langues pour des élèves motivés."
    }
  ]);

  const filteredMissions = missionsList.filter((m) => {
    if (selectedCategoryFilter === 'Toutes') return true;
    return m.category.toLowerCase() === selectedCategoryFilter.toLowerCase();
  });

  // Animated counters on scroll
  const statsRef = useRef(null);
  const [counts, setCounts] = useState({
    volunteers: 0,
    associations: 0,
    missions: 0,
    wilayas: 0
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    let animFrame = null;
    const duration = 1600;
    const targets = {
      volunteers: 12500,
      associations: 350,
      missions: 1200,
      wilayas: 58
    };

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

  const openSignup = (view = 'choice') => {
    setSignupView(view);
    setSignupModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSignup = () => {
    setSignupModalOpen(false);
    document.body.style.overflow = '';
  };

  const openApply = (missionTitle) => {
    setSelectedMission(missionTitle);
    setAppliedFileName('');
    setApplyModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApply = () => {
    setApplyModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeSignup();
        closeApply();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Toast Notification (zero emoji) */}
      {toastMessage && (
        <div className="toast-notice">
          <IconCheck className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER */}
      <header>
        <div className="wrap">
          <nav className="nav">
            <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/assets/logo.png"
                alt="Athar Platform أثر"
                style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div className="menu">
              <a href="#accueil" className="active">Accueil</a>
              <a href="#missions">Missions</a>
              <a href="#causes">Associations</a>
              <a href="#about">À propos</a>
              <a href="#contact">Blog</a>
            </div>

            <div className="right">
              <div
                className="icon-btn"
                title="Recherche"
                onClick={() => showToast("Recherche bientôt disponible !")}
              >
                <IconSearch className="w-4 h-4" />
              </div>

              <button className="btn btn-ghost" onClick={() => openSignup('ben')}>
                Se connecter
              </button>

              <button className="btn btn-green" onClick={() => openSignup('choice')}>
                <span>S'inscrire</span>
                <IconArrowRight className="w-3.5 h-3.5 ml-1 inline" />
              </button>

              <div
                className="lang"
                onClick={() => showToast("La version arabe complète sera activée très bientôt !")}
              >
                <b>FR</b> | AR
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* BANNIÈRE PANORAMIQUE ORIGINALE (La toute première fois - Photo unique) */}
      <section className="panoramic-banner" id="accueil">
        <div className="panoramic-banner-inner">
          <img
            src="/assets/algeria-panoramic.jpg"
            alt="Chaque action laisse une empreinte - Baie d'Alger"
            className="panoramic-banner-img"
          />
          <div className="panoramic-banner-overlay"></div>
          <div className="wrap panoramic-banner-content">
            <div className="panoramic-banner-text">
              <span className="panoramic-banner-badge">
                Initiative Citoyenne Nationale
              </span>
              <h1 className="panoramic-banner-title">
                Chaque action laisse une empreinte.
              </h1>
              <p className="panoramic-banner-desc">
                Que vous soyez un citoyen désireux de donner quelques heures ou une association en quête de forces vives, Athar vous accompagne.
              </p>
              <div className="panoramic-banner-action">
                <button
                  onClick={() => openSignup('choice')}
                  className="panoramic-banner-btn"
                >
                  <span>Rejoindre la communauté</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
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
              filteredMissions.map((m) => (
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
                      onClick={() => openApply(m.title)}
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
        </div>
      </section>

      {/* DÉFINITION + STATISTIQUES (style Wyze) */}
      <section className="about" id="about">
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
              <div className="lb">bénévoles inscrits</div>
            </div>
            <div className="stat">
              <div className="num">
                {counts.associations}
              </div>
              <div className="lb">associations partenaires</div>
            </div>
            <div className="stat">
              <div className="num">
                {counts.missions.toLocaleString('fr-FR').replace(/\s/g, ' ')}
              </div>
              <div className="lb">missions publiées</div>
            </div>
            <div className="stat">
              <div className="num">
                {counts.wilayas}
              </div>
              <div className="lb">wilayas couvertes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES / TYPES DE MISSIONS */}
      <section className="causes" id="causes">
        <div className="wrap">
          <div className="chead">
            <h2>Des causes qui ont besoin de vous</h2>
            <p>
              Quelle que soit la cause qui vous touche, une mission vous attend.
              Découvrez les domaines dans lesquels notre communauté s'engage.
            </p>
          </div>

          <div className="cgrid">
            <div className="cc">
              <div className="ci" style={{ background: '#e6f3ef', color: '#0d5b61' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M20.8 8.6a5 5 0 0 0-7.1 0L12 10.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 24l8.8-8.3a5 5 0 0 0 0-7.1Z"/>
                </svg>
              </div>
              <h3>Solidarité</h3>
              <p>Soutenez les familles en difficulté, organisez des collectes et soyez présent pour votre communauté dans les moments durs.</p>
            </div>

            <div className="cc">
              <div className="ci" style={{ background: '#eef2fb', color: '#0c363d' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M22 9 12 4 2 9l10 5 10-5Z"/>
                  <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>
                </svg>
              </div>
              <h3>Éducation</h3>
              <p>Accompagnez les enfants, animez des ateliers d'alphabétisation et ouvrez les portes du savoir à tous.</p>
            </div>

            <div className="cc">
              <div className="ci" style={{ background: '#faf2dd', color: '#f59e0b' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 3C7 8 7 14 12 21c5-7 5-13 0-18Z"/>
                  <path d="M12 21c-4-3-6-7-2-11"/>
                </svg>
              </div>
              <h3>Environnement</h3>
              <p>Plantez des arbres, nettoyez les plages et les quartiers, et protégez la beauté naturelle de l'Algérie.</p>
            </div>

            <div className="cc">
              <div className="ci" style={{ background: '#fdeeea', color: '#e05d49' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M20.8 8.6a5 5 0 0 0-7.1 0L12 10.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 24l8.8-8.3a5 5 0 0 0 0-7.1Z"/>
                  <path d="M6 12h3l1.5-3 3 6L18 12h0"/>
                </svg>
              </div>
              <h3>Santé</h3>
              <p>Participez aux campagnes de sensibilisation, aux dons du sang et aux initiatives de soin de proximité.</p>
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
                  src="/assets/logo.png"
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
                  <button onClick={() => openSignup('choice')}>
                    Espace Bénévole
                  </button>
                </li>
                <li>
                  <button onClick={() => showToast("L'espace d'inscription des associations ouvrira très prochainement. Restez connectés !")}>
                    Espace Association
                  </button>
                </li>
                <li><a href="#missions">58 Wilayas</a></li>
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
              <span>58 Wilayas</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL : CHOIX DU TYPE DE COMPTE & FORMULAIRES */}
      <div className={`modal ${signupModalOpen ? 'on' : ''}`} aria-hidden={!signupModalOpen}>
        <div className="modal-bg" onClick={closeSignup}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Créer un compte">
          <button className="modal-x" onClick={closeSignup} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          </button>

          {/* ÉTAPE 1 : CHOIX */}
          {signupView === 'choice' && (
            <div className="mview">
              <div className="modal-head">
                <h3>Créer un compte</h3>
                <p>Rejoignez Athar. Choisissez le type de compte qui vous correspond.</p>
              </div>
              <div className="choices">
                <div className="choice ben" onClick={() => setSignupView('ben')}>
                  <div className="choice-ic">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <circle cx="12" cy="8" r="3.4"/>
                      <path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5"/>
                    </svg>
                  </div>
                  <div className="choice-txt">
                    <h4>Bénévole</h4>
                    <p>Je veux donner de mon temps et rejoindre des missions près de chez moi.</p>
                  </div>
                </div>

                <div className="choice asso" onClick={() => setSignupView('asso')}>
                  <div className="choice-ic">
                    <IconBuilding className="w-7 h-7" />
                  </div>
                  <div className="choice-txt">
                    <h4>Association</h4>
                    <p>Je représente une association et je veux publier des missions et trouver des bénévoles.</p>
                  </div>
                </div>
              </div>
              <div className="modal-foot">
                Déjà un compte ? <a onClick={() => setSignupView('ben')}>Se connecter</a>
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : FORMULAIRE BÉNÉVOLE */}
          {signupView === 'ben' && (
            <div className="mview">
              <button className="mback" onClick={() => setSignupView('choice')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6 5 12l6 6"/>
                </svg> Retour
              </button>
              <div className="modal-head sm">
                <div className="mtag ben">Bénévole</div>
                <h3>Créer mon compte bénévole</h3>
              </div>
              <form
                className="mform"
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast("Compte bénévole créé avec succès ! Bienvenue sur Athar.");
                  closeSignup();
                }}
              >
                <div className="frow">
                  <div>
                    <label>Prénom</label>
                    <input type="text" required placeholder="Ex. Amine" />
                  </div>
                  <div>
                    <label>Nom</label>
                    <input type="text" required placeholder="Ex. Bellouze" />
                  </div>
                </div>

                <label>Email</label>
                <input type="email" required placeholder="vous@exemple.com" />

                <div className="frow">
                  <div>
                    <label>Téléphone</label>
                    <input type="tel" required placeholder="0X XX XX XX XX" />
                  </div>
                  <div>
                    <label>Wilaya</label>
                    <select defaultValue="Alger">
                      <option value="">Choisir…</option>
                      <option value="Alger">16 - Alger</option>
                      <option value="Béjaïa">06 - Béjaïa</option>
                      <option value="Oran">31 - Oran</option>
                      <option value="Constantine">25 - Constantine</option>
                      <option value="Sétif">19 - Sétif</option>
                      <option value="Tizi Ouzou">15 - Tizi Ouzou</option>
                      <option value="Autre">Autre wilaya</option>
                    </select>
                  </div>
                </div>

                <label>Centres d'intérêt</label>
                <div className="chips">
                  <label className="chip">
                    <input type="checkbox" defaultChecked />
                    <span>Solidarité</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" defaultChecked />
                    <span>Éducation</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" defaultChecked />
                    <span>Environnement</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" defaultChecked />
                    <span>Santé</span>
                  </label>
                </div>

                <label>Mot de passe</label>
                <input type="password" required placeholder="••••••••" />

                <label className="agree">
                  <input type="checkbox" required defaultChecked />
                  <span>J'accepte les conditions d'utilisation d'Athar.</span>
                </label>

                <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                  Créer mon compte
                </button>
              </form>
            </div>
          )}

          {/* ÉTAPE 2 : FORMULAIRE ASSOCIATION */}
          {signupView === 'asso' && (
            <div className="mview">
              <button className="mback" onClick={() => setSignupView('choice')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6 5 12l6 6"/>
                </svg> Retour
              </button>
              <div className="modal-head sm">
                <div className="mtag asso">Association</div>
                <h3>Créer le compte de l'association</h3>
              </div>
              <form
                className="mform"
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast("Demande d'enregistrement transmise ! Notre équipe validera votre agrément.");
                  closeSignup();
                }}
              >
                <label>Nom de l'association</label>
                <input type="text" required placeholder="Ex. Association El Baraka" />

                <div className="frow">
                  <div>
                    <label>N° d'agrément</label>
                    <input type="text" required placeholder="Registre / RNA" />
                  </div>
                  <div>
                    <label>Wilaya</label>
                    <select defaultValue="Alger">
                      <option value="">Choisir…</option>
                      <option value="Alger">16 - Alger</option>
                      <option value="Béjaïa">06 - Béjaïa</option>
                      <option value="Oran">31 - Oran</option>
                      <option value="Constantine">25 - Constantine</option>
                      <option value="Sétif">19 - Sétif</option>
                      <option value="Tizi Ouzou">15 - Tizi Ouzou</option>
                      <option value="Autre">Autre wilaya</option>
                    </select>
                  </div>
                </div>

                <label>Email officiel</label>
                <input type="email" required placeholder="contact@association.dz" />

                <label>Téléphone</label>
                <input type="tel" required placeholder="0X XX XX XX XX" />

                <label>Domaine d'action</label>
                <select defaultValue="Solidarité">
                  <option value="">Choisir…</option>
                  <option value="Solidarité">Solidarité</option>
                  <option value="Éducation">Éducation</option>
                  <option value="Environnement">Environnement</option>
                  <option value="Santé">Santé</option>
                  <option value="Multi-domaines">Multi-domaines</option>
                </select>

                <label>Mot de passe</label>
                <input type="password" required placeholder="••••••••" />

                <div className="verif">
                  <IconShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Votre compte sera vérifié avant validation (document d'agrément demandé).</span>
                </div>

                <label className="agree">
                  <input type="checkbox" required defaultChecked />
                  <span>J'accepte les conditions d'utilisation d'Athar.</span>
                </label>

                <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                  Créer le compte
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* MODAL : CANDIDATURE À UNE MISSION */}
      <div className={`modal ${applyModalOpen ? 'on' : ''}`} aria-hidden={!applyModalOpen}>
        <div className="modal-bg" onClick={closeApply}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Candidater à une mission">
          <button className="modal-x" onClick={closeApply} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          </button>

          <div className="modal-head sm">
            <div className="mtag ben">Candidature</div>
            <h3>Candidater à cette mission</h3>
            <p className="applymission">{selectedMission || '—'}</p>
          </div>

          <form
            className="mform"
            onSubmit={(e) => {
              e.preventDefault();
              showToast(`Candidature envoyée avec succès pour "${selectedMission}" !`);
              closeApply();
            }}
          >
            <div className="frow">
              <div>
                <label>Prénom</label>
                <input type="text" required placeholder="Ex. Amine" />
              </div>
              <div>
                <label>Nom</label>
                <input type="text" required placeholder="Ex. Bellouze" />
              </div>
            </div>

            <label>Email</label>
            <input type="email" required placeholder="vous@exemple.com" />

            <label>Téléphone</label>
            <input type="tel" required placeholder="0X XX XX XX XX" />

            <label>Disponibilité</label>
            <select defaultValue="Week-end">
              <option value="">Choisir…</option>
              <option value="En semaine">En semaine</option>
              <option value="Week-end">Week-end</option>
              <option value="Soirées">Soirées</option>
              <option value="Flexible">Flexible</option>
            </select>

            <label>Message de motivation</label>
            <textarea required placeholder="Pourquoi cette mission vous intéresse-t-elle ?"></textarea>

            <label>CV / pièce jointe <span className="opt">(optionnel)</span></label>
            <label className={`filebox ${appliedFileName ? 'has' : ''}`}>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setAppliedFileName(e.target.files[0].name);
                  }
                }}
              />
              <IconPaperclip className="w-5 h-5 text-[#0d5b61] shrink-0" />
              <span className="filetxt">
                {appliedFileName ? (
                  <><b>{appliedFileName}</b></>
                ) : (
                  <>Glissez un fichier ou <b>cliquez pour choisir</b> (PDF, image…)</>
                )}
              </span>
            </label>

            <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '12px' }}>
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
