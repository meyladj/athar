import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';
import heroBgImg from '../assets/athar-hero.png';
import panoramicImg from '../assets/algeria-panoramic.jpg';
import algiersCardCrop from '../assets/algiers-card-crop.png';
import feedCraImg from '../assets/feed-cra-distribution.png';
import bloodHeroDoctor from '../assets/blood-hero-doctor.png';
import missionPlantationForet from '../assets/mission-reboisement-foret.png';
import candLectureImg from '../assets/candidature-lecture.png';
import candSangImg from '../assets/candidature-sang.png';
import candAvatar1 from '../assets/cand-avatar-1.png';
import candAvatar2 from '../assets/cand-avatar-2.png';
import candAvatar3 from '../assets/cand-avatar-3.png';
import candAvatar6 from '../assets/cand-avatar-6.png';

function IconUser({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function IconHeart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );
}

function IconChevronLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function IconChevronRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

function IconBookOpen({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
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

function IconMedicalCross({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 8h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/>
    </svg>
  );
}

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
    { code: 'en', label: 'English', badge: 'EN' },
    { code: 'ber', label: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', badge: 'BER' }
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
    titleAr: "غرس الأشجار وإعادة التشجير في زرالدة",
    association_name: "Association Green Future",
    associationNameAr: "جمعية المستقبل الأخضر",
    category: "Environnement",
    categoryAr: "بيئة",
    location: "Zéralda, Alger",
    locationAr: "زرالدة، الجزائر",
    wilaya: "Alger",
    date_str: "Sam. 12 avr. 2025",
    dateStrAr: "السبت 12 أفريل 2025",
    spots_remaining: 15,
    image_url: missionPlantationForet,
    description: "Participez à notre grande action de reboisement dans la forêt récréative de Zéralda. Ensemble, contribuons à restaurer la canopée méditerranéenne et à sensibiliser les familles à la biodiversité locale.",
    descriptionAr: "شارك في حملتنا الكبرى لإعادة التشجير في غابة زرالدة الترفيهية. نساهم معاً في ترميم الغطاء النباتي المتوسطي والتوعية بحماية التنوع البيولوجي."
  },
  {
    id: 2,
    title: "Campagne de distribution de colis alimentaires solidaires",
    titleAr: "حملة توزيع الطرود والقفف الغذائية التضامنية",
    association_name: "Croissant Rouge Algérien",
    associationNameAr: "الهلال الأحمر الجزائري",
    category: "Solidarité",
    categoryAr: "تضامن",
    location: "Bab Ezzouar, Alger",
    locationAr: "باب الزوار، الجزائر",
    wilaya: "Alger",
    date_str: "Sam. 19 avr. 2025",
    dateStrAr: "السبت 19 أفريل 2025",
    spots_remaining: 20,
    image_url: feedCraImg,
    description: "Tri, conditionnement méticuleux et acheminement de colis alimentaires solidaires destinés à 300 familles nécessiteuses recensées. Une action humanitaire directe au service des personnes les plus vulnérables.",
    descriptionAr: "فرز وتوضيب ونقل الطرود الغذائية التضامنية الموجهة لـ 300 عائلة معوزة مسجلة. عمل إنساني مباشر في خدمة الفئات الأكثر احتياجاً."
  },
  {
    id: 3,
    title: "Ateliers de lecture et éveil artistique pour enfants",
    titleAr: "ورشات القراءة والتنشيط الفني للأطفال",
    association_name: "Lire pour Demain",
    associationNameAr: "اقرأ للغد",
    category: "Éducation",
    categoryAr: "تعليم",
    location: "Hydra, Alger",
    locationAr: "حيدرة، الجزائر",
    wilaya: "Alger",
    date_str: "Mer. 16 avr. 2025",
    dateStrAr: "الأربعاء 16 أفريل 2025",
    spots_remaining: 8,
    image_url: candLectureImg,
    description: "Animation de contes bilingues, jeux de rôles créatifs et éveil au plaisir de lire pour un groupe de 25 enfants de 6 à 11 ans au centre culturel communautaire.",
    descriptionAr: "تنشيط حكايات وقصص ثنائية اللغة، وألعاب أدوار إبداعية وغرس حب المطالعة لدى مجموعة من 25 طفلاً تتراوح أعمارهم بين 6 و11 سنة بالمركز الثقافي."
  }
];

const ARABIC_MISSION_OVERRIDES = {
  1: {
    title: "غرس الأشجار وإعادة التشجير في زرالدة",
    association_name: "جمعية المستقبل الأخضر",
    category: "البيئة والتشجير",
    location: "زرالدة، الجزائر",
    date_str: "السبت 12 أفريل 2025",
    description: "شارك في حملتنا الكبرى لإعادة التشجير في غابة زرالدة الترفيهية. نساهم معاً في ترميم الغطاء النباتي المتوسطي والتوعية بحماية التنوع البيولوجي."
  },
  2: {
    title: "حملة توزيع الطرود والقفف الغذائية التضامنية",
    association_name: "الهلال الأحمر الجزائري",
    category: "التضامن والإغاثة",
    location: "باب الزوار، الجزائر",
    date_str: "السبت 19 أفريل 2025",
    description: "فرز وتوضيب ونقل الطرود الغذائية التضامنية الموجهة لـ 300 عائلة معوزة مسجلة. عمل إنساني مباشر في خدمة الفئات الأكثر احتياجاً."
  },
  3: {
    title: "ورشات القراءة والتنشيط الفني للأطفال",
    association_name: "اقرأ للغد",
    category: "التعليم والتكوين",
    location: "حيدرة، الجزائر",
    date_str: "الأربعاء 16 أفريل 2025",
    description: "تنشيط حكايات وقصص ثنائية اللغة، وألعاب أدوار إبداعية وغرس حب المطالعة لدى مجموعة من 25 طفلاً تتراوح أعمارهم بين 6 و11 سنة بالمركز الثقافي."
  },
  4: {
    title: "تنظيف الشواطئ وحماية الساحل",
    association_name: "جمعية البركة",
    category: "البيئة والتشجير",
    location: "عين طاية، الجزائر",
    date_str: "الجمعة 2 ماي 2025",
    description: "مبادرة بيئية ومواطنية لجمع النفايات وتنظيف الشريط الساحلي للحفاظ على النظام البيئي البحري."
  },
  5: {
    title: "حملة التبرع بالدم للمستشفيات",
    association_name: "المستشفى الجامعي مصطفى باشا",
    category: "الصحة والتبرع بالدم",
    location: "الجزائر العاصمة",
    date_str: "الخميس 8 ماي 2025",
    description: "دعم لوجستي واستقبال المتبرعين بالدم في مركز حقن الدم بالمستشفى الجامعي لتأمين الاحتياطي الطبي لإنقاذ الأرواح."
  },
  6: {
    title: "حماية وتهيئة المسار الأثري بتيبازة",
    association_name: "جمعية شباب وتراث",
    category: "التراث والثقافة",
    location: "تيبازة",
    date_str: "السبت 10 ماي 2025",
    description: "يوم تطوعي لتهيئة وتنظيف مسالك الحظيرة الأثرية الرومانية بتيبازة، المصنفة ضمن التراث العالمي لليونسكو."
  }
};

const AMAZIGH_MISSION_OVERRIDES = {
  1: {
    title: "ⴰⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ ⴷ ⵓⵙⴻⴳⴳⴻⵎ ⵏ ⵜⵥⴻⴳⵡⴰ ⴷⴻⴳ ⵣⵉⵔⴰⵍⴷⴰ",
    association_name: "ⵜⴰⴷⴷⵓⴽⵍⴰ ⵉⵎⴰⵍ ⴰⵣⴻⴳⵣⴰⵡ",
    category: "ⵜⴰⵡⴻⵏⵏⴰⴹⵜ ⴷ ⵓⵥⵥⵓ",
    location: "ⵣⵉⵔⴰⵍⴷⴰ, ⴷⵣⴰⵢⴻⵔ",
    date_str: "ⵙⴻⴱⵜ 12 ⵢⴻⴱⵔⵉⵔ 2025",
    description: "ⵜⵜⴻⴽⴽⵉ ⴷⴻⴳ ⵜⵉⴳⴰⵡⵜ ⵜⴰⵎⴻⵇⵇⵔⴰⵏⵜ ⵏ ⵓⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ ⴷⴻⴳ ⵜⵥⴻⴳⵡⴰ ⵏ ⵣⵉⵔⴰⵍⴷⴰ. ⴰⴷⴷⴰⴷ ⵢⵉⴷ-ⵏⵖ ⵉ ⵓⵃⵔⴰⵣ ⵏ ⵓⴳⴰⵎⴰ."
  },
  2: {
    title: "ⴰⴱⵟⵟⵓ ⵏ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⵏ ⵡⵓⵜⵛⵉ ⵉ ⵜⵡⴰⵛⵓⵍⵉⵏ",
    association_name: "ⴰⵢⵢⵓⵔ ⴰⵣⴻⴳⴳⵯⴰⵖ ⴰⴷⵣⴰⵢⵔⵉ",
    category: "ⵜⴰⵡⵉⵣⴰ ⴷ ⵓⵎⵢⴰⵡⴰⵙ",
    location: "ⴱⴰⴱ ⵣⵡⴰⵕ, ⴷⵣⴰⵢⴻⵔ",
    date_str: "ⵙⴻⴱⵜ 19 ⵢⴻⴱⵔⵉⵔ 2025",
    description: "ⴰⴼⵔⴰⵏ, ⴰⵙⵓⴷⴷⴻⵙ ⴷ ⵓⵚⵉⵡⴻⴹ ⵏ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⵏ ⵡⵓⵜⵛⵉ ⵉ 300 ⵏ ⵜⵡⴰⵛⵓⵍⵉⵏ ⵢⴻⵃⵡⴰⵊⴻⵏ. ⵜⴰⵡⵉⵣⴰ ⵜⴰⵏⴼⵓⴳⴰⵏⵜ ⴷⴻⴳ ⵓⵏⵏⴰⵔ."
  },
  3: {
    title: "ⵜⵉⴷⵉⵡⴰⵏⵉⵏ ⵏ ⵜⵖⵓⵔⵉ ⴷ ⵓⵥⴰⵡⴰⵏ ⵉ ⵢⵉⴳⴻⵔⴷⴰⵏ",
    association_name: "ⵖⴻⵔ ⵉ ⵢⵉⵎⴰⵍ",
    category: "ⴰⵙⴻⵍⵎⴻⴷ ⴷ ⵓⵙⵉⵍⴻⵖ",
    location: "ⵃⵉⴷⵔⴰ, ⴷⵣⴰⵢⴻⵔ",
    date_str: "ⴰⵔⴱⵄⴰ 16 ⵢⴻⴱⵔⵉⵔ 2025",
    description: "ⴰⵙⵓⴷⴷⴻⵙ ⵏ ⵜⵎⴰⵛⴰⵀⵉⵏ, ⵓⵔⴰⵔⴻⵏ ⵉⵏⵓⵍⴼⴰⵏⴻⵏ ⴷ ⵓⵃⴻⵎⵎⴻⵍ ⵏ ⵜⵖⵓⵔⵉ ⵉ 25 ⵏ ⵢⵉⴳⴻⵔⴷⴰⵏ ⴷⴻⴳ ⵡⴰⵎⵎⴰⵙ ⴰⴷⴻⵍⵙⴰⵏ."
  },
  4: {
    title: "ⴰⵙⵉⵣⴷⴻⴳ ⵏ ⵢⵉⴼⵜⵉⵙⴻⵏ ⴷ ⵓⵃⵔⴰⵣ ⵏ ⵓⴼⵜⴰⵙ",
    association_name: "ⵜⴰⴷⴷⵓⴽⵍⴰ ⵍⴱⴰⵔⴰⴽⴰ",
    category: "ⵜⴰⵡⴻⵏⵏⴰⴹⵜ ⴷ ⵓⵥⵥⵓ",
    location: "ⵄⵉⵏ ⵟⴰⵢⴰ, ⴷⵣⴰⵢⴻⵔ",
    date_str: "ⵍⵊⴻⵎⵄⴰ 2 ⵎⴰⵢⵢⵓ 2025",
    description: "ⵜⴰⵙⵏⵜⴰⵢⵜ ⵏ ⵜⵡⴻⵏⵏⴰⴹⵜ ⵉ ⵓⵍَقّاط ⵏ ⵡⵉⵔⵔⴰⵏ ⴷ ⵓⵙⵉⵣⴷⴻⴳ ⵏ ⵓⴼⵜⴰⵙ ⵉ ⵓⵃⵔⴰⵣ ⵏ ⵢⵉⵍⴻⵍ."
  },
  5: {
    title: "ⴰⴼⴽⴰⵢ ⵏ ⵢⵉⴷⴰⵎⵎⴻⵏ ⵉ ⵢⵉⵙⴻⴳⵏⴰⴼ",
    association_name: "ⴰⵙⴻⴳⵏⴰⴼ ⴰⵙⴷⴰⵡⴰⵏ ⵎⵓⵙⵟⴰⴼⴰ ⴱⴰⵛⴰ",
    category: "ⵜⴰⴷⴰⵡⵙⴰ ⴷ ⵓⵙⴻⵍⵍⴻⴽ",
    location: "ⴷⵣⴰⵢⴻⵔ ⵜⴰⵎⴰⵏⴰⵖⵜ",
    date_str: "ⵍⵅⴻⵎⵉⵙ 8 ⵎⴰⵢⵢⵓ 2025",
    description: "ⴰⴷⵀⴰⵍ ⴷ ⵓⵙⵏⵓⴱⴳ ⵏ ⵢⵉⵎⴻⴼⴽⴰⵢⴻⵏ ⵏ ⵢⵉⴷⴰⵎⵎⴻⵏ ⴷⴻⴳ ⵡⴰⵎⵎⴰⵙ ⵏ ⵓⵙⴻⴳⵏⴰⴼ ⵉ ⵓⵙⴻⵍⵍⴻⴽ ⵏ ⵜⵓⴷⴻⵔⵜ."
  },
  6: {
    title: "ⴰⵙⴻⴳⴳⴻⵎ ⴷ ⵓⵃⵔⴰⵣ ⵏ ⵓⴱⵔⵉⴷ ⴰⵎⴻⵣⵔⵓⵢ ⴳ ⵜⵉⴱⴰⵣⴰ",
    association_name: "ⵜⴰⴷⴷⵓⴽⵍⴰ ⵉⵍⵎⴻⵣⵢⵉⵏ ⴷ ⵢⵉⴷⵍⴻⵙ",
    category: "ⴰⵢⴷⴰ ⴷ ⵢⵉⴷⵍⴻⵙ",
    location: "ⵜⵉⴱⴰⵣⴰ",
    date_str: "ⵙⴻⴱⵜ 10 ⵎⴰⵢⵢⵓ 2025",
    description: "ⴰⵙⵙ ⵏ ⵜⵡⵉⵣⴰ ⵉ ⵓⵙⵉⵣⴷⴻⴳ ⴷ ⵓⵙⴻⴳⴳⴻⵎ ⵏ ⵡⴰⵏⵙⴰⵜⴻⵏ ⵉⵇⴱⵓⵔⴻⵏ ⴳ ⵜⵉⴱⴰⵣⴰ, ⴰⵢⴷⴰ ⴰⵎⴰⴹⵍⴰⵏ ⵏ ⵢⵓⵏⴻⵙⴽⵓ."
  }
};

function getMissionField(m, field, lang) {
  if (lang === 'ber') {
    const override = AMAZIGH_MISSION_OVERRIDES[m.id];
    if (field === 'title') {
      if (override?.title) return override.title;
      const t = m.title || '';
      if (t.includes('arbre') || t.includes('Plantation')) return "ⴰⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ ⴷ ⵓⵙⴻⴳⴳⴻⵎ ⵏ ⵜⵥⴻⴳⵡⴰ ⴷⴻⴳ ⵣⵉⵔⴰⵍⴷⴰ";
      if (t.includes('colis') || t.includes('alimentaire')) return "ⴰⴱⵟⵟⵓ ⵏ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⵏ ⵡⵓⵜⵛⵉ ⵉ ⵜⵡⴰⵛⵓⵍⵉⵏ";
      if (t.includes('lecture')) return "ⵜⵉⴷⵉⵡⴰⵏⵉⵏ ⵏ ⵜⵖⵓⵔⵉ ⴷ ⵓⵥⴰⵡⴰⵏ ⵉ ⵢⵉⴳⴻⵔⴷⴰⵏ";
      if (t.includes('plage')) return "ⴰⵙⵉⵣⴷⴻⴳ ⵏ ⵢⵉⴼⵜⵉⵙⴻⵏ ⴷ ⵓⵃⵔⴰⵣ ⵏ ⵓⴼⵜⴰⵙ";
      if (t.includes('sang')) return "ⴰⴼⴽⴰⵢ ⵏ ⵢⵉⴷⴰⵎⵎⴻⵏ ⵉ ⵢⵉⵙⴻⴳⵏⴰⴼ";
      if (t.includes('Tipaza')) return "ⴰⵙⴻⴳⴳⴻⵎ ⴷ ⵓⵃⵔⴰⵣ ⵏ ⵓⴱⵔⵉⴷ ⴰⵎⴻⵣⵔⵓⵢ ⴳ ⵜⵉⴱⴰⵣⴰ";
    }
    if (field === 'association') {
      if (override?.association_name) return override.association_name;
      const a = m.association_name || '';
      if (a.includes('Green Future')) return "ⵜⴰⴷⴷⵓⴽⵍⴰ ⵉⵎⴰⵍ ⴰⵣⴻⴳⵣⴰⵡ";
      if (a.includes('Croissant Rouge')) return "ⴰⵢⵢⵓⵔ ⴰⵣⴻⴳⴳⵯⴰⵖ ⴰⴷⵣⴰⵢⵔⵉ";
      if (a.includes('Lire pour Demain')) return "ⵖⴻⵔ ⵉ ⵢⵉⵎⴰⵍ";
      if (a.includes('Baraka')) return "ⵜⴰⴷⴷⵓⴽⵍⴰ ⵍⴱⴰⵔⴰⴽⴰ";
      if (a.includes('CHU') || a.includes('Mustapha')) return "ⴰⵙⴻⴳⵏⴰⴼ ⴰⵙⴷⴰⵡⴰⵏ ⵎⵓⵙⵟⴰⴼⴰ ⴱⴰⵛⴰ";
      if (a.includes('Patrimoine') || a.includes('Jeunesse')) return "ⵜⴰⴷⴷⵓⴽⵍⴰ ⵉⵍⵎⴻⵣⵢⵉⵏ ⴷ ⵢⵉⴷⵍⴻⵙ";
    }
    if (field === 'category') {
      if (override?.category) return override.category;
      const c = (m.category || '').toLowerCase();
      if (c.includes('climat') || c.includes('env')) return "ⵜⴰⵡⴻⵏⵏⴰⴹⵜ ⴷ ⵓⵥⵥⵓ";
      if (c.includes('solid')) return "ⵜⴰⵡⵉⵣⴰ ⴷ ⵓⵎⵢⴰⵡⴰⵙ";
      if (c.includes('éduc') || c.includes('educ')) return "ⴰⵙⴻⵍⵎⴻⴷ ⴷ ⵓⵙⵉⵍⴻⵖ";
      if (c.includes('sant')) return "ⵜⴰⴷⴰⵡⵙⴰ ⴷ ⵓⵙⴻⵍⵍⴻⴽ";
      if (c.includes('urg')) return "ⵜⴰⵍⵍⴰⵍⵜ ⵜⵓⵣⵔⵉⴱⵜ";
      if (c.includes('patri')) return "ⴰⵢⴷⴰ ⴷ ⵢⵉⴷⵍⴻⵙ";
    }
    if (field === 'location') {
      if (override?.location) return override.location;
      const l = m.location || '';
      if (l.includes('Zéralda') || l.includes('Zeralda')) return "ⵣⵉⵔⴰⵍⴷⴰ, ⴷⵣⴰⵢⴻⵔ";
      if (l.includes('Bab Ezzouar')) return "ⴱⴰⴱ ⵣⵡⴰⵕ, ⴷⵣⴰⵢⴻⵔ";
      if (l.includes('Hydra')) return "ⵃⵉⴷⵔⴰ, ⴷⵣⴰⵢⴻⵔ";
      if (l.includes('Aïn Taya') || l.includes('Ain Taya')) return "ⵄⵉⵏ ⵟⴰⵢⴰ, ⴷⵣⴰⵢⴻⵔ";
      if (l.includes('Tipaza')) return "ⵜⵉⴱⴰⵣⴰ";
      if (l.includes('Alger')) return "ⴷⵣⴰⵢⴻⵔ ⵜⴰⵎⴰⵏⴰⵖⵜ";
    }
    if (field === 'date') {
      if (override?.date_str) return override.date_str;
      const d = m.date_str || '';
      if (d.includes('12 avr')) return "ⵙⴻⴱⵜ 12 ⵢⴻⴱⵔⵉⵔ 2025";
      if (d.includes('19 avr')) return "ⵙⴻⴱⵜ 19 ⵢⴻⴱⵔⵉⵔ 2025";
      if (d.includes('16 avr')) return "ⴰⵔⴱⵄⴰ 16 ⵢⴻⴱⵔⵉⵔ 2025";
      if (d.includes('2 mai')) return "ⵍⵊⴻⵎⵄⴰ 2 ⵎⴰⵢⵢⵓ 2025";
      if (d.includes('8 mai')) return "ⵍⵅⴻⵎⵉⵙ 8 ⵎⴰⵢⵢⵓ 2025";
      if (d.includes('10 mai')) return "ⵙⴻⴱⵜ 10 ⵎⴰⵢⵢⵓ 2025";
    }
    if (field === 'description') {
      if (override?.description) return override.description;
    }
  }
  if (lang === 'ar') {
    const override = ARABIC_MISSION_OVERRIDES[m.id];
    if (field === 'title') {
      if (m.titleAr) return m.titleAr;
      if (override?.title) return override.title;
      const t = m.title || '';
      if (t.includes('arbre') || t.includes('Plantation')) return "غرس الأشجار وإعادة التشجير في زرالدة";
      if (t.includes('colis') || t.includes('alimentaire')) return "حملة توزيع الطرود والقفف الغذائية التضامنية";
      if (t.includes('lecture')) return "ورشات القراءة والتنشيط الفني للأطفال";
      if (t.includes('plage')) return "تنظيف الشواطئ وحماية الساحل";
      if (t.includes('sang')) return "حملة التبرع بالدم للمستشفيات";
      if (t.includes('Tipaza')) return "حماية وتهيئة المسار الأثري بتيبازة";
    }
    if (field === 'association') {
      if (m.associationNameAr) return m.associationNameAr;
      if (override?.association_name) return override.association_name;
      const a = m.association_name || '';
      if (a.includes('Green Future')) return "جمعية المستقبل الأخضر";
      if (a.includes('Croissant Rouge')) return "الهلال الأحمر الجزائري";
      if (a.includes('Lire pour Demain')) return "اقرأ للغد";
      if (a.includes('Baraka')) return "جمعية البركة";
      if (a.includes('CHU') || a.includes('Mustapha')) return "المستشفى الجامعي مصطفى باشا";
      if (a.includes('Patrimoine') || a.includes('Jeunesse')) return "جمعية شباب وتراث";
    }
    if (field === 'category') {
      if (m.categoryAr) return m.categoryAr;
      if (override?.category) return override.category;
      const c = (m.category || '').toLowerCase();
      if (c.includes('climat') || c.includes('env')) return "البيئة والتشجير";
      if (c.includes('solid')) return "التضامن والإغاثة";
      if (c.includes('éduc') || c.includes('educ')) return "التعليم والتكوين";
      if (c.includes('sant')) return "الصحة والتبرع بالدم";
      if (c.includes('urg')) return "إغاثة عاجلة";
      if (c.includes('patri')) return "التراث والثقافة";
    }
    if (field === 'location') {
      if (m.locationAr) return m.locationAr;
      if (override?.location) return override.location;
      const l = m.location || '';
      if (l.includes('Zéralda') || l.includes('Zeralda')) return "زرالدة، الجزائر";
      if (l.includes('Bab Ezzouar')) return "باب الزوار، الجزائر";
      if (l.includes('Hydra')) return "حيدرة، الجزائر";
      if (l.includes('Aïn Taya') || l.includes('Ain Taya')) return "عين طاية، الجزائر";
      if (l.includes('Tipaza')) return "تيبازة";
      if (l.includes('Alger')) return "الجزائر العاصمة";
    }
    if (field === 'date') {
      if (m.dateStrAr) return m.dateStrAr;
      if (override?.date_str) return override.date_str;
      const d = m.date_str || '';
      if (d.includes('12 avr')) return "السبت 12 أفريل 2025";
      if (d.includes('19 avr')) return "السبت 19 أفريل 2025";
      if (d.includes('16 avr')) return "الأربعاء 16 أفريل 2025";
      if (d.includes('2 mai')) return "الجمعة 2 ماي 2025";
      if (d.includes('8 mai')) return "الخميس 8 ماي 2025";
      if (d.includes('10 mai')) return "السبت 10 ماي 2025";
    }
    if (field === 'description') {
      if (m.descriptionAr) return m.descriptionAr;
      if (override?.description) return override.description;
    }
  }
  if (field === 'title') return m.title;
  if (field === 'association') return m.association_name;
  if (field === 'category') return m.category;
  if (field === 'location') return m.location;
  if (field === 'date') return m.date_str;
  if (field === 'description') return m.description;
  return '';
}

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
    navHome: currentLang === 'ar' ? 'الرئيسية' : currentLang === 'ber' ? 'ⴰⵙⵏⵓⴱⴳ' : currentLang === 'en' ? 'Home' : 'Accueil',
    navMissions: currentLang === 'ar' ? 'المهمات' : currentLang === 'ber' ? 'ⵜⵉⵡⵓⵔⵉⵡⵉⵏ' : currentLang === 'en' ? 'Missions' : 'Missions',
    navAssociations: currentLang === 'ar' ? 'الجمعيات' : currentLang === 'ber' ? 'ⵜⵉⴷⴷⵓⴽⵍⵉⵡⵉⵏ' : currentLang === 'en' ? 'Associations' : 'Associations',
    navAbout: currentLang === 'ar' ? 'من نحن' : currentLang === 'ber' ? 'ⵖⴻⴼ-ⵏⵖ' : currentLang === 'en' ? 'About' : 'À propos',
    navVolunteers: currentLang === 'ar' ? 'المتطوعون' : currentLang === 'ber' ? 'ⵉⵎⵙⴻⴷⵔⵓⵢⴻⵏ' : currentLang === 'en' ? 'Volunteers' : 'Bénévoles',
    navSearch: currentLang === 'ar' ? 'بحث' : currentLang === 'ber' ? 'ⴰⵔⵣⵣⵓ' : currentLang === 'en' ? 'Search' : 'Rechercher',
    navLogin: currentLang === 'ar' ? 'تسجيل الدخول' : currentLang === 'ber' ? 'ⴽⵛⴻⵎ' : currentLang === 'en' ? 'Log in' : 'Connexion',
    navSignup: currentLang === 'ar' ? 'انضم إلينا' : currentLang === 'ber' ? 'ⵊⴻⵔⵔⴻⴷ' : currentLang === 'en' ? 'Join us' : 'Rejoindre',
    statVolunteers: currentLang === 'ar' ? 'متطوع مسجل' : currentLang === 'ber' ? 'ⵉⵎⵙⴻⴷⵔⵓⵢⴻⵏ ⵢⴻⵜⵜⵡⴰⵊⴻⵔⴷⴻⵏ' : currentLang === 'en' ? 'Active volunteers' : 'Bénévoles engagés',
    statAssocs: currentLang === 'ar' ? 'جمعية شريكة' : currentLang === 'ber' ? 'ⵜⵉⴷⴷⵓⴽⵍⵉⵡⵉⵏ ⵜⵉⵎⵛⵉⵔⴽⵉⵏ' : currentLang === 'en' ? 'Partner associations' : 'Associations partenaires',
    statMissions: currentLang === 'ar' ? 'مهمة منجزة' : currentLang === 'ber' ? 'ⵜⵉⵡⵓⵔⵉⵡⵉⵏ ⵢⴻⵜⵜⵡⴰⵙⵙⵓⴼⵖⴻⵏ' : currentLang === 'en' ? 'Missions completed' : 'Missions réalisées',
    statWilayas: currentLang === 'ar' ? 'ولاية مغطاة' : currentLang === 'ber' ? 'ⵜⵉⵡⵉⵍⴰⵢⵉⵏ ⵉⵍⵍⴰⵏ' : currentLang === 'en' ? 'Wilayas covered' : 'Wilayas couvertes',
    causesTitle: currentLang === 'ar' ? 'مجالات العمل التطوعي' : currentLang === 'ber' ? 'ⵜⵉⵎⵙⴰⵍ ⵉ ⵢⴻⵃⵡⴰⵊⴻⵏ ⵜⴰⵡⵉⵣⴰ-ⵏⵡⴻⵏ' : currentLang === 'en' ? 'Volunteer Causes' : 'Des causes variées pour chaque vocation',
    causesSubtitle: currentLang === 'ar' ? 'اختر المجال الذي يتوافق مع مهاراتك وشغفك للمساهمة في الميدان.' : currentLang === 'ber' ? 'ⴰⵢⴻⵏ ⵢⴻⴱⵖⵓⵏ ⵢⵉⵍⵉ ⵡⴰⵢⴻⵏ ⵉⴽ-ⵢⴻⵄⵊⴱⴻⵏ, ⵜⴻⵍⵍⴰ ⵜⵡⵓⵔⵉ ⵉ ⴽⴻⵛⵛ.' : currentLang === 'en' ? 'Choose causes aligned with your passion and make a tangible difference.' : 'Trouvez les actions qui résonnent avec vos convictions et mettez vos compétences à profit.',
    causeSolidarityTitle: currentLang === 'ar' ? 'التضامن والعمل الإنساني' : currentLang === 'ber' ? 'ⵜⴰⵡⵉⵣⴰ ⴷ ⵓⵎⵢⴰⵡⴰⵙ' : currentLang === 'en' ? 'Solidarity & Humanitarian' : 'Solidarité & Humanitaire',
    causeSolidarityDesc: currentLang === 'ar' ? 'قوافل تضامنية، طرود غذائية، ومرافقة العائلات في المناطق المعزولة.' : currentLang === 'ber' ? 'ⴰⵍⵍⴰⵍ ⵏ ⵜⵡⴰⵛⵓⵍⵉⵏ ⵢⴻⵃⵡⴰⵊⴻⵏ, ⴰⵙⵓⴷⴷⴻⵙ ⵏ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⴷ ⵓⴷⵀⴰⵍ.' : currentLang === 'en' ? 'Food drives, winter aid packages and direct support for underserved families.' : 'Distribution de colis de première nécessité, aides hivernales et assistance directe aux familles isolées.',
    causeEducationTitle: currentLang === 'ar' ? 'التعليم ودعم الطفولة' : currentLang === 'ber' ? 'ⴰⵙⴻⵍⵎⴻⴷ ⴷ ⵓⵙⵉⵍⴻⵖ' : currentLang === 'en' ? 'Education & Youth' : 'Éducation & Jeunesse',
    causeEducationDesc: currentLang === 'ar' ? 'دروس دعم، ورشات قراءة، ومرافقة أكاديمية لأطفال المدارس.' : currentLang === 'ber' ? 'ⴰⴹⴼⴰⵔ ⵏ ⵢⵉⴳⴻⵔⴷⴰⵏ, ⴰⵙⵏⵓⵍⴼⵓ ⵏ ⵜⴷⵉⵡⴰⵏⵉⵏ ⴷ ⵓⵍⴷⴰⵢ ⵏ ⵜⵎⵓⵙⵏⵉ.' : currentLang === 'en' ? 'Tutoring, book reading clubs, and digital literacy workshops for children.' : 'Soutien scolaire gratuit, ateliers de lecture et accompagnement méthodologique des jeunes écoliers.',
    causeEnvironmentTitle: currentLang === 'ar' ? 'البيئة والتشجير' : currentLang === 'ber' ? 'ⵜⴰⵡⴻⵏⵏⴰⴹⵜ ⴷ ⵓⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ' : currentLang === 'en' ? 'Environment & Reforestation' : 'Environnement & Climat',
    causeEnvironmentDesc: currentLang === 'ar' ? 'حملات تشجير كبرى، تنظيف الشواطئ والمحميات الطبيعية.' : currentLang === 'ber' ? 'ⴰⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ, ⴰⵙⵉⵣⴷⴻⴳ ⵏ ⵢⵉⴼⵜⵉⵙⴻⵏ ⴷ ⵢⵉⵖⴻⵔⵎⴰⵏ ⴳ ⵍⴻⵣⵣⴰⵢⴻⵔ.' : currentLang === 'en' ? 'Tree planting initiatives, coastal cleanups and environmental awareness.' : 'Reboisement forestier, nettoyage citoyen du littoral et sensibilisation aux éco-gestes durables.',
    causeHealthTitle: currentLang === 'ar' ? 'الصحة والتبرع بالدم' : currentLang === 'ber' ? 'ⵜⴰⴷⴰⵡⵙⴰ ⴷ ⵓⵙⴻⵍⵍⴻⴽ' : currentLang === 'en' ? 'Health & Blood Donation' : 'Santé & Don de Sang',
    causeHealthDesc: currentLang === 'ar' ? 'حملات دورية للتبرع بالدم، دعم المستشفيات، وقوافل طبية متنقلة.' : currentLang === 'ber' ? 'ⴰⵎⵜⵜⴻⴽⴽⵉ ⴷⴻⴳ ⵓⴼⴽⴰⵢ ⵏ ⵢⵉⴷⴰⵎⵎⴻⵏ, ⵉⵙⴰⴼⴰⵔⴻⵏ ⴷ ⵓⵙⴻⵃⴱⵉⴱⴻⵔ ⵖⴻⴼ ⵜⴷⴰⵡⵙⴰ.' : currentLang === 'en' ? 'Blood donation drives, hospital assistance and preventive healthcare days.' : 'Campagnes de don de sang, soutien logistique aux CHU et sensibilisation au dépistage précoce.'
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

  const categoriesList = [
    { key: 'Toutes', labelFr: 'Toutes', labelAr: 'الكل', labelEn: 'All', labelBer: 'ⴰⴽⴽ' },
    { key: 'Environnement', labelFr: 'Environnement', labelAr: 'البيئة والتشجير', labelEn: 'Environment', labelBer: 'ⵜⴰⵡⴻⵏⵏⴰⴹⵜ' },
    { key: 'Solidarité', labelFr: 'Solidarité', labelAr: 'التضامن والإغاثة', labelEn: 'Solidarity', labelBer: 'ⵜⴰⵡⵉⵣⴰ' },
    { key: 'Éducation', labelFr: 'Éducation', labelAr: 'التعليم والتكوين', labelEn: 'Education', labelBer: 'ⴰⵙⴻⵍⵎⴻⴷ' },
    { key: 'Santé', labelFr: 'Santé', labelAr: 'الصحة والتبرع بالدم', labelEn: 'Health', labelBer: 'ⵜⴰⴷⴰⵡⵙⴰ' },
    { key: 'Aide d\'urgence', labelFr: "Aide d'urgence", labelAr: 'إغاثة عاجلة', labelEn: 'Emergency Aid', labelBer: 'ⵜⴰⵍⵍⴰⵍⵜ ⵜⵓⵣⵔⵉⴱⵜ' },
    { key: 'Patrimoine', labelFr: 'Patrimoine', labelAr: 'التراث والثقافة', labelEn: 'Heritage', labelBer: 'ⴰⵢⴷⴰ ⴷ ⵢⵉⴷⵍⴻⵙ' }
  ];

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('Toutes');
  const [isMissionsLoading, setIsMissionsLoading] = useState(false);
  const [selectedMission, setSelectedMission] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Slider des témoignages bénévoles avec photos de différentes wilayas d'Algérie
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      city: currentLang === 'ar' ? 'الجزائر العاصمة' : currentLang === 'ber' ? 'ⴷⵣⴰⵢⴻⵔ ⵜⴰⵎⴰⵏⴰⵖⵜ' : 'Alger',
      photo: algiersCardCrop,
      photoAlt: currentLang === 'ar' ? "خليج الجزائر ومقام الشهيد" : currentLang === 'ber' ? "ⴰⵎⴷⴰ ⵏ ⴷⵣⴰⵢⴻⵔ ⴷ ⵎⴰⵇⴰⵎ ⵛⵛⴰⵀⵉⴷ" : "Baie d'Alger et Maqam Echahid",
      quote: currentLang === 'ar'
        ? "“التطوع مع أثر مكنني من لقاء أشخاص رائعين والمساهمة بقدر استطاعتي في جزائر أكثر تضامناً وترابطاً.”"
        : currentLang === 'ber'
        ? "“ⴰⴷⴷⴰⴷ ⴷ ⵓⵎⵙⴻⴷⵔⵓⵢ ⴳ ⵡⴰⵜⵜⴰⵔ ⵢⴻⴼⴽⴰ-ⵢⵉ ⵜⴰⴳⵏⵉⵜ ⴰⴷ ⵎⵢⴰⵡⴰⴹⴻⵖ ⴷ ⵢⵉⵎⴷⴰⵏⴻⵏ ⵉⵍⴰⵍⵉⵢⴻⵏ ⴷ ⵓⴷⵀⴰⵍ ⴳ ⵍⴻⵣⵣⴰⵢⴻⵔ ⵢⴻⴷⴷⵓⴽⵍⴻⵏ.”"
        : currentLang === 'en'
        ? "“Volunteering with Athar has allowed me to meet incredible people and contribute, at my own scale, to a more united Algeria.”"
        : "“Être bénévole avec Athar m'a permis de rencontrer des personnes incroyables et de contribuer, à mon échelle, à une Algérie plus solidaire.”",
      name: "Nadia M.",
      role: currentLang === 'ar' ? "متطوعة منذ 2023 · الجزائر" : currentLang === 'ber' ? "ⵜⴰⵎⵙⴻⴷⵔⵓⵢⵜ ⵙⴻⴳ 2023 · ⴷⵣⴰⵢⴻⵔ" : currentLang === 'en' ? "Volunteer since 2023 · Algiers" : "Bénévole depuis 2023 · Alger",
      avatar: candAvatar1
    },
    {
      id: 2,
      city: currentLang === 'ar' ? 'البليدة' : currentLang === 'ber' ? 'ⴱⵍⵉⴷⴰ' : 'Blida',
      photo: feedCraImg,
      photoAlt: currentLang === 'ar' ? "توزيع طرود تضامنية مع الهلال الأحمر الجزائري" : currentLang === 'ber' ? "ⴰⴱⵟⵟⵓ ⵏ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⵏ ⵜⵡⵉⵣⴰ ⴷ ⵓⵢⵢⵓⵔ ⴰⵣⴻⴳⴳⵯⴰⵖ" : "Distribution de colis solidaires avec le Croissant-Rouge Algérien",
      quote: currentLang === 'ar'
        ? "“بفضل قوافل التضامن عبر أثر، وزعنا أكثر من 450 طرداً غذائياً للعائلات المعزولة في القرى. عمل ميداني حقيقي وملموس.”"
        : currentLang === 'ber'
        ? "“ⵙ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⵏ ⵜⵡⵉⵣⴰ ⴳ ⵡⴰⵜⵜⴰⵔ, ⵏⴱⴻⵟⵟⵓ ⵓⴳⴰⵔ ⵏ 450 ⵏ ⵜⴽⴰⵔⴰⵡⴰⵏⵉⵏ ⵏ ⵡⵓⵜⵛⵉ ⵉ ⵜⵡⴰⵛⵓⵍⵉⵏ. ⴰⵎⴰⵀⵉⵍ ⴷⴻⴳ ⵓⵏⵏⴰⵔ ⵢⴻⵜⵜⵡⴰⵥⵔⴰⵏ.”"
        : currentLang === 'en'
        ? "“Thanks to solidarity caravans organized through Athar, we distributed over 450 food parcels to isolated families. Real, tangible field impact.”"
        : "“Grâce aux caravanes de solidarité coordonnées via Athar, nous avons distribué plus de 450 colis alimentaires aux familles isolées. Un impact concret et mesurable.”",
      name: "Amine Benali",
      role: currentLang === 'ar' ? "منسق قوافل التضامن · الهلال الأحمر" : currentLang === 'ber' ? "ⴰⵎⵙⴻⵎⵢⵓⴷⴷⴻⵙ ⵏ ⵜⵡⵉⵣⴰ · ⴰⵢⵢⵓⵔ ⴰⵣⴻⴳⴳⵯⴰⵖ" : currentLang === 'en' ? "Solidarity Coordinator · Algerian Red Crescent" : "Coordinateur Solidaire · Croissant-Rouge Algérien",
      avatar: candAvatar2
    },
    {
      id: 3,
      city: currentLang === 'ar' ? 'الجزائر العاصمة' : currentLang === 'ber' ? 'ⴷⵣⴰⵢⴻⵔ ⵜⴰⵎⴰⵏⴰⵖⵜ' : 'Alger',
      photo: bloodHeroDoctor,
      photoAlt: currentLang === 'ar' ? "طبيبة جزائرية في حملة التبرع بالدم بالمستشفى الجامعي" : currentLang === 'ber' ? "ⵜⴰⴹⴱⵉⴱⵜ ⵜⴰⴷⵣⴰⵢⵔⵉⵜ ⴷⴻⴳ ⵜⵉⴳⴰⵡⵜ ⵏ ⵓⴼⴽⴰⵢ ⵏ ⵢⵉⴷⴰⵎⵎⴻⵏ" : "Médecin algérienne lors d'une collecte de sang au CHU",
      quote: currentLang === 'ar'
        ? "“أحدثت منصة أثر فارقاً حقيقياً في تنظيم نداءات التبرع بالدم للمستشفيات الجامعية. يستجيب المتبرعون في دقائق معدودة لإنقاذ الأرواح.”"
        : currentLang === 'ber'
        ? "“ⴰⵜⵜⴰⵔ ⵢⴻⴱⴷⴻⵍ ⵜⵉⵖⴰⵡⵙⵉⵡⵉⵏ ⴷⴻⴳ ⵓⵙⵓⴷⴷⴻⵙ ⵏ ⵜⵎⵓⵍⵉⵡⵉⵏ ⵏ ⵓⴼⴽⴰⵢ ⵏ ⵢⵉⴷⴰⵎⵎⴻⵏ. ⵉⵏⴰⵔⴰⵎⴻⵏ ⵜⵜⴰⵔⵔⴰⵏ-ⴷ ⴷⴻⴳ ⵢⵉⵎⵉⵔⴻⵏ ⵉ ⵓⵙⴻⵍⵍⴻⴽ ⵏ ⵜⵓⴷⴻⵔⵜ.”"
        : currentLang === 'en'
        ? "“Athar transformed how we coordinate urgent hospital blood donation calls. Citizens respond in minutes to save lives.”"
        : "“Athar a révolutionné nos appels urgents de don de sang aux hôpitaux. Les citoyens répondent en quelques minutes pour sauver des vies.”",
      name: "Dr. Selma Khelifi",
      role: currentLang === 'ar' ? "طبيبة ومسؤولة بنك الدم · CHU الجزائر" : currentLang === 'ber' ? "ⵜⴰⴹⴱⵉⴱⵜ ⴷ ⵜⵎⴻⵙⴼⵔⴻⴽⵜ · ⴰⵙⴻⴳⵏⴰⴼ ⴰⵙⴷⴰⵡⴰⵏ ⴷⵣⴰⵢⴻⵔ" : currentLang === 'en' ? "Doctor & Blood Bank Lead · CHU Algiers" : "Médecin & Responsable Don du Sang · CHU Alger",
      avatar: candAvatar6
    },
    {
      id: 4,
      city: currentLang === 'ar' ? 'زرالدة، الجزائر' : currentLang === 'ber' ? 'ⵣⵉⵔⴰⵍⴷⴰ, ⴷⵣⴰⵢⴻⵔ' : 'Zéralda, Alger',
      photo: missionPlantationForet,
      photoAlt: currentLang === 'ar' ? "إعادة تشجير الغابات وحملة تطوع بيئي في الجزائر" : currentLang === 'ber' ? "ⴰⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ ⴷ ⵜⵡⴻⵏⵏⴰⴹⵜ ⴳ ⵍⴻⵣⵣⴰⵢⴻⵔ" : "Reboisement des forêts et action écocitoyenne en Algérie",
      quote: currentLang === 'ar'
        ? "“إعادة تشجير الغابات الوطنية مع أكثر من 120 شاباً متطوعاً بعث فينا فخراً كبيراً بالحفاظ على طبيعة الجزائر وثرواتها البيئية.”"
        : currentLang === 'ber'
        ? "“ⴰⵥⵥⵓ ⵏ ⵢⵉⵙⴻⴽⵍⴰ ⴳ ⵜⵥⴻⴳⵡⴰ ⵏ ⵜⵎⵓⵔⵜ ⵢⵉⴷ ⵏ 120 ⵏ ⵢⵉⵍⵎⴻⵣⵢⵉⵏ ⵢⴻⴼⴽⴰ-ⵢⴰⵖ ⵍⵃⵉⵔⵎⴰ ⴷ ⵜⵎⴻⵖⵔⴰ ⵉ ⵓⵃⵔⴰⵣ ⵏ ⵓⴳⴰⵎⴰ-ⵏⵖ.”"
        : currentLang === 'en'
        ? "“Reforesting national forests with over 120 youth volunteers restored immense pride in protecting our natural heritage.”"
        : "“Replanter les forêts nationales avec plus de 120 jeunes engagés nous a redonné une fierté immense pour notre patrimoine écologique.”",
      name: "Yacine Mansouri",
      role: currentLang === 'ar' ? "متطوع بيئي وتشجير · جمعية المستقبل الأخضر" : currentLang === 'ber' ? "ⴰⵎⵙⴻⴷⵔⵓⵢ ⵏ ⵜⵡⴻⵏⵏⴰⴹⵜ · ⵜⴰⴷⴷⵓⴽⵍⴰ ⵉⵎⴰⵍ ⴰⵣⴻⴳⵣⴰⵡ" : currentLang === 'en' ? "Environmental Volunteer · Green Future" : "Bénévole Reboisement · Green Future",
      avatar: candAvatar3
    }
  ];

  useEffect(() => {
    if (isSliderPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isSliderPaused, testimonials.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryChange = (cat) => {
    if (cat === selectedCategoryFilter) return;
    setIsMissionsLoading(true);
    setSelectedCategoryFilter(cat);
    setTimeout(() => setIsMissionsLoading(false), 320);
  };

  const missionsToDisplay = (missions && missions.length > 0) ? missions : defaultMissions;

  const filteredMissions = missionsToDisplay.filter((m) => {
    if (selectedCategoryFilter === 'Toutes') return true;
    const cat = (m.category || '').toLowerCase();
    const sel = selectedCategoryFilter.toLowerCase();
    if (cat === sel) return true;
    if ((cat === 'climat' || cat === 'environnement') && (sel === 'environnement' || sel === 'climat')) return true;
    return false;
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
                {currentLang === 'ar' ? "المتطوعون" : currentLang === 'ber' ? "ⵉⵎⵙⴻⴷⵔⵓⵢⴻⵏ" : currentLang === 'en' ? "Volunteers" : "Bénévoles"}
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
                className="icon-btn search-btn-desktop"
                title={t('navSearch')}
                onClick={() => showToast(currentLang === 'ar' ? "البحث سيكون متاحاً قريباً!" : currentLang === 'ber' ? "ⴰⵔⵣⵣⵓ ⴰⴷ ⵢⵉⵍⵉ ⵇⵔⵉⴱ !" : "Recherche bientôt disponible !")}
              >
                <IconSearch className="w-4 h-4" />
              </div>

              <button className="btn btn-ghost nav-login-btn" onClick={() => openLogin('volunteer')}>
                {t('navLogin')}
              </button>

              <button className="btn btn-green nav-signup-btn" onClick={() => openSignup('choice')}>
                <span>{t('navSignup')}</span>
                <IconArrowRight className={`w-3.5 h-3.5 inline ${currentLang === 'ar' ? 'mr-1 transform rotate-180' : 'ml-1'}`} />
              </button>

              {/* SÉLECTEUR DE LANGUE DISCRET & ÉLÉGANT */}
              <LanguageDropdown currentLang={currentLang} setCurrentLang={setCurrentLang} />

              {/* BOUTON BURGER POUR SMARTPHONE */}
              <button
                type="button"
                className="mobile-burger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu de navigation"
                aria-expanded={mobileMenuOpen}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  {mobileMenuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      ></div>
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-top">
          <img src={logoImg} alt="Athar" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mobile-nav-links">
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
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
              setMobileMenuOpen(false);
              const el = document.getElementById('missions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('navMissions')}
          </a>
          <a
            href="#causes"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.getElementById('causes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {currentLang === 'ar' ? 'المجالات' : currentLang === 'ber' ? 'ⵉⵃⵔⵉⵛⴻⵏ' : currentLang === 'en' ? 'Causes' : 'Nos Causes'}
          </a>
          <a
            href="#stats-section"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.getElementById('stats-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('navAssociations')}
          </a>
          <a
            href="#temoignages"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.getElementById('temoignages');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {currentLang === 'ar' ? 'آراء المتطوعين' : currentLang === 'ber' ? 'ⵉⵎⵙⴻⴷⵔⵓⵢⴻⵏ' : currentLang === 'en' ? 'Testimonials' : 'Témoignages'}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {currentLang === 'ar' ? 'تواصل معنا' : currentLang === 'ber' ? 'ⵎⵢⴰⵡⴰⴹ' : 'Contact'}
          </a>
        </div>

        <div className="mobile-nav-actions">
          <button
            className="btn btn-ghost"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              openLogin('volunteer');
            }}
          >
            {t('navLogin')}
          </button>
          <button
            className="btn btn-green"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              openSignup('choice');
            }}
          >
            <span>{t('navSignup')}</span>
            <IconArrowRight className={`w-3.5 h-3.5 inline ${currentLang === 'ar' ? 'mr-1 transform rotate-180' : 'ml-1'}`} />
          </button>
        </div>
      </div>

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
                : currentLang === 'ber'
                ? 'ⵜⴰⵡⵉⵣⴰ ⴷⴻⴳ ⵓⵎⴰⵀⵉⵍ ⵏ ⵍⴻⵣⵣⴰⵢⴻⵔ ⵢⴻⴷⴷⵓⴽⵍⴻⵏ'
                : currentLang === 'en'
                ? 'Volunteering in service of a united Algeria'
                : "Le bénévolat au service d'une Algérie solidaire"}
            </div>
            <h1>
              <span className="blue">
                {currentLang === 'ar'
                  ? 'امنح من وقتك.'
                  : currentLang === 'ber'
                  ? 'ⴼⴽ ⵙⴻⴳ ⵡⴰⴽⵓⴷ-ⵉⴽ.'
                  : currentLang === 'en'
                  ? 'Give your time.'
                  : 'Donnez de votre temps.'}
              </span>
              <br />
              <span className="green">
                {currentLang === 'ar'
                  ? 'اصنع فرقاً.'
                  : currentLang === 'ber'
                  ? 'ⵙⵏⵓⵍⴼⵓ-ⴷ ⴰⴷⵔⵉⵣ.'
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
                    : currentLang === 'ber'
                    ? 'ⵙⵏⵓⵍⴼⵓ-ⴷ ⴰⵎⴹⴰⵏ →'
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
                    : currentLang === 'ber'
                    ? 'ⵙⵏⵉⵔⵎ ⵜⵉⵡⵓⵔⵉⵡⵉⵏ'
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
              {currentLang === 'ar' ? (
                <>اختيار أثر يعني مضاعفة<br />الأثر الإيجابي،<br />
                <span className="or">وليس مجرد تقديم مساعدة.</span></>
              ) : currentLang === 'ber' ? (
                <>ⴰⴼⵔⴰⵏ ⵏ ⵡⴰⵜⵜⴰⵔ ⵢⴻⵙⵙⵉⵎⵖⵓⵔ<br />ⴰⴷⵔⵉⵣ ⵏ ⵜⵡⵉⵣⴰ,<br />
                <span className="or">ⵎⴰⵛⵉ ⴽⴰⵏ ⴷ ⵜⴰⵍⵍⴰⵍⵜ.</span></>
              ) : currentLang === 'en' ? (
                <>Choosing Athar means<br />growing the impact,<br />
                <span className="or">not just helping.</span></>
              ) : (
                <>Choisir Athar, c'est faire<br />grandir l'impact,<br />
                <span className="or">pas seulement aider.</span></>
              )}
            </h2>
            <div className="adesc">
              <p>
                {currentLang === 'ar' ? (
                  <>أثر هي المنصة الوطنية التي تربط بين <b>المتطوعين</b> و<b>الهيئات والجمعيات</b> في الجزائر، لمضاعفة الأثر الميداني معاً. نقرب المخلصين في الميدان من القضايا الإنسانية والمجتمعية التي تحتاج إليهم في جميع أنحاء الوطن.</>
                ) : currentLang === 'ber' ? (
                  <>ⴰⵜⵜⴰⵔ ⴷ ⵜⴰⵙⴰⵖⵓⵔⵜ ⵜⴰⵖⴻⵍⵏⴰⵡⵜ ⵉ ⵢⴻⵙⵙⴻⵎⵍⵉⵍⵉⵢⴻⵏ <b>ⵉⵎⵙⴻⴷⵔⵓⵢⴻⵏ</b> ⴷ <b>ⵜⵉⴷⴷⵓⴽⵍⵉⵡⵉⵏ</b> ⴷⴻⴳ ⵍⴻⵣⵣⴰⵢⴻⵔ, ⵉ ⵓⵙⵙⵉⵎⵖⴻⵔ ⵏ ⵓⴷⵔⵉⵣ ⴳ ⵓⵏⵏⴰⵔ. ⵏⴻⵙⵙⴻⵇⵔⴰⴱ ⵉⵎⴷⴰⵏⴻⵏ ⵖⴻⵔ ⵜⵎⴻⵙⵍⴰⵢⵉⵏ ⵉ ⵜⴻⵏ-ⵢⴻⵃⵡⴰⵊⴻⵏ ⴷⴻⴳ 69 ⵏ ⵜⵡⵉⵍⴰⵢⵉⵏ.</>
                ) : (
                  <>Athar est la plateforme qui connecte les <b>bénévoles</b> et les <b>associations</b> en Algérie, pour faire grandir l'impact ensemble. Nous rapprochons les femmes et les hommes de terrain des causes qui ont besoin d'eux, partout dans le pays.</>
                )}
              </p>
              <p className="anote">
                {currentLang === 'ar'
                  ? 'انضم إلى مجتمع نشط وتطوع في مبادرات هادفة بالقرب منك.'
                  : currentLang === 'ber'
                  ? 'ⴷⴷⵓ-ⴷ ⵖⴻⵔ ⵜⵎⴻⵜⵜⵉ ⵏ ⵜⵡⵉⵣⴰ ⴷ ⵜⴻⴷⵔⵓ ⴷⴻⴳ ⵜⵡⵓⵔⵉⵡⵉⵏ ⵇⵔⵉⴱ ⵖⵓⵔ-ⴽ.'
                  : 'Rejoignez une communauté engagée et participez à des missions qui ont du sens, près de chez vous.'}
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

      {/* SECTION COMMENT ÇA MARCHE / ÉTAPES */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="wrap">
          <div className="how-grid-layout">
            {/* Colonne gauche : Présentation & CTA */}
            <div className="how-left-col">
              <div className="how-eyebrow">
                {currentLang === 'ar' ? 'كيف تعمل المنصة؟' : currentLang === 'ber' ? 'ⴰⵎⴻⴽ ⵉ ⵜⴻⴷⴷⵓ ?' : currentLang === 'en' ? 'HOW IT WORKS ?' : 'COMMENT ÇA MARCHE ?'}
              </div>
              <h2 className="how-heading">
                {currentLang === 'ar' ? (
                  <>التطوع مع أثر<br />في خطوات بسيطة</>
                ) : currentLang === 'ber' ? (
                  <>ⵜⴰⵡⵉⵣⴰ ⴷⴻⴳ ⵡⴰⵜⵜⴰⵔ<br />ⵙ ⵢⵉⵙⵓⵔⵉⴼⴻⵏ ⵉⴼⴻⵙⵙⴰⵙⴻⵏ</>
                ) : currentLang === 'en' ? (
                  <>Volunteer with Athar<br />in a few steps</>
                ) : (
                  <>S'engager avec Athar<br />en quelques étapes</>
                )}
              </h2>
              <p className="how-subtext">
                {currentLang === 'ar'
                  ? 'مسار بسيط للانتقال من الرغبة إلى الميدان وصنع الأثر.'
                  : currentLang === 'ber'
                  ? 'ⴰⴱⵔⵉⴷ ⴰⴼⴻⵙⵙⴰⵙ ⵉ ⵓⴽⵛⵓⵎ ⵖⴻⵔ ⵓⵏⵏⴰⵔ ⴷ ⵓⵙⵏⵓⵍⴼⵓ ⵏ ⵓⴷⵔⵉⵣ.'
                  : currentLang === 'en'
                  ? 'A simple path to turn goodwill into real community impact.'
                  : 'Une démarche simple pour passer de l\'envie à l\'action.'}
              </p>
              <button
                type="button"
                className="how-cta-button"
                onClick={() => (openSignup ? openSignup() : openLogin('signup'))}
              >
                <span>{currentLang === 'ar' ? 'إنشاء حساب' : currentLang === 'ber' ? 'ⵙⵏⵓⵍⴼⵓ-ⴷ ⴰⵎⴹⴰⵏ' : currentLang === 'en' ? 'Create an account' : 'Créer un compte'}</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Colonne droite : Les 3 étapes avec cercles et numéros */}
            <div className="how-steps-track">
              {/* Étape 1 */}
              <div className="how-step-card">
                <div className="how-circle-wrapper">
                  <div className="how-circle-node">
                    <IconUser className="w-6 h-6 text-emerald-700" />
                    <div className="how-circle-badge">1</div>
                  </div>
                  <div className="how-step-line"></div>
                </div>
                <h3 className="how-step-title">
                  {currentLang === 'ar' ? 'سجّل حسابك' : currentLang === 'ber' ? 'ⵊⴻⵔⵔⴻⴷ ⴰⵎⴹⴰⵏ-ⵉⴽ' : currentLang === 'en' ? 'Sign up' : 'Inscrivez-vous'}
                </h3>
                <p className="how-step-desc">
                  {currentLang === 'ar' ? 'أنشئ ملفك التطوعي في دقائق معدودة.' : currentLang === 'ber' ? 'ⵙⵏⵓⵍⴼⵓ-ⴷ ⴰⵎⴰⴳⵔⴰⴷ-ⵉⴽ ⴷⴻⴳ ⴽⵔⴰ ⵏ ⵢⵉⵎⵉⵔⴻⵏ.' : currentLang === 'en' ? 'Create your profile in a few minutes.' : 'Créez votre profil en quelques minutes.'}
                </p>
              </div>

              {/* Étape 2 */}
              <div className="how-step-card">
                <div className="how-circle-wrapper">
                  <div className="how-circle-node">
                    <IconSearch className="w-6 h-6 text-emerald-700" />
                    <div className="how-circle-badge">2</div>
                  </div>
                  <div className="how-step-line"></div>
                </div>
                <h3 className="how-step-title">
                  {currentLang === 'ar' ? 'اختر مهمتك' : currentLang === 'ber' ? 'ⴼⵔⴻⵏ ⵜⴰⵡⵓⵔⵉ-ⵉⴽ' : currentLang === 'en' ? 'Find a mission' : 'Trouvez une mission'}
                </h3>
                <p className="how-step-desc">
                  {currentLang === 'ar' ? 'استكشف الفرص المتاحة بالقرب منك.' : currentLang === 'ber' ? 'ⵙⵏⵉⵔⵎ ⵜⵉⴳⵏⴰⵜⵉⵏ ⵉⵍⵍⴰⵏ ⵇⵔⵉⴱ ⵖⵓⵔ-ⴽ.' : currentLang === 'en' ? 'Browse opportunities close to home.' : 'Parcourez les opportunités près de chez vous.'}
                </p>
              </div>

              {/* Étape 3 */}
              <div className="how-step-card">
                <div className="how-circle-wrapper">
                  <div className="how-circle-node">
                    <IconHeart className="w-6 h-6 text-emerald-700" />
                    <div className="how-circle-badge">3</div>
                  </div>
                </div>
                <h3 className="how-step-title">
                  {currentLang === 'ar' ? 'انطلق في الميدان' : currentLang === 'ber' ? 'ⴽⵛⴻⵎ ⵖⴻⵔ ⵓⵏⵏⴰⵔ' : currentLang === 'en' ? 'Take action' : 'Passez à l\'action'}
                </h3>
                <p className="how-step-desc">
                  {currentLang === 'ar' ? 'انضم إلى جمعية واصنع فارقاً حقيقياً.' : currentLang === 'ber' ? 'ⴷⴷⵓ ⴷ ⵜⴰⴷⴷⵓⴽⵍⴰ ⴷ ⵜⴻⵙⵏⵓⵍⴼⵓⴹ ⴰⴷⵔⵉⵣ.' : currentLang === 'en' ? 'Join an association and make a difference.' : 'Rejoignez une association et faites la différence.'}
                </p>
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
              <div className="eyebrow">{currentLang === 'ar' ? 'في الميدان' : currentLang === 'ber' ? 'ⴷⴻⴳ ⵓⵏⵏⴰⵔ' : 'SUR LE TERRAIN'}</div>
              <h2>{currentLang === 'ar' ? 'مبادرات تطوعية قريبة منك' : currentLang === 'ber' ? 'ⵜⵉⵡⵓⵔⵉⵡⵉⵏ ⵏ ⵜⵡⵉⵣⴰ ⵇⵔⵉⴱ ⵖⵓⵔ-ⴽ' : 'Missions engagées près de chez vous'}</h2>
              <p>{currentLang === 'ar' ? 'استكشف مبادرات معتمدة وموثوقة عبر مختلف الولايات والمجالات.' : currentLang === 'ber' ? 'ⵙⵏⵉⵔⵎ ⵜⵉⵡⵓⵔⵉⵡⵉⵏ ⵢⴻⵜⵜⵡⴰⵙⵙⴻⵏ ⴷⴻⴳ 69 ⵏ ⵜⵡⵉⵍⴰⵢⵉⵏ ⵏ ⵜⵎⵓⵔⵜ.' : 'Explorez des missions vérifiées dans différentes wilayas et thématiques.'}</p>
            </div>

            {/* Filtres thématiques alignés à droite */}
            <div className="missions-filter-bar">
              {categoriesList.map((catItem) => (
                <button
                  key={catItem.key}
                  onClick={() => handleCategoryChange(catItem.key)}
                  className={`filter-btn ${selectedCategoryFilter === catItem.key ? 'active' : ''}`}
                >
                  {currentLang === 'ar' ? catItem.labelAr : currentLang === 'ber' ? catItem.labelBer : currentLang === 'en' ? catItem.labelEn : catItem.labelFr}
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
                <p style={{ fontSize: '18px', fontWeight: 600 }}>
                  {currentLang === 'ar' ? 'لم يتم العثور على أي مبادرة في هذا المجال.' : currentLang === 'ber' ? 'ⵓⵍⴰⵛ ⵜⴰⵡⵓⵔⵉ ⵢⴻⵜⵜⵡⴰⴼⴻⵏ ⴷⴻⴳ ⵓⵃⵔⵉⵛ-ⴰ.' : 'Aucune mission trouvée pour cette catégorie.'}
                </p>
              </div>
            ) : (
              filteredMissions.slice(0, 3).map((m) => {
                const titleText = getMissionField(m, 'title', currentLang);
                const assocText = getMissionField(m, 'association', currentLang);
                const catText = getMissionField(m, 'category', currentLang);
                const locText = getMissionField(m, 'location', currentLang);
                const dateText = getMissionField(m, 'date', currentLang);
                const descText = getMissionField(m, 'description', currentLang);

                return (
                  <div key={m.id} className="mission-card">
                    <div>
                      <div className="mission-img-wrap">
                        <img src={m.image_url} alt={titleText} />
                        <span className="mission-tag">{catText}</span>
                      </div>

                      <div className="mission-content">
                        <div className="mission-asso">
                          <IconShieldCheck className="w-4 h-4 shrink-0" />
                          <span>{assocText}</span>
                        </div>

                        <h3 className="mission-title">{titleText}</h3>

                        <p className="mission-desc">{descText}</p>

                        <div className="mission-details">
                          <div className="mission-detail-row">
                            <IconMapPin className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{locText}</span>
                          </div>
                          <div className="mission-detail-row">
                            <IconCalendar className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{dateText}</span>
                          </div>
                          <div className="mission-detail-row spots">
                            <IconUsers className="w-4 h-4 text-slate-500 shrink-0" />
                            <span>{m.spots_remaining} {currentLang === 'ar' ? 'مقاعد متاحة' : currentLang === 'ber' ? 'ⵉⵎⵓⴽⴰⵏ ⵉ ⴷ-ⵢⴻⵇⵇⵉⵎⴻⵏ' : 'places disponibles'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mission-action">
                      <button
                        onClick={() => {
                          setSelectedMission(titleText);
                          openLogin('volunteer');
                        }}
                        className="mission-btn"
                      >
                        <span>{currentLang === 'ar' ? 'المشاركة في هذه المهمة' : currentLang === 'ber' ? 'ⵜⵜⴻⴽⴽⵉ ⴷⴻⴳ ⵜⵡⵓⵔⵉ-ⴰ' : 'Je participe à cette mission'}</span>
                        <IconArrowRight className={`w-4 h-4 ${currentLang === 'ar' ? 'transform rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
              })
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
              <span>{currentLang === 'ar' ? 'عرض المزيد من المبادرات' : currentLang === 'ber' ? 'ⵥⴻⵔ ⵓⴳⴰⵔ ⵏ ⵜⵡⵓⵔⵉⵡⵉⵏ' : 'Voir plus'}</span>
              <IconArrowRight className={`w-4 h-4 ${currentLang === 'ar' ? 'transform rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION NOS CAUSES COMPACTE (exactement comme Capture d'écran 200935) */}
      <section className="causes-compact-section" id="causes">
        <div className="wrap">
          <div className="causes-compact-head">
            <div>
              <div className="causes-eyebrow">
                {currentLang === 'ar' ? 'مجالاتنا' : currentLang === 'ber' ? 'ⵉⵃⵔⵉⵛⴻⵏ-ⵏⵖ' : currentLang === 'en' ? 'OUR CAUSES' : 'NOS CAUSES'}
              </div>
              <h2 className="causes-compact-title">
                {currentLang === 'ar' ? 'مجالات تصنع الفارق وتغير الحياة' : currentLang === 'ber' ? 'ⵉⵃⵔⵉⵛⴻⵏ ⵉ ⵢⴻⵜⵜⴱⴻⴷⴷⵉⵍⴻⵏ ⵜⵓⴷⴻⵔⵜ' : currentLang === 'en' ? 'Fields that change lives' : 'Des domaines qui changent des vies'}
              </h2>
            </div>
            <a
              href="#missions"
              className="causes-see-all-link"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategoryFilter('Toutes');
                const el = document.getElementById('missions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>{currentLang === 'ar' ? 'عرض جميع المجالات' : currentLang === 'ber' ? 'ⵥⴻⵔ ⴰⴽⴽ ⵉⵃⵔⵉⵛⴻⵏ' : currentLang === 'en' ? 'See all causes' : 'Voir toutes les causes'}</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="causes-compact-grid">
            {/* 1. Solidarité */}
            <div
              className="cause-compact-card"
              onClick={() => {
                setSelectedCategoryFilter('Solidarité');
                const el = document.getElementById('missions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src={feedCraImg}
                alt="Solidarité"
                className="cause-compact-bg"
                loading="lazy"
              />
              <div className="cause-compact-overlay"></div>
              <div className="cause-compact-footer">
                <div className="cause-compact-pill">
                  <div className="cause-icon-circle">
                    <IconHeart className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="cause-name-text">
                    {currentLang === 'ar' ? 'التضامن' : currentLang === 'ber' ? 'ⵜⴰⵡⵉⵣⴰ' : currentLang === 'en' ? 'Solidarity' : 'Solidarité'}
                  </span>
                </div>
                <div className="cause-arrow-circle">
                  <IconArrowRight className="w-3.5 h-3.5 text-emerald-800" />
                </div>
              </div>
            </div>

            {/* 2. Éducation */}
            <div
              className="cause-compact-card"
              onClick={() => {
                setSelectedCategoryFilter('Éducation');
                const el = document.getElementById('missions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src={candLectureImg}
                alt="Éducation"
                className="cause-compact-bg"
                loading="lazy"
              />
              <div className="cause-compact-overlay"></div>
              <div className="cause-compact-footer">
                <div className="cause-compact-pill">
                  <div className="cause-icon-circle">
                    <IconBookOpen className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="cause-name-text">
                    {currentLang === 'ar' ? 'التعليم' : currentLang === 'ber' ? 'ⴰⵙⴻⵍⵎⴻⴷ' : currentLang === 'en' ? 'Education' : 'Éducation'}
                  </span>
                </div>
                <div className="cause-arrow-circle">
                  <IconArrowRight className="w-3.5 h-3.5 text-emerald-800" />
                </div>
              </div>
            </div>

            {/* 3. Environnement */}
            <div
              className="cause-compact-card"
              onClick={() => {
                setSelectedCategoryFilter('Environnement');
                const el = document.getElementById('missions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src={missionPlantationForet}
                alt="Environnement"
                className="cause-compact-bg"
                loading="lazy"
              />
              <div className="cause-compact-overlay"></div>
              <div className="cause-compact-footer">
                <div className="cause-compact-pill">
                  <div className="cause-icon-circle">
                    <IconLeaf className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="cause-name-text">
                    {currentLang === 'ar' ? 'البيئة' : currentLang === 'ber' ? 'ⵜⴰⵡⴻⵏⵏⴰⴹⵜ' : currentLang === 'en' ? 'Environment' : 'Environnement'}
                  </span>
                </div>
                <div className="cause-arrow-circle">
                  <IconArrowRight className="w-3.5 h-3.5 text-emerald-800" />
                </div>
              </div>
            </div>

            {/* 4. Santé */}
            <div
              className="cause-compact-card"
              onClick={() => {
                setSelectedCategoryFilter('Santé');
                const el = document.getElementById('missions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src={bloodHeroDoctor}
                alt="Santé"
                className="cause-compact-bg"
                loading="lazy"
              />
              <div className="cause-compact-overlay"></div>
              <div className="cause-compact-footer">
                <div className="cause-compact-pill">
                  <div className="cause-icon-circle">
                    <IconMedicalCross className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="cause-name-text">
                    {currentLang === 'ar' ? 'الصحة' : currentLang === 'ber' ? 'ⵜⴰⴷⴰⵡⵙⴰ' : currentLang === 'en' ? 'Health' : 'Santé'}
                  </span>
                </div>
                <div className="cause-arrow-circle">
                  <IconArrowRight className="w-3.5 h-3.5 text-emerald-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES BÉNÉVOLES AVEC SLIDER D'ALGÉRIE & SANS MARGES */}
      <section className="testimonials-slider-section" id="temoignages">
        <div className="wrap">
          <div
            className="testimonial-banner-card"
            onMouseEnter={() => setIsSliderPaused(true)}
            onMouseLeave={() => setIsSliderPaused(false)}
          >
            {/* Côté gauche : Photo d'Algérie plein bord qui change avec chaque témoignage */}
            <div className="testimonial-panoramic-left">
              <img
                key={activeSlide}
                src={testimonials[activeSlide].photo}
                alt={testimonials[activeSlide].photoAlt}
                className="testimonial-panoramic-img"
                loading="lazy"
              />
              <div className="testimonial-panoramic-fade"></div>
            </div>

            {/* Côté droit : Citation agrandie, profil bénévole et contrôles slider */}
            <div className="testimonial-quote-right">
              <div className="testimonial-top-quote-mark">“</div>
              <blockquote className="testimonial-quote-text" key={activeSlide}>
                {testimonials[activeSlide].quote}
              </blockquote>

              <div className="testimonial-bottom-row">
                {/* Auteur du témoignage */}
                <div className="testimonial-user-profile">
                  <img
                    src={testimonials[activeSlide].avatar}
                    alt={testimonials[activeSlide].name}
                    className="testimonial-user-avatar"
                  />
                  <div>
                    <div className="testimonial-user-name">{testimonials[activeSlide].name}</div>
                    <div className="testimonial-user-role">{testimonials[activeSlide].role}</div>
                  </div>
                </div>

                {/* Contrôles interactifs du slider */}
                <div className="testimonial-nav-controls">
                  {/* Indicateurs / Dots */}
                  <div className="testimonial-dots-group">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`testimonial-dot-btn ${idx === activeSlide ? 'active' : ''}`}
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`Témoignage ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Boutons flèches précédent / suivant */}
                  <div className="testimonial-arrows-group">
                    <button
                      type="button"
                      className="testimonial-arrow-btn"
                      onClick={handlePrevSlide}
                      aria-label="Témoignage précédent"
                    >
                      <IconChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="testimonial-arrow-btn"
                      onClick={handleNextSlide}
                      aria-label="Témoignage suivant"
                    >
                      <IconChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
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
              <h2>{currentLang === 'ar' ? 'تواصل معنا' : currentLang === 'ber' ? 'ⵎⵢⴰⵡⴰⴹ ⵢⵉⴷ-ⵏⵖ' : 'Contactez-nous'}</h2>
              <p className="clead">
                {currentLang === 'ar'
                  ? 'لديك استفسار، فكرة شراكة، أو ترغب في الانضمام إلينا؟ يسعدنا جداً التواصل والتعاون معك.'
                  : currentLang === 'ber'
                  ? 'ⵜⴻⵙⵄⵉⴹ ⴰⵙⵜⴻⵇⵙⵉ, ⵜⴰⵏⴷⵉⵜ ⵏ ⵓⵎⵛⵉⵔⴻⴽ, ⵏⴻⵖ ⵜⴻⴱⵖⵉⴹ ⴰⴷ ⵜⵎⴻⵙⵍⴰⵢⴻⴹ ⵢⵉⴷ-ⵏⵖ ? ⵏⴼⴻⵕⵕⴻⵃ ⵙ ⵓⵎⵢⴰⵡⴰⴹ ⵢⵉⴷ-ⴽ.'
                  : "Une question, une idée de partenariat, ou juste envie de dire bonjour ? Nous serions ravis d'échanger avec vous."}
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
                  <span>{currentLang === 'ar' ? 'الجزائر العاصمة، الجزائر' : currentLang === 'ber' ? 'ⴷⵣⴰⵢⴻⵔ ⵜⴰⵎⴰⵏⴰⵖⵜ, ⴷⵣⴰⵢⴻⵔ' : 'Alger, Algérie'}</span>
                </div>
              </div>

              <div className="creach">{currentLang === 'ar' ? 'تابعونا على المنصات' : currentLang === 'ber' ? 'ⴹⴼⴻⵔ-ⵏⵖ ⴷⴻⴳ ⵢⵉⵥⴻⴹⵡⴰⵏ' : 'Suivez-nous'}</div>
              <div className="csoc">
                <a className="sb" onClick={() => showToast(currentLang === 'ar' ? "شبكات التواصل الاجتماعي لأثر ستكون متاحة قريباً!" : currentLang === 'ber' ? "ⵉⵥⴻⴹⵡⴰⵏ ⵉⵏⵎⴻⵜⵜⵉⵢⴻⵏ ⵏ ⵡⴰⵜⵜⴰⵔ ⴰⴷ ⵉⵍⵉⵏ ⵇⵔⵉⴱ !" : "Réseaux sociaux Athar bientôt en ligne !")}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>
                  </svg>
                </a>
                <a className="sb" onClick={() => showToast(currentLang === 'ar' ? "شبكات التواصل الاجتماعي لأثر ستكون متاحة قريباً!" : currentLang === 'ber' ? "ⵉⵥⴻⴹⵡⴰⵏ ⵉⵏⵎⴻⵜⵜⵉⵢⴻⵏ ⵏ ⵡⴰⵜⵜⴰⵔ ⴰⴷ ⵉⵍⵉⵏ ⵇⵔⵉⴱ !" : "Réseaux sociaux Athar bientôt en ligne !")}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M22 3 11 14M22 3l-7 18-4-7-7-4 18-7Z"/>
                  </svg>
                </a>
                <a className="sb" onClick={() => showToast(currentLang === 'ar' ? "شبكات التواصل الاجتماعي لأثر ستكون متاحة قريباً!" : currentLang === 'ber' ? "ⵉⵥⴻⴹⵡⴰⵏ ⵉⵏⵎⴻⵜⵜⵉⵢⴻⵏ ⵏ ⵡⴰⵜⵜⴰⵔ ⴰⴷ ⵉⵍⵉⵏ ⵇⵔⵉⴱ !" : "Réseaux sociaux Athar bientôt en ligne !")}>
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
                showToast(currentLang === 'ar' ? "تم إرسال رسالتكم بنجاح! سيجيبكم فريقنا في أقرب وقت." : currentLang === 'ber' ? "ⵉⵣⴻⵏ-ⵉⴽ ⵢⴻⵜⵜⵡⴰⵡⵣⴻⵏ ⵙ ⵓⵔⴱⴰⵃ ! ⵜⴰⵔⴱⵉⵄⵜ-ⵏⵖ ⴰⴷ ⴰⴽ-ⴷ-ⵜⴰⵔⵔ." : "Message envoyé avec succès ! Notre équipe vous répondra sous peu.");
                e.target.reset();
              }}
            >
              <label>{currentLang === 'ar' ? 'الاسم الكامل' : currentLang === 'ber' ? 'ⵉⵙⴻⵎ ⴰⴽⵎⴰⵎ' : 'Nom complet'}</label>
              <input type="text" required placeholder={currentLang === 'ar' ? "اسمكم الكريم" : currentLang === 'ber' ? "ⵉⵙⴻⵎ-ⵉⴽ" : "Votre nom"} />

              <label>{currentLang === 'ar' ? 'البريد الإلكتروني' : currentLang === 'ber' ? 'ⵜⴰⵏⵙⴰ ⵏ ⵢⵉⵎⴰⵢⵍ' : 'Email'}</label>
              <input type="email" required placeholder={currentLang === 'ar' ? "example@email.com" : currentLang === 'ber' ? "imayl@amedya.dz" : "vous@exemple.com"} />

              <label>{currentLang === 'ar' ? 'الرسالة' : currentLang === 'ber' ? 'ⵉⵣⴻⵏ' : 'Message'}</label>
              <textarea required placeholder={currentLang === 'ar' ? "كيف يمكننا مساعدتكم والتعاون معكم؟" : currentLang === 'ber' ? "ⴰⵎⴻⴽ ⵉ ⵏⴻⵣⵎⴻⵔ ⴰⴷ ⴽⵡⴻⵏ-ⵏⵄⵉⵡⴻⵏ ?" : "Comment pouvons-nous vous aider ?"}></textarea>

              <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                {currentLang === 'ar' ? 'إرسال الرسالة' : currentLang === 'ber' ? 'ⴰⵣⴻⵏ ⵉⵣⴻⵏ' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 12. MAIN FOOTER */}
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
                {currentLang === 'ar'
                  ? 'المنصة الوطنية الجزائرية المكرسة للعمل التطوعي والتضامن الميداني الفاعل. كل عمل يترك أثراً طيباً.'
                  : currentLang === 'ber'
                  ? 'ⵜⴰⵙⴰⵖⵓⵔⵜ ⵜⴰⵖⴻⵍⵏⴰⵡⵜ ⵜⴰⴷⵣⴰⵢⵔⵉⵜ ⵉ ⵜⵡⵉⵣⴰ ⴷ ⵓⵎⵢⴰⵡⴰⵙ ⴳ ⵓⵏⵏⴰⵔ. ⵢⴰⵍ ⵜⵉⴳⴰⵡⵜ ⵜⴻⵜⵜⴰⵊⵊⴰ ⴰⴷⵔⵉⵣ.'
                  : "Plateforme nationale algérienne dédiée à l'engagement bénévole et à la solidarité active. Chaque action laisse une empreinte."}
              </p>
              <div className="footer-tagline">
                {currentLang === 'ar' ? 'طُوِّر بكل فخر لأجل الجزائر' : currentLang === 'ber' ? 'ⵢⴻⵜⵜⵡⴰⵙⵏⵓⵍⴼⴰ ⵙ ⵍⵃⵉⵔⵎⴰ ⵉ ⵍⴻⵣⵣⴰⵢⴻⵔ' : "Fièrement développé pour l'Algérie"}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="footer-col-title">
                {currentLang === 'ar' ? 'التنقل' : currentLang === 'ber' ? 'ⴰⵙⴻⵏⵢⵉⵔ' : 'Navigation'}
              </h4>
              <ul className="footer-links">
                <li><a href="#accueil">{currentLang === 'ar' ? 'الرئيسية' : currentLang === 'ber' ? 'ⴰⵙⵏⵓⴱⴳ' : 'Accueil'}</a></li>
                <li><a href="#missions">{currentLang === 'ar' ? 'المهمات' : currentLang === 'ber' ? 'ⵜⵉⵡⵓⵔⵉⵡⵉⵏ' : 'Missions'}</a></li>
                <li><a href="#causes">{currentLang === 'ar' ? 'المجالات' : currentLang === 'ber' ? 'ⵉⵃⵔⵉⵛⴻⵏ' : 'Causes'}</a></li>
                <li><a href="#about">{currentLang === 'ar' ? 'من نحن' : currentLang === 'ber' ? 'ⵖⴻⴼ-ⵏⵖ' : 'À propos'}</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="footer-col-title">
                {currentLang === 'ar' ? 'الفضاءات' : currentLang === 'ber' ? 'ⵜⵉⵍⵍⵓⵏⵉⵏ' : 'Espaces'}
              </h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => openLogin('volunteer')}>
                    {currentLang === 'ar' ? 'فضاء المتطوع' : currentLang === 'ber' ? 'ⵜⴰⵍⵍⵓⵏⵜ ⵏ ⵓⵎⵙⴻⴷⵔⵓⵢ' : 'Espace Bénévole'}
                  </button>
                </li>
                <li>
                  <button onClick={() => openLogin('association')}>
                    {currentLang === 'ar' ? 'فضاء الهيئة' : currentLang === 'ber' ? 'ⵜⴰⵍⵍⵓⵏⵜ ⵏ ⵜⴷⴷⵓⴽⵍⴰ' : 'Espace Association'}
                  </button>
                </li>
                <li><a href="#missions">{currentLang === 'ar' ? '69 ولاية' : currentLang === 'ber' ? '69 ⵏ ⵜⵡⵉⵍⴰⵢⵉⵏ' : '69 Wilayas'}</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="footer-col-title">
                {currentLang === 'ar' ? 'الاتصال' : currentLang === 'ber' ? 'ⴰⵎⵢⴰⵡⴰⴹ' : 'Contact'}
              </h4>
              <p className="footer-contact-info">
                {currentLang === 'ar' ? 'الجزائر العاصمة، الجزائر' : currentLang === 'ber' ? 'ⴷⵣⴰⵢⴻⵔ ⵜⴰⵎⴰⵏⴰⵖⵜ, ⴷⵣⴰⵢⴻⵔ' : 'Alger, Algérie'}<br />
                contact@athar.dz
              </p>
              <div className="footer-contact-copy">
                {currentLang === 'ar' ? '© 2025 منصة أثر. جميع الحقوق محفوظة.' : currentLang === 'ber' ? '© 2025 ⵜⴰⵙⴰⵖⵓⵔⵜ ⴰⵜⵜⴰⵔ. ⴰⴽⴽ ⵉⵣⴻⵔⴼⴰⵏ ⵜⵜⵡⴰⵃⴻⵔⵣⴻⵏ.' : '© 2025 Plateforme Athar. Tous droits réservés.'}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              {currentLang === 'ar'
                ? 'أثر – العمل التطوعي في خدمة جزائر متضامنة.'
                : currentLang === 'ber'
                ? 'ⴰⵜⵜⴰⵔ – ⵜⴰⵡⵉⵣⴰ ⴷⴻⴳ ⵓⵎⴰⵀⵉⵍ ⵏ ⵍⴻⵣⵣⴰⵢⴻⵔ ⵢⴻⴷⴷⵓⴽⵍⴻⵏ.'
                : "Athar – Le bénévolat au service d'une Algérie solidaire."}
            </div>
            <div className="footer-cities">
              <span>{currentLang === 'ar' ? 'الجزائر' : currentLang === 'ber' ? 'ⴷⵣⴰⵢⴻⵔ' : 'Alger'}</span>
              <span>•</span>
              <span>{currentLang === 'ar' ? 'وهران' : currentLang === 'ber' ? 'ⵡⴻⵀⵔⴰⵏ' : 'Oran'}</span>
              <span>•</span>
              <span>{currentLang === 'ar' ? 'قسنطينة' : currentLang === 'ber' ? 'ⵇⵙⴻⵏⵟⵉⵏⴰ' : 'Constantine'}</span>
              <span>•</span>
              <span>{currentLang === 'ar' ? '69 ولاية' : currentLang === 'ber' ? '69 ⵏ ⵜⵡⵉⵍⴰⵢⵉⵏ' : '69 Wilayas'}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
