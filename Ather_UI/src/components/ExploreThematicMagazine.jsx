import React, { useState } from 'react';

// Assets
import profileNadiaAvatar from '../assets/profile-nadia-avatar.png';
import articleHeroEducation from '../assets/article-hero-education.png';
import articleCartables from '../assets/article-cartables.png';
import articleReboisement from '../assets/article-reboisement.png';
import articleDonSang from '../assets/article-don-sang.png';
import articleCasbah from '../assets/article-casbah.png';
import articleQuartiers from '../assets/article-quartiers.png';
import articlePlages from '../assets/article-plages.png';
import atharLogoClean from '../assets/athar-logo-clean.png';

// SVG Icons
function IconNewspaper({ className = "w-5 h-5", color = "#1e3a8a" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function IconClock({ className = "w-3.5 h-3.5", color = "#94a3b8" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconChevronLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconChevronDown({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconMail({ className = "w-4 h-4", color = "#94a3b8" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L1 7" />
    </svg>
  );
}

function IconShield({ className = "w-3.5 h-3.5", color = "#64748b" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconX({ className = "w-5 h-5" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconGlobe({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// Category Specific Icons
function IconGraduation() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function IconHeartCategory({ color = "#e11d48" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconLeafCategory({ color = "#16a34a" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

function IconBloodCategory({ color = "#dc2626" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function IconLandmarkCategory({ color = "#1d4ed8" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

// Featured carousel articles
const FEATURED_ARTICLES = [
  {
    id: 'feat-1',
    badge: 'À LA UNE',
    category: 'education',
    title: "Ces jeunes qui réinventent l'éducation en Algérie",
    subtitle: "À travers tout le pays, des bénévoles transforment des salles de classe en espaces d'espoir. Rencontre avec une génération qui agit.",
    author: {
      name: 'Nadia Mansouri',
      role: 'Bénévole',
      date: '18 Septembre 2026',
      avatar: profileNadiaAvatar,
      isImageAvatar: true
    },
    image: articleHeroEducation,
    readTime: '7 min de lecture',
    content: [
      "Dans une petite école de Bab El Oued, les rires d'enfants se mêlent aux explications patientes de jeunes étudiants en sciences et en lettres. Chaque samedi matin, plus de trente bénévoles investissent les salles de classe pour dispenser du soutien scolaire personnalisé, du mentorat et des ateliers créatifs.",
      "« Ce n'est pas seulement une question de devoirs ou de calcul », explique Nadia Mansouri, étudiante en biologie et bénévole depuis deux ans. « Nous redonnons confiance aux enfants qui traversent des difficultés. Quand un regard s'illumine parce qu'une notion difficile a enfin été comprise, c'est la plus belle des récompenses. »",
      "Le mouvement ne cesse de grandir : parti de trois classes pilotes à Alger, le programme fédère aujourd'hui des initiatives similaires à Constantine, Oran et Béjaïa, prouvant la force contagieuse du don de soi."
    ],
    highlightQuote: "« Nous ne réparons pas seulement des lacunes scolaires : nous semons les graines de la confiance et de la citoyenneté chez les générations futures. »"
  },
  {
    id: 'feat-2',
    badge: 'À LA UNE',
    category: 'environnement',
    title: "Le réveil du Barrage Vert : la jeunesse mobilisée",
    subtitle: "Cinquante ans après le projet historique, une nouvelle génération réinvente la reforestation écologique participative.",
    author: {
      name: 'Mohamed Amrani',
      role: 'Volontaire Green Future',
      date: '12 Septembre 2026',
      avatar: 'MA',
      isImageAvatar: false
    },
    image: articleReboisement,
    readTime: '6 min de lecture',
    content: [
      "Entre Djelfa, M'Sila et les collines de l'Atlas saharien, des milliers de volontaires redonnent vie à la barrière écologique avec des espèces endémiques adaptées.",
      "Le week-end dernier à Zéralda, plus de 300 bénévoles ont planté des caroubiers, des pistachiers de l'Atlas et des acacias avec des techniques de rétention d'eau sans plastique.",
      "Chaque arbre est géolocalisé pour assurer un suivi rigoureux sur les prochaines années."
    ],
    highlightQuote: "« Planter un arbre en terre algérienne, c'est signer un pacte avec les cinquante prochaines années de notre patrie. »"
  },
  {
    id: 'feat-3',
    badge: 'À LA UNE',
    category: 'culture',
    title: "La Casbah vivante à travers les yeux des jeunes",
    subtitle: "Des étudiants en architecture et de jeunes bénévoles s'engagent au quotidien pour redonner vie à notre patrimoine ancestral.",
    author: {
      name: 'Lydia Cheniti',
      role: 'Architecte & Bénévole',
      date: '8 Septembre 2026',
      avatar: 'LC',
      isImageAvatar: false
    },
    image: articleCasbah,
    readTime: '5 min de lecture',
    content: [
      "Les ruelles pavées de la vieille ville d'Alger vibrent d'un regain d'intérêt porté par une nouvelle vague d'initiatives associatives et culturelles.",
      "Entre relevés architecturaux, chantiers participatifs de consolidation et visites guidées inclusives, la jeunesse s'approprie son histoire.",
      "Ce patrimoine n'est pas un musée figé, mais un tissu vivant porteur d'identité et de mémoire."
    ],
    highlightQuote: "« La Casbah n'est pas un vestige du passé, c'est le cœur battant de notre identité collective. »"
  }
];

// Grid articles (strict match to mockup articles benev.png)
const ARTICLES_GRID = [
  {
    id: 'art-1',
    category: 'education',
    badgeText: 'ÉDUCATION',
    badgeColor: '#1d4ed8', // blue
    readTime: '5 min de lecture',
    date: '15 Septembre 2026',
    title: 'Des cartables pour tous : la solidarité en action',
    subtitle: "À Oran, une campagne citoyenne offre le sourire à des centaines d'enfants pour la rentrée.",
    image: articleCartables,
    author: {
      name: 'Yasmine Kadi',
      role: 'Enseignante & Bénévole',
      initials: 'YK',
      bgColor: '#006D5B'
    },
    content: [
      "À chaque rentrée scolaire, le coût des fournitures pèse lourdement sur les foyers les plus modestes. Face à cette réalité, un collectif d'enseignants et d'étudiants d'Oran s'est uni pour lancer la campagne 'Un cartable, un sourire'.",
      "Grâce aux dons collectés via Athar et aux permanences de tri tenues par des dizaines de bénévoles, plus de 450 cartables garnis de livres, cahiers et trousses ont été remis aux élèves de quartiers défavorisés.",
      "« Voir les yeux des enfants s'illuminer lorsqu'ils découvrent leur nouveau cartable aux couleurs nationales, c'est ce qui nous donne la force de continuer chaque année », témoigne Yasmine Kadi."
    ],
    quote: "« Aucun enfant ne devrait débuter l'année scolaire sans le matériel nécessaire pour croire en ses rêves. »"
  },
  {
    id: 'art-2',
    category: 'environnement',
    badgeText: 'ENVIRONNEMENT',
    badgeColor: '#16a34a', // green
    readTime: '6 min de lecture',
    date: '12 Septembre 2026',
    title: 'Une Algérie plus verte grâce à ses citoyens',
    subtitle: 'De la Mitidja aux Aurès, des jeunes se mobilisent pour reboiser et préserver notre biodiversité.',
    image: articleReboisement,
    author: {
      name: 'Mohamed Amrani',
      role: 'Volontaire Green Future',
      initials: 'MA',
      bgColor: '#006D5B'
    },
    content: [
      "Face à l'érosion des sols et aux canicules répétées, la mobilisation citoyenne s'est muée en un véritable réflexe civique sur l'ensemble du territoire national.",
      "Du parc national de Chréa jusqu'aux forêts de Batna, des cohortes de volontaires chaussent leurs bottes chaque fin de semaine pour planter des espèces rustiques et entretenir les pare-feux naturels.",
      "L'association Green Future a déjà dépassé son objectif de 10 000 jeunes plants pour la saison automnale, un bilan rendu possible par la coordination en ligne des volontaires."
    ],
    quote: "« Notre terre a soif d'arbres, et notre jeunesse a soif d'impact positif et mesurable. »"
  },
  {
    id: 'art-3',
    category: 'sante',
    badgeText: 'SANTÉ',
    badgeColor: '#dc2626', // red
    readTime: '4 min de lecture',
    date: '10 Septembre 2026',
    title: 'Le don de sang : un geste qui sauve des vies',
    subtitle: 'Au CHU Mustapha, des dizaines de bénévoles se relaient chaque mois pour faire la différence.',
    image: articleDonSang,
    author: {
      name: 'Sarah Mansour',
      role: 'Interne en Médecine',
      initials: 'SM',
      bgColor: '#006D5B'
    },
    content: [
      "Chaque jour en Algérie, des centaines de transfusions sanguines sont indispensables pour traiter les urgences obstétricales, les interventions chirurgicales et les malades atteints de thalassémie ou de leucémie.",
      "Au Centre de Transfusion Sanguine du CHU Mustapha Pacha, l'engagement bénévole est vital pour maintenir les réserves au-dessus du seuil de sécurité, notamment pour les groupes rares O négatif et B négatif.",
      "« Un don de 10 minutes permet de sauver jusqu'à trois vies distinctes », rappelle le Dr Sarah Mansour. « C'est l'acte de générosité le plus direct et le plus pur qui existe. »"
    ],
    quote: "« Le don de sang est une goutte de vie offerte sans rien attendre en retour, sauf le battement d'un cœur sauvé. »"
  },
  {
    id: 'art-4',
    category: 'culture',
    badgeText: 'CULTURE',
    badgeColor: '#1e3a8a', // deep navy blue
    readTime: '5 min de lecture',
    date: '8 Septembre 2026',
    title: 'La Casbah vivante à travers les yeux des jeunes',
    subtitle: "Des étudiants en architecture s'engagent pour préserver ce joyau de notre patrimoine.",
    image: articleCasbah,
    author: {
      name: 'Lydia Cheniti',
      role: 'Architecte & Bénévole',
      initials: 'LC',
      bgColor: '#006D5B'
    },
    content: [
      "Inscrite au patrimoine mondial de l'UNESCO, la Casbah d'Alger recèle des trésors architecturaux uniques qui nécessitent une vigilance continue et des soins méticuleux.",
      "Chaque mois, de jeunes architectes, artisans plâtriers et passionnés d'histoire organisent des chantiers de consolidation et des ateliers de sensibilisation pour les résidents et les visiteurs.",
      "Leur ambition ? Concilier préservation historique rigoureuse et amélioration du cadre de vie quotidien des habitants."
    ],
    quote: "« Préserver la Casbah, c'est transmettre aux générations futures la mémoire vivante de notre créativité ancestrale. »"
  },
  {
    id: 'art-5',
    category: 'solidarite',
    badgeText: 'SOLIDARITÉ',
    badgeColor: '#db2777', // pink / fuchsia
    readTime: '4 min de lecture',
    date: '5 Septembre 2026',
    title: 'Dans les quartiers, la solidarité au quotidien',
    subtitle: 'À Sétif, une équipe de bénévoles apporte un soutien concret aux familles dans le besoin.',
    image: articleQuartiers,
    author: {
      name: 'Fares Ait Said',
      role: 'Coordinateur terrain',
      initials: 'FA',
      bgColor: '#1e293b' // dark slate as seen in mockup
    },
    content: [
      "Dans les ruelles escarpées des quartiers anciens de Sétif, la livraison des colis de dignité Athar est devenue un rendez-vous attendu empreint de respect et de chaleur humaine.",
      "Loin de toute logique d'assistanat, les équipes de bénévoles créent des liens humains durables avec les familles, identifiant les besoins en fournitures, en accompagnement médical ou en réfection d'habitations.",
      "« Nous ne faisons pas que déposer un colis alimentaire », souligne Fares Aït Saïd. « Nous partageons un café, nous écoutons, nous redonnons de la chaleur à ceux qui se sentent isolés. »"
    ],
    quote: "« La véritable solidarité ne se mesure pas au poids d'un carton, mais à la sincérité du regard échangé sur le seuil d'une porte. »"
  },
  {
    id: 'art-6',
    category: 'environnement',
    badgeText: 'ENVIRONNEMENT',
    badgeColor: '#16a34a', // green
    readTime: '6 min de lecture',
    date: '1 Septembre 2026',
    title: 'Nos plages, notre responsabilité',
    subtitle: 'Des centaines de citoyens se mobilisent pour des plages plus propres sur tout le littoral algérien.',
    image: articlePlages,
    author: {
      name: 'Nour Benali',
      role: 'Étudiante & Bénévole',
      initials: 'NB',
      bgColor: '#006D5B'
    },
    content: [
      "Avec plus de 1 200 kilomètres de côtes baignées par la Méditerranée, l'Algérie possède un patrimoine marin d'une beauté exceptionnelle, aujourd'hui menacé par les déchets plastiques.",
      "Tout l'été, l'opération citoyenne 'Littoral Pur' a réuni des clubs de plongée, des familles et des associations de jeunesse pour nettoyer plages et calanques de Tipaza à Jijel.",
      "Au-delà du ramassage, les volontaires sensibilisent les vacanciers et installent des points de tri sélectif durables."
    ],
    quote: "« Une plage propre n'est pas un privilège touristique : c'est un devoir moral envers les richesses de notre mer. »"
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Tous', icon: null },
  { id: 'education', label: 'Éducation', icon: IconGraduation },
  { id: 'solidarite', label: 'Solidarité', icon: IconHeartCategory },
  { id: 'environnement', label: 'Environnement', icon: IconLeafCategory },
  { id: 'sante', label: 'Santé & Don de sang', icon: IconBloodCategory },
  { id: 'culture', label: 'Culture & Patrimoine', icon: IconLandmarkCategory }
];

export default function ExploreThematicMagazine({
  currentLang = 'fr',
  searchQuery = '',
  onSelectTheme,
  onActionPledge
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filter articles
  const filteredArticles = ARTICLES_GRID.filter(art => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    if (!matchesCat) return false;
    if (searchQuery && searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchSub = art.subtitle.toLowerCase().includes(q);
      const matchAuth = art.author.name.toLowerCase().includes(q);
      const matchBadge = art.badgeText.toLowerCase().includes(q);
      return matchTitle || matchSub || matchAuth || matchBadge;
    }
    return true;
  });

  const activeHero = FEATURED_ARTICLES[activeHeroIndex];

  const handleNextHero = (e) => {
    e?.stopPropagation();
    setActiveHeroIndex((prev) => (prev + 1) % FEATURED_ARTICLES.length);
  };

  const handlePrevHero = (e) => {
    e?.stopPropagation();
    setActiveHeroIndex((prev) => (prev - 1 + FEATURED_ARTICLES.length) % FEATURED_ARTICLES.length);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', paddingBottom: '60px', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      
      {/* 1. HEADER SECTION (Strict Match to articles benev.png) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingTop: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}
          >
            <IconNewspaper />
          </div>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: '32px',
                fontWeight: 800,
                color: '#0f284e',
                fontFamily: "'Lora', Georgia, serif",
                letterSpacing: '-0.5px',
                lineHeight: 1.1
              }}
            >
              Articles
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#64748b', fontWeight: 500 }}>
              Des histoires vraies. Un impact réel.
            </p>
          </div>
        </div>

        {/* Right Cursive Script */}
        <div style={{ textAlign: 'right', position: 'relative', userSelect: 'none', paddingRight: '4px' }}>
          <div
            style={{
              fontFamily: "'Caveat', cursive, sans-serif",
              fontSize: '26px',
              fontWeight: 700,
              color: '#1e3a8a',
              lineHeight: 1.15,
              transform: 'rotate(-2deg)'
            }}
          >
            Des<br />citoyens,<br />Un impact réel.
          </div>
          <svg style={{ position: 'absolute', bottom: '-8px', right: 0, width: '120px', height: '12px', pointerEvents: 'none' }} viewBox="0 0 110 12" fill="none">
            <path d="M2 9C35 3 75 2 108 8" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* 2. HERO FEATURED ARTICLE (À LA UNE) - 2 Columns Side by Side */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '22px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(15,40,78,0.06)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          minHeight: '380px',
          marginBottom: '26px'
        }}
      >
        {/* Left story block (~50%) */}
        <div
          style={{
            flex: '1 1 50%',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 2
          }}
        >
          <div>
            {/* Red pill badge */}
            <span
              style={{
                display: 'inline-block',
                background: '#dc2626',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '4px 14px',
                borderRadius: '999px',
                marginBottom: '16px',
                boxShadow: '0 2px 6px rgba(220, 38, 38, 0.25)'
              }}
            >
              {activeHero.badge}
            </span>

            {/* Title */}
            <h2
              onClick={() => setSelectedArticle(activeHero)}
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#0f284e',
                fontFamily: "'Lora', Georgia, serif",
                letterSpacing: '-0.4px',
                lineHeight: 1.25,
                margin: '0 0 14px',
                cursor: 'pointer'
              }}
            >
              {activeHero.title}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '14.5px',
                color: '#475569',
                lineHeight: 1.6,
                margin: '0 0 24px',
                maxWidth: '500px'
              }}
            >
              {activeHero.subtitle}
            </p>
          </div>

          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            {/* Author info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {activeHero.author.isImageAvatar ? (
                <img
                  src={activeHero.author.avatar}
                  alt={activeHero.author.name}
                  style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e2e8f0' }}
                />
              ) : (
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#006D5B',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {activeHero.author.avatar}
                </div>
              )}
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                  {activeHero.author.name}
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                  {activeHero.author.role} · {activeHero.author.date}
                </div>
              </div>
            </div>

            {/* Read action */}
            <button
              type="button"
              onClick={() => setSelectedArticle(activeHero)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#006D5B',
                fontWeight: 800,
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: '6px 0'
              }}
            >
              <span>Lire l'article</span>
              <span style={{ fontSize: '16px' }}>→</span>
            </button>
          </div>
        </div>

        {/* Right visual block (~50%) */}
        <div
          style={{
            flex: '1 1 50%',
            position: 'relative',
            overflow: 'hidden',
            background: '#f1f5f9',
            minHeight: '380px'
          }}
        >
          <img
            src={activeHero.image}
            alt={activeHero.title}
            onClick={() => setSelectedArticle(activeHero)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
          />

          {/* Carousel navigation controls (bottom right) */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 10
            }}
          >
            {/* Dots */}
            <div
              style={{
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(6px)',
                padding: '6px 12px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {FEATURED_ARTICLES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveHeroIndex(idx); }}
                  style={{
                    border: 'none',
                    borderRadius: '999px',
                    height: '6px',
                    width: activeHeroIndex === idx ? '18px' : '6px',
                    background: activeHeroIndex === idx ? '#ffffff' : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    padding: 0
                  }}
                  title={`Article ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={handlePrevHero}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: 'none',
                  color: '#334155',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title="Précédent"
              >
                <IconChevronLeft />
              </button>
              <button
                type="button"
                onClick={handleNextHero}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: 'none',
                  color: '#334155',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title="Suivant"
              >
                <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY PILLS BAR (Strict Match to articles benev.png) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '22px' }}>
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const IconComp = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 20px',
                borderRadius: '999px',
                fontSize: '13.5px',
                fontWeight: isSelected ? 800 : 600,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                border: isSelected ? 'none' : '1px solid #e2e8f0',
                background: isSelected ? '#006D5B' : '#ffffff',
                color: isSelected ? '#ffffff' : '#334155',
                boxShadow: isSelected ? '0 2px 8px rgba(0, 109, 91, 0.25)' : '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {IconComp && <IconComp color={isSelected ? '#ffffff' : undefined} />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. ARTICLES COUNT & SORT HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#64748b' }}>
          12 articles
        </span>

        {/* Sort dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '7px 14px',
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#334155',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
            }}
          >
            <span>⇅</span>
            <span>{sortBy === 'recent' ? 'Plus récents' : sortBy === 'popular' ? 'Plus populaires' : 'Plus anciens'}</span>
            <IconChevronDown />
          </button>

          {isSortOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '100%',
                marginTop: '4px',
                width: '160px',
                background: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                padding: '6px',
                zIndex: 40
              }}
            >
              {['recent', 'popular', 'oldest'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setSortBy(opt); setIsSortOpen(false); }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: sortBy === opt ? '#f0fdf4' : 'transparent',
                    color: sortBy === opt ? '#006D5B' : '#334155',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {opt === 'recent' ? 'Plus récents' : opt === 'popular' ? 'Plus populaires' : 'Plus anciens'}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 5. 6 ARTICLE CARDS GRID (3 Columns x 2 Rows) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '22px', marginBottom: '36px' }}>
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            {/* Image container */}
            <div style={{ position: 'relative', width: '100%', height: '190px', background: '#f1f5f9', overflow: 'hidden' }}>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Category badge */}
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: article.badgeColor,
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                  }}
                >
                  {article.badgeText}
                </span>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Meta: reading time & date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8', marginBottom: '8px' }}>
                <IconClock />
                <span>{article.readTime} · {article.date}</span>
              </div>

              {/* Title in Serif font */}
              <h3
                style={{
                  margin: '0 0 8px',
                  fontSize: '16.5px',
                  fontWeight: 800,
                  color: '#0f284e',
                  fontFamily: "'Lora', Georgia, serif",
                  lineHeight: 1.35,
                  minHeight: '44px'
                }}
              >
                {article.title}
              </h3>

              {/* Subtitle / Excerpt */}
              <p
                style={{
                  margin: '0 0 16px',
                  fontSize: '13px',
                  color: '#64748b',
                  lineHeight: 1.55,
                  minHeight: '40px'
                }}
              >
                {article.subtitle}
              </p>

              {/* Card Footer: Author & Read CTA */}
              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: article.author.bgColor || '#006D5B',
                      color: '#ffffff',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {article.author.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>{article.author.name}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{article.author.role}</div>
                  </div>
                </div>

                <span style={{ fontSize: '13px', fontWeight: 800, color: '#006D5B', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span>Lire</span>
                  <span style={{ fontSize: '15px' }}>→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. NEWSLETTER FOOTER BANNER (Strict Match to articles benev.png) */}
      <div
        style={{
          background: 'linear-gradient(135deg, #edf9f6 0%, #e2f5f1 100%)',
          borderRadius: '22px',
          border: '1px solid #b7e4c7',
          padding: '32px 40px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '28px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0, 109, 91, 0.04)'
        }}
      >
        {/* Decorative foliage watermarks in bottom right */}
        <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.25, pointerEvents: 'none', color: '#006D5B' }}>
          <svg width="180" height="180" viewBox="0 0 200 200" fill="currentColor">
            <path d="M120 190 C90 170, 70 130, 80 90 C90 50, 130 30, 170 20 C180 60, 160 110, 120 190 Z" />
            <path d="M70 195 C50 170, 40 140, 50 110 C60 80, 90 60, 120 50 C125 80, 110 120, 70 195 Z" opacity="0.8" />
          </svg>
        </div>

        {/* Left copy */}
        <div style={{ flex: '1 1 55%', zIndex: 2 }}>
          <h3
            style={{
              margin: '0 0 8px',
              fontSize: '24px',
              fontWeight: 800,
              color: '#0f284e',
              fontFamily: "'Lora', Georgia, serif",
              lineHeight: 1.25
            }}
          >
            Restez informé des histoires qui font bouger l'Algérie
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.5, maxWidth: '480px' }}>
            Recevez chaque semaine une sélection d'articles inspirants, d'opportunités de bénévolat et d'initiatives citoyennes.
          </p>
        </div>

        {/* Right form */}
        <div style={{ flex: '0 0 420px', zIndex: 2 }}>
          {newsletterSuccess ? (
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '14px 18px', border: '1px solid #86efac', color: '#166534', fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconCheck className="w-4 h-4 text-emerald-600" />
              <span>Merci ! Vous êtes bien inscrit(e) aux histoires citoyennes Athar.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit}>
              <div style={{ background: '#ffffff', borderRadius: '14px', border: '1px solid #cbd5e1', padding: '5px 5px 5px 14px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <IconMail />
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  required
                  style={{ width: '100%', padding: '8px 10px', fontSize: '13.5px', border: 'none', outline: 'none', background: 'transparent', color: '#1e293b' }}
                />
                <button
                  type="submit"
                  style={{ background: '#006D5B', color: '#ffffff', border: 'none', borderRadius: '10px', padding: '10px 22px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  S'abonner
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#64748b', marginTop: '6px', paddingLeft: '6px' }}>
                <IconShield />
                <span>Pas de spam. Désabonnez-vous à tout moment.</span>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* 7. PORTAL FOOTER (Strict match to articles benev.png bottom) */}
      <footer
        style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '32px',
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={atharLogoClean} alt="Athar" style={{ height: '26px', width: 'auto' }} />
          <div>
            <strong style={{ fontSize: '13px', color: '#006D5B', display: 'block', lineHeight: 1.1 }}>Athar</strong>
            <small style={{ fontSize: '10.5px', color: '#94a3b8' }}>Le bénévole qui unit</small>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', fontSize: '13px', color: '#64748b' }}>
          <a href="#aide" style={{ textDecoration: 'none', color: 'inherit' }}>Aide</a>
          <a href="#confidentialite" style={{ textDecoration: 'none', color: 'inherit' }}>Confidentialité</a>
          <a href="#conditions" style={{ textDecoration: 'none', color: 'inherit' }}>Conditions</a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
            <IconGlobe className="w-3.5 h-3.5 text-slate-500" />
            <span>{currentLang === 'ar' ? 'العربية' : 'FR'}</span>
            <IconChevronDown />
          </div>
        </div>
      </footer>

      {/* 8. FULL ARTICLE READER MODAL */}
      {selectedArticle && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', maxWidth: '720px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            {/* Close button */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 20, width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              title="Fermer"
            >
              <IconX />
            </button>

            {/* Modal Hero Image */}
            <div style={{ width: '100%', height: '260px', position: 'relative', background: '#f1f5f9', overflow: 'hidden' }}>
              <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px', color: '#ffffff' }}>
                <span style={{ display: 'inline-block', background: '#006D5B', color: '#ffffff', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', marginBottom: '8px' }}>
                  {selectedArticle.badgeText || 'À LA UNE'}
                </span>
                <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 800, fontFamily: "'Lora', Georgia, serif", lineHeight: 1.3 }}>
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: selectedArticle.author?.bgColor || '#006D5B', color: '#ffffff', fontSize: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selectedArticle.author?.initials || selectedArticle.author?.avatar || 'AT'}
                  </div>
                  <div>
                    <strong style={{ fontSize: '13.5px', color: '#0f172a', display: 'block' }}>{selectedArticle.author?.name}</strong>
                    <small style={{ fontSize: '11px', color: '#94a3b8' }}>{selectedArticle.author?.role}</small>
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <IconClock />
                  <span>{selectedArticle.readTime} · {selectedArticle.date || 'Septembre 2026'}</span>
                </div>
              </div>

              {/* Story content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: '#334155', lineHeight: 1.7 }}>
                {selectedArticle.content?.map((p, idx) => (
                  <p key={idx} style={{ margin: 0 }}>{p}</p>
                ))}
              </div>

              {/* Highlight quote */}
              {(selectedArticle.highlightQuote || selectedArticle.quote) && (
                <div style={{ padding: '18px 22px', borderRadius: '14px', background: '#f0fdf4', borderLeft: '4px solid #006D5B', color: '#065f46', fontSize: '14.5px', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.6 }}>
                  {selectedArticle.highlightQuote || selectedArticle.quote}
                </div>
              )}

              {/* Action buttons */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    if (selectedArticle.category === 'sante' && onActionPledge) {
                      onActionPledge();
                    } else if (onSelectTheme) {
                      onSelectTheme(selectedArticle.category);
                    }
                  }}
                  style={{ background: '#006D5B', color: '#ffffff', border: 'none', borderRadius: '10px', padding: '11px 24px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                >
                  {selectedArticle.category === 'sante' ? 'Faire un don de sang →' : 'Rejoindre une mission liée →'}
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{ background: '#ffffff', color: '#64748b', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '11px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
