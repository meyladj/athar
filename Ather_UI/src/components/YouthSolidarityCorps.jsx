import React, { useState } from 'react';

// Les 8 Compétences Clés AtharPass (inspiré de Youthpass - European Solidarity Corps)
const ATHARPASS_COMPETENCES = [
  {
    id: 'citizenship',
    name: 'Citoyenneté & Engagement Civique',
    nameAr: 'المواطنة والمشاركة المدنية',
    icon: '🇩🇿',
    level: 95,
    desc: 'Compréhension active des enjeux sociétaux, défense du bien commun et solidarité intergénérationnelle.',
    acquiredThrough: 'Missions caritatives, maraudes hivernales et sensibilisation civique'
  },
  {
    id: 'teamwork',
    name: 'Leadership & Coopération d\'Équipe',
    nameAr: 'القيادة والعمل الجماعي',
    icon: '🤝',
    level: 88,
    desc: 'Capacité à fédérer, motiver et coordonner des bénévoles aux profils variés sous pression.',
    acquiredThrough: 'Coordination d\'équipe de 12 bénévoles sur le terrain'
  },
  {
    id: 'initiative',
    name: 'Sens de l\'Initiative & Gestion de Projet',
    nameAr: 'روح المبادرة وإدارة المشاريع',
    icon: '💡',
    level: 90,
    desc: 'Planification logistique, gestion des délais, anticipation des imprévus et recherche de solutions.',
    acquiredThrough: 'Organisation d\'une collecte de 400 paniers alimentaires'
  },
  {
    id: 'emergency',
    name: 'Résilience, Secourisme & Gestion de Crise',
    nameAr: 'الإسعافات الأولية وإدارة الأزمات',
    icon: '🚑',
    level: 82,
    desc: 'Sang-froid, maîtrise des gestes de premiers secours et réactivité immédiate face aux urgences.',
    acquiredThrough: 'Formation PSC1 avec le Croissant Rouge Algérien'
  },
  {
    id: 'multilingual',
    name: 'Communication Multilingue & Écoute Active',
    nameAr: 'التواصل متعدد اللغات والإصغاء',
    icon: '🗣️',
    level: 85,
    desc: 'Aisance relationnelle en Arabe (Darija/Fusha), Tamazight, Français et Anglais avec divers publics.',
    acquiredThrough: 'Accueil des familles et médiation interculturelle'
  },
  {
    id: 'digital',
    name: 'Compétence Numérique & Tech Citoyenne',
    nameAr: 'المهارات الرقمية والتكنولوجيا المدنية',
    icon: '📱',
    level: 92,
    desc: 'Collecte de données de terrain, traçabilité QR code, outils collaboratifs et communication d\'impact.',
    acquiredThrough: 'Gestion du registre public et géolocalisation des distributions'
  },
  {
    id: 'ecology',
    name: 'Transition Écologique & Climat',
    nameAr: 'الانتقال البيئي وحماية المناخ',
    icon: '🌲',
    level: 78,
    desc: 'Connaissance des techniques de reforestation, gestion des déchets et préservation des écosystèmes.',
    acquiredThrough: 'Campagne de reboisement du Barrage Vert à Zéralda'
  },
  {
    id: 'culture',
    name: 'Sensibilité Culturelle & Patrimoine',
    nameAr: 'الوعي الثقافي وصون التراث',
    icon: '🏛️',
    level: 80,
    desc: 'Respect et valorisation des savoir-faire artisanaux, de la mémoire collective et du patrimoine national.',
    acquiredThrough: 'Chantier de restauration participatif dans la Casbah'
  }
];

// Exemples de Projets de Solidarité Jeunesse portés par 5 jeunes (Solidarity Projects)
const INITIAL_SOLIDARITY_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Bibliothèque Nomade des Aurès',
    titleAr: 'المكتبة المتنقلة لجبال الأوراس',
    category: 'Éducation & Culture',
    wilaya: 'Batna & Khenchela',
    leadYouth: 'Yasmine Chaoui (21 ans, Étudiante)',
    teamSize: 5,
    teamMembers: ['Yasmine C.', 'Amine B.', 'Rachid M.', 'Selma K.', 'Walid T.'],
    mentorAssoc: 'Association Lire pour Demain',
    duration: '6 mois',
    budgetGranted: '180 000 DZD',
    status: 'EN COURS',
    description: 'Aménagement d\'une camionnette solidaire transportant plus de 800 livres jeunesse et ateliers d\'alphabétisation dans 8 villages isolés du massif des Aurès.',
    impactTarget: '1 200 enfants initiés à la lecture',
    supportersCount: 234
  },
  {
    id: 'proj-2',
    title: 'Pépinière Participative des Oasis du M\'Zab',
    titleAr: 'مشتلة الواحات التشاركية بوادي مزاب',
    category: 'Climat & Oasis',
    wilaya: 'Ghardaïa',
    leadYouth: 'Ayoub Baba (23 ans, Ingénieur Agronome)',
    teamSize: 6,
    teamMembers: ['Ayoub B.', 'Brahim F.', 'Nadjia S.', 'Karim H.', 'Omar D.', 'Leila T.'],
    mentorAssoc: 'Association Green Future',
    duration: '12 mois',
    budgetGranted: '250 000 DZD',
    status: 'EN COURS',
    description: 'Multiplication et sauvegarde des semences traditionnelles de palmiers dattiers et création d\'un système d\'irrigation goutte-à-goutte économe en eau dans la palmeraie.',
    impactTarget: '1 500 rejets de palmiers distribués aux agriculteurs',
    supportersCount: 312
  },
  {
    id: 'proj-3',
    title: 'Coding & Robotique pour Enfants Hospitalisés',
    titleAr: 'البرمجة والروبوتات للأطفال في المستشفيات',
    category: 'Santé & Tech',
    wilaya: 'Alger (Mustapha Pacha & Bab El Oued)',
    leadYouth: 'Mehdi Benamara (22 ans, Bénévolat USTHB)',
    teamSize: 5,
    teamMembers: ['Mehdi B.', 'Sarah M.', 'Farid O.', 'Amina K.', 'Ines L.'],
    mentorAssoc: 'Club Tech Jeunesse',
    duration: '4 mois',
    budgetGranted: '150 000 DZD',
    status: 'VALIDÉ',
    description: 'Ateliers hebdomadaires d\'initiation ludique au code et à la robotique Lego Mindstorms pour les enfants en long séjour au service pédiatrique.',
    impactTarget: '160 jeunes patients initiés et émerveillés',
    supportersCount: 189
  }
];

export default function YouthSolidarityCorps({ currentLang = 'fr', volunteerUser = null, onOpenLogin, onToast }) {
  const [activeTab, setActiveTab] = useState('tracks'); // 'tracks' | 'atharpass' | 'projects' | 'quality'
  const [projectsList, setProjectsList] = useState(INITIAL_SOLIDARITY_PROJECTS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isAtharPassModalOpen, setIsAtharPassModalOpen] = useState(false);

  // Formulaire nouveau projet de 5 jeunes
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjWilaya, setNewProjWilaya] = useState('Alger');
  const [newProjCategory, setNewProjCategory] = useState('Éducation & Culture');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjTarget, setNewProjTarget] = useState('');
  const [newProjMembers, setNewProjMembers] = useState('5 jeunes (dont vous)');

  // Soumission projet de solidarité
  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (!newProjTitle.trim() || !newProjDesc.trim()) {
      alert("Veuillez renseigner le titre et la description du projet.");
      return;
    }

    const created = {
      id: `proj-${Date.now()}`,
      title: newProjTitle,
      titleAr: newProjTitle,
      category: newProjCategory,
      wilaya: newProjWilaya,
      leadYouth: `${volunteerUser?.name || 'Nadia Mansouri'} (Porteuse de projet)`,
      teamSize: 5,
      teamMembers: [volunteerUser?.name || 'Nadia Mansouri', 'Membre 2', 'Membre 3', 'Membre 4', 'Membre 5'],
      mentorAssoc: 'Comité de Validation Athar & ONG Partenaire',
      duration: '6 mois',
      budgetGranted: 'En cours d\'instruction',
      status: 'EN REVUE',
      description: newProjDesc,
      impactTarget: newProjTarget || 'Impact citoyen direct dans la wilaya',
      supportersCount: 1
    };

    setProjectsList([created, ...projectsList]);
    setIsSubmitModalOpen(false);
    setNewProjTitle('');
    setNewProjDesc('');
    setNewProjTarget('');
    if (onToast) onToast("Votre Projet de Solidarité a été déposé avec succès ! Le comité Athar vous contactera sous 48h. 🎉");
  };

  // Soutenir un projet
  const handleSupportProject = (id) => {
    setProjectsList(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, supportersCount: p.supportersCount + 1, userSupported: true };
      }
      return p;
    }));
    if (onToast) onToast("Merci ! Votre soutien a été enregistré pour ce projet jeunesse.");
  };

  return (
    <div className="solidarity-corps-root">
      {/* 1. HERO BANNER INSPIRÉ DE YOUTH.EUROPA.EU */}
      <div className="corps-banner-hero">
        <div className="corps-badge-pill">
          <span>🇩🇿</span>
          <span>PROGRAMME NATIONAL JEUNESSE (18 – 35 ANS)</span>
          <span className="corps-eu-badge">Inspiré des standards du Corps Européen de Solidarité</span>
        </div>

        <h1 className="corps-title-main">
          {currentLang === 'ar'
            ? 'الفيلق الوطني للتضامن والعمل التطوعي للشباب الجزائري'
            : 'Le Corps Solidaire National de la Jeunesse Algérienne'}
        </h1>

        <p className="corps-subtitle-lead">
          {currentLang === 'ar'
            ? 'منصة وطنية شاملة تمنح الشباب بين 18 و35 عاماً فرصة قيادة مشاريع تضامنية، التطوع في الميدان، والحصول على جواز المهارات الرسمي أثر باس (AtharPass).'
            : 'Vous avez entre 18 et 35 ans ? Engagez-vous dans des missions d\'intérêt général, lancez votre propre projet solidaire en équipe de 5 jeunes, et valorisez vos compétences grâce au Passeport AtharPass.'}
        </p>

        {/* 3 ACTIONS CLÉS EN HAUT DE PAGE */}
        <div className="corps-stats-strip">
          <div className="corps-stat-item">
            <span className="stat-val">+14 500</span>
            <span className="stat-desc">Jeunes engagés (18-35 ans)</span>
          </div>
          <div className="corps-stat-item">
            <span className="stat-val">100%</span>
            <span className="stat-desc">Prise en charge & Assurance</span>
          </div>
          <div className="corps-stat-item">
            <span className="stat-val">8</span>
            <span className="stat-desc">Compétences clés certifiées AtharPass</span>
          </div>
          <div className="corps-stat-item">
            <span className="stat-val">69</span>
            <span className="stat-desc">Wilayas participantes</span>
          </div>
        </div>
      </div>

      {/* 2. ONGLETS PRINCIPAUX DU PROGRAMME */}
      <div className="corps-tabs-bar">
        <button
          className={`corps-tab-btn ${activeTab === 'tracks' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracks')}
        >
          <span>1. Les 3 Voies d'Engagement</span>
        </button>
        <button
          className={`corps-tab-btn ${activeTab === 'atharpass' ? 'active' : ''}`}
          onClick={() => setActiveTab('atharpass')}
        >
          <span>2. Passeport de Compétences (AtharPass)</span>
          <span className="tab-pill-highlight">Certifiant</span>
        </button>
        <button
          className={`corps-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <span>3. Projets Jeunesse (Initiative de 5 Jeunes)</span>
          <span className="tab-pill-count">{projectsList.length}</span>
        </button>
        <button
          className={`corps-tab-btn ${activeTab === 'quality' ? 'active' : ''}`}
          onClick={() => setActiveTab('quality')}
        >
          <span>4. Label Qualité & Charte du Bénévole</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* ONGLET 1 : LES 3 VOIES DU CORPS DE SOLIDARITÉ           */}
      {/* ======================================================== */}
      {activeTab === 'tracks' && (
        <div className="corps-tab-content">
          <div className="corps-section-head">
            <h2>Choisissez votre mode d'engagement civique</h2>
            <p>Le Corps Solidaire Athar propose trois parcours adaptés à vos disponibilités et à vos ambitions citoyennes.</p>
          </div>

          <div className="corps-tracks-grid">
            {/* Voie 1 : Volontariat individuel & équipe */}
            <div className="corps-track-card primary">
              <div className="track-icon-wrap">🤝</div>
              <span className="track-tag">Voie 1 · De 2 semaines à 12 mois</span>
              <h3>Missions de Volontariat Terrain</h3>
              <p>
                Rejoignez une association agréée ou une institution publique pour une mission à fort impact local : soutien scolaire, don du sang hospitalier, reforestation ou aide alimentaire.
              </p>
              <ul className="track-benefits-list">
                <li>✓ Couverture responsabilité civile complète</li>
                <li>✓ Repas et transport pris en charge</li>
                <li>✓ Accompagnement par un tuteur référent</li>
                <li>✓ Délivrance automatique de l'AtharPass</li>
              </ul>
              <button
                className="btn-track-action"
                onClick={() => {
                  const el = document.getElementById('missions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else if (onOpenLogin) onOpenLogin();
                }}
              >
                Explorer les missions ouvertes
              </button>
            </div>

            {/* Voie 2 : Projets de Solidarité (Groupe de 5 jeunes) */}
            <div className="corps-track-card highlight">
              <div className="track-icon-wrap">💡</div>
              <span className="track-tag gold">Voie 2 · Initiative Ascendante (Bottom-Up)</span>
              <h3>Projets de Solidarité Jeunesse</h3>
              <p>
                Vous avez une idée pour votre quartier ou votre wilaya ? Réunissez un groupe de <strong>5 jeunes (18-35 ans)</strong> et déposez votre projet. Athar vous accompagne pour le financer et le concrétiser !
              </p>
              <ul className="track-benefits-list">
                <li>✓ Porté à 100% par les jeunes pour leur communauté</li>
                <li>✓ Parrainage par une ONG agréée</li>
                <li>✓ Micro-subvention d'amorçage jusqu'à 300 000 DZD</li>
                <li>✓ Suivi d'impact et visibilité nationale</li>
              </ul>
              <button
                className="btn-track-action gold"
                onClick={() => setIsSubmitModalOpen(true)}
              >
                + Proposer un projet en équipe de 5
              </button>
            </div>

            {/* Voie 3 : Aide Humanitaire & Urgence */}
            <div className="corps-track-card danger">
              <div className="track-icon-wrap">🚑</div>
              <span className="track-tag red">Voie 3 · Mobilisation Rapide</span>
              <h3>Secourisme & Urgence Humanitaire</h3>
              <p>
                Intervenez lors de crises exceptionnelles : collecte de sang d'urgence en milieu hospitalier, appui lors des intempéries, canicules et incendies forestiers en coordination avec la Protection Civile.
              </p>
              <ul className="track-benefits-list">
                <li>✓ Formation accélérée aux gestes de premiers secours</li>
                <li>✓ Pass Donneur Numérique et badges d'urgence</li>
                <li>✓ Coordination directe avec les hôpitaux et le Croissant Rouge</li>
                <li>✓ Réserve civique d'intervention nationale</li>
              </ul>
              <button
                className="btn-track-action red"
                onClick={() => {
                  const el = document.getElementById('blood-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Rejoindre la réserve SOS Sang
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
                OUTIL OFFICIEL DE RECONNAISSANCE EUROPÉEN & ALGÉRIEN
              </span>
            </div>
            <h2>L'AtharPass : Valorisez vos compétences non-formelles</h2>
            <p>
              Inspiré de l'instrument <strong>Youthpass</strong> de la Commission Européenne, l'AtharPass est bien plus qu'une attestation : il certifie et traduit vos actions de bénévolat en <strong>compétences professionnelles concrètes</strong> reconnues par les recruteurs et les universités.
            </p>
          </div>

          <div className="atharpass-interactive-container">
            {/* Colonne de gauche : Grille des 8 Compétences Clés */}
            <div className="atharpass-skills-column">
              <div className="skills-header-row">
                <h3>Les 8 Compétences Clés Certifiées</h3>
                <span className="skills-sub">Cadre de référence de l'apprentissage non-formel</span>
              </div>

              <div className="skills-radar-list">
                {ATHARPASS_COMPETENCES.map((comp) => (
                  <div key={comp.id} className="skill-card-item">
                    <div className="skill-item-top">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{comp.icon}</span>
                        <div>
                          <strong className="skill-title-txt">{comp.name}</strong>
                          <small className="skill-arabic-txt">{comp.nameAr}</small>
                        </div>
                      </div>
                      <span className="skill-percentage-badge">{comp.level}%</span>
                    </div>

                    <p className="skill-desc-txt">{comp.desc}</p>

                    <div className="skill-progress-bar-bg">
                      <div className="skill-progress-bar-fill" style={{ width: `${comp.level}%` }}></div>
                    </div>

                    <div className="skill-proof-source">
                      <span>Preuve terrain :</span> {comp.acquiredThrough}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne de droite : Aperçu du Certificat Officiel AtharPass */}
            <div className="atharpass-preview-column">
              <div className="official-pass-paper">
                <div className="pass-watermark-top">
                  <div className="pass-republique">RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE</div>
                  <div className="pass-agency">AGENCE NATIONALE DU BÉNÉVOLAT & CORPS SOLIDAIRE ATHAR</div>
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

                <h3 className="pass-doc-title">PASSEPORT OFFICIEL DES COMPÉTENCES DU BÉNÉVOLE</h3>

                <div className="pass-holder-info">
                  <div>Titulaire : <strong>{volunteerUser?.name || 'Nadia Mansouri'}</strong></div>
                  <div>Wilaya : <strong>{volunteerUser?.wilaya || 'Alger'}</strong></div>
                  <div>Heures d'engagement certifiées : <strong>48 heures de terrain</strong></div>
                  <div>Période : <strong>Septembre 2026</strong></div>
                </div>

                <div className="pass-validation-text">
                  Le présent document certifie que le titulaire a participé avec assiduité et responsabilité aux missions du Corps Solidaire Athar, démontrant un niveau d'excellence dans le travail en équipe, la gestion d'urgence et l'initiative citoyenne.
                </div>

                <div className="pass-signatures-row">
                  <div className="pass-sign">
                    <small>Le Tuteur / Mentor</small>
                    <div className="sign-author">Dr. Amina Benali</div>
                    <div className="sign-stamp">✓ Signature Certifiée</div>
                  </div>
                  <div className="pass-sign">
                    <small>Commission Athar</small>
                    <div className="sign-author">Pr. Oussama Bellouze</div>
                    <div className="sign-stamp">✓ Sceau Numérique</div>
                  </div>
                </div>

                <button
                  className="btn-download-pass"
                  onClick={() => {
                    setIsAtharPassModalOpen(true);
                    if (onToast) onToast("Votre AtharPass officiel a été généré avec succès au format certifié ! 📄");
                  }}
                >
                  <span>Télécharger mon AtharPass officiel (PDF)</span>
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
              <h2>Projets de Solidarité Portés par la Jeunesse</h2>
              <p>
                Inspiré des <em>Solidarity Projects</em> du Corps Européen, ce dispositif permet à tout collectif d'au moins <strong>5 jeunes algériens</strong> de proposer, piloter et réaliser une action solidaire locale.
              </p>
            </div>
            <button
              className="btn-create-project-primary"
              onClick={() => setIsSubmitModalOpen(true)}
            >
              <span>+ Proposer notre projet (Groupe de 5)</span>
            </button>
          </div>

          <div className="projects-cards-grid">
            {projectsList.map((proj) => (
              <div key={proj.id} className="solidarity-project-card">
                <div className="proj-card-top">
                  <span className="proj-category-pill">{proj.category}</span>
                  <span className={`proj-status-pill ${proj.status === 'EN REVUE' ? 'pending' : ''}`}>
                    {proj.status}
                  </span>
                </div>

                <h3 className="proj-card-title">{proj.title}</h3>
                <div className="proj-wilaya-lead">
                  📍 <strong>{proj.wilaya}</strong> · Porté par {proj.leadYouth}
                </div>

                <p className="proj-desc-text">{proj.description}</p>

                <div className="proj-team-box">
                  <div className="proj-team-label">
                    <span>👥 Collectif de 5 jeunes :</span>
                    <strong>{proj.teamMembers.join(' · ')}</strong>
                  </div>
                  <div className="proj-mentor-label">
                    <span>🛡️ Organisation Marraine :</span>
                    <strong>{proj.mentorAssoc}</strong>
                  </div>
                </div>

                <div className="proj-impact-target">
                  🎯 <strong>Objectif d'impact :</strong> {proj.impactTarget}
                </div>

                <div className="proj-card-footer">
                  <div className="proj-support-count">
                    <strong>{proj.supportersCount}</strong> citoyens soutiennent ce projet
                  </div>
                  <button
                    className="btn-support-project"
                    onClick={() => handleSupportProject(proj.id)}
                  >
                    ❤️ Soutenir l'initiative
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
            <h2>Le Label Qualité Athar (Quality Label)</h2>
            <p>
              Comme dans le Corps Européen de Solidarité, toute structure d'accueil (association, ONG, hôpital, parc naturel) doit obtenir le <strong>Label Qualité Athar</strong> avant de mobiliser des jeunes.
            </p>
          </div>

          <div className="quality-principles-grid">
            <div className="quality-card">
              <span className="quality-icon">🛡️</span>
              <h3>1. Sécurité & Protection Totale</h3>
              <p>Chaque volontaire bénéficie d'une assurance civile, d'équipements de sécurité adaptés et d'un environnement bienveillant.</p>
            </div>

            <div className="quality-card">
              <span className="quality-icon">👨‍🏫</span>
              <h3>2. Mentorat & Tutorat Dédié</h3>
              <p>Un référent d'expérience accompagne le jeune tout au long de sa mission pour faciliter ses apprentissages et surmonter les obstacles.</p>
            </div>

            <div className="quality-card">
              <span className="quality-icon">🥗</span>
              <h3>3. Prise en Charge Digne</h3>
              <p>Aucun bénévole ne doit engager de frais personnels : hébergement, repas chauds et indemnités de transport sont garantis.</p>
            </div>

            <div className="quality-card">
              <span className="quality-icon">📜</span>
              <h3>4. Certification des Compétences</h3>
              <p>Délivrance obligatoire de l'AtharPass avec auto-évaluation réflexive pour enrichir le CV et l'avenir professionnel du jeune.</p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL : SOUMISSION D'UN PROJET DE 5 JEUNES               */}
      {/* ======================================================== */}
      {isSubmitModalOpen && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setIsSubmitModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '640px', padding: '30px' }}>
            <button className="modal-x" onClick={() => setIsSubmitModalOpen(false)}>✕</button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 12px', background: '#FEF3C7', color: '#92400E', borderRadius: '20px' }}>
                DISPOSITIF JEUNESSE 18-35 ANS
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)', margin: '8px 0 4px' }}>
                Déposer un Projet de Solidarité (Groupe de 5 jeunes)
              </h2>
              <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0 }}>
                Votre collectif portera ce projet en toute autonomie avec le soutien méthodologique et financier d'Athar.
              </p>
            </div>

            <form onSubmit={handleSubmitProject} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Titre du Projet Solidaire *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Caravane de lecture mobile dans le Djurdjura"
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Wilaya d'intervention *
                  </label>
                  <select
                    value={newProjWilaya}
                    onChange={(e) => setNewProjWilaya(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1' }}
                  >
                    {['Alger', 'Oran', 'Constantine', 'Blida', 'Batna', 'Ghardaïa', 'Tizi Ouzou', 'Béjaïa', 'Sétif', 'Tlemcen', 'Annaba'].map(w => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Thématique *
                  </label>
                  <select
                    value={newProjCategory}
                    onChange={(e) => setNewProjCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1' }}
                  >
                    <option value="Éducation & Culture">Éducation & Culture</option>
                    <option value="Climat & Oasis">Climat & Oasis</option>
                    <option value="Santé & Tech">Santé & Tech</option>
                    <option value="Solidarité & Dignité">Solidarité & Dignité</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Description de l'action & besoin communautaire *
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Quel problème local ce projet résout-il ? Que ferez-vous concrètement avec votre équipe ?"
                  value={newProjDesc}
                  onChange={(e) => setNewProjDesc(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '13.5px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Objectif chiffré d'impact *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. 500 arbres plantés, 200 enfants formés au secourisme..."
                  value={newProjTarget}
                  onChange={(e) => setNewProjTarget(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1' }}
                />
              </div>

              <div style={{ background: '#F0FDF4', padding: '12px 16px', borderRadius: '10px', border: '1px solid #BBF7D0', fontSize: '12.5px', color: '#166534' }}>
                ℹ️ <strong>Règle du Corps Solidaire :</strong> Vous devez être un collectif d'au moins 5 jeunes résidant en Algérie. Vous serez contactés sous 48h par l'équipe d'accompagnement.
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsSubmitModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-green"
                  style={{ fontWeight: 800, padding: '10px 22px' }}
                >
                  Soumettre le projet pour validation
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
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setIsAtharPassModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '680px', padding: '32px' }}>
            <button className="modal-x" onClick={() => setIsAtharPassModalOpen(false)}>✕</button>

            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary-teal)', paddingBottom: '16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '1px' }}>
                RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)', margin: '4px 0' }}>
                ATHARPASS · PASSEPORT OFFICIEL DU BÉNÉVOLE
              </h2>
              <div style={{ fontSize: '12.5px', color: 'var(--primary-teal)', fontWeight: 700 }}>
                Instrument National de Validation des Acquis de l'Engagement Civique
              </div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '16px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px' }}>
                <div>Bénévole : <strong>{volunteerUser?.name || 'Nadia Mansouri'}</strong></div>
                <div>Wilaya de référence : <strong>{volunteerUser?.wilaya || 'Alger'}</strong></div>
                <div>Identifiant unique : <strong>ATHARPASS-DZ-2026-8842</strong></div>
                <div>Validation officielle : <strong style={{ color: '#006D5B' }}>✓ Conforme aux standards Youthpass</strong></div>
              </div>
            </div>

            <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 10px' }}>
              Compétences Clés Certifiées par les Tuteurs :
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '22px' }}>
              {ATHARPASS_COMPETENCES.slice(0, 6).map(c => (
                <div key={c.id} style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#16234A' }}>{c.icon} {c.name}</span>
                    <strong style={{ color: '#006D5B', fontSize: '12.5px' }}>{c.level}%</strong>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                className="btn btn-green btn-lg"
                style={{ width: '100%', fontWeight: 800 }}
                onClick={() => {
                  alert("Attestation AtharPass officielle téléchargée en haute résolution avec sceau cryptographique QR !");
                  setIsAtharPassModalOpen(false);
                }}
              >
                📥 Télécharger le document PDF sécurisé avec QR Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
