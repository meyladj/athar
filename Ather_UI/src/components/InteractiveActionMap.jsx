import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import profileBannerAlgiers from '../assets/profile-banner-algiers.png';
import mapBloodAction from '../assets/map-blood-action.png';
import mapReboisement from '../assets/map-reboisement.png';
import mapDistribution from '../assets/map-distribution.png';
import mapAtelierArt from '../assets/map-atelier-art.png';
import mapDepistageMedical from '../assets/map-depistage-medical.png';

// SVG Icons
function IconMapPin({ className = "w-4 h-4" }) {
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

function IconClock({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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

function IconArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconRefresh({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
      <path d="M16 21h5v-5"/>
    </svg>
  );
}

function IconLeaf({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function IconCrosshair({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="22" x2="18" y1="12" y2="12"/>
      <line x1="6" x2="2" y1="12" y2="12"/>
      <line x1="12" x2="12" y1="6" y2="2"/>
      <line x1="12" x2="12" y1="22" y2="18"/>
    </svg>
  );
}

// 16 points d'action avec les 4 codes couleurs exigés (Rouge, Bleu, Violet, Vert)
const MAP_ACTIONS = [
  // 1. ROUGE : URGENCES (4)
  {
    id: 'urg-1',
    type: 'emergency',
    badge: 'Urgence Vitale',
    badgeColor: '#ffffff',
    badgeBg: '#ef4444',
    title: "Collecte d'Urgence Don de Sang (Pavillon Pasteur)",
    association: 'CTS CHU Mustapha Pacha',
    wilaya: 'Alger',
    date: 'Sam. 19 Avril 2025',
    time: '08h30 – 16h30',
    spots: '18 places restantes',
    image: mapBloodAction,
    coords: [36.7578, 3.0560],
    iconType: 'cross'
  },
  {
    id: 'urg-2',
    type: 'emergency',
    badge: 'Urgence',
    badgeColor: '#ffffff',
    badgeBg: '#ef4444',
    title: 'Dépistage médical gratuit',
    association: 'Association El Baraka',
    wilaya: 'Sidi Bel Abbès',
    date: 'Sam. 10 Mai 2025',
    time: '09h00 – 14h00',
    spots: '15 places restantes',
    image: mapDepistageMedical,
    coords: [35.1899, -0.6308],
    iconType: 'cross'
  },
  {
    id: 'urg-3',
    type: 'emergency',
    badge: 'Urgence Vitale',
    badgeColor: '#ffffff',
    badgeBg: '#ef4444',
    title: 'Don de sang CHU Bab El Oued',
    association: 'CHU Bab El Oued',
    wilaya: 'Alger',
    date: 'Dim. 20 Avril 2025',
    time: '09h00 – 15h00',
    spots: '12 places restantes',
    image: mapBloodAction,
    coords: [36.7925, 3.0489],
    iconType: 'cross'
  },
  {
    id: 'urg-4',
    type: 'emergency',
    badge: 'Secours',
    badgeColor: '#ffffff',
    badgeBg: '#ef4444',
    title: 'Poste de secours et réanimation',
    association: 'Croissant Rouge Algérien',
    wilaya: 'Ghardaïa',
    date: 'Mer. 23 Avril 2025',
    time: '10h00 – 16h00',
    spots: '8 places restantes',
    image: mapDepistageMedical,
    coords: [32.4909, 3.6735],
    iconType: 'cross'
  },

  // 2. BLEU : SOLIDARITÉ (4)
  {
    id: 'sol-1',
    type: 'solidarity',
    badge: 'Solidarité',
    badgeColor: '#ffffff',
    badgeBg: '#3b82f6',
    title: 'Distribution de paniers alimentaires',
    association: 'Croissant Rouge Algérien',
    wilaya: 'Oran',
    date: 'Dim. 27 Avril 2025',
    time: '10h00 – 15h00',
    spots: '12 places restantes',
    image: mapDistribution,
    coords: [35.6987, -0.6349],
    iconType: 'shield'
  },
  {
    id: 'sol-2',
    type: 'solidarity',
    badge: 'Solidarité',
    badgeColor: '#ffffff',
    badgeBg: '#3b82f6',
    title: 'Colis alimentaires zones d\'ombre',
    association: 'Association El Baraka',
    wilaya: 'Béchar',
    date: 'Jeu. 1 Mai 2025',
    time: '08h00 – 16h00',
    spots: '16 places restantes',
    image: mapDistribution,
    coords: [31.6167, -2.2167],
    iconType: 'shield'
  },
  {
    id: 'sol-3',
    type: 'solidarity',
    badge: 'Solidarité',
    badgeColor: '#ffffff',
    badgeBg: '#3b82f6',
    title: 'Aide aux familles nécessiteuses',
    association: 'Croissant Rouge Algérien',
    wilaya: 'Constantine',
    date: 'Sam. 26 Avril 2025',
    time: '09h00 – 14h00',
    spots: '14 places restantes',
    image: mapDistribution,
    coords: [36.3650, 6.6147],
    iconType: 'shield'
  },
  {
    id: 'sol-4',
    type: 'solidarity',
    badge: 'Solidarité',
    badgeColor: '#ffffff',
    badgeBg: '#3b82f6',
    title: 'Convoi vestimentaire grand sud',
    association: 'Nass El Khir',
    wilaya: 'Tamanrasset',
    date: 'Lun. 5 Mai 2025',
    time: '08h00 – 17h00',
    spots: '10 places restantes',
    image: mapDistribution,
    coords: [22.7850, 5.5228],
    iconType: 'shield'
  },

  // 3. VIOLET : ÉDUCATION (4)
  {
    id: 'edu-1',
    type: 'education',
    badge: 'Éducation',
    badgeColor: '#ffffff',
    badgeBg: '#a855f7',
    title: "Atelier d'art et d'éducation pour les enfants",
    association: 'Lire pour Demain',
    wilaya: 'Constantine',
    date: 'Sam. 3 Mai 2025',
    time: '09h00 – 12h00',
    spots: '20 places restantes',
    image: mapAtelierArt,
    coords: [36.3500, 6.6000],
    iconType: 'book'
  },
  {
    id: 'edu-2',
    type: 'education',
    badge: 'Éducation',
    badgeColor: '#ffffff',
    badgeBg: '#a855f7',
    title: 'Bibliothèques de rue pour enfants',
    association: 'Lire pour Demain',
    wilaya: 'Alger',
    date: 'Mer. 7 Mai 2025',
    time: '14h00 – 17h00',
    spots: '10 places restantes',
    image: mapAtelierArt,
    coords: [36.7750, 3.0600],
    iconType: 'book'
  },
  {
    id: 'edu-3',
    type: 'education',
    badge: 'Éducation',
    badgeColor: '#ffffff',
    badgeBg: '#a855f7',
    title: 'Soutien scolaire et initiation numérique',
    association: 'Club Scientifique',
    wilaya: 'Tlemcen',
    date: 'Ven. 9 Mai 2025',
    time: '09h30 – 13h00',
    spots: '12 places restantes',
    image: mapAtelierArt,
    coords: [34.8783, -1.3150],
    iconType: 'book'
  },
  {
    id: 'edu-4',
    type: 'education',
    badge: 'Éducation',
    badgeColor: '#ffffff',
    badgeBg: '#a855f7',
    title: 'Atelier conte saharien et lecture',
    association: 'Lire pour Demain',
    wilaya: 'Tamanrasset',
    date: 'Sam. 17 Mai 2025',
    time: '16h00 – 19h00',
    spots: '8 places restantes',
    image: mapAtelierArt,
    coords: [22.7950, 5.5350],
    iconType: 'book'
  },

  // 4. VERT : PLANTATIONS (4)
  {
    id: 'pla-1',
    type: 'planting',
    badge: 'Plantation',
    badgeColor: '#ffffff',
    badgeBg: '#10b981',
    title: 'Campagne de Reboisement à Tipaza',
    association: 'Green Future',
    wilaya: 'Tipaza',
    date: 'Sam. 26 Avril 2025',
    time: '09h00 – 13h00',
    spots: '24 places restantes',
    image: mapReboisement,
    coords: [36.5897, 2.4475],
    iconType: 'tree'
  },
  {
    id: 'pla-2',
    type: 'planting',
    badge: 'Plantation',
    badgeColor: '#ffffff',
    badgeBg: '#10b981',
    title: 'Reboisement de la forêt de Zéralda',
    association: 'Green Future',
    wilaya: 'Alger',
    date: 'Sam. 12 Avril 2025',
    time: '09h00 – 15h00',
    spots: '30 places restantes',
    image: mapReboisement,
    coords: [36.7135, 2.8420],
    iconType: 'tree'
  },
  {
    id: 'pla-3',
    type: 'planting',
    badge: 'Plantation',
    badgeColor: '#ffffff',
    badgeBg: '#10b981',
    title: 'Ceinture verte contre la désertification',
    association: 'Club Vert USTHB',
    wilaya: 'Djelfa',
    date: 'Sam. 10 Mai 2025',
    time: '08h30 – 15h00',
    spots: '22 places restantes',
    image: mapReboisement,
    coords: [34.6728, 3.2500],
    iconType: 'tree'
  },
  {
    id: 'pla-4',
    type: 'planting',
    badge: 'Plantation',
    badgeColor: '#ffffff',
    badgeBg: '#10b981',
    title: 'Plantation d\'arganiers et caroubiers',
    association: 'Green Future',
    wilaya: 'Mascara',
    date: 'Sam. 17 Mai 2025',
    time: '09h00 – 14h00',
    spots: '18 places restantes',
    image: mapReboisement,
    coords: [35.3967, 0.1400],
    iconType: 'tree'
  }
];

export default function InteractiveActionMap({
  currentLang = 'fr',
  volunteerUser = null,
  onToast = () => {},
  onSelectMission = null
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState('ALL'); // 'ALL' | 'emergency' | 'solidarity' | 'education' | 'planting'
  const [selectedWilaya, setSelectedWilaya] = useState('ALL');
  const [selectedActionId, setSelectedActionId] = useState('urg-1');

  // Filtrage
  const filteredActions = MAP_ACTIONS.filter(act => {
    if (activeCategory !== 'ALL' && act.type !== activeCategory) return false;
    if (selectedWilaya !== 'ALL' && act.wilaya !== selectedWilaya) return false;
    return true;
  });

  // Initialisation et mise à jour de la carte Leaflet
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Centre sur l'Algérie
      const map = L.map(mapContainerRef.current, {
        center: [33.5, 3.0],
        zoom: 5.5,
        zoomControl: true,
        scrollWheelZoom: false
      });

      // Fond de carte épuré CartoDB Positron / OSM clair
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 18
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersGroupRef.current = markersGroup;
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;
    markersGroup.clearLayers();

    filteredActions.forEach(act => {
      // Pin icon HTML avec couleurs conformes à map benev.png
      let pinColor = '#ef4444'; // rouge
      let pinSymbol = '+';
      if (act.type === 'solidarity') {
        pinColor = '#3b82f6'; // bleu
        pinSymbol = '🤝';
      } else if (act.type === 'education') {
        pinColor = '#a855f7'; // violet
        pinSymbol = '📖';
      } else if (act.type === 'planting') {
        pinColor = '#10b981'; // vert
        pinSymbol = '🌱';
      }

      const isSelected = act.id === selectedActionId;

      const markerHtml = `
        <div style="
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: ${pinColor};
          border: 2.5px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 15px;
          font-weight: 900;
          cursor: pointer;
          transform: ${isSelected ? 'scale(1.2)' : 'scale(1)'};
          transition: transform 0.2s ease;
        ">
          ${pinSymbol}
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'athar-map-pin',
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      const marker = L.marker(act.coords, { icon: customIcon });

      marker.on('click', () => {
        setSelectedActionId(act.id);
        if (onSelectMission) onSelectMission(act);
      });

      markersGroup.addLayer(marker);
    });
  }, [filteredActions, selectedActionId]);

  const handleFlyTo = (act) => {
    setSelectedActionId(act.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(act.coords, 10, { duration: 1 });
    }
  };

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '50px' }}>
      
      {/* 1. BREADCRUMBS & HERO TITLE (map benev.png) */}
      <div 
        className="feed-welcome-banner"
        style={{
          background: 'linear-gradient(135deg, #edf9f6 0%, #e2f5f1 100%)',
          borderRadius: '20px',
          padding: '24px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          border: '1px solid rgba(0, 109, 91, 0.12)',
          boxShadow: '0 2px 12px rgba(0, 109, 91, 0.04)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ flex: '1 1 55%', zIndex: 2 }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '6px' }}>
            <span>Accueil</span>
            <span style={{ margin: '0 6px' }}>&gt;</span>
            <span style={{ color: '#006D5B', fontWeight: 800 }}>Action Map</span>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.25 }}>
            Points d'Action & Missions<br />près de chez vous
          </h1>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5, maxWidth: '480px' }}>
            Découvrez les actions solidaires en cours partout en Algérie et rejoignez celles qui vous inspirent.
          </p>
        </div>

        {/* IMAGE PANORAMIQUE ALGER + SLOGAN CURSIF */}
        <div style={{ flex: '0 0 380px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative', width: '330px', height: '110px', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <img 
              src={profileBannerAlgiers} 
              alt="Makam Echahid et Baie d'Alger" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(237,249,246,0.1), rgba(0,0,0,0.15))' }} />
          </div>
          <div 
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'right',
              color: '#0f172a',
              textShadow: '0 1px 4px rgba(255,255,255,0.9)'
            }}
          >
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '19px', fontWeight: 700, color: '#004d40', lineHeight: 1.15 }}>
              Des citoyens,
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '19px', fontWeight: 700, color: '#004d40', lineHeight: 1.15, textDecoration: 'underline' }}>
              Un impact réel.
            </div>
          </div>
        </div>
      </div>

      {/* 2. BARRE DE FILTRES DES CATÉGORIES (map benev.png) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginRight: '6px' }}>Catégories</span>
          
          {/* TOUTES (16) */}
          <button
            type="button"
            onClick={() => setActiveCategory('ALL')}
            style={{
              padding: '6px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeCategory === 'ALL' ? '2px solid #006D5B' : '1px solid #cbd5e1',
              background: activeCategory === 'ALL' ? '#e6f7f3' : '#ffffff',
              color: activeCategory === 'ALL' ? '#006D5B' : '#334155',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>☀️</span>
            <span>Toutes (16)</span>
          </button>

          {/* URGENCES (4) */}
          <button
            type="button"
            onClick={() => setActiveCategory('emergency')}
            style={{
              padding: '6px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeCategory === 'emergency' ? '2px solid #ef4444' : '1px solid #fecaca',
              background: activeCategory === 'emergency' ? '#fee2e2' : '#ffffff',
              color: '#b91c1c',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
            <span>Urgences (4)</span>
          </button>

          {/* SOLIDARITÉ (4) */}
          <button
            type="button"
            onClick={() => setActiveCategory('solidarity')}
            style={{
              padding: '6px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeCategory === 'solidarity' ? '2px solid #3b82f6' : '1px solid #bfdbfe',
              background: activeCategory === 'solidarity' ? '#dbeafe' : '#ffffff',
              color: '#1d4ed8',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
            <span>Solidarité (4)</span>
          </button>

          {/* ÉDUCATION (4) */}
          <button
            type="button"
            onClick={() => setActiveCategory('education')}
            style={{
              padding: '6px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeCategory === 'education' ? '2px solid #a855f7' : '1px solid #e9d5ff',
              background: activeCategory === 'education' ? '#f3e8ff' : '#ffffff',
              color: '#7e22ce',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }} />
            <span>Éducation (4)</span>
          </button>

          {/* PLANTATIONS (4) */}
          <button
            type="button"
            onClick={() => setActiveCategory('planting')}
            style={{
              padding: '6px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeCategory === 'planting' ? '2px solid #10b981' : '1px solid #a7f3d0',
              background: activeCategory === 'planting' ? '#dcfce7' : '#ffffff',
              color: '#15803d',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            <span>Plantations (4)</span>
          </button>
        </div>

        {/* LIGNE WILAYA & RESET */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>Wilaya</span>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <IconMapPin className="w-4 h-4 text-emerald-700" style={{ position: 'absolute', left: '12px' }} />
              <select
                value={selectedWilaya}
                onChange={(e) => setSelectedWilaya(e.target.value)}
                style={{
                  padding: '8px 16px 8px 34px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#0f172a',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="ALL">Toutes les wilayas (National)</option>
                <option value="Alger">Alger</option>
                <option value="Tipaza">Tipaza</option>
                <option value="Oran">Oran</option>
                <option value="Constantine">Constantine</option>
                <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
                <option value="Tamanrasset">Tamanrasset</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveCategory('ALL');
              setSelectedWilaya('ALL');
              onToast('Filtres réinitialisés.');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#64748b',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <IconRefresh className="w-3.5 h-3.5" />
            <span>Réinitialiser les filtres</span>
          </button>
        </div>
      </div>

      {/* 3. SPLIT LAYOUT : CARTE À GAUCHE (55%) & LISTE À DROITE (45%) (map benev.png) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '22px', alignItems: 'start' }} className="map-grid-layout">
        
        {/* COLONNE GAUCHE : CARTE INTERACTIVE + BANDEAU EN BAS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* STATUT SUPÉRIEUR SUR LA CARTE */}
            <div style={{ padding: '12px 18px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              <span><strong>{filteredActions.length} actions</strong> sur la carte</span>
            </div>

            {/* CONTENEUR DU CANEVAS LEAFLET */}
            <div 
              ref={mapContainerRef} 
              style={{ width: '100%', height: '540px', background: '#e2e8f0', zIndex: 1 }}
            />

            {/* LÉGENDE FLOTTANTE EN BAS DE CARTE (map benev.png) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                zIndex: 400,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', fontWeight: 700 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#b91c1c' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                  Urgences
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#1d4ed8' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
                  Solidarité
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7e22ce' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }} />
                  Éducation
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#15803d' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  Plantations
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (mapInstanceRef.current) {
                    mapInstanceRef.current.flyTo([36.75, 3.05], 11, { duration: 1 });
                  }
                }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#0f172a',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <IconCrosshair className="w-3 h-3 text-emerald-600" />
                <span>Ma position</span>
              </button>
            </div>

          </div>

          {/* BANDEAU VERT MINT EN DESSOUS DE LA CARTE (map benev.png) */}
          <div 
            style={{
              background: '#edf9f6',
              borderRadius: '16px',
              border: '1px solid rgba(0, 109, 91, 0.12)',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: '0 2px 8px rgba(0, 109, 91, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#d1fae5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#006D5B',
                  flexShrink: 0
                }}
              >
                <IconLeaf className="w-6 h-6" />
              </div>
              <div>
                <h4 style={{ margin: '0 0 3px', fontSize: '15.5px', fontWeight: 800, color: '#0f172a' }}>
                  Ensemble pour une Algérie plus solidaire
                </h4>
                <p style={{ margin: 0, fontSize: '12.5px', color: '#64748b' }}>
                  Des citoyens engagés, des actions concrètes, un impact durable.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, color: '#004d40' }}>
                Chaque action compte.
              </div>
              <div style={{ width: '40px', height: '2px', background: '#006D5B', marginLeft: 'auto', marginTop: '4px' }} />
            </div>
          </div>

        </div>

        {/* COLONNE DROITE : ACTIONS À PROXIMITÉ (map benev.png) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* HEADER DE LA LISTE */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Actions à proximité</span>
              <span style={{ fontSize: '12px', fontWeight: 800, background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '12px' }}>
                {filteredActions.length}
              </span>
            </h3>

            <select 
              style={{
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#334155',
                background: '#ffffff',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option>Plus récentes</option>
              <option>Plus proches</option>
              <option>Urgentes</option>
            </select>
          </div>

          {/* LISTE DES CARTES D'ACTIONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredActions.slice(0, 5).map(act => {
              const isSelected = act.id === selectedActionId;

              return (
                <div
                  key={act.id}
                  onClick={() => handleFlyTo(act)}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: isSelected ? '2px solid #006D5B' : '1px solid #e2e8f0',
                    padding: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {/* MINIATURE PHOTO RECTANGULAIRE */}
                  <div style={{ width: '90px', height: '80px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                    <img 
                      src={act.image} 
                      alt={act.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* DÉTAILS DE L'ACTION */}
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    
                    {/* BADGE + WILAYA */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '14px',
                          background: act.badgeBg,
                          color: act.badgeColor
                        }}
                      >
                        ✦ {act.badge}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <IconMapPin className="w-3 h-3 text-slate-400" />
                        {act.wilaya}
                      </span>
                    </div>

                    {/* TITRE */}
                    <h4 
                      style={{
                        margin: 0,
                        fontSize: '13.5px',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.25,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {act.title}
                    </h4>

                    {/* ASSOCIATION */}
                    <div style={{ fontSize: '11.5px', color: '#006D5B', fontWeight: 700 }}>
                      {act.association}
                    </div>

                    {/* DATE & HEURE */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: '#64748b' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <IconCalendar className="w-3 h-3 text-slate-400" />
                        {act.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <IconClock className="w-3 h-3 text-slate-400" />
                        {act.time}
                      </span>
                    </div>

                    {/* PLACES */}
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#334155', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <IconUsers className="w-3 h-3 text-emerald-600" />
                      <span>{act.spots}</span>
                    </div>

                  </div>

                  {/* BOUTON CERCLE FLÈCHE DROITE */}
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#475569',
                      flexShrink: 0
                    }}
                  >
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </div>

                </div>
              );
            })}
          </div>

          {/* BOUTON VOIR TOUTES LES ACTIONS (map benev.png) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button
              type="button"
              style={{
                padding: '10px 24px',
                borderRadius: '24px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <span>Voir toutes les actions</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
