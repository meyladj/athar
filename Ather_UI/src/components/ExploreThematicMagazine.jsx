import React, { useState } from 'react';

const THEMATIC_PILLARS = [
  {
    id: 'all',
    title: 'Tous les Piliers',
    emoji: '✨',
    badge: 'Vision Globale',
    description: 'Explorez l\'ensemble des récits, initiatives et tribus d\'action à travers les 58 wilayas.'
  },
  {
    id: 'sante',
    title: 'Santé & Don de Sang',
    emoji: '🩸',
    badge: 'Urgence Vitale',
    description: 'Centres de transfusion sanguine (CTS), urgences hospitalières, soutien pédiatrique et campagnes médicales mobiles.'
  },
  {
    id: 'climat',
    title: 'Climat & Barrage Vert',
    emoji: '🌲',
    badge: 'Transition Verte',
    description: 'Reforestation massive, nettoyage des côtes et du littoral, lutte contre la désertification et permaculture urbaine.'
  },
  {
    id: 'education',
    title: 'Éducation & Tech Jeunesse',
    emoji: '💡',
    badge: 'Savoir & Avenir',
    description: 'Mentorat scolaire, initiation à la robotique et au code, bibliothèques nomades et alphabétisation citoyenne.'
  },
  {
    id: 'solidarite',
    title: 'Solidarité & Dignité',
    emoji: '🤝',
    badge: 'Aide d\'Urgence',
    description: 'Colis alimentaires de dignité, soutien aux villages isolés, maraudes hivernales et réinsertion bienveillante.'
  },
  {
    id: 'patrimoine',
    title: 'Culture & Patrimoine',
    emoji: '🏛️',
    badge: 'Mémoire & Art',
    description: 'Restauration de la Casbah, sauvegarde des manuscrits du Sud, valorisation de l\'artisanat et festivals de jeunesse.'
  }
];

const CURATED_ARTICLES = [
  {
    id: 'art-1',
    pillarId: 'sante',
    pillarTitle: 'Santé & Don de Sang',
    pillarColor: '#b91c1c',
    readTime: '4 min de lecture',
    date: '18 Septembre 2026',
    author: {
      name: 'Sarah Mansour',
      role: 'Interne en Médecine & Coordonnatrice Bénévoles CHU',
      avatar: 'SM'
    },
    title: 'Comment 200 étudiants d\'Alger ont sauvé 50 patients en 24h grâce au don de sang coordonné',
    subtitle: 'Récit d\'une nuit de garde où la pénurie de sang a été vaincue par la solidarité numérique de la jeunesse.',
    cover_image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
    summary: 'Il était 21h au CHU Mustapha quand les stocks de groupe O- sont passés sous le seuil d\'alerte. En moins de deux heures, un appel relayé sur Athar a mobilisé des dizaines de jeunes bénévoles...',
    full_content: [
      'Il est des nuits hospitalières qu\'on n\'oublie jamais. Ce jeudi d\'août, la salle d\'urgence du Centre de Transfusion Sanguine du CHU Mustapha Pacha affichait complet. Deux interventions chirurgicales majeures et l\'arrivée de plusieurs cas pédiatriques urgents avaient réduit nos réserves d\'O négatif à trois poches seulement.',
      'À 21h30, avec l\'accord du chef de service, nous avons activé l\'alerte d\'urgence citoyenne sur la plateforme Athar. Le résultat a dépassé tous nos espoirs : en moins de quarante-cinq minutes, les premiers étudiants de la faculté centrale et de Bab Ezzouar arrivaient déjà, pièce d\'identité en main, prêts à donner leur sang.',
      'À minuit, une chaîne de solidarité ininterrompue s\'étirait dans le couloir du pavillon Pasteur. Des jeunes de 19 à 25 ans, pour beaucoup donneurs pour la toute première fois, ont permis de récolter 140 poches avant l\'aube. Toutes les interventions prévues ont été réalisées sans interruption.',
      'Ce n\'était pas seulement un acte médical : c\'était la démonstration vivante qu\'une jeunesse connectée et informée est capable d\'éteindre n\'importe quelle crise humanitaire locale en quelques heures.'
    ],
    highlight_quote: '« La solidarité en Algérie n\'est pas un slogan, c\'est un réflexe viscéral qui s\'active dès que la vie d\'un frère ou d\'une sœur est en jeu. »',
    action_cta: 'Participer à une collecte de sang'
  },
  {
    id: 'art-2',
    pillarId: 'climat',
    pillarTitle: 'Climat & Barrage Vert',
    pillarColor: '#006D5B',
    readTime: '6 min de lecture',
    date: '15 Septembre 2026',
    author: {
      name: 'Yacine Amrani',
      role: 'Ingénieur Agronome & Fondateur Green Future',
      avatar: 'YA'
    },
    title: 'Le réveil du Barrage Vert : Pourquoi la jeunesse prend les pelles pour stopper l\'avancée du désert',
    subtitle: 'Cinquante ans après le projet historique, une nouvelle génération réinvente la reforestation écologique participative.',
    cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    summary: 'Entre Djelfa, M\'Sila et les collines de l\'Atlas saharien, des milliers de volontaires redonnent vie à la barrière écologique avec des espèces endémiques résistantes à la sécheresse...',
    full_content: [
      'Lancé dans les années 1970, le Barrage Vert est sans doute l\'un des projets écologiques les plus ambitieux de l\'Afrique du Nord. Mais aujourd\'hui, face au changement climatique accéléré, ce ne sont plus seulement des plans administratifs qui sauvent la terre : c\'est l\'énergie bénévole citoyenne.',
      'Le week-end dernier à Zéralda et sur les franges de Djelfa, nous étions plus de 300 bénévoles. Au lieu de monocultures fragiles, les jeunes apprennent à planter des caroubiers, des pistachiers de l\'Atlas et des acacias locaux avec des techniques de rétention d\'eau sans plastique.',
      'Ce qui frappe le plus, c\'est la diversité des profils : développeurs web, lycéens, mères de famille et retraités plantent côte à côte. Chaque arbre est géolocalisé et suivi sur les applications participatives pour garantir un taux de survie supérieur à 85%.'
    ],
    highlight_quote: '« Planter un arbre en terre algérienne, c\'est signer un pacte avec les cinquante prochaines années de notre patrie. »',
    action_cta: 'Rejoindre une mission de reboisement'
  },
  {
    id: 'art-3',
    pillarId: 'patrimoine',
    pillarTitle: 'Culture & Patrimoine',
    pillarColor: '#1E3A8A',
    readTime: '5 min de lecture',
    date: '10 Septembre 2026',
    author: {
      name: 'Lydia Cheniti',
      role: 'Architecte du Patrimoine & Bénévolat Casbah',
      avatar: 'LC'
    },
    title: 'Casbah Vivante : Les jeunes architectes qui restaurent la médina sans attendre',
    subtitle: 'Reportage au cœur des ruelles d\'Alger où des ateliers participatifs redonnent éclat aux faïences et stucs ancestraux.',
    cover_image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    summary: 'Chaque samedi matin, un groupe d\'étudiants en architecture et de jeunes maçons traditionnels se réunit dans la Haute Casbah pour consolider les passages voûtés et sensibiliser les résidents...',
    full_content: [
      'La Casbah d\'Alger ne s\'effondre pas quand les pierres s\'usent : elle s\'effondre quand on cesse de l\'aimer. C\'est autour de ce constat que notre collectif s\'est structuré il y a deux ans.',
      'Nos missions de bénévolat ne sont pas de simples visites touristiques : avec le soutien des maîtres artisans (Mâalems), les bénévoles apprennent les techniques traditionnelles de chaux vive, le calepinage des carreaux de zellige et l\'étayage des sabats historiques.',
      'Au-delà de la pierre, c\'est le lien social qui renaît. Les habitants nous ouvrent leurs patios, partagent le thé et racontent les histoires séculaires de chaque impasse.'
    ],
    highlight_quote: '« La Casbah n\'est pas un musée mort sous cloche : c\'est un cœur battant qui a juste besoin de mains aimantes. »',
    action_cta: 'Participer à la préservation du patrimoine'
  }
];

export default function ExploreThematicMagazine({ currentLang = 'fr', onSelectTheme, onActionPledge }) {
  const [activePillar, setActivePillar] = useState('all');
  const [selectedArticleModal, setSelectedArticleModal] = useState(null);

  const filteredArticles = activePillar === 'all'
    ? CURATED_ARTICLES
    : CURATED_ARTICLES.filter(a => a.pillarId === activePillar);

  return (
    <div className="explore-magazine-wrapper">
      {/* EN-TÊTE ÉDITORIAL STYLE SUBSTACK */}
      <div className="explore-hero-editorial">
        <span className="explore-hero-tag">LE MAGAZINE CITOYEN ATHAR · أثر</span>
        <h2 className="explore-hero-title">
          Découvrez les récits inspirants et les tribus d'action de la jeunesse algérienne.
        </h2>
        <p className="explore-hero-subtitle">
          Le bénévolat raconté par ceux qui le vivent sur le terrain : immersion, témoignages réels, données vérifiées et pistes concrètes pour vous engager aujourd'hui.
        </p>
      </div>

      {/* SÉLECTEUR DE PILIERS THÉMATIQUES */}
      <div className="explore-pillars-grid">
        {THEMATIC_PILLARS.map(pillar => {
          const isActive = activePillar === pillar.id;
          return (
            <div
              key={pillar.id}
              className={`explore-pillar-card ${isActive ? 'active' : ''}`}
              onClick={() => setActivePillar(pillar.id)}
            >
              <div className="explore-pillar-top">
                <span className="explore-pillar-emoji">{pillar.emoji}</span>
                <span className="explore-pillar-badge">{pillar.badge}</span>
              </div>
              <h3 className="explore-pillar-name">{pillar.title}</h3>
              <p className="explore-pillar-desc">{pillar.description}</p>
            </div>
          );
        })}
      </div>

      {/* LISTE DES GRANDS ARTICLES & RÉCITS DE TERRAIN */}
      <div className="explore-articles-container">
        <div className="explore-articles-header">
          <h3>
            {activePillar === 'all' ? '📰 Récits de terrain à la Une' : `Initiatives · ${THEMATIC_PILLARS.find(p => p.id === activePillar)?.title}`}
          </h3>
          <span className="explore-articles-count">{filteredArticles.length} publications sélectionnées</span>
        </div>

        <div className="explore-articles-grid">
          {filteredArticles.map(article => (
            <article
              key={article.id}
              className="explore-article-card"
              onClick={() => setSelectedArticleModal(article)}
            >
              <div className="explore-article-cover">
                <img src={article.cover_image} alt={article.title} loading="lazy" />
                <span className="explore-article-pill" style={{ background: article.pillarColor }}>
                  {article.pillarTitle}
                </span>
              </div>

              <div className="explore-article-body">
                <div className="explore-article-meta">
                  <span className="explore-article-readtime">⏱️ {article.readTime}</span> · 
                  <span className="explore-article-date">{article.date}</span>
                </div>

                <h4 className="explore-article-title">{article.title}</h4>
                <p className="explore-article-excerpt">{article.summary}</p>

                <div className="explore-article-footer">
                  <div className="explore-article-author-box">
                    <div className="explore-author-avatar-circle">{article.author.avatar}</div>
                    <div>
                      <div className="explore-author-name">{article.author.name}</div>
                      <div className="explore-author-role">{article.author.role}</div>
                    </div>
                  </div>
                  <span className="explore-read-link">Lire le récit →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL : LECTURE IMMERSIVE DU RÉCIT (STYLE SUBSTACK / MEDIUM) */}
      {selectedArticleModal && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setSelectedArticleModal(null)}></div>
          <div className="modal-card modal-editorial-reader" style={{ maxWidth: '780px', maxHeight: '92vh', overflowY: 'auto', borderRadius: '22px', padding: '0', background: '#ffffff' }}>
            <button
              className="modal-x"
              onClick={() => setSelectedArticleModal(null)}
              style={{ position: 'sticky', top: '16px', right: '16px', zIndex: 10, background: 'rgba(0,0,0,0.6)', color: '#fff' }}
            >
              ✕
            </button>

            {/* COVER DU RÉCIT */}
            <div style={{ position: 'relative', height: '280px', width: '100%', overflow: 'hidden' }}>
              <img
                src={selectedArticleModal.cover_image}
                alt={selectedArticleModal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '28px', right: '28px' }}>
                <span style={{ background: selectedArticleModal.pillarColor, color: '#fff', padding: '4px 12px', borderRadius: '8px', fontSize: '11.5px', fontWeight: 800, textTransform: 'uppercase' }}>
                  {selectedArticleModal.pillarTitle}
                </span>
                <div style={{ color: '#e2e8f0', fontSize: '12.5px', marginTop: '6px' }}>
                  {selectedArticleModal.date} · {selectedArticleModal.readTime}
                </div>
              </div>
            </div>

            {/* CORPS DE L'ARTICLE */}
            <div style={{ padding: '32px 36px 40px' }}>
              <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '28px', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1.25, margin: '0 0 10px' }}>
                {selectedArticleModal.title}
              </h2>
              <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.5, margin: '0 0 24px', fontStyle: 'italic' }}>
                {selectedArticleModal.subtitle}
              </p>

              {/* AUTEUR */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '14px 0', marginBottom: '28px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-teal)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '15px' }}>
                  {selectedArticleModal.author.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--primary-navy)' }}>{selectedArticleModal.author.name}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>{selectedArticleModal.author.role}</div>
                </div>
              </div>

              {/* CITATION FORTE (PULL QUOTE) */}
              <div style={{ background: 'var(--bg-cream)', borderLeft: `5px solid ${selectedArticleModal.pillarColor}`, padding: '18px 22px', borderRadius: '12px', margin: '24px 0', fontSize: '16px', fontWeight: 700, color: 'var(--primary-navy)', lineHeight: 1.5 }}>
                {selectedArticleModal.highlight_quote}
              </div>

              {/* PARAGRAPHES */}
              <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: '#334155' }}>
                {selectedArticleModal.full_content.map((p, idx) => (
                  <p key={idx} style={{ marginBottom: '18px' }}>{p}</p>
                ))}
              </div>

              {/* CALL TO ACTION CONCRET AU BAS DE L'ARTICLE */}
              <div style={{ marginTop: '36px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '16px', padding: '22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 800, color: 'var(--primary-navy)' }}>
                    Envie d'agir concrètement pour cette cause ?
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                    Découvrez les missions de terrain vérifiées et inscrivez-vous en 1 clic.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-green"
                  style={{ borderRadius: '10px', padding: '12px 22px' }}
                  onClick={() => {
                    setSelectedArticleModal(null);
                    const el = document.getElementById('missions');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {selectedArticleModal.action_cta} →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
