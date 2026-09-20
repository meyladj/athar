import React, { useState } from 'react';
import '../styles/association/settings.css';

// Clean SVG Icons (zero emojis)
function IconBuilding({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
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

function IconBell({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function IconShieldLock({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="1" />
      <path d="M12 12v3" />
    </svg>
  );
}

function IconSave({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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

export default function AssociationSettings({ currentLang = 'fr' }) {
  const isAr = currentLang === 'ar';
  const [activeSubTab, setActiveSubTab] = useState('identity'); // 'identity' | 'governance' | 'notifications' | 'security'
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state : Identity
  const [formData, setFormData] = useState({
    name: isAr ? 'الهلال الأحمر الجزائري' : 'Croissant Rouge Algérien',
    acronym: isAr ? 'هـ.أ.ج / CRA' : 'CRA',
    registrationNumber: 'AGR-1956-DZ-001',
    registrationDate: '1956-12-11',
    wilayaSiege: '16 Alger',
    address: isAr ? 'شارع محمد بلوزداد، الحامة، الجزائر العاصمة' : 'Rue Mohamed Belouizdad, Hamma, Alger',
    phone: '+213 (0) 21 67 89 00',
    email: 'contact@cra-algerie.org',
    website: 'https://www.cra.dz',
    bio: isAr
      ? 'جمعية إنسانية تطوعية وطنية مستقلة، ومساعدة للسلطات العمومية في المجال الإنساني. متواجدة عبر كافة ولايات الجزائر الـ 69 لإغاثة، علاج ورعاية الفئات الهشة والمحتاجة.'
      : 'Société nationale humanitaire indépendante, auxiliaire des pouvoirs publics dans le domaine humanitaire. Présente sur l\'ensemble des 69 wilayas d\'Algérie pour secourir, soigner et protéger les populations vulnérables.',
    category: isAr ? 'إنساني وإغاثة طوارئ' : 'Humanitaire & Secours d\'urgence'
  });

  // Form state : Notifications
  const [notifs, setNotifs] = useState({
    emailNewCandidature: true,
    smsUrgentAlert: true,
    emailWeeklyDigest: true,
    chatInstantPush: true,
    publicMissionReminders: true
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  return (
    <div className="assoc-settings-root" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. EN-TÊTE PARAMÈTRES */}
      <div className="assoc-settings-header">
        <div className="assoc-settings-header-left">
          <h1>{isAr ? 'إعدادات الجمعية' : "Paramètres de l'association"}</h1>
          <p>
            {isAr
              ? 'إدارة الهوية القانونية لمنظمتكم، بيانات الاتصال الرسمية، تركيبة المكتب التنفيذي وتفضيلات الإشعارات والتنبيهات.'
              : "Gérez l'identité légale de votre organisation, vos coordonnées officielles, la gouvernance de votre bureau et vos préférences d'alertes."}
          </p>
        </div>

        {savedSuccess && (
          <div className="assoc-settings-alert-success">
            <IconCheck className="w-4 h-4" />
            <span>{isAr ? 'تم حفظ التعديلات بنجاح' : 'Modifications enregistrées avec succès'}</span>
          </div>
        )}
      </div>

      {/* 2. ONGLETS DE PARAMÈTRES */}
      <div className="assoc-settings-tabs">
        <button
          type="button"
          className={`assoc-settings-tab-btn ${activeSubTab === 'identity' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('identity')}
        >
          <IconBuilding className="w-4 h-4" />
          <span>{isAr ? 'الهوية والاعتماد' : 'Identité & Coordonnées'}</span>
        </button>

        <button
          type="button"
          className={`assoc-settings-tab-btn ${activeSubTab === 'governance' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('governance')}
        >
          <IconUsers className="w-4 h-4" />
          <span>{isAr ? 'المكتب والمسؤولون' : 'Bureau & Responsables'}</span>
        </button>

        <button
          type="button"
          className={`assoc-settings-tab-btn ${activeSubTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('notifications')}
        >
          <IconBell className="w-4 h-4" />
          <span>{isAr ? 'الإشعارات والتنبيهات' : 'Notifications & Alertes'}</span>
        </button>

        <button
          type="button"
          className={`assoc-settings-tab-btn ${activeSubTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('security')}
        >
          <IconShieldLock className="w-4 h-4" />
          <span>{isAr ? 'الأمان والحساب' : 'Sécurité & Accès'}</span>
        </button>
      </div>

      {/* 3. CONTENU SELON LE SOUS-ONGLET */}
      <form onSubmit={handleSave}>
        {/* ================= SOUS-ONGLET 1 : IDENTITÉ ================= */}
        {activeSubTab === 'identity' && (
          <div className="assoc-settings-card">
            <div className="assoc-settings-card-header">
              <h2 className="assoc-settings-card-title">
                {isAr ? 'المعلومات الرسمية ورقم الاعتماد' : 'Informations officielles & Agrément'}
              </h2>
              <p className="assoc-settings-card-desc">
                {isAr
                  ? 'هذه المعلومات معتمدة ومتاحة للمتطوعين والشركاء الرسميين عبر منصة أثر.'
                  : 'Ces renseignements sont visibles par les bénévoles et les partenaires institutionnels sur Athar.'}
              </p>
            </div>

            <div className="assoc-settings-form-grid">
              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'التسمية الرسمية للجمعية *' : 'Dénomination officielle *'}</label>
                <input
                  type="text"
                  className="assoc-settings-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'الاسم المختصر / الرمز' : 'Sigle / Acronyme'}</label>
                <input
                  type="text"
                  className="assoc-settings-input"
                  value={formData.acronym}
                  onChange={(e) => setFormData({ ...formData, acronym: e.target.value })}
                />
              </div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'رقم الاعتماد الرسمي *' : "Numéro d'agrément officiel *"}</label>
                <input
                  type="text"
                  className="assoc-settings-input"
                  value={formData.registrationNumber}
                  onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                />
                <span className="assoc-settings-hint">
                  {isAr ? 'موثق ومعتمد من وزارة الداخلية والجماعات المحلية' : 'Certifié et validé par le Ministère de l\'Intérieur'}
                </span>
              </div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'ولاية المقر الرئيسي (69 ولاية)' : 'Wilaya de rattachement du siège (69 wilayas)'}</label>
                <select
                  className="assoc-settings-select"
                  value={formData.wilayaSiege}
                  onChange={(e) => setFormData({ ...formData, wilayaSiege: e.target.value })}
                >
                  {WILAYAS_LIST.map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'البريد الإلكتروني الرسمي *' : 'Email institutionnel *'}</label>
                <input
                  type="email"
                  className="assoc-settings-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'هاتف المداومة والاستقبال *' : 'Téléphone de permanence *'}</label>
                <input
                  type="text"
                  className="assoc-settings-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="assoc-settings-group full-width">
                <label className="assoc-settings-label">{isAr ? 'العنوان البريدي الكامل' : 'Adresse postale complète'}</label>
                <input
                  type="text"
                  className="assoc-settings-input"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="assoc-settings-group full-width">
                <label className="assoc-settings-label">{isAr ? 'الرسالة الإنسانية والنبذة الرسمية' : 'Mission officielle & Présentation'}</label>
                <textarea
                  rows="4"
                  className="assoc-settings-textarea"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>
            </div>

            <div className="assoc-settings-save-bar">
              <span style={{ fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                {isAr ? 'آخر مزامنة: اليوم على 11:30' : 'Dernière synchronisation : Aujourd\'hui à 11:30'}
              </span>
              <button type="submit" className="assoc-btn-save">
                <IconSave className="w-4 h-4" />
                <span>{isAr ? 'حفظ التعديلات' : 'Enregistrer les modifications'}</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= SOUS-ONGLET 2 : GOUVERNANCE ================= */}
        {activeSubTab === 'governance' && (
          <div className="assoc-settings-card">
            <div className="assoc-settings-card-header">
              <h2 className="assoc-settings-card-title">
                {isAr ? 'أعضاء المكتب التنفيذي' : 'Membres du bureau exécutif'}
              </h2>
              <p className="assoc-settings-card-desc">
                {isAr
                  ? 'الأشخاص المخولون قانونياً بإطلاق المبادرات الميدانية وتوقيع الاتفاقيات باسم الجمعية.'
                  : 'Personnes habilitées à engager l\'association et à valider les missions officielles.'}
              </p>
            </div>

            <div className="assoc-members-list">
              <div className="assoc-member-item">
                <div className="assoc-member-info">
                  <div className="assoc-member-avatar">IB</div>
                  <div>
                    <div className="assoc-member-name">{isAr ? 'د. ابتسام حملاوي' : 'Dr. Ibtissem Hamlaoui'}</div>
                    <div className="assoc-member-role">{isAr ? 'الرئيسة الوطنية' : 'Présidente nationale'}</div>
                  </div>
                </div>
                <span className="assoc-member-badge">{isAr ? 'مسؤول رئيسي' : 'Administrateur Principal'}</span>
              </div>

              <div className="assoc-member-item">
                <div className="assoc-member-info">
                  <div className="assoc-member-avatar" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>RB</div>
                  <div>
                    <div className="assoc-member-name">{isAr ? 'رشيد بن علي' : 'Rachid Benali'}</div>
                    <div className="assoc-member-role">{isAr ? 'الأمين العام' : 'Secrétaire Général'}</div>
                  </div>
                </div>
                <span className="assoc-member-badge">{isAr ? 'مسؤول تنفيذي' : 'Gestionnaire'}</span>
              </div>

              <div className="assoc-member-item">
                <div className="assoc-member-info">
                  <div className="assoc-member-avatar" style={{ backgroundColor: '#fef3c7', color: '#b45309' }}>ML</div>
                  <div>
                    <div className="assoc-member-name">{isAr ? 'منير العربي' : 'Mounir Larbi'}</div>
                    <div className="assoc-member-role">{isAr ? 'المنسق الوطني للعمل التطوعي' : 'Coordinateur National du Bénévolat'}</div>
                  </div>
                </div>
                <span className="assoc-member-badge">{isAr ? 'مشرف ميداني' : 'Superviseur Terrain'}</span>
              </div>
            </div>

            <div className="assoc-settings-save-bar">
              <span style={{ fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                {isAr ? '3 أعضاء مسجلين وموثقين' : '3 membres enregistrés'}
              </span>
              <button type="submit" className="assoc-btn-save">
                <IconSave className="w-4 h-4" />
                <span>{isAr ? 'تحديث صلاحيات المكتب' : 'Mettre à jour les accès'}</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= SOUS-ONGLET 3 : NOTIFICATIONS ================= */}
        {activeSubTab === 'notifications' && (
          <div className="assoc-settings-card">
            <div className="assoc-settings-card-header">
              <h2 className="assoc-settings-card-title">
                {isAr ? 'قنوات الإشعارات والتنبيهات' : 'Canaux d\'alertes & Notifications'}
              </h2>
              <p className="assoc-settings-card-desc">
                {isAr
                  ? 'تخصيص وتيرة الإشعارات المستلمة لمتابعة كافة مبادرات التطوع في حينها وبكل دقة.'
                  : 'Personnalisez la fréquence et les alertes reçues pour ne manquer aucune mobilisation citoyenne.'}
              </p>
            </div>

            <div>
              <div className="assoc-settings-toggle-row">
                <div className="assoc-settings-toggle-info">
                  <h4>{isAr ? 'إشعار فوري عند وصول طلب تطوع جديد' : 'Notification immédiate de candidature'}</h4>
                  <p>{isAr ? 'استلام بريد إلكتروني فوري بمجرد تقديم متطوع على إحدى المبادرات.' : 'Recevoir un email dès qu\'un bénévole postule à l\'une de vos missions.'}</p>
                </div>
                <label className="assoc-switch">
                  <input
                    type="checkbox"
                    checked={notifs.emailNewCandidature}
                    onChange={(e) => setNotifs({ ...notifs, emailNewCandidature: e.target.checked })}
                  />
                  <span className="assoc-slider"></span>
                </label>
              </div>

              <div className="assoc-settings-toggle-row">
                <div className="assoc-settings-toggle-info">
                  <h4>{isAr ? 'تنبيهات SMS لحالات الطوارئ والإغاثة الطبية' : 'Alertes SMS d\'urgence médicale & secours'}</h4>
                  <p>{isAr ? 'استلام رسائل نصية عاجلة للحاجة الماسة للدم أو في حالات الكوارث الطبيعية.' : 'Recevoir un SMS d\'alerte lors des besoins urgents en don de sang ou catastrophes naturelles.'}</p>
                </div>
                <label className="assoc-switch">
                  <input
                    type="checkbox"
                    checked={notifs.smsUrgentAlert}
                    onChange={(e) => setNotifs({ ...notifs, smsUrgentAlert: e.target.checked })}
                  />
                  <span className="assoc-slider"></span>
                </label>
              </div>

              <div className="assoc-settings-toggle-row">
                <div className="assoc-settings-toggle-info">
                  <h4>{isAr ? 'رسائل المحادثة الفورية مع المتطوعين' : 'Messages instantanés des bénévoles'}</h4>
                  <p>{isAr ? 'إظهار الشارة الحمراء واستلام تنبيهات الرسائل في مساحة المحادثة.' : 'Afficher le témoin rouge et recevoir les notifications des échanges dans la messagerie Athar.'}</p>
                </div>
                <label className="assoc-switch">
                  <input
                    type="checkbox"
                    checked={notifs.chatInstantPush}
                    onChange={(e) => setNotifs({ ...notifs, chatInstantPush: e.target.checked })}
                  />
                  <span className="assoc-slider"></span>
                </label>
              </div>

              <div className="assoc-settings-toggle-row">
                <div className="assoc-settings-toggle-info">
                  <h4>{isAr ? 'التقرير الأسبوعي لنشاط التطوع' : 'Rapport hebdomadaire de performance'}</h4>
                  <p>{isAr ? 'ملخص إحصائي يصلك كل يوم إثنين حول طلبات التطوع وساعات الإنجاز الميداني.' : 'Synthèse chiffrée chaque lundi sur les inscriptions, heures de bénévolat et retours de missions.'}</p>
                </div>
                <label className="assoc-switch">
                  <input
                    type="checkbox"
                    checked={notifs.emailWeeklyDigest}
                    onChange={(e) => setNotifs({ ...notifs, emailWeeklyDigest: e.target.checked })}
                  />
                  <span className="assoc-slider"></span>
                </label>
              </div>
            </div>

            <div className="assoc-settings-save-bar">
              <span style={{ fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                {isAr ? 'تحديث الإشعارات فوري ومباشر' : 'Notifications synchronisées en temps réel'}
              </span>
              <button type="submit" className="assoc-btn-save">
                <IconSave className="w-4 h-4" />
                <span>{isAr ? 'حفظ تفضيلات الإشعارات' : 'Sauvegarder les préférences'}</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= SOUS-ONGLET 4 : SÉCURITÉ ================= */}
        {activeSubTab === 'security' && (
          <div className="assoc-settings-card">
            <div className="assoc-settings-card-header">
              <h2 className="assoc-settings-card-title">
                {isAr ? 'أمان الحساب وتسجيل الدخول' : 'Sécurité du compte & Authentification'}
              </h2>
              <p className="assoc-settings-card-desc">
                {isAr
                  ? 'حماية البيانات الحساسة لجمعيتكم ومراسلاتكم الرسمية المشفرة.'
                  : 'Protégez les données sensibles de votre association et vos communications officielles.'}
              </p>
            </div>

            <div className="assoc-settings-form-grid">
              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'كلمة المرور الحالية' : 'Mot de passe actuel'}</label>
                <input
                  type="password"
                  className="assoc-settings-input"
                  placeholder="••••••••••••"
                />
              </div>

              <div></div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'كلمة المرور الجديدة' : 'Nouveau mot de passe'}</label>
                <input
                  type="password"
                  className="assoc-settings-input"
                  placeholder={isAr ? '10 أحرف على الأقل تتضمن أرقام ورموز' : 'Au moins 10 caractères avec chiffres et symboles'}
                />
              </div>

              <div className="assoc-settings-group">
                <label className="assoc-settings-label">{isAr ? 'تأكيد كلمة المرور الجديدة' : 'Confirmer le nouveau mot de passe'}</label>
                <input
                  type="password"
                  className="assoc-settings-input"
                  placeholder={isAr ? 'أعد إدخال كلمة المرور الجديدة' : 'Répétez le nouveau mot de passe'}
                />
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--assoc-bg-subtle)', padding: '16px 20px', borderRadius: '14px', border: '1px solid var(--assoc-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 700, color: 'var(--assoc-navy)' }}>
                    {isAr ? 'المصادقة الثنائية (2FA)' : 'Authentification à deux facteurs (2FA)'}
                  </h4>
                  <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                    {isAr
                      ? 'تأمين تسجيل الدخول برمز تأكيد يُرسل إلى التطبيق أو عبر رسالة SMS قصيرة.'
                      : 'Sécurisez l\'accès par code de confirmation envoyé sur l\'application ou par SMS.'}
                  </p>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--assoc-emerald)', backgroundColor: 'var(--assoc-emerald-light)', padding: '6px 12px', borderRadius: '8px' }}>
                  {isAr ? 'مفعّلة' : 'Activé'}
                </span>
              </div>
            </div>

            <div className="assoc-settings-save-bar">
              <span style={{ fontSize: '12.5px', color: 'var(--assoc-text-muted)' }}>
                {isAr ? 'آخر تحديث لكلمة المرور منذ 3 أشهر' : 'Dernière modification de mot de passe il y a 3 mois'}
              </span>
              <button type="submit" className="assoc-btn-save">
                <IconSave className="w-4 h-4" />
                <span>{isAr ? 'تحديث كلمة المرور' : 'Mettre à jour le mot de passe'}</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
