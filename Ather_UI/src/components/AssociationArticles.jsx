import React, { useState } from 'react';
import '../styles/association/articles.css';

// Sample assets for initial published articles
import articleHeroEducation from '../assets/article-hero-education.png';
import articleCartables from '../assets/article-cartables.png';
import articleReboisement from '../assets/article-reboisement.png';
import articleDonSang from '../assets/article-don-sang.png';
import articleCasbah from '../assets/article-casbah.png';
import articlePlages from '../assets/article-plages.png';

// Clean SVG Icons (zero emojis)
function IconFileText({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
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

function IconShare2({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
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

function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconCalendar({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconClock({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconCheckCircle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconImage({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function IconTrash({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function IconX({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const WILAYAS_LIST = [
  "01 Adrar", "02 Chlef", "03 Laghouat", "04 Oum El Bouaghi", "05 Batna", "06 Béjaïa", "07 Biskra", "08 Béchar", "09 Blida", "10 Bouira",
  "11 Tamanrasset", "12 Tébessa", "13 Tlemcen", "14 Tiaret", "15 Tizi Ouzou", "16 Alger", "17 Djelfa", "18 Jijel", "19 Sétif", "20 Saïda",
  "21 Skikda", "22 Sidi Bel Abbès", "23 Annaba", "24 Guelma", "25 Constantine", "26 Médéa", "27 Mostaganem", "28 M'Sila", "29 Mascara", "30 Ouargla",
  "31 Oran", "32 El Bayadh", "33 Illizi", "34 Bordj Bou Arreridj", "35 Boumerdès", "36 El Tarf", "37 Tindouf", "38 Tissemsilt", "39 El Oued", "40 Khenchela",
  "41 Souk Ahras", "42 Tipaza", "43 Mila", "44 Aïn Defla", "45 Naâma", "46 Aïn Témouchent", "47 Ghardaïa", "48 Relizane",
  "49 Timimoun", "50 Bordj Badji Mokhtar", "51 Ouled Djellal", "52 Béni Abbès", "53 In Salah", "54 In Guezzam", "55 Touggourt", "56 Djanet", "57 El M'Ghair", "58 El Meniaa",
  "59 Aflou", "60 Barika", "61 Ksar Chellala", "62 Messaad", "63 Aïn Oussara", "64 Boussaâda", "65 El Abiodh Sidi Cheikh", "66 El Kantara", "67 Bir El Ater", "68 Khemis Miliana", "69 Debila"
];

const INITIAL_ARTICLES = [
  {
    id: 'art-1',
    title: 'Éducation solidaire : Le soutien scolaire dans les zones rurales de Constantine',
    category: 'Éducation',
    status: 'published',
    author: 'Croissant Rouge Algérien — Comité Constantine',
    date: '18 avr. 2025',
    readTime: '4 min',
    views: 3420,
    shares: 280,
    cover: articleHeroEducation,
    excerpt: 'Retour sur notre programme d\'accompagnement pédagogique hebdomadaire dédié aux collégiens des zones enclavées, avec plus de 120 élèves préparés aux examens officiels.',
    content: `L'égalité des chances face à l'apprentissage est une priorité absolue de notre engagement associatif. Depuis le début de l'année scolaire, notre équipe de bénévoles diplômés et d'enseignants retraités sillonne les communes périurbaines et rurales de Constantine.

Grâce à ce dispositif structuré, nous avons pu mettre en place des séances intensives de mathématiques, français et physique, tout en fournissant les fournitures et les manuels nécessaires. Les résultats du premier trimestre témoignent d'une progression remarquable de 35% de la moyenne générale des élèves accompagnés.

Nous tenons à saluer l'implication admirable des familles locales qui nous ouvrent leurs portes avec chaleur et reconnaissance. Ensemble, nous construisons l'avenir de nos enfants.`,
    tags: ['#Éducation', '#Constantine', '#SolidaritéCitoyenne']
  },
  {
    id: 'art-2',
    title: 'Rentrée solidaire : Distribution de 1 200 cartables complets aux écoliers',
    category: 'Solidarité',
    status: 'published',
    author: 'Pôle Logistique & Dons',
    date: '12 avr. 2025',
    readTime: '3 min',
    views: 2890,
    shares: 195,
    cover: articleCartables,
    excerpt: 'Mobilisation exceptionnelle pour équiper les enfants issus de familles nécessiteuses de sacs ergonomiques, cahiers et trousses complètes.',
    content: `Aucun enfant ne doit aborder la rentrée avec l'angoisse du manque de matériel. Notre opération annuelle de dons scolaires a permis cette saison d'atteindre un record avec 1 200 packs distribués dans 8 wilayas.

Chaque cartable a été méticuleusement garni en fonction du niveau d'études, du primaire au collège. Cette chaîne de générosité a été rendue possible grâce aux contributions citoyennes et aux partenariats noués sur la plateforme Athar.`,
    tags: ['#RentréeSolidaire', '#Enfance', '#AtharImpact']
  },
  {
    id: 'art-3',
    title: 'Reforestation en Kabylie : 10 000 arbres plantés avec la jeunesse citoyenne',
    category: 'Environnement',
    status: 'published',
    author: 'Cellule Environnement & Climat',
    date: '5 avr. 2025',
    readTime: '5 min',
    views: 4120,
    shares: 430,
    cover: articleReboisement,
    excerpt: 'Un week-end d\'action historique dans les massifs du Djurdjura réunissant plus de 350 volontaires venus de tout le pays.',
    content: `Face aux incendies estivaux et à l'érosion des sols, la jeunesse algérienne a répondu présente avec une ferveur exemplaire. En deux journées de mobilisation citoyenne, 10 000 plants de cèdres de l'Atlas, pins d'Alep et oliviers ont été mis en terre.

L'opération a également intégré des ateliers de sensibilisation à la prévention des feux de forêts et à la gestion durable de l'eau, animés par des ingénieurs agronomes bénévoles.`,
    tags: ['#Reboisement', '#Kabylie', '#Biodiversité']
  },
  {
    id: 'art-4',
    title: 'Journée nationale du don de sang : Une mobilisation record à travers le pays',
    category: 'Santé',
    status: 'published',
    author: 'Direction Médicale & Urgence',
    date: '28 mars 2025',
    readTime: '3 min',
    views: 3150,
    shares: 310,
    cover: articleDonSang,
    excerpt: 'Plus de 850 poches de sang collectées en une seule journée au profit des centres hospitalo-universitaires.',
    content: `Donner son sang, c'est sauver des vies. Nos tentes d'accueil et camions mobiles déployés à Alger, Oran, Constantine et Ouargla ont accueilli des centaines de donneurs volontaires.

Grâce à cette mobilisation exemplaire, les réserves des services d'hématologie et d'urgence pédiatrique ont été consolidées pour les prochaines semaines. Un immense merci à chacun des donneurs.`,
    tags: ['#DonDeSang', '#SauverDesVies', '#SantéPublique']
  },
  {
    id: 'art-5',
    title: 'Préservation du patrimoine : Restauration des ruelles de la Casbah d\'Alger',
    category: 'Patrimoine',
    status: 'published',
    author: 'Comité Patrimoine & Culture',
    date: '20 mars 2025',
    readTime: '4 min',
    views: 2240,
    shares: 180,
    cover: articleCasbah,
    excerpt: 'Chantier éco-citoyen de nettoyage, désherbage et sécurisation des venelles historiques classées au patrimoine mondial.',
    content: `La mémoire de notre capitale réside dans ses pierres millénaires. En partenariat avec les artisans locaux et les architectes du patrimoine, notre association a mené un vaste chantier de réhabilitation douce au cœur de la haute Casbah.

Les bénévoles ont dégagé les encombrants historiques et nettoyé les fontaines traditionnelles tout en installant des bacs fleuris pour redonner éclat et vie à ce joyau architectural.`,
    tags: ['#Casbah', '#Patrimoine', '#AlgerLaBlanche']
  },
  {
    id: 'art-6',
    title: 'Éco-citoyenneté côtière : Bilan de la campagne de dépollution des plages',
    category: 'Environnement',
    status: 'draft',
    author: 'Équipe Littoral Propre',
    date: '15 mars 2025',
    readTime: '3 min',
    views: 0,
    shares: 0,
    cover: articlePlages,
    excerpt: 'Projet d\'article en cours de relecture sur les 4 tonnes de plastique collectées et acheminées vers les filières de recyclage.',
    content: `Brouillon d'article détaillant les résultats de la campagne estivale de dépollution sur le littoral d'Aïn Témouchent et d'Oran. Les statistiques de tri sélectif et les analyses d'impact sont en cours de finalisation par la commission technique.`,
    tags: ['#PlagesPropres', '#ZéroPlastique', '#Brouillon']
  }
];

export default function AssociationArticles({ currentLang = 'fr' }) {
  const isAr = currentLang === 'ar';
  const [articles, setArticles] = useState(INITIAL_ARTICLES);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'published' | 'draft'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // New article form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Solidarité');
  const [newWilaya, setNewWilaya] = useState('16 Alger');
  const [newReadTime, setNewReadTime] = useState('3 min');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('#CroissantRouge #Athar');
  const [coverPreview, setCoverPreview] = useState(articleHeroEducation);
  const [successToast, setSuccessToast] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = (status = 'published') => {
    if (!newTitle.trim()) {
      alert(isAr ? 'يرجى إدخال عنوان للمقال.' : 'Veuillez saisir un titre pour l\'article.');
      return;
    }

    const createdArticle = {
      id: `art-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      status: status,
      author: isAr ? 'الهلال الأحمر الجزائري' : 'Croissant Rouge Algérien',
      date: new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
      readTime: newReadTime,
      views: 0,
      shares: 0,
      cover: coverPreview,
      excerpt: newExcerpt || newContent.slice(0, 140) + '...',
      content: newContent || newExcerpt,
      tags: newTags.split(' ').filter(t => t.startsWith('#'))
    };

    setArticles([createdArticle, ...articles]);
    setIsWriting(false);
    setNewTitle('');
    setNewExcerpt('');
    setNewContent('');
    setSuccessToast(status === 'published' ? (isAr ? 'تم نشر المقال بنجاح!' : 'Article publié avec succès !') : (isAr ? 'تم حفظ المسودة بنجاح.' : 'Brouillon enregistré.'));
    setTimeout(() => setSuccessToast(''), 4000);
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm(isAr ? 'هل أنت متأكد من حذف هذا المقال؟' : 'Veuillez confirmer la suppression de cet article ?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const filteredArticles = articles.filter((art) => {
    if (activeFilter === 'published' && art.status !== 'published') return false;
    if (activeFilter === 'draft' && art.status !== 'draft') return false;
    if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
    if (searchQuery && !art.title.toLowerCase().includes(searchQuery.toLowerCase()) && !art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="assoc-articles-root">
      {/* 1. EN-TÊTE DE LA SECTION ARTICLES */}
      <div className="assoc-articles-header">
        <div className="assoc-articles-header-left">
          <h1>{isAr ? 'مقالات وقصص الأثر الميداني' : 'Articles & Récits de terrain'}</h1>
          <p>
            {isAr
              ? 'انشر وتصفح مقالات التوعية، التقارير الميدانية وقصص المتطوعين عبر ربوع الجزائر الحبيبة.'
              : 'Rédigez, publiez et valorisez les actions de votre association. Partagez l\'impact concret de vos bénévoles à travers toute l\'Algérie.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsWriting(!isWriting)}
          className="assoc-btn-write-article"
        >
          <IconPlus className="w-4 h-4" />
          <span>{isWriting ? (isAr ? 'إغلاق الاستمارة' : 'Fermer le formulaire') : (isAr ? 'تحرير مقال جديد' : 'Rédiger un article')}</span>
        </button>
      </div>

      {successToast && (
        <div style={{
          backgroundColor: '#ecfdf5',
          border: '1px solid #a7f3d0',
          color: '#065f46',
          padding: '12px 20px',
          borderRadius: '12px',
          fontSize: '13.5px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <IconCheckCircle className="w-4 h-4 text-emerald-600" />
          <span>{successToast}</span>
        </div>
      )}

      {/* 2. STATS OVERVIEW ROW */}
      <div className="assoc-articles-stats-grid">
        <div className="assoc-articles-stat-card">
          <div className="assoc-articles-stat-icon emerald">
            <IconFileText className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-articles-stat-val">{articles.filter(a => a.status === 'published').length}</div>
            <div className="assoc-articles-stat-sub">{isAr ? 'مقالات منشورة' : 'Articles publiés'}</div>
          </div>
        </div>

        <div className="assoc-articles-stat-card">
          <div className="assoc-articles-stat-icon blue">
            <IconEye className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-articles-stat-val">
              {(articles.reduce((acc, a) => acc + (a.views || 0), 0) / 1000).toFixed(1)}k
            </div>
            <div className="assoc-articles-stat-sub">{isAr ? 'قراءات تراكمية' : 'Lectures cumulées'}</div>
          </div>
        </div>

        <div className="assoc-articles-stat-card">
          <div className="assoc-articles-stat-icon amber">
            <IconShare2 className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-articles-stat-val">
              {articles.reduce((acc, a) => acc + (a.shares || 0), 0)}
            </div>
            <div className="assoc-articles-stat-sub">{isAr ? 'مشاركات وتفاعل' : 'Partages citoyens'}</div>
          </div>
        </div>

        <div className="assoc-articles-stat-card">
          <div className="assoc-articles-stat-icon blue" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
            <IconClock className="w-5 h-5" />
          </div>
          <div>
            <div className="assoc-articles-stat-val">{articles.filter(a => a.status === 'draft').length}</div>
            <div className="assoc-articles-stat-sub">{isAr ? 'مسودات قيد المراجعة' : 'Brouillons en attente'}</div>
          </div>
        </div>
      </div>

      {/* 3. FORMULAIRE DE CRÉATION D'ARTICLE (TOGGLEABLE) */}
      {isWriting && (
        <div className="assoc-article-form-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 className="assoc-article-form-title">{isAr ? 'تحرير ونشر مقال ميداني جديد' : 'Créer un nouvel article de presse / récit'}</h2>
            <button
              type="button"
              onClick={() => setIsWriting(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--assoc-text-muted)' }}
              title={isAr ? 'إغلاق' : 'Fermer'}
            >
              <IconX className="w-5 h-5" />
            </button>
          </div>

          <div className="assoc-article-form-grid">
            {/* Colonne gauche : Contenu & Titre */}
            <div>
              <div className="assoc-article-form-group">
                <label>{isAr ? 'عنوان المقال *' : "Titre de l'article *"}</label>
                <input
                  type="text"
                  placeholder={isAr ? 'مثال: الدخول المدرسي المتضامن: توزيع 1200 محفظة...' : "Ex: Rentrée solidaire : 1 200 cartables distribués aux écoliers..."}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>

              <div className="assoc-article-form-group">
                <label>{isAr ? 'موجز المقال / المقدمة (المستخلص)' : "Extrait / Chapô d'introduction (court résumé)"}</label>
                <textarea
                  rows="3"
                  placeholder={isAr ? 'قدّم ملخصاً وجيزاً عن المبادرة الميدانية، المكان والأثر المحقق...' : "Présentez brièvement l'action, le lieu et l'impact clé de cet article..."}
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                />
              </div>

              <div className="assoc-article-form-group">
                <label>{isAr ? 'نص المقال كاملاً *' : "Corps complet de l'article *"}</label>
                <textarea
                  rows="8"
                  placeholder={isAr ? 'اسرد تفاصيل النشاط الميداني، انطباعات المستفيدين ورسائل المتطوعين...' : "Racontez en détail le déroulement de l'action sur le terrain, les témoignages des bénéficiaires et bénévoles..."}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                />
              </div>
            </div>

            {/* Colonne droite : Photo & Métadonnées */}
            <div>
              <div className="assoc-article-form-group">
                <label>{isAr ? 'الصورة التوضيحية للمقال *' : "Photo de couverture de l'article *"}</label>
                <div className="assoc-article-photo-picker" onClick={() => document.getElementById('article-file-upload').click()}>
                  {coverPreview ? (
                    <img src={coverPreview} alt="Aperçu" className="assoc-article-preview-img" />
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--assoc-text-muted)' }}>
                      <IconImage className="w-8 h-8" />
                      <span style={{ fontSize: '13px', fontWeight: 600 }}>{isAr ? 'رفع صورة من الجهاز' : 'Importer une photo'}</span>
                      <small style={{ fontSize: '11px' }}>PNG, JPG {isAr ? 'حتى 10 ميغابايت' : "jusqu'à 10 Mo"}</small>
                    </div>
                  )}
                  <input
                    id="article-file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="assoc-article-form-group">
                <label>{isAr ? 'المجال التخصصي' : 'Catégorie thématique'}</label>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                  <option value="Solidarité">{isAr ? 'التضامن والإغاثة' : 'Solidarité & Aide d\'urgence'}</option>
                  <option value="Éducation">{isAr ? 'التعليم والتكوين' : 'Éducation & Jeunesse'}</option>
                  <option value="Environnement">{isAr ? 'البيئة والتشجير' : 'Environnement & Reboisement'}</option>
                  <option value="Santé">{isAr ? 'الصحة والتبرع بالدم' : 'Santé & Don de sang'}</option>
                  <option value="Patrimoine">{isAr ? 'التراث والثقافة' : 'Patrimoine & Culture'}</option>
                </select>
              </div>

              <div className="assoc-article-form-group">
                <label>{isAr ? 'الولاية المعنية (69 ولاية)' : 'Wilaya concernée (69 wilayas)'}</label>
                <select value={newWilaya} onChange={(e) => setNewWilaya(e.target.value)}>
                  {WILAYAS_LIST.map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              <div className="assoc-article-form-group">
                <label>{isAr ? 'وقت القراءة التقديري' : 'Temps de lecture estimé'}</label>
                <input
                  type="text"
                  value={newReadTime}
                  onChange={(e) => setNewReadTime(e.target.value)}
                  placeholder={isAr ? 'مثال: 4 دقائق' : 'Ex: 4 min'}
                />
              </div>

              <div className="assoc-article-form-group">
                <label>{isAr ? 'الوسوم والكلمات الدلالية (#)' : 'Tags (#)'}</label>
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="#الهلال_الأحمر #أثر"
                />
              </div>
            </div>
          </div>

          <div className="assoc-article-form-actions">
            <button
              type="button"
              onClick={() => setIsWriting(false)}
              className="assoc-btn-cancel"
            >
              {isAr ? 'إلغاء' : 'Annuler'}
            </button>
            <button
              type="button"
              onClick={() => handlePublish('draft')}
              className="assoc-btn-cancel"
              style={{ backgroundColor: 'var(--assoc-bg-subtle)', color: 'var(--assoc-navy)' }}
            >
              {isAr ? 'حفظ كمسودة' : 'Enregistrer brouillon'}
            </button>
            <button
              type="button"
              onClick={() => handlePublish('published')}
              className="assoc-btn-write-article"
            >
              <IconCheckCircle className="w-4 h-4" />
              <span>{isAr ? 'نشر المقال الآن' : "Publier l'article"}</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. FILTRES & RECHERCHE */}
      <div className="assoc-articles-filter-bar">
        <div className="assoc-articles-pills">
          <button
            type="button"
            className={`assoc-articles-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {isAr ? `كافة المقالات (${articles.length})` : `Tous les articles (${articles.length})`}
          </button>
          <button
            type="button"
            className={`assoc-articles-pill ${activeFilter === 'published' ? 'active' : ''}`}
            onClick={() => setActiveFilter('published')}
          >
            {isAr ? `المنشورة (${articles.filter(a => a.status === 'published').length})` : `Publiés (${articles.filter(a => a.status === 'published').length})`}
          </button>
          <button
            type="button"
            className={`assoc-articles-pill ${activeFilter === 'draft' ? 'active' : ''}`}
            onClick={() => setActiveFilter('draft')}
          >
            {isAr ? `المسودات (${articles.filter(a => a.status === 'draft').length})` : `Brouillons (${articles.filter(a => a.status === 'draft').length})`}
          </button>
        </div>

        <div className="assoc-articles-search-wrap">
          <div className="assoc-articles-search-input">
            <IconSearch className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={isAr ? 'ابحث بالعنوان أو الكلمات الدلالية...' : 'Rechercher par titre ou mot-clé...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 5. GRILLE DES ARTICLES PUBLIÉS */}
      <div className="assoc-articles-grid">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="assoc-article-card"
            onClick={() => setSelectedArticle(article)}
            style={{ cursor: 'pointer' }}
          >
            {/* Couverture avec badges superposés */}
            <div className="assoc-article-card-cover">
              <img src={article.cover} alt={article.title} />
              <span className="assoc-article-badge-cat">{article.category}</span>
              <span className={`assoc-article-badge-status ${article.status}`}>
                {article.status === 'published' ? (isAr ? '● منشور' : '● En ligne') : (isAr ? 'مسودة' : 'Brouillon')}
              </span>
            </div>

            {/* Corps de l'article */}
            <div className="assoc-article-body">
              <h3 className="assoc-article-title">{article.title}</h3>
              <p className="assoc-article-excerpt">{article.excerpt}</p>

              {/* Métadonnées : Date, temps de lecture, vues */}
              <div className="assoc-article-meta">
                <div className="assoc-article-meta-left">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <IconCalendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <IconClock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>
                {article.views > 0 && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                    <IconEye className="w-3.5 h-3.5" />
                    <span>{article.views}</span>
                  </span>
                )}
              </div>

              {/* Boutons d'action */}
              <div className="assoc-article-actions" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="assoc-article-btn-read"
                >
                  <IconEye className="w-3.5 h-3.5" />
                  <span>{isAr ? 'قراءة المقال' : "Lire l'article"}</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => handleDelete(article.id, e)}
                  className="assoc-article-btn-action delete"
                  title={isAr ? 'حذف المقال' : "Supprimer l'article"}
                >
                  <IconTrash className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. MODAL PLEIN ÉCRAN POUR LIRE L'ARTICLE SÉLECTIONNÉ */}
      {selectedArticle && (
        <div className="assoc-article-modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="assoc-article-modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="assoc-article-badge-cat" style={{ position: 'static' }}>
                {selectedArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--assoc-text-muted)' }}
                title={isAr ? 'إغلاق' : 'Fermer'}
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <img
              src={selectedArticle.cover}
              alt={selectedArticle.title}
              className="assoc-article-modal-cover"
            />

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
              {selectedArticle.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: 'var(--assoc-text-muted)', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--assoc-border)' }}>
              <span>{isAr ? 'بواسطة ' : 'Par '}<strong>{selectedArticle.author}</strong></span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime} {isAr ? 'قراءة' : 'de lecture'}</span>
            </div>

            <p style={{ fontSize: '15px', fontStyle: 'italic', color: 'var(--assoc-navy-light)', lineHeight: 1.6, marginBottom: '20px', backgroundColor: 'var(--assoc-bg-subtle)', padding: '16px', borderRadius: '14px' }}>
              “ {selectedArticle.excerpt} ”
            </p>

            <div style={{ fontSize: '14.5px', color: 'var(--assoc-text-body)', lineHeight: 1.75, whiteSpace: 'pre-line', marginBottom: '24px' }}>
              {selectedArticle.content}
            </div>

            {selectedArticle.tags && selectedArticle.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {selectedArticle.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--assoc-emerald)', backgroundColor: 'var(--assoc-emerald-light)', padding: '4px 10px', borderRadius: '8px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="assoc-btn-cancel"
              >
                {isAr ? 'إغلاق' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
