import React, { useState } from 'react';
import '../styles/association/profile-feed.css';

// Assets
import assocCoverAlger from '../assets/assoc-cover-alger.png';
import assocCraLogo from '../assets/assoc-cra-logo.png';
import assocPostEcole from '../assets/assoc-post-ecole.png';
import assocPostPlage from '../assets/assoc-post-plage.png';
import assocPostArbre from '../assets/assoc-post-arbre.png';
import assocPostSante from '../assets/assoc-post-sante.png';
import assocStoryTerrain from '../assets/assoc-story-terrain.png';
import assocStoryEducation from '../assets/assoc-story-education.png';
import assocStoryEnvironnement from '../assets/assoc-story-environnement.png';
import assocStorySante from '../assets/assoc-story-sante.png';
import assocStoryPatrimoine from '../assets/assoc-story-patrimoine.png';
import assocStoryCaravane from '../assets/assoc-story-caravane.png';
import assocPostCaravane from '../assets/assoc-post-caravane.png';
import assocPostQuartiers from '../assets/assoc-post-quartiers.png';

// Clean SVG Icons (zero emojis)
function IconMapPin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMail({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L1 7" />
    </svg>
  );
}

function IconGlobe({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconCheckVerified({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#006D5B">
      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function IconCamera({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function IconGrid({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function IconInfo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
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

function IconHeart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function IconFileText({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconFlag({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
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

function IconPlus({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconMessageSquare({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function IconX({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconShield({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconLeaf({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function IconBookOpen({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconAlertTriangle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

const STORY_HIGHLIGHTS = [
  { 
    id: 'terrain', 
    label: 'Sur le terrain', 
    img: assocStoryTerrain, 
    desc: 'Mobilisation active de nos équipes : nettoyage des plages, soutien logistique et assistance continue aux populations.',
    badge: 'Intervention directe'
  },
  { 
    id: 'education', 
    label: 'Éducation', 
    img: assocStoryEducation, 
    desc: 'Distribution de cartables, trousses et kits scolaires complets pour accompagner les enfants des zones reculées.',
    badge: 'Rentrée Solidaire'
  },
  { 
    id: 'environnement', 
    label: 'Environnement', 
    img: assocStoryEnvironnement, 
    desc: 'Campagnes citoyennes de reboisement et de végétalisation pour protéger nos forêts et lutter contre la désertification.',
    badge: 'Écologie & Climat'
  },
  { 
    id: 'sante', 
    label: 'Santé & Sang', 
    img: assocStorySante, 
    desc: 'Collectes de sang massives avec les centres de transfusion sanguine et caravanes médicales de dépistage gratuit.',
    badge: 'Urgences vitales'
  },
  { 
    id: 'patrimoine', 
    label: 'Secours d’urgence', 
    img: assocStoryPatrimoine, 
    desc: 'Secourisme de terrain, formation des bénévoles et réactivité immédiate face aux aléas climatiques et situations de crise.',
    badge: 'Protection Civique'
  },
  { 
    id: 'caravane', 
    label: 'Caravanes Sud', 
    img: assocStoryCaravane, 
    desc: 'Convois d’aide humanitaire, vêtements chauds et denrées alimentaires acheminés vers les wilayas du Grand Sud.',
    badge: 'Hiver Solidaire'
  },
];

const POSTS = [
  {
    id: 'post-2',
    title: 'Caravane humanitaire',
    location: 'Biskra & Oasis',
    image: assocPostCaravane,
    photosCount: 5,
    likes: 312,
    comments: 44,
    date: '15 Mai 2025',
    caption: "Arrivée de la grande caravane solidaire du Croissant-Rouge Algérien dans les zones d'ombre : distribution de couvertures thermiques, kits d'hygiène et vêtements pour 200 foyers."
  },
  {
    id: 'post-3',
    title: 'Campagne de reboisement',
    location: 'Zéralda, Alger',
    image: assocPostArbre,
    photosCount: 4,
    likes: 389,
    comments: 52,
    date: '10 Mai 2025',
    caption: "Mobilisation citoyenne pour reverdir notre littoral : plus de 800 arbustes plantés avec le concours de 60 jeunes bénévoles enthousiastes. Chaque arbre planté est un souffle d'avenir !"
  },
  {
    id: 'post-4',
    title: 'Rénovation & Casbah d’Alger',
    location: 'Casbah, Alger',
    image: assocPostQuartiers,
    photosCount: 6,
    likes: 420,
    comments: 63,
    date: '4 Mai 2025',
    caption: "Journée solidaire au cœur de la Casbah historique : nettoyage des ruelles, réfection des façades anciennes et valorisation de notre patrimoine commun avec les artisans et riverains."
  },
  {
    id: 'post-5',
    title: 'Dépollution du littoral',
    location: 'Chenoua, Tipaza',
    image: assocPostPlage,
    photosCount: 4,
    likes: 365,
    comments: 41,
    date: '28 Avril 2025',
    caption: "Opération plages propres réussie : 1,2 tonne de plastiques et débris marins collectés et dirigés vers les filières de recyclage. Merci aux plongeurs et bénévoles mobilisés !"
  },
  {
    id: 'post-6',
    title: 'Don du sang & Dépistage',
    location: 'CHU Mustapha Bacha, Alger',
    image: assocPostSante,
    photosCount: 3,
    likes: 298,
    comments: 36,
    date: '22 Avril 2025',
    caption: "Grande collecte de sang citoyenne au CHU Mustapha : 140 poches récoltées pour subvenir aux besoins critiques des services d'urgence. Un don = des vies sauvées !"
  },
  {
    id: 'post-7',
    title: 'Rentrée scolaire solidaire',
    location: 'Médéa',
    image: assocPostEcole,
    photosCount: 4,
    likes: 275,
    comments: 29,
    date: '14 Avril 2025',
    caption: "Remise de cartables neufs garnis de fournitures pour 180 élèves scolarisés dans les communes montagneuses. Garantir à chaque enfant le droit d'apprendre avec dignité."
  }
];

const STORIES_AR = [
  { 
    id: 'terrain', 
    label: 'في الميدان', 
    img: assocStoryTerrain, 
    desc: 'تعبئة مستمرة لفرقنا الميدانية: تنظيف الشواطئ، دعم لوجستي ومساعدة للأسر المحتاجة.',
    badge: 'تدخل مباشر'
  },
  { 
    id: 'education', 
    label: 'التعليم والتكوين', 
    img: assocStoryEducation, 
    desc: 'توزيع محافظ ومستلزمات مدرسية كاملة لأبناء المناطق النائية والمعزولة.',
    badge: 'دخول مدرسي متضامن'
  },
  { 
    id: 'environnement', 
    label: 'البيئة والتشجير', 
    img: assocStoryEnvironnement, 
    desc: 'حملات تطوعية للتشجير ومكافحة التصحر وحماية المساحات الغابية.',
    badge: 'بيئة وتنمية'
  },
  { 
    id: 'sante', 
    label: 'الصحة والتبرع بالدم', 
    img: assocStorySante, 
    desc: 'حملات مكثفة للتبرع بالدم مع مراكز حقن الدم وقوافل الفحص الطبي المتخصص المجاني.',
    badge: 'إنقاذ الأرواح'
  },
  { 
    id: 'patrimoine', 
    label: 'الإسعاف والطوارئ', 
    img: assocStoryPatrimoine, 
    desc: 'إسعافات أولية، تكوين المتطوعين وسرعة استجابة أمام الأزمات والكوارث.',
    badge: 'حماية وإسعاف'
  },
  { 
    id: 'caravane', 
    label: 'قوافل الجنوب', 
    img: assocStoryCaravane, 
    desc: 'قوافل المساعدات الإنسانية والطرود الغذائية والكسوة لولايات الجنوب الكبير.',
    badge: 'شتاء دافئ'
  },
];

const POSTS_AR = [
  {
    id: 'post-2',
    title: 'قافلة إنسانية تضامنية',
    location: 'بسكرة والواحات',
    image: assocPostCaravane,
    photosCount: 5,
    likes: 312,
    comments: 44,
    date: '15 ماي 2025',
    caption: "وصول القافلة التضامنية الكبرى للهلال الأحمر الجزائري إلى مناطق الظل: توزيع أغطية شتوية، حقائب نظافة وألبسة لـ 200 عائلة."
  },
  {
    id: 'post-3',
    title: 'حملة تشجير كبرى',
    location: 'زرالدة، الجزائر العاصمة',
    image: assocPostArbre,
    photosCount: 4,
    likes: 389,
    comments: 52,
    date: '10 ماي 2025',
    caption: "تعبئة مواطنة لإعادة تخضير شريطنا الساحلي: غرس أكثر من 800 شجيرة بمشاركة 60 شاباً وشابة متطوعين بحماس وأمل."
  },
  {
    id: 'post-4',
    title: 'ترميم وتأهيل القصبة العتيقة',
    location: 'القصبة، الجزائر العاصمة',
    image: assocPostQuartiers,
    photosCount: 6,
    likes: 420,
    comments: 63,
    date: '4 ماي 2025',
    caption: "يوم تضامني في قلب القصبة التاريخية: تنظيف الأزقة، ترميم الواجهات وإبراز تراثنا المشترك بالتنسيق مع الحرفيين والسكان."
  },
  {
    id: 'post-5',
    title: 'تنظيف وحماية الشواطئ',
    location: 'شنوة، تيبازة',
    image: assocPostPlage,
    photosCount: 4,
    likes: 365,
    comments: 41,
    date: '28 أفريل 2025',
    caption: "نجاح حملة الشواطئ النظيفة: جمع 1.2 طن من البلاستيك والنفايات البحرية وتوجيهها للرسكلة. شكراً للغواصين والمتطوعين!"
  },
  {
    id: 'post-6',
    title: 'حملة التبرع بالدم والفحص الطبي',
    location: 'المستشفى الجامعي مصطفى باشا، الجزائر',
    image: assocPostSante,
    photosCount: 3,
    likes: 298,
    comments: 36,
    date: '22 أفريل 2025',
    caption: "حملة تبرع بالدم واسعة بمستشفى مصطفى باشا: جمع 140 كيساً لتغطية الاحتياجات العاجلة لمصالح الطوارئ. قطرة دم = حياة تُنقذ!"
  },
  {
    id: 'post-7',
    title: 'الدخول المدرسي المتضامن',
    location: 'المدية',
    image: assocPostEcole,
    photosCount: 4,
    likes: 275,
    comments: 29,
    date: '14 أفريل 2025',
    caption: "توزيع محافظ وأدوات مدرسية متكاملة لـ 180 تلميذاً في البلديات الجبلية، لضمان حق كل طفل في التعلّم بكرامة."
  }
];

export default function AssociationProfileFeed({ onNavigateNewPost, currentLang = 'fr' }) {
  const [activeTab, setActiveTab] = useState('publications'); // 'publications' | 'apropos' | 'benevoles'
  const [selectedPost, setSelectedPost] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(null);

  const isAr = currentLang === 'ar';
  const storiesList = isAr ? STORIES_AR : STORY_HIGHLIGHTS;
  const postsList = isAr ? POSTS_AR : POSTS;

  return (
    <div className="assoc-feed-root">
      
      {/* 1. CARTE PROFIL & BANNIÈRE PANORAMIQUE */}
      <div className="assoc-profile-card">
        {/* Photo de couverture */}
        <div className="assoc-cover-banner">
          <img
            src={assocCoverAlger}
            alt="Couverture Croissant Rouge Algérien"
          />
          {/* Citation cursive sur la photo */}
          <div className="assoc-cover-quote">
            <span className="assoc-cover-quote-text">
              {isAr ? (
                <>خطوات صغيرة<br />تصنع فارقاً<br />عظيماً.</>
              ) : (
                <>Des petites actions<br />font de grands<br />changements.</>
              )}
            </span>
          </div>

          {/* Bouton modifier la photo */}
          <button
            type="button"
            className="assoc-cover-change-btn"
          >
            <IconCamera className="w-3.5 h-3.5" />
            <span>{isAr ? 'تغيير صورة الغلاف' : 'Changer la couverture'}</span>
          </button>
        </div>

        {/* Corps du profil (Avatar + Identité + Actions) */}
        <div className="assoc-profile-body">
          <div className="assoc-profile-header-row">
            
            {/* Avatar circulaire net avec bordure blanche */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
              <div className="assoc-profile-avatar-wrap">
                <img
                  src={assocCraLogo}
                  alt="Croissant Rouge Algérien Logo"
                />
              </div>

              <div className="assoc-profile-name-group">
                <div className="assoc-profile-title-row">
                  <h1 className="assoc-profile-title">{isAr ? 'الهلال الأحمر الجزائري' : 'Croissant Rouge Algérien'}</h1>
                  <IconCheckVerified className="w-5 h-5" />
                </div>
                <div className="assoc-profile-category">
                  {isAr ? 'جمعية إنسانية وطنية ذات منفعة عامة معتمدة' : "Association humanitaire reconnue d'utilité publique"}
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="assoc-profile-actions">
              <button
                type="button"
                className="assoc-btn-edit"
              >
                <IconEdit className="w-3.5 h-3.5" />
                <span>{isAr ? 'تعديل الملف' : 'Modifier le profil'}</span>
              </button>
              
              <button
                type="button"
                onClick={onNavigateNewPost}
                className="assoc-btn-new-post"
              >
                <IconPlus className="w-4 h-4" />
                <span>{isAr ? 'منشور جديد' : 'Nouvelle publication'}</span>
              </button>
            </div>
          </div>

          {/* Bio Description aérée */}
          <p className="assoc-profile-bio">
            {isAr
              ? 'التخفيف من المعاناة وحماية الفئات الأكثر هشاشة وبناء مجتمعات أكثر صموداً وتكافلاً عبر 69 ولاية جزائرية.'
              : 'Soulager les souffrances, protéger les personnes les plus vulnérables et bâtir des communautés plus résilientes à travers les 69 wilayas d\'Algérie.'}
          </p>

          {/* Liens de contact sous forme de badges aérés */}
          <div className="assoc-profile-contact-row">
            <span className="assoc-contact-pill">
              <IconMapPin className="w-3.5 h-3.5" />
              <span>{isAr ? 'الجزائر العاصمة، الجزائر' : 'Alger, Algérie'}</span>
            </span>
            <span className="assoc-contact-pill">
              <IconMail className="w-3.5 h-3.5" />
              <a href="mailto:contact@cra.dz">contact@cra.dz</a>
            </span>
            <span className="assoc-contact-pill">
              <IconGlobe className="w-3.5 h-3.5" />
              <a href="https://www.cra.dz" target="_blank" rel="noreferrer">www.cra.dz</a>
            </span>
          </div>

          {/* 2. STATS D'IMPACT (4 CARTES AÉRÉES) */}
          <div className="assoc-stats-grid">
            {/* 1. Publications */}
            <div className="assoc-stat-box">
              <div className="assoc-stat-icon-wrap">
                <IconFileText className="w-5 h-5" />
              </div>
              <div>
                <div className="assoc-stat-val">24</div>
                <div className="assoc-stat-label">{isAr ? 'منشورات ميدانية' : 'Publications'}</div>
              </div>
            </div>

            {/* 2. Bénévoles */}
            <div className="assoc-stat-box">
              <div className="assoc-stat-icon-wrap" style={{ color: '#2563eb' }}>
                <IconUsers className="w-5 h-5" />
              </div>
              <div>
                <div className="assoc-stat-val">186</div>
                <div className="assoc-stat-label">{isAr ? 'متطوعون منخرطون' : 'Bénévoles engagés'}</div>
              </div>
            </div>

            {/* 3. Missions réalisées */}
            <div className="assoc-stat-box">
              <div className="assoc-stat-icon-wrap" style={{ color: '#16a34a' }}>
                <IconFlag className="w-5 h-5" />
              </div>
              <div>
                <div className="assoc-stat-val">5</div>
                <div className="assoc-stat-label">{isAr ? 'مبادرات منجزة' : 'Missions réalisées'}</div>
              </div>
            </div>

            {/* 4. Abonnés */}
            <div className="assoc-stat-box">
              <div className="assoc-stat-icon-wrap" style={{ color: '#0d9488' }}>
                <IconHeart className="w-5 h-5" />
              </div>
              <div>
                <div className="assoc-stat-val">1.2K</div>
                <div className="assoc-stat-label">{isAr ? 'متابعون' : 'Abonnés'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STORIES TEMPS FORTS */}
      <div className="assoc-stories-card">
        {storiesList.map((story) => (
          <button
            type="button"
            key={story.id}
            onClick={() => setShowStoryModal(story)}
            className="assoc-story-item"
          >
            <div className="assoc-story-ring">
              <div className="assoc-story-avatar">
                <img
                  src={story.img}
                  alt={story.label}
                />
              </div>
            </div>
            <span className="assoc-story-label">
              {story.label}
            </span>
          </button>
        ))}

        {/* Bouton nouveau temps fort */}
        <button
          type="button"
          className="assoc-story-item"
        >
          <div
            className="assoc-story-ring"
            style={{
              background: 'transparent',
              border: '2px dashed #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b'
            }}
          >
            <IconPlus className="w-5 h-5" />
          </div>
          <span className="assoc-story-label" style={{ color: '#64748b' }}>
            {isAr ? 'جديد' : 'Nouveau'}
          </span>
        </button>
      </div>

      {/* 4. CONTENU PRINCIPAL EN DEUX COLONNES */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '26px', alignItems: 'start' }}>
        
        {/* COLONNE GAUCHE : SUBTABS + GRILLE INSTAGRAM AÉRÉE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Navigation sous-onglets */}
          <div className="assoc-tabs-bar">
            <button
              type="button"
              onClick={() => setActiveTab('publications')}
              className={`assoc-tab-btn ${activeTab === 'publications' ? 'active' : ''}`}
            >
              <IconGrid className="w-4 h-4" />
              <span>{isAr ? 'المنشورات' : 'Nos publications'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('apropos')}
              className={`assoc-tab-btn ${activeTab === 'apropos' ? 'active' : ''}`}
            >
              <IconInfo className="w-4 h-4" />
              <span>{isAr ? 'نبذة عن الجمعية' : 'À propos'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('benevoles')}
              className={`assoc-tab-btn ${activeTab === 'benevoles' ? 'active' : ''}`}
            >
              <IconUsers className="w-4 h-4" />
              <span>{isAr ? 'المتطوعون (186)' : 'Bénévoles (186)'}</span>
            </button>
          </div>

          {/* ONGLET 1: GRILLE DE PUBLICATIONS STYLE INSTAGRAM */}
          {activeTab === 'publications' && (
            <div className="assoc-posts-grid">
              {postsList.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="assoc-post-card"
                >
                  {/* Photo container avec overlay */}
                  <div className="assoc-post-img-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    {/* Badge multi-photos */}
                    <div className="assoc-post-badge-multi">
                      <IconFileText className="w-3 h-3" />
                      <span>{post.photosCount}</span>
                    </div>

                    {/* Overlay au hover avec stats */}
                    <div className="assoc-post-hover-overlay">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <IconHeart className="w-4 h-4" style={{ color: '#f43f5e' }} />
                        <span>{post.likes}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <IconMessageSquare className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pied de carte : ESPACEMENT CONFORTABLE & AUCUN TEXTE COLLÉ */}
                  <div className="assoc-post-card-body">
                    <h3 className="assoc-post-card-title">
                      {post.title}
                    </h3>
                    <div className="assoc-post-card-meta">
                      <div className="assoc-post-card-loc">
                        <IconMapPin className="w-3.5 h-3.5" style={{ color: 'var(--assoc-text-muted)' }} />
                        <span>{post.location}</span>
                      </div>
                      <span className="assoc-post-card-date">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ONGLET 2: À PROPOS */}
          {activeTab === 'apropos' && (
            <div className="assoc-profile-card" style={{ padding: '28px 32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 12px' }}>
                {isAr ? 'التاريخ والرسالة الإنسانية' : 'Histoire et Mission'}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--assoc-text-body)', margin: '0 0 20px' }}>
                {isAr
                  ? 'تأسس الهلال الأحمر الجزائري سنة 1956، وهو الجمعية الوطنية الإنسانية للجمهورية الجزائرية الديمقراطية الشعبية، وهيئة مساعدة للسلطات العمومية في المجال الإنساني. ينشط عبر كامل التراب الوطني في 69 ولاية من خلال لجانه الولائية والمحلية، ويجنّد سنوياً عشرات الآلاف من المتطوعين المخلصين لخدمة المحتاجين والمتضررين.'
                  : "Fondé en 1956, le Croissant Rouge Algérien (CRA) est la société nationale humanitaire d'Algérie, auxiliaire des pouvoirs publics dans le domaine humanitaire. Présente sur l'ensemble des 69 wilayas à travers ses comités locaux et de wilaya, l'organisation mobilise chaque année des dizaines de milliers de volontaires dévoués."}
              </p>

              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 14px' }}>
                {isAr ? 'المبادئ الأساسية' : 'Principes Fondamentaux'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '14px 16px', background: 'var(--assoc-bg-subtle)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 700, color: 'var(--assoc-text-primary)' }}>
                  <IconShield className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                  <span>{isAr ? 'الإنسانية والحياد' : 'Humanité & Neutralité'}</span>
                </div>
                <div style={{ padding: '14px 16px', background: 'var(--assoc-bg-subtle)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 700, color: 'var(--assoc-text-primary)' }}>
                  <IconUsers className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                  <span>{isAr ? 'عدم التحيز والوحدة' : 'Impartialité & Unité'}</span>
                </div>
                <div style={{ padding: '14px 16px', background: 'var(--assoc-bg-subtle)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 700, color: 'var(--assoc-text-primary)' }}>
                  <IconGlobe className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                  <span>{isAr ? 'العالمية' : 'Universalité'}</span>
                </div>
                <div style={{ padding: '14px 16px', background: 'var(--assoc-bg-subtle)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 700, color: 'var(--assoc-text-primary)' }}>
                  <IconHeart className="w-4 h-4" style={{ color: 'var(--assoc-emerald)' }} />
                  <span>{isAr ? 'التطوع والخدمة المجتمعية' : 'Engagement Bénévole'}</span>
                </div>
              </div>
            </div>
          )}

          {/* ONGLET 3: BÉNÉVOLES */}
          {activeTab === 'benevoles' && (
            <div className="assoc-profile-card" style={{ padding: '28px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--assoc-navy)', margin: 0 }}>
                  {isAr ? 'المتطوعون المنخرطون (186)' : 'Bénévoles engagés (186)'}
                </h3>
                <span style={{ fontSize: '13px', color: 'var(--assoc-emerald)', fontWeight: 700, cursor: 'pointer' }}>
                  {isAr ? 'إدارة المجتمع التطوعي ←' : 'Gérer la communauté →'}
                </span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--assoc-text-muted)', margin: 0 }}>
                {isAr
                  ? 'سواعد معطاءة وطاقات شابة تكرس وقتها وجهدها كل أسبوع لترسيخ قيم التكافل وإغاثة إخوانهم عبر ربوع الجزائر الحبيبة.'
                  : "Ces citoyens dévoués donnent de leur temps chaque semaine pour faire vivre la solidarité et secourir nos concitoyens sur le terrain à travers toute l'Algérie."}
              </p>
            </div>
          )}
        </div>

        {/* COLONNE DROITE : À PROPOS + DOMAINES D'ACTION + CITATION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          {/* Bloc 1: À propos de nous */}
          <div className="assoc-profile-card" style={{ padding: '24px 26px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 10px' }}>
              {isAr ? 'نبذة عن الجمعية' : 'À propos de nous'}
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--assoc-text-body)', lineHeight: 1.6, margin: '0 0 10px' }}>
              {isAr
                ? 'الهلال الأحمر الجزائري منظمة إنسانية وطنية مستقلة وهيئة مساعدة للسلطات العمومية في الميدان الإنساني، تعمل لصون الحياة والصحة والكرامة الإنسانية.'
                : 'Le Croissant Rouge Algérien est une association humanitaire nationale, auxiliaire des pouvoirs publics, qui œuvre pour la protection de la vie, la santé et la dignité humaine.'}
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--assoc-text-body)', lineHeight: 1.6, margin: '0 0 16px' }}>
              {isAr
                ? 'نجنّد المتطوعين عبر كافة الولايات لإعانة الفئات الهشة وبناء مجتمع متماسك ومتضامن.'
                : 'Nous mobilisons des bénévoles à travers tout le territoire national pour porter assistance aux personnes vulnérables et renforcer la cohésion sociale.'}
            </p>

            <button
              type="button"
              onClick={() => setActiveTab('apropos')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--assoc-emerald)',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{isAr ? 'عرض السجل التعريفي الكامل' : "Voir l'historique complet"}</span>
              <span>{isAr ? '←' : '→'}</span>
            </button>
          </div>

          {/* Bloc 2: Domaines d'action */}
          <div className="assoc-profile-card" style={{ padding: '24px 26px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 14px' }}>
              {isAr ? 'مجالات العمل والنشاط' : "Domaines d'action"}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--assoc-text-body)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--assoc-emerald-light)', color: 'var(--assoc-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconShield className="w-4 h-4" />
                </div>
                <span>{isAr ? 'الإغاثة والمساعدات الإنسانية' : 'Aide humanitaire & secours'}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--assoc-text-body)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffe4e6', color: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconHeart className="w-4 h-4" />
                </div>
                <span>{isAr ? 'الصحة والإسعافات الأولية' : 'Santé et premiers secours'}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--assoc-text-body)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconBookOpen className="w-4 h-4" />
                </div>
                <span>{isAr ? 'التعليم والتأهيل المدرسي' : 'Éducation et inclusion'}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--assoc-text-body)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconLeaf className="w-4 h-4" />
                </div>
                <span>{isAr ? 'البيئة وحملات التشجير' : 'Environnement & reboisement'}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--assoc-text-body)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconAlertTriangle className="w-4 h-4" />
                </div>
                <span>{isAr ? 'الطوارئ وإدارة الأزمات' : 'Urgences et catastrophes'}</span>
              </div>
            </div>
          </div>

          {/* Bloc 3: Carte Citation Athar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #d8f3dc 0%, #e8f5e9 100%)',
              border: '1px solid #b7e4c7',
              borderRadius: '20px',
              padding: '24px 26px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <p style={{ fontSize: '14px', fontWeight: 700, fontStyle: 'italic', color: '#064e3b', lineHeight: 1.6, margin: '0 0 10px' }}>
              {isAr
                ? '“ مجتمع أكثر تكافلاً وتضامناً يُبنى كل يوم، بسواعدكم وهمتكم. ”'
                : '“ Une société plus solidaire se construit chaque jour, avec vous. ”'}
            </p>
            <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--assoc-emerald)' }}>
              {isAr ? '— الهلال الأحمر الجزائري' : '— Croissant Rouge Algérien'}
            </div>
          </div>

        </div>
      </div>

      {/* 5. MODAL DE DÉTAIL D'UNE PUBLICATION */}
      {selectedPost && (
        <div className="assoc-modal-backdrop" onClick={() => setSelectedPost(null)}>
          <div className="assoc-modal-dialog" onClick={(e) => e.stopPropagation()}>
            {/* Volet photo gauche */}
            <div className="assoc-modal-photo-pane">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
              />
            </div>

            {/* Volet contenu droite */}
            <div className="assoc-modal-content-pane">
              {/* En-tête auteur */}
              <div className="assoc-modal-header">
                <div className="assoc-modal-author-row">
                  <div className="assoc-modal-author-avatar">
                    <img src={assocCraLogo} alt="CRA" />
                  </div>
                  <div className="assoc-modal-author-info">
                    <strong>{isAr ? 'الهلال الأحمر الجزائري' : 'Croissant Rouge Algérien'}</strong>
                    <small>{selectedPost.location} · {selectedPost.date}</small>
                  </div>
                </div>

                <button
                  type="button"
                  className="assoc-modal-close-btn"
                  onClick={() => setSelectedPost(null)}
                  title={isAr ? 'إغلاق' : 'Fermer'}
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>

              {/* Corps scrollable du modal */}
              <div className="assoc-modal-body-scroll">
                <p className="assoc-modal-caption">
                  {selectedPost.caption}
                </p>

                <div style={{ padding: '12px 14px', background: 'var(--assoc-bg-subtle)', borderRadius: '10px', fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                  <strong>{isAr ? 'التصنيف الميداني : ' : 'Thématique : '}</strong>
                  {isAr ? 'نشاط ميداني موثق ومؤكد عبر منصة أثر' : 'Action de terrain certifiée par Athar'}
                </div>
              </div>

              {/* Pied de modal avec actions */}
              <div className="assoc-modal-footer">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--assoc-text-primary)' }}>
                      <IconHeart className="w-4 h-4" style={{ color: '#f43f5e' }} />
                      <span>{selectedPost.likes} {isAr ? 'إعجاب' : "mentions J'aime"}</span>
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--assoc-text-muted)' }}>
                      <IconMessageSquare className="w-4 h-4" />
                      <span>{selectedPost.comments} {isAr ? 'تعليق' : 'commentaires'}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    style={{ border: 'none', background: 'none', color: 'var(--assoc-emerald)', fontWeight: 700, cursor: 'pointer', fontSize: '13px' }}
                  >
                    {isAr ? 'إغلاق' : 'Fermer'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL DE STORY (VISIONNEUSE IMMERSIVE) */}
      {showStoryModal && (
        <div className="assoc-modal-backdrop" onClick={() => setShowStoryModal(null)}>
          <div
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              borderRadius: '24px',
              maxWidth: '460px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'var(--assoc-shadow-lg)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ligne de progression story */}
            <div style={{ height: '3px', width: '100%', background: 'rgba(255, 255, 255, 0.2)' }}>
              <div style={{ height: '100%', width: '100%', background: 'linear-gradient(90deg, var(--assoc-emerald) 0%, #10b981 100%)' }} />
            </div>

            {/* En-tête de la story */}
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', padding: '2px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <img src={assocCraLogo} alt="CRA" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <strong style={{ fontSize: '13px', display: 'block', color: '#f8fafc' }}>
                    {isAr ? 'الهلال الأحمر الجزائري' : 'Croissant Rouge Algérien'}
                  </strong>
                  <small style={{ fontSize: '11px', color: '#94a3b8' }}>
                    {isAr ? 'محطة بارزة · ' : 'Temps fort · '}{showStoryModal.badge || (isAr ? 'أرشيف رسمي' : 'Archive officielle')}
                  </small>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowStoryModal(null)}
                style={{ border: 'none', background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                title={isAr ? 'إغلاق' : 'Fermer'}
              >
                <IconX className="w-4 h-4" />
              </button>
            </div>

            {/* Grande photo de la story */}
            <div style={{ height: '340px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#020617' }}>
              <img
                src={showStoryModal.img}
                alt={showStoryModal.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '12px', left: isAr ? 'auto' : '16px', right: isAr ? '16px' : 'auto' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '20px', background: 'rgba(0, 109, 91, 0.85)', backdropFilter: 'blur(4px)', color: '#ffffff' }}>
                  {showStoryModal.badge}
                </span>
              </div>
            </div>

            {/* Légende & Actions */}
            <div style={{ padding: '20px 24px 24px', textAlign: isAr ? 'right' : 'left' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 6px', color: '#f8fafc' }}>
                {showStoryModal.label}
              </h3>
              <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6, margin: '0 0 18px' }}>
                {showStoryModal.desc || (isAr ? `تابع أبرز محطات نشاطنا في مجال « ${showStoryModal.label} ».` : `Revivez les temps forts de notre action dans le domaine « ${showStoryModal.label} ».`)}
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowStoryModal(null)}
                  className="assoc-btn-new-post"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  {isAr ? 'إغلاق القصة' : 'Fermer la story'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
