import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ArrowRight,
  ArrowLeft,
  Users,
  Building2,
  Heart,
  MapPin,
  Calendar,
  Clock,
  User,
  Leaf,
  Target,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Globe,
  X,
  Share2,
  ShieldCheck,
  ExternalLink,
  Phone,
  Mail,
  Send
} from 'lucide-react';

export default function App() {
  // Language state: 'fr' or 'ar'
  const [lang, setLang] = useState('fr');
  const isAr = lang === 'ar';

  // Search & Filter state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('Toutes');
  const [selectedWilayaFilter, setSelectedWilayaFilter] = useState('Toutes');

  // Modals state
  const [selectedMissionForApply, setSelectedMissionForApply] = useState(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Form states
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerPhone, setVolunteerPhone] = useState('');
  const [appliedMissions, setAppliedMissions] = useState([]);

  // Local data - 100% Frontend with 0 Backend required
  const initialStats = {
    volunteers_count: 12500,
    associations_count: 350,
    missions_count: 1200,
    wilayas_count: 58,
  };

  const [missionsList, setMissionsList] = useState([
    {
      id: 1,
      title: "Plantation d'arbres à Zéralda",
      association_name: "Association Green Future",
      category: "Environnement",
      location: "Zéralda, Alger",
      wilaya: "Alger",
      date_str: "Sam. 12 avr. 2025",
      time_str: "9h00 – 15h00",
      spots_remaining: 15,
      spots_total: 30,
      image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      description: "Participez à notre grande action de reboisement dans la forêt récréative de Zéralda. Matériel de jardinage et gants fournis sur place."
    },
    {
      id: 2,
      title: "Campagne de distribution de paniers alimentaires",
      association_name: "Croissant Rouge Algérien",
      category: "Solidarité",
      location: "Bab Ezzouar, Alger",
      wilaya: "Alger",
      date_str: "Sam. 19 avr. 2025",
      time_str: "9h00 – 16h00",
      spots_remaining: 20,
      spots_total: 40,
      image_url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      description: "Tri, conditionnement et acheminement de colis alimentaires solidaires destinés à 300 familles nécessiteuses recensées."
    },
    {
      id: 3,
      title: "Ateliers de lecture pour enfants",
      association_name: "Lire pour Demain",
      category: "Éducation",
      location: "Hydra, Alger",
      wilaya: "Alger",
      date_str: "Mer. 16 avr. 2025",
      time_str: "14h00 – 17h00",
      spots_remaining: 8,
      spots_total: 15,
      image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      description: "Animation de contes, jeux de rôles et éveil à la lecture pour un groupe d'enfants de 6 à 11 ans au centre culturel."
    },
    {
      id: 4,
      title: "Nettoyage et préservation des plages des Andalouses",
      association_name: "Association Green Future",
      category: "Environnement",
      location: "Les Andalouses, Oran",
      wilaya: "Oran",
      date_str: "Ven. 2 mai 2025",
      time_str: "8h30 – 14h00",
      spots_remaining: 25,
      spots_total: 50,
      image_url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      description: "Grande journée citoyenne de dépollution marine et sensibilisation au tri sélectif le long du littoral oranais."
    },
    {
      id: 5,
      title: "Caravane de don du sang et dépistage au CHU",
      association_name: "Association El Chifa Santé",
      category: "Santé",
      location: "CHU Benbadis, Constantine",
      wilaya: "Constantine",
      date_str: "Jeu. 8 mai 2025",
      time_str: "9h00 – 16h30",
      spots_remaining: 12,
      spots_total: 25,
      image_url: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
      description: "Organisation logistique et accueil des donneurs de sang volontaires au Centre de Transfusion Sanguine."
    },
    {
      id: 6,
      title: "Soutien scolaire et tutorat pour collégiens",
      association_name: "Association Amel Solidarité",
      category: "Éducation",
      location: "Belouizdad, Alger",
      wilaya: "Alger",
      date_str: "Sam. 26 avr. 2025",
      time_str: "10h00 – 13h00",
      spots_remaining: 6,
      spots_total: 12,
      image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      description: "Aide aux devoirs et révisions en mathématiques et langues pour des élèves motivés."
    }
  ]);

  const categories = [
    "Toutes",
    "Environnement",
    "Solidarité",
    "Éducation",
    "Santé",
    "Aide d'urgence"
  ];

  // Scroll-triggered counter animation
  const statsSectionRef = useRef(null);
  const [displayStats, setDisplayStats] = useState({
    volunteers: 0,
    associations: 0,
    missions: 0,
    wilayas: 0
  });

  useEffect(() => {
    const el = statsSectionRef.current;
    if (!el) return;

    let animFrameId = null;
    let isCurrentlyAnimating = false;

    const startAnimation = () => {
      isCurrentlyAnimating = true;
      const duration = 1800; // 1.8s
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic: 1 - (1 - t)^3
        const ease = 1 - Math.pow(1 - progress, 3);

        setDisplayStats({
          volunteers: Math.floor(initialStats.volunteers_count * ease),
          associations: Math.floor(initialStats.associations_count * ease),
          missions: Math.floor(initialStats.missions_count * ease),
          wilayas: Math.floor(initialStats.wilayas_count * ease)
        });

        if (progress < 1) {
          animFrameId = requestAnimationFrame(tick);
        } else {
          setDisplayStats({
            volunteers: initialStats.volunteers_count,
            associations: initialStats.associations_count,
            missions: initialStats.missions_count,
            wilayas: initialStats.wilayas_count
          });
          isCurrentlyAnimating = false;
        }
      };

      animFrameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animFrameId) cancelAnimationFrame(animFrameId);
            startAnimation();
          } else {
            if (animFrameId) cancelAnimationFrame(animFrameId);
            isCurrentlyAnimating = false;
            setDisplayStats({
              volunteers: 0,
              associations: 0,
              missions: 0,
              wilayas: 0
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleApplyMission = (e) => {
    e.preventDefault();
    if (!selectedMissionForApply) return;

    // Decrement spots
    setMissionsList(prev => prev.map(m => {
      if (m.id === selectedMissionForApply.id && m.spots_remaining > 0) {
        return { ...m, spots_remaining: m.spots_remaining - 1 };
      }
      return m;
    }));

    setAppliedMissions(prev => [...prev, selectedMissionForApply.id]);
    showToast(isAr ? `تهانينا ${volunteerName || ''} ! تم تسجيل مشاركتك بنجاح.` : `Félicitations ${volunteerName || ''} ! Votre inscription à la mission a été confirmée.`);
    setSelectedMissionForApply(null);
    setVolunteerName('');
    setVolunteerPhone('');
  };

  const filteredMissions = missionsList.filter(m => {
    const matchCategory = selectedCategoryFilter === 'Toutes' || m.category === selectedCategoryFilter;
    const matchWilaya = selectedWilayaFilter === 'Toutes' || m.wilaya?.toLowerCase().includes(selectedWilayaFilter.toLowerCase());
    const matchSearch = !searchQuery || m.title?.toLowerCase().includes(searchQuery.toLowerCase()) || m.location?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchWilaya && matchSearch;
  });

  return (
    <div className={`min-h-screen bg-[#fafaf9] text-slate-900 ${isAr ? 'font-arabic' : 'font-sans'}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#0d5b61] text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-bold animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo (From Capture d'écran 2026-09-11 210313.png) */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/assets/logo.png"
              alt="Athar Platform أثر"
              className="h-14 w-auto object-contain hover:scale-102 transition-transform"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a
              href="#accueil"
              className="relative text-[#0c363d] font-bold py-2 group"
            >
              {isAr ? 'الرئيسية' : 'Accueil'}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0f766e] rounded-full"></span>
            </a>
            <a
              href="#missions"
              className="text-slate-600 hover:text-[#0c363d] transition-colors py-2"
            >
              {isAr ? 'الفرص التطوعية' : 'Missions'}
            </a>
            <a
              href="#associations"
              className="text-slate-600 hover:text-[#0c363d] transition-colors py-2"
            >
              {isAr ? 'الجمعيات' : 'Associations'}
            </a>
            <a
              href="#valeurs"
              className="text-slate-600 hover:text-[#0c363d] transition-colors py-2"
            >
              {isAr ? 'عن المنصة' : 'À propos'}
            </a>
            <a
              href="#blog"
              onClick={(e) => { e.preventDefault(); showToast(isAr ? "قسم المدونة وقصص الأثر قيد التحديث !" : "Le Blog & Récits d'impact sera disponible très prochainement !"); }}
              className="text-slate-600 hover:text-[#0c363d] transition-colors py-2"
            >
              {isAr ? 'المدونة' : 'Blog'}
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3.5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all"
              title={isAr ? 'بحث' : 'Recherche'}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Login Link */}
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#0c363d] hover:bg-slate-50 rounded-xl transition-all"
            >
              {isAr ? 'تسجيل الدخول' : 'Se connecter'}
            </button>

            {/* Register CTA Button */}
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#0d5b61] hover:bg-[#094348] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-2"
            >
              <span>{isAr ? 'إنشاء حساب' : "S'inscrire"}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center text-xs font-bold border-l border-slate-200 pl-3.5 ml-1 text-slate-500">
              <button
                onClick={() => setLang('fr')}
                className={`px-1.5 py-1 rounded transition-colors ${!isAr ? 'text-[#0c363d] font-extrabold' : 'text-slate-400 hover:text-slate-700'}`}
              >
                FR
              </button>
              <span className="text-slate-300 mx-0.5">|</span>
              <button
                onClick={() => setLang('ar')}
                className={`px-1.5 py-1 rounded transition-colors ${isAr ? 'text-[#0c363d] font-extrabold' : 'text-slate-400 hover:text-slate-700'}`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Exact replica of WhatsApp Image 2026-09-08 at 23.39.46.jpeg) */}
      <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/50 to-white pt-6 md:pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* HERO LEFT COLUMN */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#0d5b61] bg-[#0d5b61]/8 px-3 py-1 rounded-full border border-[#0d5b61]/15">
                  {isAr ? 'العمل التطوعي في خدمة جزائر متضامنة' : "LE BÉNÉVOLAT AU SERVICE D'UNE ALGÉRIE SOLIDAIRE"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-display font-extrabold text-[#0c363d] text-4xl sm:text-5xl lg:text-[54px] leading-[1.14] tracking-tight">
                {isAr ? (
                  <>
                    <span>أعطِ من وقتك.</span>
                    <br />
                    <span className="text-[#0d5b61]">اصنع أثراً.</span>
                  </>
                ) : (
                  <>
                    <span>Donnez de votre temps.</span>
                    <br />
                    <span>Créez de l'impact.</span>
                  </>
                )}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl">
                {isAr
                  ? 'أثر هي المنصة الوطنية التي تربط المتطوعين والجمعيات في الجزائر، لنصنع معاً أثراً مستداماً. انضم إلى مجتمع ملتزم وشارك في مبادرات قريبة منك.'
                  : "Athar est la plateforme qui connecte les bénévoles et les associations en Algérie, pour faire grandir l'impact ensemble. Rejoignez une communauté engagée et participez à des missions qui ont du sens, près de chez vous."
                }
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-[#0d5b61] hover:bg-[#094348] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2.5"
                >
                  <span>{isAr ? 'إنشاء حساب' : 'Créer un compte'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>

                <a
                  href="#missions"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0c363d] font-bold text-sm border border-slate-300 shadow-2xs hover:shadow-xs transition-all"
                >
                  {isAr ? 'اكتشف الفرص التطوعية' : 'Découvrir les missions'}
                </a>
              </div>

              {/* Floating Community Card ("Rejoignez la communauté Athar" / "Vous êtes...") */}
              <div className="pt-4">
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100 relative">
                  <div className="mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      {isAr ? 'انضم إلى مجتمع أثر' : 'Rejoignez la communauté Athar'}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {isAr ? 'أنت...' : 'Vous êtes...'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Role 1: Bénévole */}
                    <div
                      onClick={() => setIsRegisterModalOpen(true)}
                      className="group bg-[#f8fafc] hover:bg-emerald-50/50 p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-full bg-[#0f766e] text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                          <User className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0f766e] transition-colors">
                          {isAr ? 'متطوع / متطوعة' : 'Un·e bénévole'}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {isAr
                            ? 'اعثر على مهام تناسب مهاراتك وشارك في تجارب إنسانية فريدة.'
                            : 'Trouvez des missions qui vous correspondent, partagez vos compétences et vivez des expériences humaines uniques.'
                          }
                        </p>
                      </div>
                      <div className="mt-4 pt-2">
                        <span className="w-7 h-7 rounded-full bg-slate-200/90 group-hover:bg-[#0f766e] group-hover:text-white flex items-center justify-center text-slate-700 transition-all">
                          {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>

                    {/* Role 2: Association */}
                    <div
                      onClick={() => showToast(isAr ? "فضاء الجمعيات سيكون متاحاً قريباً. شكراً لاهتمامكم بمنصة أثر !" : "L'espace association ouvrira très prochainement. Restez connectés !")}
                      className="group bg-[#f8fafc] hover:bg-orange-50/50 p-4 rounded-2xl border border-slate-100 hover:border-orange-200 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-full bg-[#e05d49] text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                          <Users className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#e05d49] transition-colors">
                          {isAr ? 'جمعية أو منظمة' : 'Une association'}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {isAr
                            ? 'انشر مهامك التطوعية، والتقِ بمتطوعين شغوفين لدعم أهدافك.'
                            : "Publiez vos missions, rencontrez des bénévoles motivés et accélérez l'impact de vos actions."
                          }
                        </p>
                      </div>
                      <div className="mt-4 pt-2">
                        <span className="w-7 h-7 rounded-full bg-slate-200/90 group-hover:bg-[#e05d49] group-hover:text-white flex items-center justify-center text-slate-700 transition-all">
                          {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO RIGHT COLUMN (Algerian Volunteer overlooking Algiers with Maqam Echahid & Calligraphy) */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                  <img
                    src="/assets/hero-algeria-clean.jpg"
                    alt="Bénévole Athar devant Alger et le Monument des Martyrs"
                    className="w-full h-full object-cover object-center transform hover:scale-101 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-xs">
                    <span className="font-arabic font-bold text-[#0c363d] text-xs">
                      كل عمل صغير يصنع أثراً كبيراً ✨
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 max-w-xs text-right">
                    <p className="font-handwriting text-white text-xl sm:text-2xl drop-shadow-md tracking-wide">
                      Ensemble, laissons une empreinte positive en Algérie
                    </p>
                    <div className="w-24 h-1 bg-[#d4af37] rounded-full ml-auto mt-1"></div>
                  </div>
                </div>

                <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/zellige-tile.jpg"
                      alt="Zellige Algérien"
                      className="w-10 h-10 rounded-lg object-cover border border-amber-200 shadow-2xs"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0c363d]">
                        {isAr ? 'فخر الانتماء والعطاء' : 'Fierté & Engagement'}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {isAr ? 'في جميع ربوع الجزائر 🇩🇿' : 'À travers les 58 wilayas 🇩🇿'}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const el = document.getElementById('missions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#0d5b61] hover:text-[#094348] flex items-center gap-1.5 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100 transition-colors"
                  >
                    <span>{isAr ? 'اكتشف الميدان' : 'Missions actives'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATISTICS BAR (Statistiques clés avec incrémentation au scroll) */}
      <section ref={statsSectionRef} className="bg-white border-y border-slate-200/80 py-8 relative shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
            
            {/* Stat 1: Bénévoles */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0d5b61] flex items-center justify-center shrink-0 border border-teal-100">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0c363d] tracking-tight">
                  {formatNumber(displayStats.volunteers)}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {isAr ? 'متطوع مسجل' : 'bénévoles inscrits'}
                </div>
              </div>
            </div>

            {/* Stat 2: Associations */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0d5b61] flex items-center justify-center shrink-0 border border-teal-100">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0c363d] tracking-tight">
                  {displayStats.associations}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {isAr ? 'جمعية شريكة' : 'associations partenaires'}
                </div>
              </div>
            </div>

            {/* Stat 3: Missions */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0d5b61] flex items-center justify-center shrink-0 border border-teal-100">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0c363d] tracking-tight">
                  {formatNumber(displayStats.missions)}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {isAr ? 'مهمة منجزة ومنشورة' : 'missions publiées'}
                </div>
              </div>
            </div>

            {/* Stat 4: Wilayas */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0d5b61] flex items-center justify-center shrink-0 border border-teal-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0c363d] tracking-tight">
                  {displayStats.wilayas}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {isAr ? 'ولاية مغطاة' : 'wilayas couvertes'}
                </div>
              </div>
            </div>

            {/* Stat 5: Quote Box */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6">
              <div className="flex items-start gap-2.5">
                <span className="text-[#0d5b61] text-3xl font-serif leading-none shrink-0">“</span>
                <div>
                  <p className="text-xs sm:text-xs font-medium text-slate-700 leading-snug italic">
                    {isAr
                      ? '« الجزائر الأقوى تُبنى بمواطنين ملتزمين ومتضامنين. »'
                      : '« Une Algérie plus forte se construit avec des citoyens engagés. »'
                    }
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="w-4 h-0.5 bg-[#d4af37]"></span>
                    <span className="text-[11px] font-bold text-slate-500">
                      {isAr ? 'فريق أثر' : 'Équipe Athar'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECOND SECTION - VALUE PROPOSITION & VALUES */}
      <section id="valeurs" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading + Algerian Bay Landscape Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-[#0d5b61]">
                  {isAr ? 'من أجل جزائر أكثر تضامناً' : 'POUR UNE ALGÉRIE PLUS SOLIDAIRE'}
                </span>
                <h2 className="font-serif-display font-extrabold text-[#0c363d] text-3xl sm:text-4xl lg:text-[40px] leading-tight mt-2">
                  {isAr ? (
                    <>
                      <span>روابط إنسانية.</span>
                      <br />
                      <span>مجتمعات أكثر قوة.</span>
                      <br />
                      <span className="text-[#0f766e]">أثر مستدام.</span>
                    </>
                  ) : (
                    <>
                      <span>Des connexions humaines.</span>
                      <br />
                      <span>Des communautés plus fortes.</span>
                      <br />
                      <span className="text-[#0f766e]">Un impact durable.</span>
                    </>
                  )}
                </h2>
              </div>

              {/* Scenic card with Algerian handwritten note */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-md group">
                <img
                  src="/assets/sidebar-crop.png"
                  alt="Notre Algérie solidaire"
                  className="w-full h-52 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-handwriting text-white text-2xl drop-shadow-md">
                    {isAr ? 'جزائرنا، بكل بساطة أكثر تضامناً' : 'Notre Algérie, tout simplement plus solidaire'}
                  </p>
                  <div className="w-20 h-0.5 bg-[#d4af37] mt-1 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Value Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Card 1 */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200/70 hover:border-teal-200 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-[#0f766e] flex items-center justify-center mb-5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {isAr ? 'لقاءات ذات معنى' : 'Des rencontres qui ont du sens'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isAr
                      ? 'منصة تقرب بين المواطنين حول قيم العطاء والعمل المشترك.'
                      : 'Une plateforme qui rapproche des femmes et des hommes autour de valeurs communes.'
                    }
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200/70 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {isAr ? 'مجتمعات أكثر ترابطاً' : 'Des communautés plus fortes'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isAr
                      ? 'معاً، ندعم المبادرات المحلية والميدانية في كل الولايات.'
                      : 'Ensemble, nous soutenons des initiatives locales dans toutes les wilayas.'
                    }
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200/70 hover:border-amber-200 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {isAr ? 'أثر إيجابي في الجزائر' : 'Un impact positif en Algérie'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isAr
                      ? 'كل مهمة تطوعية تسهم في بناء مجتمع متكافل ومستدام.'
                      : 'Chaque mission contribue à une société plus solidaire, inclusive et durable.'
                    }
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Slogan Banner Divider */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-center gap-4 text-center">
            <span className="hidden sm:inline-block w-16 h-0.5 bg-[#d4af37]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8972e]">
              {isAr ? 'مواطنون ملتزمون. جزائر أكثر تضامناً.' : 'DES GENS ENGAGÉS. UNE ALGÉRIE PLUS SOLIDAIRE.'}
            </span>
            <span className="hidden sm:inline-block w-16 h-0.5 bg-[#d4af37]"></span>
          </div>

        </div>
      </section>

      {/* 5. PANORAMIC SHOWCASE BANNER (Using Gemini_Generated_Image_3yv3t53yv3t53yv3.jpg) */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="relative h-64 sm:h-80 w-full">
          <img
            src="/assets/algeria-panoramic.jpg"
            alt="Chaque action laisse une empreinte - Baie d'Alger"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase">
                {isAr ? 'الجزائر تجمعنا' : 'Initiative Citoyenne Nationale'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {isAr ? 'كل عمل يترك بصمة في الجزائر.' : 'Chaque action laisse une empreinte.'}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {isAr
                  ? 'سواء كنت متطوعاً يبحث عن العطاء أو جمعية تبحث عن الدعم، منصة أثر تفتح لك الأبواب للمساهمة الفعلية.'
                  : 'Que vous soyez un citoyen désireux de donner quelques heures ou une association en quête de forces vives, Athar vous accompagne.'
                }
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-white text-[#0c363d] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>{isAr ? 'انضم الآن مجاناً' : 'Rejoindre la communauté'}</span>
                  {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MISSIONS EXPLORER SECTION */}
      <section id="missions" className="py-16 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0d5b61]">
                {isAr ? 'مهام ميدانية حقيقية' : 'SUR LE TERRAIN'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c363d] tracking-tight mt-1">
                {isAr ? 'فرص تطوعية مميزة في انتظارك' : 'Missions engagées près de chez vous'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {isAr ? 'اختر المهمة التي تناسبك وانضم إلى فرق المتطوعين في ولايتك' : 'Explorez des missions vérifiées dans différentes wilayas et thématiques.'}
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategoryFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategoryFilter === cat
                      ? 'bg-[#0d5b61] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Missions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMissions.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={m.image_url}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#0c363d] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-2xs border border-white/80">
                      {m.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{m.association_name}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#0d5b61] transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {m.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{m.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{m.date_str}</span>
                      </div>
                      <div className="flex items-center gap-2 font-medium text-slate-700">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{m.spots_remaining} places disponibles</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedMissionForApply(m)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0d5b61] hover:bg-[#094348] text-white text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2"
                  >
                    <span>{isAr ? 'أريد المشاركة' : 'Je participe à cette mission'}</span>
                    {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ASSOCIATIONS PARTENAIRES SHOWCASE */}
      <section id="associations" className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d5b61]">
              {isAr ? 'النسيج الجمعوي الجزائري' : 'COLLABORATION & CONFIANCE'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c363d] tracking-tight mt-1">
              {isAr ? 'جمعيات معتمدة تنشط في الميدان' : 'Plus de 350 associations partenaires'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {isAr
                ? 'نعمل جنباً إلى جنب مع المنظمات الخيرية والتنموية الرائدة في الجزائر.'
                : 'Des organisations solidaires de confiance, vérifiées et actives au plus près des besoins locaux.'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Croissant Rouge Algérien", wilaya: "National", tag: "Humanitaire" },
              { name: "Association Green Future", wilaya: "Alger & Oran", tag: "Environnement" },
              { name: "Lire pour Demain", wilaya: "Alger", tag: "Éducation" },
              { name: "Association El Chifa", wilaya: "Constantine", tag: "Santé" }
            ].map((asso, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-200/80 text-center hover:border-teal-200 hover:shadow-xs transition-all">
                <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 text-[#0d5b61] flex items-center justify-center font-bold text-lg mb-3">
                  {asso.name.charAt(0)}
                </div>
                <h3 className="font-bold text-sm text-slate-900">{asso.name}</h3>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-200/60 text-slate-600 text-[10px] font-semibold mt-2">
                  {asso.tag} • {asso.wilaya}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => showToast(isAr ? "فضاء انضمام الجمعيات سيكون متاحاً قريباً. شكراً لاهتمامكم بمنصة أثر !" : "L'espace d'inscription des associations ouvrira très prochainement. Restez connectés !")}
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>{isAr ? 'سجّل جمعيتك على المنصة' : 'Inscrire mon association sur Athar'}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* 8. SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {isAr ? 'البحث عن فرصة تطوعية' : 'Rechercher une mission ou association'}
              </h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isAr ? 'اكتب كلمة البحث (مثال: تشجير، قسنطينة، قراءة...)' : 'Mot-clé, wilaya, thématique...'}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0d5b61] focus:ring-1 focus:ring-[#0d5b61]"
                  autoFocus
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 font-medium">
                  {filteredMissions.length} {isAr ? 'نتائج مطابقة' : 'missions trouvées'}
                </span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#0d5b61] text-white text-xs font-bold hover:bg-[#094348] transition-colors"
                >
                  {isAr ? 'عرض النتائج' : 'Voir les résultats'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. PARTICIPATION MODAL */}
      {selectedMissionForApply && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedMissionForApply(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-[#0d5b61] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                {isAr ? 'المشاركة في المهمة' : 'Rejoindre cette mission'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-semibold text-[#0d5b61]">
                {selectedMissionForApply.title}
              </p>
            </div>

            <form onSubmit={handleApplyMission} className="space-y-3.5 mt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isAr ? 'الاسم واللقب' : 'Nom et Prénom'}
                </label>
                <input
                  type="text"
                  required
                  value={volunteerName}
                  onChange={(e) => setVolunteerName(e.target.value)}
                  placeholder={isAr ? 'مثال: أمين بن علي' : 'Ex: Amine Benali'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0d5b61]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isAr ? 'رقم الهاتف' : 'Numéro de téléphone'}
                </label>
                <input
                  type="tel"
                  required
                  value={volunteerPhone}
                  onChange={(e) => setVolunteerPhone(e.target.value)}
                  placeholder="05 / 06 / 07 ..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0d5b61]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0d5b61] hover:bg-[#094348] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{isAr ? 'تأكيد المشاركة التطوعية' : 'Confirmer ma participation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* 11. REGISTER / LOGIN MODAL */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-3">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-[#0d5b61] flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                {isAr ? 'انضم إلى مجتمع أثر' : 'Bienvenue sur Athar'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isAr ? 'سجل حسابك في ثوانٍ وابدأ رحلة التطوع' : 'Créez votre profil de bénévole engagé en Algérie.'}
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                showToast(isAr ? 'مرحباً بك في مجتمع أثر !' : 'Bienvenue ! Votre compte bénévole est activé.');
                setIsRegisterModalOpen(false);
              }}
              className="space-y-3.5 mt-2"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isAr ? 'البريد الإلكتروني' : 'Adresse Email'}
                </label>
                <input
                  type="email"
                  required
                  placeholder="votre.email@exemple.dz"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0d5b61]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isAr ? 'كلمة المرور' : 'Mot de passe'}
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0d5b61]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0d5b61] hover:bg-[#094348] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{isAr ? 'تأكيد والانضمام' : 'Continuer'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 12. MAIN FOOTER */}
      <footer className="bg-[#0c2a30] text-white border-t border-slate-800 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Col 1 */}
            <div className="space-y-4 md:col-span-1">
              <div className="bg-white/10 p-2 rounded-2xl inline-block">
                <img
                  src="/assets/logo.png"
                  alt="Athar Logo"
                  className="h-12 w-auto brightness-0 invert object-contain"
                />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr
                  ? 'منصة وطنية جزائرية مخصصة للعمل التطوعي والتضامن المجتمعي. كل خطوة تصنع أثراً.'
                  : "Plateforme nationale algérienne dédiée à l'engagement bénévole et à la solidarité active. Chaque action laisse une empreinte."
                }
              </p>
              <div className="text-xs font-bold text-amber-400">
                🇩🇿 Fièrement développé pour l'Algérie
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {isAr ? 'التنقل' : 'Navigation'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#accueil" className="hover:text-white transition-colors">{isAr ? 'الرئيسية' : 'Accueil'}</a></li>
                <li><a href="#missions" className="hover:text-white transition-colors">{isAr ? 'المهمات التطوعية' : 'Missions'}</a></li>
                <li><a href="#associations" className="hover:text-white transition-colors">{isAr ? 'الجمعيات' : 'Associations'}</a></li>
                <li><a href="#valeurs" className="hover:text-white transition-colors">{isAr ? 'رؤيتنا' : 'Notre vision'}</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {isAr ? 'فضاءات المنصة' : 'Espaces'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <button onClick={() => setIsRegisterModalOpen(true)} className="hover:text-white transition-colors text-left">
                    {isAr ? 'فضاء المتطوع' : 'Espace Bénévole'}
                  </button>
                </li>
                <li>
                  <button onClick={() => showToast(isAr ? "فضاء انضمام الجمعيات سيكون متاحاً قريباً. شكراً لاهتمامكم بمنصة أثر !" : "L'espace d'inscription des associations ouvrira très prochainement. Restez connectés !")} className="hover:text-white transition-colors text-left">
                    {isAr ? 'فضاء الجمعيات' : 'Espace Association'}
                  </button>
                </li>
                <li><a href="#missions" className="hover:text-white transition-colors">{isAr ? 'خريطة الولايات' : '58 Wilayas'}</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {isAr ? 'تواصل معنا' : 'Contact'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Alger, Algérie<br />
                contact@athar.dz
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                {isAr ? 'جميع الحقوق محفوظة © 2025 منصة أثر' : '© 2025 Plateforme Athar. Tous droits réservés.'}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
            <div>
              {isAr ? 'أثر – العمل التطوعي في خدمة الجزائر' : 'Athar – Le bénévolat au service d’une Algérie solidaire.'}
            </div>
            <div className="mt-2 sm:mt-0 flex items-center gap-4">
              <span>Alger</span>
              <span>•</span>
              <span>Oran</span>
              <span>•</span>
              <span>Constantine</span>
              <span>•</span>
              <span>58 Wilayas</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
