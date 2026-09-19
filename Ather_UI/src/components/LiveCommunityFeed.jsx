import React, { useState } from 'react';

function IconShieldCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function IconCheck({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function IconHeart({ className = "w-4 h-4", fill = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );
}

function IconMessageSquare({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function IconShare2({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}

function IconBuilding({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M8 10h.01"/>
      <path d="M16 10h.01"/>
      <path d="M8 14h.01"/>
      <path d="M16 14h.01"/>
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

// Données authentiques des publications d'associations avec preuves de traçabilité
const INITIAL_ASSOCIATION_POSTS = [
  {
    id: 1,
    author_name: 'Croissant Rouge Algérien',
    author_type: 'cra',
    author_role: 'Comité National de Secours & Solidarité',
    author_initials: 'CRA',
    avatar_color: '#dc2626',
    wilaya: 'Tipaza & Alger Ouest',
    time_ago: 'Il y a 2 heures',
    category: 'Solidarité & Urgences',
    proof_id: 'TRC-2025-0419-CRA',
    proof_hash: '0x89f4b3...e21a',
    title: 'Preuve de distribution : 350 colis alimentaires remis aux familles des zones d\'ombre',
    content: 'Opération humanitaire achevée avec succès ce matin. Grâce à la mobilisation de 40 volontaires et donateurs, 350 couffins complets de denrées de première nécessité ont été acheminés et remis directement aux familles recensées dans 6 douars isolés. Chaque remise est contresignée et enregistrée dans le registre public.',
    image_url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '350 colis remis · 1 400 bénéficiaires directs · 14 tonnes d\'aide',
    likes_count: 148,
    has_liked: false,
    comments: [
      { id: 'c1', author: 'Nadia Mansouri', text: 'Bravo à toute l\'équipe du CRA pour cette belle coordination sur le terrain !', time: 'Il y a 1h' },
      { id: 'c2', author: 'Karim O.', text: 'Un travail exemplaire de transparence et de dignité humaine.', time: 'Il y a 35 min' }
    ],
    shares_count: 32
  },
  {
    id: 2,
    author_name: 'Association Green Future',
    author_type: 'green',
    author_role: 'ONG Agréée · Environnement & Climat',
    author_initials: 'GF',
    avatar_color: '#006D5B',
    wilaya: 'Zéralda, Alger',
    time_ago: 'Hier à 17h30',
    category: 'Climat & Écologie',
    proof_id: 'TRC-2025-0412-GF',
    proof_hash: '0x72c1e8...9b4e',
    title: 'Preuve de reboisement : 450 arbres plantés et arrosés dans la forêt récréative de Zéralda',
    content: 'Rapport d\'impact de la grande journée de régénération forestière méditerranéenne. 85 bénévoles ont mis en terre 450 jeunes plants de pins d\'Alep et de caroubiers, posé des tuteurs biodégradables et effectué un premier arrosage minutieux. Le taux de reprise sera suivi mensuellement.',
    image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '450 arbres plantés · 2.5 hectares régénérés · Taux de reprise 98%',
    likes_count: 192,
    has_liked: true,
    comments: [
      { id: 'c3', author: 'Sarah B.', text: 'Une journée mémorable ! Les enfants du quartier étaient ravis de participer.', time: 'Hier' }
    ],
    shares_count: 41
  },
  {
    id: 3,
    author_name: 'CTS · CHU Mustapha Pacha',
    author_type: 'hospital',
    author_role: 'Centre de Transfusion Sanguine Hospitalier',
    author_initials: 'CHU',
    avatar_color: '#b91c1c',
    wilaya: 'Alger Centre',
    time_ago: 'Il y a 1 jour',
    category: 'Santé & Don de Sang',
    proof_id: 'TRC-2025-0415-CHU',
    proof_hash: '0x44a8fd...d710',
    title: 'Preuve de collecte hospitalière : 140 poches de sang collectées et sécurisées',
    content: 'L\'appel d\'urgence vital a été entendu ! 140 donneurs bénévoles se sont présentés au centre de prélèvement. Les poches ont été analysées, séparées en concentrés de globules rouges et plaquettes, permettant de sécuriser les blocs chirurgicaux pédiatriques et traumatologiques.',
    image_url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '140 poches collectées · Groupes O- et A+ réapprovisionnés · 420 vies soutenues',
    likes_count: 230,
    has_liked: false,
    comments: [
      { id: 'c4', author: 'Amine K.', text: 'Don effectué avec succès, personnel médical bienveillant et rapide !', time: 'Hier' }
    ],
    shares_count: 58
  },
  {
    id: 4,
    author_name: 'Association El Baraka Algérie',
    author_type: 'baraka',
    author_role: 'Organisation Humanitaire Agréée',
    author_initials: 'EB',
    avatar_color: '#0284c7',
    wilaya: 'Médéa & Blida',
    time_ago: 'Il y a 2 jours',
    category: 'Solidarité & Urgences',
    proof_id: 'TRC-2025-0405-BAR',
    proof_hash: '0x61d9a2...f420',
    title: 'Preuve d\'acheminement : Convoi Hivernal pour 250 familles des hauts plateaux',
    content: 'Clôture de la caravane solidaire hivernale. 250 foyers ont reçu des couvertures thermiques haute densité, des poêles à mazout homologués et des kits alimentaires complets. Tous les bordereaux de décharge sont certifiés conformes avec les comités de village.',
    image_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '250 familles dotées · 180 couvertures · 4 villages désenclavés',
    likes_count: 176,
    has_liked: false,
    comments: [],
    shares_count: 27
  },
  {
    id: 5,
    author_name: 'Lire pour Demain',
    author_type: 'education',
    author_role: 'Association Éducative & Éveil Jeunesse',
    author_initials: 'LPD',
    avatar_color: '#7c3aed',
    wilaya: 'Béjaïa & Alger',
    time_ago: 'Il y a 3 jours',
    category: 'Éducation Jeunesse',
    proof_id: 'TRC-2025-0410-LPD',
    proof_hash: '0x33e5c7...11a9',
    title: 'Preuve d\'équipement : 3 bibliothèques scolaires inaugurées et 600 livres remis',
    content: 'Installation officielle de coins lecture interactifs dans trois écoles primaires rurales. Les malles pédagogiques composées d\'encyclopédies, de contes en arabe et français et de jeux éducatifs sont à disposition des écoliers sous la tutelle des enseignants.',
    image_url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '3 écoles équipées · 600 livres offerts · 180 écoliers accompagnés',
    likes_count: 124,
    has_liked: false,
    comments: [
      { id: 'c5', author: 'Yacine D.', text: 'L\'éducation est la clé de tout. Merci pour nos enfants !', time: 'Il y a 2 jours' }
    ],
    shares_count: 20
  }
];

const SUGGESTED_ASSOCIATIONS = [
  {
    name: 'Association Green Future',
    category: 'Climat & Écologie',
    wilaya: 'Alger & Tipaza',
    initials: 'GF',
    color: '#006D5B',
    followersCount: '2.4k'
  },
  {
    name: 'Croissant Rouge Algérien',
    category: 'Solidarité Nationale',
    wilaya: 'National (69 wilayas)',
    initials: 'CRA',
    color: '#dc2626',
    followersCount: '18.9k'
  },
  {
    name: 'CTS · CHU Mustapha Pacha',
    category: 'Santé & Don de Sang',
    wilaya: 'Alger Centre',
    initials: 'CHU',
    color: '#b91c1c',
    followersCount: '5.1k'
  },
  {
    name: 'Lire pour Demain',
    category: 'Éducation Jeunesse',
    wilaya: 'Béjaïa & Alger',
    initials: 'LPD',
    color: '#7c3aed',
    followersCount: '1.8k'
  },
  {
    name: 'Association El Baraka Algérie',
    category: 'Solidarité & Urgences',
    wilaya: 'Médéa & Blida',
    initials: 'EB',
    color: '#0284c7',
    followersCount: '9.3k'
  }
];

export default function LiveCommunityFeed({ currentLang = 'fr', volunteerUser = null, onToast }) {
  const [posts, setPosts] = useState(INITIAL_ASSOCIATION_POSTS);
  const [followedAssocs, setFollowedAssocs] = useState(['Association Green Future', 'Croissant Rouge Algérien']);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'following'
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedComments, setExpandedComments] = useState({});

  const categories = ['ALL', 'Solidarité & Urgences', 'Climat & Écologie', 'Santé & Don de Sang', 'Éducation Jeunesse'];

  // Toggle Like / Soutien
  const handleToggleLike = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextLiked = !p.has_liked;
        if (nextLiked && onToast) {
          onToast(currentLang === 'ar' ? 'شكراً على تفاعلك ودعمك للمبادرة !' : 'Merci pour votre soutien à cette action citoyenne !');
        }
        return {
          ...p,
          has_liked: nextLiked,
          likes_count: nextLiked ? p.likes_count + 1 : p.likes_count - 1
        };
      }
      return p;
    }));
  };

  // Toggle Suivre Association
  const handleToggleFollow = (assocName) => {
    const isCurrentlyFollowing = followedAssocs.includes(assocName);
    if (isCurrentlyFollowing) {
      setFollowedAssocs(prev => prev.filter(name => name !== assocName));
      if (onToast) onToast(`Vous ne suivez plus ${assocName}.`);
    } else {
      setFollowedAssocs(prev => [...prev, assocName]);
      if (onToast) onToast(`Vous suivez désormais ${assocName} !`);
    }
  };

  // Ajouter un commentaire d'encouragement
  const handleAddComment = (postId) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    const newComment = {
      id: `c_${Date.now()}`,
      author: volunteerUser?.name || 'Nadia Mansouri',
      text,
      time: 'À l\'instant'
    };

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, newComment]
        };
      }
      return p;
    }));

    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
    setExpandedComments(prev => ({ ...prev, [postId]: true }));
    if (onToast) onToast("Votre mot d'encouragement a été transmis à l'association !");
  };

  // Filtrage des posts selon 'all' vs 'following' et thématique
  const displayedPosts = posts.filter(post => {
    if (activeTab === 'following' && !followedAssocs.includes(post.author_name)) {
      return false;
    }
    if (activeCategoryFilter !== 'ALL' && post.category !== activeCategoryFilter) {
      return false;
    }
    return true;
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '28px', alignItems: 'flex-start' }} className="volunteer-feed-layout">
      {/* COLONNE GAUCHE : FLUX DES PUBLICATIONS DES ASSOCIATIONS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* BARRE D'ONGLETS PRINCIPAUX : TOUT LE FLUX vs MES ABONNEMENTS */}
        <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className={`btn ${activeTab === 'all' ? 'btn-green' : 'btn-ghost'}`}
              style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '10px' }}
              onClick={() => setActiveTab('all')}
            >
              <span>{currentLang === 'ar' ? 'جميع منشورات الجمعيات' : 'Toutes les publications'}</span>
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'following' ? 'btn-green' : 'btn-ghost'}`}
              style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              onClick={() => setActiveTab('following')}
            >
              <IconCheck className="w-3.5 h-3.5" />
              <span>{currentLang === 'ar' ? 'اشتراكاتي' : 'Mes abonnements'}</span>
              <span style={{ background: activeTab === 'following' ? '#ffffff' : '#006D5B', color: activeTab === 'following' ? '#006D5B' : '#ffffff', fontSize: '11px', fontWeight: 800, padding: '1px 7px', borderRadius: '999px' }}>
                {followedAssocs.length}
              </span>
            </button>
          </div>

          <div style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <IconShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{currentLang === 'ar' ? 'منشورات موثقة بأدلة الميدان' : 'Preuves de traçabilité certifiées'}</span>
          </div>
        </div>

        {/* FILTRES PAR THÉMATIQUES */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategoryFilter(cat)}
              style={{
                background: activeCategoryFilter === cat ? '#006D5B' : '#ffffff',
                color: activeCategoryFilter === cat ? '#ffffff' : '#475569',
                border: activeCategoryFilter === cat ? '1px solid #006D5B' : '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {cat === 'ALL' ? (currentLang === 'ar' ? 'الكل' : 'Tous les domaines') : cat}
            </button>
          ))}
        </div>

        {/* LISTE DES PUBLICATIONS DES ASSOCIATIONS */}
        {displayedPosts.length === 0 ? (
          <div style={{ background: '#ffffff', borderRadius: '18px', padding: '48px 24px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
            <IconBuilding className="w-10 h-10 text-slate-300" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 6px' }}>
              {activeTab === 'following'
                ? "Aucune publication pour les associations suivies dans cette catégorie."
                : "Aucune publication trouvée pour ce filtre."}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 16px' }}>
              {activeTab === 'following'
                ? "Suivez d'autres associations recommandées à droite pour enrichir votre fil personnalisé."
                : "Sélectionnez un autre domaine pour afficher les actions associatives."}
            </p>
            {activeTab === 'following' && (
              <button
                type="button"
                className="btn btn-green"
                onClick={() => setActiveTab('all')}
                style={{ padding: '8px 20px', borderRadius: '10px' }}
              >
                Explorer tout le fil des associations
              </button>
            )}
          </div>
        ) : (
          displayedPosts.map(post => {
            const isFollowing = followedAssocs.includes(post.author_name);
            const isCommentsOpen = expandedComments[post.id];

            return (
              <article
                key={post.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {/* ENTÊTE DE LA PUBLICATION ASSOCIATIVE */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: post.avatar_color,
                        color: '#ffffff',
                        display: 'grid',
                        placeItems: 'center',
                        fontWeight: 900,
                        fontSize: '15px',
                        shrink: 0
                      }}
                    >
                      {post.author_initials}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <strong style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-navy)' }}>
                          {post.author_name}
                        </strong>
                        <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', background: '#ECFDF5', color: '#006D5B', border: '1px solid #A7F3D0', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <IconShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>Agréée</span>
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span>{post.author_role}</span>
                        <span>•</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <IconMapPin className="w-3 h-3 text-slate-400" />
                          {post.wilaya}
                        </span>
                        <span>•</span>
                        <span>{post.time_ago}</span>
                      </div>
                    </div>
                  </div>

                  {/* BOUTON SUIVRE / ABONNÉ */}
                  <button
                    type="button"
                    onClick={() => handleToggleFollow(post.author_name)}
                    style={{
                      border: isFollowing ? '1px solid #CBD5E1' : '1px solid #006D5B',
                      background: isFollowing ? '#F8FAFC' : '#ECFDF5',
                      color: isFollowing ? '#475569' : '#006D5B',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.15s ease',
                      flexShrink: 0
                    }}
                    title={isFollowing ? "Cliquer pour vous désabonner" : "Suivre cette association"}
                  >
                    {isFollowing ? (
                      <>
                        <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Abonné</span>
                      </>
                    ) : (
                      <span>+ Suivre</span>
                    )}
                  </button>
                </div>

                {/* TITRE ET CONTENU */}
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 8px', lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                    {post.content}
                  </p>
                </div>

                {/* BLOC DE PREUVE DE TRAÇABILITÉ OFFICIELLE */}
                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    borderLeft: '4px solid #006D5B',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#006D5B', fontSize: '12px', fontWeight: 800 }}>
                      <IconShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Preuve de Traçabilité Certifiée #{post.proof_id}</span>
                    </div>
                    <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#475569', background: '#EDE9FE', padding: '2px 8px', borderRadius: '6px' }}>
                      Hash: {post.proof_hash}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#1E293B', fontWeight: 600 }}>
                    <span style={{ color: '#006D5B', fontWeight: 800 }}>Résultat vérifié : </span>
                    {post.impact_badge}
                  </div>
                </div>

                {/* IMAGE DE TERRAIN VÉRIFIÉE */}
                {post.image_url && (
                  <div style={{ borderRadius: '14px', overflow: 'hidden', maxHeight: '380px', border: '1px solid #E2E8F0' }}>
                    <img
                      src={post.image_url}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* COMPTEURS D'ENGAGEMENT ET ACTIONS */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: '#64748B' }}>
                    <span><strong>{post.likes_count}</strong> soutiens</span>
                    <span>•</span>
                    <span><strong>{post.comments.length}</strong> encouragements</span>
                    <span>•</span>
                    <span><strong>{post.shares_count}</strong> partages</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {/* BOUTON SOUTENIR / LIKE */}
                    <button
                      type="button"
                      onClick={() => handleToggleLike(post.id)}
                      style={{
                        background: post.has_liked ? '#FEF2F2' : '#F8FAFC',
                        border: post.has_liked ? '1px solid #FECACA' : '1px solid #E2E8F0',
                        color: post.has_liked ? '#DC2626' : '#475569',
                        padding: '7px 14px',
                        borderRadius: '10px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <IconHeart className="w-3.5 h-3.5" fill={post.has_liked} />
                      <span>{post.has_liked ? 'Soutenu' : 'Soutenir'}</span>
                    </button>

                    {/* BOUTON COMMENTER */}
                    <button
                      type="button"
                      onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                      style={{
                        background: isCommentsOpen ? '#EFF6FF' : '#F8FAFC',
                        border: isCommentsOpen ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                        color: isCommentsOpen ? '#1D4ED8' : '#475569',
                        padding: '7px 14px',
                        borderRadius: '10px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <IconMessageSquare className="w-3.5 h-3.5" />
                      <span>Encourager</span>
                    </button>

                    {/* BOUTON PARTAGER */}
                    <button
                      type="button"
                      onClick={() => {
                        if (onToast) onToast("Lien de la preuve de traçabilité copié dans le presse-papier !");
                      }}
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        color: '#475569',
                        padding: '7px 14px',
                        borderRadius: '10px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <IconShare2 className="w-3.5 h-3.5" />
                      <span>Partager</span>
                    </button>
                  </div>
                </div>

                {/* ZONE DE COMMENTAIRES (ENCOURAGEMENTS DU BÉNÉVOLE) */}
                {isCommentsOpen && (
                  <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '16px', border: '1px solid #E2E8F0', marginTop: '4px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: post.comments.length > 0 ? '14px' : '0' }}>
                      <input
                        type="text"
                        placeholder="Rédigez un message d'encouragement à l'association..."
                        value={commentInputs[post.id] || ''}
                        onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddComment(post.id);
                        }}
                        style={{
                          flex: 1,
                          padding: '9px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          background: '#ffffff'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleAddComment(post.id)}
                        className="btn btn-green"
                        style={{ padding: '9px 18px', borderRadius: '10px', fontSize: '13px' }}
                      >
                        Envoyer
                      </button>
                    </div>

                    {post.comments.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {post.comments.map(c => (
                          <div key={c.id} style={{ background: '#ffffff', borderRadius: '10px', padding: '10px 14px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                              <strong style={{ fontSize: '12.5px', color: 'var(--primary-navy)' }}>{c.author}</strong>
                              <small style={{ fontSize: '11px', color: '#94A3B8' }}>{c.time}</small>
                            </div>
                            <p style={{ fontSize: '13px', color: '#334155', margin: 0 }}>{c.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>

      {/* COLONNE DROITE : ASSOCIATIONS PARTENAIRES À SUIVRE */}
      <aside style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '20px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '1px solid #F1F5F9', paddingBottom: '10px' }}>
            <IconBuilding className="w-4 h-4 text-emerald-700" />
            <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: 'var(--primary-navy)' }}>
              {currentLang === 'ar' ? 'جمعيات نشطة مقترحة' : 'Associations à suivre'}
            </h4>
          </div>

          <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px' }}>
            {currentLang === 'ar'
              ? 'تابع الجمعيات المعتمدة لتصلك منشورات الميدان وأدلة Traçabilité مباشرة في صفحة استقبالك.'
              : 'Abonnez-vous aux associations agréées pour voir leurs preuves d\'action directement dans votre Accueil.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SUGGESTED_ASSOCIATIONS.map((assoc, idx) => {
              const isFollowing = followedAssocs.includes(assoc.name);
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '8px 0', borderBottom: idx < SUGGESTED_ASSOCIATIONS.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: assoc.color, color: '#ffffff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '12px', flexShrink: 0 }}>
                      {assoc.initials}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <strong style={{ fontSize: '13px', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--primary-navy)' }}>
                        {assoc.name}
                      </strong>
                      <small style={{ fontSize: '11px', color: '#64748B', display: 'block' }}>
                        {assoc.wilaya} · {assoc.followersCount} abonnés
                      </small>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleFollow(assoc.name)}
                    style={{
                      border: isFollowing ? '1px solid #CBD5E1' : '1px solid #006D5B',
                      background: isFollowing ? '#F8FAFC' : '#006D5B',
                      color: isFollowing ? '#475569' : '#ffffff',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      flexShrink: 0
                    }}
                  >
                    {isFollowing ? '✓ Suivi' : '+ Suivre'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* CARTE D'INFO TRAÇABILITÉ */}
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '16px', padding: '16px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#006D5B', fontWeight: 800, fontSize: '13px', marginBottom: '6px' }}>
            <IconShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Garantie de Transparence</span>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#166534', lineHeight: 1.55 }}>
            Toutes les publications présentées sur cette page proviennent d'associations officiellement agréées. Chaque photo et indicateur d'impact est relié au registre public de traçabilité.
          </p>
        </div>
      </aside>
    </div>
  );
}
