import React, { useState } from 'react';
import '../styles/association/post-proof.css';

// Assets
import assocCraLogo from '../assets/assoc-cra-logo.png';
import assocPubHero from '../assets/assoc-pub-hero.png';
import assocPubTh1 from '../assets/assoc-pub-th1.png';
import assocPubTh2 from '../assets/assoc-pub-th2.png';
import assocPubTh3 from '../assets/assoc-pub-th3.png';

// Clean SVG Icons (zero emojis)
function IconArrowLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
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

function IconHeart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function IconSend({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconX({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconMessageSquare({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function IconBookmark({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
  );
}

function IconShare({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" x2="12" y1="2" y2="15"/>
    </svg>
  );
}

export default function AssociationPostProof({ onBackToFeed, onPublished }) {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [caption, setCaption] = useState(
    "Nettoyage de la plage de Sidi Fredj avec nos bénévoles.\n\nUne belle mobilisation citoyenne aujourd'hui pour un littoral préservé. Merci à toutes et tous pour votre engagement rigoureux sur le terrain !\n\n#Environnement #Bénévolat #AlgériePlusBelle"
  );
  const [location, setLocation] = useState("Plage de Sidi Fredj, Alger");
  const [date, setDate] = useState("2025-04-27");
  const [category, setCategory] = useState("environnement");
  const [proofType, setProofType] = useState("tracabilite");
  const [visibility, setVisibility] = useState("publique"); // 'publique' | 'communaute' | 'privee'

  const [taggedVolunteers, setTaggedVolunteers] = useState([
    { id: '1', name: 'Yasmine K.', avatar: 'YK' },
    { id: '2', name: 'Karim A.', avatar: 'KA' },
    { id: '3', name: 'Sabrina M.', avatar: 'SM' },
  ]);

  const [suggestedVolunteers, setSuggestedVolunteers] = useState([
    { id: '4', name: 'Mehdi T.', avatar: 'MT' },
    { id: '5', name: 'Amira B.', avatar: 'AB' },
    { id: '6', name: 'Walid S.', avatar: 'WS' },
    { id: '7', name: 'Nour E.', avatar: 'NE' },
  ]);

  const [publishedSuccess, setPublishedSuccess] = useState(false);

  const handleAddVolunteer = (vol) => {
    setTaggedVolunteers((prev) => [...prev, vol]);
    setSuggestedVolunteers((prev) => prev.filter((v) => v.id !== vol.id));
  };

  const handleRemoveVolunteer = (vol) => {
    setTaggedVolunteers((prev) => prev.filter((v) => v.id !== vol.id));
    setSuggestedVolunteers((prev) => [...prev, vol]);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    setPublishedSuccess(true);
    setTimeout(() => {
      setPublishedSuccess(false);
      if (onPublished) onPublished();
      else if (onBackToFeed) onBackToFeed();
    }, 1800);
  };

  const thumbs = [assocPubTh1, assocPubTh2, assocPubTh3];

  return (
    <div className="assoc-proof-root">
      
      {/* 1. EN-TÊTE DE LA PAGE */}
      <div className="assoc-proof-header">
        <div className="assoc-proof-header-left">
          <button
            type="button"
            onClick={onBackToFeed}
            className="assoc-proof-back-btn"
            title="Retour au profil"
          >
            <IconArrowLeft className="w-5 h-5" />
          </button>

          <div className="assoc-proof-header-titles">
            <h1>Publier une preuve d'impact</h1>
            <p>Documentez vos actions terrain avec photos et traçabilité transparente.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onBackToFeed}
          style={{
            background: 'none',
            border: '1px solid var(--assoc-border)',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '12.5px',
            fontWeight: 600,
            color: 'var(--assoc-text-body)',
            cursor: 'pointer'
          }}
        >
          Annuler
        </button>
      </div>

      {/* Message de succès */}
      {publishedSuccess && (
        <div style={{ padding: '14px 20px', background: 'var(--assoc-emerald-tint)', border: '1px solid var(--assoc-emerald-border)', borderRadius: '12px', color: 'var(--assoc-emerald)', fontWeight: 700, fontSize: '13.5px' }}>
          Preuve de terrain publiée avec succès sur le fil d'actualité !
        </div>
      )}

      {/* 2. GRILLE DEUX COLONNES : FORMULAIRE ET APERÇU LIVE */}
      <div className="assoc-proof-grid">
        
        {/* FORMULAIRE GAUCHE */}
        <form onSubmit={handlePublish} className="assoc-proof-form-pane">
          
          {/* ÉTAPE 1 : PHOTOS */}
          <div className="assoc-proof-card">
            <h2 className="assoc-proof-step-title">
              <span className="assoc-proof-step-num">1</span>
              <span>Photos de terrain</span>
            </h2>

            {/* Photo principale */}
            <div style={{ height: '220px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid var(--assoc-border)' }}>
              <img
                src={assocPubHero}
                alt="Action terrain"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Vignettes */}
            <div className="assoc-proof-thumbs-row">
              {thumbs.map((th, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedThumb(idx)}
                  className={`assoc-proof-thumb-item ${selectedThumb === idx ? 'active' : ''}`}
                >
                  <img src={th} alt={`Vignette ${idx + 1}`} />
                </div>
              ))}
              <div
                style={{
                  borderRadius: '12px',
                  border: '2px dashed var(--assoc-emerald-border)',
                  background: 'var(--assoc-emerald-tint)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--assoc-emerald)'
                }}
              >
                <span style={{ fontSize: '18px' }}>+</span>
                <span>Ajouter</span>
              </div>
            </div>
          </div>

          {/* ÉTAPE 2 : COMPTE RENDU */}
          <div className="assoc-proof-card">
            <h2 className="assoc-proof-step-title">
              <span className="assoc-proof-step-num">2</span>
              <span>Compte rendu de l'action</span>
            </h2>

            <div className="assoc-field-group">
              <label className="assoc-field-label">Description détaillée de l'impact</label>
              <textarea
                className="assoc-field-textarea"
                rows={5}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Décrivez les résultats obtenus sur le terrain, le nombre de bénéficiaires..."
              />
            </div>
          </div>

          {/* ÉTAPE 3 : BÉNÉVOLES PARTICIPANTS */}
          <div className="assoc-proof-card">
            <h2 className="assoc-proof-step-title">
              <span className="assoc-proof-step-num">3</span>
              <span>Bénévoles mobilisés</span>
            </h2>

            <div className="assoc-proof-tagged-volunteers">
              {taggedVolunteers.map((vol) => (
                <div key={vol.id} className="assoc-tagged-vol-pill">
                  <span>{vol.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveVolunteer(vol)}
                    className="assoc-tagged-vol-remove"
                  >
                    <IconX className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '10px' }}>
              <small style={{ color: 'var(--assoc-text-muted)', fontSize: '12px', display: 'block', marginBottom: '8px' }}>
                Suggestions récentes :
              </small>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {suggestedVolunteers.map((vol) => (
                  <button
                    type="button"
                    key={vol.id}
                    onClick={() => handleAddVolunteer(vol)}
                    style={{
                      border: '1px solid var(--assoc-border)',
                      background: '#ffffff',
                      borderRadius: '8px',
                      padding: '4px 10px',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: 'var(--assoc-text-body)',
                      cursor: 'pointer'
                    }}
                  >
                    + {vol.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ÉTAPE 4 : DÉTAILS SPÉCIFIQUES */}
          <div className="assoc-proof-card">
            <h2 className="assoc-proof-step-title">
              <span className="assoc-proof-step-num">4</span>
              <span>Informations de localisation & date</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="assoc-field-group">
                <label className="assoc-field-label">Lieu de l'intervention</label>
                <input
                  type="text"
                  className="assoc-field-input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="assoc-field-group">
                <label className="assoc-field-label">Date</label>
                <input
                  type="date"
                  className="assoc-field-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '10px' }}>
              <div className="assoc-field-group">
                <label className="assoc-field-label">Thématique</label>
                <select
                  className="assoc-field-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="environnement">Environnement & Reboisement</option>
                  <option value="solidarite">Solidarité & Dignité</option>
                  <option value="education">Éducation & Soutien</option>
                  <option value="sante">Santé & Secours</option>
                  <option value="culture">Culture & Patrimoine</option>
                </select>
              </div>

              <div className="assoc-field-group">
                <label className="assoc-field-label">Visibilité</label>
                <select
                  className="assoc-field-select"
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                >
                  <option value="publique">Publique (Tous les citoyens)</option>
                  <option value="communaute">Communauté des bénévoles</option>
                  <option value="privee">Interne association</option>
                </select>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="assoc-proof-actions-row">
            <button
              type="button"
              className="assoc-proof-btn-draft"
            >
              Enregistrer brouillon
            </button>
            <button
              type="submit"
              className="assoc-proof-btn-publish"
            >
              <IconSend className="w-4 h-4" />
              <span>Publier la preuve</span>
            </button>
          </div>
        </form>

        {/* APERÇU LIVE DROITE */}
        <div className="assoc-proof-preview-pane">
          <div className="assoc-proof-preview-badge">
            <span>● Aperçu en direct dans le fil d'actualité</span>
          </div>

          <div className="assoc-proof-preview-card">
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={assocCraLogo} alt="CRA" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'contain', border: '1px solid var(--assoc-border)', padding: '2px' }} />
              <div>
                <strong style={{ fontSize: '13.5px', color: 'var(--assoc-text-primary)', display: 'block' }}>Croissant Rouge Algérien</strong>
                <small style={{ fontSize: '11.5px', color: 'var(--assoc-text-muted)' }}>{location} · Aujourd'hui</small>
              </div>
            </div>

            <div className="assoc-proof-preview-img-wrap">
              <img src={assocPubHero} alt="Aperçu héro" />
            </div>

            <div className="assoc-proof-preview-body">
              <p className="assoc-proof-preview-caption">
                {caption}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--assoc-border-subtle)', fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <IconHeart className="w-4 h-4" style={{ color: '#f43f5e' }} />
                    <span>0</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <IconMessageSquare className="w-4 h-4" />
                    <span>0</span>
                  </span>
                  <IconShare className="w-4 h-4" />
                </div>
                <IconBookmark className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
