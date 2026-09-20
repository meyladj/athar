import React, { useState } from 'react';

// Assets
import profileBannerAlgiers from '../assets/profile-banner-algiers.png';
import candReboisementImg from '../assets/candidature-reboisement.png';
import candLectureImg from '../assets/candidature-lecture.png';
import candSangImg from '../assets/candidature-sang.png';
import missionPlage from '../assets/mission-plage.png';
import articleHeroEducation from '../assets/article-hero-education.png';
import feedCraImg from '../assets/feed-cra-distribution.png';
import atharLogoClean from '../assets/athar-logo-clean.png';

// SVG Icons
function IconGrid({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function IconLeaf({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

function IconCalendar({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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

function IconClock({ className = "w-3.5 h-3.5", color = "#94a3b8" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconHeartFilled({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="1">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconHeartOutline({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconChevronDown({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconMoreHorizontal({ className = "w-4 h-4" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.2" />
      <circle cx="19" cy="12" r="1.2" />
      <circle cx="5" cy="12" r="1.2" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// 3 Saved items strictly matching offres sauvgardés.png
const INITIAL_SAVED_ITEMS = [
  {
    id: 1,
    type: 'mission',
    title: "Plantation d'arbres et reboisement à Zéralda",
    category: "Environnement",
    categoryBg: "#dcfce7",
    categoryColor: "#15803d",
    location: "Zéralda, Alger",
    date: "Sam. 12 avril",
    duration: "6 heures",
    image: candReboisementImg,
    association_name: "Association Green Future"
  },
  {
    id: 2,
    type: 'mission',
    title: "Ateliers de lecture et éveil artistique",
    category: "Éducation",
    categoryBg: "#e0f2fe",
    categoryColor: "#0369a1",
    location: "Hydra, Alger",
    date: "Mer. 16 avril",
    duration: "3 heures",
    image: candLectureImg,
    association_name: "Lire pour Demain"
  },
  {
    id: 3,
    type: 'event',
    title: "Caravane de don du sang et dépistage préventif",
    category: "Santé",
    categoryBg: "#fee2e2",
    categoryColor: "#b91c1c",
    location: "CHU Benbadis, Constantine",
    date: "Sam. 20 avril",
    duration: "7h30",
    image: candSangImg,
    association_name: "Croissant Rouge Algérien"
  }
];

// 3 Recommended items strictly matching offres sauvgardés.png
const INITIAL_RECOMMENDED_ITEMS = [
  {
    id: 4,
    type: 'mission',
    title: "Nettoyage des plages d'El Marsa",
    category: "Environnement",
    categoryBg: "#dcfce7",
    categoryColor: "#15803d",
    location: "Aïn Taya, Alger",
    date: "Sam. 27 avril",
    duration: "5 heures",
    image: missionPlage,
    association_name: "Association Green Future"
  },
  {
    id: 5,
    type: 'mission',
    title: "Soutien scolaire pour enfants défavorisés",
    category: "Éducation",
    categoryBg: "#e0f2fe",
    categoryColor: "#0369a1",
    location: "Bab El Oued, Alger",
    date: "Lun. 29 avril",
    duration: "4 heures",
    image: articleHeroEducation,
    association_name: "Lire pour Demain"
  },
  {
    id: 6,
    type: 'mission',
    title: "Distribution de colis alimentaires",
    category: "Solidarité",
    categoryBg: "#ffedd5",
    categoryColor: "#c2410c",
    location: "Sidi M'hamed, Alger",
    date: "Sam. 4 mai",
    duration: "6 heures",
    image: feedCraImg,
    association_name: "Croissant Rouge Algérien"
  }
];

export default function SavedOffers({
  onSelectMission,
  onNavigateToMissions,
  onToast,
  volunteerFavorites = [],
  onToggleFavorite
}) {
  const [savedItems, setSavedItems] = useState(INITIAL_SAVED_ITEMS);
  const [recommendedItems, setRecommendedItems] = useState(INITIAL_RECOMMENDED_ITEMS);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'mission' | 'event'
  const [sortBy, setSortBy] = useState('recent');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleRemoveSaved = (item, e) => {
    e?.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(item.id, e);
    setSavedItems(prev => prev.filter(i => i.id !== item.id));
    setRecommendedItems(prev => [{ ...item }, ...prev]);
    onToast && onToast(`« ${item.title} » retirée des offres sauvegardées.`);
  };

  const handleAddSaved = (item, e) => {
    e?.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(item.id, e);
    setRecommendedItems(prev => prev.filter(i => i.id !== item.id));
    setSavedItems(prev => [{ ...item }, ...prev]);
    onToast && onToast(`« ${item.title} » ajoutée à vos offres sauvegardées !`);
  };

  const filteredSaved = savedItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const missionsCount = savedItems.filter(i => i.type === 'mission').length;
  const eventsCount = savedItems.filter(i => i.type === 'event').length;

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', paddingBottom: '60px', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

      {/* 1. HERO BANNER MINT (Strict match to 'offres sauvgardés.png') */}
      <div
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
        {/* Left Copy */}
        <div style={{ flex: '1 1 55%', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14.5px', fontWeight: 800, color: '#00897b', marginBottom: '6px' }}>
            <span>Vos engagements comptent</span>
            <span>💚</span>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.25 }}>
            Des opportunités qui changent des vies
          </h1>
          <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.5, maxWidth: '480px' }}>
            Retrouvez ici les missions et événements que vous avez sauvegardés.
          </p>
        </div>

        {/* Right Panoramic makam + cursive slogan */}
        <div style={{ flex: '0 0 380px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative', width: '330px', height: '110px', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <img
              src={profileBannerAlgiers}
              alt="Makam Echahid Alger"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(237,249,246,0.1), rgba(0,0,0,0.15))' }} />
          </div>

          {/* Slogan cursif bleu */}
          <div
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'right',
              color: '#1e3a8a',
              textShadow: '0 1px 4px rgba(255,255,255,0.95)',
              userSelect: 'none'
            }}
          >
            <div style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '22px', fontWeight: 700, color: '#1e3a8a', lineHeight: 1.15 }}>
              Ensemble
            </div>
            <div style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '22px', fontWeight: 700, color: '#1e3a8a', lineHeight: 1.15 }}>
              pour une Algérie
            </div>
            <div style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '22px', fontWeight: 700, color: '#1e3a8a', lineHeight: 1.15, textDecoration: 'underline' }}>
              plus solidaire !
            </div>
          </div>
        </div>
      </div>

      {/* 2. FILTER PILLS & SORT ROW */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '14px' }}>
        {/* Left filter pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '13.5px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: 'none',
              background: activeFilter === 'all' ? '#006D5B' : '#ffffff',
              color: activeFilter === 'all' ? '#ffffff' : '#334155',
              boxShadow: activeFilter === 'all' ? '0 2px 8px rgba(0, 109, 91, 0.25)' : '0 1px 3px rgba(0,0,0,0.06)'
            }}
          >
            <IconGrid />
            <span>Toutes ({savedItems.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('mission')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '13.5px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: activeFilter === 'mission' ? 'none' : '1px solid #e2e8f0',
              background: activeFilter === 'mission' ? '#006D5B' : '#ffffff',
              color: activeFilter === 'mission' ? '#ffffff' : '#334155',
              boxShadow: activeFilter === 'mission' ? '0 2px 8px rgba(0, 109, 91, 0.25)' : '0 1px 3px rgba(0,0,0,0.06)'
            }}
          >
            <IconLeaf color={activeFilter === 'mission' ? '#ffffff' : '#16a34a'} />
            <span>Missions ({missionsCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('event')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '13.5px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: activeFilter === 'event' ? 'none' : '1px solid #e2e8f0',
              background: activeFilter === 'event' ? '#006D5B' : '#ffffff',
              color: activeFilter === 'event' ? '#ffffff' : '#334155',
              boxShadow: activeFilter === 'event' ? '0 2px 8px rgba(0, 109, 91, 0.25)' : '0 1px 3px rgba(0,0,0,0.06)'
            }}
          >
            <IconCalendar color={activeFilter === 'event' ? '#ffffff' : '#64748b'} />
            <span>Événements ({eventsCount})</span>
          </button>
        </div>

        {/* Right sort dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12.5px', color: '#94a3b8', fontWeight: 600 }}>Trier par</span>
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '7px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                color: '#334155',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              <span>⇅</span>
              <span>{sortBy === 'recent' ? 'Plus récents' : sortBy === 'oldest' ? 'Plus anciens' : 'Plus proches'}</span>
              <IconChevronDown />
            </button>

            {isSortOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '100%',
                  marginTop: '4px',
                  width: '160px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  padding: '6px',
                  zIndex: 40
                }}
              >
                {['recent', 'oldest', 'closest'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setSortBy(opt); setIsSortOpen(false); }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: sortBy === opt ? '#f0fdf4' : 'transparent',
                      color: sortBy === opt ? '#006D5B' : '#334155',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {opt === 'recent' ? 'Plus récents' : opt === 'oldest' ? 'Plus anciens' : 'Plus proches'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. SECTION: MES OFFRES SAUVEGARDÉES (3) */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '0 0 16px', letterSpacing: '-0.3px' }}>
          Mes offres sauvegardées ({filteredSaved.length})
        </h2>

        {filteredSaved.length === 0 ? (
          <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid #e2e8f0', padding: '48px 24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 16px' }}>Aucune offre sauvegardée dans ce filtre.</p>
            <button
              type="button"
              onClick={onNavigateToMissions}
              style={{ background: '#006D5B', color: '#ffffff', border: 'none', borderRadius: '10px', padding: '10px 22px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}
            >
              Explorer les opportunités
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '22px' }}>
            {filteredSaved.map(item => (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {/* Image container with Red Heart Button */}
                <div style={{ position: 'relative', width: '100%', height: '190px', background: '#f1f5f9', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {/* Red Heart Circle Button */}
                  <button
                    type="button"
                    onClick={(e) => handleRemoveSaved(item, e)}
                    title="Retirer des offres sauvegardées"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
                      cursor: 'pointer',
                      zIndex: 2
                    }}
                  >
                    <IconHeartFilled />
                  </button>
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Category Pill */}
                  <div style={{ marginBottom: '10px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        background: item.categoryBg,
                        color: item.categoryColor
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectMission && onSelectMission(item)}
                    style={{
                      margin: '0 0 12px',
                      fontSize: '16.5px',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      cursor: 'pointer',
                      minHeight: '44px'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* 3 Detail rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                      <IconMapPin />
                      <span>{item.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                      <IconCalendar color="#94a3b8" />
                      <span>{item.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                      <IconClock />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Card Bottom Actions: Voir les détails + Options */}
                  <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => onSelectMission && onSelectMission(item)}
                      style={{
                        flex: 1,
                        background: '#006D5B',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '11px',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'center',
                        boxShadow: '0 2px 6px rgba(0, 109, 91, 0.2)'
                      }}
                    >
                      Voir les détails
                    </button>

                    {/* Options button */}
                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                        style={{
                          width: '40px',
                          height: '38px',
                          borderRadius: '10px',
                          border: '1px solid #e2e8f0',
                          background: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#64748b',
                          cursor: 'pointer'
                        }}
                      >
                        <IconMoreHorizontal />
                      </button>

                      {openMenuId === item.id && (
                        <div
                          style={{
                            position: 'absolute',
                            right: 0,
                            bottom: '100%',
                            marginBottom: '6px',
                            width: '180px',
                            background: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            padding: '6px',
                            zIndex: 40
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard?.writeText(window.location.href);
                              onToast && onToast("Lien de l'opportunité copié !");
                              setOpenMenuId(null);
                            }}
                            style={{ width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', background: 'transparent', fontSize: '12px', fontWeight: 600, color: '#334155', cursor: 'pointer', borderRadius: '6px' }}
                          >
                            Partager l'opportunité
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { handleRemoveSaved(item, e); setOpenMenuId(null); }}
                            style={{ width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', background: 'transparent', fontSize: '12px', fontWeight: 600, color: '#ef4444', cursor: 'pointer', borderRadius: '6px' }}
                          >
                            Retirer des sauvegardes
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. CALLOUT BANNER (Strict match to 'offres sauvgardés.png') */}
      <div
        style={{
          background: 'linear-gradient(135deg, #edf9f6 0%, #e2f5f1 100%)',
          borderRadius: '18px',
          border: '1px solid rgba(0, 109, 91, 0.12)',
          padding: '22px 30px',
          marginBottom: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: '0 2px 8px rgba(0, 109, 91, 0.04)'
        }}
      >
        {/* Left: Illustration + Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Hands holding glowing green heart illustration */}
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexShrink: 0 }}>
            <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
              <line x1="32" y1="6" x2="32" y2="10" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="20" y1="11" x2="17" y2="14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="44" y1="11" x2="47" y2="14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M32 38 C32 38, 22 31, 20 25 C18 20, 21 16, 26 16 C29 16, 31 18, 32 20 C33 18, 35 16, 38 16 C43 16, 46 20, 44 25 C42 31, 32 38, 32 38 Z" fill="#006D5B" />
              <path d="M12 44 C16 40, 24 38, 28 42 L32 46 L36 42 C40 38, 48 40, 52 44 C54 46, 52 50, 46 52 C38 54, 26 54, 18 52 C12 50, 10 46, 12 44 Z" fill="#0f284e" opacity="0.85" />
            </svg>
          </div>

          <div>
            <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
              Merci de croire en un avenir meilleur !
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
              Chaque action, petite ou grande, fait la différence.
            </p>
          </div>
        </div>

        {/* Right: CTA Button */}
        <button
          type="button"
          onClick={onNavigateToMissions}
          style={{
            background: '#ffffff',
            color: '#006D5B',
            border: '1px solid #bbf7d0',
            borderRadius: '10px',
            padding: '11px 22px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
          }}
        >
          <span>Découvrir plus d'opportunités</span>
          <IconArrowRight color="#006D5B" />
        </button>
      </div>

      {/* 5. SECTION: D'AUTRES OPPORTUNITÉS QUI POURRAIENT VOUS INTÉRESSER */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.3px' }}>
              D’autres opportunités qui pourraient vous intéresser
            </h2>
            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
              Basées sur vos centres d'intérêt et vos offres sauvegardées.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateToMissions}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#006D5B',
              fontSize: '13.5px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <span>Voir toutes les opportunités</span>
            <IconArrowRight color="#006D5B" />
          </button>
        </div>

        {/* 3 Recommended Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '22px' }}>
          {recommendedItems.map(item => (
            <div
              key={item.id}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              {/* Photo with Empty Heart Button */}
              <div style={{ position: 'relative', width: '100%', height: '190px', background: '#f1f5f9', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Empty Heart Circle Button */}
                <button
                  type="button"
                  onClick={(e) => handleAddSaved(item, e)}
                  title="Ajouter aux offres sauvegardées"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
                    cursor: 'pointer',
                    zIndex: 2
                  }}
                >
                  <IconHeartOutline />
                </button>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Category Pill */}
                <div style={{ marginBottom: '10px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      background: item.categoryBg,
                      color: item.categoryColor
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onSelectMission && onSelectMission(item)}
                  style={{
                    margin: '0 0 12px',
                    fontSize: '16.5px',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.35,
                    cursor: 'pointer',
                    minHeight: '44px'
                  }}
                >
                  {item.title}
                </h3>

                {/* 3 Detail rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                    <IconMapPin />
                    <span>{item.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                    <IconCalendar color="#94a3b8" />
                    <span>{item.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                    <IconClock />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Card Action: Full-width 'Voir l'offre' */}
                <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
                  <button
                    type="button"
                    onClick={() => onSelectMission && onSelectMission(item)}
                    style={{
                      width: '100%',
                      background: '#006D5B',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '11px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: '0 2px 6px rgba(0, 109, 91, 0.2)'
                    }}
                  >
                    Voir l'offre
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. PORTAL FOOTER (Strict match to 'offres sauvgardés.png') */}
      <footer
        style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '32px',
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={atharLogoClean} alt="Athar" style={{ height: '26px', width: 'auto' }} />
          <div>
            <strong style={{ fontSize: '13px', color: '#006D5B', display: 'block', lineHeight: 1.1 }}>Athar</strong>
            <small style={{ fontSize: '10.5px', color: '#94a3b8' }}>Le bénévole qui unit</small>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', fontSize: '13px', color: '#64748b' }}>
          <a href="#aide" style={{ textDecoration: 'none', color: 'inherit' }}>Aide</a>
          <a href="#confidentialite" style={{ textDecoration: 'none', color: 'inherit' }}>Confidentialité</a>
          <a href="#conditions" style={{ textDecoration: 'none', color: 'inherit' }}>Conditions</a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
            <span>🌐</span>
            <span>FR</span>
            <IconChevronDown />
          </div>
        </div>
      </footer>

    </div>
  );
}
