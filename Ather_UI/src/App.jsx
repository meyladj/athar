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

function IconBriefcase({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function IconPackage({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  );
}

function IconSettings({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconPlus({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5v14"/>
    </svg>
  );
}

function IconLock({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function IconEye({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconX({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
}

function IconFileText({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" x2="8" y1="13" y2="13"/>
      <line x1="16" x2="8" y1="17" y2="17"/>
      <line x1="10" x2="8" y1="9" y2="9"/>
    </svg>
  );
}

// Liste officielle des 69 wilayas d'Algérie
const WILAYAS_LIST = [
  { code: '01', name: 'Adrar' },
  { code: '02', name: 'Chlef' },
  { code: '03', name: 'Laghouat' },
  { code: '04', name: 'Oum El Bouaghi' },
  { code: '05', name: 'Batna' },
  { code: '06', name: 'Béjaïa' },
  { code: '07', name: 'Biskra' },
  { code: '08', name: 'Béchar' },
  { code: '09', name: 'Blida' },
  { code: '10', name: 'Bouira' },
  { code: '11', name: 'Tamanrasset' },
  { code: '12', name: 'Tébessa' },
  { code: '13', name: 'Tlemcen' },
  { code: '14', name: 'Tiaret' },
  { code: '15', name: 'Tizi Ouzou' },
  { code: '16', name: 'Alger' },
  { code: '17', name: 'Djelfa' },
  { code: '18', name: 'Jijel' },
  { code: '19', name: 'Sétif' },
  { code: '20', name: 'Saïda' },
  { code: '21', name: 'Skikda' },
  { code: '22', name: 'Sidi Bel Abbès' },
  { code: '23', name: 'Annaba' },
  { code: '24', name: 'Guelma' },
  { code: '25', name: 'Constantine' },
  { code: '26', name: 'Médéa' },
  { code: '27', name: 'Mostaganem' },
  { code: '28', name: "M'Sila" },
  { code: '29', name: 'Mascara' },
  { code: '30', name: 'Ouargla' },
  { code: '31', name: 'Oran' },
  { code: '32', name: 'El Bayadh' },
  { code: '33', name: 'Illizi' },
  { code: '34', name: 'Bordj Bou Arreridj' },
  { code: '35', name: 'Boumerdès' },
  { code: '36', name: 'El Tarf' },
  { code: '37', name: 'Tindouf' },
  { code: '38', name: 'Tissemsilt' },
  { code: '39', name: 'El Oued' },
  { code: '40', name: 'Khenchela' },
  { code: '41', name: 'Souk Ahras' },
  { code: '42', name: 'Tipaza' },
  { code: '43', name: 'Mila' },
  { code: '44', name: 'Aïn Defla' },
  { code: '45', name: 'Naâma' },
  { code: '46', name: 'Aïn Témouchent' },
  { code: '47', name: 'Ghardaïa' },
  { code: '48', name: 'Relizane' },
  { code: '49', name: 'Timimoun' },
  { code: '50', name: 'Bordj Badji Mokhtar' },
  { code: '51', name: 'Ouled Djellal' },
  { code: '52', name: 'Béni Abbès' },
  { code: '53', name: 'In Salah' },
  { code: '54', name: 'In Guezzam' },
  { code: '55', name: 'Touggourt' },
  { code: '56', name: 'Djanet' },
  { code: '57', name: "El M'Ghair" },
  { code: '58', name: 'El Meniaa' },
  { code: '59', name: 'Aflou' },
  { code: '60', name: 'Barika' },
  { code: '61', name: 'El Kantara' },
  { code: '62', name: 'Bir El Ater' },
  { code: '63', name: 'Ksar Chellala' },
  { code: '64', name: 'Aïn Oussera' },
  { code: '65', name: 'Messaad' },
  { code: '66', name: 'Ksar El Boukhari' },
  { code: '67', name: 'Bou Saâda' },
  { code: '68', name: 'El Abiodh Sidi Cheikh' },
  { code: '69', name: 'El Aricha' }
];

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

  // View routing ('landing' | 'association')
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#association' || window.location.pathname.includes('dashboard_association')) {
        return 'association';
      }
    }
    return 'landing';
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return next;
    });
  };

  // Active tab in right sidebar: 'missions' | 'adherents' | 'besoins' | 'profil' | 'parametres'
  const [dashActiveTab, setDashActiveTab] = useState('missions');
  const [selectedCandidateDetail, setSelectedCandidateDetail] = useState(null);

  const [isCreatingMission, setIsCreatingMission] = useState(false);

  // Filtres et recherche de missions pour l'espace association
  const [missionSearchQuery, setMissionSearchQuery] = useState('');
  const [missionThemeFilter, setMissionThemeFilter] = useState('all');
  const [missionDateFilter, setMissionDateFilter] = useState('all');
  const [missionStatusFilter, setMissionStatusFilter] = useState('all');
  const [missionWilayaFilter, setMissionWilayaFilter] = useState('all');

  // Association missions avec capacité et nombre d'inscrits
  const [associationMissions, setAssociationMissions] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      title: "Distribution de repas — Ramadan",
      category: "Solidarité",
      location: "Alger",
      wilaya: "Alger",
      date: "12 avr. 2025",
      spots_registered: 18,
      spots_total: 20,
      description: "Préparation et distribution de 300 repas chauds chaque soir pour les jeûneurs et familles démunies."
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      title: "Soutien scolaire pour enfants défavorisés",
      category: "Éducation",
      location: "Béjaïa",
      wilaya: "Béjaïa",
      date: "19 avr. 2025",
      spots_registered: 5,
      spots_total: 5,
      description: "Cours de remise à niveau en mathématiques et langues pour 35 collégiens préparant le BEM."
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      title: "Campagne de reboisement à Tizi Ouzou",
      category: "Environnement",
      location: "Tizi Ouzou",
      wilaya: "Tizi Ouzou",
      date: "26 avr. 2025",
      spots_registered: 22,
      spots_total: 30,
      description: "Plantation de 1000 arbustes pour la régénération du couvert forestier du massif du Djurdjura."
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=800&q=80',
      title: "Collecte et tri de vêtements d'hiver",
      category: "Solidarité",
      location: "Béjaïa",
      wilaya: "Béjaïa",
      date: "2 mars 2025",
      spots_registered: 15,
      spots_total: 15,
      description: "Conditionnement de colis de vêtements chauds et couvertures acheminés vers les villages isolés."
    }
  ]);

  // Candidatures reçues détaillées
  const [candidatesList, setCandidatesList] = useState([
    {
      id: 1,
      name: "Amine Bellouze",
      initials: "AB",
      missionId: 1,
      missionTitle: "Distribution de repas — Ramadan",
      wilaya: "Béjaïa",
      age: 24,
      email: "amine.bellouze@example.com",
      phone: "05 50 12 34 56",
      skills: ["Logistique", "Secourisme", "Informatique"],
      languages: ["Arabe", "Français", "Tamazight"],
      motivation: "Je souhaite consacrer mes week-ends à aider les familles dans le besoin durant ce mois sacré. J'ai déjà participé à des distributions lors des deux précédentes années et je connais bien le terrain.",
      appliedDate: "14 avr. 2025",
      status: "pending" // 'pending' | 'accepted' | 'rejected'
    },
    {
      id: 2,
      name: "Sara Louni",
      initials: "SL",
      missionId: 2,
      missionTitle: "Soutien scolaire pour enfants défavorisés",
      wilaya: "Béjaïa",
      age: 22,
      email: "sara.louni@example.com",
      phone: "06 61 78 90 12",
      skills: ["Enseignement", "Français", "Mathématiques"],
      languages: ["Arabe", "Français", "Anglais"],
      motivation: "Étudiante en Master de langues, je souhaite donner des cours de soutien aux collégiens et enfants défavorisés pour les préparer aux examens du BEM.",
      appliedDate: "15 avr. 2025",
      status: "pending"
    },
    {
      id: 3,
      name: "Yacine Kaci",
      initials: "YK",
      missionId: 1,
      missionTitle: "Distribution de repas — Ramadan",
      wilaya: "Alger",
      age: 28,
      email: "yacine.kaci@example.com",
      phone: "07 72 45 67 89",
      skills: ["Chauffeur / Véhicule", "Logistique", "Coordination"],
      languages: ["Arabe", "Français"],
      motivation: "Je dispose d'un utilitaire et je peux assurer le transport des paniers alimentaires depuis le centre de stockage jusqu'aux points de distribution.",
      appliedDate: "16 avr. 2025",
      status: "pending"
    },
    {
      id: 4,
      name: "Meriem Hadj",
      initials: "MH",
      missionId: 3,
      missionTitle: "Campagne de reboisement à Tizi Ouzou",
      wilaya: "Tizi Ouzou",
      age: 26,
      email: "meriem.hadj@example.com",
      phone: "05 55 98 76 54",
      skills: ["Biologie / Écologie", "Secourisme", "Animation"],
      languages: ["Tamazight", "Arabe", "Français"],
      motivation: "Passionnée de protection de l'environnement et membre d'un club de randonnée, je souhaite apporter mon énergie à la reforestation de nos forêts.",
      appliedDate: "17 avr. 2025",
      status: "accepted"
    }
  ]);

  // Traitement détaillé des candidatures
  const handleAcceptCandidate = (cand) => {
    const targetMission = associationMissions.find(m => m.id === cand.missionId);
    if (targetMission && targetMission.spots_registered >= targetMission.spots_total) {
      showToast(`Attention : La mission "${targetMission.title}" a déjà atteint sa capacité maximale (${targetMission.spots_total}/${targetMission.spots_total} bénévoles).`);
      return;
    }

    setCandidatesList(prev => prev.map(c => c.id === cand.id ? { ...c, status: 'accepted' } : c));
    
    // Incrémenter les inscrits de la mission
    if (targetMission) {
      setAssociationMissions(prev => prev.map(m => {
        if (m.id === targetMission.id) {
          const newRegistered = Math.min(m.spots_registered + 1, m.spots_total);
          return { ...m, spots_registered: newRegistered };
        }
        return m;
      }));
    }

    if (selectedCandidateDetail && selectedCandidateDetail.id === cand.id) {
      setSelectedCandidateDetail(prev => ({ ...prev, status: 'accepted' }));
    }

    showToast(`✓ Candidature de ${cand.name} acceptée !`);
  };

  const handleRejectCandidate = (cand) => {
    setCandidatesList(prev => prev.map(c => c.id === cand.id ? { ...c, status: 'rejected' } : c));
    if (selectedCandidateDetail && selectedCandidateDetail.id === cand.id) {
      setSelectedCandidateDetail(prev => ({ ...prev, status: 'rejected' }));
    }
    showToast(`Candidature de ${cand.name} refusée.`);
  };

  // Ajuster manuellement la capacité d'une mission
  const handleAdjustSpots = (missionId, delta) => {
    setAssociationMissions(prev => prev.map(m => {
      if (m.id === missionId) {
        const updated = Math.max(0, Math.min(m.spots_registered + delta, m.spots_total));
        return { ...m, spots_registered: updated };
      }
      return m;
    }));
  };

  // Filtrage dynamique des missions de l'association (Recherche, Date, Thème, Statut)
  const filteredAssociationMissions = associationMissions.filter((m) => {
    // 1. Recherche par mot-clé (titre, description, localisation/wilaya, date, catégorie)
    if (missionSearchQuery.trim()) {
      const q = missionSearchQuery.trim().toLowerCase();
      const matchTitle = m.title?.toLowerCase().includes(q);
      const matchDesc = m.description?.toLowerCase().includes(q);
      const matchLoc = m.location?.toLowerCase().includes(q) || m.wilaya?.toLowerCase().includes(q);
      const matchCat = m.category?.toLowerCase().includes(q);
      const matchDate = m.date?.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchLoc && !matchCat && !matchDate) return false;
    }

    // 2. Filtre par thème
    if (missionThemeFilter !== 'all') {
      if (m.category !== missionThemeFilter) return false;
    }

    // 3. Filtre par statut (Ouverte vs Complète)
    if (missionStatusFilter === 'open') {
      if (m.spots_registered >= m.spots_total) return false;
    } else if (missionStatusFilter === 'closed') {
      if (m.spots_registered < m.spots_total) return false;
    }

    // 4. Filtre par date / mois
    if (missionDateFilter === 'mars') {
      if (!m.date?.toLowerCase().includes('mars')) return false;
    } else if (missionDateFilter === 'avril') {
      if (!m.date?.toLowerCase().includes('avr')) return false;
    } else if (missionDateFilter === 'mai') {
      if (!m.date?.toLowerCase().includes('mai')) return false;
    }

    // 5. Filtre par wilaya
    if (missionWilayaFilter !== 'all') {
      if (m.location !== missionWilayaFilter && m.wilaya !== missionWilayaFilter) return false;
    }

    return true;
  }).sort((a, b) => {
    if (missionDateFilter === 'recent') {
      return b.id - a.id;
    } else if (missionDateFilter === 'oldest') {
      return a.id - b.id;
    }
    return 0;
  });

  // Besoins matériels & logistiques de l'association
  const [needsList, setNeedsList] = useState([
    {
      id: 1,
      title: "Paniers alimentaires de base",
      category: "Alimentation",
      needed: 300,
      collected: 210,
      unit: "paniers",
      urgency: "Haute",
      description: "Huile, semoule, farine, sucre, dattes pour les familles de la wilaya."
    },
    {
      id: 2,
      title: "Cartables et fournitures scolaires",
      category: "Éducation",
      needed: 150,
      collected: 150,
      unit: "kits",
      urgency: "Moyenne",
      description: "Cahiers, trousses, stylos et sacs à dos pour la rentrée."
    },
    {
      id: 3,
      title: "Trousses de secours et trousses médicales",
      category: "Santé",
      needed: 50,
      collected: 32,
      unit: "trousses",
      urgency: "Haute",
      description: "Matériel d'intervention rapide pour nos équipes de terrain."
    }
  ]);

  const [newNeedForm, setNewNeedForm] = useState({
    title: '',
    category: 'Alimentation',
    needed: '50',
    unit: 'unités',
    urgency: 'Moyenne',
    description: ''
  });

  const handleCreateNeed = (e) => {
    e.preventDefault();
    if (!newNeedForm.title) return;
    const item = {
      id: Date.now(),
      title: newNeedForm.title,
      category: newNeedForm.category,
      needed: parseInt(newNeedForm.needed, 10) || 50,
      collected: 0,
      unit: newNeedForm.unit,
      urgency: newNeedForm.urgency,
      description: newNeedForm.description || "Besoin logistique prioritaire pour nos actions sur le terrain."
    };
    setNeedsList([item, ...needsList]);
    setNewNeedForm({ title: '', category: 'Alimentation', needed: '50', unit: 'unités', urgency: 'Moyenne', description: '' });
    showToast("Nouveau besoin ajouté à votre espace association !");
  };

  // Profil officiel de l'association El Baraka
  const [assocProfile, setAssocProfile] = useState({
    name: "Association El Baraka",
    tagline: "Solidarité et Bienfaisance en Algérie",
    agrement: "DZ-2019-04127",
    creationYear: "2019",
    responsable: "Karim Meziane",
    wilaya: "Béjaïa",
    commune: "Amizour",
    address: "Cité des Martyrs, Bloc B, N° 14",
    email: "contact@elbaraka-dz.org",
    phone: "034 12 34 56",
    domain: "Solidarité & Bienfaisance",
    description: "Association caritative nationale agréée par le Ministère de l'Intérieur. Active dans le soutien aux familles démunies, les caravanes médicales et le parrainage d'orphelins."
  });

  // Formulaire de création de mission (inspiré de assoc.jpeg)
  const [newMissionForm, setNewMissionForm] = useState({
    title: '',
    category: 'Solidarité',
    location: 'Alger',
    date: '',
    spots: '15',
    description: ''
  });

  const handleCreateMission = (e) => {
    e.preventDefault();
    if (!newMissionForm.title) return;
    const totalSpots = parseInt(newMissionForm.spots, 10) || 10;
    const newM = {
      id: Date.now(),
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      title: newMissionForm.title,
      category: newMissionForm.category,
      location: newMissionForm.location,
      wilaya: newMissionForm.location,
      date: newMissionForm.date || 'Prochainement',
      spots_registered: 0,
      spots_total: totalSpots,
      description: newMissionForm.description || "Mission solidaire ouverte aux bénévoles engagés d'Athar."
    };
    setAssociationMissions([newM, ...associationMissions]);
    setNewMissionForm({ title: '', category: 'Solidarité', location: 'Alger', date: '', spots: '15', description: '' });
    setIsCreatingMission(false);
    showToast(`Mission "${newM.title}" publiée avec succès (${totalSpots} places) !`);
  };

  // Modals state
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginProfile, setLoginProfile] = useState('association'); // 'volunteer' | 'association'
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [signupView, setSignupView] = useState('choice'); // 'choice' | 'ben' | 'asso'
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [publishModalOpen, setPublishModalOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState('');
  const [appliedFileName, setAppliedFileName] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [candidateFilter, setCandidateFilter] = useState('all'); // 'all' | 'pending' | 'accepted' | 'rejected'

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
      wilayas: 69
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

  const openLogin = (profile = 'volunteer') => {
    setLoginProfile(profile);
    setSignupModalOpen(false);
    setLoginModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLogin = () => {
    setLoginModalOpen(false);
    document.body.style.overflow = '';
  };

  const openSignup = (view = 'choice') => {
    setLoginModalOpen(false);
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

  const closePublish = () => {
    setPublishModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#association') {
        setCurrentView('association');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#accueil' || window.location.hash === '' || window.location.hash === '#missions') {
        setCurrentView('landing');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLogin();
        closeSignup();
        closeApply();
        closePublish();
        setSelectedCandidateDetail(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalSpotsTarget = associationMissions.reduce((acc, m) => acc + (m.spots_total || 0), 0);
  const totalSpotsRegistered = associationMissions.reduce((acc, m) => acc + (m.spots_registered || 0), 0);
  const fullMissionsCount = associationMissions.filter(m => m.spots_registered >= m.spots_total).length;
  const openMissionsCount = associationMissions.filter(m => m.spots_registered < m.spots_total).length;
  const pendingCandidatesCount = candidatesList.filter(c => c.status === 'pending').length;

  return (
    <>
      {/* Toast Notification (zero emoji) */}
      {toastMessage && (
        <div className="toast-notice">
          <IconCheck className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. LANDING PAGE OFFICIELLE */}
      {currentView === 'landing' && (
        <>
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
                  <a
                    href="#association"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentView('association');
                      window.location.hash = '#association';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      showToast("Espace Association El Baraka");
                    }}
                  >
                    Associations
                  </a>
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

              <button className="btn btn-ghost" onClick={() => openLogin('volunteer')}>
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
      )}

      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* 2. DASHBOARD ASSOCIATION (Inspiré de assoc.jpeg & Landing) */}
      {/* ======================================================== */}
      {currentView === 'association' && (
        <div className="dash-assoc-root">
          <main className="wrap">
            {/* TOP HEADER SANS BOUTON DARK MODE */}
            <header className="top">
              <a
                className="brand"
                onClick={() => {
                  setCurrentView('landing');
                  window.location.hash = '#accueil';
                }}
                title="Retour au site public"
              >
                <img src="/assets/logo.png" alt="Athar logo" />
                <div className="brand-title">
                  <strong>ATHAR</strong>
                  <small>PLATEFORME ALGÉRIENNE</small>
                </div>
                <div className="brand-tagline">
                  Des gens engagés.<br />Une Algérie plus solidaire.
                </div>
              </a>
              <div className="actions">
                <button
                  className="btn-public"
                  onClick={() => {
                    setCurrentView('landing');
                    window.location.hash = '#accueil';
                    showToast("Retour au site public");
                  }}
                >
                  ← Retour au site public
                </button>
                <button
                  className="notif-btn"
                  onClick={() => {
                    setDashActiveTab('adherents');
                    showToast(`Vous avez ${pendingCandidatesCount} candidatures en attente`);
                  }}
                  title="Notifications"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                  {pendingCandidatesCount > 0 && <span className="notif-badge"></span>}
                </button>
                <div className="user-pill">
                  <div className="avatar-icon">EB</div>
                  <div>
                    <span>Association El Baraka</span>
                    <small style={{ display: 'block', color: 'var(--muted)', fontSize: '10.5px' }}>Organisateur agréé</small>
                  </div>
                  <span>▾</span>
                </div>
              </div>
            </header>

            {/* HERO PANORAMIQUE AVEC LA PHOTO PANORAMIQUE DE L'ALGÉRIE */}
            <section className="hero-panoramic">
              <div className="hero-eyebrow">ESPACE ASSOCIATION · EL BARAKA</div>
              <h1 className="hero-title">
                Bonjour, El Baraka
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#dcfce7',
                  color: '#15803d',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  padding: '4px 14px',
                  borderRadius: '999px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <IconShieldCheck className="w-3.5 h-3.5" />
                  Association vérifiée
                </span>
              </h1>
              <p className="hero-desc">
                Gérez vos missions solidaires, mobilisez des bénévoles engagés et suivez l'impact de vos actions caritatives à travers les 69 wilayas.
              </p>
            </section>

            {/* 4 STATS IMPACT CARDS (Inspirées de assoc.jpeg : Mon impact avec Athar) */}
            <section className="dash-impact-grid">
              <article className="dash-impact-card">
                <div className="dash-impact-icon green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="M7 8h10M7 12h10M7 16h10"/>
                  </svg>
                </div>
                <div>
                  <div className="dash-impact-num">{associationMissions.length}</div>
                  <div className="dash-impact-lbl">Offres publiées</div>
                </div>
              </article>

              <article className="dash-impact-card">
                <div className="dash-impact-icon blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <div className="dash-impact-num">{totalSpotsRegistered + 290}</div>
                  <div className="dash-impact-lbl">Bénévoles touchés</div>
                </div>
              </article>

              <article className="dash-impact-card">
                <div className="dash-impact-icon gold">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <div className="dash-impact-num">{candidatesList.length + 276}</div>
                  <div className="dash-impact-lbl">Candidatures reçues</div>
                </div>
              </article>

              <article className="dash-impact-card">
                <div className="dash-impact-icon rose">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="dash-impact-num">{openMissionsCount}</div>
                  <div className="dash-impact-lbl">Missions en cours</div>
                </div>
              </article>
            </section>

            {/* GRILLE PRINCIPALE : BARRE UNIQUE À GAUCHE, CONTENU À DROITE */}
            <div className="dash-main-grid">
              {/* UNE SEULE BARRE UNIFIÉE À GAUCHE */}
              <aside className="dash-unified-sidebar">
                {/* 1. EN-TÊTE PROFIL ASSOCIATION */}
                <div className="sidebar-profile-head">
                  <div className="sidebar-profile-avatar">EB</div>
                  <div className="sidebar-profile-info">
                    <strong>Association El Baraka</strong>
                    <small>Béjaïa · Agrément DZ-2019-04127</small>
                  </div>
                </div>

                <div className="sidebar-divider"></div>

                {/* 2. MENU PRINCIPAL SANS EMOJIS */}
                <div>
                  <div className="sidebar-section-label">Navigation</div>
                  <div className="sidebar-nav-list">
                    <button
                      type="button"
                      className={`sidebar-nav-btn ${dashActiveTab === 'missions' ? 'active' : ''}`}
                      onClick={() => setDashActiveTab('missions')}
                    >
                      <IconBriefcase className="w-4 h-4" />
                      <span>Missions & Offres</span>
                      <span className="pill-badge">{associationMissions.length}</span>
                    </button>

                    <button
                      type="button"
                      className={`sidebar-nav-btn ${dashActiveTab === 'adherents' ? 'active' : ''}`}
                      onClick={() => setDashActiveTab('adherents')}
                    >
                      <IconUsers className="w-4 h-4" />
                      <span>Candidatures</span>
                      <span className="pill-badge" style={pendingCandidatesCount > 0 ? { background: '#fef3c7', color: '#92400e' } : {}}>
                        {pendingCandidatesCount > 0 ? `${pendingCandidatesCount} en attente` : candidatesList.length}
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`sidebar-nav-btn ${dashActiveTab === 'besoins' ? 'active' : ''}`}
                      onClick={() => setDashActiveTab('besoins')}
                    >
                      <IconPackage className="w-4 h-4" />
                      <span>Besoins matériels</span>
                      <span className="pill-badge">{needsList.length}</span>
                    </button>

                    <button
                      type="button"
                      className={`sidebar-nav-btn ${dashActiveTab === 'profil' ? 'active' : ''}`}
                      onClick={() => setDashActiveTab('profil')}
                    >
                      <IconBuilding className="w-4 h-4" />
                      <span>Profil association</span>
                    </button>

                    <button
                      type="button"
                      className={`sidebar-nav-btn ${dashActiveTab === 'parametres' ? 'active' : ''}`}
                      onClick={() => setDashActiveTab('parametres')}
                    >
                      <IconSettings className="w-4 h-4" />
                      <span>Paramètres</span>
                    </button>
                  </div>
                </div>

                <div className="sidebar-divider"></div>

                {/* 3. BOUTON RETOUR SITE PUBLIC AU BAS DE LA BARRE */}
                <button
                  type="button"
                  className="sidebar-return-btn"
                  onClick={() => {
                    setCurrentView('landing');
                    window.location.hash = '#accueil';
                    showToast("Retour au site public");
                  }}
                >
                  <IconChevronLeft className="w-4 h-4" />
                  <span>Retour au site public</span>
                </button>
              </aside>

              {/* ZONE DROITE : CONTENU DYNAMIQUE SELON dashActiveTab */}
              <div className="dash-content-right">
                {/* 1. ONGLET MISSIONS */}
                {dashActiveTab === 'missions' && (
                  <>
                    {/* BARRE D'ACTION SUPÉRIEURE : TITRE & BOUTON NOUVELLE MISSION */}
                    <div className="dash-card" style={{ padding: '20px 24px', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                        <div>
                          <h2 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--bleu)', margin: 0 }}>
                            Offres de bénévolat ({associationMissions.length})
                          </h2>
                          <p style={{ margin: '3px 0 0', fontSize: '12.5px', color: 'var(--muted)' }}>
                            {openMissionsCount} ouverte(s) aux inscriptions · {fullMissionsCount} complète(s)
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-green"
                          onClick={() => setIsCreatingMission(!isCreatingMission)}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '9px 18px', fontSize: '13px' }}
                        >
                          <IconPlus className="w-4 h-4" />
                          <span>{isCreatingMission ? "Masquer le formulaire" : "Nouvelle mission"}</span>
                        </button>
                      </div>
                    </div>

                    {/* FORMULAIRE DE CRÉATION DE MISSION (DÉPLIABLE) */}
                    {isCreatingMission && (
                      <div className="dash-card" style={{ border: '1.5px solid #a7d7c5', marginBottom: '20px' }}>
                        <div className="dash-card-header">
                          <h2>Créer une nouvelle offre de bénévolat</h2>
                          <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={() => setIsCreatingMission(false)}
                            style={{ padding: '6px 12px', fontSize: '12px' }}
                          >
                            Annuler
                          </button>
                        </div>

                        <form onSubmit={handleCreateMission} className="mform">
                          <label>Titre de l'offre</label>
                          <input
                            type="text"
                            required
                            placeholder="Ex: Distribution de couffins et denrées alimentaires"
                            value={newMissionForm.title}
                            onChange={(e) => setNewMissionForm({ ...newMissionForm, title: e.target.value })}
                          />

                          <div className="frow">
                            <div>
                              <label>Thématique</label>
                              <select
                                value={newMissionForm.category}
                                onChange={(e) => setNewMissionForm({ ...newMissionForm, category: e.target.value })}
                              >
                                <option value="Solidarité">Solidarité</option>
                                <option value="Éducation">Éducation</option>
                                <option value="Environnement">Environnement</option>
                                <option value="Santé">Santé</option>
                                <option value="Aide d'urgence">Aide d'urgence</option>
                              </select>
                            </div>
                            <div>
                              <label>Wilaya</label>
                              <select
                                value={newMissionForm.location}
                                onChange={(e) => setNewMissionForm({ ...newMissionForm, location: e.target.value })}
                              >
                                {WILAYAS_LIST.map((w) => (
                                  <option key={w.code} value={w.name}>
                                    {w.code} - {w.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="frow">
                            <div>
                              <label>Date de la mission</label>
                              <input
                                type="text"
                                placeholder="Ex: 15 Mars 2025"
                                value={newMissionForm.date}
                                onChange={(e) => setNewMissionForm({ ...newMissionForm, date: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <label>Nombre de bénévoles recherchés (Capacité maximale)</label>
                              <input
                                type="number"
                                min="1"
                                max="500"
                                placeholder="20"
                                value={newMissionForm.spots}
                                onChange={(e) => setNewMissionForm({ ...newMissionForm, spots: e.target.value })}
                                required
                              />
                            </div>
                          </div>

                          <label>Description des missions et attentes</label>
                          <textarea
                            placeholder="Détaillez les tâches confiées, les horaires et les profils recherchés..."
                            value={newMissionForm.description}
                            onChange={(e) => setNewMissionForm({ ...newMissionForm, description: e.target.value })}
                            rows={3}
                          ></textarea>

                          <div className="form-tip-box">
                            <strong style={{ color: 'var(--bleu)', display: 'block', marginBottom: '2px' }}>
                              Information de clôture automatique :
                            </strong>
                            La mission se fermera automatiquement aux nouvelles inscriptions dès que les {newMissionForm.spots || '20'} places seront comblées par des bénévoles validés.
                          </div>

                          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                            <button
                              type="button"
                              className="btn btn-ghost"
                              onClick={() => setIsCreatingMission(false)}
                            >
                              Annuler
                            </button>
                            <button type="submit" className="btn btn-green" style={{ padding: '10px 24px' }}>
                              Publier la mission
                            </button>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* BARRE DE RECHERCHE ET FILTRES (DATE, THÈME, STATUT) */}
                    <div className="dash-filters-card">
                      <div className="dash-filters-top-row">
                        {/* 1. Recherche par mot-clé, titre, wilaya */}
                        <div className="dash-search-wrap">
                          <IconSearch className="w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Rechercher une mission (titre, wilaya, mot-clé...)"
                            value={missionSearchQuery}
                            onChange={(e) => setMissionSearchQuery(e.target.value)}
                          />
                          {missionSearchQuery && (
                            <button
                              type="button"
                              className="dash-search-clear"
                              onClick={() => setMissionSearchQuery('')}
                              title="Effacer la recherche"
                            >
                              <IconX className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* 2. Filtre & tri par date */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <select
                            className="dash-filter-select"
                            value={missionDateFilter}
                            onChange={(e) => setMissionDateFilter(e.target.value)}
                            title="Filtrer ou trier par date"
                          >
                            <option value="all">Toutes les dates</option>
                            <option value="mars">Période : Mars 2025</option>
                            <option value="avril">Période : Avril 2025</option>
                            <option value="mai">Période : Mai 2025</option>
                            <option value="recent">Date : Plus récentes d'abord</option>
                            <option value="oldest">Date : Plus anciennes d'abord</option>
                          </select>
                        </div>

                        {/* 3. Filtre par wilaya (69 wilayas) */}
                        <select
                          className="dash-filter-select"
                          value={missionWilayaFilter}
                          onChange={(e) => setMissionWilayaFilter(e.target.value)}
                          title="Filtrer par wilaya (69 wilayas)"
                        >
                          <option value="all">Toutes les wilayas (69)</option>
                          {WILAYAS_LIST.map((w) => (
                            <option key={w.code} value={w.name}>
                              {w.code} - {w.name}
                            </option>
                          ))}
                        </select>

                        {/* 4. Filtre par statut */}
                        <select
                          className="dash-filter-select"
                          value={missionStatusFilter}
                          onChange={(e) => setMissionStatusFilter(e.target.value)}
                          title="Filtrer par statut"
                        >
                          <option value="all">Tous les statuts</option>
                          <option value="open">Ouvertes uniquement</option>
                          <option value="closed">Complètes (fermées)</option>
                        </select>
                      </div>

                      {/* 5. Filtre par thématique / thème */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                        <div className="dash-filter-pills">
                          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', marginRight: '2px' }}>
                            Thèmes :
                          </span>
                          {['all', 'Solidarité', 'Éducation', 'Environnement', 'Santé', "Aide d'urgence"].map((th) => (
                            <button
                              key={th}
                              type="button"
                              className={`dash-pill-btn ${missionThemeFilter === th ? 'active' : ''}`}
                              onClick={() => setMissionThemeFilter(th)}
                            >
                              {th === 'all' ? 'Tous les thèmes' : th}
                            </button>
                          ))}
                        </div>

                        {/* Compteur et bouton réinitialiser */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 700 }}>
                            {filteredAssociationMissions.length} offre{filteredAssociationMissions.length > 1 ? 's' : ''} trouvée{filteredAssociationMissions.length > 1 ? 's' : ''}
                          </span>
                          {(missionSearchQuery || missionThemeFilter !== 'all' || missionDateFilter !== 'all' || missionStatusFilter !== 'all' || missionWilayaFilter !== 'all') && (
                            <button
                              type="button"
                              onClick={() => {
                                setMissionSearchQuery('');
                                setMissionThemeFilter('all');
                                setMissionDateFilter('all');
                                setMissionStatusFilter('all');
                                setMissionWilayaFilter('all');
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--vert)',
                                fontSize: '12px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                padding: 0
                              }}
                            >
                              Réinitialiser
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* LISTE DES OFFRES AVEC JAUGE DE CAPACITÉ ET ACTIONS */}
                    {filteredAssociationMissions.length === 0 ? (
                      <div className="dash-empty-state">
                        <IconSearch className="w-8 h-8 text-slate-300" style={{ margin: '0 auto 10px', display: 'block' }} />
                        <h3>Aucune offre ne correspond à vos filtres</h3>
                        <p>Essayez de modifier votre recherche ou de réinitialiser les filtres de date, thème et wilaya.</p>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() => {
                            setMissionSearchQuery('');
                            setMissionThemeFilter('all');
                            setMissionDateFilter('all');
                            setMissionStatusFilter('all');
                            setMissionWilayaFilter('all');
                          }}
                        >
                          Effacer les critères de recherche
                        </button>
                      </div>
                    ) : (
                      <div className="missions-list-wrap">
                        {filteredAssociationMissions.map((m) => {
                          const isFull = m.spots_registered >= m.spots_total;
                          const fillPercent = Math.min(Math.round((m.spots_registered / m.spots_total) * 100), 100);
                          const missionCandidates = candidatesList.filter(c => c.missionId === m.id);

                          return (
                            <div key={m.id} className="mission-cap-card">
                              <div className="mission-cap-header">
                                <div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                                    <span className="mission-cat-badge">{m.category}</span>
                                    <span className="mission-meta-item">
                                      <IconMapPin className="w-3.5 h-3.5" />
                                      {m.location}
                                    </span>
                                    <span className="mission-meta-item">
                                      <IconCalendar className="w-3.5 h-3.5" />
                                      {m.date}
                                    </span>
                                  </div>
                                  <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--texte)', margin: '2px 0 0' }}>
                                    {m.title}
                                  </h3>
                                </div>
                                <div>
                                  {isFull ? (
                                    <span className="cap-status-pill closed">
                                      <IconLock className="w-3.5 h-3.5" />
                                      Complet (Fermée)
                                    </span>
                                  ) : (
                                    <span className="cap-status-pill open">
                                      <span className="cap-dot-pulse"></span>
                                      Ouverte ({m.spots_total - m.spots_registered} places dispo)
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p style={{ fontSize: '13px', color: '#64748b', margin: '8px 0 12px', lineHeight: '1.5' }}>
                                {m.description}
                              </p>

                              {/* JAUGE DE PROGRESSION DE CAPACITÉ */}
                              <div className="cap-progress-container">
                                <div className="cap-progress-head">
                                  <span className="label">
                                    Inscriptions des bénévoles :
                                  </span>
                                  <span className={`numbers ${isFull ? 'full' : ''}`}>
                                    <strong>{m.spots_registered}</strong> / {m.spots_total} places ({fillPercent}%)
                                  </span>
                                </div>
                                <div className="cap-bar-track">
                                  <div
                                    className={`cap-bar-fill ${isFull ? 'full' : ''}`}
                                    style={{ width: `${fillPercent}%` }}
                                  ></div>
                                </div>
                              </div>

                              {/* ACCÈS CANDIDATURES */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                marginTop: '12px',
                                paddingTop: '10px',
                                borderTop: '1px solid #f1f5f9'
                              }}>
                                <button
                                  type="button"
                                  className="btn-mission-candidates"
                                  onClick={() => {
                                    setDashActiveTab('adherents');
                                    showToast(`Consultation des candidatures pour "${m.title}"`);
                                  }}
                                >
                                  <IconUsers className="w-3.5 h-3.5" />
                                  <span>Consulter les candidatures ({missionCandidates.length})</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}

                {/* 2. ONGLET ADHÉRENTS & CANDIDATURES (Traitement en détail) */}
                {dashActiveTab === 'adherents' && (
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <div>
                        <h2>Candidatures reçues & Traitement détaillé</h2>
                        <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--muted)' }}>
                          Consultez le CV, la motivation et validez les bénévoles pour vos missions.
                        </p>
                      </div>
                      <span className="pill-badge" style={{ background: 'var(--vert)', color: '#fff', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 800 }}>
                        {candidatesList.length} dossiers
                      </span>
                    </div>

                    {/* FILTRES PAR ÉTAT */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className={`filter-btn ${candidateFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setCandidateFilter('all')}
                      >
                        Toutes ({candidatesList.length})
                      </button>
                      <button
                        type="button"
                        className={`filter-btn ${candidateFilter === 'pending' ? 'active' : ''}`}
                        onClick={() => setCandidateFilter('pending')}
                      >
                        En attente ({candidatesList.filter(c => c.status === 'pending').length})
                      </button>
                      <button
                        type="button"
                        className={`filter-btn ${candidateFilter === 'accepted' ? 'active' : ''}`}
                        onClick={() => setCandidateFilter('accepted')}
                      >
                        Validées ({candidatesList.filter(c => c.status === 'accepted').length})
                      </button>
                      <button
                        type="button"
                        className={`filter-btn ${candidateFilter === 'rejected' ? 'active' : ''}`}
                        onClick={() => setCandidateFilter('rejected')}
                      >
                        Refusées ({candidatesList.filter(c => c.status === 'rejected').length})
                      </button>
                    </div>

                    {/* LISTE DES CANDIDATS AVEC ACTIONS DIRECTES OU DÉTAILS */}
                    <div className="candidates-detail-wrap">
                      {candidatesList
                        .filter(c => candidateFilter === 'all' || c.status === candidateFilter)
                        .map((cand) => {
                          const targetMission = associationMissions.find(m => m.id === cand.missionId);
                          const isMissionFull = targetMission && targetMission.spots_registered >= targetMission.spots_total;

                          return (
                            <div key={cand.id} className="candidate-detail-item">
                              <div className="info">
                                <div className="cand-avatar">{cand.initials}</div>
                                <div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                    <strong style={{ fontSize: '15px', color: 'var(--texte)' }}>{cand.name}</strong>
                                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>· {cand.age} ans · {cand.wilaya}</span>
                                    {cand.status === 'pending' && (
                                      <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>
                                        En attente
                                      </span>
                                    )}
                                    {cand.status === 'accepted' && (
                                      <span style={{ background: '#dcfce7', color: '#166534', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                        <IconCheck className="w-3 h-3" /> Validé
                                      </span>
                                    )}
                                    {cand.status === 'rejected' && (
                                      <span style={{ background: '#fee2e2', color: '#991b1b', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                        <IconX className="w-3 h-3" /> Refusé
                                      </span>
                                    )}
                                  </div>

                                  <div style={{ fontSize: '13px', color: 'var(--vert)', fontWeight: 700, margin: '3px 0' }}>
                                    Mission : {cand.missionTitle}
                                  </div>

                                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                                    {cand.skills && cand.skills.map((sk, idx) => (
                                      <span key={idx} style={{ background: '#f1f5f9', color: '#475569', fontSize: '11px', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                                        {sk}
                                      </span>
                                    ))}
                                  </div>

                                  <p style={{
                                    fontSize: '12.5px',
                                    color: '#64748b',
                                    margin: '8px 0 0',
                                    fontStyle: 'italic',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                  }}>
                                    « {cand.motivation} »
                                  </p>
                                </div>
                              </div>

                              <div className="cand-btns">
                                <button
                                  type="button"
                                  className="btn-detail-cand"
                                  onClick={() => setSelectedCandidateDetail(cand)}
                                  title="Ouvrir le dossier complet"
                                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                >
                                  <IconEye className="w-3.5 h-3.5" />
                                  <span>Dossier</span>
                                </button>

                                {cand.status === 'pending' && (
                                  <>
                                    <button
                                      type="button"
                                      className="btn-accept-cand"
                                      disabled={isMissionFull}
                                      onClick={() => handleAcceptCandidate(cand)}
                                      title={isMissionFull ? "Mission complète" : "Accepter la candidature"}
                                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                    >
                                      <IconCheck className="w-3.5 h-3.5" />
                                      <span>Accepter</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn-reject-cand"
                                      onClick={() => handleRejectCandidate(cand)}
                                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                    >
                                      <IconX className="w-3.5 h-3.5" />
                                      <span>Refuser</span>
                                    </button>
                                  </>
                                )}

                                {cand.status === 'accepted' && (
                                  <button
                                    type="button"
                                    className="btn-reject-cand"
                                    onClick={() => handleRejectCandidate(cand)}
                                    title="Changer d'avis et refuser"
                                  >
                                    Annuler
                                  </button>
                                )}

                                {cand.status === 'rejected' && (
                                  <button
                                    type="button"
                                    className="btn-accept-cand"
                                    disabled={isMissionFull}
                                    onClick={() => handleAcceptCandidate(cand)}
                                    title="Réintégrer le candidat"
                                  >
                                    Repêcher
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}

                {/* 3. ONGLET BESOINS MATÉRIELS & LOGISTIQUES */}
                {dashActiveTab === 'besoins' && (
                  <>
                    <div className="dash-card">
                      <div className="dash-card-header">
                        <h2>Ajouter un besoin matériel ou logistique</h2>
                        <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                          Appel aux dons et équipements
                        </span>
                      </div>
                      <form onSubmit={handleCreateNeed} className="mform">
                        <label>Intitulé du besoin</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex. 50 couvertures thermiques pour l'hiver"
                          value={newNeedForm.title}
                          onChange={(e) => setNewNeedForm({ ...newNeedForm, title: e.target.value })}
                        />
                        <div className="frow">
                          <div>
                            <label>Catégorie</label>
                            <select
                              value={newNeedForm.category}
                              onChange={(e) => setNewNeedForm({ ...newNeedForm, category: e.target.value })}
                            >
                              <option value="Alimentation">Alimentation</option>
                              <option value="Éducation">Éducation / Fournitures</option>
                              <option value="Santé">Santé / Médical</option>
                              <option value="Vêtements">Vêtements & Literie</option>
                              <option value="Logistique">Transport & Outillage</option>
                            </select>
                          </div>
                          <div>
                            <label>Quantité requise</label>
                            <input
                              type="number"
                              min="1"
                              value={newNeedForm.needed}
                              onChange={(e) => setNewNeedForm({ ...newNeedForm, needed: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div className="frow">
                          <div>
                            <label>Unité de mesure</label>
                            <input
                              type="text"
                              placeholder="Ex. colis, unités, kits"
                              value={newNeedForm.unit}
                              onChange={(e) => setNewNeedForm({ ...newNeedForm, unit: e.target.value })}
                            />
                          </div>
                          <div>
                            <label>Niveau d'urgence</label>
                            <select
                              value={newNeedForm.urgency}
                              onChange={(e) => setNewNeedForm({ ...newNeedForm, urgency: e.target.value })}
                            >
                              <option value="Haute">Urgence Haute</option>
                              <option value="Moyenne">Urgence Moyenne</option>
                              <option value="Standard">Standard</option>
                            </select>
                          </div>
                        </div>
                        <label>Détails / Instructions pour les donateurs</label>
                        <textarea
                          placeholder="Où déposer les dons, état attendu, date limite..."
                          value={newNeedForm.description}
                          onChange={(e) => setNewNeedForm({ ...newNeedForm, description: e.target.value })}
                          rows={2}
                        ></textarea>
                        <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '8px' }}>
                          + Publier ce besoin sur Athar
                        </button>
                      </form>
                    </div>

                    <div className="dash-card">
                      <div className="dash-card-header">
                        <h2>Besoins en cours de collecte ({needsList.length})</h2>
                        <span style={{ fontSize: '12.5px', color: 'var(--vert)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <IconShieldCheck className="w-4 h-4" />
                          Transparence garantie
                        </span>
                      </div>
                      {needsList.map((item) => {
                        const pct = Math.min(Math.round((item.collected / item.needed) * 100), 100);
                        return (
                          <div key={item.id} className="besoin-item">
                            <div className="head">
                              <div>
                                <strong>{item.title}</strong>
                                <span style={{ marginLeft: '10px', fontSize: '11px', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                                  {item.category}
                                </span>
                              </div>
                              <span style={{
                                fontSize: '11px',
                                fontWeight: 800,
                                padding: '3px 10px',
                                borderRadius: '999px',
                                background: item.urgency === 'Haute' ? '#fee2e2' : '#fef3c7',
                                color: item.urgency === 'Haute' ? '#b91c1c' : '#b45309'
                              }}>
                                {item.urgency}
                              </span>
                            </div>
                            <p className="desc">{item.description}</p>
                            <div className="cap-progress-head" style={{ marginBottom: '6px' }}>
                              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Progression de la collecte :</span>
                              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--vert)' }}>
                                {item.collected} / {item.needed} {item.unit} ({pct}%)
                              </span>
                            </div>
                            <div className="cap-bar-track" style={{ height: '7px' }}>
                              <div className="cap-bar-fill" style={{ width: `${pct}%` }}></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* 4. ONGLET PROFIL DE L'ASSOCIATION */}
                {dashActiveTab === 'profil' && (
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <h2>Profil officiel & Informations de l'association</h2>
                      <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '12px', fontWeight: 800, padding: '4px 12px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <IconShieldCheck className="w-3.5 h-3.5" />
                        Dossier vérifié
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '24px' }}>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>Nom légal</span>
                        <strong style={{ fontSize: '16px', color: 'var(--bleu)' }}>{assocProfile.name}</strong>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>N° d'Agrément officiel</span>
                        <strong style={{ fontSize: '16px', color: 'var(--vert)' }}>{assocProfile.agrement}</strong>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>Responsable légal</span>
                        <strong style={{ fontSize: '15px' }}>{assocProfile.responsable}</strong>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>Siège & Wilaya</span>
                        <strong style={{ fontSize: '15px' }}>{assocProfile.commune}, {assocProfile.wilaya}</strong>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>Email de contact</span>
                        <strong style={{ fontSize: '14.5px' }}>{assocProfile.email}</strong>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>Téléphone officiel</span>
                        <strong style={{ fontSize: '14.5px' }}>{assocProfile.phone}</strong>
                      </div>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                        Présentation de l'association
                      </span>
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#334155' }}>
                        {assocProfile.description}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      fontSize: '13px',
                      color: '#166534'
                    }}>
                      <IconShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>
                        Cette association est accréditée par la commission Athar. Toutes les attestations délivrées aux bénévoles sont certifiées conformes à la loi 12-06.
                      </span>
                    </div>
                  </div>
                )}

                {/* 5. ONGLET PARAMÈTRES */}
                {dashActiveTab === 'parametres' && (
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <h2>Paramètres du compte & Notifications</h2>
                      <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Configuration générale</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <div>
                          <strong style={{ display: 'block', fontSize: '14.5px' }}>Notifications par email</strong>
                          <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>Recevoir un email instantané pour chaque nouvelle candidature</span>
                        </div>
                        <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', accentColor: 'var(--vert)' }} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <div>
                          <strong style={{ display: 'block', fontSize: '14.5px' }}>Clôture automatique des missions complètes</strong>
                          <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>Fermer l'offre automatiquement quand les places sont atteintes</span>
                        </div>
                        <input type="checkbox" defaultChecked disabled style={{ width: '20px', height: '20px', accentColor: 'var(--vert)' }} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <div>
                          <strong style={{ display: 'block', fontSize: '14.5px' }}>Visibilité publique de l'association</strong>
                          <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>Votre association apparaît dans l'annuaire des 69 wilayas</span>
                        </div>
                        <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', accentColor: 'var(--vert)' }} />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-green btn-lg"
                      style={{ marginTop: '24px' }}
                      onClick={() => showToast("Paramètres sauvegardés avec succès")}
                    >
                      Enregistrer les modifications
                    </button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      )}

      {/* MODAL : TRAITEMENT DÉTAILLÉ DU DOSSIER CANDIDAT */}
      {selectedCandidateDetail && (
        <div className="modal on" role="dialog" aria-modal="true" aria-label="Dossier candidat">
          <div className="modal-bg" onClick={() => setSelectedCandidateDetail(null)}></div>
          <div className="modal-card" style={{ maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
            <button className="modal-x" onClick={() => setSelectedCandidateDetail(null)} aria-label="Fermer">
              <IconX className="w-4 h-4" />
            </button>

            <div className="modal-head sm" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div className="cand-avatar" style={{ width: '48px', height: '48px', fontSize: '16px' }}>
                  {selectedCandidateDetail.initials}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{selectedCandidateDetail.name}</h3>
                  <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: 'var(--muted)' }}>
                    Candidature déposée le {selectedCandidateDetail.appliedDate} · Wilaya : {selectedCandidateDetail.wilaya}
                  </p>
                </div>
              </div>
            </div>

            {/* MISSION VISÉE ET STATUT DE CAPACITÉ */}
            {(() => {
              const targetM = associationMissions.find(m => m.id === selectedCandidateDetail.missionId);
              const isFull = targetM && targetM.spots_registered >= targetM.spots_total;
              return (
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Mission sollicitée
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--bleu)', marginTop: '2px' }}>
                    {selectedCandidateDetail.missionTitle}
                  </div>
                  {targetM && (
                    <div style={{ marginTop: '6px', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: isFull ? '#dc2626' : 'var(--vert)', fontWeight: 700 }}>
                        {targetM.spots_registered} / {targetM.spots_total} places occupées
                      </span>
                      {isFull && selectedCandidateDetail.status !== 'accepted' && (
                        <span style={{ background: '#fee2e2', color: '#991b1b', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <IconLock className="w-3 h-3" /> Capacité maximale atteinte
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* COORDONNÉES DE CONTACT */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', fontWeight: 700 }}>Email</span>
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>{selectedCandidateDetail.email}</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', fontWeight: 700 }}>Téléphone</span>
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>{selectedCandidateDetail.phone}</span>
              </div>
            </div>

            {/* COMPÉTENCES & LANGUES */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', fontWeight: 700, marginBottom: '6px' }}>
                Compétences déclarées
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedCandidateDetail.skills && selectedCandidateDetail.skills.map((sk, idx) => (
                  <span key={idx} style={{ background: '#f1f5f9', color: 'var(--vert)', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px' }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* LETTRE DE MOTIVATION */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', fontWeight: 700, marginBottom: '6px' }}>
                Message de motivation du bénévole
              </span>
              <div style={{
                background: '#fafbf7',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid var(--vert)',
                borderRadius: '8px',
                padding: '14px 16px',
                fontSize: '13.5px',
                lineHeight: '1.6',
                color: '#334155'
              }}>
                « {selectedCandidateDetail.motivation} »
              </div>
            </div>

            {/* BOUTONS D'ACTION */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: '1px solid #e2e8f0' }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSelectedCandidateDetail(null)}
              >
                Fermer
              </button>
              <button
                type="button"
                className="btn"
                style={{ background: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                onClick={() => handleRejectCandidate(selectedCandidateDetail)}
              >
                <IconX className="w-3.5 h-3.5" />
                <span>Refuser</span>
              </button>
              <button
                type="button"
                className="btn btn-green"
                onClick={() => handleAcceptCandidate(selectedCandidateDetail)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <IconCheck className="w-3.5 h-3.5" />
                <span>Accepter la candidature</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL : CONNEXION AVEC LOGO OFFICIEL */}
      <div className={`modal ${loginModalOpen ? 'on' : ''}`} id="loginModal" aria-hidden={!loginModalOpen}>
        <div className="modal-bg" onClick={closeLogin}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Se connecter" style={{ maxWidth: '440px' }}>
          <button className="modal-x" onClick={closeLogin} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          </button>

          <div className="modal-head" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src="/assets/logo.png"
              alt="Logo Athar"
              style={{ height: '70px', width: 'auto', objectFit: 'contain', margin: '0 auto 12px', display: 'block' }}
            />
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '25px', fontWeight: 700, color: 'var(--bleu)' }}>
              Bon retour parmi nous
            </h3>
            <p style={{ margin: '6px 0 0', fontSize: '14px', color: '#5a6472' }}>
              Connectez-vous à votre espace Athar
            </p>
          </div>

          {/* Profil switcher : Bénévole ou Association */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
            <button
              type="button"
              className={`btn ${loginProfile === 'volunteer' ? 'btn-green' : 'btn-ghost'}`}
              style={{ flex: 1, padding: '10px 14px', fontSize: '13.5px', fontWeight: 700 }}
              onClick={() => setLoginProfile('volunteer')}
            >
              Bénévole
            </button>
            <button
              type="button"
              className={`btn ${loginProfile === 'association' ? 'btn-green' : 'btn-ghost'}`}
              style={{ flex: 1, padding: '10px 14px', fontSize: '13.5px', fontWeight: 700 }}
              onClick={() => setLoginProfile('association')}
            >
              Association
            </button>
          </div>

          <form
            className="mform"
            onSubmit={(e) => {
              e.preventDefault();
              closeLogin();
              setCurrentView('association');
              window.location.hash = '#association';
              window.scrollTo({ top: 0, behavior: 'smooth' });
              showToast("Bienvenue dans votre Espace Association El Baraka !");
            }}
          >
            <label>Email</label>
            <input
              type="email"
              placeholder={loginProfile === 'association' ? "contact@elbaraka-dz.org" : "vous@exemple.com"}
              defaultValue={loginProfile === 'association' ? "contact@elbaraka-dz.org" : ""}
              required
            />
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              defaultValue="password123"
              required
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '-8px 0 14px' }}>
              <a
                style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--vert)', cursor: 'pointer' }}
                onClick={() => showToast("Un lien de réinitialisation vous sera envoyé par email.")}
              >
                Mot de passe oublié ?
              </a>
            </div>
            <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%' }}>
              Se connecter →
            </button>
          </form>

          <div className="modal-foot">
            Pas encore de compte ? <a onClick={() => openSignup('choice')}>Créer un compte</a>
          </div>
        </div>
      </div>

      {/* MODAL : PUBLIER UNE MISSION */}
      <div className={`modal ${publishModalOpen ? 'on' : ''}`} aria-hidden={!publishModalOpen}>
        <div className="modal-bg" onClick={closePublish}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Publier une mission" style={{ maxWidth: '520px' }}>
          <button className="modal-x" onClick={closePublish} aria-label="Fermer">✕</button>

          <div className="modal-head sm">
            <div className="mtag asso">Association El Baraka</div>
            <h3>Publier une nouvelle mission</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', marginTop: '4px' }}>
              Décrivez votre besoin pour mobiliser des bénévoles engagés.
            </p>
          </div>

          <form className="mform" onSubmit={handleCreateMission}>
            <label>Titre de la mission</label>
            <input
              type="text"
              required
              placeholder="Ex. Nettoyage de la plage des Aiguades"
              value={newMissionForm.title}
              onChange={(e) => setNewMissionForm({ ...newMissionForm, title: e.target.value })}
            />

            <div className="frow">
              <div>
                <label>Domaine / Cause</label>
                <select
                  value={newMissionForm.category}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, category: e.target.value })}
                >
                  <option value="Solidarité">Solidarité</option>
                  <option value="Éducation">Éducation</option>
                  <option value="Environnement">Environnement</option>
                  <option value="Santé">Santé</option>
                  <option value="Urgence">Aide d'urgence</option>
                </select>
              </div>
              <div>
                <label>Nombre de places</label>
                <input
                  type="number"
                  min="1"
                  required
                  value={newMissionForm.spots}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, spots: e.target.value })}
                />
              </div>
            </div>

            <div className="frow">
              <div>
                <label>Wilaya</label>
                <select
                  value={newMissionForm.location}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, location: e.target.value })}
                >
                  <option value="Alger">Alger</option>
                  <option value="Béjaïa">Béjaïa</option>
                  <option value="Oran">Oran</option>
                  <option value="Constantine">Constantine</option>
                  <option value="Sétif">Sétif</option>
                  <option value="Tizi Ouzou">Tizi Ouzou</option>
                </select>
              </div>
              <div>
                <label>Date prévue</label>
                <input
                  type="text"
                  placeholder="Ex. 15 mai 2025"
                  value={newMissionForm.date}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, date: e.target.value })}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '12px' }}>
              ✓ Publier la mission immédiatement
            </button>
          </form>
        </div>
      </div>

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
                Déjà un compte ? <a onClick={() => openLogin('volunteer')}>Se connecter</a>
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
                      {WILAYAS_LIST.map((w) => (
                        <option key={w.code} value={w.name}>
                          {w.code} - {w.name}
                        </option>
                      ))}
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
                      {WILAYAS_LIST.map((w) => (
                        <option key={w.code} value={w.name}>
                          {w.code} - {w.name}
                        </option>
                      ))}
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
