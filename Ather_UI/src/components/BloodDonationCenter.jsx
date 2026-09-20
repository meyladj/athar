import React, { useState } from 'react';
import profileAvatarImg from '../assets/profile-nadia-avatar.png';
import bloodHeroDoctor from '../assets/blood-hero-doctor.png';
import hospitalMustapha from '../assets/hospital-mustapha.png';
import hospitalBabElOued from '../assets/hospital-bab-el-oued.png';
import hospitalBeniMessous from '../assets/hospital-beni-messous.png';
import hospitalOran from '../assets/hospital-oran.png';
import bloodSidebarQuote from '../assets/blood-sidebar-quote.png';

// SVG Icons
function IconDroplet({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  );
}

function IconPulse({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}

function IconMapPin({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
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

function IconPhone({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
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

function IconZap({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function IconArrowRight({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconHeart({ className = "w-3.5 h-3.5", fill = "#dc2626" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function IconCheck({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconAlertTriangle({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

function IconTarget({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

function IconClose({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function IconLightbulb({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </svg>
  );
}

function IconIdCard({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="14" x="3" y="5" rx="2"/>
      <circle cx="9" cy="11" r="2"/>
      <path d="M15 9h2"/>
      <path d="M15 13h2"/>
    </svg>
  );
}

// 4 Hôpitaux conformes à sang benev.png
const HOSPITAL_BLOOD_DEMANDS_FR = [
  {
    id: 'hosp-1',
    name: 'CHU Mustapha Pacha',
    service: 'Centre de Transfusion Sanguine (CTS Central)',
    wilaya: 'Alger',
    level: 'URGENCE CRITIQUE',
    urgentGroups: ['O-', 'O+', 'A-', 'B-'],
    reason: 'Réserve critique pour chirurgie cardio-vasculaire et urgences pédiatriques.',
    pochesCollected: 38,
    pochesTarget: 60,
    percentage: 63,
    hours: '08h00 – 19h30 (Continu)',
    phone: '023 23 45 01',
    donorsCount: 42,
    image: hospitalMustapha
  },
  {
    id: 'hosp-2',
    name: 'CHU Bab El Oued (Lamine Debaghine)',
    service: 'Service d\'Hémobiologie & Réanimation',
    wilaya: 'Alger',
    level: 'URGENCE CRITIQUE',
    urgentGroups: ['O-', 'AB-', 'A+'],
    reason: 'Besoin d\'urgence pour les nouveau-nés et les dialysés réguliers.',
    pochesCollected: 19,
    pochesTarget: 40,
    percentage: 48,
    hours: '08h30 – 18h00',
    phone: '021 96 05 05',
    donorsCount: 27,
    image: hospitalBabElOued
  },
  {
    id: 'hosp-3',
    name: 'EHS Beni Messous',
    service: 'Centre de Transfusion Sanguine',
    wilaya: 'Alger',
    level: 'URGENT',
    urgentGroups: ['A+', 'B+', 'O+'],
    reason: 'Besoin en prévision d\'interventions chirurgicales.',
    pochesCollected: 12,
    pochesTarget: 30,
    percentage: 40,
    hours: '08h00 – 16h00',
    phone: '023 24 78 90',
    donorsCount: 18,
    image: hospitalBeniMessous
  },
  {
    id: 'hosp-4',
    name: 'CHU Oran',
    service: 'Service de Transfusion Sanguine',
    wilaya: 'Oran',
    level: 'URGENT',
    urgentGroups: ['O-', 'O+', 'B+'],
    reason: 'Soutien urgent pour les patients en oncologie.',
    pochesCollected: 25,
    pochesTarget: 50,
    percentage: 50,
    hours: '08h00 – 18h00',
    phone: '041 25 11 22',
    donorsCount: 31,
    image: hospitalOran
  }
];

const HOSPITAL_BLOOD_DEMANDS_AR = [
  {
    id: 'hosp-1',
    name: 'المستشفى الجامعي مصطفى باشا',
    service: 'المركز الولائي لحقن الدم (CTS)',
    wilaya: 'الجزائر',
    level: 'نداء حرج للغاية',
    urgentGroups: ['O-', 'O+', 'A-', 'B-'],
    reason: 'احتياطي حيوي عاجل لجراحة القلب والأوعية الدموية وحالات الإنعاش للأطفال.',
    pochesCollected: 38,
    pochesTarget: 60,
    percentage: 63,
    hours: '08h00 – 19h30 (مستمر)',
    phone: '023 23 45 01',
    donorsCount: 42,
    image: hospitalMustapha
  },
  {
    id: 'hosp-2',
    name: 'المستشفى الجامعي باب الواد (الأمين دباغين)',
    service: 'مصلحة أمراض الدم والإنعاش الطبي',
    wilaya: 'الجزائر',
    level: 'نداء حرج للغاية',
    urgentGroups: ['O-', 'AB-', 'A+'],
    reason: 'احتياج عاجل للأطفال حديثي الولادة ومرضى تصفية الكلى المنتظمين.',
    pochesCollected: 19,
    pochesTarget: 40,
    percentage: 48,
    hours: '08h30 – 18h00',
    phone: '021 96 05 05',
    donorsCount: 27,
    image: hospitalBabElOued
  },
  {
    id: 'hosp-3',
    name: 'المؤسسة الاستشفائية المتخصصة بني مسوس',
    service: 'مركز حقن ونقل الدم',
    wilaya: 'الجزائر',
    level: 'نداء عاجل',
    urgentGroups: ['A+', 'B+', 'O+'],
    reason: 'احتياجات استباقية للعمليات الجراحية المبرمجة.',
    pochesCollected: 12,
    pochesTarget: 30,
    percentage: 40,
    hours: '08h00 – 16h00',
    phone: '023 24 78 90',
    donorsCount: 18,
    image: hospitalBeniMessous
  },
  {
    id: 'hosp-4',
    name: 'المستشفى الجامعي لوهران',
    service: 'مصلحة نقل وحقن الدم',
    wilaya: 'وهران',
    level: 'نداء عاجل',
    urgentGroups: ['O-', 'O+', 'B+'],
    reason: 'دعم مستعجل لمرضى قسم علاج الأورام والسرطان.',
    pochesCollected: 25,
    pochesTarget: 50,
    percentage: 50,
    hours: '08h00 – 18h00',
    phone: '041 25 11 22',
    donorsCount: 31,
    image: hospitalOran
  }
];

export default function BloodDonationCenter({ currentLang = 'fr', onOpenLogin, isVolunteer = true, volunteerUser = null, onToast }) {
  const isAr = currentLang === 'ar';
  const hospitalDemands = isAr ? HOSPITAL_BLOOD_DEMANDS_AR : HOSPITAL_BLOOD_DEMANDS_FR;

  const [selectedGroup, setSelectedGroup] = useState('Tous');
  const [selectedWilaya, setSelectedWilaya] = useState('all');
  const [selectedHospitalModal, setSelectedHospitalModal] = useState(null);
  const [pledgeConfirmed, setPledgeConfirmed] = useState(false);

  const bloodGroups = ['Tous', 'O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

  const filteredHospitals = hospitalDemands.filter(h => {
    if (selectedGroup !== 'Tous' && !h.urgentGroups.includes(selectedGroup)) return false;
    if (selectedWilaya !== 'all') {
      const matchWilaya = isAr ? (selectedWilaya === 'Alger' ? h.wilaya === 'الجزائر' : h.wilaya === 'وهران') : h.wilaya === selectedWilaya;
      if (!matchWilaya) return false;
    }
    return true;
  });

  const handlePledge = (hospital) => {
    setSelectedHospitalModal(hospital);
    setPledgeConfirmed(false);
  };

  const handleConfirmPledge = (e) => {
    e.preventDefault();
    setPledgeConfirmed(true);
    if (onToast) {
      onToast(isAr ? `تم تأكيد التزامك بالتبرع في ${selectedHospitalModal.name} بنجاح !` : `Votre engagement de don pour ${selectedHospitalModal.name} est confirmé !`);
    }
  };

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '50px' }} dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. HERO BANNER PRINCIPALE AVEC PHOTO DU MÉDECIN ET POCHE DE SANG */}
      <div 
        className="feed-welcome-banner"
        style={{
          background: 'linear-gradient(135deg, #edf9f6 0%, #e2f5f1 100%)',
          borderRadius: '20px',
          padding: '32px 38px',
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
          {/* BADGE URGENCE VITALE */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#b91c1c', fontWeight: 800, fontSize: '12px', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '8px' }}>
            <IconDroplet className="w-4 h-4 text-rose-600" />
            <span>{isAr ? 'حالة طوارئ وطنية قصوى' : 'URGENCE VITALE NATIONALE'}</span>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.2 }}>
            {isAr ? <>معاً،<br />ننقذ الأرواح</> : <>Ensemble,<br />on sauve des vies</>}
          </h1>

          <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 20px', lineHeight: 1.5, maxWidth: '440px' }}>
            {isAr
              ? 'مراكز حقن ونقل الدم بحاجة ماسة إلى كرمكم. تبرع لمدة ساعة قد ينقذ حياة 3 مرضى.'
              : 'Les centres de transfusion sanguine ont besoin de vous. Un don d\'1 heure peut sauver jusqu\'à 3 vies.'}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('demandes-urgentes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: '#dc2626',
                color: '#ffffff',
                border: 'none',
                padding: '11px 22px',
                borderRadius: '24px',
                fontSize: '13.5px',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)',
                transition: 'all 0.15s ease'
              }}
            >
              {isAr ? 'أريد التبرع بالدم' : 'Je veux donner mon sang'}
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('bon-a-savoir');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: '#ffffff',
                color: '#334155',
                border: '1px solid #cbd5e1',
                padding: '11px 20px',
                borderRadius: '24px',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {isAr ? 'كيف تجري العملية؟' : 'Comment ça marche ?'}
            </button>
          </div>

          <div style={{ marginTop: '22px' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, color: '#004d40' }}>
              {isAr ? 'سواعد مواطنة،' : 'Des citoyens,'}
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', fontWeight: 700, color: '#004d40', textDecoration: 'underline' }}>
              {isAr ? 'وأثر حقيقي.' : 'Un impact réel.'}
            </div>
          </div>
        </div>

        {/* PHOTO COUPÉE DU COLLAGE : MÉDECIN AVEC DRAPEAU ET POCHE DE SANG */}
        <div style={{ flex: '0 0 380px', position: 'relative' }}>
          <div style={{ width: '380px', height: '170px', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
            <img 
              src={bloodHeroDoctor} 
              alt={isAr ? "التبرع بالدم إنقاذ للحياة" : "Donner son sang c'est sauver des vies"}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* 2. FILTRE PAR GROUPE SANGUIN RECHERCHÉ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a', marginRight: '4px' }}>
          {isAr ? 'الفصيلة الدموية المطلوبة :' : 'Groupe sanguin recherché :'}
        </span>
        {bloodGroups.map(grp => {
          const isActive = selectedGroup === grp;
          const displayGrp = grp === 'Tous' ? (isAr ? 'الكل' : 'Tous') : grp;
          return (
            <button
              key={grp}
              type="button"
              onClick={() => setSelectedGroup(grp)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                border: isActive ? '1px solid #dc2626' : '1px solid #cbd5e1',
                background: isActive ? '#dc2626' : '#ffffff',
                color: isActive ? '#ffffff' : '#334155',
                transition: 'all 0.15s ease'
              }}
            >
              {displayGrp}
            </button>
          );
        })}
      </div>

      {/* 3. LIGNE DE FILTRE PAR WILAYA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>
            {isAr ? 'الولاية :' : 'Wilaya :'}
          </span>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <IconMapPin className="w-3.5 h-3.5 text-slate-400" style={{ position: 'absolute', [isAr ? 'right' : 'left']: '12px' }} />
            <select
              value={selectedWilaya}
              onChange={(e) => setSelectedWilaya(e.target.value)}
              style={{
                padding: isAr ? '7px 32px 7px 14px' : '7px 14px 7px 32px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                color: '#0f172a',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">{isAr ? 'كافة الولايات' : 'Toutes les wilayas'}</option>
              <option value="Alger">{isAr ? 'الجزائر العاصمة' : 'Alger'}</option>
              <option value="Oran">{isAr ? 'وهران' : 'Oran'}</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedGroup('Tous');
            setSelectedWilaya('all');
          }}
          style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer' }}
        >
          {isAr ? 'إعادة ضبط الفلاتر' : 'Effacer les filtres'}
        </button>
      </div>

      {/* 4. DISPOSITION 2 COLONNES */}
      <div id="demandes-urgentes" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 330px', gap: '26px', alignItems: 'start' }} className="blood-layout-grid">
        {/* COLONNE GAUCHE : DEMANDES URGENTES HOSPITALIÈRES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconPulse className="w-5 h-5 text-rose-600" />
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>
                {isAr ? 'نداءات عاجلة' : 'Demandes urgentes'}
              </h2>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                {isAr ? '12 طلباً' : '12 demandes'}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
              {isAr
                ? 'مرضى ومصابون ينتظرون كرمكم الإنساني. إليكم الاحتياجات الحالية للمراكز الاستشفائية.'
                : 'Des patients comptent sur votre générosité. Voici les besoins actuels des centres hospitaliers.'}
            </p>
          </div>

          {filteredHospitals.map(hosp => (
            <div
              key={hosp.id}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                display: 'flex',
                gap: '18px',
                alignItems: 'center'
              }}
            >
              {/* PHOTO HÔPITAL */}
              <div style={{ width: '130px', height: '130px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0 }}>
                <img 
                  src={hosp.image} 
                  alt={hosp.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CONTENU HÔPITAL */}
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {/* BADGE NIVEAU URGENCE + WILAYA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '14px',
                      background: '#fee2e2',
                      color: '#dc2626',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <IconZap className="w-3 h-3 text-rose-600" />
                    <span>{hosp.level}</span>
                  </span>

                  <span style={{ fontSize: '12px', color: '#dc2626', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <IconMapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{hosp.wilaya}</span>
                  </span>
                </div>

                {/* NOM & SERVICE */}
                <div>
                  <h3 style={{ margin: '0 0 2px', fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                    {hosp.name}
                  </h3>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    {hosp.service}
                  </div>
                </div>

                {/* GROUPES VITAUX DEMANDÉS */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                  <span style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>
                    {isAr ? 'الفصائل الحيوية المطلوبة :' : 'Groupes vitaux demandés :'}
                  </span>
                  {hosp.urgentGroups.map(grp => (
                    <span
                      key={grp}
                      style={{
                        padding: '1px 8px',
                        borderRadius: '12px',
                        border: '1px solid #fecaca',
                        background: '#fff1f2',
                        color: '#b91c1c',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}
                    >
                      <IconDroplet className="w-3 h-3 text-rose-600" />
                      <span>{grp}</span>
                    </span>
                  ))}
                </div>

                {/* RAISON */}
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                  {hosp.reason}
                </p>

                {/* JAUGE DE PROGRESSION ROUGE */}
                <div style={{ marginTop: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    <span>{hosp.pochesCollected} / {hosp.pochesTarget} {isAr ? 'كيس تم جمعه' : 'poches atteintes'}</span>
                    <strong style={{ color: '#0f172a' }}>{hosp.percentage}%</strong>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: `${hosp.percentage}%`, height: '100%', background: '#dc2626', borderRadius: '10px' }} />
                  </div>
                </div>

                {/* FOOTER DE CARTE : HEURES, TÉLÉPHONE, DONNEURS, BOUTON */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '11.5px', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconClock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{hosp.hours}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconPhone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{hosp.phone}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconUsers className="w-3.5 h-3.5 text-slate-400" />
                      <span>{hosp.donorsCount} {isAr ? 'متبرع مسجل' : 'donneurs engagés'}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePledge(hosp)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: '#e6f7f3',
                      color: '#006D5B',
                      border: 'none',
                      fontSize: '12.5px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      [isAr ? 'marginRight' : 'marginLeft']: 'auto'
                    }}
                  >
                    <span>{isAr ? 'عرض التفاصيل وحجز موعد' : 'Voir les détails'}</span>
                    <IconArrowRight className="w-3.5 h-3.5" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COLONNE DROITE : WIDGETS PROFIL, POURQUOI DONNER, BON À SAVOIR & PROMO */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* WIDGET 1 : MON PROFIL DONNEUR */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <IconUsers className="w-4 h-4 text-emerald-700" />
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                {isAr ? 'ملفي كمتبرع' : 'Mon profil donneur'}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img 
                src={profileAvatarImg} 
                alt={volunteerUser?.name || 'Nadia Mansouri'} 
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ margin: 0, fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>
                  {volunteerUser?.name || (isAr ? 'نادية منصوري' : 'Nadia Mansouri')}
                </h4>
                <span style={{ fontSize: '11.5px', color: '#006D5B', fontWeight: 700, background: '#e6f7f3', padding: '1px 8px', borderRadius: '12px' }}>
                  {isAr ? 'متبرع محتمل' : 'Donneur potentiel'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
              <span style={{ background: '#fee2e2', color: '#dc2626', padding: '2px 10px', borderRadius: '14px', fontSize: '13px', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <IconDroplet className="w-3.5 h-3.5 text-rose-600" />
                <span>A+</span>
              </span>
            </div>

            <div style={{ fontSize: '12.5px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{isAr ? 'الجزائر العاصمة، الجزائر' : 'Alger, Algérie'}</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconClock className="w-3.5 h-3.5 text-slate-400" />
                <span>{isAr ? 'آخر تبرع : 12 مارس 2024' : 'Dernier don : 12 mars 2024'}</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onToast) onToast(isAr ? "تم تحديث ملف المتبرع بنجاح !" : "Votre profil donneur est à jour !");
              }}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '20px',
                background: '#006D5B',
                color: '#ffffff',
                border: 'none',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                marginBottom: '14px'
              }}
            >
              {isAr ? 'تحديث بيانات المتبرع' : 'Mettre à jour mon profil'}
            </button>

            <div style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '6px', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
              <IconHeart className="w-4 h-4 text-rose-600" />
              <span>
                <strong>{isAr ? 'شكراً لالتزامك النبيل !' : 'Merci pour votre engagement !'}</strong> {isAr ? 'كل قطرة دم تنقذ نفساً.' : 'Chaque don compte.'}
              </span>
            </div>
          </div>

          {/* WIDGET 2 : POURQUOI DONNER ? */}
          <div 
            style={{
              background: '#fffbfb',
              borderRadius: '18px',
              border: '1px solid #fee2e2',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <IconHeart className="w-4 h-4 text-rose-600" />
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                {isAr ? 'لماذا نتبرع بالدم؟' : 'Pourquoi donner ?'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12.5px', color: '#334155' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <IconDroplet className="w-4 h-4 text-rose-600" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{isAr ? <>تبرع واحد يمكنه إنقاذ حياة <strong>3 أشخاص</strong>.</> : <>Un don peut sauver jusqu'à <strong>3 vies</strong>.</>}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <IconAlertTriangle className="w-4 h-4 text-amber-500" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{isAr ? <>إجراء <strong>آمن، سريع</strong> وتحت إشراف طبي متخصص.</> : <>C'est <strong>sûr, rapide</strong> et bien encadré.</>}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <IconTarget className="w-4 h-4 text-emerald-600" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{isAr ? 'الاحتياجات مستمرة وحرجة عبر كافة مستشفيات الجزائر.' : 'Les besoins sont constants dans toute l\'Algérie.'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <IconUsers className="w-4 h-4 text-blue-600" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{isAr ? 'تساهم بفعالية في مجتمع أكثر تكافلاً وتضامناً.' : 'Vous contribuez à une société plus solidaire.'}</span>
              </div>
            </div>
          </div>

          {/* WIDGET 3 : BON À SAVOIR */}
          <div 
            id="bon-a-savoir"
            style={{
              background: '#f0fdf9',
              borderRadius: '18px',
              border: '1px solid #ccfbf1',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <IconLightbulb className="w-4 h-4 text-emerald-600" />
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                {isAr ? 'معلومات وشروط هامة' : 'Bon à savoir'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: '#334155', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconUsers className="w-3.5 h-3.5 text-slate-500" />
                <span>{isAr ? 'السن بين 18 و 65 سنة' : 'Avoir entre 18 et 65 ans'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconPulse className="w-3.5 h-3.5 text-slate-500" />
                <span>{isAr ? 'التمتع بصحة جيدة' : 'Être en bonne santé'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconZap className="w-3.5 h-3.5 text-slate-500" />
                <span>{isAr ? 'الوزن أكثر من 50 كغ' : 'Peser plus de 50 kg'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconIdCard className="w-3.5 h-3.5 text-slate-500" />
                <span>{isAr ? 'إحضار بطاقة الهوية الوطنية' : 'Se munir d\'une pièce d\'identité'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconClock className="w-3.5 h-3.5 text-slate-500" />
                <span>{isAr ? 'عملية التبرع تستغرق قرابة ساعة' : 'Le don dure environ 1 heure'}</span>
              </div>
            </div>

            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: '#006D5B',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: 0
              }}
            >
              <span>{isAr ? 'عرض كافة الشروط والإرشادات' : 'Voir toutes les conditions'}</span>
              <IconArrowRight className="w-3 h-3" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }} />
            </button>
          </div>

          {/* WIDGET 4 : CARTE PROMO MAKAM DU BAS */}
          <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <img 
              src={bloodSidebarQuote} 
              alt={isAr ? "التضامن اليوم لأجل جزائر بصحة أفضل" : "Solidarité aujourd'hui pour une Algérie en meilleure santé"}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </aside>
      </div>

      {/* MODAL ENGAGEMENT DE DON / PASS DONNEUR */}
      {selectedHospitalModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(3px)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '28px', maxWidth: '480px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} dir={isAr ? 'rtl' : 'ltr'}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconDroplet className="w-5 h-5 text-rose-600" />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>
                  {isAr ? 'تأكيد الالتزام بالتبرع بالدم' : 'Engagement de don de sang'}
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setSelectedHospitalModal(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', alignItems: 'center' }}
                aria-label="Fermer"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            {!pledgeConfirmed ? (
              <form onSubmit={handleConfirmPledge} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ display: 'block', color: '#0f172a', fontSize: '14px' }}>{selectedHospitalModal.name}</strong>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedHospitalModal.service}</span>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    {isAr ? 'الاسم الكامل للمتبرع' : 'Votre nom complet'}
                  </label>
                  <input 
                    type="text" 
                    defaultValue={volunteerUser?.name || (isAr ? 'نادية منصوري' : 'Nadia Mansouri')} 
                    required 
                    style={{ width: '100%', padding: '9px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    {isAr ? 'فصيلة دمكم' : 'Votre groupe sanguin'}
                  </label>
                  <select 
                    defaultValue="A+"
                    style={{ width: '100%', padding: '9px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  >
                    {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    {isAr ? 'الموعد المتوقع للقدوم' : 'Date estimée de passage'}
                  </label>
                  <input 
                    type="date" 
                    defaultValue="2025-04-20"
                    style={{ width: '100%', padding: '9px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedHospitalModal(null)}
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', border: '1px solid #cbd5e1', background: '#ffffff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}
                  >
                    {isAr ? 'إلغاء' : 'Annuler'}
                  </button>
                  <button
                    type="submit"
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', border: 'none', background: '#dc2626', color: '#ffffff', fontWeight: 800, cursor: 'pointer' }}
                  >
                    {isAr ? 'تأكيد التبرع' : 'Confirmer mon don'}
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <IconCheck className="w-8 h-8" />
                </div>
                <h4 style={{ margin: '0 0 6px', fontSize: '17px', fontWeight: 900, color: '#0f172a' }}>
                  {isAr ? 'شكراً لصنيعكم الإنساني النبيل !' : 'Merci pour votre geste héroïque !'}
                </h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>
                  {isAr
                    ? `تم تسجيل التزامكم وإرساله إلى مركز حقن الدم في ${selectedHospitalModal.name}. يرجى التوجه مرفقين ببطاقة التعريف الوطنية.`
                    : `Votre engagement a été transmis au CTS de ${selectedHospitalModal.name}. Présentez-vous muni de votre pièce d'identité.`}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedHospitalModal(null)}
                  style={{ padding: '10px 24px', borderRadius: '20px', background: '#006D5B', color: '#ffffff', border: 'none', fontWeight: 800, cursor: 'pointer' }}
                >
                  {isAr ? 'إغلاق' : 'Fermer'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
