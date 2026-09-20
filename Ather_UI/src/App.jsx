import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import './styles/association/index.css';
import logoImg from './assets/logo.png';
import panoramicImg from './assets/algeria-panoramic.jpg';
import heroBgImg from './assets/athar-hero.png';
import BloodDonationCenter from './components/BloodDonationCenter';
import LiveCommunityFeed from './components/LiveCommunityFeed';
import ExploreThematicMagazine from './components/ExploreThematicMagazine';
import TraceabilityLedger from './components/TraceabilityLedger';
import DirectMessenger from './components/DirectMessenger';
import YouthSolidarityCorps from './components/YouthSolidarityCorps';
import LandingPage from './components/LandingPage';
import InteractiveActionMap from './components/InteractiveActionMap';
import atharLogoClean from './assets/athar-logo-clean.png';
import profileBannerImg from './assets/profile-banner-algiers.png';
import profileAvatarImg from './assets/profile-nadia-avatar.png';
import profileSidebarImg from './assets/profile-sidebar-algeria.png';
import candReboisementImg from './assets/candidature-reboisement.png';
import candLectureImg from './assets/candidature-lecture.png';
import candSangImg from './assets/candidature-sang.png';
import feedCraImg from './assets/feed-cra-distribution.png';
import missionPlantationZeralda from './assets/mission-plantation-zeralda.png';
import missionPlage from './assets/mission-plage.png';
import missionTipaza from './assets/mission-tipaza.png';
import missionPlantationForet from './assets/mission-reboisement-foret.png';
import missionEducationEnfants from './assets/mission-education-enfants.png';
import missionTipazaRuines from './assets/mission-tipaza-ruines.png';
import missionPatrimoineAntique from './assets/mission-patrimoine-antique.png';
import AssociationProfileFeed from './components/AssociationProfileFeed';
import AssociationPostProof from './components/AssociationPostProof';
import AssociationMessenger from './components/AssociationMessenger';
import AssociationMissions from './components/AssociationMissions';
import AssociationCalendar from './components/AssociationCalendar';
import AssociationCandidatures from './components/AssociationCandidatures';
import SavedOffers from './components/SavedOffers';
import assocCraLogo from './assets/assoc-cra-logo.png';

function IconCheckVerified({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#006D5B">
      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

// Clean SVG Icons (zero external library dependency, zero emoji)
function IconMessageSquare({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function IconHome({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function IconCompass({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  );
}

function IconDroplet({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
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

function IconCalendar({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
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

function IconShieldCheck({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function IconArrowRight({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}

function IconPaperclip({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
  );
}

function IconBuilding({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15"/>
      <path d="M15 10h4a1 1 0 0 1 1 1v10"/>
      <path d="M2 21h20"/>
      <path d="M7 9h.01M7 13h.01M7 17h.01M11 9h.01M11 13h.01M11 17h.01"/>
    </svg>
  );
}

function IconMail({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="m3 7 9 6 9-6"/>
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>
    </svg>
  );
}

function IconChevronLeft({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );
}

function IconChevronRight({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

function IconBriefcase({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function IconPackage({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  );
}

function IconSettings({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconPlus({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5v14"/>
    </svg>
  );
}

function IconLock({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function IconEye({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconX({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
}

function IconFileText({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" x2="8" y1="13" y2="13"/>
      <line x1="16" x2="8" y1="17" y2="17"/>
      <line x1="10" x2="8" y1="9" y2="9"/>
    </svg>
  );
}

function IconClock({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function IconAward({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function IconEdit({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  );
}

function IconCamera({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  );
}

function IconSun({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  );
}

function IconLayoutDashboard({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"/>
      <rect width="7" height="5" x="14" y="3" rx="1"/>
      <rect width="7" height="9" x="14" y="12" rx="1"/>
      <rect width="7" height="5" x="3" y="16" rx="1"/>
    </svg>
  );
}

function IconPlusCircle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8M12 8v8"/>
    </svg>
  );
}

function IconBell({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
  );
}

function IconChevronDown({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function IconTrendingUp({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}

function IconCoins({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6"/>
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
      <path d="M7 6h1v4"/>
      <path d="m16.7 13.5-.7.5"/>
    </svg>
  );
}

function IconLogOut({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  );
}

function IconHeart({ className = "w-4 h-4", filled = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "#e11d48" : "none"} stroke={filled ? "#e11d48" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );
}

function IconBookmark({ className = "w-4 h-4", filled = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
  );
}

function IconShare({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
    </svg>
  );
}

function IconCoffee({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v2M14 2v2M18 8h1a4 4 0 0 1 0 8h-1M6 2v2M3 8h15a2 2 0 0 1 2 2v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V10a2 2 0 0 1 2-2z"/>
    </svg>
  );
}

function IconBus({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6v6M16 6v6M2 12h20M4 18v2M20 18v2M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12H4V6z"/>
    </svg>
  );
}

function IconShirt({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
    </svg>
  );
}

function IconFilter({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  );
}

// Liste officielle des 69 wilayas d'Algérie

function IconExternalLink({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function IconDownload({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function IconPrinter({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"/>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect width="12" height="8" x="6" y="14"/>
    </svg>
  );
}

function IconStar({ className = "w-4 h-4", fill = "currentColor" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function IconBook({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
      <path d="M6 6h10"/>
      <path d="M6 10h10"/>
    </svg>
  );
}

function IconLeaf({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6"/>
    </svg>
  );
}

function IconActivity({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}

function IconHandHeart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/>
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L15 13"/>
      <path d="M19 5c0-1.7-1.3-3-3-3a3 3 0 0 0-2.4 1.2A3 3 0 0 0 11.2 2 3 3 0 0 0 8 5c0 2.8 4 6 5.6 7.2.2.2.6.2.8 0C16 11 19 7.8 19 5z"/>
    </svg>
  );
}

function IconPalette({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/>
    </svg>
  );
}

function IconPaw({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="4" r="2"/>
      <circle cx="18" cy="8" r="2"/>
      <circle cx="20" cy="16" r="2"/>
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
    </svg>
  );
}

function IconAlertCircle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

const WILAYAS_LIST = [

  { code: '01', name: 'Adrar' },
  { code: '02', name: 'Chlef' },
  { code: '03', name: 'Laghouat' },
  { code: '04', name: 'Oum El Bouaghi' },
  { code: '05', name: 'Batna' },
  { code: '06', name: 'Béjaïa' },
  { code: '07', name: 'Biskra' },
  { code: '08', name: 'Béchar' },
  { code: '09', name: 'Blida' },
  { code: '10', name: 'Bouira' },
  { code: '11', name: 'Tamanrasset' },
  { code: '12', name: 'Tébessa' },
  { code: '13', name: 'Tlemcen' },
  { code: '14', name: 'Tiaret' },
  { code: '15', name: 'Tizi Ouzou' },
  { code: '16', name: 'Alger' },
  { code: '17', name: 'Djelfa' },
  { code: '18', name: 'Jijel' },
  { code: '19', name: 'Sétif' },
  { code: '20', name: 'Saïda' },
  { code: '21', name: 'Skikda' },
  { code: '22', name: 'Sidi Bel Abbès' },
  { code: '23', name: 'Annaba' },
  { code: '24', name: 'Guelma' },
  { code: '25', name: 'Constantine' },
  { code: '26', name: 'Médéa' },
  { code: '27', name: 'Mostaganem' },
  { code: '28', name: "M'Sila" },
  { code: '29', name: 'Mascara' },
  { code: '30', name: 'Ouargla' },
  { code: '31', name: 'Oran' },
  { code: '32', name: 'El Bayadh' },
  { code: '33', name: 'Illizi' },
  { code: '34', name: 'Bordj Bou Arreridj' },
  { code: '35', name: 'Boumerdès' },
  { code: '36', name: 'El Tarf' },
  { code: '37', name: 'Tindouf' },
  { code: '38', name: 'Tissemsilt' },
  { code: '39', name: 'El Oued' },
  { code: '40', name: 'Khenchela' },
  { code: '41', name: 'Souk Ahras' },
  { code: '42', name: 'Tipaza' },
  { code: '43', name: 'Mila' },
  { code: '44', name: 'Aïn Defla' },
  { code: '45', name: 'Naâma' },
  { code: '46', name: 'Aïn Témouchent' },
  { code: '47', name: 'Ghardaïa' },
  { code: '48', name: 'Relizane' },
  { code: '49', name: 'Timimoun' },
  { code: '50', name: 'Bordj Badji Mokhtar' },
  { code: '51', name: 'Ouled Djellal' },
  { code: '52', name: 'Béni Abbès' },
  { code: '53', name: 'In Salah' },
  { code: '54', name: 'In Guezzam' },
  { code: '55', name: 'Touggourt' },
  { code: '56', name: 'Djanet' },
  { code: '57', name: "El M'Ghair" },
  { code: '58', name: 'El Meniaa' },
  { code: '59', name: 'Aflou' },
  { code: '60', name: 'Barika' },
  { code: '61', name: 'El Kantara' },
  { code: '62', name: 'Bir El Ater' },
  { code: '63', name: 'Ksar Chellala' },
  { code: '64', name: 'Aïn Oussera' },
  { code: '65', name: 'Messaad' },
  { code: '66', name: 'Ksar El Boukhari' },
  { code: '67', name: 'Bou Saâda' },
  { code: '68', name: 'El Abiodh Sidi Cheikh' },
  { code: '69', name: 'El Aricha' }
];

// Skeleton Placeholder for Mission Card
function MissionCardSkeleton() {
  return (
    <div className="mission-card skeleton-card">
      <div>
        <div className="mission-img-wrap skeleton-shimmer" style={{ height: '210px' }}>
          <div className="skeleton-badge skeleton-shimmer"></div>
        </div>
        <div className="mission-content">
          <div className="skeleton-line skeleton-shimmer" style={{ width: '45%', height: '14px', marginBottom: '12px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '85%', height: '20px', marginBottom: '10px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '60%', height: '20px', marginBottom: '16px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '100%', height: '13px', marginBottom: '8px' }}></div>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '88%', height: '13px', marginBottom: '22px' }}></div>
          <div className="mission-details">
            <div className="skeleton-line skeleton-shimmer" style={{ width: '55%', height: '14px' }}></div>
            <div className="skeleton-line skeleton-shimmer" style={{ width: '50%', height: '14px' }}></div>
            <div className="skeleton-line skeleton-shimmer" style={{ width: '65%', height: '14px' }}></div>
          </div>
        </div>
      </div>
      <div className="mission-action">
        <div className="skeleton-btn skeleton-shimmer"></div>
      </div>
    </div>
  );
}

// ============================================================================
// DICTIONNAIRE DE TRADUCTION MULTILINGUE (FR / AR / EN)
// ============================================================================
const translations = {
  fr: {
    navHome: "Accueil",
    navMissions: "Missions",
    navCorps: "Corps Solidaire",
    navExplore: "Explorer",
    navPulse: "Fil d'Impact",
    navBlood: "SOS Sang",
    navTrace: "Traçabilité",
    navMessages: "Messagerie",
    navVolunteers: "Bénévoles",
    navAssociations: "Associations",
    navAbout: "À propos",
    navBlog: "Blog",
    navSearch: "Recherche",
    navLogin: "Se connecter",
    navSignup: "S'inscrire",
    navBackToPublic: "← Retour au site public",
    
    heroBadge: "Initiative Citoyenne Nationale",
    heroTitle: "Chaque action laisse une empreinte.",
    heroSubtitle: "Que vous soyez un citoyen désireux de donner quelques heures ou une association en quête de forces vives, Athar vous accompagne.",
    heroExplore: "Explorer les missions",
    heroJoin: "Rejoindre la communauté",
    heroAssocSpace: "Espace Association",
    
    statVolunteers: "bénévoles inscrits",
    statAssocs: "associations partenaires",
    statMissions: "missions publiées",
    statWilayas: "wilayas couvertes",
    
    causesTitle: "Des causes qui ont besoin de vous",
    causesSubtitle: "Quelle que soit la cause qui vous touche, une mission vous attend. Découvrez les domaines dans lesquels notre communauté s'engage.",
    causeSolidarityTitle: "Solidarité",
    causeSolidarityDesc: "Soutenez les familles en difficulté, organisez des collectes et soyez présent pour votre communauté dans les moments durs.",
    causeEducationTitle: "Éducation",
    causeEducationDesc: "Accompagnez les enfants, animez des ateliers d'alphabétisation et ouvrez les portes du savoir à tous.",
    causeEnvironmentTitle: "Environnement",
    causeEnvironmentDesc: "Plantez des arbres, nettoyez les plages et les quartiers, et protégez la beauté naturelle de l'Algérie.",
    causeHealthTitle: "Santé",
    causeHealthDesc: "Participez aux campagnes de sensibilisation, aux dons du sang et aux initiatives de soin de proximité.",
    
    missionsEyebrow: "SUR LE TERRAIN",
    missionsSectionTitle: "Missions engagées près de chez vous",
    missionsSectionSub: "Explorez des missions vérifiées dans différentes wilayas et thématiques.",
    filterAll: "Toutes",
    filterSolidarity: "Solidarité",
    filterEducation: "Éducation",
    filterEnvironment: "Environnement",
    filterHealth: "Santé",
    spotsLeft: "places restantes",
    btnParticipate: "Participer",
    btnFull: "Complet",
    
    assocsSectionTitle: "Les associations qui font bouger l'Algérie",
    assocsSectionSub: "Des structures agréées et engagées sur le terrain dans les 69 wilayas.",
    btnViewAssoc: "Voir l'association",
    
    contactTitle: "Contactez-nous",
    contactLead: "Une question, une idée de partenariat, ou juste envie de dire bonjour ? Nous serions ravis d'échanger avec vous.",
    contactBtn: "Envoyer le message",
    
    footerTagline: "Des gens engagés. Une Algérie plus solidaire.",
    footerRights: "Tous droits réservés.",
    footerWilayas: "Présent dans les 69 wilayas",
    
    dashTitle: "Tableau de bord",
    dashNavOverview: "Vue générale",
    dashNavMissions: "Missions & Offres",
    dashNavCandidates: "Candidatures",
    dashNavProfile: "Profil Association",
    dashNavMembers: "Adhérents & Équipe",
    dashNavSettings: "Paramètres",
    dashNavLogout: "Déconnexion",
    dashWelcomeTitle: "Bonjour, El Baraka",
    dashWelcomeBadge: "Association vérifiée",
    dashWelcomeSub: "Gérez vos missions solidaires, mobilisez des bénévoles engagés et suivez l'impact de vos actions caritatives à travers les 69 wilayas.",
    dashBtnNewMission: "+ Créer une mission",
    dashStatActiveMissions: "Offres publiées",
    dashStatVolunteers: "Bénévoles touchés",
    dashStatPending: "Candidatures à traiter",
    dashStatWilayas: "Missions en cours",
    dashSearchPlaceholder: "Rechercher une mission (titre, lieu...)",
    dashFilterTheme: "Toutes les catégories",
    dashFilterDate: "Toutes les dates",
    dashFilterStatus: "Tous les statuts",
    dashStatusOpen: "Ouverte",
    dashStatusClosed: "Fermée (Complet)",
    dashCandidatesTitle: "Candidatures reçues",
    dashBtnAccept: "Accepter",
    dashBtnRefuse: "Refuser",
    dashBtnContact: "Contacter",
    
    modalLoginTitle: "Connexion à votre espace",
    tabVolunteer: "Bénévole",
    tabAssoc: "Association",
    labelEmail: "Adresse email",
    labelPassword: "Mot de passe",
    btnConnect: "Se connecter",
    noAccount: "Pas encore de compte ?",
    signupFree: "S'inscrire gratuitement"
  },
  ar: {
    navHome: "الرئيسية",
    navMissions: "الفرص التطوعية",
    navCorps: "فيلق التضامن",
    navExplore: "استكشف",
    navPulse: "نبض أثر",
    navBlood: "SOS دم",
    navTrace: "شفافية الأثر",
    navMessages: "الرسائل",
    navVolunteers: "المتطوعون",
    navAssociations: "الجمعيات",
    navAbout: "من نحن",
    navBlog: "المدونة",
    navSearch: "بحث",
    navLogin: "تسجيل الدخول",
    navSignup: "إنشاء حساب",
    navBackToPublic: "← العودة للموقع العام",
    
    heroBadge: "المبادرة الوطنية للعمل التطوعي",
    heroTitle: "كل عمل يترك أثراً.",
    heroSubtitle: "سواء كنت مواطناً يرغب في التطوع ببعض الوقت أو جمعية تبحث عن طاقات حية، منصة أثر ترافقك في كل خطوة.",
    heroExplore: "استكشف الفرص",
    heroJoin: "انضم إلى مجتمعنا",
    heroAssocSpace: "فضاء الجمعيات",
    
    statVolunteers: "متطوع مسجل",
    statAssocs: "جمعية شريكة",
    statMissions: "مبادرة منشورة",
    statWilayas: "ولاية مغطاة",
    
    causesTitle: "قضايا تحتاج إلى جهودكم",
    causesSubtitle: "مهما كانت القضية التي تهمك، هناك فرصة تطوعية بانتظارك. اكتشف المجالات التي ينشط فيها مجتمعنا.",
    causeSolidarityTitle: "التضامن والتكافل",
    causeSolidarityDesc: "مساندة العائلات المحتاجة، تنظيم قوافل الإغاثة وتقديم يد العون لمجتمعك في الأوقات الصعبة.",
    causeEducationTitle: "التعليم والتكوين",
    causeEducationDesc: "مرافقة الأطفال والشباب، تنشيط ورشات محو الأمية وفتح أبواب العلم والمعرفة للجميع.",
    causeEnvironmentTitle: "البيئة والتشجير",
    causeEnvironmentDesc: "المشاركة في حملات التشجير، تنظيف الشواطئ والأحياء وحماية الثروات الطبيعية لبلادنا.",
    causeHealthTitle: "الصحة والإسعاف",
    causeHealthDesc: "المساهمة في قوافل الفحص المجاني، حملات التبرع بالدم ونشر الوعي الصحي الميداني.",
    
    missionsEyebrow: "في الميدان",
    missionsSectionTitle: "مبادرات تطوعية قريبة منك",
    missionsSectionSub: "استكشف مبادرات معتمدة وموثوقة عبر مختلف الولايات والمجالات.",
    filterAll: "الكل",
    filterSolidarity: "تضامن",
    filterEducation: "تعليم",
    filterEnvironment: "بيئة",
    filterHealth: "صحة",
    spotsLeft: "مقاعد متبقية",
    btnParticipate: "مشاركة",
    btnFull: "مكتمل",
    
    assocsSectionTitle: "جمعيات رائدة تصنع الأثر",
    assocsSectionSub: "منظمات معتمدة وفاعلة ميدانياً عبر 69 ولاية في ربوع الوطن.",
    btnViewAssoc: "عرض الجمعية",
    
    contactTitle: "تواصل معنا",
    contactLead: "لديك استفسار، فكرة شراكة، أو ترغب في الانضمام إلينا؟ يسعدنا جداً التواصل والتعاون معك.",
    contactBtn: "إرسال الرسالة",
    
    footerTagline: "سواعد معطاءة، لأجل جزائر أكثر تكافلاً وتضامناً.",
    footerRights: "جميع الحقوق محفوظة.",
    footerWilayas: "حاضرون في 69 ولاية",
    
    dashTitle: "لوحة التحكم",
    dashNavOverview: "نظرة عامة",
    dashNavMissions: "المبادرات والفرص",
    dashNavCandidates: "طلبات التطوع",
    dashNavProfile: "الملف التعريفي",
    dashNavMembers: "الأعضاء والفريق",
    dashNavSettings: "الإعدادات",
    dashNavLogout: "تسجيل الخروج",
    dashWelcomeTitle: "مرحباً، جمعية البركة",
    dashWelcomeBadge: "جمعية معتمدة",
    dashWelcomeSub: "أدِر مبادراتك التطوعية، وجنّد متطوعين فاعلين، وتابع أثر نشاطك الخيري عبر 69 ولاية.",
    dashBtnNewMission: "+ مبادرة جديدة",
    dashStatActiveMissions: "فرص منشورة",
    dashStatVolunteers: "متطوع مجنّد",
    dashStatPending: "طلبات قيد المراجعة",
    dashStatWilayas: "مبادرات جارية",
    dashSearchPlaceholder: "ابحث عن مبادرة (العنوان، المكان...)",
    dashFilterTheme: "كافة المجالات",
    dashFilterDate: "كافة التواريخ",
    dashFilterStatus: "كافة الحالات",
    dashStatusOpen: "متاحة للتسجيل",
    dashStatusClosed: "مكتملة (مغلقة)",
    dashCandidatesTitle: "طلبات التطوع الواردة",
    dashBtnAccept: "قبول",
    dashBtnRefuse: "رفض",
    dashBtnContact: "مراسلة",
    
    modalLoginTitle: "تسجيل الدخول إلى حسابك",
    tabVolunteer: "متطوع",
    tabAssoc: "جمعية",
    labelEmail: "البريد الإلكتروني",
    labelPassword: "كلمة المرور",
    btnConnect: "تسجيل الدخول",
    noAccount: "ليس لديك حساب بعد؟",
    signupFree: "أنشئ حسابك مجاناً"
  },
  en: {
    navHome: "Home",
    navMissions: "Missions",
    navCorps: "Solidarity Corps",
    navExplore: "Explore",
    navPulse: "Athar Pulse",
    navBlood: "SOS Blood",
    navTrace: "Traceability",
    navMessages: "Messages",
    navVolunteers: "Volunteers",
    navAssociations: "Associations",
    navAbout: "About Us",
    navBlog: "Blog",
    navSearch: "Search",
    navLogin: "Log In",
    navSignup: "Sign Up",
    navBackToPublic: "← Back to Public Site",
    
    heroBadge: "National Volunteering Initiative",
    heroTitle: "Every action leaves an imprint.",
    heroSubtitle: "Whether you wish to dedicate a few hours or you are an association seeking motivated volunteers, Athar supports your journey.",
    heroExplore: "Explore Missions",
    heroJoin: "Join the Community",
    heroAssocSpace: "Association Space",
    
    statVolunteers: "registered volunteers",
    statAssocs: "partner charities",
    statMissions: "published missions",
    statWilayas: "wilayas covered",
    
    causesTitle: "Causes that need your support",
    causesSubtitle: "Whatever cause inspires you, a meaningful mission awaits. Discover the fields where our community is making a difference.",
    causeSolidarityTitle: "Solidarity & Care",
    causeSolidarityDesc: "Support families in need, organize charity drives, and stand by your community in challenging times.",
    causeEducationTitle: "Education & Literacy",
    causeEducationDesc: "Mentor children, host literacy workshops, and open the doors of knowledge to everyone.",
    causeEnvironmentTitle: "Environment & Ecology",
    causeEnvironmentDesc: "Plant trees, clean up beaches and neighborhoods, and protect Algeria's natural beauty.",
    causeHealthTitle: "Healthcare & Aid",
    causeHealthDesc: "Take part in health screening campaigns, voluntary blood donations, and local community care.",
    
    missionsEyebrow: "ON THE GROUND",
    missionsSectionTitle: "Meaningful missions near you",
    missionsSectionSub: "Explore verified opportunities across different wilayas and categories.",
    filterAll: "All",
    filterSolidarity: "Solidarity",
    filterEducation: "Education",
    filterEnvironment: "Environment",
    filterHealth: "Health",
    spotsLeft: "spots left",
    btnParticipate: "Join Mission",
    btnFull: "Full",
    
    assocsSectionTitle: "Organizations Making an Impact",
    assocsSectionSub: "Accredited charities actively working on the ground across all 69 wilayas.",
    btnViewAssoc: "View Charity",
    
    contactTitle: "Contact Us",
    contactLead: "Have a question, a partnership proposal, or just want to say hello? We'd love to hear from you.",
    contactBtn: "Send Message",
    
    footerTagline: "Committed people. A stronger, more supportive Algeria.",
    footerRights: "All rights reserved.",
    footerWilayas: "Present across 69 wilayas",
    
    dashTitle: "Dashboard",
    dashNavOverview: "Overview",
    dashNavMissions: "Missions & Needs",
    dashNavCandidates: "Applications",
    dashNavProfile: "Charity Profile",
    dashNavMembers: "Members & Team",
    dashNavSettings: "Settings",
    dashNavLogout: "Log Out",
    dashWelcomeTitle: "Hello, El Baraka",
    dashWelcomeBadge: "Verified Charity",
    dashWelcomeSub: "Manage volunteer missions, recruit dedicated helpers, and monitor the social impact of your actions across 69 wilayas.",
    dashBtnNewMission: "+ Create Mission",
    dashStatActiveMissions: "Published Offers",
    dashStatVolunteers: "Volunteers Engaged",
    dashStatPending: "Pending Reviews",
    dashStatWilayas: "Active Missions",
    dashSearchPlaceholder: "Search missions (title, location...)",
    dashFilterTheme: "All Categories",
    dashFilterDate: "All Dates",
    dashFilterStatus: "All Statuses",
    dashStatusOpen: "Open",
    dashStatusClosed: "Full (Closed)",
    dashCandidatesTitle: "Received Applications",
    dashBtnAccept: "Accept",
    dashBtnRefuse: "Decline",
    dashBtnContact: "Contact",
    
    modalLoginTitle: "Sign in to your account",
    tabVolunteer: "Volunteer",
    tabAssoc: "Association",
    labelEmail: "Email address",
    labelPassword: "Password",
    btnConnect: "Sign In",
    noAccount: "Don't have an account?",
    signupFree: "Sign up for free"
  }
};

// Composant Sélecteur de Langue élégant (zéro emoji, design épuré vert émeraude)
function LanguageDropdown({ currentLang, setCurrentLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'fr', label: 'Français', badge: 'FR' },
    { code: 'ar', label: 'العربية', badge: 'AR' },
    { code: 'en', label: 'English', badge: 'EN' }
  ];

  return (
    <div className="lang-dropdown-wrapper" ref={ref}>
      <button
        type="button"
        className="lang-dropdown-btn"
        onClick={() => setOpen(!open)}
        aria-label="Changer de langue"
        title="Changer de langue / Change language / تغيير اللغة"
      >
        <svg className="lang-globe-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="lang-current-code">{currentLang.toUpperCase()}</span>
        <svg className={`lang-chevron ${open ? 'rotate' : ''}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown-menu">
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              className={`lang-menu-item ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => {
                setCurrentLang(lang.code);
                setOpen(false);
              }}
            >
              <span>{lang.label}</span>
              <span className="lang-badge">{lang.badge}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Helper pour badges thématiques avec code couleur distinctif (Éducation, Environnement, Santé, Solidarité, Culture, Animaux)
function getCategoryBadgeTheme(category) {
  switch (category) {
    case 'Éducation':
      return {
        label: 'Éducation',
        color: '#1d4ed8',
        bg: '#dbeafe',
        border: '#bfdbfe',
        className: 'sdg-badge-education'
      };
    case 'Environnement':
      return {
        label: 'Climat & Nature',
        color: '#15803d',
        bg: '#dcfce7',
        border: '#bbf7d0',
        className: 'sdg-badge-environnement'
      };
    case 'Santé':
      return {
        label: 'Santé',
        color: '#be123c',
        bg: '#ffe4e6',
        border: '#fecdd3',
        className: 'sdg-badge-sante'
      };
    case 'Solidarité':
      return {
        label: 'Solidarité',
        color: '#b45309',
        bg: '#fef3c7',
        border: '#fde68a',
        className: 'sdg-badge-solidarite'
      };
    case 'Culture':
      return {
        label: 'Patrimoine & Culture',
        color: '#7e22ce',
        bg: '#f3e8ff',
        border: '#e9d5ff',
        className: 'sdg-badge-culture'
      };
    case 'Animaux':
      return {
        label: 'Protection Animale',
        color: '#005244',
        bg: '#ccfbf1',
        border: '#99f6e4',
        className: 'sdg-badge-animaux'
      };
    default:
      return {
        label: category || 'Action Citoyenne',
        color: '#006D5B',
        bg: '#f0fdf4',
        border: '#bbf7d0',
        className: 'sdg-badge-default'
      };
  }
}

// Helper pour résoudre les coordonnées GPS d'une mission (OpenStreetMap, Google Maps & Waze)
function getMissionCoordinates(mission) {
  if (mission?.coordinates?.lat && mission?.coordinates?.lon) {
    return { lat: Number(mission.coordinates.lat), lon: Number(mission.coordinates.lon) };
  }
  const text = `${mission?.practical_info?.exact_address || ''} ${mission?.location || ''} ${mission?.wilaya || ''}`.toLowerCase();

  // Alger & Communes
  if (text.includes('zéralda') || text.includes('zeralda')) return { lat: 36.7025, lon: 2.8500 };
  if (text.includes('bab ezzouar')) return { lat: 36.7160, lon: 3.1850 };
  if (text.includes('hydra') || text.includes('sidi yahia')) return { lat: 36.7450, lon: 3.0360 };
  if (text.includes('belouizdad') || text.includes('ruisseau') || text.includes('hamma')) return { lat: 36.7510, lon: 3.0640 };
  if (text.includes('casbah') || text.includes('martyrs')) return { lat: 36.7860, lon: 3.0580 };
  if (text.includes('bab el oued')) return { lat: 36.7900, lon: 3.0500 };
  if (text.includes('chéraga') || text.includes('cheraga')) return { lat: 36.7680, lon: 2.9550 };
  if (text.includes('dely ibrahim') || text.includes('dély ibrahim')) return { lat: 36.7530, lon: 2.9860 };
  if (text.includes('kouba')) return { lat: 36.7260, lon: 3.0850 };
  if (text.includes('el harrach')) return { lat: 36.7210, lon: 3.1360 };

  // Autres Wilayas
  if (text.includes('andalouses') || text.includes('oran')) return { lat: 35.7289, lon: -0.8711 };
  if (text.includes('constantine') || text.includes('benbadis')) return { lat: 36.3570, lon: 6.6147 };
  if (text.includes('tlemcen') || text.includes('mansourah')) return { lat: 34.8780, lon: -1.3361 };
  if (text.includes('tizi ouzou') || text.includes('djurdjura')) return { lat: 36.7167, lon: 4.0500 };
  if (text.includes('béjaïa') || text.includes('bejaia')) return { lat: 36.7509, lon: 5.0567 };
  if (text.includes('annaba')) return { lat: 36.9000, lon: 7.7667 };
  if (text.includes('sétif') || text.includes('setif')) return { lat: 36.1900, lon: 5.4100 };
  if (text.includes('blida')) return { lat: 36.4700, lon: 2.8300 };
  if (text.includes('batna')) return { lat: 35.5559, lon: 6.1741 };
  if (text.includes('biskra')) return { lat: 34.8500, lon: 5.7333 };
  if (text.includes('ghardaïa') || text.includes('ghardaia')) return { lat: 32.4909, lon: 3.6735 };
  if (text.includes('mostaganem')) return { lat: 35.9333, lon: 0.0833 };
  if (text.includes('chlef')) return { lat: 36.1654, lon: 1.3345 };

  // Défaut : Alger Centre
  return { lat: 36.7538, lon: 3.0588 };
}

export default function App() {
  // Langue courante ('fr' | 'ar' | 'en') avec persistance
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('athar_lang') || 'fr';
    }
    return 'fr';
  });

  // Gestion dynamique de la direction RTL et de la langue sur le document HTML
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('athar_lang', currentLang);
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [currentLang]);

  // Fonction utilitaire de traduction
  const t = (key) => {
    return translations[currentLang]?.[key] || translations['fr']?.[key] || key;
  };

  // Loading state with skeleton placeholders
  const [isMissionsLoading, setIsMissionsLoading] = useState(true);

  // View routing ('landing' | 'association' | 'volunteer')
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#association' || window.location.pathname.includes('dashboard_association')) {
        return 'association';
      }
      if (window.location.hash.startsWith('#volunteer') || window.location.pathname.includes('dashboard_benevole')) {
        return 'volunteer';
      }
    }
    return 'landing';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#association') {
        setCurrentView('association');
      } else if (window.location.hash.startsWith('#volunteer')) {
        setCurrentView('volunteer');
        if (window.location.hash === '#volunteer-map') {
          setVolunteerPortalTab('map');
        }
      } else if (window.location.hash === '#accueil' || !window.location.hash) {
        setCurrentView('landing');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // ========================================================
  // ESPACE BÉNÉVOLE — PORTAIL OPPORTUNITÉS & CV INTERACTIF (Style AIESEC)
  // ========================================================
  const [volunteerPortalTab, setVolunteerPortalTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#volunteer-map') {
      return 'map';
    }
    return 'feed';
  }); // 'feed' | 'profile' | 'missions' | 'explore' | 'blood' | 'messages' | 'traceability' | 'favorites' | 'settings' | 'map'
  const [profileSubTab, setProfileSubTab] = useState('overview'); // 'overview' | 'applications' | 'certificates'
  const [selectedMissionDetail, setSelectedMissionDetail] = useState(null);
  const [selectedCertificateDetail, setSelectedCertificateDetail] = useState(null);
  const [missionMapType, setMissionMapType] = useState('osm'); // 'osm' | 'google'

  // Filtres horizontaux Catalogue (Style AIESEC Search)
  const [volunteerSearchQuery, setVolunteerSearchQuery] = useState('');
  const [volunteerFilterWilaya, setVolunteerFilterWilaya] = useState('all');
  const [volunteerFilterTheme, setVolunteerFilterTheme] = useState('all');
  const [volunteerFilterDate, setVolunteerFilterDate] = useState('all'); // 'all' | 'weekend' | 'month' | 'upcoming'
  const [volunteerFilterBenefit, setVolunteerFilterBenefit] = useState('all'); // 'all' | 'transport' | 'food' | 'housing' | 'certificate'
  const [volunteerQuickTag, setVolunteerQuickTag] = useState('Tous');

  // Favoris & Candidatures
  const [volunteerFavorites, setVolunteerFavorites] = useState([1, 3, 5]);
  const [applyingMission, setApplyingMission] = useState(null);
  const [volunteerApplyNote, setVolunteerApplyNote] = useState('');

  // Topbar Dropdowns
  const [isVolunteerNotifOpen, setIsVolunteerNotifOpen] = useState(false);
  const [isVolunteerProfileOpen, setIsVolunteerProfileOpen] = useState(false);

  // Mode édition interactif pour le Profil / CV
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Profil officiel & CV interactif de Nadia Mansouri (Style AIESEC EP Profile)
  const [volunteerUser, setVolunteerUser] = useState({
    name: "Nadia Mansouri",
    firstName: "Nadia",
    initials: "NM",
    age: 24,
    email: "nadia.mansouri@gmail.com",
    phone: "+213 555 24 68 10",
    wilaya: "16 - Alger",
    commune: "Bab El Oued",
    headline: "Engagée pour un impact citoyen durable · Étudiante en Master Santé & Écologie",
    bio: "Passionnée par le développement communautaire, l'éducation bienveillante et l'action citoyenne sur le terrain. Convaincue que la jeunesse algérienne est le moteur du changement durable et solidaire.",
    availability: "Week-ends & Samedis",
    hoursVolunteered: 48,
    completedMissionsCount: 12,
    languages: [
      { name: "Arabe", level: "Langue maternelle / Courant" },
      { name: "Français", level: "Bilingue / C1" },
      { name: "Anglais", level: "Intermédiaire / B2" }
    ],
    skills: ["Soutien scolaire", "Animation d'ateliers", "Premiers secours", "Organisation logistique", "Communication"],
    interests: ["Éducation & Enfance", "Environnement & Climat", "Solidarité & Urgence", "Santé Publique"],
    pastExperiences: [
      {
        id: 1,
        role: "Tutrice Bénévole BEM",
        association: "Lire pour Demain",
        period: "Octobre 2024 – Présent",
        location: "Hydra, Alger",
        description: "Accompagnement méthodologique et aide aux devoirs pour 15 collégiens préparant leur examen d'entrée au lycée.",
        hours: 28
      },
      {
        id: 2,
        role: "Volontaire Reboisement & Préservation",
        association: "Association Terre Verte",
        period: "Janvier 2025 – Février 2025",
        location: "Massif du Djurdjura, Tizi Ouzou",
        description: "Plantation de 120 arbustes indigènes, balisage de sentiers et ateliers de sensibilisation à l'écosystème montagnard.",
        hours: 14
      },
      {
        id: 3,
        role: "Coordinatrice Collecte Grand Froid",
        association: "Association El Baraka",
        period: "Décembre 2024",
        location: "Alger Centre",
        description: "Tri logistique et acheminement de 400 colis de vêtements thermiques pour les familles isolées.",
        hours: 6
      }
    ]
  });

  // Candidatures actives de Nadia
  const [volunteerApplications, setVolunteerApplications] = useState([
    {
      id: 101,
      missionId: 1,
      missionTitle: "Plantation d'arbres et reboisement à Zéralda",
      associationName: "Association Green Future",
      wilaya: "16 - Alger",
      category: "Environnement",
      sdg: "Climat & Nature",
      duration: "6 heures (Journée)",
      date: "Sam. 12 avr. 2025",
      time: "9h00 – 15h00",
      status: "accepted", // 'pending' | 'accepted' | 'rejected' | 'completed'
      appliedDate: "10 Mars 2025",
      notes: "Candidature validée ! Rendez-vous au point de rassemblement à 08h45."
    },
    {
      id: 102,
      missionId: 3,
      missionTitle: "Ateliers de lecture et éveil artistique pour enfants",
      associationName: "Lire pour Demain",
      wilaya: "16 - Alger",
      category: "Éducation",
      sdg: "Éducation",
      duration: "3 heures (Après-midi)",
      date: "Mer. 16 avr. 2025",
      time: "14h00 – 17h00",
      status: "pending",
      appliedDate: "12 Mars 2025",
      notes: "En cours d'examen par le coordinateur pédagogique."
    },
    {
      id: 103,
      missionId: 2,
      missionTitle: "Campagne de distribution de colis alimentaires solidaires",
      associationName: "Croissant Rouge Algérien",
      wilaya: "16 - Alger",
      category: "Solidarité",
      sdg: "Solidarité",
      duration: "7 heures (Journée)",
      date: "15 Février 2025",
      time: "15h00 – 19h00",
      status: "completed",
      appliedDate: "01 Février 2025",
      hours: 6,
      notes: "Mission accomplie avec succès. Attestation officielle délivrée."
    }
  ]);

  // Certificats officiels Athar obtenus par Nadia
  const [volunteerCertificates, setVolunteerCertificates] = useState([
    {
      id: "CERT-2025-084",
      title: "Attestation d'Engagement Citoyen — Reboisement Djurdjura",
      associationName: "Association Terre Verte",
      date: "12 Février 2025",
      hours: 6,
      category: "Environnement",
      sdg: "Environnement & Nature",
      wilaya: "15 - Tizi Ouzou",
      verified: true,
      hash: "ATHAR-VERIF-8902-DZ"
    },
    {
      id: "CERT-2024-512",
      title: "Certificat de Volontariat — Collecte & Urgence Hiver",
      associationName: "Association El Baraka",
      date: "18 Décembre 2024",
      hours: 14,
      category: "Solidarité",
      sdg: "Solidarité & Entraide",
      wilaya: "16 - Alger",
      verified: true,
      hash: "ATHAR-VERIF-7721-DZ"
    },
    {
      id: "CERT-2024-329",
      title: "Attestation de Tutorat Pédagogique — BEM Réussite",
      associationName: "Lire pour Demain",
      date: "15 Octobre 2024",
      hours: 28,
      category: "Éducation",
      sdg: "Éducation & Jeunesse",
      wilaya: "16 - Alger",
      verified: true,
      hash: "ATHAR-VERIF-6540-DZ"
    }
  ]);

  // Notifications de Nadia
  const [volunteerNotifications, setVolunteerNotifications] = useState([
    {
      id: 1,
      title: "Candidature acceptée !",
      text: "Association Green Future a validé votre participation à la 'Plantation d'arbres à Zéralda'.",
      time: "Il y a 2h",
      unread: true
    },
    {
      id: 2,
      title: "Nouvelle opportunité Éducation",
      text: "Deux nouvelles missions de soutien scolaire sont ouvertes à Alger.",
      time: "Hier",
      unread: true
    },
    {
      id: 3,
      title: "Certificat disponible",
      text: "Votre attestation officielle pour 'Reboisement Djurdjura' a été émise.",
      time: "Il y a 3 jours",
      unread: false
    }
  ]);

  // Actions de favoris
  const toggleVolunteerFavorite = (missionId, e) => {
    if (e) e.stopPropagation();
    setVolunteerFavorites(prev => {
      const exists = prev.includes(missionId);
      if (exists) {
        showToast("Mission retirée de vos offres sauvegardées.");
        return prev.filter(id => id !== missionId);
      } else {
        showToast("Opportunité ajoutée à vos offres sauvegardées !");
        return [...prev, missionId];
      }
    });
  };

  // Candidature à une opportunité (1-clic ou formulaire)
  const handleApplyAsVolunteer = (mission) => {
    if (!mission) return;
    const already = volunteerApplications.find(a => a.missionId === mission.id);
    if (already) {
      showToast("Vous avez déjà postulé à cette opportunité.");
      setApplyingMission(null);
      return;
    }
    const newApp = {
      id: Date.now(),
      missionId: mission.id,
      missionTitle: mission.title,
      associationName: mission.association_name || mission.association || "Association Agréée",
      wilaya: mission.wilaya || mission.location || "16 - Alger",
      category: mission.category || "Solidarité",
      sdg: mission.category || "Action Citoyenne",
      duration: mission.duration || "Demi-journée",
      date: mission.date_str || mission.date || "À convenir",
      time: mission.time_str || "09h00 – 15h00",
      status: "pending",
      appliedDate: "Aujourd'hui",
      notes: volunteerApplyNote || "Candidature transmise via le Portail Bénévole Athar. Profil et CV partagés."
    };
    setVolunteerApplications(prev => [newApp, ...prev]);

    // Enregistrement sur la liste candidats de l'association
    const newCand = {
      id: Date.now(),
      missionId: mission.id,
      missionTitle: mission.title,
      name: volunteerUser.name,
      initials: "NM",
      wilaya: volunteerUser.wilaya,
      age: 24,
      email: volunteerUser.email,
      phone: volunteerUser.phone,
      skills: volunteerUser.skills,
      languages: volunteerUser.languages.map(l => l.name),
      motivation: volunteerApplyNote || volunteerUser.bio,
      appliedDate: "Aujourd'hui",
      status: "pending"
    };
    setCandidatesList(prev => [newCand, ...prev]);

    // Mise à jour des places restantes
    setMissionsList(prev => prev.map(m => {
      if (m.id === mission.id && m.spots_remaining > 0) {
        return { ...m, spots_remaining: m.spots_remaining - 1 };
      }
      return m;
    }));

    setApplyingMission(null);
    setVolunteerApplyNote('');
    showToast(`Candidature envoyée avec succès pour "${mission.title}" !`);
  };

  const handleCancelApplication = (appId) => {
    const app = volunteerApplications.find(a => a.id === appId);
    setVolunteerApplications(prev => prev.filter(a => a.id !== appId));
    if (app) {
      setCandidatesList(prev => prev.filter(c => !(c.missionId === app.missionId && c.name === volunteerUser.name)));
    }
    showToast("Candidature retirée.");
  };

  // Compétences interactives
  const [newSkillInput, setNewSkillInput] = useState('');
  const handleAddVolunteerSkill = (e) => {
    e?.preventDefault();
    if (!newSkillInput.trim()) return;
    if (volunteerUser.skills.includes(newSkillInput.trim())) {
      showToast("Cette compétence est déjà dans votre profil.");
      return;
    }
    setVolunteerUser(prev => ({
      ...prev,
      skills: [...prev.skills, newSkillInput.trim()]
    }));
    setNewSkillInput('');
    showToast("Compétence ajoutée au CV !");
  };

  const handleRemoveVolunteerSkill = (skillToRemove) => {
    setVolunteerUser(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skillToRemove)
    }));
    showToast("Compétence retirée.");
  };

  // Langues interactives
  const [newLangName, setNewLangName] = useState('');
  const [newLangLevel, setNewLangLevel] = useState('Courant');
  const handleAddLanguage = (e) => {
    e?.preventDefault();
    if (!newLangName.trim()) return;
    setVolunteerUser(prev => ({
      ...prev,
      languages: [...prev.languages, { name: newLangName.trim(), level: newLangLevel }]
    }));
    setNewLangName('');
    showToast("Langue ajoutée au CV !");
  };

  const handleRemoveLanguage = (langName) => {
    setVolunteerUser(prev => ({
      ...prev,
      languages: prev.languages.filter(l => l.name !== langName)
    }));
    showToast("Langue retirée.");
  };

  // Mot de passe
  const [volunteerPasswordForm, setVolunteerPasswordForm] = useState({
    current: '',
    newPass: '',
    confirmPass: ''
  });

  const handleUpdateVolunteerPassword = (e) => {
    e.preventDefault();
    if (!volunteerPasswordForm.newPass || volunteerPasswordForm.newPass !== volunteerPasswordForm.confirmPass) {
      showToast("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
    setVolunteerPasswordForm({ current: '', newPass: '', confirmPass: '' });
    showToast("Mot de passe mis à jour avec succès !");
  };

  // ASSOCIATION STATE EXTENSIONS
  const [editingMission, setEditingMission] = useState(null);
  const [isEditingAssocProfile, setIsEditingAssocProfile] = useState(false);
  const [assocPasswordForm, setAssocPasswordForm] = useState({
    current: '',
    newPass: '',
    confirmPass: ''
  });

  const handleUpdateAssocPassword = (e) => {
    e.preventDefault();
    if (!assocPasswordForm.newPass || assocPasswordForm.newPass !== assocPasswordForm.confirmPass) {
      showToast("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
    setAssocPasswordForm({ current: '', newPass: '', confirmPass: '' });
    showToast("Mot de passe association mis à jour avec succès !");
  };

  const handleSaveEditMission = (e) => {
    e.preventDefault();
    if (!editingMission) return;
    setAssociationMissions(prev => prev.map(m => {
      if (m.id === editingMission.id) {
        return {
          ...m,
          title: editingMission.title,
          category: editingMission.category,
          location: editingMission.location,
          wilaya: editingMission.wilaya || editingMission.location,
          date: editingMission.date,
          spots_total: parseInt(editingMission.spots_total, 10) || m.spots_total,
          description: editingMission.description
        };
      }
      return m;
    }));
    setEditingMission(null);
    showToast("Mission modifiée avec succès !");
  };

  const handleToggleMissionClose = (missionId) => {
    setAssociationMissions(prev => prev.map(m => {
      if (m.id === missionId) {
        const isFull = m.spots_registered >= m.spots_total;
        if (isFull) {
          showToast(`Mission "${m.title}" réouverte (+5 places) !`);
          return { ...m, spots_total: m.spots_total + 5 };
        } else {
          showToast(`Mission "${m.title}" clôturée.`);
          return { ...m, spots_registered: m.spots_total };
        }
      }
      return m;
    }));
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return next;
    });
  };

  // Active tab in SaaS sidebar:
  // 'profile' | 'traceability' | 'missions' | 'new_mission' | 'candidatures' | 'messages' | 'calendrier' | 'overview'
  const [dashActiveTab, setDashActiveTab] = useState('profile');
  const [calMonth, setCalMonth] = useState(new Date(2025, 3, 1)); // Avril 2025 (mois affiché au calendrier)
  const [selectedCandidateDetail, setSelectedCandidateDetail] = useState(null);
  const [selectedCandidateDrawer, setSelectedCandidateDrawer] = useState(null);

  // Topbar search, notifications, and profile menu
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Sub-tabs for Besoins & Collectes and Paramètres
  const [besoinsSubTab, setBesoinsSubTab] = useState('materiel'); // 'materiel' | 'fonds'
  const [settingsSubTab, setSettingsSubTab] = useState('general'); // 'general' | 'contact' | 'securite' | 'notifications'

  const [isCreatingMission, setIsCreatingMission] = useState(false);

  // Filtres et recherche de missions pour l'espace association
  const [missionSearchQuery, setMissionSearchQuery] = useState('');
  const [missionThemeFilter, setMissionThemeFilter] = useState('all');
  const [missionDateFilter, setMissionDateFilter] = useState('all');
  const [missionStatusFilter, setMissionStatusFilter] = useState('all');
  const [missionWilayaFilter, setMissionWilayaFilter] = useState('all');
  const [calendarMonthFilter, setCalendarMonthFilter] = useState('all');
  const [volunteerDirectorySearch, setVolunteerDirectorySearch] = useState('');
  const [volunteerSkillFilter, setVolunteerSkillFilter] = useState('all');

  // Association missions avec capacité et nombre d'inscrits
  const [associationMissions, setAssociationMissions] = useState([
    {
      id: 1,
      image: missionTipazaRuines,
      title: "Nettoyage du site antique de Tipaza",
      category: "Patrimoine & Environnement",
      location: "Tipaza",
      wilaya: "Tipaza",
      date: "3 mai 2025",
      dateISO: "2025-05-03",
      spots_registered: 34,
      spots_total: 40,
      description: "Préservation des vestiges historiques face à la mer et ramassage éco-responsable des déchets."
    },
    {
      id: 2,
      image: missionEducationEnfants,
      title: "Soutien scolaire & éveil pour enfants",
      category: "Éducation",
      location: "Constantine",
      wilaya: "Constantine",
      date: "21 mai 2025",
      dateISO: "2025-05-21",
      spots_registered: 18,
      spots_total: 30,
      description: "Séance de lecture, contes et accompagnement éducatif pour les écoliers de la wilaya."
    },
    {
      id: 3,
      image: missionPlantationForet,
      title: "Campagne de reboisement des forêts",
      category: "Environnement",
      location: "Tizi Ouzou",
      wilaya: "Tizi Ouzou",
      date: "26 avr. 2025",
      dateISO: "2025-04-26",
      spots_registered: 32,
      spots_total: 45,
      description: "Plantation de 1 000 arbustes pour la régénération du couvert forestier du massif du Djurdjura."
    },
    {
      id: 4,
      image: missionPatrimoineAntique,
      title: "Sauvegarde du littoral & vestiges antiques",
      category: "Patrimoine",
      location: "Tipaza Littoral",
      wilaya: "Tipaza",
      date: "17 mai 2025",
      dateISO: "2025-05-17",
      spots_registered: 35,
      spots_total: 50,
      description: "Opération de dépollution et valorisation citoyenne du site archéologique méditerranéen."
    }
  ]);

  // Candidatures reçues détaillées
  const [candidatesList, setCandidatesList] = useState([
    {
      id: 1,
      name: "Amine Bellouze",
      initials: "AB",
      missionId: 1,
      missionTitle: "Nettoyage du site antique de Tipaza",
      wilaya: "Tipaza",
      age: 24,
      email: "amine.bellouze@example.com",
      phone: "05 50 12 34 56",
      skills: ["Logistique", "Secourisme", "Informatique"],
      languages: ["Arabe", "Français", "Tamazight"],
      motivation: "Je souhaite consacrer mes week-ends à aider à préserver le patrimoine historique et environnemental de Tipaza.",
      appliedDate: "14 avr. 2025",
      status: "pending" // 'pending' | 'accepted' | 'rejected'
    },
    {
      id: 2,
      name: "Sara Louni",
      initials: "SL",
      missionId: 2,
      missionTitle: "Soutien scolaire & éveil pour enfants",
      wilaya: "Constantine",
      age: 22,
      email: "sara.louni@example.com",
      phone: "06 61 78 90 12",
      skills: ["Enseignement", "Français", "Mathématiques"],
      languages: ["Arabe", "Français", "Anglais"],
      motivation: "Étudiante en Master de langues, je souhaite donner des cours de soutien aux collégiens et enfants pour les préparer aux examens.",
      appliedDate: "15 avr. 2025",
      status: "pending"
    },
    {
      id: 3,
      name: "Yacine Kaci",
      initials: "YK",
      missionId: 1,
      missionTitle: "Nettoyage du site antique de Tipaza",
      wilaya: "Tipaza",
      age: 28,
      email: "yacine.kaci@example.com",
      phone: "07 72 45 67 89",
      skills: ["Chauffeur / Véhicule", "Logistique", "Coordination"],
      languages: ["Arabe", "Français"],
      motivation: "Je dispose d'un utilitaire et je peux assurer le transport des équipements d'entretien et de collecte des déchets sur le site.",
      appliedDate: "16 avr. 2025",
      status: "pending"
    },
    {
      id: 4,
      name: "Meriem Hadj",
      initials: "MH",
      missionId: 3,
      missionTitle: "Campagne de reboisement des forêts",
      wilaya: "Tizi Ouzou",
      age: 26,
      email: "meriem.hadj@example.com",
      phone: "05 55 98 76 54",
      skills: ["Biologie / Écologie", "Secourisme", "Animation"],
      languages: ["Tamazight", "Arabe", "Français"],
      motivation: "Passionnée de protection de l'environnement et membre d'un club de randonnée, je souhaite apporter mon énergie à la reforestation de nos forêts.",
      appliedDate: "17 avr. 2025",
      status: "accepted"
    }
  ]);

  // Traitement détaillé des candidatures
  const handleAcceptCandidate = (cand) => {
    const targetMission = associationMissions.find(m => m.id === cand.missionId);
    if (targetMission && targetMission.spots_registered >= targetMission.spots_total) {
      showToast(`Attention : La mission "${targetMission.title}" a déjà atteint sa capacité maximale (${targetMission.spots_total}/${targetMission.spots_total} bénévoles).`);
      return;
    }

    setCandidatesList(prev => prev.map(c => c.id === cand.id ? { ...c, status: 'accepted' } : c));
    
    // Incrémenter les inscrits de la mission si le candidat n'était pas déjà accepté
    if (targetMission && cand.status !== 'accepted') {
      setAssociationMissions(prev => prev.map(m => {
        if (m.id === targetMission.id) {
          const newRegistered = Math.min(m.spots_registered + 1, m.spots_total);
          return { ...m, spots_registered: newRegistered };
        }
        return m;
      }));
    }

    // Synchroniser avec les candidatures de l'espace bénévole
    setVolunteerApplications(prev => prev.map(va => {
      if (va.missionId === cand.missionId && (cand.name.includes("Nadia") || cand.name === volunteerUser.name)) {
        return { ...va, status: 'accepted', notes: "Candidature validée par l'association ! Vous êtes attendu sur le terrain." };
      }
      return va;
    }));

    if (selectedCandidateDetail && selectedCandidateDetail.id === cand.id) {
      setSelectedCandidateDetail(prev => ({ ...prev, status: 'accepted' }));
    }

    showToast(`✓ Candidature de ${cand.name} acceptée !`);
  };

  const handleRejectCandidate = (cand) => {
    const targetMission = associationMissions.find(m => m.id === cand.missionId);
    const wasAccepted = cand.status === 'accepted';

    setCandidatesList(prev => prev.map(c => c.id === cand.id ? { ...c, status: 'rejected' } : c));
    
    // Décrémenter si elle était acceptée auparavant
    if (wasAccepted && targetMission) {
      setAssociationMissions(prev => prev.map(m => {
        if (m.id === targetMission.id) {
          return { ...m, spots_registered: Math.max(0, m.spots_registered - 1) };
        }
        return m;
      }));
    }

    // Synchroniser avec les candidatures de l'espace bénévole
    setVolunteerApplications(prev => prev.map(va => {
      if (va.missionId === cand.missionId && (cand.name.includes("Nadia") || cand.name === volunteerUser.name)) {
        return { ...va, status: 'rejected', notes: "La mission a atteint son quota ou le profil n'a pas été retenu pour cette session." };
      }
      return va;
    }));

    if (selectedCandidateDetail && selectedCandidateDetail.id === cand.id) {
      setSelectedCandidateDetail(prev => ({ ...prev, status: 'rejected' }));
    }
    showToast(`Candidature de ${cand.name} refusée.`);
  };

  // Ajuster manuellement la capacité d'une mission
  const handleAdjustSpots = (missionId, delta) => {
    setAssociationMissions(prev => prev.map(m => {
      if (m.id === missionId) {
        const updated = Math.max(0, Math.min(m.spots_registered + delta, m.spots_total));
        return { ...m, spots_registered: updated };
      }
      return m;
    }));
  };

  // Filtrage dynamique des missions de l'association (Recherche, Date, Thème, Statut)
  const filteredAssociationMissions = associationMissions.filter((m) => {
    // 1. Recherche par mot-clé (titre, description, localisation/wilaya, date, catégorie)
    if (missionSearchQuery.trim()) {
      const q = missionSearchQuery.trim().toLowerCase();
      const matchTitle = m.title?.toLowerCase().includes(q);
      const matchDesc = m.description?.toLowerCase().includes(q);
      const matchLoc = m.location?.toLowerCase().includes(q) || m.wilaya?.toLowerCase().includes(q);
      const matchCat = m.category?.toLowerCase().includes(q);
      const matchDate = m.date?.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchLoc && !matchCat && !matchDate) return false;
    }

    // 2. Filtre par thème
    if (missionThemeFilter !== 'all') {
      if (m.category !== missionThemeFilter) return false;
    }

    // 3. Filtre par statut (Ouverte vs Complète)
    if (missionStatusFilter === 'open') {
      if (m.spots_registered >= m.spots_total) return false;
    } else if (missionStatusFilter === 'closed') {
      if (m.spots_registered < m.spots_total) return false;
    }

    // 4. Filtre par date / mois
    if (missionDateFilter === 'mars') {
      if (!m.date?.toLowerCase().includes('mars')) return false;
    } else if (missionDateFilter === 'avril') {
      if (!m.date?.toLowerCase().includes('avr')) return false;
    } else if (missionDateFilter === 'mai') {
      if (!m.date?.toLowerCase().includes('mai')) return false;
    }

    // 5. Filtre par wilaya
    if (missionWilayaFilter !== 'all') {
      if (m.location !== missionWilayaFilter && m.wilaya !== missionWilayaFilter) return false;
    }

    return true;
  }).sort((a, b) => {
    if (missionDateFilter === 'recent') {
      return b.id - a.id;
    } else if (missionDateFilter === 'oldest') {
      return a.id - b.id;
    }
    return 0;
  });

  // Besoins matériels & logistiques de l'association
  const [needsList, setNeedsList] = useState([
    {
      id: 1,
      title: "Paniers alimentaires de base",
      category: "Alimentation",
      needed: 300,
      collected: 210,
      unit: "paniers",
      urgency: "Haute",
      description: "Huile, semoule, farine, sucre, dattes pour les familles de la wilaya."
    },
    {
      id: 2,
      title: "Cartables et fournitures scolaires",
      category: "Éducation",
      needed: 150,
      collected: 150,
      unit: "kits",
      urgency: "Moyenne",
      description: "Cahiers, trousses, stylos et sacs à dos pour la rentrée."
    },
    {
      id: 3,
      title: "Trousses de secours et trousses médicales",
      category: "Santé",
      needed: 50,
      collected: 32,
      unit: "trousses",
      urgency: "Haute",
      description: "Matériel d'intervention rapide pour nos équipes de terrain."
    }
  ]);

  const [newNeedForm, setNewNeedForm] = useState({
    title: '',
    category: 'Alimentation',
    needed: '50',
    unit: 'unités',
    urgency: 'Moyenne',
    description: ''
  });

  const handleCreateNeed = (e) => {
    e.preventDefault();
    if (!newNeedForm.title) return;
    const item = {
      id: Date.now(),
      title: newNeedForm.title,
      category: newNeedForm.category,
      needed: parseInt(newNeedForm.needed, 10) || 50,
      collected: 0,
      unit: newNeedForm.unit,
      urgency: newNeedForm.urgency,
      description: newNeedForm.description || "Besoin logistique prioritaire pour nos actions sur le terrain."
    };
    setNeedsList([item, ...needsList]);
    setNewNeedForm({ title: '', category: 'Alimentation', needed: '50', unit: 'unités', urgency: 'Moyenne', description: '' });
    showToast("Nouveau besoin ajouté à votre espace association !");
  };

  // Profil officiel de l'association (Croissant Rouge Algérien)
  const [assocProfile, setAssocProfile] = useState({
    name: "Croissant Rouge Algérien",
    tagline: "Soulager les souffrances, protéger les plus vulnérables et bâtir des communautés plus résilientes en Algérie. ❤️",
    agrement: "DZ-1956-0001",
    creationYear: "1956",
    responsable: "Dr. Ibtissem Hamlaoui",
    wilaya: "16 - Alger",
    commune: "Alger-Centre",
    address: "Rue Mohamed Belouizdad",
    email: "contact@cra.dz",
    phone: "+213 21 65 33 22",
    domain: "Aide humanitaire, Santé & Premiers secours",
    description: "Le Croissant Rouge Algérien est une association humanitaire nationale, auxiliaire des pouvoirs publics, qui œuvre pour la protection de la vie, la santé et la dignité humaine. Nous mobilisons des bénévoles à travers tout le territoire pour porter assistance aux personnes vulnérables et renforcer la solidarité en Algérie."
  });

  // Formulaire de publication de mission en 5 étapes avec Live Preview
  const [newMissionForm, setNewMissionForm] = useState({
    title: '',
    category: 'Solidarité',
    location: '16 - Alger',
    commune: 'Bab El Oued',
    date: '10 mai 2025',
    spots: '15',
    description: '',
    requirements: 'Secourisme, Sens de l\'écoute, Ponctualité',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    status: 'active'
  });

  const handlePublishNewMission = (asDraft = false) => {
    if (!newMissionForm.title.trim()) {
      showToast("Veuillez saisir le titre de la mission.");
      return;
    }
    const totalSpots = parseInt(newMissionForm.spots, 10) || 10;
    const newM = {
      id: Date.now(),
      image: newMissionForm.image || 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      title: newMissionForm.title,
      category: newMissionForm.category,
      location: newMissionForm.location,
      wilaya: newMissionForm.location,
      commune: newMissionForm.commune,
      date: newMissionForm.date || 'À définir',
      spots_registered: 0,
      spots_total: totalSpots,
      description: newMissionForm.description || "Mission citoyenne ouverte aux bénévoles engagés d'Athar.",
      requirements: newMissionForm.requirements,
      status: asDraft ? 'brouillon' : 'active'
    };
    setAssociationMissions(prev => [newM, ...prev]);
    setNewMissionForm({
      title: '',
      category: 'Solidarité',
      location: '16 - Alger',
      commune: 'Bab El Oued',
      date: '10 mai 2025',
      spots: '15',
      description: '',
      requirements: 'Secourisme, Sens de l\'écoute, Ponctualité',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    });
    setDashActiveTab('missions');
    showToast(asDraft ? `Mission "${newM.title}" enregistrée comme brouillon.` : `Mission "${newM.title}" publiée avec succès (${totalSpots} places) !`);
  };

  const handleCreateMission = (e) => {
    e?.preventDefault();
    handlePublishNewMission(false);
  };

  // Collectes de fonds solidaires
  const [collectesList, setCollectesList] = useState([
    {
      id: 1,
      title: "Caravane Hivernale Grand Sud",
      category: "Solidarité",
      goal: 850000,
      raised: 620000,
      donorsCount: 142,
      wilaya: "11 - Tamanrasset",
      description: "Achat et acheminement de couvertures thermiques, vêtements d'hiver et denrées de première nécessité."
    },
    {
      id: 2,
      title: "Rénovation Bibliothèque École Rurale",
      category: "Éducation",
      goal: 450000,
      raised: 310000,
      donorsCount: 88,
      wilaya: "15 - Tizi Ouzou",
      description: "Aménagement d'un espace de lecture avec 500 livres et équipement informatique pour les écoliers."
    }
  ]);

  const [newCollecteForm, setNewCollecteForm] = useState({
    title: '',
    category: 'Solidarité',
    goal: '500000',
    wilaya: '16 - Alger',
    description: ''
  });
  const [showCollecteForm, setShowCollecteForm] = useState(false);
  const [showNeedForm, setShowNeedForm] = useState(false);

  const handleCreateCollecte = (e) => {
    e.preventDefault();
    if (!newCollecteForm.title.trim()) return;
    const item = {
      id: Date.now(),
      title: newCollecteForm.title,
      category: newCollecteForm.category,
      goal: parseInt(newCollecteForm.goal, 10) || 500000,
      raised: 0,
      donorsCount: 0,
      wilaya: newCollecteForm.wilaya,
      description: newCollecteForm.description || "Collecte solidaire pour action sur le terrain."
    };
    setCollectesList(prev => [item, ...prev]);
    setNewCollecteForm({ title: '', category: 'Solidarité', goal: '500000', wilaya: '16 - Alger', description: '' });
    setShowCollecteForm(false);
    showToast(`Collecte "${item.title}" lancée avec succès !`);
  };

  // Annuaire des bénévoles engagés auprès de l'association
  const [activeVolunteersList, setActiveVolunteersList] = useState([
    {
      id: 1,
      name: "Nadia Mansouri",
      initials: "NM",
      email: "nadia.mansouri@gmail.com",
      phone: "+213 555 24 68 10",
      wilaya: "16 - Alger",
      role: "Bénévole active",
      hours: 48,
      missionsCount: 12,
      skills: ["Soutien scolaire", "Animation d'ateliers", "Premiers secours", "Logistique"],
      status: "Actif"
    },
    {
      id: 2,
      name: "Amine Bellouze",
      initials: "AB",
      email: "amine.bellouze@example.com",
      phone: "05 50 12 34 56",
      wilaya: "06 - Béjaïa",
      role: "Bénévole terrain",
      hours: 36,
      missionsCount: 8,
      skills: ["Logistique", "Secourisme", "Informatique"],
      status: "Actif"
    },
    {
      id: 3,
      name: "Meriem Hadj",
      initials: "MH",
      email: "meriem.hadj@example.com",
      phone: "05 55 98 76 54",
      wilaya: "15 - Tizi Ouzou",
      role: "Coordinatrice bénévole",
      hours: 64,
      missionsCount: 15,
      skills: ["Biologie / Écologie", "Secourisme", "Animation"],
      status: "Actif"
    },
    {
      id: 4,
      name: "Yacine Kaci",
      initials: "YK",
      email: "yacine.kaci@example.com",
      phone: "07 72 45 67 89",
      wilaya: "16 - Alger",
      role: "Chauffeur & Logistique",
      hours: 28,
      missionsCount: 6,
      skills: ["Transport", "Logistique", "Coordination"],
      status: "Actif"
    }
  ]);

  // Modals state
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginProfile, setLoginProfile] = useState('association'); // 'volunteer' | 'association'
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [signupView, setSignupView] = useState('choice'); // 'choice' | 'ben' | 'asso'
  // Scan de l'agrément (simulation OCR) + champs auto-remplis
  const [assoScan, setAssoScan] = useState('idle'); // 'idle' | 'scanning' | 'done'
  const [assoScanName, setAssoScanName] = useState('');
  const [assoFields, setAssoFields] = useState({ nom: '', num: '', wilaya: '' });
  const [assoLogoName, setAssoLogoName] = useState('');
  const handleAgrementScan = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setAssoScanName(f.name);
    setAssoScan('scanning');
    setTimeout(() => {
      // valeurs extraites (démo) — à remplacer par l'OCR du backend
      setAssoFields({ nom: 'Association El Baraka', num: 'DZ-2019-04127', wilaya: 'Béjaïa' });
      setAssoScan('done');
    }, 1800);
  };
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [publishModalOpen, setPublishModalOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState('');
  const [appliedFileName, setAppliedFileName] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [candidateFilter, setCandidateFilter] = useState('all'); // 'all' | 'pending' | 'accepted' | 'rejected'

  // Category filter for missions
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('Toutes');

  // Initial skeleton loading timer
  useEffect(() => {
    const timer = setTimeout(() => setIsMissionsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat) => {
    if (cat === selectedCategoryFilter) return;
    setIsMissionsLoading(true);
    setSelectedCategoryFilter(cat);
    setTimeout(() => setIsMissionsLoading(false), 380);
  };

  const categories = [
    'Toutes',
    'Environnement',
    'Solidarité',
    'Éducation',
    'Santé',
    'Aide d\'urgence',
    'Patrimoine'
  ];

  // 6 verified Algerian missions from missions benev.png
  const [missionsList, setMissionsList] = useState([
    {
      id: 1,
      title: "Plantation d'arbres à Zéralda",
      association_name: "Green Future",
      category: "Climat",
      badge: "Climat",
      badgeBg: "#e6f7f3",
      badgeColor: "#006D5B",
      location: "Zéralda, Alger",
      wilaya: "Alger",
      date_str: "Sam. 12 avr. 2025",
      time_str: "9h00 – 15h00",
      duration: "1 jour",
      spots_remaining: 12,
      spots_total: 24,
      image_url: missionPlantationZeralda,
      description: "Participez à notre grande action de reboisement dans la forêt récréative de Zéralda. Ensemble, contribuons à restaurer la canopée méditerranéenne et à sensibiliser les familles à la biodiversité locale.",
      what_you_will_do: [
        "Accueil et orientation des équipes de bénévoles au point de ralliement",
        "Plantation assistée de jeunes plants d'arbres adaptés au climat local (pins, caroubiers, oliviers)",
        "Pose de tuteurs protecteurs et premier arrosage minutieux",
        "Sensibilisation des visiteurs du parc à la préservation des écosystèmes forestiers"
      ],
      useful_skills: ["Esprit d'équipe", "Sensibilité écologique", "Dynamisme de plein air"],
      practical_info: {
        exact_address: "Forêt récréative de Zéralda, Entrée Nord, RN11, Alger",
        catering: "Déjeuner convivial et rafraîchissements offerts",
        transport: "Navette bénévole gratuite depuis la station Tafourah",
        dress_code: "Tenue tout-terrain, pantalon résistant et baskets de marche",
        equipment: "Tout l'outillage et gants fournis sur place",
        insurance: "Assurance responsabilité civile bénévole incluse"
      },
      association_details: {
        verified: true,
        agreement: "W16/2019/342",
        rating: 4.9,
        reviews_count: 42,
        about: "ONG algérienne engagée pour la biodiversité et le reboisement périurbain."
      }
    },
    {
      id: 2,
      title: "Distribution de colis alimentaires",
      association_name: "Croissant Rouge Algérien",
      category: "Solidarité",
      badge: "Solidarité",
      badgeBg: "#fef3c7",
      badgeColor: "#b45309",
      location: "Bab Ezzouar, Alger",
      wilaya: "Alger",
      date_str: "Sam. 19 avr. 2025",
      time_str: "9h00 – 16h00",
      duration: "1 jour",
      spots_remaining: 20,
      spots_total: 40,
      image_url: feedCraImg,
      description: "Tri, conditionnement et distribution de colis de denrées alimentaires essentielles pour les familles dans le besoin à travers Alger.",
      what_you_will_do: [
        "Réception et contrôle des denrées non périssables",
        "Confection méticuleuse des colis alimentaires",
        "Aide à la distribution respectueuse auprès des familles"
      ],
      useful_skills: ["Rigueur logistique", "Empathie", "Esprit d'équipe"],
      practical_info: {
        exact_address: "Centre logistique CRA, Bab Ezzouar, Alger",
        catering: "Repas chaud et boissons chaudes offerts",
        transport: "Accessible via le tramway station Bab Ezzouar Sud",
        dress_code: "Tenue décontractée confortable et baskets fermées",
        equipment: "Chasubles officielles CRA et gants fournis",
        insurance: "Couverture intégrale Croissant-Rouge Algérien"
      },
      association_details: {
        verified: true,
        agreement: "AGR-NAT-1962",
        rating: 4.95,
        reviews_count: 87,
        about: "Comité national de secours et d'aide humanitaire en Algérie."
      }
    },
    {
      id: 3,
      title: "Ateliers de lecture pour enfants",
      association_name: "Lire pour Demain",
      category: "Éducation",
      badge: "Éducation",
      badgeBg: "#dbeafe",
      badgeColor: "#1d4ed8",
      location: "Hydra, Alger",
      wilaya: "Alger",
      date_str: "Mer. 16 avr. 2025",
      time_str: "14h00 – 17h00",
      duration: "1 demi-journée",
      spots_remaining: 8,
      spots_total: 16,
      image_url: candLectureImg,
      description: "Ateliers ludiques de lecture bilingue, jeux créatifs et contes animés pour stimuler l'imagination et l'éveil artistique des enfants.",
      what_you_will_do: [
        "Animation de séances de contes vivants en petit groupe",
        "Accompagnement des enfants dans l'expression orale et le dessin",
        "Distribution des livres de la bibliothèque mobile"
      ],
      useful_skills: ["Patience", "Pédagogie", "Écoute et bienveillance"],
      practical_info: {
        exact_address: "Centre Culturel Communautaire, Hydra, Alger",
        catering: "Goûter et rafraîchissements partagés",
        transport: "Bus lignes 11 et 34, arrêt Hydra Centre",
        dress_code: "Tenue soignée et décontractée",
        equipment: "Matériel pédagogique et livres fournis",
        insurance: "Assurance activités éducatives comprise"
      },
      association_details: {
        verified: true,
        agreement: "W16/2021/118",
        rating: 4.88,
        reviews_count: 29,
        about: "Association pour l'accès aux livres et l'éveil culturel des enfants."
      }
    },
    {
      id: 4,
      title: "Nettoyage des plages",
      association_name: "Association El Baraka",
      category: "Environnement",
      badge: "Environnement",
      badgeBg: "#dcfce7",
      badgeColor: "#15803d",
      location: "Aïn Taya, Alger",
      wilaya: "Alger",
      date_str: "Ven. 2 mai 2025",
      time_str: "8h30 – 14h00",
      duration: "1 jour",
      spots_remaining: 15,
      spots_total: 30,
      image_url: missionPlage,
      description: "Opération éco-citoyenne de nettoyage et ramassage des déchets le long du littoral pour préserver notre écosystème marin.",
      what_you_will_do: [
        "Ramassage et tri sélectif des plastiques sur le littoral",
        "Sensibilisation des visiteurs de la plage à la préservation marine"
      ],
      useful_skills: ["Dynamisme", "Sensibilité environnementale", "Esprit d'équipe"],
      practical_info: {
        exact_address: "Plage des Ondines, Aïn Taya, Alger",
        catering: "Eau fraîche et déjeuner léger offerts",
        transport: "Point de rassemblement station navette Aïn Taya",
        dress_code: "Casquette, lunettes de soleil et baskets fermées",
        equipment: "Pinces de ramassage, sacs poubelle et gants fournis",
        insurance: "Assurance responsabilité civile incluse"
      },
      association_details: {
        verified: true,
        agreement: "W16/2020/215",
        rating: 4.85,
        reviews_count: 53,
        about: "Organisation de solidarité et d'actions citoyennes concrètes."
      }
    },
    {
      id: 5,
      title: "Collecte de sang",
      association_name: "CHU Mustapha",
      category: "Santé",
      badge: "Santé",
      badgeBg: "#ffe4e6",
      badgeColor: "#be123c",
      location: "Alger",
      wilaya: "Alger",
      date_str: "Jeu. 8 mai 2025",
      time_str: "9h00 – 13h00",
      duration: "1 demi-journée",
      spots_remaining: 10,
      spots_total: 20,
      image_url: candSangImg,
      description: "Appui logistique et accueil des donneurs de sang au Centre de Transfusion Sanguine du CHU Mustapha pour sécuriser les réserves hospitalières.",
      what_you_will_do: [
        "Accueil bienveillant et orientation des donneurs",
        "Distribution des collations et collation de repos post-don"
      ],
      useful_skills: ["Empathie", "Organisation", "Sens de l'écoute"],
      practical_info: {
        exact_address: "CTS Pavillon Pasteur, CHU Mustapha Pacha, Alger",
        catering: "Collation complète offerte",
        transport: "Métro station Khelifa Boukhalfa (sortie CHU)",
        dress_code: "Tenue sobre et souliers plats confortables",
        equipment: "Badges officiels et blouses d'accueil fournis",
        insurance: "Couverture officielle établissement hospitalier"
      },
      association_details: {
        verified: true,
        agreement: "CHU-ALG-01",
        rating: 4.95,
        reviews_count: 65,
        about: "Centre hospitalo-universitaire Mustapha Pacha, CTS central d'Alger."
      }
    },
    {
      id: 6,
      title: "Nettoyage du site de Tipaza",
      association_name: "Jeunesse & Patrimoine",
      category: "Patrimoine",
      badge: "Patrimoine",
      badgeBg: "#ede9fe",
      badgeColor: "#6d28d9",
      location: "Tipaza",
      wilaya: "Tipaza",
      date_str: "Sam. 10 mai 2025",
      time_str: "9h00 – 16h00",
      duration: "1 jour",
      spots_remaining: 12,
      spots_total: 24,
      image_url: missionTipaza,
      description: "Journée de valorisation et nettoyage respectueux des sentiers du parc archéologique romain de Tipaza, joyau classé UNESCO.",
      what_you_will_do: [
        "Dépollution minutieuse des abords des ruines antiques",
        "Pose de panneaux de sensibilisation au respect des monuments historiques"
      ],
      useful_skills: ["Amour du patrimoine", "Endurance", "Esprit d'équipe"],
      practical_info: {
        exact_address: "Parc Archéologique de Tipaza, Route des Ruines",
        catering: "Déjeuner traditionnel offert avec vue sur la Méditerranée",
        transport: "Navette au départ d'Alger Tafourah à 7h45",
        dress_code: "Chapeau, chaussures de marche et protection solaire",
        equipment: "Tout le matériel de nettoyage fourni",
        insurance: "Couverture intégrale garantie"
      },
      association_details: {
        verified: true,
        agreement: "W42/2021/088",
        rating: 4.92,
        reviews_count: 38,
        about: "Association dédiée à la valorisation et protection du patrimoine historique algérien."
      }
    }
  ]);

  const filteredMissions = missionsList.filter((m) => {
    if (selectedCategoryFilter === 'Toutes') return true;
    return m.category.toLowerCase() === selectedCategoryFilter.toLowerCase();
  });

  // Animated counters on scroll
  const statsRef = useRef(null);
  const [counts, setCounts] = useState({
    volunteers: 0,
    associations: 0,
    missions: 0,
    wilayas: 0
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    let animFrame = null;
    const duration = 1600;
    const targets = {
      volunteers: 12500,
      associations: 350,
      missions: 1200,
      wilayas: 69
    };

    const runCount = () => {
      let t0 = null;
      const step = (ts) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCounts({
          volunteers: Math.round(targets.volunteers * ease),
          associations: Math.round(targets.associations * ease),
          missions: Math.round(targets.missions * ease),
          wilayas: Math.round(targets.wilayas * ease)
        });
        if (p < 1) {
          animFrame = requestAnimationFrame(step);
        } else {
          setCounts(targets);
        }
      };
      animFrame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  const openLogin = (profile = 'volunteer') => {
    setLoginProfile(profile);
    setSignupModalOpen(false);
    setLoginModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLogin = () => {
    setLoginModalOpen(false);
    document.body.style.overflow = '';
  };

  const openSignup = (view = 'choice') => {
    setLoginModalOpen(false);
    setSignupView(view);
    setSignupModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSignup = () => {
    setSignupModalOpen(false);
    document.body.style.overflow = '';
  };

  const openApply = (missionTitle) => {
    setSelectedMission(missionTitle);
    setAppliedFileName('');
    setApplyModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApply = () => {
    setApplyModalOpen(false);
    document.body.style.overflow = '';
  };

  const closePublish = () => {
    setPublishModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#association') {
        setCurrentView('association');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#volunteer') {
        setCurrentView('volunteer');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#accueil' || window.location.hash === '' || window.location.hash === '#missions') {
        setCurrentView('landing');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLogin();
        closeSignup();
        closeApply();
        closePublish();
        setSelectedCandidateDetail(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalSpotsTarget = associationMissions.reduce((acc, m) => acc + (m.spots_total || 0), 0);
  const totalSpotsRegistered = associationMissions.reduce((acc, m) => acc + (m.spots_registered || 0), 0);
  const fullMissionsCount = associationMissions.filter(m => m.spots_registered >= m.spots_total).length;
  const pendingCandidatesCount = candidatesList.filter(c => c.status === 'pending').length;
  const fillRate = totalSpotsTarget > 0 ? Math.round((totalSpotsRegistered / totalSpotsTarget) * 100) : 0;

  return (
    <div className={`app-root ${currentLang === 'ar' ? 'rtl-mode' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Toast Notification (zero emoji) */}
      {toastMessage && (
        <div className="toast-notice">
          <IconCheck className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. LANDING PAGE OFFICIELLE */}
      {currentView === 'landing' && (
        <LandingPage
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={t}
          volunteerUser={volunteerUser}
          openLogin={openLogin}
          openSignup={openSignup}
          showToast={showToast}
          LanguageDropdown={LanguageDropdown}
          missions={missionsList}
        />
      )}

      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* 2. MODERN SAAS DASHBOARD (ATHAR OS)                      */}
      {/* ======================================================== */}
      {currentView === 'association' && (
        <div className="saas-dashboard-root">
          {/* 1. SIDEBAR FIXE À GAUCHE */}
          <aside className="saas-sidebar">
            {/* Logo officiel d'Athar unique sans aucun texte à côté */}
            <div className="saas-sidebar-logo-wrap">
              <img
                src={logoImg}
                alt="Athar منصة أثر"
                className="saas-sidebar-logo"
                onClick={() => {
                  setCurrentView('landing');
                  window.location.hash = '#accueil';
                }}
                title="Retour au site public"
              />
            </div>

            {/* Navigation verticale Espace Association : 7 onglets conformes aux maquettes */}
            <nav className="saas-sidebar-nav">
              {/* 1. ACCUEIL / FEED PROFIL */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'profile' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('profile')}
              >
                <IconHome className="w-4 h-4" />
                <span>Accueil</span>
              </button>

              {/* 2. PUBLICATIONS / PREUVES */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'traceability' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('traceability')}
              >
                <IconEdit className="w-4 h-4" />
                <span>Publications</span>
              </button>

              {/* 3. MISSIONS */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'missions' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('missions')}
              >
                <IconBriefcase className="w-4 h-4" />
                <span>Missions</span>
                <span className="saas-nav-badge">24</span>
              </button>

              {/* 4. CANDIDATURES */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'candidatures' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('candidatures')}
              >
                <IconUsers className="w-4 h-4" />
                <span>Candidatures</span>
                <span className="saas-nav-badge alert">24</span>
              </button>

              {/* 5. MESSAGES AVEC POINT ROUGE */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'messages' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('messages')}
              >
                <IconMessageSquare className="w-4 h-4" />
                <span>Messages</span>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', marginLeft: 'auto' }}></span>
              </button>

              {/* 6. CALENDRIER */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'calendrier' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('calendrier')}
              >
                <IconCalendar className="w-4 h-4" />
                <span>Calendrier</span>
              </button>

              {/* 7. PROFIL */}
              <button
                type="button"
                className={`saas-nav-item ${dashActiveTab === 'parametres' ? 'active' : ''}`}
                onClick={() => setDashActiveTab('profile')}
              >
                <IconUsers className="w-4 h-4" />
                <span>Profil</span>
              </button>
            </nav>

            {/* Bas de sidebar : Carte promotionnelle Algiers / Makam Echahid */}
            <div className="saas-sidebar-footer" style={{ padding: '14px' }}>
              <div
                style={{
                  backgroundImage: `url(${profileSidebarImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '190px',
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '14px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onClick={() => {
                  setCurrentView('landing');
                  window.location.hash = '#accueil';
                }}
                title="Retour à l'accueil Athar"
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)' }} />
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '13px', lineHeight: 1.25, color: '#ffffff', margin: 0 }}>
                      Ensemble<br />pour une Algérie<br />plus solidaire
                    </h4>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', marginTop: '8px' }}>
                      →
                    </div>
                  </div>
                  <div style={{ marginTop: '28px', textAlign: 'right' }}>
                    <span
                      style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '13px', fontWeight: 700, display: 'block', color: '#ffffff' }}
                    >
                      Des citoyens,<br />Un impact réel.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>


          {/* 2. ZONE PRINCIPALE DE CONTENU */}
          <div className="saas-main-area">
            {/* TOPBAR ÉPURÉE */}
            <header className="saas-topbar">
              {/* Barre de recherche globale */}
              <div className="saas-global-search">
                <IconSearch className="w-4 h-4" style={{ color: '#94a3b8', flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Rechercher des associations, missions, publications..."
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                />
                {globalSearchQuery && (
                  <button
                    type="button"
                    className="saas-search-clear"
                    onClick={() => setGlobalSearchQuery('')}
                    title="Effacer"
                  >
                    <IconX className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Actions à droite : Sélecteur de langue, Notifications, Profil circulaire */}
              <div className="saas-topbar-right">
                <LanguageDropdown currentLang={currentLang} setCurrentLang={setCurrentLang} />

                {/* Bouton cloche avec pastille rouge et menu notifications */}
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    className="saas-notif-btn"
                    onClick={() => {
                      setIsNotifOpen(!isNotifOpen);
                      setIsProfileMenuOpen(false);
                    }}
                    title="Notifications"
                  >
                    <IconBell className="w-4 h-4" />
                    {pendingCandidatesCount > 0 && <span className="saas-notif-badge"></span>}
                  </button>

                  {isNotifOpen && (
                    <div className="saas-notif-dropdown">
                      <div className="saas-notif-header">
                        <strong>Notifications ({pendingCandidatesCount})</strong>
                        <small style={{ color: 'var(--emerald-main)', cursor: 'pointer', fontWeight: 700 }} onClick={() => setIsNotifOpen(false)}>
                          Fermer
                        </small>
                      </div>
                      {candidatesList.filter(c => c.status === 'pending').slice(0, 3).map((cand) => (
                        <div
                          key={cand.id}
                          className="saas-notif-item"
                          onClick={() => {
                            setSelectedCandidateDrawer(cand);
                            setIsNotifOpen(false);
                            setDashActiveTab('candidatures');
                          }}
                        >
                          <div className="saas-notif-avatar">{cand.initials}</div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a' }}>
                              Candidature reçue : {cand.name}
                            </div>
                            <small style={{ fontSize: '11px', color: '#64748b', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                              {cand.missionTitle} · {cand.wilaya}
                            </small>
                          </div>
                        </div>
                      ))}
                      <div style={{ padding: '10px 16px', background: '#f8fafc', textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
                        <button
                          type="button"
                          style={{ border: 'none', background: 'none', color: 'var(--emerald-main)', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
                          onClick={() => {
                            setDashActiveTab('candidatures');
                            setIsNotifOpen(false);
                          }}
                        >
                          Gérer les candidatures →
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profil utilisateur circulaire : Association El Amel | Alger */}
                <div style={{ position: 'relative' }}>
                  <div
                    className="saas-user-pill"
                    onClick={() => {
                      setIsProfileMenuOpen(!isProfileMenuOpen);
                      setIsNotifOpen(false);
                    }}
                  >
                    <div className="saas-user-avatar" style={{ padding: '2px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '50%', overflow: 'hidden' }}>
                      <img src={assocCraLogo} alt="CRA" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="saas-user-info">
                      <span className="saas-user-name">Croissant Rouge Algérien</span>
                      <span className="saas-user-wilaya">Association</span>
                    </div>
                    <IconChevronDown className="w-3.5 h-3.5" style={{ color: '#94a3b8' }} />
                  </div>

                  {isProfileMenuOpen && (
                    <div className="saas-profile-dropdown">
                      <div className="saas-profile-dropdown-header">
                        <strong>{assocProfile.name}</strong>
                        <small>{assocProfile.wilaya} · {assocProfile.agrement}</small>
                      </div>
                      <button
                        type="button"
                        className="saas-dropdown-item"
                        onClick={() => {
                          setDashActiveTab('overview');
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        <IconLayoutDashboard className="w-4 h-4" />
                        <span>Tableau de bord</span>
                      </button>
                      <button
                        type="button"
                        className="saas-dropdown-item"
                        onClick={() => {
                          setDashActiveTab('missions');
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        <IconBriefcase className="w-4 h-4" />
                        <span>Mes missions</span>
                      </button>
                      <button
                        type="button"
                        className="saas-dropdown-item"
                        onClick={() => {
                          setDashActiveTab('parametres');
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        <IconSettings className="w-4 h-4" />
                        <span>Paramètres & Profil</span>
                      </button>
                      <div className="saas-dropdown-divider" />
                      <button
                        type="button"
                        className="saas-dropdown-item danger"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          setCurrentView('landing');
                          window.location.hash = '#accueil';
                          showToast("Déconnexion réussie. À bientôt !");
                        }}
                      >
                        <IconLogOut className="w-4 h-4" />
                        <span>Se déconnecter</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>

            {/* CONTENU PRINCIPAL SELON dashActiveTab */}
            <main className="saas-content-body">
              {/* ======================================================== */}
              {/* VUE PROFIL / FEED COMME INSTA (feed.png)                 */}
              {/* ======================================================== */}
              {(dashActiveTab === 'profile' || dashActiveTab === 'parametres') && (
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                  <AssociationProfileFeed onNavigateNewPost={() => setDashActiveTab('traceability')} />
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 1 : TABLEAU DE BORD (OVERVIEW)                      */}
              {/* ======================================================== */}
              {dashActiveTab === 'overview' && (
                <div>
                  {/* BONJOUR ASSOCIATION (charte ATHAR) */}
                  <div className="portal-welcome" style={{ marginBottom: '22px' }}>
                    <h1 className="pw-hi">
                      {t('dashWelcomeTitle')}
                      <span className="pw-verif"><IconShieldCheck className="w-4 h-4" /> {t('dashWelcomeBadge')}</span>
                    </h1>
                    <p className="pw-sub">{t('dashWelcomeSub')}</p>
                  </div>

                  {/* 4 Cartes Métriques SaaS avec badges d'évolution */}
                  <div className="saas-metrics-grid">
                    <div className="saas-metric-card">
                      <div className="saas-metric-top">
                        <span className="saas-metric-label">Missions actives</span>
                        <span className="saas-metric-badge green">
                          <IconTrendingUp className="w-3 h-3" /> +1 ce mois
                        </span>
                      </div>
                      <div className="saas-metric-value">
                        {associationMissions.filter(m => m.spots_registered < m.spots_total && m.status !== 'brouillon').length}
                        <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 600 }}> / {associationMissions.length}</span>
                      </div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>Sur 4 wilayas partenaires</small>
                    </div>

                    <div className="saas-metric-card">
                      <div className="saas-metric-top">
                        <span className="saas-metric-label">Bénévoles mobilisés</span>
                        <span className="saas-metric-badge green">
                          <IconTrendingUp className="w-3 h-3" /> +18% ce mois
                        </span>
                      </div>
                      <div className="saas-metric-value">{totalSpotsRegistered}</div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>Sur {totalSpotsTarget} places ouvertes</small>
                    </div>

                    <div className="saas-metric-card">
                      <div className="saas-metric-top">
                        <span className="saas-metric-label">Candidatures reçues</span>
                        {pendingCandidatesCount > 0 ? (
                          <span className="saas-metric-badge amber">
                            {pendingCandidatesCount} en attente
                          </span>
                        ) : (
                          <span className="saas-metric-badge green">À jour</span>
                        )}
                      </div>
                      <div className="saas-metric-value">{candidatesList.length}</div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>{candidatesList.filter(c => c.status === 'accepted').length} profils validés</small>
                    </div>

                    <div className="saas-metric-card">
                      <div className="saas-metric-top">
                        <span className="saas-metric-label">Taux de mobilisation</span>
                        <span className="saas-metric-badge blue">
                          <IconTrendingUp className="w-3 h-3" /> +12% ce mois
                        </span>
                      </div>
                      <div className="saas-metric-value">{fillRate}%</div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>Excellent taux de réponse terrain</small>
                    </div>
                  </div>

                  {/* Raccourcis d'actions rapides */}
                  <div className="saas-quick-actions">
                    <button
                      type="button"
                      className="saas-quick-btn primary"
                      onClick={() => setDashActiveTab('new_mission')}
                    >
                      <IconPlus className="w-4 h-4" />
                      <span>Publier une mission</span>
                    </button>
                    <button
                      type="button"
                      className="saas-quick-btn outline"
                      onClick={() => {
                        setDashActiveTab('besoins_collectes');
                        setBesoinsSubTab('materiel');
                        setShowNeedForm(true);
                      }}
                    >
                      <IconPackage className="w-4 h-4" />
                      <span>Créer un besoin matériel</span>
                    </button>
                    <button
                      type="button"
                      className="saas-quick-btn outline"
                      onClick={() => {
                        setDashActiveTab('besoins_collectes');
                        setBesoinsSubTab('fonds');
                        setShowCollecteForm(true);
                      }}
                    >
                      <IconCoins className="w-4 h-4" />
                      <span>Lancer une collecte de dons</span>
                    </button>
                  </div>

                  {/* Grille 2 colonnes : Missions en cours & Candidatures récentes */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '22px', alignItems: 'start' }}>
                    {/* Colonne gauche : Missions récentes */}
                    <div className="saas-card">
                      <div className="saas-card-header" style={{ marginBottom: '14px' }}>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800 }}>Missions récentes sur le terrain</h3>
                          <small style={{ color: '#64748b' }}>Suivi des effectifs et progression des inscriptions</small>
                        </div>
                        <button
                          type="button"
                          style={{ border: 'none', background: 'none', color: 'var(--emerald-main)', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer' }}
                          onClick={() => setDashActiveTab('missions')}
                        >
                          Voir tout ({associationMissions.length}) →
                        </button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {associationMissions.slice(0, 4).map((m) => {
                          const pct = Math.round((m.spots_registered / m.spots_total) * 100);
                          const isFull = m.spots_registered >= m.spots_total;
                          return (
                            <div
                              key={m.id}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '12px 14px',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                gap: '14px'
                              }}
                            >
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                                  <span className="saas-badge" style={{ background: '#f1f5f9', color: '#475569', fontSize: '10.5px' }}>
                                    {m.category}
                                  </span>
                                  <strong style={{ fontSize: '13px', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {m.title}
                                  </strong>
                                </div>
                                <div style={{ fontSize: '11.5px', color: '#64748b', display: 'flex', gap: '10px' }}>
                                  <span>{m.wilaya}</span>
                                  <span>·</span>
                                  <span>{m.date}</span>
                                </div>
                                <div style={{ marginTop: '8px', maxWidth: '220px' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginBottom: '3px' }}>
                                    <span>{m.spots_registered} / {m.spots_total} inscrits</span>
                                    <span>{pct}%</span>
                                  </div>
                                  <div className="saas-gauge-track" style={{ height: '5px' }}>
                                    <div
                                      className={`saas-gauge-fill ${isFull ? 'full' : ''}`}
                                      style={{ width: `${Math.min(pct, 100)}%` }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                                <span className={`saas-badge ${isFull ? 'complete' : 'active'}`}>
                                  {isFull ? 'Complète' : 'Active'}
                                </span>
                                <button
                                  type="button"
                                  style={{
                                    border: '1px solid #cbd5e1',
                                    background: '#ffffff',
                                    borderRadius: '6px',
                                    padding: '4px 10px',
                                    fontSize: '11.5px',
                                    fontWeight: 700,
                                    color: '#334155',
                                    cursor: 'pointer'
                                  }}
                                  onClick={() => setDashActiveTab('missions')}
                                >
                                  Gérer
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Colonne droite : Candidatures à traiter */}
                    <div className="saas-card">
                      <div className="saas-card-header" style={{ marginBottom: '14px' }}>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800 }}>Candidatures récentes</h3>
                          <small style={{ color: '#64748b' }}>Profils en attente de validation</small>
                        </div>
                        <button
                          type="button"
                          style={{ border: 'none', background: 'none', color: 'var(--emerald-main)', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer' }}
                          onClick={() => setDashActiveTab('candidatures')}
                        >
                          Voir tout →
                        </button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {candidatesList.slice(0, 4).map((cand) => (
                          <div
                            key={cand.id}
                            style={{
                              padding: '12px',
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              borderRadius: '12px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div className="saas-user-avatar" style={{ width: '28px', height: '28px', fontSize: '11px' }}>
                                  {cand.initials}
                                </div>
                                <div>
                                  <strong style={{ fontSize: '12.5px', color: '#0f172a', display: 'block' }}>{cand.name}</strong>
                                  <small style={{ fontSize: '10.5px', color: '#64748b' }}>{cand.wilaya}</small>
                                </div>
                              </div>
                              <span className={`saas-badge ${cand.status}`}>
                                {cand.status === 'accepted' ? 'Acceptée' : cand.status === 'rejected' ? 'Refusée' : 'En attente'}
                              </span>
                            </div>

                            <div style={{ fontSize: '11.5px', color: '#334155', background: '#ffffff', padding: '6px 10px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                              <strong>Mission : </strong>{cand.missionTitle}
                            </div>

                            <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
                              <button
                                type="button"
                                style={{
                                  flex: 1,
                                  border: '1px solid #cbd5e1',
                                  background: '#ffffff',
                                  borderRadius: '6px',
                                  padding: '5px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  color: '#334155',
                                  cursor: 'pointer'
                                }}
                                onClick={() => setSelectedCandidateDrawer(cand)}
                              >
                                Fiche détaillée
                              </button>
                              {cand.status === 'pending' && (
                                <>
                                  <button
                                    type="button"
                                    style={{
                                      border: 'none',
                                      background: 'var(--emerald-main)',
                                      color: '#ffffff',
                                      borderRadius: '6px',
                                      padding: '5px 10px',
                                      fontSize: '11.5px',
                                      fontWeight: 700,
                                      cursor: 'pointer'
                                    }}
                                    onClick={() => handleAcceptCandidate(cand)}
                                    title="Accepter"
                                  >
                                    <IconCheck className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    style={{
                                      border: '1px solid #fca5a5',
                                      background: '#fee2e2',
                                      color: '#991b1b',
                                      borderRadius: '6px',
                                      padding: '5px 10px',
                                      fontSize: '11.5px',
                                      fontWeight: 700,
                                      cursor: 'pointer',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                    onClick={() => handleRejectCandidate(cand)}
                                    title="Refuser"
                                  >
                                    <IconX className="w-3.5 h-3.5" />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 2 : MES MISSIONS                                    */}
              {/* ======================================================== */}
              {dashActiveTab === 'missions' && (
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                  <AssociationMissions onOpenCreateMission={() => setDashActiveTab('new_mission')} />
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 3 : PUBLIER UNE MISSION (5 ÉTAPES & LIVE PREVIEW)   */}
              {/* ======================================================== */}
              {dashActiveTab === 'new_mission' && (
                <div>
                  <div className="saas-card-header">
                    <div>
                      <h2>Publier une mission solidaire</h2>
                      <p>Formulaire guidé avec prévisualisation fidèle en temps réel de la carte publique</p>
                    </div>
                  </div>

                  <div className="saas-publish-grid">
                    {/* Colonne gauche : Étapes du formulaire */}
                    <div>
                      {/* Étape 1 */}
                      <div className="publish-step-card">
                        <div className="publish-step-header">
                          <div className="publish-step-num">1</div>
                          <h3 className="publish-step-title">Informations générales</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Titre de la mission *
                            </label>
                            <input
                              type="text"
                              className="inp"
                              placeholder="Ex: Distribution de paniers solidaires — Ramadan 2025"
                              value={newMissionForm.title}
                              onChange={(e) => setNewMissionForm({ ...newMissionForm, title: e.target.value })}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Thématique d'action *
                            </label>
                            <select
                              className="inp"
                              value={newMissionForm.category}
                              onChange={(e) => setNewMissionForm({ ...newMissionForm, category: e.target.value })}
                            >
                              <option value="Solidarité">Solidarité & Entraide</option>
                              <option value="Éducation">Éducation & Soutien scolaire</option>
                              <option value="Environnement">Environnement & Reboisement</option>
                              <option value="Santé">Santé & Don du sang</option>
                              <option value="Aide d'urgence">Aide d'urgence & Secourisme</option>
                              <option value="Patrimoine">Culture & Patrimoine</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Étape 2 */}
                      <div className="publish-step-card">
                        <div className="publish-step-header">
                          <div className="publish-step-num">2</div>
                          <h3 className="publish-step-title">Détails de l'action & Objectifs</h3>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Description détaillée de la mission
                          </label>
                          <textarea
                            className="inp"
                            rows={4}
                            placeholder="Expliquez le déroulement de la journée, le rôle attendu des bénévoles et l'impact direct..."
                            value={newMissionForm.description}
                            onChange={(e) => setNewMissionForm({ ...newMissionForm, description: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Étape 3 : 69 Wilayas */}
                      <div className="publish-step-card">
                        <div className="publish-step-header">
                          <div className="publish-step-num">3</div>
                          <h3 className="publish-step-title">Date & Lieu (Couverture 69 Wilayas)</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Date prévisionnelle
                            </label>
                            <input
                              type="text"
                              className="inp"
                              placeholder="Ex: Samedi 10 mai 2025"
                              value={newMissionForm.date}
                              onChange={(e) => setNewMissionForm({ ...newMissionForm, date: e.target.value })}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Wilaya (Liste officielle des 69)
                            </label>
                            <select
                              className="inp"
                              value={newMissionForm.location}
                              onChange={(e) => setNewMissionForm({ ...newMissionForm, location: e.target.value })}
                            >
                              {WILAYAS_LIST.map(w => (
                                <option key={w.code} value={`${w.code} - ${w.name}`}>
                                  {w.code} - {w.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Commune ou adresse de rassemblement
                          </label>
                          <input
                            type="text"
                            className="inp"
                            placeholder="Ex: Bab El Oued — Salle omnisports"
                            value={newMissionForm.commune}
                            onChange={(e) => setNewMissionForm({ ...newMissionForm, commune: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Étape 4 */}
                      <div className="publish-step-card">
                        <div className="publish-step-header">
                          <div className="publish-step-num">4</div>
                          <h3 className="publish-step-title">Profil recherché & Effectifs</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '12px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Nombre de places *
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="300"
                              className="inp"
                              value={newMissionForm.spots}
                              onChange={(e) => setNewMissionForm({ ...newMissionForm, spots: e.target.value })}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Compétences souhaitées
                            </label>
                            <input
                              type="text"
                              className="inp"
                              placeholder="Ex: Secourisme, Permis B, Dynamisme"
                              value={newMissionForm.requirements}
                              onChange={(e) => setNewMissionForm({ ...newMissionForm, requirements: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Étape 5 */}
                      <div className="publish-step-card">
                        <div className="publish-step-header">
                          <div className="publish-step-num">5</div>
                          <h3 className="publish-step-title">Image d'illustration & Publication</h3>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '8px' }}>
                            Sélectionnez un visuel authentique :
                          </label>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                            {[
                              { label: 'Solidarité', url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80' },
                              { label: 'Éducation', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80' },
                              { label: 'Environnement', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80' },
                              { label: 'Santé', url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80' }
                            ].map((preset, idx) => (
                              <div
                                key={idx}
                                onClick={() => setNewMissionForm({ ...newMissionForm, image: preset.url })}
                                style={{
                                  borderRadius: '8px',
                                  overflow: 'hidden',
                                  cursor: 'pointer',
                                  border: newMissionForm.image === preset.url ? '2px solid var(--emerald-main)' : '2px solid transparent',
                                  boxShadow: newMissionForm.image === preset.url ? '0 0 0 2px rgba(13,91,97,0.2)' : 'none'
                                }}
                              >
                                <img src={preset.url} alt={preset.label} style={{ width: '100%', height: '55px', objectFit: 'cover' }} />
                                <div style={{ fontSize: '10px', textAlign: 'center', padding: '3px 0', background: '#f8fafc', fontWeight: 700 }}>
                                  {preset.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Boutons d'action */}
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '10px' }}>
                          <button
                            type="button"
                            className="saas-quick-btn outline"
                            onClick={() => handlePublishNewMission(true)}
                          >
                            Enregistrer comme brouillon
                          </button>
                          <button
                            type="button"
                            className="saas-quick-btn primary"
                            onClick={() => handlePublishNewMission(false)}
                          >
                            <IconCheck className="w-4 h-4" />
                            <span>Publier la mission</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Colonne droite : Live Preview Card Sticky */}
                    <div className="publish-live-preview-wrap">
                      <div className="publish-preview-badge">
                        <IconEye className="w-3.5 h-3.5" />
                        <span>Aperçu en direct pour les bénévoles</span>
                      </div>

                      <div className="saas-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', height: '190px' }}>
                          <img
                            src={newMissionForm.image || 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'}
                            alt="Aperçu"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                            <span className="saas-badge" style={{ background: 'rgba(255,255,255,0.95)', color: '#0f172a', fontWeight: 800 }}>
                              {newMissionForm.category}
                            </span>
                          </div>
                          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                            <span className="saas-badge active">
                              Nouvelle
                            </span>
                          </div>
                        </div>

                        <div style={{ padding: '20px' }}>
                          <h3 style={{ margin: '0 0 6px', fontSize: '17px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
                            {newMissionForm.title || "Titre de votre mission citoyenne..."}
                          </h3>
                          <div style={{ fontSize: '12px', color: 'var(--emerald-main)', fontWeight: 700, marginBottom: '10px' }}>
                            {assocProfile.name}
                          </div>

                          <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <IconMapPin className="w-3.5 h-3.5" />
                              {newMissionForm.location}
                            </span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <IconCalendar className="w-3.5 h-3.5" />
                              {newMissionForm.date || "Date à convenir"}
                            </span>
                          </div>

                          <p style={{ margin: '0 0 14px', fontSize: '12.5px', color: '#475569', lineHeight: 1.5 }}>
                            {newMissionForm.description || "La description détaillée rédigée dans le formulaire apparaîtra ici pour informer les bénévoles."}
                          </p>

                          {newMissionForm.requirements && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                              {newMissionForm.requirements.split(',').map((req, i) => (
                                <span key={i} className="saas-skill-pill" style={{ fontSize: '11px' }}>
                                  {req.trim()}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="saas-gauge-wrap">
                            <div className="saas-gauge-header">
                              <span>Places ouvertes</span>
                              <strong>0 / {newMissionForm.spots || 15} inscrits (0%)</strong>
                            </div>
                            <div className="saas-gauge-track">
                              <div className="saas-gauge-fill" style={{ width: '0%' }} />
                            </div>
                          </div>

                          <button
                            type="button"
                            disabled
                            style={{
                              width: '100%',
                              marginTop: '14px',
                              padding: '10px',
                              background: 'var(--emerald-main)',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 700,
                              opacity: 0.85,
                              cursor: 'default'
                            }}
                          >
                            Participer à cette mission
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 4 : CANDIDATURES (AVEC LATERAL DRAWER)              */}
              {/* ======================================================== */}
              {dashActiveTab === 'candidatures' && (
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                  <AssociationCandidatures />
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 5 : BESOINS & COLLECTES (DOUBLE SOUS-ONGLETS)        */}
              {/* ======================================================== */}
              {dashActiveTab === 'besoins_collectes' && (
                <div>
                  <div className="saas-card-header">
                    <div>
                      <h2>Besoins matériels & Collectes de dons</h2>
                      <p>Coordonnez les appels aux dons en nature et vos campagnes de financement participatif</p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        className={`saas-quick-btn ${besoinsSubTab === 'materiel' ? 'primary' : 'outline'}`}
                        onClick={() => setBesoinsSubTab('materiel')}
                      >
                        <IconPackage className="w-4 h-4" />
                        <span>Besoins matériels ({needsList.length})</span>
                      </button>
                      <button
                        type="button"
                        className={`saas-quick-btn ${besoinsSubTab === 'fonds' ? 'primary' : 'outline'}`}
                        onClick={() => setBesoinsSubTab('fonds')}
                      >
                        <IconCoins className="w-4 h-4" />
                        <span>Collectes de fonds ({collectesList.length})</span>
                      </button>
                    </div>
                  </div>

                  {/* SOUS-ONGLET 1 : BESOINS MATÉRIELS */}
                  {besoinsSubTab === 'materiel' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '13px', color: '#64748b' }}>
                          Articles et fournitures nécessaires pour les opérations de terrain
                        </div>
                        <button
                          type="button"
                          className="saas-quick-btn primary"
                          onClick={() => setShowNeedForm(!showNeedForm)}
                        >
                          <IconPlus className="w-4 h-4" />
                          <span>{showNeedForm ? 'Fermer le formulaire' : 'Ajouter un besoin matériel'}</span>
                        </button>
                      </div>

                      {/* Formulaire inline de nouveau besoin */}
                      {showNeedForm && (
                        <div className="saas-card" style={{ background: '#f8fafc', marginBottom: '20px' }}>
                          <h3 style={{ margin: '0 0 14px', fontSize: '15px', fontWeight: 800 }}>Nouveau besoin logistique</h3>
                          <form onSubmit={handleCreateNeed} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Intitulé</label>
                              <input
                                type="text"
                                className="inp"
                                placeholder="Ex: Cartables & trousses scolaires"
                                value={newNeedForm.title}
                                onChange={(e) => setNewNeedForm({ ...newNeedForm, title: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Catégorie</label>
                              <select
                                className="inp"
                                value={newNeedForm.category}
                                onChange={(e) => setNewNeedForm({ ...newNeedForm, category: e.target.value })}
                              >
                                <option value="Alimentation">Alimentation</option>
                                <option value="Éducation">Éducation</option>
                                <option value="Santé">Santé</option>
                                <option value="Vêtements">Vêtements</option>
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Quantité requise</label>
                              <input
                                type="number"
                                min="1"
                                className="inp"
                                value={newNeedForm.needed}
                                onChange={(e) => setNewNeedForm({ ...newNeedForm, needed: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Unité</label>
                              <input
                                type="text"
                                className="inp"
                                placeholder="Ex: paniers, kits, boîtes"
                                value={newNeedForm.unit}
                                onChange={(e) => setNewNeedForm({ ...newNeedForm, unit: e.target.value })}
                              />
                            </div>
                            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                              <button
                                type="button"
                                className="saas-quick-btn outline"
                                onClick={() => setShowNeedForm(false)}
                              >
                                Annuler
                              </button>
                              <button
                                type="submit"
                                className="saas-quick-btn primary"
                              >
                                Enregistrer le besoin
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
                        {needsList.map((need) => {
                          const pct = Math.min(Math.round((need.collected / need.needed) * 100), 100);
                          return (
                            <div key={need.id} className="saas-card" style={{ display: 'flex', flexDirection: 'column' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span className="saas-badge" style={{ background: '#f1f5f9', color: '#475569' }}>
                                  {need.category}
                                </span>
                                <span className={`saas-badge ${need.urgency === 'Haute' ? 'en_attente' : 'active'}`}>
                                  Urgence {need.urgency}
                                </span>
                              </div>

                              <h3 style={{ margin: '0 0 6px', fontSize: '15.5px', fontWeight: 800, color: '#0f172a' }}>
                                {need.title}
                              </h3>
                              <p style={{ margin: '0 0 14px', fontSize: '12px', color: '#64748b', flex: 1 }}>
                                {need.description}
                              </p>

                              <div className="saas-gauge-wrap">
                                <div className="saas-gauge-header">
                                  <span>Collecté</span>
                                  <strong>{need.collected} / {need.needed} {need.unit} ({pct}%)</strong>
                                </div>
                                <div className="saas-gauge-track">
                                  <div
                                    className={`saas-gauge-fill ${pct >= 100 ? 'full' : ''}`}
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                              </div>

                              <div style={{ display: 'flex', gap: '8px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                                <button
                                  type="button"
                                  style={{
                                    flex: 1,
                                    border: '1px solid #e2e8f0',
                                    background: '#f8fafc',
                                    borderRadius: '6px',
                                    padding: '6px',
                                    fontSize: '11.5px',
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                  }}
                                  onClick={() => {
                                    setNeedsList(prev => prev.map(n => n.id === need.id ? { ...n, collected: Math.min(n.needed, n.collected + 10) } : n));
                                    showToast(`+10 ${need.unit} ajoutés au stock !`);
                                  }}
                                >
                                  +10 {need.unit}
                                </button>
                                <button
                                  type="button"
                                  style={{
                                    border: '1px solid #fee2e2',
                                    background: '#ffffff',
                                    color: '#dc2626',
                                    borderRadius: '6px',
                                    padding: '6px 12px',
                                    fontSize: '11.5px',
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                  }}
                                  onClick={() => {
                                    setNeedsList(prev => prev.filter(n => n.id !== need.id));
                                    showToast("Besoin retiré.");
                                  }}
                                >
                                  Supprimer
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SOUS-ONGLET 2 : COLLECTES DE FONDS */}
                  {besoinsSubTab === 'fonds' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '13px', color: '#64748b' }}>
                          Campagnes de financement solidaire pour équiper les actions terrain
                        </div>
                        <button
                          type="button"
                          className="saas-quick-btn primary"
                          onClick={() => setShowCollecteForm(!showCollecteForm)}
                        >
                          <IconCoins className="w-4 h-4" />
                          <span>{showCollecteForm ? 'Fermer le formulaire' : 'Lancer une collecte de fonds'}</span>
                        </button>
                      </div>

                      {/* Formulaire de collecte */}
                      {showCollecteForm && (
                        <div className="saas-card" style={{ background: '#f8fafc', marginBottom: '20px' }}>
                          <h3 style={{ margin: '0 0 14px', fontSize: '15px', fontWeight: 800 }}>Nouvelle campagne de dons</h3>
                          <form onSubmit={handleCreateCollecte} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Titre de la collecte</label>
                              <input
                                type="text"
                                className="inp"
                                placeholder="Ex: Caravane Hivernale Grand Sud"
                                value={newCollecteForm.title}
                                onChange={(e) => setNewCollecteForm({ ...newCollecteForm, title: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Wilaya cible</label>
                              <select
                                className="inp"
                                value={newCollecteForm.wilaya}
                                onChange={(e) => setNewCollecteForm({ ...newCollecteForm, wilaya: e.target.value })}
                              >
                                {WILAYAS_LIST.map(w => (
                                  <option key={w.code} value={`${w.code} - ${w.name}`}>{w.code} - {w.name}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Objectif financier (DZD)</label>
                              <input
                                type="number"
                                min="10000"
                                step="5000"
                                className="inp"
                                value={newCollecteForm.goal}
                                onChange={(e) => setNewCollecteForm({ ...newCollecteForm, goal: e.target.value })}
                                required
                              />
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>Description</label>
                              <textarea
                                className="inp"
                                rows={2}
                                placeholder="Précisez la finalité des fonds récoltés..."
                                value={newCollecteForm.description}
                                onChange={(e) => setNewCollecteForm({ ...newCollecteForm, description: e.target.value })}
                              />
                            </div>
                            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                              <button
                                type="button"
                                className="saas-quick-btn outline"
                                onClick={() => setShowCollecteForm(false)}
                              >
                                Annuler
                              </button>
                              <button
                                type="submit"
                                className="saas-quick-btn primary"
                              >
                                Lancer la collecte
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '18px' }}>
                        {collectesList.map((col) => {
                          const pct = Math.min(Math.round((col.raised / col.goal) * 100), 100);
                          return (
                            <div key={col.id} className="saas-card" style={{ display: 'flex', flexDirection: 'column' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span className="saas-badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>
                                  {col.wilaya}
                                </span>
                                <span className="saas-badge active">En cours</span>
                              </div>

                              <h3 style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                                {col.title}
                              </h3>
                              <p style={{ margin: '0 0 14px', fontSize: '12.5px', color: '#64748b', flex: 1 }}>
                                {col.description}
                              </p>

                              <div className="saas-gauge-wrap">
                                <div className="saas-gauge-header">
                                  <span>Fonds récoltés</span>
                                  <strong>{col.raised.toLocaleString()} / {col.goal.toLocaleString()} DZD ({pct}%)</strong>
                                </div>
                                <div className="saas-gauge-track">
                                  <div
                                    className={`saas-gauge-fill ${pct >= 100 ? 'full' : ''}`}
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                              </div>

                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                                <small style={{ fontSize: '12px', color: '#64748b' }}>
                                  <strong>{col.donorsCount}</strong> donateurs engagés
                                </small>
                                <button
                                  type="button"
                                  style={{
                                    border: '1px solid var(--emerald-border)',
                                    background: '#f0fdf4',
                                    color: 'var(--emerald-main)',
                                    borderRadius: '6px',
                                    padding: '6px 12px',
                                    fontSize: '11.5px',
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                  }}
                                  onClick={() => {
                                    setCollectesList(prev => prev.map(c => c.id === col.id ? { ...c, raised: c.raised + 5000, donorsCount: c.donorsCount + 1 } : c));
                                    showToast("+5 000 DZD crédités sur la collecte (Don simulé) !");
                                  }}
                                >
                                  +5 000 DZD (Test)
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 6 : BÉNÉVOLES                                       */}
              {/* ======================================================== */}
              {dashActiveTab === 'benevoles' && (
                <div>
                  <div className="saas-card-header">
                    <div>
                      <h2>Annuaire des bénévoles engagés ({activeVolunteersList.length})</h2>
                      <p>Retrouvez vos membres actifs, leurs heures d'engagement et coordonnées de contact</p>
                    </div>
                  </div>

                  {/* Barre de métriques et recherche */}
                  <div className="saas-metrics-grid" style={{ marginBottom: '20px' }}>
                    <div className="saas-metric-card">
                      <span className="saas-metric-label">Membres actifs</span>
                      <div className="saas-metric-value">{activeVolunteersList.length}</div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>Vérifiés et mobilisables</small>
                    </div>
                    <div className="saas-metric-card">
                      <span className="saas-metric-label">Heures de bénévolat</span>
                      <div className="saas-metric-value">
                        {activeVolunteersList.reduce((acc, v) => acc + v.hours, 0)} h
                      </div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>Impact citoyen mesuré</small>
                    </div>
                    <div className="saas-metric-card">
                      <span className="saas-metric-label">Missions accomplies</span>
                      <div className="saas-metric-value">
                        {activeVolunteersList.reduce((acc, v) => acc + v.missionsCount, 0)}
                      </div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>À travers les wilayas</small>
                    </div>
                    <div className="saas-metric-card">
                      <span className="saas-metric-label">Wilayas représentées</span>
                      <div className="saas-metric-value">3</div>
                      <small style={{ fontSize: '11.5px', color: '#64748b' }}>Alger, Béjaïa, Tizi Ouzou</small>
                    </div>
                  </div>

                  <div className="saas-card" style={{ padding: '14px 18px', marginBottom: '18px' }}>
                    <input
                      type="text"
                      className="inp"
                      placeholder="Filtrer par nom, wilaya ou compétence..."
                      value={volunteerDirectorySearch}
                      onChange={(e) => setVolunteerDirectorySearch(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
                    {activeVolunteersList
                      .filter(v => {
                        if (!volunteerDirectorySearch.trim()) return true;
                        const q = volunteerDirectorySearch.toLowerCase();
                        return (
                          v.name.toLowerCase().includes(q) ||
                          v.wilaya.toLowerCase().includes(q) ||
                          v.skills.some(s => s.toLowerCase().includes(q))
                        );
                      })
                      .map((vol) => (
                        <div key={vol.id} className="saas-card" style={{ display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <div className="saas-drawer-avatar" style={{ width: '44px', height: '44px', fontSize: '16px' }}>
                              {vol.initials}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <strong style={{ fontSize: '14.5px', color: '#0f172a', display: 'block' }}>{vol.name}</strong>
                              <small style={{ fontSize: '12px', color: '#64748b' }}>{vol.role} · {vol.wilaya}</small>
                            </div>
                            <span className="saas-badge active">Actif</span>
                          </div>

                          <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: '#334155', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                              <span>Heures d'action :</span>
                              <strong>{vol.hours} heures</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span>Missions réalisées :</span>
                              <strong>{vol.missionsCount}</strong>
                            </div>
                          </div>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px', flex: 1 }}>
                            {vol.skills.map((sk, idx) => (
                              <span key={idx} className="saas-skill-pill" style={{ fontSize: '10.5px' }}>
                                {sk}
                              </span>
                            ))}
                          </div>

                          <div style={{ display: 'flex', gap: '8px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                            <a
                              href={`mailto:${vol.email}`}
                              style={{
                                flex: 1,
                                textAlign: 'center',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                borderRadius: '8px',
                                padding: '7px 10px',
                                fontSize: '12px',
                                fontWeight: 700,
                                color: '#334155',
                                textDecoration: 'none'
                              }}
                            >
                              Contacter par email
                            </a>
                            <button
                              type="button"
                              style={{
                                border: '1px solid #e2e8f0',
                                background: '#f8fafc',
                                borderRadius: '8px',
                                padding: '7px 12px',
                                fontSize: '12px',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                              onClick={() => showToast(`Téléphone : ${vol.phone}`)}
                            >
                              Tél
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 7 : CALENDRIER DES INTERVENTIONS                    */}
              {/* ======================================================== */}
              {dashActiveTab === 'calendrier' && (
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                  <AssociationCalendar />
                </div>
              )}

              {/* ======================================================== */}
              {/* VUE 8 : PARAMÈTRES (AVEC 69 WILAYAS & SÉCURITÉ)         */}
              {/* ======================================================== */}
              {dashActiveTab === 'parametres' && (
                <div>
                  <div className="saas-card-header">
                    <div>
                      <h2>Paramètres & Profil de l'Association</h2>
                      <p>Mise à jour des informations officielles, coordonnées de contact et sécurité</p>
                    </div>
                  </div>

                  {/* Sous-onglets de configuration */}
                  <div className="saas-card" style={{ padding: '12px 18px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {[
                        { id: 'general', label: 'Informations générales' },
                        { id: 'contact', label: 'Contact & Localisation (69 Wilayas)' },
                        { id: 'securite', label: 'Sécurité & Mot de passe' },
                        { id: 'notifications', label: 'Préférences & Notifications' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          type="button"
                          className={`saas-quick-btn ${settingsSubTab === tab.id ? 'primary' : 'outline'}`}
                          style={{ padding: '7px 16px', fontSize: '13px' }}
                          onClick={() => setSettingsSubTab(tab.id)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Formulaire Informations Générales */}
                  {settingsSubTab === 'general' && (
                    <div className="saas-card">
                      <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 800 }}>Fiche officielle de l'association</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          showToast("Informations de l'association enregistrées avec succès !");
                        }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Nom de l'association
                            </label>
                            <input
                              type="text"
                              className="inp"
                              value={assocProfile.name}
                              onChange={(e) => setAssocProfile({ ...assocProfile, name: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Numéro d'agrément officiel
                            </label>
                            <input
                              type="text"
                              className="inp"
                              value={assocProfile.agrement}
                              onChange={(e) => setAssocProfile({ ...assocProfile, agrement: e.target.value })}
                            />
                          </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Slogan ou devise
                            </label>
                            <input
                              type="text"
                              className="inp"
                              value={assocProfile.tagline}
                              onChange={(e) => setAssocProfile({ ...assocProfile, tagline: e.target.value })}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Année de fondation
                            </label>
                            <input
                              type="text"
                              className="inp"
                              value={assocProfile.creationYear}
                              onChange={(e) => setAssocProfile({ ...assocProfile, creationYear: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Domaines d'intervention
                          </label>
                          <input
                            type="text"
                            className="inp"
                            value={assocProfile.domain}
                            onChange={(e) => setAssocProfile({ ...assocProfile, domain: e.target.value })}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Présentation institutionnelle
                          </label>
                          <textarea
                            className="inp"
                            rows={4}
                            value={assocProfile.description}
                            onChange={(e) => setAssocProfile({ ...assocProfile, description: e.target.value })}
                          />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                          <button type="submit" className="saas-quick-btn primary">
                            Enregistrer les modifications
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Formulaire Contact & 69 Wilayas */}
                  {settingsSubTab === 'contact' && (
                    <div className="saas-card">
                      <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 800 }}>Coordonnées officielles & Siège</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          showToast("Coordonnées de l'association mises à jour !");
                        }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Wilaya du siège (69 Wilayas)
                            </label>
                            <select
                              className="inp"
                              value={assocProfile.wilaya}
                              onChange={(e) => setAssocProfile({ ...assocProfile, wilaya: e.target.value })}
                            >
                              {WILAYAS_LIST.map(w => (
                                <option key={w.code} value={`${w.code} - ${w.name}`}>
                                  {w.code} - {w.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Commune
                            </label>
                            <input
                              type="text"
                              className="inp"
                              value={assocProfile.commune}
                              onChange={(e) => setAssocProfile({ ...assocProfile, commune: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Adresse exacte
                          </label>
                          <input
                            type="text"
                            className="inp"
                            value={assocProfile.address}
                            onChange={(e) => setAssocProfile({ ...assocProfile, address: e.target.value })}
                          />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Email de contact
                            </label>
                            <input
                              type="email"
                              className="inp"
                              value={assocProfile.email}
                              onChange={(e) => setAssocProfile({ ...assocProfile, email: e.target.value })}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                              Numéro de téléphone
                            </label>
                            <input
                              type="text"
                              className="inp"
                              value={assocProfile.phone}
                              onChange={(e) => setAssocProfile({ ...assocProfile, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Responsable légal
                          </label>
                          <input
                            type="text"
                            className="inp"
                            value={assocProfile.responsable}
                            onChange={(e) => setAssocProfile({ ...assocProfile, responsable: e.target.value })}
                          />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                          <button type="submit" className="saas-quick-btn primary">
                            Enregistrer les coordonnées
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Formulaire Sécurité */}
                  {settingsSubTab === 'securite' && (
                    <div className="saas-card" style={{ maxWidth: '540px' }}>
                      <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 800 }}>Changement de mot de passe</h3>
                      <form onSubmit={handleUpdateAssocPassword} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Mot de passe actuel
                          </label>
                          <input
                            type="password"
                            className="inp"
                            placeholder="••••••••"
                            value={assocPasswordForm.current}
                            onChange={(e) => setAssocPasswordForm({ ...assocPasswordForm, current: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Nouveau mot de passe
                          </label>
                          <input
                            type="password"
                            className="inp"
                            placeholder="Au moins 8 caractères"
                            value={assocPasswordForm.newPass}
                            onChange={(e) => setAssocPasswordForm({ ...assocPasswordForm, newPass: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>
                            Confirmer le nouveau mot de passe
                          </label>
                          <input
                            type="password"
                            className="inp"
                            placeholder="••••••••"
                            value={assocPasswordForm.confirmPass}
                            onChange={(e) => setAssocPasswordForm({ ...assocPasswordForm, confirmPass: e.target.value })}
                            required
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                          <button type="submit" className="saas-quick-btn primary">
                            Mettre à jour le mot de passe
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Formulaire Notifications */}
                  {settingsSubTab === 'notifications' && (
                    <div className="saas-card" style={{ maxWidth: '600px' }}>
                      <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 800 }}>Préférences de notification</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {[
                          { title: 'Nouvelle candidature', desc: 'Recevoir un email dès qu’un bénévole postule à une mission' },
                          { title: 'Rappel avant mission (48h)', desc: 'Envoyer une synthèse des effectifs confirmés deux jours avant l’événement' },
                          { title: 'Rapport mensuel d’impact', desc: 'Recevoir un récapitulatif des heures bénévoles et dons collectés' }
                        ].map((notif, idx) => (
                          <label
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              padding: '12px',
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              borderRadius: '10px',
                              cursor: 'pointer'
                            }}
                          >
                            <input type="checkbox" defaultChecked style={{ marginTop: '3px', accentColor: 'var(--emerald-main)' }} />
                            <div>
                              <strong style={{ fontSize: '13px', color: '#0f172a', display: 'block' }}>{notif.title}</strong>
                              <small style={{ fontSize: '11.5px', color: '#64748b' }}>{notif.desc}</small>
                            </div>
                          </label>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                          <button
                            type="button"
                            className="saas-quick-btn primary"
                            onClick={() => showToast("Préférences de notification enregistrées !")}
                          >
                            Enregistrer les préférences
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* MESSAGERIE CITOYENNE DIRECTE */}
              {dashActiveTab === 'messages' && (
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                  <AssociationMessenger />
                </div>
              )}

              {/* REGISTRE DE TRAÇABILITÉ & CERTIFICATION D'IMPACT */}
              {dashActiveTab === 'traceability' && (
                <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                  <AssociationPostProof onBackToFeed={() => setDashActiveTab('profile')} onPublished={() => { setDashActiveTab('profile'); showToast('Preuve de terrain publiée avec succès !'); }} />
                </div>
              )}
            </main>
          </div>

          {/* DRAWER LATÉRAL DE CANDIDATURE (Slide-over) */}
          {selectedCandidateDrawer && (
            <>
              <div
                className="saas-drawer-overlay"
                onClick={() => setSelectedCandidateDrawer(null)}
              />
              <aside className="saas-drawer" role="dialog" aria-modal="true">
                <div className="saas-drawer-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="saas-drawer-avatar">{selectedCandidateDrawer.initials}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                        {selectedCandidateDrawer.name}
                      </h3>
                      <small style={{ color: '#64748b', fontSize: '12px' }}>
                        {selectedCandidateDrawer.email} · {selectedCandidateDrawer.phone}
                      </small>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="saas-drawer-close"
                    onClick={() => setSelectedCandidateDrawer(null)}
                    title="Fermer"
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>

                <div className="saas-drawer-body">
                  <div>
                    <span className="saas-drawer-section-title">Mission ciblée</span>
                    <div className="saas-drawer-mission-box">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '14px', color: '#0f172a' }}>{selectedCandidateDrawer.missionTitle}</strong>
                        <span className={`saas-badge ${selectedCandidateDrawer.status}`}>
                          {selectedCandidateDrawer.status === 'accepted' ? 'Acceptée' : selectedCandidateDrawer.status === 'rejected' ? 'Refusée' : 'En attente'}
                        </span>
                      </div>
                      <small style={{ color: '#64748b' }}>Wilaya d'intervention : {selectedCandidateDrawer.wilaya}</small>
                    </div>
                  </div>

                  <div>
                    <span className="saas-drawer-section-title">Informations personnelles</span>
                    <div className="saas-drawer-info-grid">
                      <div>
                        <small>Âge</small>
                        <strong>{selectedCandidateDrawer.age} ans</strong>
                      </div>
                      <div>
                        <small>Wilaya</small>
                        <strong>{selectedCandidateDrawer.wilaya}</strong>
                      </div>
                      <div>
                        <small>Date de candidature</small>
                        <strong>{selectedCandidateDrawer.appliedDate}</strong>
                      </div>
                      <div>
                        <small>Langues</small>
                        <strong>{selectedCandidateDrawer.languages?.join(', ') || 'Arabe, Français'}</strong>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="saas-drawer-section-title">Compétences & Aptitudes</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {selectedCandidateDrawer.skills?.map((sk, idx) => (
                        <span key={idx} className="saas-skill-pill">{sk}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="saas-drawer-section-title">Lettre de motivation</span>
                    <blockquote className="saas-drawer-quote">
                      « {selectedCandidateDrawer.motivation} »
                    </blockquote>
                  </div>
                </div>

                <div className="saas-drawer-footer">
                  {selectedCandidateDrawer.status !== 'rejected' && (
                    <button
                      type="button"
                      className="saas-btn-danger"
                      onClick={() => {
                        handleRejectCandidate(selectedCandidateDrawer);
                        setSelectedCandidateDrawer(prev => ({ ...prev, status: 'rejected' }));
                      }}
                    >
                      <IconX className="w-4 h-4" />
                      <span>Refuser la candidature</span>
                    </button>
                  )}
                  {selectedCandidateDrawer.status !== 'accepted' && (
                    <button
                      type="button"
                      className="saas-btn-primary"
                      onClick={() => {
                        handleAcceptCandidate(selectedCandidateDrawer);
                        setSelectedCandidateDrawer(prev => ({ ...prev, status: 'accepted' }));
                      }}
                    >
                      <IconCheck className="w-4 h-4" />
                      <span>Accepter la candidature</span>
                    </button>
                  )}
                  {selectedCandidateDrawer.status === 'accepted' && (
                    <span className="saas-badge active" style={{ padding: '8px 16px', fontSize: '13px' }}>
                      <IconCheck className="w-4 h-4" /> Candidat validé sur le terrain
                    </span>
                  )}
                </div>
              </aside>
            </>
          )}
        </div>
      )}

            {/* ======================================================== */}
      {/* 3. DASHBOARD BÉNÉVOLE SAAS (Espace Nadia Mansouri)        */}
            {/* ======================================================== */}
      {/* 3. PORTAIL BÉNÉVOLE STYLE AIESEC (Topbar Fixe, Sans Sidebar) */}
      {/* ======================================================== */}
      {currentView === 'volunteer' && (
        <div className="portal-root">
          {/* HEADER / SIDEBAR GAUCHE (Conforme à profile benev .png) */}
          <header className="portal-header">
            {/* GAUCHE : LOGO ATHAR AVEC SOUS-TITRE */}
            <div
              className="portal-header-left"
              onClick={() => {
                setSelectedMissionDetail(null);
                setVolunteerPortalTab('feed');
              }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <img
                src={atharLogoClean}
                alt="Athar Platform منصة أثر"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', fontWeight: 900, color: '#006D5B', lineHeight: 1.1 }}>Athar</span>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Le bénévolat a un sens</span>
              </div>
            </div>

            {/* LIENS DE NAVIGATION PRINCIPAUX (SIDEBAR) */}
            <nav className="portal-nav">
              {/* 1. ACCUEIL */}
              <button
                type="button"
                className={`portal-nav-link ${(volunteerPortalTab === 'feed' || volunteerPortalTab === 'home') && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => {
                  setSelectedMissionDetail(null);
                  setVolunteerPortalTab('feed');
                }}
              >
                <IconHome className="w-4 h-4" />
                <span>Accueil</span>
              </button>

              {/* 2. MON PROFIL */}
              <button
                type="button"
                className={`portal-nav-link ${volunteerPortalTab === 'profile' && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => {
                  setSelectedMissionDetail(null);
                  setVolunteerPortalTab('profile');
                  setProfileSubTab('overview');
                }}
              >
                <IconUsers className="w-4 h-4" />
                <span>Mon profil</span>
              </button>

              {/* 3. MISSIONS */}
              <button
                type="button"
                className={`portal-nav-link ${(volunteerPortalTab === 'missions' || selectedMissionDetail) ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('missions'); }}
              >
                <IconSearch className="w-4 h-4" />
                <span>Missions</span>
              </button>

              {/* 4. ACTION MAP */}
              <button
                type="button"
                className={`portal-nav-link ${volunteerPortalTab === 'map' && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('map'); }}
              >
                <IconMapPin className="w-4 h-4 text-emerald-600" />
                <span>Action Map</span>
              </button>

              {/* 5. ARTICLES */}
              <button
                type="button"
                className={`portal-nav-link ${volunteerPortalTab === 'explore' && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('explore'); }}
              >
                <IconFileText className="w-4 h-4" />
                <span>Articles</span>
              </button>

              {/* 6. SOS BLOOD */}
              <button
                type="button"
                className={`portal-nav-link ${volunteerPortalTab === 'blood' && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('blood'); }}
              >
                <IconDroplet className="w-4 h-4 text-rose-500" />
                <span>SOS Blood</span>
              </button>

              {/* 7. MESSAGES AVEC POINT ROUGE */}
              <button
                type="button"
                className={`portal-nav-link ${volunteerPortalTab === 'messages' && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('messages'); }}
              >
                <IconMessageSquare className="w-4 h-4" />
                <span>Messages</span>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', marginLeft: 'auto' }}></span>
              </button>

              {/* 8. MES OFFRES SAUVEGARDÉES */}
              <button
                type="button"
                className={`portal-nav-link ${(volunteerPortalTab === 'saved' || volunteerPortalTab === 'favorites') && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('saved'); }}
              >
                <IconHeart className="w-4 h-4" />
                <span>Mes offres sauvegardées</span>
              </button>

              {/* 9. PARAMÈTRES */}
              <button
                type="button"
                className={`portal-nav-link ${volunteerPortalTab === 'settings' && !selectedMissionDetail ? 'active' : ''}`}
                onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('settings'); }}
              >
                <IconSettings className="w-4 h-4" />
                <span>Paramètres</span>
              </button>
            </nav>

            {/* CARTE PROMO EN BAS DE LA SIDEBAR (profile benev .png) */}
            <div className="portal-sidebar-promo">
              <div className="portal-sidebar-promo-top">
                <h5>Une Algérie plus solidaire est possible</h5>
                <button
                  type="button"
                  className="portal-sidebar-promo-btn"
                  onClick={() => { setSelectedMissionDetail(null); setVolunteerPortalTab('missions'); }}
                  title="Explorer les opportunités"
                >
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
              <img
                src={profileSidebarImg}
                alt="Une Algérie plus solidaire"
                className="portal-sidebar-promo-img"
              />
            </div>
          </header>

          {/* ZONE PRINCIPALE DU PORTAIL AVEC TOPBAR PLEINE LARGEUR */}
          <div className="portal-main-wrapper">
            {/* TOPBAR SUPÉRIEURE DE RECHERCHE ET PROFIL */}
            <header className="portal-topbar">
              <div className="portal-topbar-search">
                <IconSearch className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={
                    volunteerPortalTab === 'explore'
                      ? "Rechercher des articles, des thématiques, des auteurs..."
                      : "Rechercher des associations, des missions, des lieux..."
                  }
                  value={volunteerSearchQuery}
                  onChange={(e) => {
                    setVolunteerSearchQuery(e.target.value);
                    if (volunteerPortalTab !== 'missions' && volunteerPortalTab !== 'explore' && e.target.value.trim().length > 0) {
                      setVolunteerPortalTab('missions');
                    }
                  }}
                />
              </div>

              <div className="portal-topbar-right">
                {/* Notifications cloche */}
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    className="portal-notif-btn"
                    onClick={() => {
                      setIsVolunteerNotifOpen(!isVolunteerNotifOpen);
                      setIsVolunteerProfileOpen(false);
                    }}
                    title="Notifications"
                  >
                    <IconBell className="w-4 h-4" />
                    <span className="portal-notif-badge-dot"></span>
                  </button>

                  {isVolunteerNotifOpen && (
                    <div className="saas-notif-dropdown" style={{ right: 0 }}>
                      <div className="saas-notif-header">
                        <strong>Notifications</strong>
                        <button
                          type="button"
                          style={{ background: 'none', border: 'none', color: '#006D5B', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer' }}
                          onClick={() => {
                            setVolunteerNotifications(prev => prev.map(n => ({ ...n, unread: false })));
                            showToast("Toutes les notifications marquées comme lues.");
                          }}
                        >
                          Tout marquer comme lu
                        </button>
                      </div>
                      {volunteerNotifications.map(notif => (
                        <div key={notif.id} className="saas-notif-item">
                          <div className="saas-notif-avatar" style={{ background: '#f0fdf4', color: '#006D5B' }}>
                            <IconCheck className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <strong style={{ fontSize: '13px', display: 'block' }}>{notif.title}</strong>
                            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b' }}>{notif.text}</p>
                            <small style={{ fontSize: '11px', color: '#94a3b8' }}>{notif.time}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Profil dropdown Nadia Mansouri */}
                <div style={{ position: 'relative' }}>
                  <div
                    className="portal-user-pill"
                    onClick={() => {
                      setIsVolunteerProfileOpen(!isVolunteerProfileOpen);
                      setIsVolunteerNotifOpen(false);
                    }}
                  >
                    <img src={profileAvatarImg} alt={volunteerUser.name} className="portal-user-pill-avatar" />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15 }}>
                      <span className="portal-user-pill-name">{volunteerUser.name}</span>
                      <small style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>Bénévole</small>
                    </div>
                    <IconChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  </div>

                  {isVolunteerProfileOpen && (
                    <div className="saas-notif-dropdown" style={{ minWidth: '220px', right: 0 }}>
                      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f1f5f9' }}>
                        <strong style={{ fontSize: '14px', display: 'block', color: '#0f172a' }}>{volunteerUser.name}</strong>
                        <small style={{ color: '#64748b' }}>{volunteerUser.email}</small>
                      </div>
                      <button
                        type="button"
                        className="portal-nav-link"
                        style={{ padding: '10px 16px', borderRadius: 0 }}
                        onClick={() => {
                          setIsVolunteerProfileOpen(false);
                          setVolunteerPortalTab('profile');
                        }}
                      >
                        <IconUsers className="w-4 h-4" />
                        <span>Mon profil</span>
                      </button>
                      <button
                        type="button"
                        className="portal-nav-link"
                        style={{ padding: '10px 16px', borderRadius: 0 }}
                        onClick={() => {
                          setIsVolunteerProfileOpen(false);
                          setVolunteerPortalTab('saved');
                        }}
                      >
                        <IconHeart className="w-4 h-4" />
                        <span>Mes offres sauvegardées</span>
                      </button>
                      <button
                        type="button"
                        className="portal-nav-link"
                        style={{ padding: '10px 16px', borderRadius: 0 }}
                        onClick={() => {
                          setIsVolunteerProfileOpen(false);
                          setVolunteerPortalTab('settings');
                        }}
                      >
                        <IconSettings className="w-4 h-4" />
                        <span>Paramètres</span>
                      </button>
                      <button
                        type="button"
                        className="portal-nav-link"
                        style={{ padding: '10px 16px', borderRadius: 0, color: '#dc2626', borderTop: '1px solid #f1f5f9' }}
                        onClick={() => {
                          setIsVolunteerProfileOpen(false);
                          setCurrentView('landing');
                          window.location.hash = '#accueil';
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          showToast("Déconnexion réussie. À bientôt Nadia !");
                        }}
                      >
                        <IconLogOut className="w-4 h-4" />
                        <span>Se déconnecter</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>

            {/* CONTENU PRINCIPAL DU PORTAIL */}
            <main className="portal-container">
            {/* ======================================================== */}
            {/* VUE : DÉTAILS DE L'OPPORTUNITÉ (Style AIESEC Detail)     */}
            {/* ======================================================== */}
            {selectedMissionDetail ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                {/* SOUS-BARRE DE NAVIGATION & ACTIONS RAPIDES */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSelectedMissionDetail(null)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: 700,
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      padding: '9px 18px',
                      color: '#006D5B',
                      background: '#ffffff'
                    }}
                  >
                    <IconChevronLeft className="w-4 h-4" />
                    <span>Retour aux opportunités</span>
                  </button>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={(e) => toggleVolunteerFavorite(selectedMissionDetail.id, e)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        padding: '9px 16px',
                        color: volunteerFavorites.includes(selectedMissionDetail.id) ? '#e11d48' : '#475569',
                        background: '#ffffff',
                        fontWeight: 600
                      }}
                    >
                      <IconHeart className="w-4 h-4" filled={volunteerFavorites.includes(selectedMissionDetail.id)} />
                      <span>
                        {volunteerFavorites.includes(selectedMissionDetail.id) ? 'Sauvegardée' : 'Sauvegarder'}
                      </span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => {
                        if (typeof navigator !== 'undefined' && navigator.clipboard) {
                          navigator.clipboard.writeText(window.location.href);
                        }
                        showToast("Lien de l'opportunité copié dans le presse-papier !");
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        padding: '9px 16px',
                        color: '#475569',
                        background: '#ffffff',
                        fontWeight: 600
                      }}
                    >
                      <IconShare className="w-4 h-4" />
                      <span>Partager</span>
                    </button>
                  </div>
                </div>

                {/* EN-TÊTE OPPORTUNITÉ AVEC BANNIÈRE PANORAMIQUE HAUTE QUALITÉ */}
                <div style={{
                  position: 'relative',
                  height: '340px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 8px 30px -10px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src={selectedMissionDetail.image_url}
                    alt={selectedMissionDetail.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(15,23,42,0.8) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '28px 32px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{
                        background: '#006D5B',
                        color: '#ffffff',
                        padding: '5px 14px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        {getCategoryBadgeTheme(selectedMissionDetail.category).label}
                      </span>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.22)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        padding: '5px 14px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 600
                      }}>
                        Durée : {selectedMissionDetail.duration || '6 semaines'}
                      </span>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.22)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        padding: '5px 14px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 600
                      }}>
                        Lieu : {selectedMissionDetail.location || selectedMissionDetail.wilaya}
                      </span>
                    </div>

                    <h1 style={{ color: '#ffffff', fontSize: '30px', fontWeight: 800, margin: '0 0 10px', lineHeight: '1.25' }}>
                      {selectedMissionDetail.title}
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13.5px' }}>
                      <span>Organisation : <strong>{selectedMissionDetail.association_name}</strong></span>
                      <span>·</span>
                      <span style={{ color: '#86efac', fontWeight: 700 }}>✓ Association Partenaire Agréée</span>
                    </div>
                  </div>
                </div>

                {/* AGENCEMENT 2 COLONNES STRUCTURÉ STYLE AIESEC (65% / 35%) */}
                <div className="mission-detail-grid">
                  {/* COLONNE DE GAUCHE : BLOCS STRUCTURÉS AIESEC */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    {/* BLOC 1 : PROJET & THÉMATIQUE D'ACTION */}
                    <div className="cv-section-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f0fdf4', color: '#006D5B', display: 'grid', placeItems: 'center' }}>
                          <IconAward className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                            Projet & Thématique d'action
                          </h3>
                          <small style={{ color: '#64748b', fontSize: '12.5px' }}>Engagement citoyen et solidaire sur le terrain</small>
                        </div>
                      </div>

                      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '14px 18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ background: '#006D5B', color: '#ffffff', padding: '6px 12px', borderRadius: '8px', fontWeight: 900, fontSize: '14px' }}>
                          {selectedMissionDetail.category}
                        </span>
                        <div>
                          <strong style={{ fontSize: '14px', color: '#166534', display: 'block' }}>
                            {selectedMissionDetail.category === 'Environnement' ? 'Action Climatique & Préservation des Forêts' : selectedMissionDetail.category === 'Éducation' ? 'Éducation & Égalité des Chances' : selectedMissionDetail.category === 'Santé' ? 'Santé & Bien-être pour tous' : 'Solidarité & Entraide Citoyenne'}
                          </strong>
                          <span style={{ fontSize: '12.5px', color: '#166534' }}>Projet d'impact communautaire en Algérie piloté par {selectedMissionDetail.association_name}.</span>
                        </div>
                      </div>

                      <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#334155', margin: 0 }}>
                        {selectedMissionDetail.description}
                      </p>
                    </div>

                    {/* BLOC 2 : RÔLE & RESPONSABILITÉS */}
                    <div className="cv-section-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'grid', placeItems: 'center' }}>
                          <IconCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                            Rôle & Responsabilités du Bénévole
                          </h3>
                          <small style={{ color: '#64748b', fontSize: '12.5px' }}>Ce que vous ferez concrètement sur le terrain</small>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {(selectedMissionDetail.what_you_will_do || [
                          "Accueil chaleureux, orientation et briefing des équipes bénévoles",
                          "Participation active aux ateliers d'action citoyenne et de coordination",
                          "Sensibilisation positive et engagement direct auprès des bénéficiaires",
                          "Débriefing de fin d'action, bilan d'impact et restitution collective"
                        ]).map((task, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              background: '#f0fdf4',
                              color: '#166534',
                              border: '1px solid #bbf7d0',
                              display: 'grid',
                              placeItems: 'center',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}>
                              <IconCheck className="w-3.5 h-3.5" />
                            </div>
                            <span style={{ fontSize: '14px', color: '#334155', lineHeight: '1.55' }}>
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BLOC 3 : PRÉREQUIS & ÉLIGIBILITÉ */}
                    <div className="cv-section-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'grid', placeItems: 'center' }}>
                          <IconBriefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                            Prérequis & Éligibilité
                          </h3>
                          <small style={{ color: '#64748b', fontSize: '12.5px' }}>Profil recherché et compétences souhaitées</small>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '18px' }}>
                        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px' }}>
                          <span style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Langues souhaitées</span>
                          <strong style={{ fontSize: '13.5px', color: '#0f172a' }}>Arabe & Français (Anglais apprécié)</strong>
                        </div>

                        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px' }}>
                          <span style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Âge minimum</span>
                          <strong style={{ fontSize: '13.5px', color: '#0f172a' }}>18 ans révolus</strong>
                        </div>

                        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px' }}>
                          <span style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Disponibilité</span>
                          <strong style={{ fontSize: '13.5px', color: '#0f172a' }}>{selectedMissionDetail.time_str || 'Selon créneaux indiqués'}</strong>
                        </div>
                      </div>

                      <div>
                        <strong style={{ fontSize: '13px', color: '#475569', display: 'block', marginBottom: '8px' }}>Compétences clés valorisées :</strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {(selectedMissionDetail.useful_skills || ["Travail d'équipe", "Empathie", "Dynamisme", "Pédagogie"]).map((s, i) => (
                            <span key={i} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', padding: '5px 12px', borderRadius: '999px', fontSize: '12.5px', fontWeight: 600 }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* BLOC 4 : PRISE EN CHARGE & AVANTAGES (LOGISTIQUE AIESEC) */}
                    <div className="cv-section-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#ede9fe', color: '#7c3aed', display: 'grid', placeItems: 'center' }}>
                          <IconCoffee className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                            Prise en charge & Avantages
                          </h3>
                          <small style={{ color: '#64748b', fontSize: '12.5px' }}>Conditions d'accueil et logistique fournies par l'organisation</small>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                          <IconCoffee className="w-5 h-5 text-emerald-700" />
                          <div>
                            <strong style={{ fontSize: '13.5px', display: 'block', color: '#0f172a' }}>Restauration offerte</strong>
                            <span style={{ fontSize: '12.5px', color: '#64748b' }}>{selectedMissionDetail.practical_info?.catering || "Repas complet et boissons fournis"}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                          <IconBus className="w-5 h-5 text-emerald-700" />
                          <div>
                            <strong style={{ fontSize: '13.5px', display: 'block', color: '#0f172a' }}>Transport assuré</strong>
                            <span style={{ fontSize: '12.5px', color: '#64748b' }}>{selectedMissionDetail.practical_info?.transport || "Navette bénévole disponible"}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                          <IconPackage className="w-5 h-5 text-emerald-700" />
                          <div>
                            <strong style={{ fontSize: '13.5px', display: 'block', color: '#0f172a' }}>Équipement fourni</strong>
                            <span style={{ fontSize: '12.5px', color: '#64748b' }}>{selectedMissionDetail.practical_info?.equipment || "Gants, chasubles et matériel d'action fournis"}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                          <IconShieldCheck className="w-5 h-5 text-emerald-700" />
                          <div>
                            <strong style={{ fontSize: '13.5px', display: 'block', color: '#0f172a' }}>Assurance & Certificat</strong>
                            <span style={{ fontSize: '12.5px', color: '#64748b' }}>Assurance RC bénévole incluse et attestation Athar délivrée</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BLOC 5 : EMPLACEMENT & CARTE INTERACTIVE */}
                    {(() => {
                      const coords = getMissionCoordinates(selectedMissionDetail);
                      const deltaLon = 0.025;
                      const deltaLat = 0.018;
                      const bbox = `${(coords.lon - deltaLon).toFixed(4)},${(coords.lat - deltaLat).toFixed(4)},${(coords.lon + deltaLon).toFixed(4)},${(coords.lat + deltaLat).toFixed(4)}`;
                      const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${coords.lat},${coords.lon}`;
                      const mapSearchQuery = selectedMissionDetail.practical_info?.exact_address || (selectedMissionDetail.location + ', Algérie');
                      const googleEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapSearchQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

                      return (
                        <div className="cv-section-card">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f0fdf4', color: '#006D5B', display: 'grid', placeItems: 'center' }}>
                                <IconMapPin className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                                  Emplacement & Rendez-vous
                                </h3>
                                <small style={{ color: '#64748b', fontSize: '12.5px' }}>
                                  {selectedMissionDetail.practical_info?.exact_address || selectedMissionDetail.location}
                                </small>
                              </div>
                            </div>

                            {/* Sélecteur de vue : OpenStreetMap ou Google Maps */}
                            <div style={{ display: 'inline-flex', padding: '3px', background: '#f1f5f9', borderRadius: '8px', gap: '3px' }}>
                              <button
                                type="button"
                                onClick={() => setMissionMapType('osm')}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  borderRadius: '6px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  background: missionMapType === 'osm' ? '#ffffff' : 'transparent',
                                  color: missionMapType === 'osm' ? '#006D5B' : '#64748b',
                                  boxShadow: missionMapType === 'osm' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                OpenStreetMap
                              </button>
                              <button
                                type="button"
                                onClick={() => setMissionMapType('google')}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  borderRadius: '6px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  background: missionMapType === 'google' ? '#ffffff' : 'transparent',
                                  color: missionMapType === 'google' ? '#006D5B' : '#64748b',
                                  boxShadow: missionMapType === 'google' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                Google Maps
                              </button>
                            </div>
                          </div>

                          {/* Iframe Carte Interactive (OpenStreetMap / Google Maps) */}
                          <div style={{
                            width: '100%',
                            height: '240px',
                            borderRadius: '12px',
                            border: '1px solid #cbd5e1',
                            overflow: 'hidden',
                            position: 'relative',
                            background: '#f8fafc'
                          }}>
                            <iframe
                              key={missionMapType + '-' + selectedMissionDetail.id}
                              title={`Carte de la mission - ${selectedMissionDetail.title || 'Athar'}`}
                              src={missionMapType === 'osm' ? osmEmbedUrl : googleEmbedUrl}
                              style={{
                                width: '100%',
                                height: '100%',
                                border: 0,
                                display: 'block'
                              }}
                              loading="lazy"
                            />
                          </div>

                          {/* Barre d'actions & Itinéraire */}
                          <div style={{
                            marginTop: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '10px'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#64748b' }}>
                              <IconMapPin className="w-3.5 h-3.5 text-emerald-700" style={{ flexShrink: 0 }} />
                              <span style={{ fontWeight: 600 }}>{selectedMissionDetail.practical_info?.exact_address || selectedMissionDetail.location}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearchQuery)}`}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontSize: '12.5px',
                                  fontWeight: 700,
                                  color: '#006D5B',
                                  textDecoration: 'none',
                                  padding: '7px 13px',
                                  borderRadius: '8px',
                                  background: '#f0fdf4',
                                  border: '1px solid #a7f3d0',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <span>Voir l'itinéraire sur Google Maps</span>
                                <IconExternalLink className="w-3.5 h-3.5" />
                              </a>
                              <a
                                href={`https://waze.com/ul?ll=${coords.lat},${coords.lon}&navigate=yes`}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  fontSize: '12.5px',
                                  fontWeight: 600,
                                  color: '#475569',
                                  textDecoration: 'none',
                                  padding: '7px 11px',
                                  borderRadius: '8px',
                                  background: '#ffffff',
                                  border: '1px solid #cbd5e1',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <span>Waze</span>
                                <IconExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* COLONNE DE DROITE : STICKY ACTION SIDEBAR STYLE AIESEC */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '90px' }}>
                    <div className="cv-section-card" style={{ padding: '24px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
                        Postuler à cette opportunité
                      </h3>

                      {/* JAUGE DE PLACES */}
                      <div style={{ marginBottom: '18px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                          <span>Places restantes</span>
                          <span style={{ color: '#006D5B' }}>{selectedMissionDetail.spots_remaining} sur {selectedMissionDetail.spots_total}</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{
                            width: `${Math.round(((selectedMissionDetail.spots_total - selectedMissionDetail.spots_remaining) / selectedMissionDetail.spots_total) * 100)}%`,
                            height: '100%',
                            background: '#006D5B',
                            borderRadius: '999px'
                          }}></div>
                        </div>
                      </div>

                      {/* BOUTON D'ACTION PRINCIPAL */}
                      {volunteerApplications.some(a => a.missionId === selectedMissionDetail.id) ? (
                        <div style={{
                          background: '#f0fdf4',
                          border: '1px solid #bbf7d0',
                          color: '#166534',
                          padding: '14px',
                          borderRadius: '10px',
                          textAlign: 'center',
                          fontWeight: 700,
                          fontSize: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}>
                          <IconCheck className="w-4 h-4" />
                          <span>Vous avez déjà postulé</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-green"
                          onClick={() => handleApplyAsVolunteer(selectedMissionDetail)}
                          style={{
                            width: '100%',
                            padding: '14px',
                            fontSize: '15px',
                            fontWeight: 800,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 14px rgba(13, 91, 97, 0.25)'
                          }}
                        >
                          <span>Postuler à cette opportunité</span>
                          <IconArrowRight className="w-4 h-4" />
                        </button>
                      )}

                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: '#64748b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <IconCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Votre profil Nadia Mansouri sera transmis directement</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <IconCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Assurance bénévole et encadrement inclus</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <IconCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Attestation officielle délivrée à la fin de la mission</span>
                        </div>
                      </div>
                    </div>

                    {/* CONTACT ORGANISATION */}
                    <div className="cv-section-card" style={{ padding: '20px' }}>
                      <strong style={{ fontSize: '14px', color: '#0f172a', display: 'block', marginBottom: '4px' }}>
                        {selectedMissionDetail.association_name}
                      </strong>
                      <p style={{ margin: '0 0 12px', fontSize: '12.5px', color: '#64748b' }}>
                        Association partenaire agréée enregistrée sur la plateforme nationale Athar.
                      </p>
                      <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => showToast(`Contact coordinateur : ${selectedMissionDetail.association_name} · contact@athar-dz.org`)}
                        style={{ width: '100%', border: '1px solid #cbd5e1', fontSize: '12.5px', fontWeight: 700, padding: '8px' }}
                      >
                        Poser une question à l'organisation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ======================================================== */
              /* ROUTAGE DES PAGES PRINCIPALES DU PORTAIL                 */
              /* ======================================================== */
              <div>
                {/* 1. PAGE CATALOGUE MISSIONS (missions benev.png) */}
                {volunteerPortalTab === 'missions' && (
                  <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', paddingBottom: '40px' }}>

                    {/* HERO BANNER MINT AVEC MAKAM ET CALLIGRAPHIE */}
                    <div 
                      className="feed-welcome-banner"
                      style={{
                        background: 'linear-gradient(135deg, #edf9f6 0%, #e2f5f1 100%)',
                        borderRadius: '20px',
                        padding: '28px 36px',
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
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#006D5B', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
                          MISSIONS BÉNÉVOLES
                        </span>
                        <h1 style={{ fontSize: '27px', fontWeight: 900, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.25 }}>
                          Agir aujourd'hui<br />pour une Algérie plus solidaire 🌱
                        </h1>
                        <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.5, maxWidth: '480px' }}>
                          Trouvez une mission qui a du sens et faites la différence près de chez vous.
                        </p>
                      </div>

                      {/* IMAGE PANORAMIQUE ALGER + SLOGAN CURSIF */}
                      <div style={{ flex: '0 0 380px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <div style={{ position: 'relative', width: '330px', height: '110px', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                          <img 
                            src={profileBannerImg} 
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

                    {/* BARRE DE RECHERCHE ET FILTRES (missions benev.png) */}
                    <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                      {/* LIGNE 1 : RECHERCHE + 3 DROPDOWNS */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '12px', alignItems: 'center' }}>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <IconSearch className="w-4 h-4 text-slate-400" style={{ position: 'absolute', left: '14px' }} />
                          <input
                            type="text"
                            placeholder="Mots-clés, rôle, ou lieu..."
                            value={volunteerSearchQuery}
                            onChange={(e) => setVolunteerSearchQuery(e.target.value)}
                            style={{ width: '100%', paddingLeft: '38px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#f8fafc', height: '42px', fontSize: '13.5px', outline: 'none' }}
                          />
                        </div>
                        <select
                          value={volunteerFilterWilaya}
                          onChange={(e) => setVolunteerFilterWilaya(e.target.value)}
                          style={{ borderRadius: '10px', border: '1px solid #e2e8f0', background: '#f8fafc', height: '42px', fontSize: '13.5px', padding: '0 12px', outline: 'none' }}
                        >
                          <option value="all">Toutes les wilayas</option>
                          <option value="Alger">Alger</option>
                          <option value="Tipaza">Tipaza</option>
                          <option value="Oran">Oran</option>
                          <option value="Constantine">Constantine</option>
                        </select>
                        <select
                          value={volunteerFilterTheme}
                          onChange={(e) => setVolunteerFilterTheme(e.target.value)}
                          style={{ borderRadius: '10px', border: '1px solid #e2e8f0', background: '#f8fafc', height: '42px', fontSize: '13.5px', padding: '0 12px', outline: 'none' }}
                        >
                          <option value="all">Toutes thématiques</option>
                          <option value="Climat">Climat</option>
                          <option value="Solidarité">Solidarité</option>
                          <option value="Éducation">Éducation</option>
                          <option value="Environnement">Environnement</option>
                          <option value="Santé">Santé</option>
                          <option value="Patrimoine">Patrimoine</option>
                        </select>
                        <select
                          value={volunteerFilterDate}
                          onChange={(e) => setVolunteerFilterDate(e.target.value)}
                          style={{ borderRadius: '10px', border: '1px solid #e2e8f0', background: '#f8fafc', height: '42px', fontSize: '13.5px', padding: '0 12px', outline: 'none' }}
                        >
                          <option value="all">Toutes périodes</option>
                          <option value="weekend">Week-ends</option>
                          <option value="month">Ce mois-ci</option>
                        </select>
                      </div>

                      {/* LIGNE 2 : PILULES DE THÉMATIQUES AVEC ÉMOJIS/ICÔNES */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingTop: '4px' }}>
                        {[
                          { name: 'Tous', icon: null },
                          { name: 'Éducation', icon: '📖' },
                          { name: 'Climat', icon: '🌱' },
                          { name: 'Santé', icon: '🩺' },
                          { name: 'Solidarité', icon: '👥' },
                          { name: 'Patrimoine', icon: '🏛️' },
                          { name: 'Faune', icon: '🐾' },
                          { name: 'Repas offert', icon: '🍽️' }
                        ].map(p => {
                          const isActive = volunteerQuickTag === p.name || (p.name === 'Tous' && volunteerFilterTheme === 'all' && (!volunteerQuickTag || volunteerQuickTag === 'Tous'));
                          return (
                            <button
                              key={p.name}
                              type="button"
                              onClick={() => {
                                setVolunteerQuickTag(p.name);
                                if (p.name === 'Tous') setVolunteerFilterTheme('all');
                                else setVolunteerFilterTheme(p.name);
                              }}
                              style={{
                                padding: '7px 16px',
                                borderRadius: '24px',
                                fontSize: '13px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                border: isActive ? '1px solid #006D5B' : '1px solid #cbd5e1',
                                background: isActive ? '#006D5B' : '#ffffff',
                                color: isActive ? '#ffffff' : '#334155',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.15s ease'
                              }}
                            >
                              {p.icon && <span>{p.icon}</span>}
                              <span>{p.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* GRILLE 2 COLONNES DE CARTES DE MISSIONS (missions benev.png) */}
                    {(() => {
                      const filtered = missionsList.filter(m => {
                        if (volunteerSearchQuery.trim()) {
                          const q = volunteerSearchQuery.toLowerCase();
                          const matchTitle = m.title.toLowerCase().includes(q);
                          const matchAssoc = m.association_name.toLowerCase().includes(q);
                          const matchLoc = m.location.toLowerCase().includes(q);
                          if (!matchTitle && !matchAssoc && !matchLoc) return false;
                        }
                        if (volunteerFilterWilaya !== 'all') {
                          if (!m.wilaya.toLowerCase().includes(volunteerFilterWilaya.toLowerCase())) return false;
                        }
                        if (volunteerFilterTheme !== 'all') {
                          if (m.category.toLowerCase() !== volunteerFilterTheme.toLowerCase() && m.badge?.toLowerCase() !== volunteerFilterTheme.toLowerCase()) return false;
                        }
                        return true;
                      });

                      if (filtered.length === 0) {
                        return (
                          <div style={{ background: '#ffffff', borderRadius: '18px', padding: '60px 20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                            <IconSearch className="w-10 h-10 text-slate-300" style={{ margin: '0 auto 12px' }} />
                            <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                              Aucune opportunité ne correspond à vos filtres
                            </h3>
                            <p style={{ margin: '0 0 16px', fontSize: '13.5px', color: '#64748b' }}>
                              Essayez d'élargir votre sélection ou de réinitialiser les critères.
                            </p>
                            <button
                              type="button"
                              className="btn btn-ghost"
                              onClick={() => {
                                setVolunteerSearchQuery('');
                                setVolunteerFilterWilaya('all');
                                setVolunteerFilterTheme('all');
                                setVolunteerFilterDate('all');
                                setVolunteerQuickTag('Tous');
                              }}
                              style={{ border: '1px solid #cbd5e1', fontWeight: 700 }}
                            >
                              Réinitialiser les filtres
                            </button>
                          </div>
                        );
                      }

                      return (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '22px' }}>
                          {filtered.map(m => {
                            // Par défaut, la mission 2 (CRA) a le coeur rouge rempli dans missions benev.png
                            const isFav = volunteerFavorites.includes(m.id) || m.id === 2;

                            return (
                              <div 
                                key={m.id}
                                style={{
                                  background: '#ffffff',
                                  borderRadius: '18px',
                                  border: '1px solid #e2e8f0',
                                  overflow: 'hidden',
                                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                                  display: 'flex',
                                  flexDirection: 'column'
                                }}
                              >
                                {/* PHOTO DE MISSION + BADGE + BOUTON COEUR */}
                                <div style={{ position: 'relative', height: '230px', width: '100%', overflow: 'hidden' }}>
                                  <img 
                                    src={m.image_url} 
                                    alt={m.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                  />
                                  
                                  {/* BADGE THÉMATIQUE */}
                                  <span 
                                    style={{
                                      position: 'absolute',
                                      top: '14px',
                                      left: '14px',
                                      padding: '5px 14px',
                                      borderRadius: '20px',
                                      fontSize: '12px',
                                      fontWeight: 800,
                                      background: m.badgeBg || '#e6f7f3',
                                      color: m.badgeColor || '#006D5B',
                                      boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                                    }}
                                  >
                                    {m.badge || m.category}
                                  </span>

                                  {/* BOUTON COEUR FAVORIS */}
                                  <button
                                    type="button"
                                    onClick={(e) => toggleVolunteerFavorite(m.id, e)}
                                    style={{
                                      position: 'absolute',
                                      top: '14px',
                                      right: '14px',
                                      width: '36px',
                                      height: '36px',
                                      borderRadius: '50%',
                                      background: '#ffffff',
                                      border: 'none',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      boxShadow: '0 2px 8px rgba(0,0,0,0.14)'
                                    }}
                                  >
                                    <IconHeart className="w-4 h-4" fill={isFav} />
                                  </button>
                                </div>

                                {/* CONTENU DE LA CARTE */}
                                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                  {/* NOM DE L'ASSOCIATION AVEC BADGE VÉRIFIÉ */}
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                                    <IconCheckVerified className="w-4 h-4" />
                                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#006D5B' }}>
                                      {m.association_name}
                                    </span>
                                  </div>

                                  {/* TITRE DE LA MISSION */}
                                  <h3 
                                    onClick={() => setSelectedMissionDetail(m)}
                                    style={{ margin: '0 0 10px', fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, cursor: 'pointer' }}
                                  >
                                    {m.title}
                                  </h3>

                                  {/* MÉTADONNÉES LOCALISATION & DURÉE */}
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                      <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
                                      <span>{m.location}</span>
                                    </span>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                      <IconClock className="w-3.5 h-3.5 text-slate-400" />
                                      <span>{m.duration}</span>
                                    </span>
                                  </div>

                                  {/* BAS DE CARTE : PLACES & JAUGE À GAUCHE, BOUTON PARTICIPER À DROITE */}
                                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingTop: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>
                                        {m.spots_remaining} places
                                      </span>
                                      <div style={{ width: '80px', height: '6px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                                        <div style={{ width: '50%', height: '100%', background: '#006D5B', borderRadius: '10px' }} />
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => setSelectedMissionDetail(m)}
                                      style={{
                                        padding: '8px 18px',
                                        borderRadius: '24px',
                                        background: '#e6f7f3',
                                        color: '#006D5B',
                                        border: 'none',
                                        fontWeight: 800,
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'all 0.15s ease'
                                      }}
                                    >
                                      <span>Participer</span>
                                      <IconArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}

                    {/* BOUTON VOIR PLUS DE MISSIONS (missions benev.png) */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                      <button
                        type="button"
                        style={{
                          padding: '11px 28px',
                          borderRadius: '24px',
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          color: '#334155',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                        }}
                      >
                        <span>Voir plus de missions</span>
                        <span style={{ fontSize: '15px' }}>↓</span>
                      </button>
                    </div>

                  </div>
                )}

                {/* ======================================================== */}
                {/* 2. PAGE 'MON PROFIL BÉNÉVOLE' (Conforme à profile benev .png) */}
                {/* ======================================================== */}
                {volunteerPortalTab === 'profile' && (
                  <div className="benev-profile-page">
                    {/* 1. HERO COVER BANNER */}
                    <div className="benev-cover-banner">
                      <img src={profileBannerImg} alt="Alger la blanche et Baie d'Alger" className="benev-cover-img" />
                      <div className="benev-cover-overlay">
                        <button
                          type="button"
                          className="benev-cover-btn"
                          onClick={() => showToast("Changement de couverture : fonctionnalité bientôt disponible.")}
                        >
                          <IconCamera className="w-4 h-4" />
                          <span>Changer la couverture</span>
                        </button>

                        <div className="benev-cover-calligraphy">
                          <span className="benev-script-line1">Des citoyens,</span>
                          <span className="benev-script-line2">Un impact réel.</span>
                        </div>
                      </div>
                    </div>

                    {/* 2. CARTE PROFIL PRINCIPALE & STATS */}
                    <div className="benev-profile-card">
                      <div className="benev-profile-header-row">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
                          <div className="benev-avatar-col">
                            <img src={profileAvatarImg} alt={volunteerUser.name} className="benev-avatar-large" />
                            <span className="benev-avatar-status" title="En ligne"></span>
                          </div>

                          <div className="benev-profile-info">
                            <div className="benev-name-row">
                              <h1 className="benev-name">{volunteerUser.name}</h1>
                              <span className="benev-verified-badge">
                                <IconCheck className="w-3.5 h-3.5" />
                                <span>Bénévole Vérifiée</span>
                              </span>
                            </div>

                            <p className="benev-headline">
                              {isEditingProfile ? (
                                <input
                                  type="text"
                                  value={volunteerUser.headline}
                                  onChange={(e) => setVolunteerUser({ ...volunteerUser, headline: e.target.value })}
                                  style={{ width: '100%', maxWidth: '480px', padding: '6px 10px', fontSize: '13.5px' }}
                                />
                              ) : (
                                "Engagée pour un impact citoyen durable"
                              )}
                            </p>

                            <div className="benev-meta-row">
                              <span className="benev-meta-item">
                                <IconMapPin className="w-4 h-4 text-emerald-600" />
                                <span>Alger, Algérie</span>
                              </span>
                              <span>·</span>
                              <span className="benev-meta-item">
                                <IconUsers className="w-4 h-4 text-slate-500" />
                                <span>{volunteerUser.age} ans</span>
                              </span>
                              <span>·</span>
                              <span className="benev-meta-item">
                                <IconCalendar className="w-4 h-4 text-emerald-600" />
                                <span>Week-ends & Samedis</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="benev-edit-btn"
                          onClick={() => {
                            if (isEditingProfile) {
                              showToast("Profil mis à jour avec succès !");
                            }
                            setIsEditingProfile(!isEditingProfile);
                          }}
                        >
                          <IconEdit className="w-4 h-4 text-slate-600" />
                          <span>{isEditingProfile ? "Enregistrer" : "Éditer mon profil"}</span>
                        </button>
                      </div>

                      {/* STATS ROW (3 CARTES) */}
                      <div className="benev-stats-grid">
                        <div className="benev-stat-card">
                          <div className="benev-stat-icon mint">
                            <IconClock className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="benev-stat-number">{volunteerUser.hoursVolunteered}h</span>
                            <span className="benev-stat-label">Heures de bénévolat</span>
                          </div>
                        </div>

                        <div className="benev-stat-card">
                          <div className="benev-stat-icon rose">
                            <IconHeart className="w-5 h-5 text-rose-500" filled={true} />
                          </div>
                          <div>
                            <span className="benev-stat-number">{volunteerUser.completedMissionsCount}</span>
                            <span className="benev-stat-label">Projets réalisés</span>
                          </div>
                        </div>

                        <div className="benev-stat-card">
                          <div className="benev-stat-icon mint">
                            <IconAward className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="benev-stat-number">3</span>
                            <span className="benev-stat-label">Certificats Ather</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. GRILLE PRINCIPALE 2 COLONNES */}
                    <div className="benev-main-grid">
                      {/* COLONNE GAUCHE (65%) */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                        {/* CARTE 1 : INFORMATIONS PERSONNELLES */}
                        <div className="benev-card">
                          <div className="benev-card-header">
                            <div className="benev-card-header-left">
                              <div className="benev-card-icon-badge">
                                <IconUsers className="w-4 h-4" />
                              </div>
                              <h3 className="benev-card-title">Informations personnelles</h3>
                            </div>
                          </div>

                          <div className="benev-info-grid">
                            <div className="benev-info-field">
                              <label>Nom complet</label>
                              {isEditingProfile ? (
                                <input
                                  type="text"
                                  value={volunteerUser.name}
                                  onChange={(e) => setVolunteerUser({ ...volunteerUser, name: e.target.value })}
                                  style={{ width: '100%' }}
                                />
                              ) : (
                                <strong>{volunteerUser.name}</strong>
                              )}
                            </div>

                            <div className="benev-info-field">
                              <label>Email</label>
                              {isEditingProfile ? (
                                <input
                                  type="email"
                                  value={volunteerUser.email}
                                  onChange={(e) => setVolunteerUser({ ...volunteerUser, email: e.target.value })}
                                  style={{ width: '100%' }}
                                />
                              ) : (
                                <strong>{volunteerUser.email}</strong>
                              )}
                            </div>

                            <div className="benev-info-field">
                              <label>Téléphone</label>
                              {isEditingProfile ? (
                                <input
                                  type="tel"
                                  value={volunteerUser.phone}
                                  onChange={(e) => setVolunteerUser({ ...volunteerUser, phone: e.target.value })}
                                  style={{ width: '100%' }}
                                />
                              ) : (
                                <strong>{volunteerUser.phone}</strong>
                              )}
                            </div>

                            <div className="benev-info-field">
                              <label>Wilaya de résidence</label>
                              {isEditingProfile ? (
                                <select
                                  value={volunteerUser.wilaya}
                                  onChange={(e) => setVolunteerUser({ ...volunteerUser, wilaya: e.target.value })}
                                  style={{ width: '100%' }}
                                >
                                  {WILAYAS_LIST.map(w => (
                                    <option key={w.code} value={`${w.code} - ${w.name}`}>
                                      {w.code} - {w.name}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <strong>16 - Alger (Bab El Oued)</strong>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* CARTE 2 : À PROPOS DE MOI */}
                        <div className="benev-card">
                          <div className="benev-card-header">
                            <div className="benev-card-header-left">
                              <div className="benev-card-icon-badge">
                                <IconFileText className="w-4 h-4" />
                              </div>
                              <h3 className="benev-card-title">À propos de moi</h3>
                            </div>
                            <button
                              type="button"
                              className="benev-card-action-link"
                              onClick={() => setIsEditingProfile(!isEditingProfile)}
                            >
                              <IconEdit className="w-3.5 h-3.5" />
                              <span>Éditer</span>
                            </button>
                          </div>

                          {isEditingProfile ? (
                            <textarea
                              rows={4}
                              value={volunteerUser.bio}
                              onChange={(e) => setVolunteerUser({ ...volunteerUser, bio: e.target.value })}
                              style={{ width: '100%' }}
                            />
                          ) : (
                            <p className="benev-bio-text">
                              {volunteerUser.bio}
                            </p>
                          )}
                        </div>

                        {/* CARTE 3 : CENTRES D'INTÉRÊT & COMPÉTENCES */}
                        <div className="benev-card">
                          <div className="benev-card-header">
                            <div className="benev-card-header-left">
                              <div className="benev-card-icon-badge">
                                <IconSettings className="w-4 h-4" />
                              </div>
                              <h3 className="benev-card-title">Centres d'intérêt & compétences</h3>
                            </div>
                            <button
                              type="button"
                              className="benev-card-action-link"
                              onClick={() => setIsEditingProfile(!isEditingProfile)}
                            >
                              <IconEdit className="w-3.5 h-3.5" />
                              <span>Éditer</span>
                            </button>
                          </div>

                          <div className="benev-skills-wrap">
                            {["Éducation", "Environnement", "Solidarité", "Animation", "Travail en équipe", "Communication", "Sens de l'écoute"].map((pill, idx) => (
                              <span key={idx} className="benev-skill-pill">
                                {pill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CARTE 4 : DISPONIBILITÉS */}
                        <div className="benev-card">
                          <div className="benev-card-header">
                            <div className="benev-card-header-left">
                              <div className="benev-card-icon-badge">
                                <IconCalendar className="w-4 h-4" />
                              </div>
                              <h3 className="benev-card-title">Disponibilités</h3>
                            </div>
                            <button
                              type="button"
                              className="benev-card-action-link"
                              onClick={() => setIsEditingProfile(!isEditingProfile)}
                            >
                              <IconEdit className="w-3.5 h-3.5" />
                              <span>Éditer</span>
                            </button>
                          </div>

                          <div className="benev-avail-grid">
                            <div className="benev-avail-card">
                              <div className="benev-avail-icon green">
                                <IconCalendar className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <h4 className="benev-avail-title">Week-ends</h4>
                                <span className="benev-avail-status">Disponible</span>
                              </div>
                            </div>

                            <div className="benev-avail-card">
                              <div className="benev-avail-icon orange">
                                <IconSun className="w-4 h-4 text-amber-500" />
                              </div>
                              <div>
                                <h4 className="benev-avail-title">Samedis</h4>
                                <span className="benev-avail-status">Disponible</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* COLONNE DROITE (35%) */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                        {/* CARTE 1 : BADGES */}
                        <div className="benev-card">
                          <div className="benev-card-header">
                            <div className="benev-card-header-left">
                              <div className="benev-card-icon-badge">
                                <IconAward className="w-4 h-4" />
                              </div>
                              <h3 className="benev-card-title">Badges</h3>
                            </div>
                            <button
                              type="button"
                              className="benev-card-action-link"
                              onClick={() => showToast("Affichage de tous les badges obtenus.")}
                            >
                              <span>Voir tout</span>
                            </button>
                          </div>

                          <div className="benev-badges-list">
                            <div className="benev-badge-item">
                              <div className="benev-badge-circle green">
                                <IconLeaf className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="benev-badge-name">Citoyen Vert</h4>
                                <p className="benev-badge-desc">Environnement</p>
                              </div>
                            </div>

                            <div className="benev-badge-item">
                              <div className="benev-badge-circle purple">
                                <IconUsers className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="benev-badge-name">Acteur Solidaire</h4>
                                <p className="benev-badge-desc">Communauté</p>
                              </div>
                            </div>

                            <div className="benev-badge-item">
                              <div className="benev-badge-circle gold">
                                <IconStar className="w-5 h-5 text-white" fill="white" />
                              </div>
                              <div>
                                <h4 className="benev-badge-name">Bénévole Actif</h4>
                                <p className="benev-badge-desc">Engagement</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CARTE 2 : MES CERTIFICATS */}
                        <div className="benev-card">
                          <div className="benev-card-header">
                            <div className="benev-card-header-left">
                              <div className="benev-card-icon-badge">
                                <IconFileText className="w-4 h-4" />
                              </div>
                              <h3 className="benev-card-title">Mes certificats</h3>
                            </div>
                            <button
                              type="button"
                              className="benev-card-action-link"
                              onClick={() => {
                                if (volunteerCertificates.length > 0) {
                                  setSelectedCertificateDetail(volunteerCertificates[0]);
                                }
                              }}
                            >
                              <span>Voir tout</span>
                            </button>
                          </div>

                          <div className="benev-certs-list">
                            <div
                              className="benev-cert-item"
                              onClick={() => {
                                setSelectedCertificateDetail({
                                  title: "Premiers secours",
                                  associationName: "Croissant Rouge Algérien",
                                  date: "Mars 2024",
                                  hours: 18,
                                  wilaya: "16 - Alger",
                                  hash: "ATHAR-CRA-SEC-0914"
                                });
                              }}
                            >
                              <div className="benev-cert-left">
                                <div className="benev-cert-icon-sq">
                                  <IconFileText className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="benev-cert-title">Premiers secours</h4>
                                  <p className="benev-cert-meta">Croissant Rouge Algérien · Mars 2024</p>
                                </div>
                              </div>
                              <IconChevronRight className="w-4 h-4 text-slate-400" />
                            </div>

                            <div
                              className="benev-cert-item"
                              onClick={() => {
                                setSelectedCertificateDetail({
                                  title: "Sensibilisation environnement",
                                  associationName: "Green Future",
                                  date: "Jan 2024",
                                  hours: 12,
                                  wilaya: "16 - Alger",
                                  hash: "ATHAR-GF-ENV-4421"
                                });
                              }}
                            >
                              <div className="benev-cert-left">
                                <div className="benev-cert-icon-sq">
                                  <IconFileText className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="benev-cert-title">Sensibilisation environnement</h4>
                                  <p className="benev-cert-meta">Green Future · Jan 2024</p>
                                </div>
                              </div>
                              <IconChevronRight className="w-4 h-4 text-slate-400" />
                            </div>

                            <div
                              className="benev-cert-item"
                              onClick={() => {
                                setSelectedCertificateDetail({
                                  title: "Animation avec les enfants",
                                  associationName: "Lire pour Demain",
                                  date: "Oct 2023",
                                  hours: 18,
                                  wilaya: "16 - Alger",
                                  hash: "ATHAR-LPD-EDU-7811"
                                });
                              }}
                            >
                              <div className="benev-cert-left">
                                <div className="benev-cert-icon-sq">
                                  <IconFileText className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="benev-cert-title">Animation avec les enfants</h4>
                                  <p className="benev-cert-meta">Lire pour Demain · Oct 2023</p>
                                </div>
                              </div>
                              <IconChevronRight className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4. SECTION PLEINE LARGEUR : MES CANDIDATURES RÉCENTES */}
                    <div className="benev-candidatures-card">
                      <div className="benev-card-header">
                        <div className="benev-card-header-left">
                          <div className="benev-card-icon-badge">
                            <IconFileText className="w-4 h-4" />
                          </div>
                          <h3 className="benev-card-title">Mes candidatures récentes</h3>
                        </div>
                        <button
                          type="button"
                          className="benev-card-action-link"
                          onClick={() => setVolunteerPortalTab('missions')}
                        >
                          <span>Voir tout</span>
                        </button>
                      </div>

                      <div className="benev-candidatures-list">
                        {/* ROW 1: Reboisement à Zéralda */}
                        <div
                          className="benev-cand-item"
                          onClick={() => {
                            const found = missionsData.find(m => m.id === 1);
                            if (found) setSelectedMissionDetail(found);
                          }}
                        >
                          <div className="benev-cand-main">
                            <img src={candReboisementImg} alt="Reboisement à Zéralda" className="benev-cand-thumb" />
                            <div className="benev-cand-logo" style={{ background: '#059669', color: '#ffffff' }}>
                              <IconLeaf className="w-4 h-4 text-white" />
                            </div>
                            <div className="benev-cand-info">
                              <h4 className="benev-cand-title">Reboisement à Zéralda</h4>
                              <p className="benev-cand-org">Green Future</p>
                            </div>
                          </div>

                          <div className="benev-cand-right">
                            <span className="benev-status-pill accepted">
                              <IconCheck className="w-3.5 h-3.5" />
                              <span>Candidature acceptée</span>
                            </span>
                            <IconChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>

                        {/* ROW 2: Ateliers lecture pour enfants */}
                        <div
                          className="benev-cand-item"
                          onClick={() => {
                            const found = missionsData.find(m => m.id === 3);
                            if (found) setSelectedMissionDetail(found);
                          }}
                        >
                          <div className="benev-cand-main">
                            <img src={candLectureImg} alt="Ateliers lecture pour enfants" className="benev-cand-thumb" />
                            <div className="benev-cand-logo" style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#2563eb' }}>
                              <IconBook className="w-4 h-4 text-sky-600" />
                            </div>
                            <div className="benev-cand-info">
                              <h4 className="benev-cand-title">Ateliers lecture pour enfants</h4>
                              <p className="benev-cand-org">Lire pour Demain</p>
                            </div>
                          </div>

                          <div className="benev-cand-right">
                            <span className="benev-status-pill review">
                              <IconClock className="w-3.5 h-3.5" />
                              <span>En cours d'examen</span>
                            </span>
                            <IconChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>

                        {/* ROW 3: Collecte de sang */}
                        <div
                          className="benev-cand-item"
                          onClick={() => setVolunteerPortalTab('blood')}
                        >
                          <div className="benev-cand-main">
                            <img src={candSangImg} alt="Collecte de sang" className="benev-cand-thumb" />
                            <div className="benev-cand-logo" style={{ background: '#0284c7', color: '#ffffff' }}>
                              CHU
                            </div>
                            <div className="benev-cand-info">
                              <h4 className="benev-cand-title">Collecte de sang</h4>
                              <p className="benev-cand-org">CHU Mustapha</p>
                            </div>
                          </div>

                          <div className="benev-cand-right">
                            <span className="benev-status-pill sent">
                              <IconClock className="w-3.5 h-3.5" />
                              <span>Candidature envoyée</span>
                            </span>
                            <IconChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5. FOOTER DE BAS DE PAGE */}
                    <footer className="benev-portal-footer">
                      <div className="benev-footer-left">
                        <img src={atharLogoClean} alt="Athar" style={{ height: '26px', width: 'auto' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <strong style={{ fontSize: '13px', color: '#006D5B', lineHeight: 1.1 }}>Athar</strong>
                          <small style={{ fontSize: '10.5px', color: '#94a3b8' }}>Le bénévolat a un sens</small>
                        </div>
                      </div>

                      <div className="benev-footer-links">
                        <a href="#aide" onClick={(e) => { e.preventDefault(); showToast("Centre d'aide et FAQ en ligne"); }}>Aide</a>
                        <a href="#confidentialite" onClick={(e) => { e.preventDefault(); showToast("Politique de confidentialité Athar"); }}>Confidentialité</a>
                        <a href="#conditions" onClick={(e) => { e.preventDefault(); showToast("Conditions Générales d'Utilisation"); }}>Conditions</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); showToast("Support bénévole disponible 7j/7"); }}>Contact</a>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 600, color: '#475569' }}>
                          <span style={{ fontSize: '14px' }}>🌐</span>
                          <span>FR</span>
                          <IconChevronDown className="w-3 h-3 text-slate-400" />
                        </div>
                      </div>
                    </footer>
                  </div>
                )}

                {/* 8. PAGE 'MES OFFRES SAUVEGARDÉES' (offres sauvgardés.png) */}
                {(volunteerPortalTab === 'saved' || volunteerPortalTab === 'favorites') && (
                  <div style={{ maxWidth: '1240px', width: '100%', margin: '0 auto', padding: '0 4px' }}>
                    <SavedOffers
                      onSelectMission={(mission) => setSelectedMissionDetail(mission)}
                      onNavigateToMissions={() => setVolunteerPortalTab('missions')}
                      onToast={showToast}
                      volunteerFavorites={volunteerFavorites}
                      onToggleFavorite={toggleVolunteerFavorite}
                    />
                  </div>
                )}

                {/* 5. PAGE 'MES CERTIFICATS & BADGES' */}
                {volunteerPortalTab === 'associations' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '1020px', margin: '0 auto' }}>
                    <div className="cv-section-card" style={{ padding: '24px 28px' }}>
                      <h1 style={{ margin: '0 0 4px', fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>
                        Associations Partenaires Agréées
                      </h1>
                      <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                        Découvrez les ONG et collectifs citoyens officiellement enregistrés et vérifiés en Algérie.
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                      {[
                        { name: "Association Green Future", category: "Environnement", wilaya: "Alger & Oran", missionsCount: 4, desc: "Régénération forestière et protection du littoral méditerranéen." },
                        { name: "Croissant Rouge Algérien", category: "Solidarité", wilaya: "National (69 wilayas)", missionsCount: 12, desc: "Aide humanitaire d'urgence, banques alimentaires et secourisme." },
                        { name: "Lire pour Demain", category: "Éducation", wilaya: "Alger & Béjaïa", missionsCount: 3, desc: "Accès au livre, bibliothèques nomades et soutien scolaire." },
                        { name: "Association El Chifa Santé", category: "Santé", wilaya: "Constantine", missionsCount: 2, desc: "Don du sang, dépistage préventif et soutien aux hôpitaux." },
                        { name: "Association Terre Verte", category: "Environnement", wilaya: "Tizi Ouzou", missionsCount: 5, desc: "Reboisement participatif et préservation de la biodiversité montagnarde." }
                      ].map((assoc, idx) => (
                        <div key={idx} className="cv-section-card" style={{ padding: '20px', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <div>
                            <span style={{ fontSize: '11.5px', background: '#f0fdf4', color: '#006D5B', border: '1px solid #bbf7d0', padding: '3px 10px', borderRadius: '999px', fontWeight: 700, display: 'inline-block', marginBottom: '8px' }}>
                              {assoc.category}
                            </span>
                            <h3 style={{ margin: '0 0 4px', fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                              {assoc.name}
                            </h3>
                            <small style={{ color: '#006D5B', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                              {assoc.wilaya} · {assoc.missionsCount} opportunités actives
                            </small>
                            <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
                              {assoc.desc}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={() => {
                              setVolunteerSearchQuery(assoc.name);
                              setVolunteerPortalTab('missions');
                            }}
                            style={{ width: '100%', marginTop: '16px', border: '1px solid #cbd5e1', fontWeight: 700, fontSize: '12.5px', padding: '8px' }}
                          >
                            Voir les opportunités de cette association
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. PAGE 'À PROPOS' */}
                {volunteerPortalTab === 'about' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '860px', margin: '0 auto' }}>
                    <div className="cv-section-card" style={{ padding: '32px' }}>
                      <h1 style={{ margin: '0 0 10px', fontSize: '26px', fontWeight: 900, color: '#006D5B' }}>
                        À propos d'Athar (منصة أثر)
                      </h1>
                      <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#334155' }}>
                        Athar est la première plateforme nationale dédiée à la valorisation et à la structuration du bénévolat en Algérie.
                        Notre mission est de connecter les énergies citoyennes, particulièrement la jeunesse, avec les associations agréées œuvrant pour des causes d'intérêt général à travers les 69 wilayas.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '24px 0' }}>
                        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '16px' }}>
                          <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', marginBottom: '4px' }}>Transparence</strong>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>Toutes les associations partenaires sont vérifiées et agréées.</span>
                        </div>
                        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '16px' }}>
                          <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', marginBottom: '4px' }}>Reconnaissance</strong>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>Chaque action donne droit à une attestation officielle avec hash unique.</span>
                        </div>
                        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '16px' }}>
                          <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', marginBottom: '4px' }}>Impact Citoyen</strong>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>Nos projets répondent à des priorités citoyennes et solidaires.</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-green"
                        onClick={() => setVolunteerPortalTab('missions')}
                        style={{ fontWeight: 800, padding: '10px 20px' }}
                      >
                        Rejoindre une mission
                      </button>
                    </div>
                  </div>
                )}

                {/* 9. PAGE 'PARAMÈTRES' */}
                {volunteerPortalTab === 'settings' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '720px', margin: '0 auto' }}>
                    <div className="cv-section-card" style={{ padding: '24px 28px' }}>
                      <h1 style={{ margin: '0 0 4px', fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>
                        Paramètres du compte
                      </h1>
                      <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                        Gérez vos identifiants d'accès et vos préférences d'alertes.
                      </p>
                    </div>

                    {/* SÉCURITÉ & MOT DE PASSE */}
                    <div className="cv-section-card" style={{ padding: '24px 28px' }}>
                      <h3 style={{ margin: '0 0 16px', fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                        Sécurité & Mot de passe
                      </h3>
                      <form onSubmit={handleUpdateVolunteerPassword} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Mot de passe actuel</label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            value={volunteerPasswordForm.current}
                            onChange={(e) => setVolunteerPasswordForm({ ...volunteerPasswordForm, current: e.target.value })}
                            required
                            style={{ width: '100%' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Nouveau mot de passe</label>
                          <input
                            type="password"
                            placeholder="Au moins 8 caractères"
                            value={volunteerPasswordForm.newPass}
                            onChange={(e) => setVolunteerPasswordForm({ ...volunteerPasswordForm, newPass: e.target.value })}
                            required
                            style={{ width: '100%' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Confirmer le nouveau mot de passe</label>
                          <input
                            type="password"
                            placeholder="Confirmer le mot de passe"
                            value={volunteerPasswordForm.confirmPass}
                            onChange={(e) => setVolunteerPasswordForm({ ...volunteerPasswordForm, confirmPass: e.target.value })}
                            required
                            style={{ width: '100%' }}
                          />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                          <button type="submit" className="btn btn-green" style={{ padding: '10px 22px', fontWeight: 800 }}>
                            Mettre à jour mon mot de passe
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* ALERTES & NOTIFICATIONS */}
                    <div className="cv-section-card" style={{ padding: '24px 28px' }}>
                      <h3 style={{ margin: '0 0 14px', fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                        Préférences des alertes & emails
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#334155', cursor: 'pointer' }}>
                          <input type="checkbox" defaultChecked />
                          <span>Recevoir un email quand une nouvelle opportunité d'engagement est publiée à Alger</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#334155', cursor: 'pointer' }}>
                          <input type="checkbox" defaultChecked />
                          <span>Recevoir un rappel SMS 24h avant le rassemblement d'une mission</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#334155', cursor: 'pointer' }}>
                          <input type="checkbox" defaultChecked />
                          <span>Recevoir la newsletter mensuelle des récits d'impact Athar</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* 10. PAGE 'EXPLORER — MAGAZINE THÉMATIQUE' */}
                {volunteerPortalTab === 'explore' && (
                  <div style={{ maxWidth: '1240px', width: '100%', margin: '0 auto', padding: '0 4px' }}>
                    <ExploreThematicMagazine
                      currentLang={currentLang}
                      searchQuery={volunteerSearchQuery}
                      onSelectTheme={(themeKey) => {
                        setVolunteerFilterTheme(themeKey);
                        setVolunteerPortalTab('missions');
                      }}
                      onActionPledge={() => setVolunteerPortalTab('blood')}
                    />
                  </div>
                )}

                {/* 1. PAGE ACCUEIL / FEED DES ASSOCIATIONS (feed benev .png) */}
                {(volunteerPortalTab === 'feed' || volunteerPortalTab === 'home') && (
                  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <LiveCommunityFeed
                      currentLang={currentLang}
                      volunteerUser={volunteerUser}
                      onToast={showToast}
                    />
                  </div>
                )}

                {/* PAGE 'CARTE INTERACTIVE DES ACTIONS BÉNÉVOLES' */}
                {volunteerPortalTab === 'map' && (
                  <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
                    <InteractiveActionMap
                      currentLang={currentLang}
                      volunteerUser={volunteerUser}
                      onToast={showToast}
                      onSelectMission={(action) => setSelectedMissionDetail(action)}
                    />
                  </div>
                )}

                {/* 12. PAGE 'SOS BLOOD — URGENCES HOSPITALIÈRES' (sang benev.png) */}
                {volunteerPortalTab === 'blood' && (
                  <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
                    <BloodDonationCenter
                      currentLang={currentLang}
                      onOpenLogin={() => {}}
                      isVolunteer={true}
                      volunteerUser={volunteerUser}
                      onToast={showToast}
                    />
                  </div>
                )}

                {/* 13. PAGE 'MESSAGERIE CITOYENNE' */}
                {volunteerPortalTab === 'messages' && (
                  <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
                    <div className="cv-section-card" style={{ padding: '20px 26px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <h1 style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)' }}>
                            {currentLang === 'ar' ? 'المحادثات المباشرة مع منسقي المبادرات' : 'Messagerie Directe avec les Coordinateurs'}
                          </h1>
                          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>
                            {currentLang === 'ar'
                              ? 'تواصل مباشرة مع الجمعيات والمستشفيات لتأكيد تفاصيل مشاركتك والتوقيت.'
                              : 'Échangez avec les responsables de missions, posez vos questions et confirmez vos présences.'}
                          </p>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', background: '#ECFDF5', color: '#006D5B', border: '1px solid #A7F3D0' }}>
                          Canal Sécurisé
                        </span>
                      </div>
                    </div>
                    <DirectMessenger
                      volunteerUser={volunteerUser}
                      currentLang={currentLang}
                      onToast={showToast}
                    />
                  </div>
                )}

                {/* 14. PAGE 'TRAÇABILITÉ & PREUVES D'IMPACT' */}
                {volunteerPortalTab === 'traceability' && (
                  <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
                    <div className="cv-section-card" style={{ padding: '20px 26px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <h1 style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: 900, color: 'var(--primary-navy)' }}>
                            {currentLang === 'ar' ? 'سجل توثيق الأثر والشفافية الميدانية' : 'Registre Public de Traçabilité & Preuves'}
                          </h1>
                          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>
                            {currentLang === 'ar'
                              ? 'تتبع عمليات التوزيع والمساعدات المحققة في الميدان برقم تحقق فريد وتوثيق مصور.'
                              : 'Consultez les preuves vérifiées et les registres infalsifiables de chaque action bénévole.'}
                          </p>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', background: '#EFF6FF', color: '#1E3A8A', border: '1px solid #BFDBFE' }}>
                          Preuves Vérifiées
                        </span>
                      </div>
                    </div>
                    <TraceabilityLedger
                      currentLang={currentLang}
                      isAssociation={false}
                      onToast={showToast}
                    />
                  </div>
                )}

                {/* 15. PAGE 'CORPS SOLIDAIRE NATIONAL & ATHARPASS' */}
                {volunteerPortalTab === 'corps' && (
                  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <YouthSolidarityCorps
                      currentLang={currentLang}
                      volunteerUser={volunteerUser}
                      onOpenLogin={() => {}}
                      onToast={showToast}
                    />
                  </div>
                )}
              </div>
            )}
          </main>
        </div>

          {/* MODAL : APERÇU OFFICIEL DE L'ATTESTATION CITOYENNE */}
          {selectedCertificateDetail && (
            <div className="modal on" role="dialog" aria-modal="true" aria-label="Attestation de bénévolat">
              <div className="modal-bg" onClick={() => setSelectedCertificateDetail(null)}></div>
              <div className="modal-card" style={{ maxWidth: '640px', padding: '32px', background: '#ffffff', borderRadius: '18px' }}>
                <button className="modal-x" onClick={() => setSelectedCertificateDetail(null)} aria-label="Fermer">
                  <IconX className="w-4 h-4" />
                </button>

                {/* ENTÊTE DE L'ATTESTATION */}
                <div style={{ textAlign: 'center', borderBottom: '2px solid #006D5B', paddingBottom: '16px', marginBottom: '22px' }}>
                  <img src={logoImg} alt="Athar" style={{ height: '60px', margin: '0 auto 8px', display: 'block' }} />
                  <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#64748b', textTransform: 'uppercase' }}>
                    RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#006D5B', margin: '4px 0 2px' }}>
                    ATTESTATION OFFICIELLE D'ENGAGEMENT CITOYEN
                  </h2>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Plateforme Nationale du Bénévolat · منصة أثر
                  </div>
                </div>

                {/* CORPS DE L'ATTESTATION */}
                <div style={{ textAlign: 'center', padding: '0 12px 20px' }}>
                  <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 12px' }}>
                    La présente attestation certifie que :
                  </p>
                  <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a', margin: '0 0 14px' }}>
                    {volunteerUser.name}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155', margin: '0 0 18px' }}>
                    a accompli avec dévouement et exemplarité une mission d'intérêt général au sein de l'organisation :<br />
                    <strong style={{ color: '#006D5B', fontSize: '16px' }}>{selectedCertificateDetail.associationName}</strong>
                  </p>

                  <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px 18px', textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px' }}>
                    <div><strong>Action :</strong> {selectedCertificateDetail.title}</div>
                    <div><strong>Volume horaire :</strong> {selectedCertificateDetail.hours} heures certifiées</div>
                    <div><strong>Wilaya :</strong> {selectedCertificateDetail.wilaya}</div>
                    <div><strong>Date de délivrance :</strong> {selectedCertificateDetail.date}</div>
                  </div>

                  <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#94a3b8' }}>
                    <div>Hash vérification : <code>{selectedCertificateDetail.hash || 'ATHAR-VERIF-8902-DZ'}</code></div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#166534', fontWeight: 700 }}>
                      <IconShieldCheck className="w-3.5 h-3.5" />
                      <span>Sceau numérique Athar vérifié</span>
                    </div>
                  </div>
                </div>

                {/* ACTIONS DU CERTIFICAT */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSelectedCertificateDetail(null)}
                  >
                    Fermer
                  </button>
                  <button
                    type="button"
                    className="btn btn-green"
                    onClick={() => {
                      if (typeof window !== 'undefined') window.print();
                    }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <IconPrinter className="w-4 h-4" />
                    <span>Imprimer l'attestation</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {/* MODAL : CONFIRMATION DE CANDIDATURE BÉNÉVOLE */}
      {applyingMission && (
        <div className="modal on" role="dialog" aria-modal="true" aria-label="Confirmer la candidature">
          <div className="modal-bg" onClick={() => setApplyingMission(null)}></div>
          <div className="modal-card" style={{ maxWidth: '480px' }}>
            <button className="modal-x" onClick={() => setApplyingMission(null)} aria-label="Fermer">
              <IconX className="w-4 h-4" />
            </button>

            <div className="modal-head sm">
              <div className="mtag asso">{applyingMission.category || 'Solidarité'}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '4px 0 0' }}>
                Postuler à cette mission
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>
                {applyingMission.title}
              </p>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px 14px', marginBottom: '14px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
              <div><strong>Association :</strong> {applyingMission.association_name || "Association El Baraka"}</div>
              <div style={{ marginTop: '3px' }}><strong>Lieu & Date :</strong> {applyingMission.location || applyingMission.wilaya} · {applyingMission.date}</div>
            </div>

            <form
              className="mform"
              onSubmit={(e) => {
                e.preventDefault();
                handleApplyAsVolunteer(applyingMission);
              }}
            >
              <label>Message ou motivation (facultatif)</label>
              <textarea
                rows={3}
                placeholder="Indiquez brièvement vos motivations ou disponibilités pour cette mission..."
                value={volunteerApplyNote}
                onChange={(e) => setVolunteerApplyNote(e.target.value)}
              ></textarea>

              <div style={{ fontSize: '12px', color: 'var(--muted)', margin: '8px 0 16px', lineHeight: '1.4' }}>
                Vos coordonnées ({volunteerUser.email}, {volunteerUser.phone}) et compétences ({volunteerUser.skills.slice(0, 3).join(', ')}) seront transmises directement à l'association organisatrice.
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setApplyingMission(null)}
                >
                  Annuler
                </button>
                <button type="submit" className="btn btn-green">
                  Confirmer ma candidature
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL : TRAITEMENT DÉTAILLÉ DU DOSSIER CANDIDAT */}
      {selectedCandidateDetail && (
        <div className="modal on" role="dialog" aria-modal="true" aria-label="Dossier candidat">
          <div className="modal-bg" onClick={() => setSelectedCandidateDetail(null)}></div>
          <div className="modal-card" style={{ maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
            <button className="modal-x" onClick={() => setSelectedCandidateDetail(null)} aria-label="Fermer">
              <IconX className="w-4 h-4" />
            </button>

            <div className="modal-head sm" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div className="cand-avatar" style={{ width: '48px', height: '48px', fontSize: '16px' }}>
                  {selectedCandidateDetail.initials}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{selectedCandidateDetail.name}</h3>
                  <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: 'var(--muted)' }}>
                    Candidature déposée le {selectedCandidateDetail.appliedDate} · Wilaya : {selectedCandidateDetail.wilaya}
                  </p>
                </div>
              </div>
            </div>

            {/* MISSION VISÉE ET STATUT DE CAPACITÉ */}
            {(() => {
              const targetM = associationMissions.find(m => m.id === selectedCandidateDetail.missionId);
              const isFull = targetM && targetM.spots_registered >= targetM.spots_total;
              return (
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Mission sollicitée
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--bleu)', marginTop: '2px' }}>
                    {selectedCandidateDetail.missionTitle}
                  </div>
                  {targetM && (
                    <div style={{ marginTop: '6px', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: isFull ? '#dc2626' : 'var(--vert)', fontWeight: 700 }}>
                        {targetM.spots_registered} / {targetM.spots_total} places occupées
                      </span>
                      {isFull && selectedCandidateDetail.status !== 'accepted' && (
                        <span style={{ background: '#fee2e2', color: '#991b1b', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <IconLock className="w-3 h-3" /> Capacité maximale atteinte
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* COORDONNÉES DE CONTACT */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', fontWeight: 700 }}>Email</span>
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>{selectedCandidateDetail.email}</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', fontWeight: 700 }}>Téléphone</span>
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>{selectedCandidateDetail.phone}</span>
              </div>
            </div>

            {/* COMPÉTENCES & LANGUES */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', fontWeight: 700, marginBottom: '6px' }}>
                Compétences déclarées
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedCandidateDetail.skills && selectedCandidateDetail.skills.map((sk, idx) => (
                  <span key={idx} style={{ background: '#f1f5f9', color: 'var(--vert)', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px' }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* LETTRE DE MOTIVATION */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', fontWeight: 700, marginBottom: '6px' }}>
                Message de motivation du bénévole
              </span>
              <div style={{
                background: '#fafbf7',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid var(--vert)',
                borderRadius: '8px',
                padding: '14px 16px',
                fontSize: '13.5px',
                lineHeight: '1.6',
                color: '#334155'
              }}>
                « {selectedCandidateDetail.motivation} »
              </div>
            </div>

            {/* BOUTONS D'ACTION */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: '1px solid #e2e8f0' }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSelectedCandidateDetail(null)}
              >
                Fermer
              </button>
              <button
                type="button"
                className="btn"
                style={{ background: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                onClick={() => handleRejectCandidate(selectedCandidateDetail)}
              >
                <IconX className="w-3.5 h-3.5" />
                <span>Refuser</span>
              </button>
              <button
                type="button"
                className="btn btn-green"
                onClick={() => handleAcceptCandidate(selectedCandidateDetail)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <IconCheck className="w-3.5 h-3.5" />
                <span>Accepter la candidature</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL : CONNEXION AVEC LOGO OFFICIEL */}
      <div className={`modal ${loginModalOpen ? 'on' : ''}`} id="loginModal" aria-hidden={!loginModalOpen}>
        <div className="modal-bg" onClick={closeLogin}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Se connecter">
          <button className="modal-x" onClick={closeLogin} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          </button>

          <div className="modal-head" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={logoImg}
              alt="Logo Athar"
              style={{ height: '70px', width: 'auto', objectFit: 'contain', margin: '0 auto 12px', display: 'block' }}
            />
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '25px', fontWeight: 700, color: 'var(--bleu)' }}>
              {t('modalLoginTitle')}
            </h3>
          </div>

          {/* Profil switcher : Bénévole ou Association */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
            <button
              type="button"
              className={`btn ${loginProfile === 'volunteer' ? 'btn-green' : 'btn-ghost'}`}
              style={{ flex: 1, padding: '10px 14px', fontSize: '13.5px', fontWeight: 700 }}
              onClick={() => setLoginProfile('volunteer')}
            >
              {t('tabVolunteer')}
            </button>
            <button
              type="button"
              className={`btn ${loginProfile === 'association' ? 'btn-green' : 'btn-ghost'}`}
              style={{ flex: 1, padding: '10px 14px', fontSize: '13.5px', fontWeight: 700 }}
              onClick={() => setLoginProfile('association')}
            >
              {t('tabAssoc')}
            </button>
          </div>

          <form
            className="mform"
            onSubmit={(e) => {
              e.preventDefault();
              closeLogin();
              if (loginProfile === 'volunteer') {
                setCurrentView('volunteer');
                setVolunteerPortalTab('feed');
                setSelectedMissionDetail(null);
                window.location.hash = '#volunteer';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast(currentLang === 'ar' ? `مرحباً بك مجدداً ${volunteerUser.name}!` : `Bienvenue dans votre Espace Bénévole, ${volunteerUser.name} !`);
              } else {
                setCurrentView('association');
                window.location.hash = '#association';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast(currentLang === 'ar' ? "مرحباً بكم في فضاء جمعية البركة!" : "Bienvenue dans votre Espace Association El Baraka !");
              }
            }}
          >
            <label>{t('labelEmail')}</label>
            <input
              key={loginProfile}
              type="email"
              placeholder={loginProfile === 'association' ? "contact@elbaraka-dz.org" : "nadia.mansouri@gmail.com"}
              defaultValue={loginProfile === 'association' ? "contact@elbaraka-dz.org" : "nadia.mansouri@gmail.com"}
              required
            />
            <label>{t('labelPassword')}</label>
            <input
              type="password"
              placeholder="••••••••"
              defaultValue="password123"
              required
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '-8px 0 14px' }}>
              <a
                style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--vert)', cursor: 'pointer' }}
                onClick={() => showToast(currentLang === 'ar' ? "سيتم إرسال رابط التعيين إلى بريدك الإلكتروني." : "Un lien de réinitialisation vous sera envoyé par email.")}
              >
                {currentLang === 'ar' ? "نسيت كلمة المرور؟" : currentLang === 'en' ? "Forgot password?" : "Mot de passe oublié ?"}
              </a>
            </div>
            <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%' }}>
              {t('btnConnect')}
            </button>
          </form>

          <div className="modal-foot">
            {t('noAccount')} <a onClick={() => openSignup('choice')}>{t('signupFree')}</a>
          </div>
        </div>
      </div>

      {/* MODAL : PUBLIER UNE MISSION */}
      <div className={`modal ${publishModalOpen ? 'on' : ''}`} aria-hidden={!publishModalOpen}>
        <div className="modal-bg" onClick={closePublish}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Publier une mission">
          <button className="modal-x" onClick={closePublish} aria-label="Fermer">✕</button>

          <div className="modal-head sm">
            <div className="mtag asso">Association El Baraka</div>
            <h3>Publier une nouvelle mission</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', marginTop: '4px' }}>
              Décrivez votre besoin pour mobiliser des bénévoles engagés.
            </p>
          </div>

          <form className="mform" onSubmit={handleCreateMission}>
            <label>Titre de la mission</label>
            <input
              type="text"
              required
              placeholder="Ex. Nettoyage de la plage des Aiguades"
              value={newMissionForm.title}
              onChange={(e) => setNewMissionForm({ ...newMissionForm, title: e.target.value })}
            />

            <div className="frow">
              <div>
                <label>Domaine / Cause</label>
                <select
                  value={newMissionForm.category}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, category: e.target.value })}
                >
                  <option value="Solidarité">Solidarité</option>
                  <option value="Éducation">Éducation</option>
                  <option value="Environnement">Environnement</option>
                  <option value="Santé">Santé</option>
                  <option value="Urgence">Aide d'urgence</option>
                </select>
              </div>
              <div>
                <label>Nombre de places</label>
                <input
                  type="number"
                  min="1"
                  required
                  value={newMissionForm.spots}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, spots: e.target.value })}
                />
              </div>
            </div>

            <div className="frow">
              <div>
                <label>Wilaya</label>
                <select
                  value={newMissionForm.location}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, location: e.target.value })}
                >
                  <option value="Alger">Alger</option>
                  <option value="Béjaïa">Béjaïa</option>
                  <option value="Oran">Oran</option>
                  <option value="Constantine">Constantine</option>
                  <option value="Sétif">Sétif</option>
                  <option value="Tizi Ouzou">Tizi Ouzou</option>
                </select>
              </div>
              <div>
                <label>Date prévue</label>
                <input
                  type="text"
                  placeholder="Ex. 15 mai 2025"
                  value={newMissionForm.date}
                  onChange={(e) => setNewMissionForm({ ...newMissionForm, date: e.target.value })}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '12px' }}>
              ✓ Publier la mission immédiatement
            </button>
          </form>
        </div>
      </div>

      {/* MODAL : CHOIX DU TYPE DE COMPTE & FORMULAIRES */}
      <div className={`modal ${signupModalOpen ? 'on' : ''}`} aria-hidden={!signupModalOpen}>
        <div className="modal-bg" onClick={closeSignup}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Créer un compte">
          <button className="modal-x" onClick={closeSignup} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          </button>

          {/* ÉTAPE 1 : CHOIX */}
          {signupView === 'choice' && (
            <div className="mview">
              <div className="modal-head">
                <h3>Créer un compte</h3>
                <p>Rejoignez Athar. Choisissez le type de compte qui vous correspond.</p>
              </div>
              <div className="choices">
                <div className="choice ben" onClick={() => setSignupView('ben')}>
                  <div className="choice-ic">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <circle cx="12" cy="8" r="3.4"/>
                      <path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5"/>
                    </svg>
                  </div>
                  <div className="choice-txt">
                    <h4>Bénévole</h4>
                    <p>Je veux donner de mon temps et rejoindre des missions près de chez moi.</p>
                  </div>
                </div>

                <div className="choice asso" onClick={() => setSignupView('asso')}>
                  <div className="choice-ic">
                    <IconBuilding className="w-7 h-7" />
                  </div>
                  <div className="choice-txt">
                    <h4>Association</h4>
                    <p>Je représente une association et je veux publier des missions et trouver des bénévoles.</p>
                  </div>
                </div>
              </div>
              <div className="modal-foot">
                Déjà un compte ? <a onClick={() => openLogin('volunteer')}>Se connecter</a>
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : FORMULAIRE BÉNÉVOLE */}
          {signupView === 'ben' && (
            <div className="mview">
              <button className="mback" onClick={() => setSignupView('choice')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6 5 12l6 6"/>
                </svg> Retour
              </button>
              <div className="modal-head sm">
                <div className="mtag ben">Bénévole</div>
                <h3>Créer mon compte bénévole</h3>
              </div>
              <form
                className="mform"
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast("Compte bénévole créé avec succès ! Bienvenue sur Athar.");
                  closeSignup();
                }}
              >
                <div className="fsec">Informations personnelles</div>
                <div className="frow">
                  <div>
                    <label>Prénom</label>
                    <input type="text" required placeholder="Ex. Amine" />
                  </div>
                  <div>
                    <label>Nom</label>
                    <input type="text" required placeholder="Ex. Bellouze" />
                  </div>
                </div>
                <div className="frow">
                  <div>
                    <label>Date de naissance</label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>Genre</label>
                    <select defaultValue="">
                      <option value="">Choisir…</option>
                      <option>Homme</option>
                      <option>Femme</option>
                      <option>Préfère ne pas dire</option>
                    </select>
                  </div>
                </div>
                <div className="frow">
                  <div>
                    <label>Email</label>
                    <input type="email" required placeholder="vous@exemple.com" />
                  </div>
                  <div>
                    <label>Téléphone</label>
                    <input type="tel" required placeholder="0X XX XX XX XX" />
                  </div>
                </div>

                <div className="fsec">Localisation</div>
                <div className="frow">
                  <div>
                    <label>Wilaya</label>
                    <select defaultValue="">
                      <option value="">Choisir…</option>
                      {WILAYAS_LIST.map((w) => (
                        <option key={w.code} value={w.name}>
                          {w.code} - {w.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Commune</label>
                    <input type="text" placeholder="Ex. Amizour" />
                  </div>
                </div>
                <label>Adresse <span className="opt">(facultatif)</span></label>
                <input type="text" placeholder="Quartier, rue…" />

                <div className="fsec">Compétences &amp; profil</div>
                <label>Compétences</label>
                <div className="chips">
                  {['Informatique','Enseignement','Santé / Secourisme','Communication','Logistique','Traduction','Design','Animation','Photographie'].map((c) => (
                    <label className="chip" key={c}>
                      <input type="checkbox" />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
                <label>Langues parlées</label>
                <div className="chips">
                  {['Arabe','Français','Anglais','Tamazight'].map((l) => (
                    <label className="chip" key={l}>
                      <input type="checkbox" />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
                <label>Centres d'intérêt</label>
                <div className="chips">
                  {['Solidarité','Éducation','Environnement','Santé'].map((c) => (
                    <label className="chip" key={c}>
                      <input type="checkbox" defaultChecked />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
                <label>Disponibilité</label>
                <select defaultValue="">
                  <option value="">Choisir…</option>
                  <option>En semaine</option>
                  <option>Week-end</option>
                  <option>Soirées</option>
                  <option>Flexible</option>
                </select>
                <label>Expérience en bénévolat <span className="opt">(facultatif)</span></label>
                <textarea placeholder="Missions déjà réalisées, associations…"></textarea>

                <div className="fsec">Sécurité</div>
                <label>Mot de passe</label>
                <input type="password" required placeholder="••••••••" />
                <label className="agree">
                  <input type="checkbox" required defaultChecked />
                  <span>J'accepte les conditions d'utilisation d'Athar.</span>
                </label>
                <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                  Créer mon compte
                </button>
              </form>
            </div>
          )}

          {/* ÉTAPE 2 : FORMULAIRE ASSOCIATION */}
          {signupView === 'asso' && (
            <div className="mview">
              <button className="mback" onClick={() => setSignupView('choice')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6 5 12l6 6"/>
                </svg> Retour
              </button>
              <div className="modal-head sm">
                <div className="mtag asso">Association</div>
                <h3>Créer le compte de l'association</h3>
              </div>
              <form
                className="mform"
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast("Demande d'enregistrement transmise ! Notre équipe validera votre agrément.");
                  closeSignup();
                }}
              >
                <div className="fsec">Document d'agrément</div>
                <div className="scanhint">
                  📄 Importez le scan de votre agrément : les informations (nom, n° d'agrément, wilaya) seront <b>extraites automatiquement</b> et remplies pour vous.
                </div>
                <label className={`filebox scan ${assoScan === 'done' ? 'has' : ''}`}>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleAgrementScan} />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M4 7V5a1 1 0 0 1 1-1h2M20 7V5a1 1 0 0 0-1-1h-2M4 17v2a1 1 0 0 0 1 1h2M20 17v2a1 1 0 0 1-1 1h-2M3 12h18"/>
                  </svg>
                  <span className="filetxt">
                    {assoScanName ? '📎 ' + assoScanName : <>Scanner l'agrément — <b>cliquez pour importer</b> (PDF ou photo)</>}
                  </span>
                </label>
                {assoScan === 'scanning' && (
                  <div className="scanres"><span className="spin"></span> Analyse du document en cours…</div>
                )}
                {assoScan === 'done' && (
                  <div className="scanres ok">✓ Informations extraites automatiquement — vérifiez puis complétez.</div>
                )}

                <div className="fsec">Informations de l'association</div>
                <label>Nom de l'association</label>
                <input type="text" required placeholder="Ex. Association El Baraka"
                  value={assoFields.nom} onChange={(e) => setAssoFields((f) => ({ ...f, nom: e.target.value }))} />
                <div className="frow">
                  <div>
                    <label>N° d'agrément</label>
                    <input type="text" required placeholder="Registre / RNA"
                      value={assoFields.num} onChange={(e) => setAssoFields((f) => ({ ...f, num: e.target.value }))} />
                  </div>
                  <div>
                    <label>Date de création</label>
                    <input type="date" />
                  </div>
                </div>
                <label>Nom du responsable / représentant légal</label>
                <input type="text" placeholder="Ex. Karim Meziane" />

                <div className="fsec">Localisation &amp; contact</div>
                <div className="frow">
                  <div>
                    <label>Wilaya</label>
                    <select value={assoFields.wilaya} onChange={(e) => setAssoFields((f) => ({ ...f, wilaya: e.target.value }))}>
                      <option value="">Choisir…</option>
                      {WILAYAS_LIST.map((w) => (
                        <option key={w.code} value={w.name}>
                          {w.code} - {w.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Commune</label>
                    <input type="text" placeholder="Ex. El Kseur" />
                  </div>
                </div>
                <label>Adresse du siège</label>
                <input type="text" placeholder="Rue, quartier…" />
                <div className="frow">
                  <div>
                    <label>Email officiel</label>
                    <input type="email" required placeholder="contact@association.dz" />
                  </div>
                  <div>
                    <label>Téléphone</label>
                    <input type="tel" required placeholder="0X XX XX XX XX" />
                  </div>
                </div>
                <label>Site web / page Facebook <span className="opt">(facultatif)</span></label>
                <input type="text" placeholder="https://facebook.com/..." />

                <div className="fsec">Activité</div>
                <label>Domaine d'action</label>
                <select defaultValue="">
                  <option value="">Choisir…</option>
                  <option value="Solidarité">Solidarité</option>
                  <option value="Éducation">Éducation</option>
                  <option value="Environnement">Environnement</option>
                  <option value="Santé">Santé</option>
                  <option value="Multi-domaines">Multi-domaines</option>
                </select>
                <label>Description de l'association</label>
                <textarea placeholder="Vos missions, vos actions, votre public…"></textarea>
                <label>Logo de l'association <span className="opt">(facultatif)</span></label>
                <label className={`filebox ${assoLogoName ? 'has' : ''}`}>
                  <input type="file" accept=".jpg,.jpeg,.png,.svg"
                    onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) setAssoLogoName(f.name); }} />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3"/>
                  </svg>
                  <span className="filetxt">{assoLogoName ? '🖼️ ' + assoLogoName : 'Importer le logo (image)'}</span>
                </label>

                <div className="fsec">Sécurité</div>
                <label>Mot de passe</label>
                <input type="password" required placeholder="••••••••" />
                <div className="verif">
                  <IconShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Votre compte sera vérifié manuellement avant validation, à partir du document d'agrément fourni.</span>
                </div>
                <label className="agree">
                  <input type="checkbox" required defaultChecked />
                  <span>J'accepte les conditions d'utilisation d'Athar.</span>
                </label>
                <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                  Créer le compte
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* MODAL : CANDIDATURE À UNE MISSION */}
      <div className={`modal ${applyModalOpen ? 'on' : ''}`} aria-hidden={!applyModalOpen}>
        <div className="modal-bg" onClick={closeApply}></div>
        <div className="modal-card" role="dialog" aria-modal="true" aria-label="Candidater à une mission">
          <button className="modal-x" onClick={closeApply} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          </button>

          <div className="modal-head sm">
            <div className="mtag ben">Candidature</div>
            <h3>Candidater à cette mission</h3>
            <p className="applymission">{selectedMission || '—'}</p>
          </div>

          <form
            className="mform"
            onSubmit={(e) => {
              e.preventDefault();
              showToast(`Candidature envoyée avec succès pour "${selectedMission}" !`);
              closeApply();
            }}
          >
            <div className="frow">
              <div>
                <label>Prénom</label>
                <input type="text" required placeholder="Ex. Amine" />
              </div>
              <div>
                <label>Nom</label>
                <input type="text" required placeholder="Ex. Bellouze" />
              </div>
            </div>

            <label>Email</label>
            <input type="email" required placeholder="vous@exemple.com" />

            <label>Téléphone</label>
            <input type="tel" required placeholder="0X XX XX XX XX" />

            <label>Disponibilité</label>
            <select defaultValue="Week-end">
              <option value="">Choisir…</option>
              <option value="En semaine">En semaine</option>
              <option value="Week-end">Week-end</option>
              <option value="Soirées">Soirées</option>
              <option value="Flexible">Flexible</option>
            </select>

            <label>Message de motivation</label>
            <textarea required placeholder="Pourquoi cette mission vous intéresse-t-elle ?"></textarea>

            <label>CV / pièce jointe <span className="opt">(optionnel)</span></label>
            <label className={`filebox ${appliedFileName ? 'has' : ''}`}>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setAppliedFileName(e.target.files[0].name);
                  }
                }}
              />
              <IconPaperclip className="w-5 h-5 text-[#006D5B] shrink-0" />
              <span className="filetxt">
                {appliedFileName ? (
                  <><b>{appliedFileName}</b></>
                ) : (
                  <>Glissez un fichier ou <b>cliquez pour choisir</b> (PDF, image…)</>
                )}
              </span>
            </label>

            <button type="submit" className="btn btn-green btn-lg" style={{ width: '100%', marginTop: '12px' }}>
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
