import React, { useState } from 'react';
import '../styles/association/candidatures.css';

// Assets
import assocCandYasmine from '../assets/assoc-cand-yasmine.png';
import assocCraLogo from '../assets/assoc-cra-logo.png';

// Clean SVG Icons (zero emojis)
function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconMapPin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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

function IconBriefcase({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function IconAward({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function IconUsers({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const CANDIDATES = [
  {
    id: 'c-1',
    name: 'Yasmine K.',
    roleMission: 'Soutien scolaire pour enfants',
    experience: "2 ans d'expérience",
    status: 'pending',
    avatar: assocCandYasmine,
    isImg: true,
    age: 22,
    location: 'Alger, Alger',
    studies: "Licence en sciences de l'éducation",
    languages: 'Français, Arabe, Anglais',
    bio: "Passionnée par l'entraide et l'éducation, je souhaite mettre mes compétences au service des enfants et contribuer à une société plus solidaire. J'aime travailler en équipe et je suis toujours motivée à apprendre et à m'impliquer sur le terrain.",
    rating: '4.8/5',
    completedMissionsCount: 5,
    availability: 'Week-ends, Vacances scolaires'
  },
  {
    id: 'c-2',
    name: 'Karim A.',
    roleMission: 'Reboisement urbain',
    experience: "1 an d'expérience",
    status: 'pending',
    avatar: 'KA',
    isImg: false,
    age: 25,
    location: 'Blida, Blida',
    studies: 'Master en Agronomie & Écologie',
    languages: 'Arabe, Français',
    bio: "Sensibilisé à l'urgence climatique et à la reforestation du barrage vert, je suis habitué aux travaux physiques sur le terrain.",
    rating: '4.9/5',
    completedMissionsCount: 3,
    availability: 'Samedis'
  },
  {
    id: 'c-3',
    name: 'Sabrina M.',
    roleMission: 'Distribution alimentaire',
    experience: "3 ans d'expérience",
    status: 'pending',
    avatar: 'SM',
    isImg: false,
    age: 28,
    location: 'Tizi Ouzou',
    studies: 'Assistante sociale certifiée',
    languages: 'Kabyle, Arabe, Français',
    bio: "Coordinatrice bénévole sur plusieurs campagnes hivernales de solidarité auprès des personnes vulnérables.",
    rating: '5.0/5',
    completedMissionsCount: 8,
    availability: 'Flexible'
  },
  {
    id: 'c-4',
    name: 'Mehdi T.',
    roleMission: 'Nettoyage de plage',
    experience: "1 an d'expérience",
    status: 'pending',
    avatar: 'MT',
    isImg: false,
    age: 23,
    location: 'Oran, Oran',
    studies: 'Licence en Biologie Marine',
    languages: 'Arabe, Français, Anglais',
    bio: "Membre actif d'un club de plongée sous-marine engagé dans la dépollution du littoral.",
    rating: '4.7/5',
    completedMissionsCount: 4,
    availability: 'Week-ends'
  },
  {
    id: 'c-5',
    name: 'Nour El Houda B.',
    roleMission: 'Aide aux personnes âgées',
    experience: 'Expérience terrain',
    status: 'pending',
    avatar: 'NB',
    isImg: false,
    age: 24,
    location: 'Constantine',
    studies: 'Étudiante en Pharmacie',
    languages: 'Arabe, Français',
    bio: "Dévouée à l'accompagnement médical et humain de nos aînés.",
    rating: '4.9/5',
    completedMissionsCount: 6,
    availability: 'Vendredis & Samedis'
  }
];

export default function AssociationCandidatures() {
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'accepted' | 'rejected'
  const [selectedCandidate, setSelectedCandidate] = useState(CANDIDATES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFeedback, setActionFeedback] = useState(null);

  const handleAccept = () => {
    setActionFeedback({ type: 'accept', text: `Candidature de ${selectedCandidate.name} acceptée avec succès ! Notification envoyée.` });
    setTimeout(() => setActionFeedback(null), 3500);
  };

  const handleReject = () => {
    setActionFeedback({ type: 'reject', text: `Candidature de ${selectedCandidate.name} archivée.` });
    setTimeout(() => setActionFeedback(null), 3500);
  };

  const filteredCandidates = CANDIDATES.filter((c) => {
    if (activeTab !== 'all' && c.status !== activeTab) return false;
    if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase()) && !c.roleMission.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="assoc-candidatures-root">
      
      {/* 1. EN-TÊTE DE SECTION */}
      <div className="assoc-cand-header">
        <div>
          <h1>Traitement des candidatures</h1>
          <p>Consultez les profils des bénévoles engagés, évaluez leurs motivations et validez leur participation.</p>
        </div>

        <div className="assoc-cand-count-card">
          <IconUsers className="w-5 h-5" style={{ color: 'var(--assoc-emerald)' }} />
          <div>
            <div className="assoc-cand-count-num">24</div>
            <div className="assoc-cand-count-label">Candidatures en attente</div>
          </div>
        </div>
      </div>

      {/* Toast d'action */}
      {actionFeedback && (
        <div className={`assoc-cand-toast ${actionFeedback.type}`}>
          {actionFeedback.type === 'accept' ? <IconCheck className="w-5 h-5" /> : <IconX className="w-5 h-5" />}
          <span>{actionFeedback.text}</span>
        </div>
      )}

      {/* 2. GRILLE DEUX COLONNES (LISTE GAUCHE + DOSSIER DROITE) */}
      <div className="assoc-cand-split-grid">
        
        {/* COLONNE GAUCHE : LISTE DES CANDIDATS */}
        <div className="assoc-cand-list-panel">
          
          {/* Onglets de statut */}
          <div className="assoc-cand-tabs">
            <button
              type="button"
              onClick={() => setActiveTab('pending')}
              className={`assoc-cand-tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
            >
              En attente (24)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('accepted')}
              className={`assoc-cand-tab-btn ${activeTab === 'accepted' ? 'active' : ''}`}
            >
              Acceptées (12)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rejected')}
              className={`assoc-cand-tab-btn ${activeTab === 'rejected' ? 'active' : ''}`}
            >
              Refusées (6)
            </button>
          </div>

          {/* Recherche */}
          <div className="assoc-cand-search-box">
            <IconSearch className="w-4 h-4" style={{ color: 'var(--assoc-text-muted)' }} />
            <input
              type="text"
              placeholder="Rechercher par nom ou mission..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Liste déroulante des candidats */}
          <div className="assoc-cand-scroll-list">
            {filteredCandidates.map((c) => {
              const isSelected = selectedCandidate.id === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCandidate(c)}
                  className={`assoc-cand-item-card ${isSelected ? 'selected' : ''}`}
                >
                  <div className="assoc-cand-item-left">
                    {c.isImg ? (
                      <img src={c.avatar} alt={c.name} className="assoc-cand-avatar" />
                    ) : (
                      <div className="assoc-cand-avatar">
                        {c.avatar}
                      </div>
                    )}

                    <div className="assoc-cand-info">
                      <div className="assoc-cand-name">{c.name}</div>
                      <div className="assoc-cand-mission">
                        <IconBriefcase className="w-3 h-3" style={{ display: 'inline', marginRight: '4px' }} />
                        {c.roleMission}
                      </div>
                      <div className="assoc-cand-exp">{c.experience}</div>
                    </div>
                  </div>

                  <span className={`assoc-cand-badge ${c.status}`}>
                    {c.status === 'pending' ? 'En attente' : c.status === 'accepted' ? 'Validée' : 'Refusée'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLONNE DROITE : DOSSIER DÉTAILLÉ DU CANDIDAT SÉLECTIONNÉ */}
        <div>
          <div className="assoc-cand-dossier-card">
            
            {/* En-tête : Avatar, Nom, Statut */}
            <div className="assoc-cand-dossier-header">
              <div className="assoc-cand-dossier-user">
                {selectedCandidate.isImg ? (
                  <img
                    src={selectedCandidate.avatar}
                    alt={selectedCandidate.name}
                    className="assoc-cand-dossier-avatar"
                  />
                ) : (
                  <div className="assoc-cand-dossier-avatar">
                    {selectedCandidate.avatar}
                  </div>
                )}

                <div className="assoc-cand-dossier-name-box">
                  <h2>
                    <span>{selectedCandidate.name}</span>
                    <span style={{ fontSize: '11px', background: 'var(--assoc-emerald-tint)', color: 'var(--assoc-emerald)', border: '1px solid var(--assoc-emerald-border)', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                      Profil vérifié
                    </span>
                  </h2>
                  <div className="assoc-cand-meta-pills">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <IconMapPin className="w-3.5 h-3.5" />
                      <span>{selectedCandidate.location}</span>
                    </span>
                    <span>·</span>
                    <span>{selectedCandidate.age} ans</span>
                    <span>·</span>
                    <span>{selectedCandidate.availability}</span>
                  </div>
                </div>
              </div>

              {/* Boutons d'action : Accepter / Refuser */}
              <div className="assoc-cand-decision-bar" style={{ border: 'none', padding: 0 }}>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="assoc-cand-btn-accept"
                >
                  <IconCheck className="w-4 h-4" />
                  <span>Accepter</span>
                </button>

                <button
                  type="button"
                  onClick={handleReject}
                  className="assoc-cand-btn-reject"
                >
                  <IconX className="w-4 h-4" />
                  <span>Refuser</span>
                </button>
              </div>
            </div>

            {/* Motivation / Bio du bénévole */}
            <div>
              <div className="assoc-cand-section-title">Présentation & Motivation</div>
              <div className="assoc-cand-bio-box">
                “ {selectedCandidate.bio} ”
              </div>
            </div>

            {/* Grille : Formation & Langues */}
            <div className="assoc-cand-details-grid">
              <div className="assoc-cand-detail-item">
                <div className="assoc-cand-detail-label">Niveau d'études</div>
                <div className="assoc-cand-detail-val">{selectedCandidate.studies}</div>
              </div>

              <div className="assoc-cand-detail-item">
                <div className="assoc-cand-detail-label">Langues maîtrisées</div>
                <div className="assoc-cand-detail-val">{selectedCandidate.languages}</div>
              </div>
            </div>

            {/* Certificats & Badges validés */}
            <div>
              <div className="assoc-cand-section-title">Certificats & Badges validés</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ padding: '8px 14px', background: 'var(--assoc-bg-subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600 }}>
                  <img src={assocCraLogo} alt="CRA" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  <span>Premiers secours CRA</span>
                </div>
                <div style={{ padding: '8px 14px', background: 'var(--assoc-bg-subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600 }}>
                  <IconAward className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                  <span>Attestation de Bénévolat Athar</span>
                </div>
                <div style={{ padding: '8px 14px', background: 'var(--assoc-bg-subtle)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600 }}>
                  <IconCheck className="w-4 h-4" style={{ color: '#16a34a' }} />
                  <span>Expérience terrain certifiée</span>
                </div>
              </div>
            </div>

            {/* Statistiques terrain */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
              <div style={{ padding: '14px', background: 'var(--assoc-emerald-tint)', border: '1px solid var(--assoc-emerald-border)', borderRadius: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--assoc-emerald)' }}>2 ans</div>
                <div style={{ fontSize: '11px', color: 'var(--assoc-text-muted)', fontWeight: 600, marginTop: '2px' }}>Expérience globale</div>
              </div>
              <div style={{ padding: '14px', background: 'var(--assoc-blue-light)', border: '1px solid var(--assoc-blue-border)', borderRadius: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--assoc-blue)' }}>{selectedCandidate.completedMissionsCount}</div>
                <div style={{ fontSize: '11px', color: 'var(--assoc-text-muted)', fontWeight: 600, marginTop: '2px' }}>Missions réalisées</div>
              </div>
              <div style={{ padding: '14px', background: 'var(--assoc-amber-light)', border: '1px solid var(--assoc-amber-border)', borderRadius: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--assoc-amber)' }}>{selectedCandidate.rating}</div>
                <div style={{ fontSize: '11px', color: 'var(--assoc-text-muted)', fontWeight: 600, marginTop: '2px' }}>Évaluation moyenne</div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
