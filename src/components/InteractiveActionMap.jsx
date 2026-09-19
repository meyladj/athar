import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// SVG Icons (zero external library dependency)
function IconMapPin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
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

function IconClock({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
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

function IconCrosshair({ className = "w-4 h-4" }) {
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

// 16 points d'actions réels avec coordonnées géographiques précises et les 4 codes couleurs exigés
const ACTION_POINTS = [
  // 1. ROUGE : URGENCES & SOS SANG (Code #DC2626)
  {
    id: 'urg-1',
    type: 'emergency',
    color: '#DC2626',
    categoryName: 'Urgences & SOS Sang',
    badgeText: 'Urgence Vitale',
    title: 'Collecte d\'Urgence Don de Sang (Pavillon Pasteur)',
    association: 'CTS CHU Mustapha Pacha',
    wilaya: 'Alger',
    address: 'Place du 1er Mai, Sidi M\'Hamed, Alger',
    coords: [36.7578, 3.0560],
    date: 'Samedi 19 Avril 2025',
    time: '08h30 – 16h30',
    spots_total: 120,
    spots_remaining: 18,
    urgencyLevel: 'Critique (Groupes O- et A+)',
    description: 'Besoins critiques immédiats en globules rouges et plaquettes pour alimenter les blocs de chirurgie pédiatrique et traumatologie. Personnel médical mobilisé sur place.',
    tasks: ['Accueil et enregistrement des donneurs', 'Assistance à la collation post-don', 'Don de sang sur place'],
    image_url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '✚'
  },
  {
    id: 'urg-2',
    type: 'emergency',
    color: '#DC2626',
    categoryName: 'Urgences & SOS Sang',
    badgeText: 'Urgence Vitale',
    title: 'Urgence Hémodialyse et Transfusion Spécialisée',
    association: 'CHU Lamine Debaghine (Bab El Oued)',
    wilaya: 'Alger',
    address: 'Boulevard Colonel Abderrahmane Mira, Bab El Oued, Alger',
    coords: [36.7925, 3.0489],
    date: 'Dimanche 20 Avril 2025',
    time: '09h00 – 15h00',
    spots_total: 40,
    spots_remaining: 8,
    urgencyLevel: 'Très haute priorité',
    description: 'Mobilisation d\'urgence pour les patients en dialyse et chirurgie d\'urgence. Chaque volontaire recevra le Pass Donneur certifié.',
    tasks: ['Orientation des familles', 'Sensibilisation au don régulier', 'Prélèvement sanguin'],
    image_url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '✚'
  },
  {
    id: 'urg-3',
    type: 'emergency',
    color: '#DC2626',
    categoryName: 'Urgences & SOS Sang',
    badgeText: 'Secours d\'Urgence',
    title: 'Poste de Secours d\'Urgence et Gestes qui Sauvent',
    association: 'Croissant Rouge Algérien (Comité Oran)',
    wilaya: 'Oran',
    address: 'Place du 1er Novembre (Place d\'Armes), Oran',
    coords: [35.7032, -0.6483],
    date: 'Lundi 21 Avril 2025',
    time: '10h00 – 17h00',
    spots_total: 25,
    spots_remaining: 6,
    urgencyLevel: 'Intervention Rapide',
    description: 'Équipe de secouristes d\'intervention et sensibilisation de la population aux premiers gestes de réanimation en espace public.',
    tasks: ['Poste de secours avancé', 'Formation express des citoyens', 'Distribution de trousses'],
    image_url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '✚'
  },
  {
    id: 'urg-4',
    type: 'emergency',
    color: '#DC2626',
    categoryName: 'Urgences & SOS Sang',
    badgeText: 'Urgence Vitale',
    title: 'Mobilisation Transfusionnelle Régionale de l\'Est',
    association: 'CHU Ibn Badis Constantine',
    wilaya: 'Constantine',
    address: 'Route de l\'Hôpital, Plateau du Mansourah, Constantine',
    coords: [36.3650, 6.6147],
    date: 'Mercredi 23 Avril 2025',
    time: '08h00 – 14h00',
    spots_total: 80,
    spots_remaining: 12,
    urgencyLevel: 'Critique chirurgical',
    description: 'Campagne de collecte sanguine intensive pour renforcer la banque centrale de sang couvrant les wilayas de Constantine, Mila et Skikda.',
    tasks: ['Contrôle médical préliminaire', 'Prélèvement sécurisé', 'Encadrement bénévole'],
    image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '✚'
  },

  // 2. BLEU : SOLIDARITÉ & AIDES HUMANITAIRES (Code #2563EB)
  {
    id: 'sol-1',
    type: 'solidarity',
    color: '#2563EB',
    categoryName: 'Solidarité & Aide Humanitaire',
    badgeText: 'Banque Alimentaire',
    title: 'Conditionnement & Distribution de Colis Alimentaires',
    association: 'Croissant Rouge Algérien',
    wilaya: 'Alger',
    address: 'Centre Logistique CRA, Bab Ezzouar ZI, Alger',
    coords: [36.7167, 3.1833],
    date: 'Samedi 19 Avril 2025',
    time: '09h00 – 16h00',
    spots_total: 40,
    spots_remaining: 20,
    urgencyLevel: 'Régulier',
    description: 'Confection de 350 cartons de denrées alimentaires essentielles pour les familles répertoriées dans les communes périphériques.',
    tasks: ['Pesée et étiquetage des cartons', 'Mise en palettes logistique', 'Distribution aux relais communaux'],
    image_url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🤝'
  },
  {
    id: 'sol-2',
    type: 'solidarity',
    color: '#2563EB',
    categoryName: 'Solidarité & Aide Humanitaire',
    badgeText: 'Convoi Solidaire',
    title: 'Caravane Hivernale & Packs Chaleur pour Zones Rurales',
    association: 'Association El Baraka Algérie',
    wilaya: 'Médéa',
    address: 'Centre Communal de Solidarité, Berrouaghia, Médéa',
    coords: [36.1378, 2.9197],
    date: 'Samedi 26 Avril 2025',
    time: '08h00 – 17h00',
    spots_total: 30,
    spots_remaining: 9,
    urgencyLevel: 'Action de terrain',
    description: 'Acheminement motorisé de couvertures thermiques haute protection et de radiateurs sécurisés pour 250 foyers isolés.',
    tasks: ['Chargement des camionnettes tout-terrain', 'Distribution porte-à-porte', 'Recueil des signatures de conformité'],
    image_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🤝'
  },
  {
    id: 'sol-3',
    type: 'solidarity',
    color: '#2563EB',
    categoryName: 'Solidarité & Aide Humanitaire',
    badgeText: 'Vestiaire Solidaire',
    title: 'Collecte et Triage de Vêtements Chauds & Fournitures',
    association: 'Nass El Khir Sétif',
    wilaya: 'Sétif',
    address: 'Maison de la Culture Houari Boumediene, Sétif',
    coords: [36.1911, 5.4137],
    date: 'Jeudi 24 Avril 2025',
    time: '13h30 – 17h30',
    spots_total: 20,
    spots_remaining: 7,
    urgencyLevel: 'Régulier',
    description: 'Tri qualitatif de vêtements neufs et reconditionnés pour les enfants scolarisés issus de milieux défavorisés.',
    tasks: ['Tri par taille et tranche d\'âge', 'Conditionnement propre en sachets scellés', 'Accueil des donateurs'],
    image_url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🤝'
  },
  {
    id: 'sol-4',
    type: 'solidarity',
    color: '#2563EB',
    categoryName: 'Solidarité & Aide Humanitaire',
    badgeText: 'Repas Solidaires',
    title: 'Préparation & Distribution de Repas Équilibrés',
    association: 'Comité de Bienfaisance de Blida',
    wilaya: 'Blida',
    address: 'Rue d\'Alger, Centre-Ville, Blida',
    coords: [36.4700, 2.8300],
    date: 'Vendredi 25 Avril 2025',
    time: '11h00 – 15h00',
    spots_total: 15,
    spots_remaining: 5,
    urgencyLevel: 'Action hebdomadaire',
    description: 'Préparation en cuisine communautaire de 200 repas chauds et distribution bienveillante aux personnes vulnérables.',
    tasks: ['Épluchage et préparation cuisine', 'Conditionnement en boîtes isothermes', 'Service avec le sourire'],
    image_url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🤝'
  },

  // 3. VIOLET : ÉVÉNEMENTS & ÉDUCATION & CULTURE (Code #8B5CF6)
  {
    id: 'eve-1',
    type: 'event',
    color: '#8B5CF6',
    categoryName: 'Événements & Éducation',
    badgeText: 'Atelier Enfant',
    title: 'Ateliers de Lecture Vivante & Éveil Artistique',
    association: 'Lire pour Demain',
    wilaya: 'Alger',
    address: 'Médiathèque Municipale, Sidi Yahia, Hydra, Alger',
    coords: [36.7450, 3.0370],
    date: 'Mercredi 16 Avril 2025',
    time: '14h00 – 17h00',
    spots_total: 15,
    spots_remaining: 8,
    urgencyLevel: 'Événement culturel',
    description: 'Animation de contes bilingues (Arabe / Français), dessins guidés et éveil au plaisir de lire pour 25 enfants de 6 à 11 ans.',
    tasks: ['Lecture théâtralisée d\'histoires', 'Encadrement du mini-atelier dessin', 'Distribution du goûter sain'],
    image_url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '★'
  },
  {
    id: 'eve-2',
    type: 'event',
    color: '#8B5CF6',
    categoryName: 'Événements & Éducation',
    badgeText: 'Tech & Jeunesse',
    title: 'Hackathon & Initiation Robotique pour Collégiens',
    association: 'Club Robotique & Informatique USTHB',
    wilaya: 'Alger',
    address: 'Faculté d\'Électronique USTHB, Bab Ezzouar, Alger',
    coords: [36.7119, 3.1812],
    date: 'Samedi 26 Avril 2025',
    time: '09h30 – 17h00',
    spots_total: 20,
    spots_remaining: 5,
    urgencyLevel: 'Atelier innovant',
    description: 'Accompagnement méthodologique de 40 jeunes écoliers dans la construction de mini-robots solaires et initiation au code avec Scratch.',
    tasks: ['Mentorat technique par groupe de 3', 'Assistance au montage électronique', 'Jury d\'évaluation bienveillant'],
    image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '★'
  },
  {
    id: 'eve-3',
    type: 'event',
    color: '#8B5CF6',
    categoryName: 'Événements & Éducation',
    badgeText: 'Patrimoine National',
    title: 'Chantier Participatif & Sauvegarde de la Casbah',
    association: 'Association Médina & Patrimoine',
    wilaya: 'Alger',
    address: 'Palais Mustapha Pacha, Basse Casbah, Alger',
    coords: [36.7850, 3.0600],
    date: 'Samedi 19 Avril 2025',
    time: '09h00 – 15h30',
    spots_total: 25,
    spots_remaining: 11,
    urgencyLevel: 'Préservation historique',
    description: 'Nettoyage des venelles historiques, dépoussiérage des faïences anciennes et guidage culturel pour sensibiliser les visiteurs.',
    tasks: ['Brossage doux des éléments architecturaux', 'Dégagement des ruelles pavées', 'Explication historique aux visiteurs'],
    image_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '★'
  },
  {
    id: 'eve-4',
    type: 'event',
    color: '#8B5CF6',
    categoryName: 'Événements & Éducation',
    badgeText: 'Fête de la Science',
    title: 'Soirée d\'Astronomie & Vulgarisation Scientifique',
    association: 'Club Sirius d\'Astronomie Populaire',
    wilaya: 'Alger',
    address: 'Esplanade de l\'Observatoire, Bouzaréah, Alger',
    coords: [36.7900, 3.0200],
    date: 'Vendredi 2 Mai 2025',
    time: '17h00 – 22h00',
    spots_total: 18,
    spots_remaining: 4,
    urgencyLevel: 'Grand public',
    description: 'Installation de 6 télescopes grand champ, conférence accessible sur le système solaire et guidage des observations pour les familles.',
    tasks: ['Accueil et gestion de la file d\'attente', 'Assistance au réglage des télescopes', 'Distribution de cartes du ciel'],
    image_url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '★'
  },

  // 4. VERT : PLANTATIONS & ÉCOLOGIE & REBOISEMENT (Code #059669)
  {
    id: 'pla-1',
    type: 'planting',
    color: '#059669',
    categoryName: 'Plantations & Écologie',
    badgeText: 'Reboisement',
    title: 'Grande Campagne de Reboisement de la Forêt de Zéralda',
    association: 'Association Green Future',
    wilaya: 'Alger',
    address: 'Forêt Récréative de Zéralda, Entrée Nord, RN11, Alger',
    coords: [36.7135, 2.8420],
    date: 'Samedi 12 Avril 2025',
    time: '09h00 – 15h00',
    spots_total: 30,
    spots_remaining: 15,
    urgencyLevel: 'Action environnementale',
    description: 'Mise en terre de 450 jeunes plants de pins d\'Alep, caroubiers et oliviers. Pose de tuteurs en bois et premier arrosage en équipe.',
    tasks: ['Creusement des trous de plantation', 'Mise en terre avec tuteurs protecteurs', 'Arrosage et paillage écologique'],
    image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🌲'
  },
  {
    id: 'pla-2',
    type: 'planting',
    color: '#059669',
    categoryName: 'Plantations & Écologie',
    badgeText: 'Nettoyage Littoral',
    title: 'Nettoyage & Protection Écologique de la Plage des Andalouses',
    association: 'Association Bahia Clean & Mer Vivante',
    wilaya: 'Oran',
    address: 'Plage des Andalouses, Aïn El Turk, Oran',
    coords: [35.7483, -0.8350],
    date: 'Dimanche 20 Avril 2025',
    time: '08h30 – 12h30',
    spots_total: 35,
    spots_remaining: 14,
    urgencyLevel: 'Protection marine',
    description: 'Opération citoyenne de ramassage des déchets plastiques sur 2 km de côte et sensibilisation des promeneurs au zéro déchet.',
    tasks: ['Collecte avec pinces et sacs biodégradables', 'Pesée et tri sélectif sur la plage', 'Installation de panneaux éducatifs'],
    image_url: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🌲'
  },
  {
    id: 'pla-3',
    type: 'planting',
    color: '#059669',
    categoryName: 'Plantations & Écologie',
    badgeText: 'Régénération Parc',
    title: 'Plantation d\'Espèces Endémiques & Sentiers de Gouraya',
    association: 'Club Éco-Jeunesse Gouraya',
    wilaya: 'Béjaïa',
    address: 'Cap Carbon, Parc National de Gouraya, Béjaïa',
    coords: [36.7725, 5.1030],
    date: 'Samedi 3 Mai 2025',
    time: '09h00 – 14h30',
    spots_total: 20,
    spots_remaining: 8,
    urgencyLevel: 'Biodiversité protégée',
    description: 'Plantation de 200 buissons mellifères et consolidation des talus naturels pour freiner l\'érosion le long de la corniche.',
    tasks: ['Acheminement des plants par sentier', 'Plantation sur les zones dégradées', 'Balisage propre des sentiers'],
    image_url: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🌲'
  },
  {
    id: 'pla-4',
    type: 'planting',
    color: '#059669',
    categoryName: 'Plantations & Écologie',
    badgeText: 'Cédraie de Chréa',
    title: 'Ceinture Verte & Restauration de la Cédraie Millénaire',
    association: 'Amis de la Nature de Blida',
    wilaya: 'Blida',
    address: 'Station de Chréa, Parc National de Chréa, Blida',
    coords: [36.4250, 2.8750],
    date: 'Samedi 10 Mai 2025',
    time: '09h00 – 15h30',
    spots_total: 25,
    spots_remaining: 10,
    urgencyLevel: 'Patrimoine naturel',
    description: 'Sauvegarde des jeunes cèdres de l\'Atlas face aux sécheresses et élimination des déchets résiduels sur les crêtes de Chréa.',
    tasks: ['Plantation de jeunes cèdres en pépinière forestière', 'Désherbage sélectif et paillage', 'Sensibilisation des randonneurs'],
    image_url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🌲'
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
  const markersLayerRef = useRef(null);

  const [selectedAction, setSelectedAction] = useState(null);
  const [filterType, setFilterType] = useState('ALL'); // 'ALL' | 'emergency' | 'solidarity' | 'event' | 'planting'
  const [selectedWilaya, setSelectedWilaya] = useState('ALL');
  const [registeredActionIds, setRegisteredActionIds] = useState([]);

  // Calcul du nombre de points par catégorie
  const countsByType = {
    emergency: ACTION_POINTS.filter(p => p.type === 'emergency').length,
    solidarity: ACTION_POINTS.filter(p => p.type === 'solidarity').length,
    event: ACTION_POINTS.filter(p => p.type === 'event').length,
    planting: ACTION_POINTS.filter(p => p.type === 'planting').length
  };

  const wilayasList = ['ALL', ...Array.from(new Set(ACTION_POINTS.map(p => p.wilaya)))];

  // Actions filtrées selon les filtres actifs
  const filteredActions = ACTION_POINTS.filter(p => {
    if (filterType !== 'ALL' && p.type !== filterType) return false;
    if (selectedWilaya !== 'ALL' && p.wilaya !== selectedWilaya) return false;
    return true;
  });

  // Initialisation de la carte Leaflet (OpenStreetMap 100% gratuit, sans clé API)
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [36.75, 3.05], // Centré sur Alger & nord de l'Algérie
        zoom: 8,
        zoomControl: true,
        scrollWheelZoom: true
      });

      // Tuiles gratuites OpenStreetMap Carto Standard (aucun compte, aucun frais, haute disponibilité)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Mise à jour des marqueurs quand les filtres changent
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    filteredActions.forEach(action => {
      // Création de l'icône personnalisée avec code couleur exact
      const pinHtml = `
        <div class="custom-map-pin-wrap" style="cursor: pointer;">
          <div style="
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: ${action.color};
            opacity: 0.35;
            animation: pulse-ring 2s infinite ease-out;
            transform: translate(-50%, -50%);
            left: 17px;
            top: 17px;
          "></div>
          <div style="
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: ${action.color};
            border: 2.5px solid #ffffff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 14px;
            font-weight: 900;
            position: relative;
            transition: transform 0.2s ease;
          ">
            ${action.iconSymbol}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'custom-action-marker',
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      });

      const marker = L.marker(action.coords, { icon: customIcon });

      // Popup Leaflet élégant avec aperçu rapide et bouton pour ouvrir tous les détails
      const popupContent = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px; max-width: 250px;">
          <div style="display: inline-block; font-size: 10px; font-weight: 800; color: #ffffff; background: ${action.color}; padding: 2px 8px; border-radius: 999px; margin-bottom: 6px;">
            ${action.badgeText}
          </div>
          <h4 style="margin: 0 0 4px; font-size: 13.5px; font-weight: 800; color: #16234A; line-height: 1.35;">
            ${action.title}
          </h4>
          <div style="font-size: 11.5px; color: #64748B; margin-bottom: 8px;">
            📍 ${action.wilaya} · ${action.association}
          </div>
          <div style="font-size: 11px; font-weight: 700; color: #006D5B; margin-bottom: 8px;">
            👥 ${action.spots_remaining} places disponibles
          </div>
          <button
            id="btn-more-details-${action.id}"
            type="button"
            style="
              width: 100%;
              padding: 7px 12px;
              background: #006D5B;
              color: #ffffff;
              border: none;
              border-radius: 8px;
              font-size: 11.5px;
              font-weight: 800;
              cursor: pointer;
            "
          >
            Voir tous les détails →
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-more-details-${action.id}`);
        if (btn) {
          btn.onclick = () => {
            setSelectedAction(action);
            map.closePopup();
          };
        }
      });

      marker.on('click', () => {
        // En cliquant sur le marqueur, on sélectionne aussi l'action
        setSelectedAction(action);
      });

      markersGroup.addLayer(marker);
    });

    // Ajustement de la vue pour englober tous les marqueurs visibles
    if (filteredActions.length > 0) {
      const bounds = L.latLngBounds(filteredActions.map(a => a.coords));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }, [filterType, selectedWilaya]);

  // Centrage de la carte sur une action précise
  const handleZoomToAction = (action) => {
    setSelectedAction(action);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(action.coords, 14, { duration: 1.2 });
    }
  };

  // Participation à l'action
  const handleJoinAction = (action) => {
    if (!registeredActionIds.includes(action.id)) {
      setRegisteredActionIds(prev => [...prev, action.id]);
      onToast(`Votre participation à l'action "${action.title}" a été confirmée ! 🎉`);
    } else {
      setRegisteredActionIds(prev => prev.filter(id => id !== action.id));
      onToast(`Votre désinscription de l'action "${action.title}" a été prise en compte.`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. EN-TÊTE & LÉGENDE DES 4 COULEURS OFFICIELLES */}
      <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '20px 24px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#006D5B', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
              <IconMapPin className="w-4 h-4" />
              <span>{currentLang === 'ar' ? 'الخريطة التفاعلية للميدان' : 'Carte Interactive des Actions'}</span>
            </div>
            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)' }}>
              {currentLang === 'ar' ? 'نقاط التدخل والتطوع عبر ولايات الجزائر' : 'Points d\'Action & Missions près de chez vous'}
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#64748B' }}>
              {currentLang === 'ar'
                ? 'استكشف نقاط التدخل الميدانية حسب تصنيف الألوان واضغط على أي نقطة للاطلاع على التفاصيل والتسجيل.'
                : 'Consultez les points d\'action géolocalisés par code couleur et cliquez sur un point pour voir tous les détails et vous engager.'}
            </p>
          </div>

          {/* SÉLECTEUR DE WILAYA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#475569' }}>Wilaya :</label>
            <select
              value={selectedWilaya}
              onChange={(e) => setSelectedWilaya(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--primary-navy)',
                background: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <option value="ALL">Toutes les wilayas (National)</option>
              {wilayasList.filter(w => w !== 'ALL').map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
        </div>

        {/* BARRE DE FILTRES PAR CODE COULEUR EXIGÉ PAR L'UTILISATEUR */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
          {/* TOUT AFFICHER */}
          <button
            type="button"
            onClick={() => setFilterType('ALL')}
            style={{
              padding: '7px 16px',
              borderRadius: '999px',
              border: filterType === 'ALL' ? '2px solid #006D5B' : '1px solid #E2E8F0',
              background: filterType === 'ALL' ? '#ECFDF5' : '#ffffff',
              color: filterType === 'ALL' ? '#006D5B' : '#475569',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <span>🌟 Toutes les actions ({ACTION_POINTS.length})</span>
          </button>

          {/* 1. ROUGE - URGENCES */}
          <button
            type="button"
            onClick={() => setFilterType('emergency')}
            style={{
              padding: '7px 16px',
              borderRadius: '999px',
              border: filterType === 'emergency' ? '2px solid #DC2626' : '1px solid #FCA5A5',
              background: filterType === 'emergency' ? '#FEF2F2' : '#ffffff',
              color: '#DC2626',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DC2626', display: 'inline-block' }}></span>
            <span>Urgences & SOS Sang ({countsByType.emergency})</span>
          </button>

          {/* 2. BLEU - SOLIDARITÉ */}
          <button
            type="button"
            onClick={() => setFilterType('solidarity')}
            style={{
              padding: '7px 16px',
              borderRadius: '999px',
              border: filterType === 'solidarity' ? '2px solid #2563EB' : '1px solid #BFDBFE',
              background: filterType === 'solidarity' ? '#EFF6FF' : '#ffffff',
              color: '#2563EB',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563EB', display: 'inline-block' }}></span>
            <span>Solidarité & Aides ({countsByType.solidarity})</span>
          </button>

          {/* 3. VIOLET - ÉVÉNEMENTS & ÉDUCATION */}
          <button
            type="button"
            onClick={() => setFilterType('event')}
            style={{
              padding: '7px 16px',
              borderRadius: '999px',
              border: filterType === 'event' ? '2px solid #8B5CF6' : '1px solid #DDD6FE',
              background: filterType === 'event' ? '#F5F3FF' : '#ffffff',
              color: '#7C3AED',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#8B5CF6', display: 'inline-block' }}></span>
            <span>Événements & Éducation ({countsByType.event})</span>
          </button>

          {/* 4. VERT - PLANTATIONS & ÉCOLOGIE */}
          <button
            type="button"
            onClick={() => setFilterType('planting')}
            style={{
              padding: '7px 16px',
              borderRadius: '999px',
              border: filterType === 'planting' ? '2px solid #059669' : '1px solid #A7F3D0',
              background: filterType === 'planting' ? '#ECFDF5' : '#ffffff',
              color: '#059669',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#059669', display: 'inline-block' }}></span>
            <span>Plantations & Reboisement ({countsByType.planting})</span>
          </button>
        </div>
      </div>

      {/* 2. DISPOSITION PRINCIPALE : CARTE PLEINE LARGEUR AVEC BARRE LATÉRALE D'ACTIONS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: '24px', alignItems: 'stretch' }} className="map-interactive-grid">
        {/* COLONNE CARTE LEAFLET / OPENSTREETMAP */}
        <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', minHeight: '560px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)' }}>
          {/* BANDEAU SUPÉRIEUR DE STATUT DE LA CARTE */}
          <div style={{ padding: '10px 18px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#64748B' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
              <strong>{filteredActions.length} points d'actions actifs</strong> sur la carte
            </div>
            <button
              type="button"
              onClick={() => {
                if (mapInstanceRef.current) {
                  mapInstanceRef.current.flyTo([36.75, 3.05], 8, { duration: 1 });
                }
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#006D5B',
                fontWeight: 700,
                fontSize: '11.5px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <IconCrosshair className="w-3.5 h-3.5" />
              <span>Recentrer la carte</span>
            </button>
          </div>

          {/* CONTENEUR DU CANEVAS LEAFLET */}
          <div ref={mapContainerRef} style={{ width: '100%', height: '100%', minHeight: '510px', zIndex: 1 }}></div>

          {/* LÉGENDE FLOTTANTE COMPACTE EN BAS DE CARTE */}
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', zIndex: 1000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '10px 14px', fontSize: '11px', display: 'flex', gap: '14px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#DC2626', fontWeight: 800 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626' }}></span>
              Rouge: Urgences
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#2563EB', fontWeight: 800 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563EB' }}></span>
              Bleu: Solidarité
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#8B5CF6', fontWeight: 800 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8B5CF6' }}></span>
              Violet: Événements
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#059669', fontWeight: 800 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }}></span>
              Vert: Plantations
            </span>
          </div>
        </div>

        {/* COLONNE LISTE DES POINTS D'ACTION / DÉTAILS SÉLECTIONNÉS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '560px', overflowY: 'auto', paddingRight: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 2px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-navy)' }}>
              {filteredActions.length} action{filteredActions.length > 1 ? 's' : ''} disponible{filteredActions.length > 1 ? 's' : ''}
            </span>
            <small style={{ fontSize: '11.5px', color: '#64748B' }}>Cliquez pour zoomer et voir les détails</small>
          </div>

          {filteredActions.map(action => {
            const isSelected = selectedAction?.id === action.id;
            const isRegistered = registeredActionIds.includes(action.id);

            return (
              <div
                key={action.id}
                onClick={() => handleZoomToAction(action)}
                style={{
                  background: isSelected ? '#F0FDF4' : '#ffffff',
                  border: isSelected ? `2px solid ${action.color}` : '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 6px 20px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                {/* LIGNE DU HAUT : BADGE COULEUR & ASSOCIATION */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      background: action.color,
                      color: '#ffffff',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span>{action.iconSymbol}</span>
                    <span>{action.badgeText}</span>
                  </span>

                  <span style={{ fontSize: '11.5px', color: '#64748B', fontWeight: 600 }}>
                    {action.wilaya}
                  </span>
                </div>

                {/* TITRE ET ASSOCIATION */}
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1.35 }}>
                    {action.title}
                  </h4>
                  <div style={{ fontSize: '12px', color: 'var(--primary-teal)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{action.association}</span>
                  </div>
                </div>

                {/* DÉTAILS RAPIDES (DATE, LIEU, PLACES) */}
                <div style={{ fontSize: '12px', color: '#64748B', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <IconCalendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{action.date} · {action.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{action.address}</span>
                  </div>
                </div>

                {/* BAS DE CARTE : PLACES & BOUTON D'ACTION */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '10px', marginTop: '2px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: action.spots_remaining <= 5 ? '#DC2626' : '#006D5B' }}>
                    👥 {action.spots_remaining} places restantes
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAction(action);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: action.color,
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Détails</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. MODALE INTERACTIVE DES DÉTAILS COMPLETS DE L'ACTION (QUAND ON CLIQUE) */}
      {selectedAction && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setSelectedAction(null)}></div>
          <div
            className="modal-card"
            style={{
              maxWidth: '680px',
              borderRadius: '22px',
              padding: '0',
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* PHOTO D'EN-TÊTE AVEC BADGE COULEUR ET CROIX DE FERMETURE */}
            <div style={{ position: 'relative', height: '220px', width: '100%' }}>
              <img
                src={selectedAction.image_url}
                alt={selectedAction.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)' }}></div>

              <button
                className="modal-x"
                onClick={() => setSelectedAction(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.5)', color: '#ffffff', borderRadius: '50%', width: '36px', height: '36px', border: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center', fontSize: '18px', zIndex: 10 }}
              >
                ✕
              </button>

              {/* BADGE DU TYPE D'ACTION */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px' }}>
                <span
                  style={{
                    background: selectedAction.color,
                    color: '#ffffff',
                    padding: '5px 14px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 900,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{selectedAction.iconSymbol}</span>
                  <span>{selectedAction.categoryName}</span>
                </span>
              </div>

              {/* TITRE ET ASSOCIATION DANS LE DÉGRADÉ */}
              <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', margin: '0 0 4px', lineHeight: 1.3 }}>
                  {selectedAction.title}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2E8F0', fontSize: '13px' }}>
                  <span style={{ fontWeight: 800 }}>{selectedAction.association}</span>
                  <span>•</span>
                  <span>📍 {selectedAction.wilaya}</span>
                </div>
              </div>
            </div>

            {/* CORPS DE LA MODALE */}
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* GRILLE D'INFORMATIONS PRATIQUES */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', background: '#F8FAFC', padding: '14px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                <div>
                  <small style={{ fontSize: '11px', color: '#64748B', display: 'block', fontWeight: 700 }}>DATE</small>
                  <strong style={{ fontSize: '13px', color: 'var(--primary-navy)' }}>{selectedAction.date}</strong>
                </div>
                <div>
                  <small style={{ fontSize: '11px', color: '#64748B', display: 'block', fontWeight: 700 }}>HORAIRES</small>
                  <strong style={{ fontSize: '13px', color: 'var(--primary-navy)' }}>{selectedAction.time}</strong>
                </div>
                <div>
                  <small style={{ fontSize: '11px', color: '#64748B', display: 'block', fontWeight: 700 }}>DISPONIBILITÉ</small>
                  <strong style={{ fontSize: '13px', color: selectedAction.spots_remaining <= 5 ? '#DC2626' : '#006D5B' }}>
                    {selectedAction.spots_remaining} places sur {selectedAction.spots_total}
                  </strong>
                </div>
                <div>
                  <small style={{ fontSize: '11px', color: '#64748B', display: 'block', fontWeight: 700 }}>NIVEAU D'ACTION</small>
                  <strong style={{ fontSize: '13px', color: selectedAction.color }}>{selectedAction.urgencyLevel}</strong>
                </div>
              </div>

              {/* LOCALISATION EXACTE */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155', background: '#F1F5F9', padding: '10px 14px', borderRadius: '10px' }}>
                <IconMapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span><strong>Adresse :</strong> {selectedAction.address}</span>
              </div>

              {/* DESCRIPTION DE L'ACTION */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 6px' }}>
                  Description de la mission sur le terrain
                </h4>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {selectedAction.description}
                </p>
              </div>

              {/* CE QUE VOUS ALLEZ FAIRE */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 8px' }}>
                  Ce que vous ferez sur place :
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {selectedAction.tasks.map((task, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
                      <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF5', color: '#006D5B', display: 'grid', placeItems: 'center', fontSize: '11px', fontWeight: 800 }}>✓</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOUTONS D'ACTION AU BAS DE LA MODALE */}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => {
                    if (mapInstanceRef.current) {
                      mapInstanceRef.current.flyTo(selectedAction.coords, 14, { duration: 1 });
                    }
                    setSelectedAction(null);
                  }}
                  style={{
                    padding: '11px 20px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#ffffff',
                    color: '#334155',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <IconCrosshair className="w-4 h-4 text-slate-500" />
                  <span>Voir sur la carte</span>
                </button>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSelectedAction(null)}
                    style={{ padding: '11px 18px', borderRadius: '12px', fontSize: '13.5px' }}
                  >
                    Fermer
                  </button>

                  <button
                    type="button"
                    onClick={() => handleJoinAction(selectedAction)}
                    style={{
                      padding: '11px 24px',
                      borderRadius: '12px',
                      border: 'none',
                      background: registeredActionIds.includes(selectedAction.id) ? '#DC2626' : selectedAction.color,
                      color: '#ffffff',
                      fontSize: '13.5px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: `0 4px 14px ${selectedAction.color}55`,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <IconCheck className="w-4 h-4" />
                    <span>
                      {registeredActionIds.includes(selectedAction.id)
                        ? 'Annuler ma participation'
                        : 'Je participe à cette action'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
