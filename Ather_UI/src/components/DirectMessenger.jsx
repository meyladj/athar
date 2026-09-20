import React, { useState, useEffect, useRef } from 'react';

// Clean SVG Icons (zero emojis)
function IconDroplet({ className = "w-4 h-4", color = "#dc2626" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function IconHandshake({ className = "w-4 h-4", color = "#006D5B" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L13 12" />
      <path d="m18 10 3.3-3.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 6" />
      <path d="m2 14 3.3-3.3a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L6 18" />
      <path d="M10 13 6.7 9.7a1 1 0 0 0-1.4 0L2.7 12.3a1 1 0 0 0 0 1.4l4.3 4.3a1 1 0 0 0 1.4 0l1.6-1.6" />
    </svg>
  );
}

function IconTree({ className = "w-4 h-4", color = "#16a34a" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-7" />
      <path d="M7 15h10l-2.5-4h1.5L12 5l-4 6h1.5z" />
    </svg>
  );
}

function IconLock({ className = "w-3.5 h-3.5", color = "#64748b" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconCheckPin({ className = "w-3.5 h-3.5", color = "currentColor" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMapLoc({ className = "w-3.5 h-3.5", color = "currentColor" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

function IconCar({ className = "w-3.5 h-3.5", color = "currentColor" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function IconSend({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconDoubleCheck({ className = "w-3 h-3" }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#006D5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', margin: '0 4px' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const INITIAL_CONVERSATIONS = [
  {
    id: 'conv-1',
    entity_name: 'CTS · CHU Mustapha Pacha',
    entity_nameAr: 'مركز حقن الدم · المستشفى الجامعي مصطفى باشا',
    contact_person: 'Dr. Amina Benali',
    contact_personAr: 'د. أمينة بن علي',
    entity_badge: 'Hôpital Public',
    entity_badgeAr: 'مستشفى عمومي',
    iconType: 'blood',
    online: true,
    unread_count: 1,
    mission_title: 'Collecte de Sang Urgence O- & A+',
    mission_titleAr: 'حملة استعجالية للتبرع بالدم فصيلة O- و A+',
    messages: [
      {
        id: 'm1',
        sender: 'them',
        text: 'Bonjour Nadia ! Merci pour votre engagement pour la collecte de sang.',
        textAr: 'مرحباً نادية! نشكركِ جزيل الشكر على التزامكِ ومشاركتكِ في حملة التبرع بالدم.',
        time: 'Hier 14:20',
        timeAr: 'أمس 14:20'
      },
      {
        id: 'm2',
        sender: 'them',
        text: 'Pourriez-vous vous présenter demain vers 10h au Pavillon Pasteur (porte 3) ?',
        textAr: 'هل بإمكانك الحضور غداً حوالي الساعة 10:00 صباحاً بجناح باستور (الباب 3)؟',
        time: 'Hier 14:21',
        timeAr: 'أمس 14:21'
      },
      {
        id: 'm3',
        sender: 'me',
        text: 'Bonjour Dr. Benali ! Oui c\'est parfait pour moi, je serai présente à 10h précises.',
        textAr: 'أهلاً دكتورة بن علي! نعم بكل سرور، سأكون حاضرة في تمام الساعة العاشرة.',
        time: 'Hier 15:05',
        timeAr: 'أمس 15:05'
      },
      {
        id: 'm4',
        sender: 'them',
        text: 'Parfait ! Pensez à bien déjeuner et à boire de l\'eau avant de venir. À demain !',
        textAr: 'ممتاز! تذكري تناول فطور صحي وشرب كمية كافية من الماء قبل القدوم. نلتقي غداً إن شاء الله!',
        time: 'Aujourd\'hui 09:12',
        timeAr: 'اليوم 09:12'
      }
    ]
  },
  {
    id: 'conv-2',
    entity_name: 'Association El Baraka Algérie',
    entity_nameAr: 'جمعية البركة الجزائرية',
    contact_person: 'Yacine Mehdi',
    contact_personAr: 'ياسين مهدي',
    entity_badge: 'Organisation Agréée',
    entity_badgeAr: 'جمعية معتمدة',
    iconType: 'handshake',
    online: true,
    unread_count: 0,
    mission_title: 'Distribution Colis Solidarité Hiver',
    mission_titleAr: 'توزيع قوافل التضامن الشتوي',
    messages: [
      {
        id: 'm20',
        sender: 'them',
        text: 'Salam Nadia, nous avons validé votre candidature pour la mission de distribution à Médéa.',
        textAr: 'السلام عليكم نادية، يسعدنا إعلامكِ بقبول ترشحك لمهمة توزيع الطرود التضامنية بالمدية.',
        time: '14 Sep 11:30',
        timeAr: '14 سبتمبر 11:30'
      },
      {
        id: 'm21',
        sender: 'me',
        text: 'Merci beaucoup ! Quel est le point de rendez-vous pour le départ des camionnettes ?',
        textAr: 'شكراً جزيلاً! أين ستكون نقطة التجمع لانطلاق شاحنات المساعدات؟',
        time: '14 Sep 11:45',
        timeAr: '14 سبتمبر 11:45'
      },
      {
        id: 'm22',
        sender: 'them',
        text: 'Rendez-vous à 07h30 au siège de Kouba. Le déjeuner sur place est offert par l\'association.',
        textAr: 'موعدنا الساعة 07:30 صباحاً بمقر الجمعية بالقبة. وجبة الغداء في الميدان متكفل بها من طرف الجمعية.',
        time: '14 Sep 12:00',
        timeAr: '14 سبتمبر 12:00'
      }
    ]
  },
  {
    id: 'conv-3',
    entity_name: 'Club Vert Universitaire USTHB',
    entity_nameAr: 'النادي الأخضر الجامعي باب الزوار USTHB',
    contact_person: 'Meriem Brahimi',
    contact_personAr: 'مريم براهيمي',
    entity_badge: 'Club Étudiant',
    entity_badgeAr: 'نادٍ جامعي',
    iconType: 'tree',
    online: false,
    unread_count: 0,
    mission_title: 'Reboisement Participatif Zéralda',
    mission_titleAr: 'التشجير التشاركي بزرالدة',
    messages: [
      {
        id: 'm30',
        sender: 'them',
        text: 'Bienvenue dans l\'équipe de reboisement ! Les bus étudiants partiront de Bab Ezzouar à 08h00.',
        textAr: 'أهلاً بكِ في فريق التشجير! حافلات نقل المتطوعين ستنطلق من باب الزوار في تمام الساعة 08:00 صباحاً.',
        time: '10 Sep 18:20',
        timeAr: '10 سبتمبر 18:20'
      },
      {
        id: 'm31',
        sender: 'me',
        text: 'Super, j\'ai mes gants et ma gourde prêts !',
        textAr: 'رائع جداً، جهزت قفازاتي ومعداتي وسأكون حاضرة في الموعد!',
        time: '10 Sep 19:10',
        timeAr: '10 سبتمبر 19:10'
      }
    ]
  }
];

function renderConvIcon(type) {
  if (type === 'blood') return <IconDroplet />;
  if (type === 'handshake') return <IconHandshake />;
  return <IconTree />;
}

export default function DirectMessenger({ volunteerUser = null, currentLang = 'fr', onToast }) {
  const isAr = currentLang === 'ar';
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [messageInput, setMessageInput] = useState('');
  const [isTypingSimulated, setIsTypingSimulated] = useState(false);
  const messagesEndRef = useRef(null);

  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConv.messages]);

  const handleSendMessage = (textToSend = null) => {
    const content = (textToSend || messageInput).trim();
    if (!content) return;

    const newMsg = {
      id: `msg_${Date.now()}`,
      sender: 'me',
      text: content,
      textAr: content,
      time: isAr ? 'الآن' : 'À l\'instant',
      timeAr: 'الآن'
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeConvId) {
        return {
          ...c,
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));

    if (!textToSend) setMessageInput('');

    // Réponse automatique simulée de l'organisation après 1.2s
    setIsTypingSimulated(true);
    setTimeout(() => {
      setIsTypingSimulated(false);
      const replyMsg = {
        id: `reply_${Date.now()}`,
        sender: 'them',
        text: isAr
          ? 'مرحباً بكم! تم استلام رسالتكم وتوثيقها، نشكركم جزيل الشكر على روح المبادرة وسرعة الاستجابة. نلتقي قريباً في الميدان!'
          : 'Bien reçu ! Nous avons noté votre message et nous vous remercions pour votre réactivité citoyenne. À très bientôt sur le terrain !',
        textAr: 'مرحباً بكم! تم استلام رسالتكم وتوثيقها، نشكركم جزيل الشكر على روح المبادرة وسرعة الاستجابة. نلتقي قريباً في الميدان!',
        time: isAr ? 'الآن' : 'À l\'instant',
        timeAr: 'الآن'
      };

      setConversations(prev => prev.map(c => {
        if (c.id === activeConvId) {
          return {
            ...c,
            messages: [...c.messages, replyMsg]
          };
        }
        return c;
      }));

      if (onToast) onToast(isAr ? `رسالة جديدة من ${activeConv.contact_personAr || activeConv.contact_person}` : `Nouveau message de ${activeConv.contact_person}`);
    }, 1400);
  };

  return (
    <div className="messenger-container" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      {/* COLONNE GAUCHE : LISTE DES CONVERSATIONS */}
      <div className="messenger-sidebar">
        <div className="messenger-sidebar-header">
          <div className="messenger-title-row">
            <h4>{isAr ? 'الرسائل المباشرة' : 'Messagerie Directe'}</h4>
            <span className="messenger-badge-count">
              {conversations.reduce((acc, c) => acc + c.unread_count, 0)} {isAr ? 'غير مقروءة' : 'non lus'}
            </span>
          </div>
          <p className="messenger-sub">
            {isAr ? 'تواصل بشكل مباشر مع منسقي المستشفيات والجمعيات.' : 'Échangez directement avec les coordinateurs des hôpitaux et associations.'}
          </p>
        </div>

        <div className="messenger-conversations-list">
          {conversations.map(conv => {
            const isSelected = conv.id === activeConvId;
            const lastMsg = conv.messages[conv.messages.length - 1];

            return (
              <div
                key={conv.id}
                className={`messenger-conv-item ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  setActiveConvId(conv.id);
                  // Marquer comme lu
                  setConversations(prev => prev.map(c => c.id === conv.id ? { ...c, unread_count: 0 } : c));
                }}
              >
                <div className="messenger-conv-avatar-wrap">
                  <span className="messenger-conv-avatar-icon">{renderConvIcon(conv.iconType)}</span>
                  {conv.online && <span className="messenger-online-dot"></span>}
                </div>

                <div className="messenger-conv-info">
                  <div className="messenger-conv-top-line">
                    <strong className="messenger-conv-name">{isAr ? (conv.entity_nameAr || conv.entity_name) : conv.entity_name}</strong>
                    <span className="messenger-conv-time">{isAr ? (lastMsg?.timeAr || lastMsg?.time).split(' ')[0] : lastMsg?.time.split(' ')[0]}</span>
                  </div>
                  <div className="messenger-conv-person">
                    {isAr ? (conv.contact_personAr || conv.contact_person) : conv.contact_person} · <span className="entity-tag">{isAr ? (conv.entity_badgeAr || conv.entity_badge) : conv.entity_badge}</span>
                  </div>
                  <div className="messenger-conv-last-snippet">
                    {lastMsg ? (isAr ? (lastMsg.textAr || lastMsg.text) : lastMsg.text) : (isAr ? 'بدء المحادثة...' : 'Démarrer la discussion...')}
                  </div>
                </div>

                {conv.unread_count > 0 && (
                  <span className="messenger-unread-pill">{conv.unread_count}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* COLONNE DROITE : FENÊTRE DE DISCUSSION CHAT */}
      <div className="messenger-chat-pane">
        {/* ENTÊTE DE LA CONVERSATION ACTIVE */}
        <div className="messenger-chat-header">
          <div className="messenger-chat-header-left">
            <div className="messenger-active-avatar">
              {renderConvIcon(activeConv.iconType)}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--primary-navy)' }}>
                  {isAr ? (activeConv.entity_nameAr || activeConv.entity_name) : activeConv.entity_name}
                </strong>
                <span style={{ fontSize: '11px', background: '#dbeafe', color: '#1e40af', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                  {isAr ? (activeConv.entity_badgeAr || activeConv.entity_badge) : activeConv.entity_badge}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                {isAr ? 'جهة الاتصال :' : 'Contact :'} <strong>{isAr ? (activeConv.contact_personAr || activeConv.contact_person) : activeConv.contact_person}</strong> · {activeConv.online ? <span style={{ color: '#16a34a', fontWeight: 700 }}>● {isAr ? 'متصل الآن' : 'En ligne'}</span> : (isAr ? 'غير متصل' : 'Hors ligne')}
              </div>
            </div>
          </div>

          <div className="messenger-chat-header-right">
            <span style={{ fontSize: '11.5px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', color: '#475569', fontWeight: 600 }}>
              {isAr ? 'المبادرة :' : 'Mission :'} <strong>{isAr ? (activeConv.mission_titleAr || activeConv.mission_title) : activeConv.mission_title}</strong>
            </span>
          </div>
        </div>

        {/* FLUX DE MESSAGES */}
        <div className="messenger-messages-stream">
          <div className="messenger-encrypted-notice" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <IconLock color="#64748b" />
            <span>
              {isAr
                ? 'قناة آمنة ومحمية من أثر · بياناتكم الشخصية مشفرة وتُستخدم حصرياً للتنسيق اللوجستي للعمل التطوعي.'
                : 'Canal sécurisé Athar · Vos coordonnées sont protégées et partagées uniquement pour la logistique de mission.'}
            </span>
          </div>

          {activeConv.messages.map(m => {
            const isMe = m.sender === 'me';
            return (
              <div key={m.id} className={`messenger-bubble-row ${isMe ? 'me' : 'them'}`}>
                <div className={`messenger-bubble ${isMe ? 'me' : 'them'}`}>
                  <div className="messenger-bubble-text">{isAr ? (m.textAr || m.text) : m.text}</div>
                  <div className="messenger-bubble-time" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <span>{isAr ? (m.timeAr || m.time) : m.time}</span>
                    {isMe && <IconDoubleCheck />}
                  </div>
                </div>
              </div>
            );
          })}

          {isTypingSimulated && (
            <div className="messenger-bubble-row them">
              <div className="messenger-bubble them typing">
                <span>●</span> <span>●</span> <span>●</span> {isAr ? `${activeConv.contact_personAr || activeConv.contact_person} يكتب الآن...` : `${activeConv.contact_person} écrit...`}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* SUGGESTIONS DE RÉPONSES RAPIDES */}
        <div className="messenger-quick-actions-bar">
          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700 }}>
            {isAr ? 'ردود سريعة جاهزة :' : 'Réponses rapides :'}
          </span>
          <button
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage(isAr ? 'السلام عليكم! أؤكد حضوري في الموعد المحدد للمبادرة.' : 'Bonjour ! Je confirme ma présence pour la mission.')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <IconCheckPin />
            <span>{isAr ? 'تأكيد الحضور' : 'Confirmer ma présence'}</span>
          </button>
          <button
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage(isAr ? 'السلام عليكم، هل يمكن تزويدي بالموقع الجغرافي الدقيق لنقطة الالتقاء؟' : "Pourriez-vous m'envoyer le point GPS précis du lieu de rassemblement ?")}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <IconMapLoc />
            <span>{isAr ? 'طلب الموقع الجغرافي GPS' : 'Demander localisation GPS'}</span>
          </button>
          <button
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage(isAr ? 'سأكون متاحاً بسيارتي الخاصة للمساعدة في نقل المتطوعين أو العتاد إذا دعت الحاجة.' : "Je serai disponible dès 08h30 avec mon véhicule personnel si besoin d'aide transport.")}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <IconCar />
            <span>{isAr ? 'اقتراح مساعدة بالنقل' : 'Proposer transport'}</span>
          </button>
        </div>

        {/* BARRE DE SAISIE DE MESSAGE */}
        <div className="messenger-input-bar">
          <input
            type="text"
            placeholder={isAr ? 'اكتب رسالة إلى المنظمة...' : "Écrire un message à l'organisation..."}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button
            type="button"
            className="btn-send-message"
            onClick={() => handleSendMessage()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>{isAr ? 'إرسال' : 'Envoyer'}</span>
            <IconSend />
          </button>
        </div>
      </div>
    </div>
  );
}
