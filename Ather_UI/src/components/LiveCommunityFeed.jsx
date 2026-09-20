import React, { useState } from 'react';
import profileBannerAlgiers from '../assets/profile-banner-algiers.png';
import profileNadiaAvatar from '../assets/profile-nadia-avatar.png';
import feedCraImg from '../assets/feed-cra-distribution.png';
import feedSproutImg from '../assets/candidature-reboisement.png';
import feedCoastPlantingImg from '../assets/feed-plantation-coastal.png';
import feedSangImg from '../assets/candidature-sang.png';
import feedLectureImg from '../assets/candidature-lecture.png';
import assocCraLogo from '../assets/assoc-cra-logo.png';

function IconCheckVerified({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#006D5B">
      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function IconHeart({ className = "w-4 h-4", fill = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill ? "#ef4444" : "none"} stroke={fill ? "#ef4444" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

function IconMoreHorizontal({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="1.8"/>
      <circle cx="19" cy="12" r="1.8"/>
      <circle cx="5" cy="12" r="1.8"/>
    </svg>
  );
}

function IconLeaf({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function IconBookOpen({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function IconHash({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9"/>
      <line x1="4" y1="15" x2="20" y2="15"/>
      <line x1="10" y1="3" x2="8" y2="21"/>
      <line x1="16" y1="3" x2="14" y2="21"/>
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

export default function LiveCommunityFeed({ currentLang = 'fr', volunteerUser = null, onToast }) {
  // Liste des publications conformes à feed benev .png
  const [posts, setPosts] = useState([
    {
      id: 'cra-1',
      author: 'Croissant Rouge Algérien',
      initials: 'CRA',
      avatarBg: '#ffffff',
      avatarType: 'image',
      avatarImg: assocCraLogo,
      location: 'Alger',
      time: 'il y a 2 heures',
      content: '350 colis alimentaires distribués aux familles dans le besoin ce week-end. Merci à tous les bénévoles pour leur engagement !',
      images: [feedCraImg],
      likes: 128,
      commentsCount: 24,
      isLiked: false,
      isFollowing: false,
      comments: []
    },
    {
      id: 'gf-2',
      author: 'Green Future',
      initials: 'GF',
      avatarBg: '#1b5e20',
      avatarType: 'leaf',
      location: 'Zéralda, Alger',
      time: 'il y a 1 jour',
      content: 'Une nouvelle journée de plantation à Zéralda 🌱 Merci aux 40 bénévoles présents !',
      images: [feedSproutImg, feedCoastPlantingImg],
      isGrid: true,
      likes: 96,
      commentsCount: 12,
      isLiked: false,
      isFollowing: false,
      comments: []
    },
    {
      id: 'chu-3',
      author: 'CHU Mustapha',
      initials: 'CHU',
      avatarBg: '#1565c0',
      avatarType: 'text',
      location: 'Alger',
      time: 'il y a 2 jours',
      content: 'Collecte de sang réussie ce samedi au CHU Mustapha. Merci à tous les donneurs ! Votre geste sauve des vies. ❤️',
      images: [feedSangImg],
      likes: 210,
      commentsCount: 28,
      isLiked: false,
      isFollowing: false,
      comments: []
    },
    {
      id: 'lpd-4',
      author: 'Lire pour Demain',
      initials: 'LPD',
      avatarBg: '#00838f',
      avatarType: 'book',
      location: 'Hydra, Alger',
      time: 'il y a 3 jours',
      content: 'Atelier de lecture et éveil artistique avec les enfants. Des sourires qui inspirent !',
      images: [feedLectureImg],
      likes: 74,
      commentsCount: 9,
      isLiked: false,
      isFollowing: false,
      comments: []
    }
  ]);

  // État des associations suggérées
  const [suggestedAssocs, setSuggestedAssocs] = useState([
    { id: 1, name: 'Croissant Rouge Algérien', category: 'Humanitaire', logoImg: assocCraLogo, bg: '#ffffff', isFollowing: false },
    { id: 2, name: 'Green Future', category: 'Environnement', isLeaf: true, bg: '#1b5e20', isFollowing: false },
    { id: 3, name: 'Lire pour Demain', category: 'Éducation', isBook: true, bg: '#00838f', isFollowing: false },
    { id: 4, name: 'Association El Baraka', category: 'Solidarité', badge: 'EB', bg: '#5e35b1', isFollowing: false },
    { id: 5, name: 'Club Vert USTHB', category: 'Jeunesse', isLeaf: true, bg: '#2e7d32', isFollowing: false }
  ]);

  const [commentInputs, setCommentInputs] = useState({});

  const handleToggleLike = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextLiked = !p.isLiked;
        return {
          ...p,
          isLiked: nextLiked,
          likes: nextLiked ? p.likes + 1 : p.likes - 1
        };
      }
      return p;
    }));
  };

  const handleToggleFollowPost = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextFollow = !p.isFollowing;
        if (onToast) {
          onToast(nextFollow ? `Vous suivez désormais ${p.author}` : `Vous ne suivez plus ${p.author}`);
        }
        return { ...p, isFollowing: nextFollow };
      }
      return p;
    }));
  };

  const handleToggleFollowSidebar = (assocId) => {
    setSuggestedAssocs(prev => prev.map(a => {
      if (a.id === assocId) {
        const nextFollow = !a.isFollowing;
        if (onToast) {
          onToast(nextFollow ? `Vous suivez désormais ${a.name}` : `Vous ne suivez plus ${a.name}`);
        }
        return { ...a, isFollowing: nextFollow };
      }
      return a;
    }));
  };

  const handleAddComment = (postId) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          commentsCount: p.commentsCount + 1,
          comments: [
            ...p.comments,
            { id: Date.now(), author: volunteerUser?.name || 'Nadia Mansouri', text }
          ]
        };
      }
      return p;
    }));

    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
    if (onToast) onToast('Commentaire publié avec succès !');
  };

  return (
    <div className="feed-benev-wrapper" style={{ maxWidth: '1080px', margin: '0 auto', paddingBottom: '50px' }}>
      
      {/* 1. CARTE DE BIENVENUE MINT (feed benev .png) */}
      <div 
        className="feed-welcome-banner"
        style={{
          background: 'linear-gradient(135deg, #edf9f6 0%, #e2f5f1 100%)',
          borderRadius: '20px',
          padding: '28px 36px',
          marginBottom: '26px',
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
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#00897b', display: 'inline-block', marginBottom: '6px' }}>
            Bonjour <strong>{volunteerUser?.name?.split(' ')[0] || 'Nadia'}</strong> 👋
          </span>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.25 }}>
            Prête à faire la différence aujourd'hui ?
          </h1>
          <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.5, maxWidth: '480px' }}>
            Découvrez les actions des associations et rejoignez une communauté qui agit pour une Algérie plus solidaire.
          </p>
        </div>

        {/* IMAGE PANORAMIQUE ALGER + SLOGAN CURSIF */}
        <div style={{ flex: '0 0 380px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative', width: '330px', height: '110px', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <img 
              src={profileBannerAlgiers} 
              alt="Baie d'Alger et Makam Echahid" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(237,249,246,0.1), rgba(0,0,0,0.15))' }} />
          </div>
          <div 
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'right',
              color: '#0f172a',
              textShadow: '0 1px 4px rgba(255,255,255,0.9)'
            }}
          >
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '19px', fontWeight: 700, color: '#004d40', lineHeight: 1.15 }}>
              Des citoyens,
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '19px', fontWeight: 700, color: '#004d40', lineHeight: 1.15, textDecoration: 'underline' }}>
              Un impact réel.
            </div>
          </div>
        </div>
      </div>

      {/* 2. DISPOSITION PRINCIPALE DU FEED (2 COLONNES) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: '26px', alignItems: 'flex-start' }} className="feed-grid-layout">
        
        {/* COLONNE DE GAUCHE : FLUX DES PUBLICATIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {posts.map(post => (
            <article 
              key={post.id}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                padding: '22px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {/* EN-TÊTE DU POST */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* AVATAR ASSOCIATION */}
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: post.avatarBg,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '14px',
                      flexShrink: 0
                    }}
                  >
                    {post.avatarType === 'image' && post.avatarImg ? (
                      <img src={post.avatarImg} alt={post.author} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '3px', borderRadius: '50%' }} />
                    ) : post.avatarType === 'leaf' ? (
                      <IconLeaf className="w-5 h-5 text-white" />
                    ) : post.avatarType === 'book' ? (
                      <IconBookOpen className="w-5 h-5 text-white" />
                    ) : (
                      post.initials
                    )}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                        {post.author}
                      </span>
                      <IconCheckVerified className="w-4 h-4" />
                    </div>
                    <span style={{ fontSize: '12.5px', color: '#94a3b8' }}>
                      {post.location} • {post.time}
                    </span>
                  </div>
                </div>

                {/* BOUTON SUIVRE + MENU TROIS POINTS */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => handleToggleFollowPost(post.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      background: post.isFollowing ? '#f1f5f9' : '#e6f7f3',
                      color: post.isFollowing ? '#475569' : '#006D5B',
                      border: post.isFollowing ? '1px solid #cbd5e1' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {post.isFollowing ? 'Suivi ✓' : '+ Suivre'}
                  </button>
                  <button 
                    type="button" 
                    style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
                  >
                    <IconMoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* CONTENU TEXTE */}
              <p style={{ margin: 0, fontSize: '14.5px', color: '#1e293b', lineHeight: 1.55 }}>
                {post.content}
              </p>

              {/* IMAGES DU POST */}
              {post.isGrid ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', borderRadius: '14px', overflow: 'hidden' }}>
                  <img 
                    src={post.images[0]} 
                    alt="Plantation de pousses" 
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                  <img 
                    src={post.images[1]} 
                    alt="Volontaires sur la côte" 
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ) : (
                <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
                  <img 
                    src={post.images[0]} 
                    alt={post.author} 
                    style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              )}

              {/* BARRE D'ACTIONS / INTERACTIONS */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '22px', paddingTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => handleToggleLike(post.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: post.isLiked ? '#ef4444' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  <IconHeart className="w-4 h-4" fill={post.isLiked} />
                  <span>{post.likes}</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13.5px', fontWeight: 700, color: '#64748b' }}>
                  <IconMessageSquare className="w-4 h-4" />
                  <span>{post.commentsCount}</span>
                </div>
              </div>

              {/* LISTE DES COMMENTAIRES NOUVELLEMENT AJOUTÉS */}
              {post.comments.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                  {post.comments.map(c => (
                    <div key={c.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                      <img 
                        src={profileNadiaAvatar} 
                        alt={c.author} 
                        style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div style={{ background: '#f8fafc', padding: '8px 14px', borderRadius: '14px', flex: 1 }}>
                        <strong style={{ color: '#0f172a', marginRight: '6px' }}>{c.author}</strong>
                        <span style={{ color: '#334155' }}>{c.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CHAMP D'AJOUT DE COMMENTAIRE AVEC AVATAR NADIA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '6px' }}>
                <img 
                  src={profileNadiaAvatar} 
                  alt="Nadia Mansouri" 
                  style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: 1, position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Ajouter un commentaire..."
                    value={commentInputs[post.id] || ''}
                    onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddComment(post.id);
                    }}
                    style={{
                      width: '100%',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '24px',
                      padding: '9px 18px',
                      fontSize: '13px',
                      color: '#1e293b',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* COLONNE DE DROITE : WIDGETS (feed benev .png) */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          {/* WIDGET 1 : ASSOCIATIONS À SUIVRE */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '15.5px', fontWeight: 800, color: '#0f172a' }}>
                Associations à suivre
              </h3>
              <button 
                type="button" 
                style={{ background: 'none', border: 'none', color: '#006D5B', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer' }}
              >
                Voir tout
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {suggestedAssocs.map(assoc => (
                <div key={assoc.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div 
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: assoc.bg,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '12px',
                        flexShrink: 0
                      }}
                    >
                      {assoc.logoImg ? (
                        <img src={assoc.logoImg} alt={assoc.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2px', borderRadius: '50%' }} />
                      ) : assoc.isLeaf ? (
                        <IconLeaf className="w-4 h-4 text-white" />
                      ) : assoc.isBook ? (
                        <IconBookOpen className="w-4 h-4 text-white" />
                      ) : (
                        assoc.badge
                      )}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '13.5px', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                        {assoc.name}
                      </h4>
                      <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                        {assoc.category}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleFollowSidebar(assoc.id)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: 700,
                      background: assoc.isFollowing ? '#f1f5f9' : '#e6f7f3',
                      color: assoc.isFollowing ? '#475569' : '#006D5B',
                      border: assoc.isFollowing ? '1px solid #cbd5e1' : '1px solid transparent',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    {assoc.isFollowing ? 'Suivi' : '+ Suivre'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* WIDGET 2 : SUJETS EN TENDANCE */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '15.5px', fontWeight: 800, color: '#0f172a' }}>
                Sujets en tendance
              </h3>
              <IconArrowRight className="w-4 h-4 text-slate-500" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { tag: 'Solidarité', count: '1.2k publications' },
                { tag: 'Environnement', count: '980 publications' },
                { tag: 'Jeunesse', count: '720 publications' },
                { tag: 'DonDeSang', count: '640 publications' },
                { tag: 'Éducation', count: '580 publications' }
              ].map(item => (
                <div key={item.tag} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#0f172a' }}>
                    <IconHash className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.tag}</span>
                  </span>
                  <span style={{ color: '#94a3b8', fontSize: '12px' }}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WIDGET 3 : CARTE CITATION ATHAR */}
          <div 
            style={{
              background: '#eef9f6',
              borderRadius: '18px',
              border: '1px solid rgba(0, 109, 91, 0.12)',
              padding: '24px 20px',
              boxShadow: '0 2px 8px rgba(0, 109, 91, 0.04)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '17px',
                fontWeight: 600,
                color: '#004d40',
                margin: '0 0 12px',
                lineHeight: 1.45
              }}
            >
              “Des petites actions font de grands changements.”
            </p>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#006D5B' }}>
              — Athar
            </span>
          </div>

        </aside>

      </div>

    </div>
  );
}
