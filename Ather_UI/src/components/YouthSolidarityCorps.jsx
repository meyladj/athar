import React, { useState } from 'react';

// Clean SVG Icons (zero emojis)
function IconFlagDz({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

function IconHandshake({ className = "w-4 h-4", color = "#006D5B" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L13 12" />
      <path d="m18 10 3.3-3.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 6" />
      <path d="m2 14 3.3-3.3a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L6 18" />
      <path d="M10 13 6.7 9.7a1 1 0 0 0-1.4 0L2.7 12.3a1 1 0 0 0 0 1.4l4.3 4.3a1 1 0 0 0 1.4 0l1.6-1.6" />
    </svg>
  );
}

function IconLightbulb({ className = "w-4 h-4", color = "#d97706" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function IconAmbulance({ className = "w-4 h-4", color = "#dc2626" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="15" height="11" rx="2" />
      <path d="M16 8h4l3 3v6h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
      <line x1="8" y1="9" x2="8" y2="13" />
      <line x1="6" y1="11" x2="10" y2="11" />
    </svg>
  );
}

function IconChat({ className = "w-4 h-4", color = "#0284c7" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4", color = "#7c3aed" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function IconTree({ className = "w-4 h-4", color = "#16a34a" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-7" />
      <path d="M7 15h10l-2.5-4h1.5L12 5l-4 6h1.5z" />
    </svg>
  );
}

function IconLandmark({ className = "w-4 h-4", color = "#b45309" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

function IconShield({ className = "w-4 h-4", color = "#006D5B" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconUsers({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconMapPin({ className = "w-3.5 h-3.5", color = "#94a3b8" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconTarget({ className = "w-3.5 h-3.5", color = "#006D5B" }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconHeartFilled({ className = "w-4 h-4", color = "#ef4444" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconTeacher({ className = "w-5 h-5", color = "#0284c7" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconMeal({ className = "w-5 h-5", color = "#16a34a" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function IconCertificate({ className = "w-5 h-5", color = "#b45309" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </svg>
  );
}

function IconCheck({ className = "w-3.5 h-3.5", color = "#16a34a" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconDownload({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconClose({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function renderCompetenceIcon(type) {
  switch (type) {
    case 'citizenship': return <IconFlagDz color="#006D5B" />;
    case 'teamwork': return <IconHandshake color="#006D5B" />;
    case 'initiative': return <IconLightbulb color="#d97706" />;
    case 'emergency': return <IconAmbulance color="#dc2626" />;
    case 'multilingual': return <IconChat color="#0284c7" />;
    case 'digital': return <IconPhone color="#7c3aed" />;
    case 'ecology': return <IconTree color="#16a34a" />;
    case 'culture': return <IconLandmark color="#b45309" />;
    default: return <IconShield color="#006D5B" />;
  }
}

// Les 8 Compétences Clés AtharPass (inspiré de Youthpass)
const ATHARPASS_COMPETENCES = [
  {
    id: 'citizenship',
    name: 'Citoyenneté & Engagement Civique',
    nameAr: 'المواطنة والمشاركة المدنية',
    iconType: 'citizenship',
    level: 95,
    desc: 'Compréhension active des enjeux sociétaux, défense du bien commun et solidarité intergénérationnelle.',
    descAr: 'الفهم العميق للقضايا المجتمعية، الدفاع عن الصالح العام، والتضامن الإنساني بين الأجيال.',
    acquiredThrough: 'Missions caritatives, maraudes hivernales et sensibilisation civique',
    acquiredThroughAr: 'مبادرات خيرية، قوافل شتوية وحملات توعية مدنية'
  },
  {
    id: 'teamwork',
    name: 'Leadership & Coopération d\'Équipe',
    nameAr: 'القيادة والعمل الجماعي',
    iconType: 'teamwork',
    level: 88,
    desc: 'Capacité à fédérer, motiver et coordonner des bénévoles aux profils variés sous pression.',
    descAr: 'القدرة على تحفيز وتنسيق فرق المتطوعين المتنوعة في الميدان بكفاءة وهدوء.',
    acquiredThrough: 'Coordination d\'équipe de 12 bénévoles sur le terrain',
    acquiredThroughAr: 'تنسيق فريق ميداني مكون من 12 متطوعاً'
  },
  {
    id: 'initiative',
    name: 'Sens de l\'Initiative & Gestion de Projet',
    nameAr: 'روح المبادرة وإدارة المشاريع',
    iconType: 'initiative',
    level: 90,
    desc: 'Planification logistique, gestion des délais, anticipation des imprévus et recherche de solutions.',
    descAr: 'التخطيط اللوجستي، إدارة الوقت، توقع الطوارئ، وإيجاد الحلول الميدانية الفعالة.',
    acquiredThrough: 'Organisation d\'une collecte de 400 paniers alimentaires',
    acquiredThroughAr: 'تنظيم حملة لجمع وتوزيع 400 قفة غذائية'
  },
  {
    id: 'emergency',
    name: 'Résilience, Secourisme & Gestion de Crise',
    nameAr: 'الإسعافات الأولية وإدارة الأزمات',
    iconType: 'emergency',
    level: 82,
    desc: 'Sang-froid, maîtrise des gestes de premiers secours et réactivité immédiate face aux urgences.',
    descAr: 'التحكم في النفس، إتقان حركات الإسعاف الأولية، والاستجابة الفورية للحالات الطارئة.',
    acquiredThrough: 'Formation PSC1 avec le Croissant Rouge Algérien',
    acquiredThroughAr: 'دورة تدريبية في الإسعافات الأولية مع الهلال الأحمر الجزائري'
  },
  {
    id: 'multilingual',
    name: 'Communication Multilingue & Écoute Active',
    nameAr: 'التواصل متعدد اللغات والإصغاء',
    iconType: 'multilingual',
    level: 85,
    desc: 'Aisance relationnelle en Arabe (Darija/Fusha), Tamazight, Français et Anglais avec divers publics.',
    descAr: 'سهولة التواصل بالعربية (فصحى ودارجة)، الأمازيغية، الفرنسية والإنجليزية مع مختلف الفئات.',
    acquiredThrough: 'Accueil des familles et médiation interculturelle',
    acquiredThroughAr: 'استقبال العائلات والتوجيه المجتمعي'
  },
  {
    id: 'digital',
    name: 'Compétence Numérique & Tech Citoyenne',
    nameAr: 'المهارات الرقمية والتكنولوجيا المدنية',
    iconType: 'digital',
    level: 92,
    desc: 'Collecte de données de terrain, traçabilité QR code, outils collaboratifs et communication d\'impact.',
    descAr: 'جمع بيانات الميدان، تتبع الأثر عبر رمز الاستجابة السريعة QR، واستخدام الأدوات الرقمية.',
    acquiredThrough: 'Gestion du registre public et géolocalisation des distributions',
    acquiredThroughAr: 'إدارة السجل العام والربط الجغرافي لعمليات التوزيع'
  },
  {
    id: 'ecology',
    name: 'Transition Écologique & Climat',
    nameAr: 'الانتقال البيئي وحماية المناخ',
    iconType: 'ecology',
    level: 78,
    desc: 'Connaissance des techniques de reforestation, gestion des déchets et préservation des écosystèmes.',
    descAr: 'معرفة تقنيات التشجير المستدام، إدارة وتدوير النفايات، والحفاظ على النظم البيئية.',
    acquiredThrough: 'Campagne de reboisement du Barrage Vert à Zéralda',
    acquiredThroughAr: 'حملة تشجير السد الأخضر بزرالدة'
  },
  {
    id: 'culture',
    name: 'Sensibilité Culturelle & Patrimoine',
    nameAr: 'الوعي الثقافي وصون التراث',
    iconType: 'culture',
    level: 80,
    desc: 'Respect et valorisation des savoir-faire artisanaux, de la mémoire collective et du patrimoine national.',
    descAr: 'احترام وتثمين الحرف التقليدية، الذاكرة الجماعية، والتراث الوطني الأصيل.',
    acquiredThrough: 'Chantier de restauration participatif dans la Casbah',
    acquiredThroughAr: 'ورشة ترميم تشاركية في قصبة الجزائر العتيقة'
  }
];

// Exemples de Projets de Solidarité Jeunesse
const INITIAL_SOLIDARITY_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Bibliothèque Nomade des Aurès',
    titleAr: 'المكتبة المتنقلة لجبال الأوراس',
    category: 'Éducation & Culture',
    categoryAr: 'تعليم وثقافة',
    wilaya: 'Batna & Khenchela',
    wilayaAr: 'باتنة وخنشلة',
    leadYouth: 'Yasmine Chaoui (21 ans, Étudiante)',
    leadYouthAr: 'ياسمين شاوي (21 سنة، طالبة جامعية)',
    teamSize: 5,
    teamMembers: ['Yasmine C.', 'Amine B.', 'Rachid M.', 'Selma K.', 'Walid T.'],
    teamMembersAr: ['ياسمين ش.', 'أمين ب.', 'رشيد م.', 'سلمى ك.', 'وليد ت.'],
    mentorAssoc: 'Association Lire pour Demain',
    mentorAssocAr: 'جمعية اقرأ للغد',
    duration: '6 mois',
    durationAr: '6 أشهر',
    budgetGranted: '180 000 DZD',
    budgetGrantedAr: '180 000 د.ج',
    status: 'EN COURS',
    statusAr: 'قيد التنفيذ',
    description: 'Aménagement d\'une camionnette solidaire transportant plus de 800 livres jeunesse et ateliers d\'alphabétisation dans 8 villages isolés du massif des Aurès.',
    descriptionAr: 'تجهيز حافلة صغيرة تضامنية تحمل أكثر من 800 كتاب للأطفال وتنظيم ورشات قراءة في 8 قرى جبلية معزولة بجبال الأوراس.',
    impactTarget: '1 200 enfants initiés à la lecture',
    impactTargetAr: '1 200 طفل مستفيد من ورشات القراءة',
    supportersCount: 234
  },
  {
    id: 'proj-2',
    title: 'Pépinière Participative des Oasis du M\'Zab',
    titleAr: 'مشتلة الواحات التشاركية بوادي ميزاب',
    category: 'Climat & Oasis',
    categoryAr: 'مناخ وواحات',
    wilaya: 'Ghardaïa',
    wilayaAr: 'غرداية',
    leadYouth: 'Ayoub Baba (23 ans, Ingénieur Agronome)',
    leadYouthAr: 'أيوب بابا (23 سنة، مهندس زراعي)',
    teamSize: 6,
    teamMembers: ['Ayoub B.', 'Brahim F.', 'Nadjia S.', 'Karim H.', 'Omar D.', 'Leila T.'],
    teamMembersAr: ['أيوب ب.', 'إبراهيم ف.', 'ناجية س.', 'كريم ح.', 'عمر د.', 'ليلى ت.'],
    mentorAssoc: 'Association Green Future',
    mentorAssocAr: 'جمعية المستقبل الأخضر',
    duration: '12 mois',
    durationAr: '12 شهراً',
    budgetGranted: '250 000 DZD',
    budgetGrantedAr: '250 000 د.ج',
    status: 'EN COURS',
    statusAr: 'قيد التنفيذ',
    description: 'Multiplication et sauvegarde des semences traditionnelles de palmiers dattiers et création d\'un système d\'irrigation goutte-à-goutte économe en eau dans la palmeraie.',
    descriptionAr: 'إكثار وحفظ البذور التقليدية لنخيل التمر وإنشاء نظام سقي بالتقطير موفر للمياه في واحات النخيل.',
    impactTarget: '1 500 rejets de palmiers distribués aux agriculteurs',
    impactTargetAr: '1 500 فسيلة نخيل موزعة على صغار الفلاحين',
    supportersCount: 312
  },
  {
    id: 'proj-3',
    title: 'Coding & Robotique pour Enfants Hospitalisés',
    titleAr: 'تعليم البرمجة والروبوتات للأطفال بالمستشفيات',
    category: 'Santé & Tech',
    categoryAr: 'صحة وتكنولوجيا',
    wilaya: 'Alger (Mustapha Pacha & Bab El Oued)',
    wilayaAr: 'الجزائر (مصطفى باشا وباب الوادي)',
    leadYouth: 'Mehdi Benamara (22 ans, Bénévolat USTHB)',
    leadYouthAr: 'مهدي بن عمارة (22 سنة، متطوع جامعي USTHB)',
    teamSize: 5,
    teamMembers: ['Mehdi B.', 'Sarah M.', 'Farid O.', 'Amina K.', 'Ines L.'],
    teamMembersAr: ['مهدي ب.', 'سارة م.', 'فريد ع.', 'أمينة ك.', 'إيناس ل.'],
    mentorAssoc: 'Club Tech Jeunesse',
    mentorAssocAr: 'نادي تكنولوجيا الشباب',
    duration: '4 mois',
    durationAr: '4 أشهر',
    budgetGranted: '150 000 DZD',
    budgetGrantedAr: '150 000 د.ج',
    status: 'VALIDÉ',
    statusAr: 'معتمد ومؤكد',
    description: 'Ateliers hebdomadaires d\'initiation ludique au code et à la robotique Lego Mindstorms pour les enfants en long séjour au service pédiatrique.',
    descriptionAr: 'ورشات أسبوعية تفاعلية لتعليم مبادئ البرمجة والروبوتيك للأطفال المقيمين لفترات طويلة بأقسام طب الأطفال.',
    impactTarget: '160 jeunes patients initiés et émerveillés',
    impactTargetAr: '160 طفلاً مريضاً مستفيداً من الورشات',
    supportersCount: 189
  }
];

export default function YouthSolidarityCorps({ currentLang = 'fr', volunteerUser = null, onOpenLogin, onToast }) {
  const isAr = currentLang === 'ar';
  const [activeTab, setActiveTab] = useState('tracks'); // 'tracks' | 'atharpass' | 'projects' | 'quality'
  const [projectsList, setProjectsList] = useState(INITIAL_SOLIDARITY_PROJECTS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isAtharPassModalOpen, setIsAtharPassModalOpen] = useState(false);

  // Formulaire nouveau projet de 5 jeunes
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjWilaya, setNewProjWilaya] = useState('Alger');
  const [newProjCategory, setNewProjCategory] = useState(isAr ? 'تعليم وثقافة' : 'Éducation & Culture');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjTarget, setNewProjTarget] = useState('');

  // Soumission projet de solidarité
  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (!newProjTitle.trim() || !newProjDesc.trim()) {
      alert(isAr ? 'يرجى ملء عنوان ووصف المبادرة.' : 'Veuillez renseigner le titre et la description du projet.');
      return;
    }

    const created = {
      id: `proj-${Date.now()}`,
      title: newProjTitle,
      titleAr: newProjTitle,
      category: newProjCategory,
      categoryAr: newProjCategory,
      wilaya: newProjWilaya,
      wilayaAr: newProjWilaya,
      leadYouth: `${volunteerUser?.name || 'Nadia Mansouri'} (Porteuse de projet)`,
      leadYouthAr: `${volunteerUser?.name || 'نادية منصوري'} (حاملة المشروع)`,
      teamSize: 5,
      teamMembers: [volunteerUser?.name || 'Nadia Mansouri', 'Membre 2', 'Membre 3', 'Membre 4', 'Membre 5'],
      teamMembersAr: [volunteerUser?.name || 'نادية منصوري', 'عضو 2', 'عضو 3', 'عضو 4', 'عضو 5'],
      mentorAssoc: isAr ? 'لجنة اعتماد أثر والجمعية الشريكة' : 'Comité de Validation Athar & ONG Partenaire',
      mentorAssocAr: 'لجنة اعتماد أثر والجمعية الشريكة',
      duration: isAr ? '6 أشهر' : '6 mois',
      durationAr: '6 أشهر',
      budgetGranted: isAr ? 'قيد الدراسة' : 'En cours d\'instruction',
      budgetGrantedAr: 'قيد الدراسة',
      status: 'EN REVUE',
      statusAr: 'قيد المراجعة',
      description: newProjDesc,
      descriptionAr: newProjDesc,
      impactTarget: newProjTarget || (isAr ? 'أثر مجتمعي مباشر في الولاية' : 'Impact citoyen direct dans la wilaya'),
      impactTargetAr: newProjTarget || 'أثر مجتمعي مباشر في الولاية',
      supportersCount: 1
    };

    setProjectsList([created, ...projectsList]);
    setIsSubmitModalOpen(false);
    setNewProjTitle('');
    setNewProjDesc('');
    setNewProjTarget('');
    if (onToast) onToast(isAr ? 'تم إيداع مشروع التضامن بنجاح! سيتواصل معكم فريق منصة أثر خلال 48 ساعة.' : 'Votre Projet de Solidarité a été déposé avec succès ! Le comité Athar vous contactera sous 48h.');
  };

  // Soutenir un projet
  const handleSupportProject = (id) => {
    setProjectsList(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, supportersCount: p.supportersCount + 1, userSupported: true };
      }
      return p;
    }));
    if (onToast) onToast(isAr ? 'شكراً جزيلاً! تم تسجيل دعمكم لهذا المشروع الشبابي.' : 'Merci ! Votre soutien a été enregistré pour ce projet jeunesse.');
  };

  return (
    <div className="solidarity-corps-root" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      {/* 1. HERO BANNER */}
      <div className="corps-banner-hero">
        <div className="corps-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <IconFlagDz />
          <span>{isAr ? 'البرنامج الوطني لتمكين الشباب والعمل التضامني (18 – 35 سنة)' : 'PROGRAMME NATIONAL JEUNESSE (18 – 35 ANS)'}</span>
          <span className="corps-eu-badge">{isAr ? 'مستوحى من معايير فيلق التضامن الأوروبي' : 'Inspiré des standards du Corps Européen de Solidarité'}</span>
        </div>

        <h1 className="corps-title-main">
          {isAr
            ? 'الفيلق الوطني للتضامن والعمل التطوعي للشباب الجزائري'
            : 'Le Corps Solidaire National de la Jeunesse Algérienne'}
        </h1>

        <p className="corps-subtitle-lead">
          {isAr
            ? 'منصة وطنية شاملة تمنح الشباب بين 18 و35 عاماً فرصة قيادة مشاريع تضامنية في فرق شبابية، التطوع في الميدان، والحصول على جواز المهارات الرسمي أثر باس (AtharPass).'
            : 'Vous avez entre 18 et 35 ans ? Engagez-vous dans des missions d\'intérêt général, lancez votre propre projet solidaire en équipe de 5 jeunes, et valorisez vos compétences grâce au Passeport AtharPass.'}
        </p>

        {/* 3 ACTIONS CLÉS EN HAUT DE PAGE */}
        <div className="corps-stats-strip">
          <div className="corps-stat-item">
            <span className="stat-val">+14 500</span>
            <span className="stat-desc">{isAr ? 'شاب متطوع (18-35 سنة)' : 'Jeunes engagés (18-35 ans)'}</span>
          </div>
          <div className="corps-stat-item">
            <span className="stat-val">100%</span>
            <span className="stat-desc">{isAr ? 'تأمين وتكفل كامل' : 'Prise en charge & Assurance'}</span>
          </div>
          <div className="corps-stat-item">
            <span className="stat-val">8</span>
            <span className="stat-desc">{isAr ? 'مهارات قيادية معتمدة في AtharPass' : 'Compétences clés certifiées AtharPass'}</span>
          </div>
          <div className="corps-stat-item">
            <span className="stat-val">69</span>
            <span className="stat-desc">{isAr ? 'ولاية مشاركة في الفيلق' : 'Wilayas participantes'}</span>
          </div>
        </div>
      </div>

      {/* 2. ONGLETS PRINCIPAUX DU PROGRAMME */}
      <div className="corps-tabs-bar">
        <button
          className={`corps-tab-btn ${activeTab === 'tracks' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracks')}
        >
          <span>{isAr ? '1. مسارات المشاركة الثلاثة' : '1. Les 3 Voies d\'Engagement'}</span>
        </button>
        <button
          className={`corps-tab-btn ${activeTab === 'atharpass' ? 'active' : ''}`}
          onClick={() => setActiveTab('atharpass')}
        >
          <span>{isAr ? '2. جواز المهارات (AtharPass)' : '2. Passeport de Compétences (AtharPass)'}</span>
          <span className="tab-pill-highlight">{isAr ? 'معتمد رسمياً' : 'Certifiant'}</span>
        </button>
        <button
          className={`corps-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <span>{isAr ? '3. مشاريع الشباب (مبادرة 5 شباب)' : '3. Projets Jeunesse (Initiative de 5 Jeunes)'}</span>
          <span className="tab-pill-count">{projectsList.length}</span>
        </button>
        <button
          className={`corps-tab-btn ${activeTab === 'quality' ? 'active' : ''}`}
          onClick={() => setActiveTab('quality')}
        >
          <span>{isAr ? '4. علامة الجودة وميثاق المتطوع' : '4. Label Qualité & Charte du Bénévole'}</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* ONGLET 1 : LES 3 VOIES DU CORPS DE SOLIDARITÉ           */}
      {/* ======================================================== */}
      {activeTab === 'tracks' && (
        <div className="corps-tab-content">
          <div className="corps-section-head">
            <h2>{isAr ? 'اختر مسار مشاركتك المدنية المناسب لك' : 'Choisissez votre mode d\'engagement civique'}</h2>
            <p>
              {isAr
                ? 'يقدم فيلق التضامن الوطني أثر ثلاثة مسارات مرنة تتناسب مع أوقات فراغك وطموحاتك المجتمعية.'
                : 'Le Corps Solidaire Athar propose trois parcours adaptés à vos disponibilités et à vos ambitions citoyennes.'}
            </p>
          </div>

          <div className="corps-tracks-grid">
            {/* Voie 1 : Volontariat individuel & équipe */}
            <div className="corps-track-card primary">
              <div className="track-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconHandshake color="#006D5B" />
              </div>
              <span className="track-tag">{isAr ? 'المسار 1 · من أسبوعين إلى 12 شهراً' : 'Voie 1 · De 2 semaines à 12 mois'}</span>
              <h3>{isAr ? 'مبادرات التطوع الميداني' : 'Missions de Volontariat Terrain'}</h3>
              <p>
                {isAr
                  ? 'انضم إلى جمعية معتمدة أو مؤسسة عمومية لإنجاز مهمة ذات أثر محلي: دعم مدرسي، التبرع بالدم بالمستشفيات، التشجير أو توزيع القفف الغذائية.'
                  : 'Rejoignez une association agréée ou une institution publique pour une mission à fort impact local : soutien scolaire, don du sang hospitalier, reforestation ou aide alimentaire.'}
              </p>
              <ul className="track-benefits-list">
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'تغطية تأمينية مدنية كاملة' : 'Couverture responsabilité civile complète'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'تكفل كامل بالوجبات والنقل' : 'Repas et transport pris en charge'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'مرافقة وتأطير من موجه خبير' : 'Accompagnement par un tuteur référent'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'تسليم فوري لشهادة AtharPass' : 'Délivrance automatique de l\'AtharPass'}</span>
                </li>
              </ul>
              <button
                className="btn-track-action"
                onClick={() => {
                  const el = document.getElementById('missions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else if (onOpenLogin) onOpenLogin();
                }}
              >
                {isAr ? 'استكشاف الفرص المفتوحة' : 'Explorer les missions ouvertes'}
              </button>
            </div>

            {/* Voie 2 : Projets de Solidarité (Groupe de 5 jeunes) */}
            <div className="corps-track-card highlight">
              <div className="track-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconLightbulb color="#d97706" />
              </div>
              <span className="track-tag gold">{isAr ? 'المسار 2 · مبادرات شبابية من القاعدة' : 'Voie 2 · Initiative Ascendante (Bottom-Up)'}</span>
              <h3>{isAr ? 'مشاريع التضامن الشبابية' : 'Projets de Solidarité Jeunesse'}</h3>
              <p>
                {isAr
                  ? 'هل لديك فكرة تخدم حيك أو ولايتك؟ كوّن فريقاً من 5 شباب (18-35 سنة) وسجّل مشروعك. تمنحك أثر الدعم المالي والتأطيري لتحقيقه!'
                  : 'Vous avez une idée pour votre quartier ou votre wilaya ? Réunissez un groupe de 5 jeunes (18-35 ans) et déposez votre projet. Athar vous accompagne pour le financer et le concrétiser !'}
              </p>
              <ul className="track-benefits-list">
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'مشروع يقوده الشباب 100% لخدمة مجتمعهم' : 'Porté à 100% par les jeunes pour leur communauté'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'رعاية من جمعية أو منظمة معتمدة' : 'Parrainage par une ONG agréée'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'منحة انطلاق مالية تصل إلى 300 000 د.ج' : 'Micro-subvention d\'amorçage jusqu\'à 300 000 DZD'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'متابعة ميدانية وإبراز إعلامي وطني' : 'Suivi d\'impact et visibilité nationale'}</span>
                </li>
              </ul>
              <button
                className="btn-track-action gold"
                onClick={() => setIsSubmitModalOpen(true)}
              >
                {isAr ? '+ اقتراح مشروع كفريق من 5 شباب' : '+ Proposer un projet en équipe de 5'}
              </button>
            </div>

            {/* Voie 3 : Aide Humanitaire & Urgence */}
            <div className="corps-track-card danger">
              <div className="track-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconAmbulance color="#dc2626" />
              </div>
              <span className="track-tag red">{isAr ? 'المسار 3 · استجابة سريعة للطوارئ' : 'Voie 3 · Mobilisation Rapide'}</span>
              <h3>{isAr ? 'الإسعاف والاستجابة الإنسانية' : 'Secourisme & Urgence Humanitaire'}</h3>
              <p>
                {isAr
                  ? 'تدخل في حالات الطوارئ: التبرع الاستعجالي بالدم بالمستشفيات، الإغاثة أثناء التقلبات الجوية والحرائق بالتنسيق مع الحماية المدنية والهلال الأحمر.'
                  : 'Intervenez lors de crises exceptionnelles : collecte de sang d\'urgence en milieu hospitalier, appui lors des intempéries, canicules et incendies forestiers en coordination avec la Protection Civile.'}
              </p>
              <ul className="track-benefits-list">
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'تدريب مكثف على الإسعافات الأولية' : 'Formation accélérée aux gestes de premiers secours'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'جواز المتبرع الرقمي وشارات الطوارئ' : 'Pass Donneur Numérique et badges d\'urgence'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'تنسيق مباشر مع المستشفيات والهلال الأحمر' : 'Coordination directe avec les hôpitaux et le Croissant Rouge'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconCheck />
                  <span>{isAr ? 'احتياطي مدني جاهز للتدخل الوطني' : 'Réserve civique d\'intervention nationale'}</span>
                </li>
              </ul>
              <button
                className="btn-track-action red"
                onClick={() => {
                  const el = document.getElementById('blood-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {isAr ? 'الانضمام لاحتياطي SOS التبرع بالدم' : 'Rejoindre la réserve SOS Sang'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ONGLET 2 : ATHARPASS (YOUTHPASS ALGÉRIEN)               */}
      {/* ======================================================== */}
      {activeTab === 'atharpass' && (
        <div className="corps-tab-content">
          <div className="corps-section-head">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-full">
                {isAr ? 'أداة رسمية للاعتراف بالمهارات والخبرات التطوعية' : 'OUTIL OFFICIEL DE RECONNAISSANCE EUROPÉEN & ALGÉRIEN'}
              </span>
            </div>
            <h2>{isAr ? 'جواز أثر باس (AtharPass) : ثبّت مهاراتك القيادية' : 'L\'AtharPass : Valorisez vos compétences non-formelles'}</h2>
            <p>
              {isAr
                ? 'مستوحى من أداة Youthpass المعتمدة دولياً، يعد AtharPass أكثر من مجرد شهادة : إنه يترجم جهودك التطوعية إلى مهارات مهنية ملموسة تعترف بها الشركات والجامعات.'
                : 'Inspiré de l\'instrument Youthpass de la Commission Européenne, l\'AtharPass est bien plus qu\'une attestation : il certifie et traduit vos actions de bénévolat en compétences professionnelles concrètes reconnues par les recruteurs et les universités.'}
            </p>
          </div>

          <div className="atharpass-interactive-container">
            {/* Colonne de gauche : Grille des 8 Compétences Clés */}
            <div className="atharpass-skills-column">
              <div className="skills-header-row">
                <h3>{isAr ? 'المهارات الثماني المعتمدة رسمياً' : 'Les 8 Compétences Clés Certifiées'}</h3>
                <span className="skills-sub">{isAr ? 'الإطار المرجعي للتعلم غير النظامي' : 'Cadre de référence de l\'apprentissage non-formel'}</span>
              </div>

              <div className="skills-radar-list">
                {ATHARPASS_COMPETENCES.map((comp) => (
                  <div key={comp.id} className="skill-card-item">
                    <div className="skill-item-top">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{renderCompetenceIcon(comp.iconType)}</span>
                        <div>
                          <strong className="skill-title-txt">{isAr ? comp.nameAr : comp.name}</strong>
                          <small className="skill-arabic-txt">{isAr ? comp.name : comp.nameAr}</small>
                        </div>
                      </div>
                      <span className="skill-percentage-badge">{comp.level}%</span>
                    </div>

                    <p className="skill-desc-txt">{isAr ? comp.descAr : comp.desc}</p>

                    <div className="skill-progress-bar-bg">
                      <div className="skill-progress-bar-fill" style={{ width: `${comp.level}%` }}></div>
                    </div>

                    <div className="skill-proof-source">
                      <span>{isAr ? 'الإثبات الميداني :' : 'Preuve terrain :'}</span> {isAr ? comp.acquiredThroughAr : comp.acquiredThrough}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne de droite : Aperçu du Certificat Officiel AtharPass */}
            <div className="atharpass-preview-column">
              <div className="official-pass-paper">
                <div className="pass-watermark-top">
                  <div className="pass-republique">
                    {isAr ? 'الجمهورية الجزائرية الديمقراطية الشعبية' : 'RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE'}
                  </div>
                  <div className="pass-agency">
                    {isAr ? 'الوكالة الوطنية للتطوع وفيلق التضامن أثر' : 'AGENCE NATIONALE DU BÉNÉVOLAT & CORPS SOLIDAIRE ATHAR'}
                  </div>
                </div>

                <div className="pass-seal-row">
                  <div className="pass-id-chip">ATHARPASS-DZ-2026-8842</div>
                  <div className="pass-qr-box">
                    <svg viewBox="0 0 100 100" width="48" height="48" fill="#16234A">
                      <rect width="25" height="25" x="10" y="10" />
                      <rect width="25" height="25" x="65" y="10" />
                      <rect width="25" height="25" x="10" y="65" />
                      <rect width="15" height="15" x="42" y="42" />
                      <rect width="10" height="10" x="70" y="70" />
                    </svg>
                  </div>
                </div>

                <h3 className="pass-doc-title">
                  {isAr ? 'الجواز الرسمي لمهارات المتطوع' : 'PASSEPORT OFFICIEL DES COMPÉTENCES DU BÉNÉVOLE'}
                </h3>

                <div className="pass-holder-info">
                  <div>{isAr ? 'الاسم واللقب :' : 'Titulaire :'} <strong>{volunteerUser?.name || (isAr ? 'نادية منصوري' : 'Nadia Mansouri')}</strong></div>
                  <div>{isAr ? 'الولاية :' : 'Wilaya :'} <strong>{volunteerUser?.wilaya || (isAr ? 'الجزائر العاصمة' : 'Alger')}</strong></div>
                  <div>{isAr ? 'ساعات التطوع الموثقة :' : 'Heures d\'engagement certifiées :'} <strong>{isAr ? '48 ساعة ميدانية' : '48 heures de terrain'}</strong></div>
                  <div>{isAr ? 'الفترة :' : 'Période :'} <strong>{isAr ? 'سبتمبر 2026' : 'Septembre 2026'}</strong></div>
                </div>

                <div className="pass-validation-text">
                  {isAr
                    ? 'تشهد هذه الوثيقة الرسمية أن حاملها قد شارك بالتزام ومسؤولية في مهام الفيلق الوطني للتضامن أثر، مظهراً كفاءة عالية في العمل الجماعي، وإدارة الطوارئ، والمبادرة المدنية.'
                    : 'Le présent document certifie que le titulaire a participé avec assiduité et responsabilité aux missions du Corps Solidaire Athar, démontrant un niveau d\'excellence dans le travail en équipe, la gestion d\'urgence et l\'initiative citoyenne.'}
                </div>

                <div className="pass-signatures-row">
                  <div className="pass-sign">
                    <small>{isAr ? 'المؤطر / الموجه' : 'Le Tuteur / Mentor'}</small>
                    <div className="sign-author">{isAr ? 'د. أمينة بن علي' : 'Dr. Amina Benali'}</div>
                    <div className="sign-stamp" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <IconCheck color="#166534" />
                      <span>{isAr ? 'توقيع معتمد' : 'Signature Certifiée'}</span>
                    </div>
                  </div>
                  <div className="pass-sign">
                    <small>{isAr ? 'لجنة اعتماد أثر' : 'Commission Athar'}</small>
                    <div className="sign-author">{isAr ? 'أ.د أسامة بلوز' : 'Pr. Oussama Bellouze'}</div>
                    <div className="sign-stamp" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <IconCheck color="#166534" />
                      <span>{isAr ? 'ختم رقمي رسمي' : 'Sceau Numérique'}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn-download-pass"
                  onClick={() => {
                    setIsAtharPassModalOpen(true);
                    if (onToast) onToast(isAr ? 'تم توليد شهادة AtharPass الرسمية بنجاح!' : 'Votre AtharPass officiel a été généré avec succès au format certifié !');
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <IconDownload />
                  <span>{isAr ? 'تحميل جواز AtharPass الرسمي (PDF)' : 'Télécharger mon AtharPass officiel (PDF)'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ONGLET 3 : PROJETS DE SOLIDARITÉ JEUNESSE (5 JEUNES)     */}
      {/* ======================================================== */}
      {activeTab === 'projects' && (
        <div className="corps-tab-content">
          <div className="corps-projects-header">
            <div>
              <h2>{isAr ? 'مشاريع التضامن بقيادة المجموعات الشبابية' : 'Projets de Solidarité Portés par la Jeunesse'}</h2>
              <p>
                {isAr
                  ? 'مستوحى من آلية Solidarity Projects الدولية، يتيح هذا البرنامج لأي مجموعة من 5 شباب جزائريين قيادة مبادرة تطوعية محلية بتمويل ودعم كامل.'
                  : 'Inspiré des Solidarity Projects du Corps Européen, ce dispositif permet à tout collectif d\'au moins 5 jeunes algériens de proposer, piloter et réaliser une action solidaire locale.'}
              </p>
            </div>
            <button
              className="btn-create-project-primary"
              onClick={() => setIsSubmitModalOpen(true)}
            >
              <span>{isAr ? '+ اقتراح مشروعنا (مجموعة 5 شباب)' : '+ Proposer notre projet (Groupe de 5)'}</span>
            </button>
          </div>

          <div className="projects-cards-grid">
            {projectsList.map((proj) => (
              <div key={proj.id} className="solidarity-project-card">
                <div className="proj-card-top">
                  <span className="proj-category-pill">{isAr ? (proj.categoryAr || proj.category) : proj.category}</span>
                  <span className={`proj-status-pill ${proj.status === 'EN REVUE' ? 'pending' : ''}`}>
                    {isAr ? (proj.statusAr || proj.status) : proj.status}
                  </span>
                </div>

                <h3 className="proj-card-title">{isAr ? (proj.titleAr || proj.title) : proj.title}</h3>
                <div className="proj-wilaya-lead" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <IconMapPin />
                  <strong>{isAr ? (proj.wilayaAr || proj.wilaya) : proj.wilaya}</strong>
                  <span>·</span>
                  <span>{isAr ? `قيادة : ${proj.leadYouthAr || proj.leadYouth}` : `Porté par ${proj.leadYouth}`}</span>
                </div>

                <p className="proj-desc-text">{isAr ? (proj.descriptionAr || proj.description) : proj.description}</p>

                <div className="proj-team-box">
                  <div className="proj-team-label">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <IconUsers />
                      <span>{isAr ? 'فريق الـ 5 شباب :' : 'Collectif de 5 jeunes :'}</span>
                    </span>
                    <strong>{isAr ? (proj.teamMembersAr || proj.teamMembers).join(' · ') : proj.teamMembers.join(' · ')}</strong>
                  </div>
                  <div className="proj-mentor-label">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <IconShield color="#006D5B" />
                      <span>{isAr ? 'الجمعية الراعية :' : 'Organisation Marraine :'}</span>
                    </span>
                    <strong>{isAr ? (proj.mentorAssocAr || proj.mentorAssoc) : proj.mentorAssoc}</strong>
                  </div>
                </div>

                <div className="proj-impact-target" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <IconTarget />
                  <strong>{isAr ? 'الهدف المجتمعي :' : 'Objectif d\'impact :'}</strong>
                  <span>{isAr ? (proj.impactTargetAr || proj.impactTarget) : proj.impactTarget}</span>
                </div>

                <div className="proj-card-footer">
                  <div className="proj-support-count">
                    <strong>{proj.supportersCount}</strong> {isAr ? 'مواطناً يدعمون هذه المبادرة' : 'citoyens soutiennent ce projet'}
                  </div>
                  <button
                    className="btn-support-project"
                    onClick={() => handleSupportProject(proj.id)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <IconHeartFilled />
                    <span>{isAr ? 'دعم المبادرة' : 'Soutenir l\'initiative'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ONGLET 4 : LABEL QUALITÉ & CHARTE DU BÉNÉVOLE            */}
      {/* ======================================================== */}
      {activeTab === 'quality' && (
        <div className="corps-tab-content">
          <div className="corps-section-head">
            <h2>{isAr ? 'علامة الجودة أثر وميثاق المتطوع' : 'Le Label Qualité Athar (Quality Label)'}</h2>
            <p>
              {isAr
                ? 'كما في المعايير العالمية المتقدمة، يتعين على كل جمعية أو مستشفى شريك الحصول على علامة الجودة أثر لضمان تجربة تطوعية آمنة ومحترمة للشباب.'
                : 'Comme dans le Corps Européen de Solidarité, toute structure d\'accueil (association, ONG, hôpital, parc naturel) doit obtenir le Label Qualité Athar avant de mobiliser des jeunes.'}
            </p>
          </div>

          <div className="quality-principles-grid">
            <div className="quality-card">
              <span className="quality-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconShield color="#006D5B" />
              </span>
              <h3>{isAr ? '1. الأمان والحماية الكاملة' : '1. Sécurité & Protection Totale'}</h3>
              <p>
                {isAr
                  ? 'يستفيد كل متطوع من تغطية تأمينية شاملة، ومعدات أمان ملائمة، وبيئة عمل محترمة ومحفزة.'
                  : 'Chaque volontaire bénéficie d\'une assurance civile, d\'équipements de sécurité adaptés et d\'un environnement bienveillant.'}
              </p>
            </div>

            <div className="quality-card">
              <span className="quality-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconTeacher color="#0284c7" />
              </span>
              <h3>{isAr ? '2. التوجيه والمرافقة الميدانية' : '2. Mentorat & Tutorat Dédié'}</h3>
              <p>
                {isAr
                  ? 'يرافق المتطوع مؤطر ذو خبرة طوال مدة المبادرة لتسهيل اكتساب المهارات وتذليل أي عقبات.'
                  : 'Un référent d\'expérience accompagne le jeune tout au long de sa mission pour faciliter ses apprentissages et surmonter les obstacles.'}
              </p>
            </div>

            <div className="quality-card">
              <span className="quality-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconMeal color="#16a34a" />
              </span>
              <h3>{isAr ? '3. تكفل كريم دون أي أعباء' : '3. Prise en Charge Digne'}</h3>
              <p>
                {isAr
                  ? 'لا يتحمل المتطوع أي تكاليف شخصية: النقل، الوجبات، والإقامة عند الحاجة مضمونة بالكامل.'
                  : 'Aucun bénévole ne doit engager de frais personnels : hébergement, repas chauds et indemnités de transport sont garantis.'}
              </p>
            </div>

            <div className="quality-card">
              <span className="quality-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconCertificate color="#b45309" />
              </span>
              <h3>{isAr ? '4. اعتماد وتوثيق المهارات' : '4. Certification des Compétences'}</h3>
              <p>
                {isAr
                  ? 'تسليم إلزامي لجواز AtharPass لتعزيز السيرة الذاتية وفتح آفاق مهنية وأكاديمية للمتطوع.'
                  : 'Délivrance obligatoire de l\'AtharPass avec auto-évaluation réflexive pour enrichir le CV et l\'avenir professionnel du jeune.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL : SOUMISSION D'UN PROJET DE 5 JEUNES               */}
      {/* ======================================================== */}
      {isSubmitModalOpen && (
        <div className="modal on" role="dialog" aria-modal="true" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <div className="modal-bg" onClick={() => setIsSubmitModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '640px', padding: '30px' }}>
            <button className="modal-x" onClick={() => setIsSubmitModalOpen(false)}>
              <IconClose />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 12px', background: '#FEF3C7', color: '#92400E', borderRadius: '20px' }}>
                {isAr ? 'برنامج الشباب 18-35 سنة' : 'DISPOSITIF JEUNESSE 18-35 ANS'}
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)', margin: '8px 0 4px' }}>
                {isAr ? 'إيداع مشروع تضامن شبابي (مجموعة من 5 شباب)' : 'Déposer un Projet de Solidarité (Groupe de 5 jeunes)'}
              </h2>
              <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0 }}>
                {isAr
                  ? 'ستتولى مجموعتكم قيادة هذا المشروع باستقلالية تامة مع الدعم المالي والمنهجي لمنصة أثر.'
                  : 'Votre collectif portera ce projet en toute autonomie avec le soutien méthodologique et financier d\'Athar.'}
              </p>
            </div>

            <form onSubmit={handleSubmitProject} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  {isAr ? 'عنوان المشروع التضامني *' : 'Titre du Projet Solidaire *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? 'مثال: قافلة القراءة المتنقلة بجبال جرجرة' : 'Ex. Caravane de lecture mobile dans le Djurdjura'}
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    {isAr ? 'ولاية التنفيذ *' : 'Wilaya d\'intervention *'}
                  </label>
                  <select
                    value={newProjWilaya}
                    onChange={(e) => setNewProjWilaya(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1', background: '#fff' }}
                  >
                    {['Alger', 'Oran', 'Constantine', 'Blida', 'Batna', 'Ghardaïa', 'Tizi Ouzou', 'Béjaïa', 'Sétif', 'Tlemcen', 'Annaba'].map(w => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    {isAr ? 'المجال التضامني *' : 'Thématique *'}
                  </label>
                  <select
                    value={newProjCategory}
                    onChange={(e) => setNewProjCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1', background: '#fff' }}
                  >
                    <option value="Éducation & Culture">{isAr ? 'تعليم وثقافة' : 'Éducation & Culture'}</option>
                    <option value="Climat & Oasis">{isAr ? 'مناخ وواحات' : 'Climat & Oasis'}</option>
                    <option value="Santé & Tech">{isAr ? 'صحة وتكنولوجيا' : 'Santé & Tech'}</option>
                    <option value="Solidarité & Dignité">{isAr ? 'تضامن وكرامة إنسانية' : 'Solidarité & Dignité'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  {isAr ? 'وصف المبادرة والاحتياج المجتمعي المستهدف *' : 'Description de l\'action & besoin communautaire *'}
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder={isAr ? 'ما هي المشكلة المحلية التي يعالجها المشروع؟ وماذا ستفعلون تحديداً مع فريقكم؟' : 'Quel problème local ce projet résout-il ? Que ferez-vous concrètement avec votre équipe ?'}
                  value={newProjDesc}
                  onChange={(e) => setNewProjDesc(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '13.5px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  {isAr ? 'الهدف الميداني المرقم *' : 'Objectif chiffré d\'impact *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? 'مثال: غرس 500 شجرة، تكوين 200 طفل في الإسعافات...' : 'Ex. 500 arbres plantés, 200 enfants formés au secourisme...'}
                  value={newProjTarget}
                  onChange={(e) => setNewProjTarget(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1' }}
                />
              </div>

              <div style={{ background: '#F0FDF4', padding: '12px 16px', borderRadius: '10px', border: '1px solid #BBF7D0', fontSize: '12.5px', color: '#166534' }}>
                <strong>{isAr ? 'شروط فيلق التضامن :' : 'Règle du Corps Solidaire :'}</strong> {isAr ? 'يجب أن تكونوا فريقاً من 5 شباب مقيمين بالجزائر. سيتصل بكم فريق التأطير خلال 48 ساعة.' : 'Vous devez être un collectif d\'au moins 5 jeunes résidant en Algérie. Vous serez contactés sous 48h par l\'équipe d\'accompagnement.'}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsSubmitModalOpen(false)}
                >
                  {isAr ? 'إلغاء' : 'Annuler'}
                </button>
                <button
                  type="submit"
                  className="btn btn-green"
                  style={{ fontWeight: 800, padding: '10px 22px' }}
                >
                  {isAr ? 'إرسال المشروع للمراجعة والاعتماد' : 'Soumettre le projet pour validation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL : VISUALISATION COMPLÈTE ATHARPASS                 */}
      {/* ======================================================== */}
      {isAtharPassModalOpen && (
        <div className="modal on" role="dialog" aria-modal="true" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <div className="modal-bg" onClick={() => setIsAtharPassModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '680px', padding: '32px' }}>
            <button className="modal-x" onClick={() => setIsAtharPassModalOpen(false)}>
              <IconClose />
            </button>

            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary-teal)', paddingBottom: '16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '1px' }}>
                {isAr ? 'الجمهورية الجزائرية الديمقراطية الشعبية' : 'RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE'}
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)', margin: '4px 0' }}>
                {isAr ? 'ATHARPASS · الجواز الرسمي لمهارات المتطوع' : 'ATHARPASS · PASSEPORT OFFICIEL DU BÉNÉVOLE'}
              </h2>
              <div style={{ fontSize: '12.5px', color: 'var(--primary-teal)', fontWeight: 700 }}>
                {isAr ? 'الآلية الوطنية لتوثيق مكتسبات الالتزام المدني والتطوعي' : 'Instrument National de Validation des Acquis de l\'Engagement Civique'}
              </div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '16px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px' }}>
                <div>{isAr ? 'المتطوع :' : 'Bénévole :'} <strong>{volunteerUser?.name || (isAr ? 'نادية منصوري' : 'Nadia Mansouri')}</strong></div>
                <div>{isAr ? 'الولاية :' : 'Wilaya de référence :'} <strong>{volunteerUser?.wilaya || (isAr ? 'الجزائر العاصمة' : 'Alger')}</strong></div>
                <div>{isAr ? 'المعرف الفريد :' : 'Identifiant unique :'} <strong>ATHARPASS-DZ-2026-8842</strong></div>
                <div>{isAr ? 'الاعتماد الرسمي :' : 'Validation officielle :'} <strong style={{ color: '#006D5B' }}>{isAr ? 'مطابق لمعايير Youthpass' : 'Conforme aux standards Youthpass'}</strong></div>
              </div>
            </div>

            <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 10px' }}>
              {isAr ? 'المهارات المعتمدة من طرف المؤطرين :' : 'Compétences Clés Certifiées par les Tuteurs :'}
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '22px' }}>
              {ATHARPASS_COMPETENCES.slice(0, 6).map(c => (
                <div key={c.id} style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#16234A', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {renderCompetenceIcon(c.iconType)}
                      <span>{isAr ? c.nameAr : c.name}</span>
                    </span>
                    <strong style={{ color: '#006D5B', fontSize: '12.5px' }}>{c.level}%</strong>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                className="btn btn-green btn-lg"
                style={{ width: '100%', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={() => {
                  alert(isAr ? 'تم تحميل شهادة AtharPass الرسمية بدقة عالية ومزودة بالختم الرقمي QR!' : 'Attestation AtharPass officielle téléchargée en haute résolution avec sceau cryptographique QR !');
                  setIsAtharPassModalOpen(false);
                }}
              >
                <IconDownload />
                <span>{isAr ? 'تحميل وثيقة PDF الرسمية المزودة برمز QR' : 'Télécharger le document PDF sécurisé avec QR Code'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
