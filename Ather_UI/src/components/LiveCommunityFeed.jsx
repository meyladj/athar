import React, { useState } from 'react';

const INITIAL_STORIES = [
  { id: 's1', title: 'Don de Sang CHU', avatar: '🩸', unread: true, author: 'CHU Mustapha' },
  { id: 's2', title: 'Zéralda Vert', avatar: '🌲', unread: true, author: 'Green Future' },
  { id: 's3', title: 'Aide Médéa', avatar: '🤝', unread: false, author: 'El Baraka' },
  { id: 's4', title: 'Coding Kids', avatar: '💻', unread: true, author: 'Club USTHB' },
  { id: 's5', title: 'Nettoyage Oran', avatar: '🌊', unread: false, author: 'Bahia Clean' }
];

const INITIAL_POSTS = [
  {
    id: 1,
    author_name: 'Dr. Amina Benali',
    author_type: 'hospital',
    author_role: 'Coordonnatrice CTS · CHU Mustapha Pacha',
    author_initials: 'AB',
    wilaya: 'Alger',
    time_ago: 'Il y a 2 heures',
    category: 'Santé & Don de Sang',
    title: 'Immense fierté : 140 poches de sang collectées aujourd\'hui grâce à la jeunesse !',
    content: 'Une mobilisation sans précédent au pavillon Pasteur ce matin. Plus de 180 jeunes étudiants et bénévoles ont répondu à notre appel d\'urgence. Grâce à votre geste, nos réserves de groupes O- et A+ sont réapprovisionnées pour les chirurgies vitales de ce weekend. Merci infiniment à chacun de vous !',
    image_url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '140 poches de sang collectées · 420 vies soutenues',
    likes_count: 142,
    has_liked: false,
    comments: [
      { id: 'c1', author: 'Nadia Mansouri', text: 'C\'était mon premier don, l\'équipe était au top et rassurante ! À refaire sans hésiter.', time: 'Il y a 1h' },
      { id: 'c2', author: 'Karim O.', text: 'Bravo à tous les donneurs ! Un geste noble pour notre pays.', time: 'Il y a 30 min' }
    ],
    shares_count: 28
  },
  {
    id: 2,
    author_name: 'Amine Khelifi',
    author_type: 'volunteer',
    author_role: 'Bénévole Citoyen (48h d\'engagement)',
    author_initials: 'AK',
    wilaya: 'Alger (Zéralda)',
    time_ago: 'Hier à 16h40',
    category: 'Climat & Écologie',
    title: 'Mission accomplie : 450 arbres plantés pour redonner vie à la forêt de Zéralda 🌲',
    content: 'Journée mémorable avec l\'équipe d\'Athar et les bénévoles de Green Future. Malgré la chaleur, nous avons creusé, planté et arrosé 450 jeunes caroubiers et pins d\'Alep. Voir les familles nous rejoindre avec leurs enfants était la plus belle des récompenses !',
    image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '450 arbres plantés · 3 hectares restaurés',
    likes_count: 98,
    has_liked: true,
    comments: [
      { id: 'c3', author: 'Sarah B.', text: 'Fier de faire partie de cette équipe ! Rendez-vous le mois prochain à Tipaza.', time: 'Hier' }
    ],
    shares_count: 19
  },
  {
    id: 3,
    author_name: 'Association El Baraka Algérie',
    author_type: 'organization',
    author_role: 'Organisation Nationale Agréée',
    author_initials: 'EB',
    wilaya: 'Médéa & Blida',
    time_ago: 'Il y a 2 jours',
    category: 'Solidarité & Urgences',
    title: 'Convoi Solidaire Hiver : 250 familles rurales approvisionnées',
    content: 'Grâce aux dons collectés et à l\'énergie de 30 jeunes bénévoles véhiculés, nous avons acheminé 250 couffins alimentaires complets, 180 couvertures thermiques et des kits médicaux de base dans 4 villages isolés des hauteurs de Médéa. Transparence totale et sourires garantis.',
    image_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '250 familles soutenues · 12 tonnes d\'aide distribuées',
    likes_count: 176,
    has_liked: false,
    comments: [
      { id: 'c4', author: 'Mohamed T.', text: 'Une organisation exemplaire comme toujours. بارك الله فيكم', time: 'Il y a 1 jour' }
    ],
    shares_count: 45
  },
  {
    id: 4,
    author_name: 'Club Robotique & Tech USTHB',
    author_type: 'university_club',
    author_role: 'Collectif Étudiant Universitaire Bab Ezzouar',
    author_initials: 'US',
    wilaya: 'Alger',
    time_ago: 'Il y a 3 jours',
    category: 'Éducation Jeunesse',
    title: 'Initiation à la robotique et au code pour 35 enfants de la Casbah 🤖',
    content: 'Qui a dit que le bénévolat était seulement manuel ? Nos étudiants en informatique et électronique ont animé un atelier pratique d\'assemblage de petits robots solaires et d\'initiation à Scratch pour les collégiens. Des vocations scientifiques sont nées aujourd\'hui !',
    image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    impact_badge: '35 collégiens formés · 12 kits robots offerts',
    likes_count: 112,
    has_liked: false,
    comments: [],
    shares_count: 22
  }
];

export default function LiveCommunityFeed({ currentLang = 'fr', volunteerUser = null, onToast }) {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [activeThemeFilter, setActiveThemeFilter] = useState('ALL');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedComments, setExpandedComments] = useState({});
  const [activeStoryModal, setActiveStoryModal] = useState(null);

  // Formulaire nouveau post
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Climat & Écologie');
  const [newPostWilaya, setNewPostWilaya] = useState('Alger');
  const [newPostImpact, setNewPostImpact] = useState('');
  const [newPostImageUrl, setNewPostImageUrl] = useState('');

  const themes = ['ALL', 'Santé & Don de Sang', 'Climat & Écologie', 'Solidarité & Urgences', 'Éducation Jeunesse'];

  // Toggle Like
  const handleToggleLike = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextLiked = !p.has_liked;
        return {
          ...p,
          has_liked: nextLiked,
          likes_count: nextLiked ? p.likes_count + 1 : p.likes_count - 1
        };
      }
      return p;
    }));
  };

  // Ajouter un commentaire
  const handleAddComment = (postId) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    const newC = {
      id: `c_${Date.now()}`,
      author: volunteerUser?.name || 'Bénévole Athar',
      text,
      time: 'À l\'instant'
    };

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, newC]
        };
      }
      return p;
    }));

    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
    setExpandedComments(prev => ({ ...prev, [postId]: true }));
    if (onToast) onToast("Commentaire publié avec succès !");
  };

  // Publier un nouveau post
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      alert("Veuillez remplir au moins le titre et le contenu du récit.");
      return;
    }

    const defaultImages = [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80'
    ];

    const randomImg = defaultImages[Math.floor(Math.random() * defaultImages.length)];

    const createdPost = {
      id: Date.now(),
      author_name: volunteerUser?.name || 'Nadia Mansouri',
      author_type: 'volunteer',
      author_role: 'Bénévole Citoyenne Athar',
      author_initials: (volunteerUser?.name || 'NM').slice(0, 2).toUpperCase(),
      wilaya: newPostWilaya,
      time_ago: 'À l\'instant',
      category: newPostCategory,
      title: newPostTitle,
      content: newPostContent,
      image_url: newPostImageUrl || randomImg,
      impact_badge: newPostImpact || 'Action citoyenne certifiée Athar',
      likes_count: 1,
      has_liked: true,
      comments: [],
      shares_count: 0
    };

    setPosts(prev => [createdPost, ...prev]);
    setIsCreateModalOpen(false);
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostImpact('');
    setNewPostImageUrl('');
    if (onToast) onToast("Votre action de terrain a été partagée dans le fil d'impact ! 🎉");
  };

  // Filtrer les posts
  const filteredPosts = posts.filter(p => {
    if (activeThemeFilter === 'ALL') return true;
    return p.category === activeThemeFilter;
  });

  return (
    <div className="community-feed-wrapper">
      {/* SECTION STORIES HORIZONTALES */}
      <div className="stories-bar">
        <div className="story-item create-story" onClick={() => setIsCreateModalOpen(true)}>
          <div className="story-circle add">
            <span>+</span>
          </div>
          <span className="story-label">Partager</span>
        </div>

        {INITIAL_STORIES.map(st => (
          <div key={st.id} className="story-item" onClick={() => setActiveStoryModal(st)}>
            <div className={`story-circle ${st.unread ? 'unread' : ''}`}>
              <span className="story-avatar-emoji">{st.avatar}</span>
            </div>
            <span className="story-label">{st.title}</span>
          </div>
        ))}
      </div>

      {/* BARRE D'ACTION PARTAGER & FILTRES */}
      <div className="feed-header-action-row">
        <div className="feed-publish-trigger-box" onClick={() => setIsCreateModalOpen(true)}>
          <div className="feed-user-avatar-sm">
            {(volunteerUser?.name || 'NM').slice(0, 2).toUpperCase()}
          </div>
          <div className="feed-trigger-input-fake">
            Partagez une expérience de terrain, un don ou des photos d'action...
          </div>
          <button type="button" className="btn-feed-publish">
            ✨ Publier
          </button>
        </div>

        <div className="feed-theme-filters">
          {themes.map(th => (
            <button
              key={th}
              type="button"
              className={`feed-filter-chip ${activeThemeFilter === th ? 'active' : ''}`}
              onClick={() => setActiveThemeFilter(th)}
            >
              {th === 'ALL' ? '🌟 Tout le fil' : th}
            </button>
          ))}
        </div>
      </div>

      {/* FLUX DE PUBLICATIONS SOCIALES */}
      <div className="feed-posts-stream">
        {filteredPosts.map(post => {
          const isCommentsOpen = expandedComments[post.id];
          return (
            <article key={post.id} className="feed-post-card">
              {/* ENTÊTE DU POST */}
              <div className="feed-post-author-row">
                <div className="feed-post-author-left">
                  <div className={`feed-author-avatar-badge ${post.author_type}`}>
                    {post.author_initials}
                  </div>
                  <div>
                    <div className="feed-author-name-wrap">
                      <strong className="feed-author-name">{post.author_name}</strong>
                      <span className="feed-category-pill">{post.category}</span>
                    </div>
                    <div className="feed-author-sub">
                      <span>{post.author_role}</span> · <span>📍 {post.wilaya}</span> · <span>{post.time_ago}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TITRE ET CONTENU */}
              <h3 className="feed-post-title">{post.title}</h3>
              <p className="feed-post-text">{post.content}</p>

              {/* BADGE D'IMPACT CHIFFRÉ */}
              {post.impact_badge && (
                <div className="feed-post-impact-tag">
                  <span>⚡ <strong>Impact vérifié :</strong> {post.impact_badge}</span>
                </div>
              )}

              {/* IMAGE DU POST */}
              {post.image_url && (
                <div className="feed-post-image-container">
                  <img src={post.image_url} alt={post.title} loading="lazy" />
                </div>
              )}

              {/* BARRE DE RÉACTIONS */}
              <div className="feed-post-engagement-bar">
                <div className="feed-engagement-stats">
                  <span>👏 <strong>{post.likes_count}</strong> soutiens</span>
                  <span>💬 <strong>{post.comments.length}</strong> commentaires</span>
                  <span>🔄 <strong>{post.shares_count}</strong> partages</span>
                </div>

                <div className="feed-post-action-buttons">
                  <button
                    type="button"
                    className={`feed-action-btn ${post.has_liked ? 'liked' : ''}`}
                    onClick={() => handleToggleLike(post.id)}
                  >
                    <span>{post.has_liked ? '❤️ Bravo !' : '🤍 Soutenir'}</span>
                  </button>

                  <button
                    type="button"
                    className="feed-action-btn"
                    onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                  >
                    <span>💬 Commenter</span>
                  </button>

                  <button
                    type="button"
                    className="feed-action-btn"
                    onClick={() => {
                      if (onToast) onToast("Lien de l'action copié dans le presse-papier !");
                    }}
                  >
                    <span>🔗 Partager</span>
                  </button>
                </div>
              </div>

              {/* SECTION COMMENTAIRES */}
              {isCommentsOpen && (
                <div className="feed-comments-section">
                  <div className="feed-comment-input-row">
                    <input
                      type="text"
                      placeholder="Ajouter un mot d'encouragement..."
                      value={commentInputs[post.id] || ''}
                      onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddComment(post.id);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => handleAddComment(post.id)}
                      className="btn-send-comment"
                    >
                      Envoyer
                    </button>
                  </div>

                  {post.comments.length > 0 && (
                    <div className="feed-comments-list">
                      {post.comments.map(c => (
                        <div key={c.id} className="feed-comment-bubble">
                          <div className="feed-comment-author">{c.author} <span className="feed-comment-time">· {c.time}</span></div>
                          <div className="feed-comment-text">{c.text}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* MODAL : PARTAGER UNE EXPÉRIENCE DE TERRAIN */}
      {isCreateModalOpen && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setIsCreateModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '580px', borderRadius: '18px', padding: '26px' }}>
            <button className="modal-x" onClick={() => setIsCreateModalOpen(false)}>✕</button>

            <div style={{ textAlign: 'left', marginBottom: '18px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-teal)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Athar Pulse · Réseau Social Citoyen
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-navy)', margin: '4px 0 2px' }}>
                Partager une action de terrain
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Inspirez d'autres jeunes et faites grandir l'impact de votre engagement en Algérie.
              </p>
            </div>

            <form onSubmit={handleCreatePost}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>
                  Titre percutant de votre action
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 50 paniers distribués à Blida pour les personnes âgées 🤝"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>Thématique</label>
                  <select
                    value={newPostCategory}
                    onChange={(e) => setNewPostCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13.5px', background: '#fff' }}
                  >
                    <option value="Santé & Don de Sang">Santé & Don de Sang</option>
                    <option value="Climat & Écologie">Climat & Écologie</option>
                    <option value="Solidarité & Urgences">Solidarité & Urgences</option>
                    <option value="Éducation Jeunesse">Éducation Jeunesse</option>
                    <option value="Culture & Patrimoine">Culture & Patrimoine</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>Wilaya d'intervention</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Alger, Oran, Sétif..."
                    value={newPostWilaya}
                    onChange={(e) => setNewPostWilaya(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>
                  Votre récit de terrain
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Racontez comment s'est déroulée la mission, les moments forts, les défis relevés..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13.5px', fontFamily: 'inherit', resize: 'vertical' }}
                ></textarea>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>Chiffre d'impact concret</label>
                  <input
                    type="text"
                    placeholder="Ex: 80 arbres / 30 familles"
                    value={newPostImpact}
                    onChange={(e) => setNewPostImpact(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '9px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>URL photo (optionnel)</label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={newPostImageUrl}
                    onChange={(e) => setNewPostImageUrl(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '9px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '14px' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-green"
                  style={{ padding: '12px 26px', borderRadius: '10px' }}
                >
                  Publier dans le fil live 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL : VISUALISEUR DE STORY */}
      {activeStoryModal && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setActiveStoryModal(null)}></div>
          <div className="modal-card" style={{ maxWidth: '440px', borderRadius: '20px', padding: '24px', textAlign: 'center', background: 'var(--primary-navy)', color: '#ffffff' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>{activeStoryModal.avatar}</div>
            <span style={{ fontSize: '12px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>
              Story en direct · {activeStoryModal.author}
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '8px 0 12px', color: '#ffffff' }}>
              {activeStoryModal.title}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#e2e8f0', marginBottom: '22px' }}>
              Les équipes de terrain sont actuellement actives sur site ! Rejoignez le fil ou consultez la fiche mission pour vous joindre au groupe.
            </p>
            <button
              type="button"
              className="btn btn-green"
              onClick={() => setActiveStoryModal(null)}
              style={{ width: '100%', borderRadius: '12px' }}
            >
              Fermer la Story
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
