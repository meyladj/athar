import React, { useState } from 'react';
import '../styles/association/missions.css';

// Assets
import assocMissionKabylie from '../assets/assoc-mission-kabylie.png';
import assocMissionMadagh from '../assets/assoc-mission-madagh.png';
import assocMissionConstantine from '../assets/assoc-mission-constantine.png';
import assocMissionDjanet from '../assets/assoc-mission-djanet.png';
import assocMissionTipaza from '../assets/assoc-mission-tipaza.png';

// Clean SVG Icons (zero emojis)
function IconCalendar({ className = "w-3.5 h-3.5" }) {
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

function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconFilter({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function IconBriefcase({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function IconFileText({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
    </svg>
  );
}

function IconEye({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconEdit({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function IconCheckCircle({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconPercent({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function IconPlus({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

const MISSIONS_DATA = [
  {
    id: 'm-1',
    title: 'Reboisement des forêts de Kabylie',
    status: 'active',
    statusLabel: 'Active',
    description: 'Plantation de 1 000 arbres pour préserver nos forêts et lutter contre la désertification.',
    date: 'Sam. 26 avr. 2025',
    location: 'Tizi Ouzou, Kabylie',
    volunteersTotal: 45,
    volunteersJoined: 32,
    percent: 71,
    image: assocMissionKabylie,
    color: '#16a34a'
  },
  {
    id: 'm-2',
    title: 'Nettoyage de la plage de Madagh',
    status: 'upcoming',
    statusLabel: 'À venir',
    description: 'Mobilisation citoyenne pour une côte plus propre et un littoral préservé.',
    date: 'Sam. 17 mai 2025',
    location: 'Aïn El Turk, Oran',
    volunteersTotal: 60,
    volunteersJoined: 18,
    percent: 30,
    image: assocMissionMadagh,
    color: '#2563eb'
  },
  {
    id: 'm-3',
    title: 'Atelier éducatif pour les jeunes',
    status: 'upcoming',
    statusLabel: 'À venir',
    description: 'Sensibilisation, soutien scolaire et orientation pour les collégiens et lycéens.',
    date: 'Mer. 21 mai 2025',
    location: 'Constantine',
    volunteersTotal: 30,
    volunteersJoined: 12,
    percent: 40,
    image: assocMissionConstantine,
    color: '#2563eb'
  },
  {
    id: 'm-4',
    title: 'Caravane médicale dans le Sud',
    status: 'active',
    statusLabel: 'Active',
    description: 'Consultations médicales et sensibilisation au profit des populations locales.',
    date: 'Ven. 9 mai 2025',
    location: 'Djanet, Illizi',
    volunteersTotal: 40,
    volunteersJoined: 28,
    percent: 70,
    image: assocMissionDjanet,
    color: '#16a34a'
  },
  {
    id: 'm-5',
    title: 'Nettoyage du site antique de Tipaza',
    status: 'active',
    statusLabel: 'Active',
    description: 'Préservons notre patrimoine historique et culturel pour les générations futures.',
    date: 'Sam. 3 mai 2025',
    location: 'Tipaza',
    volunteersTotal: 25,
    volunteersJoined: 20,
    percent: 80,
    image: assocMissionTipaza,
    color: '#16a34a'
  }
];

export default function AssociationMissions({ onOpenCreateMission }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'active' | 'upcoming' | 'completed'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMission, setSelectedMission] = useState(null);

  const filteredMissions = MISSIONS_DATA.filter((m) => {
    if (activeTab === 'active' && m.status !== 'active') return false;
    if (activeTab === 'upcoming' && m.status !== 'upcoming') return false;
    if (activeTab === 'completed' && m.status !== 'completed') return false;
    if (searchQuery && !m.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="assoc-missions-root">
      
      {/* 1. EN-TÊTE DE LA SECTION MISSIONS */}
      <div className="assoc-missions-header">
        <div className="assoc-missions-header-left">
          <h1>Gestion des missions</h1>
          <p>
            Créez, organisez et suivez vos missions de bénévolat. Ensemble, donnons plus d'impact à nos actions !
          </p>
        </div>

        {/* Citation cursive + Bouton d'action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'right', display: 'none' }} className="sm:block">
            <span
              style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--assoc-navy-light)' }}
            >
              Des citoyens,<br />Un impact réel.
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenCreateMission}
            className="assoc-btn-create-mission"
          >
            <IconPlus className="w-4 h-4" />
            <span>Créer une mission</span>
          </button>
        </div>
      </div>

      {/* 2. STATS ROW (4 CARTES AÉRÉES) */}
      <div className="assoc-missions-stats-grid">
        {/* 1. Missions au total */}
        <div className="assoc-missions-stat-card">
          <div className="assoc-missions-stat-icon emerald">
            <IconBriefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-missions-stat-val">24</div>
            <div className="assoc-missions-stat-sub">Missions au total</div>
          </div>
        </div>

        {/* 2. Places ouvertes */}
        <div className="assoc-missions-stat-card">
          <div className="assoc-missions-stat-icon blue">
            <IconUsers className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-missions-stat-val">532</div>
            <div className="assoc-missions-stat-sub">Places ouvertes</div>
          </div>
        </div>

        {/* 3. Candidatures reçues */}
        <div className="assoc-missions-stat-card">
          <div className="assoc-missions-stat-icon amber">
            <IconFileText className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-missions-stat-val">1 248</div>
            <div className="assoc-missions-stat-sub">Candidatures reçues</div>
          </div>
        </div>

        {/* 4. Carte Citation Athar */}
        <div className="assoc-quote-stat-card">
          <p className="assoc-quote-stat-text">
            “ Des petites actions font de grands changements. ”
          </p>
          <div className="assoc-quote-stat-author">
            — Athar
          </div>
        </div>
      </div>

      {/* 3. BARRE D'OUTILS : ONGLETS ET RECHERCHE */}
      <div className="assoc-missions-filter-bar">
        {/* Onglets de filtrage par statut */}
        <div className="assoc-status-pills">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`assoc-status-pill ${activeTab === 'all' ? 'active' : ''}`}
          >
            Toutes les missions (24)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('active')}
            className={`assoc-status-pill ${activeTab === 'active' ? 'active' : ''}`}
          >
            Actives (18)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`assoc-status-pill ${activeTab === 'upcoming' ? 'active' : ''}`}
          >
            À venir (6)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('completed')}
            className={`assoc-status-pill ${activeTab === 'completed' ? 'active' : ''}`}
          >
            Terminées (42)
          </button>
        </div>

        {/* Barre de recherche */}
        <div className="assoc-missions-search-wrap">
          <div className="assoc-missions-search-input">
            <IconSearch className="w-4 h-4" style={{ color: 'var(--assoc-text-muted)', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Rechercher une mission par titre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            type="button"
            style={{
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid var(--assoc-border)',
              backgroundColor: '#ffffff',
              color: 'var(--assoc-text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
            title="Filtres avancés"
          >
            <IconFilter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4. GRILLE DES MISSIONS (CARTES SPACIEUSES SANS TEXTE COLLÉ) */}
      <div className="assoc-missions-cards-grid">
        {filteredMissions.map((m) => (
          <div
            key={m.id}
            className="assoc-mission-card"
          >
            {/* Photo de couverture de la mission */}
            <div className="assoc-mission-hero-img">
              <img
                src={m.image}
                alt={m.title}
              />

              {/* Badge de statut flottant */}
              <div className={`assoc-mission-badge-status ${m.status}`}>
                <span>●</span>
                <span>{m.statusLabel}</span>
              </div>
            </div>

            {/* Corps de la carte de mission : PADDING GÉNÉREUX (24PX) */}
            <div className="assoc-mission-card-body">
              <div>
                <h3 className="assoc-mission-card-title">
                  {m.title}
                </h3>
                <p className="assoc-mission-card-desc">
                  {m.description}
                </p>

                {/* Rangée de métadonnées avec icônes nettes */}
                <div className="assoc-mission-meta-row">
                  <span className="assoc-mission-meta-item">
                    <IconCalendar className="w-3.5 h-3.5" />
                    <span>{m.date}</span>
                  </span>
                  <span className="assoc-mission-meta-item">
                    <IconMapPin className="w-3.5 h-3.5" />
                    <span>{m.location}</span>
                  </span>
                  <span className="assoc-mission-meta-item">
                    <IconUsers className="w-3.5 h-3.5" />
                    <span>{m.volunteersTotal} bénévoles</span>
                  </span>
                </div>
              </div>

              {/* Jauge de progression des bénévoles inscrits */}
              <div className="assoc-mission-gauge-box">
                <div className="assoc-mission-gauge-labels">
                  <span>{m.volunteersJoined} / {m.volunteersTotal} inscrits</span>
                  <span>{m.percent}%</span>
                </div>
                <div className="assoc-mission-gauge-track">
                  <div
                    className="assoc-mission-gauge-fill"
                    style={{
                      width: `${m.percent}%`,
                      backgroundColor: m.color
                    }}
                  />
                </div>
              </div>

              {/* Rangée d'actions sur la mission */}
              <div className="assoc-mission-card-actions">
                <button
                  type="button"
                  onClick={() => setSelectedMission(m)}
                  className="assoc-mission-btn-manage"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <IconEye className="w-3.5 h-3.5" />
                  <span>Détails</span>
                </button>

                <button
                  type="button"
                  className="assoc-mission-btn-manage"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <IconEdit className="w-3.5 h-3.5" />
                  <span>Modifier</span>
                </button>

                <button
                  type="button"
                  className="assoc-mission-btn-candidatures"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <IconCheckCircle className="w-3.5 h-3.5" />
                  <span>Inscrits</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* 6ème carte : Créer une nouvelle mission */}
        <div
          onClick={onOpenCreateMission}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '2px dashed var(--assoc-emerald-border)',
            padding: '36px 28px',
            boxShadow: 'var(--assoc-shadow-xs)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            minHeight: '360px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--assoc-emerald)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--assoc-emerald-border)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--assoc-emerald-light)',
              color: 'var(--assoc-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: 'var(--assoc-shadow-xs)'
            }}
          >
            <IconPlus className="w-6 h-6" />
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 8px' }}>
            Créer une nouvelle mission
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--assoc-text-muted)', maxWidth: '280px', lineHeight: 1.6, margin: '0 0 20px' }}>
            Lancez une nouvelle action sur le terrain et mobilisez des bénévoles partout en Algérie.
          </p>

          <button
            type="button"
            className="assoc-btn-create-mission"
          >
            <IconPlus className="w-4 h-4" />
            <span>Publier une mission</span>
          </button>
        </div>
      </div>

      {/* MODAL DE DÉTAIL D'UNE MISSION */}
      {selectedMission && (
        <div className="assoc-modal-backdrop" onClick={() => setSelectedMission(null)}>
          <div
            className="assoc-modal-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              padding: '28px 32px',
              position: 'relative',
              boxShadow: 'var(--assoc-shadow-lg)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '180px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '18px' }}>
              <img src={selectedMission.image} alt={selectedMission.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 8px' }}>
              {selectedMission.title}
            </h2>
            <p style={{ fontSize: '13.5px', color: 'var(--assoc-text-body)', lineHeight: 1.6, margin: '0 0 18px' }}>
              {selectedMission.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'var(--assoc-bg-subtle)', padding: '16px', borderRadius: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--assoc-text-body)' }}>
                <IconMapPin className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                <span>{selectedMission.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--assoc-text-body)' }}>
                <IconCalendar className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                <span>{selectedMission.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--assoc-text-body)' }}>
                <IconUsers className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                <span>{selectedMission.volunteersJoined} / {selectedMission.volunteersTotal} bénévoles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--assoc-text-body)' }}>
                <IconPercent className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                <span>{selectedMission.percent}% d'inscrits</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setSelectedMission(null)}
                className="assoc-btn-create-mission"
                style={{ padding: '10px 22px' }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
