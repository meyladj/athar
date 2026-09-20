import React, { useState } from 'react';

// Clean SVG Icons (zero emojis)
function IconShield({ className = "w-4 h-4", color = "#006D5B" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconSearch({ className = "w-4 h-4", color = "#94a3b8" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
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

function IconFileText({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
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

const WILAYAS_69 = [
  { code: '01', fr: '01 - Adrar', ar: '01 - أدرار' },
  { code: '02', fr: '02 - Chlef', ar: '02 - الشلف' },
  { code: '03', fr: '03 - Laghouat', ar: '03 - الأغواط' },
  { code: '04', fr: '04 - Oum El Bouaghi', ar: '04 - أم البواقي' },
  { code: '05', fr: '05 - Batna', ar: '05 - باتنة' },
  { code: '06', fr: '06 - Béjaïa', ar: '06 - بجاية' },
  { code: '07', fr: '07 - Biskra', ar: '07 - بسكرة' },
  { code: '08', fr: '08 - Béchar', ar: '08 - بشار' },
  { code: '09', fr: '09 - Blida', ar: '09 - البليدة' },
  { code: '10', fr: '10 - Bouira', ar: '10 - البويرة' },
  { code: '11', fr: '11 - Tamanrasset', ar: '11 - تمنراست' },
  { code: '12', fr: '12 - Tébessa', ar: '12 - تبسة' },
  { code: '13', fr: '13 - Tlemcen', ar: '13 - تلمسان' },
  { code: '14', fr: '14 - Tiaret', ar: '14 - تيارت' },
  { code: '15', fr: '15 - Tizi Ouzou', ar: '15 - تيزي وزو' },
  { code: '16', fr: '16 - Alger', ar: '16 - الجزائر' },
  { code: '17', fr: '17 - Djelfa', ar: '17 - الجلفة' },
  { code: '18', fr: '18 - Jijel', ar: '18 - جيجل' },
  { code: '19', fr: '19 - Sétif', ar: '19 - سطيف' },
  { code: '20', fr: '20 - Saïda', ar: '20 - سعيدة' },
  { code: '21', fr: '21 - Skikda', ar: '21 - سكيكدة' },
  { code: '22', fr: '22 - Sidi Bel Abbès', ar: '22 - سيدي بلعباس' },
  { code: '23', fr: '23 - Annaba', ar: '23 - عنابة' },
  { code: '24', fr: '24 - Guelma', ar: '24 - قالمة' },
  { code: '25', fr: '25 - Constantine', ar: '25 - قسنطينة' },
  { code: '26', fr: '26 - Médéa', ar: '26 - المدية' },
  { code: '27', fr: '27 - Mostaganem', ar: '27 - مستغانم' },
  { code: '28', fr: '28 - M\'Sila', ar: '28 - المسيلة' },
  { code: '29', fr: '29 - Mascara', ar: '29 - معسكر' },
  { code: '30', fr: '30 - Ouargla', ar: '30 - ورقلة' },
  { code: '31', fr: '31 - Oran', ar: '31 - وهران' },
  { code: '32', fr: '32 - El Bayadh', ar: '32 - البيض' },
  { code: '33', fr: '33 - Illizi', ar: '33 - إليزي' },
  { code: '34', fr: '34 - Bordj Bou Arreridj', ar: '34 - برج بوعريريج' },
  { code: '35', fr: '35 - Boumerdès', ar: '35 - بومرداس' },
  { code: '36', fr: '36 - El Tarf', ar: '36 - الطارف' },
  { code: '37', fr: '37 - Tindouf', ar: '37 - تندوف' },
  { code: '38', fr: '38 - Tissemsilt', ar: '38 - تيسمسيلت' },
  { code: '39', fr: '39 - El Oued', ar: '39 - الوادي' },
  { code: '40', fr: '40 - Khenchela', ar: '40 - خنشلة' },
  { code: '41', fr: '41 - Souk Ahras', ar: '41 - سوق أهراس' },
  { code: '42', fr: '42 - Tipaza', ar: '42 - تيبازة' },
  { code: '43', fr: '43 - Mila', ar: '43 - ميلة' },
  { code: '44', fr: '44 - Aïn Defla', ar: '44 - عين الدفلى' },
  { code: '45', fr: '45 - Naâma', ar: '45 - النعامة' },
  { code: '46', fr: '46 - Aïn Témouchent', ar: '46 - عين تموشنت' },
  { code: '47', fr: '47 - Ghardaïa', ar: '47 - غرداية' },
  { code: '48', fr: '48 - Relizane', ar: '48 - غليزان' },
  { code: '49', fr: '49 - Timimoun', ar: '49 - تيميمون' },
  { code: '50', fr: '50 - Bordj Badji Mokhtar', ar: '50 - برج باجي مختار' },
  { code: '51', fr: '51 - Ouled Djellal', ar: '51 - أولاد جلال' },
  { code: '52', fr: '52 - Béni Abbès', ar: '52 - بني عباس' },
  { code: '53', fr: '53 - In Salah', ar: '53 - عين صالح' },
  { code: '54', fr: '54 - In Guezzam', ar: '54 - عين قزام' },
  { code: '55', fr: '55 - Touggourt', ar: '55 - تقرت' },
  { code: '56', fr: '56 - Djanet', ar: '56 - جانت' },
  { code: '57', fr: '57 - El M\'Ghair', ar: '57 - المغير' },
  { code: '58', fr: '58 - El Meniaa', ar: '58 - المنيعة' },
  { code: '59', fr: '59 - Aflou', ar: '59 - أفلو' },
  { code: '60', fr: '60 - Barika', ar: '60 - بريكة' },
  { code: '61', fr: '61 - Ksar Chellala', ar: '61 - قصر الشلالة' },
  { code: '62', fr: '62 - Messaad', ar: '62 - مسعد' },
  { code: '63', fr: '63 - Aïn Oussera', ar: '63 - عين وسارة' },
  { code: '64', fr: '64 - Boussaâda', ar: '64 - بوسعادة' },
  { code: '65', fr: '65 - El Eulma', ar: '65 - العلمة' },
  { code: '66', fr: '66 - Touggourt Sud', ar: '66 - تقرت الجنوبية' },
  { code: '67', fr: '67 - Bougtob', ar: '67 - بوقطب' },
  { code: '68', fr: '68 - El Abiodh Sidi Cheikh', ar: '68 - الأبيض سيدي الشيخ' },
  { code: '69', fr: '69 - Timiaouine', ar: '69 - تيمياوين' }
];

const INITIAL_LEDGER_ENTRIES = [
  {
    id: 'ATHAR-TRC-2026-0842',
    entity_name: 'Centre de Transfusion Sanguine · CHU Mustapha',
    entity_nameAr: 'مركز حقن الدم · المستشفى الجامعي مصطفى باشا',
    entity_type: 'Hôpital Public Universitaire',
    entity_typeAr: 'مستشفى عمومي جامعي',
    category: 'Don de Sang',
    categoryAr: 'تبرع بالدم',
    wilaya: 'Alger',
    wilayaAr: 'الجزائر العاصمة',
    date: '18 Septembre 2026',
    dateAr: '18 سبتمبر 2026',
    quantity_delivered: '140 poches homologuées',
    quantity_deliveredAr: '140 كيس دم معتمد ومفحوص',
    beneficiaries: 'Services Réanimation, Hématologie & Pédiatrie',
    beneficiariesAr: 'أقسام الإنعاش، أمراض الدم وطب الأطفال',
    hash: '0x8F9B24...91C3E4',
    verifier: 'Dr. A. Benali · Validation Médicale CTS',
    verifierAr: 'د. أ. بن علي · اعتماد طبي لمركز حقن الدم',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    notes: 'Campagne spéciale urgence jeunesse. 140 poches fractionnées en culots globulaires et plasma frais congelé.',
    notesAr: 'حملة استعجالية خاصة بالشباب. تم فرز 140 كيساً إلى كريات حمراء وبلازما طازجة مجمدة.'
  },
  {
    id: 'GHAYTH-TRC-2026-0839',
    entity_name: 'Association Green Future Algérie',
    entity_nameAr: 'جمعية المستقبل الأخضر الجزائر',
    entity_type: 'Association Écologique Nationale',
    entity_typeAr: 'جمعية بيئية وطنية معتمدة',
    category: 'Reforestation & Climat',
    categoryAr: 'تشجير ومناخ',
    wilaya: 'Alger (Zéralda)',
    wilayaAr: 'الجزائر (زرالدة)',
    date: '16 Septembre 2026',
    dateAr: '16 سبتمبر 2026',
    quantity_delivered: '450 arbres plantés & protégés',
    quantity_deliveredAr: '450 شجرة مغروسة ومحمية',
    beneficiaries: 'Forêt récréative de Zéralda & Écosystème littoral',
    beneficiariesAr: 'غابة الاستجمام بزرالدة والبيئة الساحلية',
    hash: '0x3C41D8...7A2E9F',
    verifier: 'Conservation des Forêts de la Wilaya d\'Alger',
    verifierAr: 'محافظة الغابات لولاية الجزائر',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    notes: 'Plants d\'arbres fournis par la pépinière nationale. Pose de tuteurs et arrosage de reprise validés.',
    notesAr: 'شجيرات وفرتها المشاتل الوطنية مع تثبيت الدعامات وسقي الانطلاق الميداني بنجاح.'
  },
  {
    id: 'GHAYTH-TRC-2026-0831',
    entity_name: 'Association El Baraka Algérie',
    entity_nameAr: 'جمعية البركة الجزائرية',
    entity_type: 'Organisation Humanitaire Agréée',
    entity_typeAr: 'منظمة إنسانية وطنية معتمدة',
    category: 'Aide Alimentaire & Dignité',
    categoryAr: 'مساعدات غذائية وتضامن',
    wilaya: 'Médéa',
    wilayaAr: 'المدية',
    date: '14 Septembre 2026',
    dateAr: '14 سبتمبر 2026',
    quantity_delivered: '250 couffins alimentaires complets',
    quantity_deliveredAr: '250 قفة غذائية متكاملة',
    beneficiaries: '250 familles vulnérables en zones d\'ombre',
    beneficiariesAr: '250 عائلة معوزة في مناطق الظل',
    hash: '0x99E2F1...11B0C5',
    verifier: 'Comité de Suivi Citoyen & Représentants Locaux',
    verifierAr: 'لجنة المتابعة المجتمعية والممثلين المحليين',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    notes: 'Colis contenant farine, huile, semoule, légumineuses et conserves. Remise directe aux chefs de famille.',
    notesAr: 'طرود تشتمل على الطحين، الزيت، السميد، البقوليات والمصبرات، سلمت مباشرة للعائلات.'
  },
  {
    id: 'GHAYTH-TRC-2026-0825',
    entity_name: 'Club Robotique & Tech USTHB',
    entity_nameAr: 'نادي الروبوتيك والتكنولوجيا باب الزوار USTHB',
    entity_type: 'Collectif Universitaire Bab Ezzouar',
    entity_typeAr: 'نادٍ جامعي علمي - باب الزوار',
    category: 'Éducation Jeunesse',
    categoryAr: 'تعليم وتكوين الشباب',
    wilaya: 'Alger',
    wilayaAr: 'الجزائر العاصمة',
    date: '12 Septembre 2026',
    dateAr: '12 سبتمبر 2026',
    quantity_delivered: '12 kits robotiques & 35 élèves formés',
    quantity_deliveredAr: '12 حقيبة روبوتية و35 تلميذاً مستفيداً',
    beneficiaries: 'Élèves du cycle moyen (Casbah d\'Alger)',
    beneficiariesAr: 'تلاميذ مرحلة التعليم المتوسط (قصبة الجزائر)',
    hash: '0x55B7C2...33D8A1',
    verifier: 'Direction de l\'Établissement Scolaire Émîr Abdelkader',
    verifierAr: 'إدارة متوسطة الأمير عبد القادر',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    notes: 'Matériel robotique financé par collecte solidaire tech. Logiciels open-source installés sur ordinateurs réhabilités.',
    notesAr: 'عتاد روبوتي ممول بمبادرة تضامنية رقمية وبرمجيات مفتوحة المصدر منصبة على أجهزة مجددة.'
  }
];

export default function TraceabilityLedger({ currentLang = 'fr', isAssociation = false, onToast }) {
  const isAr = currentLang === 'ar';
  const [entries, setEntries] = useState(INITIAL_LEDGER_ENTRIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('ALL');
  const [selectedProofModal, setSelectedProofModal] = useState(null);
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);

  // Formulaire nouvelle preuve (accessible aux associations)
  const [newTitle, setNewTitle] = useState('');
  const [newQty, setNewQty] = useState('');
  const [newBeneficiaries, setNewBeneficiaries] = useState('');
  const [newWilaya, setNewWilaya] = useState('Alger');
  const [newCategory, setNewCategory] = useState(isAr ? 'مساعدات غذائية وتضامن' : 'Aide Alimentaire & Dignité');
  const [newNotes, setNewNotes] = useState('');

  const filteredEntries = entries.filter(e => {
    const titleToSearch = (e.entity_name + ' ' + (e.entity_nameAr || '')).toLowerCase();
    const benefToSearch = (e.beneficiaries + ' ' + (e.beneficiariesAr || '')).toLowerCase();
    const catToSearch = (e.category + ' ' + (e.categoryAr || '')).toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchSearch = titleToSearch.includes(query) || benefToSearch.includes(query) || catToSearch.includes(query);
    const matchWilaya = selectedWilaya === 'ALL' || e.wilaya.toLowerCase().includes(selectedWilaya.toLowerCase()) || (e.wilayaAr && e.wilayaAr.includes(selectedWilaya));
    return matchSearch && matchWilaya;
  });

  const handleAddNewProof = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newQty.trim()) return;

    const newRecord = {
      id: `GHAYTH-TRC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      entity_name: newTitle,
      entity_nameAr: newTitle,
      entity_type: isAr ? 'منظمة معتمدة في منصة غيث' : 'Organisation Certifiée Ghayth',
      entity_typeAr: 'منظمة معتمدة في منصة غيث',
      category: newCategory,
      categoryAr: newCategory,
      wilaya: newWilaya,
      wilayaAr: newWilaya,
      date: isAr ? 'اليوم' : 'Aujourd\'hui',
      dateAr: 'اليوم',
      quantity_delivered: newQty,
      quantity_deliveredAr: newQty,
      beneficiaries: newBeneficiaries || (isAr ? 'مستفيدو المبادرة' : 'Bénéficiaires de la mission'),
      beneficiariesAr: newBeneficiaries || 'مستفيدو المبادرة',
      hash: `0x${Math.random().toString(16).slice(2, 10).toUpperCase()}...${Math.random().toString(16).slice(2, 8).toUpperCase()}`,
      verifier: isAr ? 'التحقق الرقمي الفوري لغيث' : 'Validation Numérique Instantanée Ghayth',
      verifierAr: 'التحقق الرقمي الفوري لغيث',
      status: 'VERIFIED',
      proof_image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
      notes: newNotes || (isAr ? 'عمل ميداني مسجل وموثق بنجاح.' : 'Action de terrain enregistrée et certifiée avec succès.'),
      notesAr: newNotes || 'عمل ميداني مسجل وموثق بنجاح.'
    };

    setEntries(prev => [newRecord, ...prev]);
    setIsAddEntryModalOpen(false);
    setNewTitle('');
    setNewQty('');
    setNewBeneficiaries('');
    setNewNotes('');
    if (onToast) onToast(isAr ? 'تم توثيق إثبات الأثر وإدراجه في السجل العام بنجاح!' : "Preuve d'impact certifiée et inscrite dans le registre public !");
  };

  return (
    <div className="traceability-ledger-wrapper" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      {/* BANNIÈRE STATISTIQUES GLOBALES DE TRAÇABILITÉ */}
      <div className="traceability-stats-grid">
        <div className="traceability-stat-card">
          <div className="trace-stat-num">{isAr ? '14 850 س' : '14 850 h'}</div>
          <div className="trace-stat-label">{isAr ? 'تطوع موثق ومؤكد' : 'Bénévolat certifié'}</div>
        </div>
        <div className="traceability-stat-card">
          <div className="trace-stat-num" style={{ color: '#b91c1c' }}>1 420</div>
          <div className="trace-stat-label">{isAr ? 'كيس دم متتبّع ومفحوص' : 'Poches de sang tracées'}</div>
        </div>
        <div className="traceability-stat-card">
          <div className="trace-stat-num" style={{ color: 'var(--primary-teal)' }}>18 500</div>
          <div className="trace-stat-label">{isAr ? 'شجرة مغروسة ومسجلة' : 'Arbres recensés'}</div>
        </div>
        <div className="traceability-stat-card">
          <div className="trace-stat-num" style={{ color: 'var(--accent-gold)' }}>32 000</div>
          <div className="trace-stat-label">{isAr ? 'طرد ومساعدة إنسانية موزعة' : 'Paniers & aides distribués'}</div>
        </div>
      </div>

      {/* EN-TÊTE DU REGISTRE AVEC RECHERCHE */}
      <div className="traceability-header-row">
        <div>
          <div className="traceability-badge-certified">
            <IconShield color="#006D5B" />
            <span>{isAr ? 'السجل الوطني المفتوح للشفافية والثقة' : 'REGISTRE PUBLIC DE CONFIANCE & TRANSPARENCE'}</span>
          </div>
          <h3 className="traceability-main-title">
            {isAr ? 'إثباتات الأثر وتتبع التبرعات الميدانية' : "Preuves d'impact & Traçabilité des dons"}
          </h3>
          <p className="traceability-main-desc">
            {isAr
              ? 'كل مبادرة ميدانية تنجزها الجمعيات، والمستشفيات، والجامعات مؤرشفة بملفات إثباتها، وأحجامها المعتمدة، وتوقيعات التحقق.'
              : 'Chaque action menée sur le terrain par les associations, universités et hôpitaux est archivée avec ses justificatifs, volumes et signatures de validation.'}
          </p>
        </div>

        {isAssociation && (
          <button
            type="button"
            className="btn btn-green"
            onClick={() => setIsAddEntryModalOpen(true)}
            style={{ borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>{isAr ? '+ توثيق مبادرة جديدة' : '+ Certifier une action'}</span>
          </button>
        )}
      </div>

      {/* BARRE DE RECHERCHE ET WILAYA */}
      <div className="traceability-filter-box">
        <div className="traceability-search-input-wrap">
          <span className="search-icon" style={{ display: 'flex', alignItems: 'center' }}>
            <IconSearch />
          </span>
          <input
            type="text"
            placeholder={isAr ? 'ابحث عن جمعية، ولاية، أو فئة مستفيدة...' : 'Rechercher une organisation, une cause ou un bénéficiaire...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="traceability-wilaya-select"
          value={selectedWilaya}
          onChange={(e) => setSelectedWilaya(e.target.value)}
        >
          <option value="ALL">{isAr ? 'جميع الولايات (69 ولاية)' : 'Toutes les wilayas (69 wilayas)'}</option>
          {WILAYAS_69.map(w => (
            <option key={w.code} value={w.fr.split(' - ')[1]}>
              {isAr ? w.ar : w.fr}
            </option>
          ))}
        </select>
      </div>

      {/* TABLEAU / CARTES DE TRAÇABILITÉ */}
      <div className="traceability-records-list">
        {filteredEntries.map(record => (
          <div key={record.id} className="traceability-record-card">
            <div className="trace-record-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span className="trace-id-badge">{record.id}</span>
                <span className="trace-date" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>{isAr ? (record.dateAr || record.date) : record.date}</span>
                  <span>·</span>
                  <IconMapPin />
                  <span>{isAr ? (record.wilayaAr || record.wilaya) : record.wilaya}</span>
                </span>
              </div>
              <div className="trace-status-pill">
                <span className="trace-dot-verified"></span>
                <span>{isAr ? 'ختم غيث موثّق' : 'Sceau Ghayth Vérifié'}</span>
              </div>
            </div>

            <div className="trace-record-content">
              <div className="trace-org-info">
                <h4>{isAr ? (record.entity_nameAr || record.entity_name) : record.entity_name}</h4>
                <div className="trace-org-type">
                  {isAr ? (record.entity_typeAr || record.entity_type) : record.entity_type} · <strong>{isAr ? (record.categoryAr || record.category) : record.category}</strong>
                </div>
              </div>

              <div className="trace-metrics-box">
                <div className="trace-metric-item">
                  <span className="trace-metric-label">{isAr ? 'الحجم الموثّق :' : 'Volume certifié :'}</span>
                  <strong className="trace-metric-value">{isAr ? (record.quantity_deliveredAr || record.quantity_delivered) : record.quantity_delivered}</strong>
                </div>
                <div className="trace-metric-item">
                  <span className="trace-metric-label">{isAr ? 'المستفيدون :' : 'Destinataires :'}</span>
                  <span className="trace-metric-benef">{isAr ? (record.beneficiariesAr || record.beneficiaries) : record.beneficiaries}</span>
                </div>
              </div>

              <div className="trace-verifier-info">
                <span>{isAr ? 'جهة الاعتماد :' : 'Validation :'} <strong>{isAr ? (record.verifierAr || record.verifier) : record.verifier}</strong></span>
                <code className="trace-hash-code">{record.hash}</code>
              </div>
            </div>

            <div className="trace-record-footer">
              <button
                type="button"
                className="btn-view-proof"
                onClick={() => setSelectedProofModal(record)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <IconFileText />
                <span>{isAr ? 'عرض ملف الإثبات والصور الميدانية' : 'Voir le dossier de preuve & photos'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL : DOSSIER DE PREUVE D'IMPACT DÉTAILLÉ */}
      {selectedProofModal && (
        <div className="modal on" role="dialog" aria-modal="true" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <div className="modal-bg" onClick={() => setSelectedProofModal(null)}></div>
          <div className="modal-card" style={{ maxWidth: '620px', borderRadius: '20px', padding: '26px' }}>
            <button className="modal-x" onClick={() => setSelectedProofModal(null)}>
              <IconClose />
            </button>

            <div style={{ textAlign: isAr ? 'right' : 'left', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', background: '#dcfce7', color: '#166534', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                  {isAr ? 'شهادة التوثيق والشفافية المجتمعية' : 'CERTIFICAT DE TRAÇABILITÉ CITOYENNE'}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedProofModal.id}</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-navy)', margin: '4px 0' }}>
                {isAr ? (selectedProofModal.entity_nameAr || selectedProofModal.entity_name) : selectedProofModal.entity_name}
              </h3>
              <div style={{ fontSize: '13px', color: '#64748b' }}>
                {isAr ? (selectedProofModal.categoryAr || selectedProofModal.category) : selectedProofModal.category} · {isAr ? (selectedProofModal.wilayaAr || selectedProofModal.wilaya) : selectedProofModal.wilaya} · {isAr ? (selectedProofModal.dateAr || selectedProofModal.date) : selectedProofModal.date}
              </div>
            </div>

            <div style={{ marginBottom: '16px', borderRadius: '14px', overflow: 'hidden', height: '230px', background: '#000' }}>
              <img
                src={selectedProofModal.proof_image}
                alt={selectedProofModal.entity_name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px 16px', marginBottom: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px', marginBottom: '10px' }}>
                <div><strong>{isAr ? 'الحجم المقدّم :' : 'Volume délivré :'}</strong> {isAr ? (selectedProofModal.quantity_deliveredAr || selectedProofModal.quantity_delivered) : selectedProofModal.quantity_delivered}</div>
                <div><strong>{isAr ? 'الحالة :' : 'Statut :'}</strong> {isAr ? 'موثق ومطابق بنسبة 100%' : '100% Vérifié & conforme'}</div>
                <div><strong>{isAr ? 'المستفيدون :' : 'Bénéficiaires :'}</strong> {isAr ? (selectedProofModal.beneficiariesAr || selectedProofModal.beneficiaries) : selectedProofModal.beneficiaries}</div>
                <div><strong>{isAr ? 'الاعتماد :' : 'Validé par :'}</strong> {isAr ? (selectedProofModal.verifierAr || selectedProofModal.verifier) : selectedProofModal.verifier}</div>
              </div>
              <div style={{ fontSize: '12.5px', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
                {isAr ? (selectedProofModal.notesAr || selectedProofModal.notes) : selectedProofModal.notes}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
              <div>{isAr ? 'الختم المشفّر :' : 'Sceau cryptographique :'} <code>{selectedProofModal.hash}</code></div>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSelectedProofModal(null)}
              >
                {isAr ? 'إغلاق' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL : CERTIFIER UNE NOUVELLE ACTION (ASSOCIATION) */}
      {isAddEntryModalOpen && (
        <div className="modal on" role="dialog" aria-modal="true" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <div className="modal-bg" onClick={() => setIsAddEntryModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '540px', borderRadius: '18px', padding: '24px' }}>
            <button className="modal-x" onClick={() => setIsAddEntryModalOpen(false)}>
              <IconClose />
            </button>

            <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 6px' }}>
              {isAr ? 'توثيق ونشر إثبات أثر ميداني' : "Publier une Preuve d'Impact Certifiée"}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>
              {isAr
                ? 'سجّل مبادرتك المنجزة في السجل العام لضمان أقصى درجات الشفافية للمتطوعين والداعمين.'
                : 'Inscrivez votre mission accomplie au registre public pour garantir une transparence absolue à vos bénévoles et donateurs.'}
            </p>

            <form onSubmit={handleAddNewProof}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  {isAr ? 'اسم الجمعية أو المؤسسة' : "Nom de l'organisation / Établissement"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? 'مثال: الهلال الأحمر الجزائري - لجنة الجزائر' : 'Ex: Croissant Rouge Algérien - Comité Alger'}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    {isAr ? 'الكمية / الحجم الموزّع' : 'Quantité / Volume aidé'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'مثال: 120 قفة / 80 كيس دم' : 'Ex: 120 couffins / 80 poches'}
                    value={newQty}
                    onChange={(e) => setNewQty(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    {isAr ? 'الولاية' : 'Wilaya'}
                  </label>
                  <select
                    value={newWilaya}
                    onChange={(e) => setNewWilaya(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', background: '#fff' }}
                  >
                    {WILAYAS_69.map(w => (
                      <option key={w.code} value={w.fr.split(' - ')[1]}>
                        {isAr ? w.ar : w.fr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  {isAr ? 'الجمهور المستفيد' : 'Public bénéficiaire'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? 'مثال: أطفال مرضى، عائلات معوزة...' : 'Ex: Enfants hospitalisés, familles démunies...'}
                  value={newBeneficiaries}
                  onChange={(e) => setNewBeneficiaries(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  {isAr ? 'ملاحظات وتفاصيل التتبع' : 'Notes & détails de traçabilité'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isAr ? 'تفاصيل التوزيع، وصول الاستلام، شهادات ميدانية...' : 'Détails du transport, bordereau de livraison, témoignage...'}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', resize: 'vertical' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setIsAddEntryModalOpen(false)}>
                  {isAr ? 'إلغاء' : 'Annuler'}
                </button>
                <button type="submit" className="btn btn-green" style={{ borderRadius: '9px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <IconShield color="#ffffff" />
                  <span>{isAr ? 'تسجيل في السجل العام' : 'Inscrire au Registre Public'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
