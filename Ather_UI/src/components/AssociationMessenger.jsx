import React, { useState } from 'react';
import '../styles/association/messenger.css';

// Assets
import assocCraLogo from '../assets/assoc-cra-logo.png';
import assocMsgCard from '../assets/assoc-msg-card.png';
import assocMsgCanastel from '../assets/assoc-msg-canastel.png';

// Clean SVG Icons (zero emojis)
function IconSearch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function IconVideo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect width="14" height="12" x="1" y="6" rx="2" ry="2" />
    </svg>
  );
}

function IconInfo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function IconCheck({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconMapPin({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconCalendar({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconPaperclip({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function IconSend({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconMessageSquare({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

const CONVERSATIONS = [
  {
    id: 'cra',
    name: 'Croissant Rouge Algérien',
    role: 'Association',
    avatar: assocCraLogo,
    isImg: true,
    lastMsg: 'Merci pour votre disponibilité ! On se voit samedi.',
    time: '11:24',
    online: true,
    type: 'assoc'
  },
  {
    id: 'yasmine',
    name: 'Yasmine K.',
    role: 'Bénévole',
    avatar: 'YK',
    isImg: false,
    lastMsg: 'Parfait, je serai présente.',
    time: '10:18',
    online: true,
    type: 'benevole'
  },
  {
    id: 'kafil',
    name: 'Association Kafil El Yatim',
    role: 'Association',
    avatar: 'KY',
    isImg: false,
    lastMsg: 'Merci pour votre soutien !',
    time: 'Hier',
    online: false,
    type: 'assoc'
  },
  {
    id: 'karim',
    name: 'Karim A.',
    role: 'Bénévole',
    avatar: 'KA',
    isImg: false,
    lastMsg: "J'ai une question sur la mission.",
    time: 'Hier',
    online: true,
    type: 'benevole'
  },
  {
    id: 'nour',
    name: 'Nour El Djazaïr',
    role: 'Association',
    avatar: 'ND',
    isImg: false,
    lastMsg: 'Les documents sont prêts.',
    time: '24 avr.',
    online: false,
    type: 'assoc'
  },
  {
    id: 'sabrina',
    name: 'Sabrina M.',
    role: 'Bénévole',
    avatar: 'SM',
    isImg: false,
    lastMsg: "D'accord, merci beaucoup !",
    time: '22 avr.',
    online: false,
    type: 'benevole'
  },
  {
    id: 'plages',
    name: 'Plages Propres Algérie',
    role: 'Association',
    avatar: 'PP',
    isImg: false,
    lastMsg: 'À bientôt sur le terrain !',
    time: '20 avr.',
    online: false,
    type: 'assoc'
  },
  {
    id: 'mehdi',
    name: 'Mehdi T.',
    role: 'Bénévole',
    avatar: 'MT',
    isImg: false,
    lastMsg: 'Je peux venir avec un collègue ?',
    time: '18 avr.',
    online: true,
    type: 'benevole'
  }
];

export default function AssociationMessenger() {
  const [activeChatId, setActiveChatId] = useState('cra');
  const [filterTab, setFilterTab] = useState('tous'); // 'tous' | 'benevoles' | 'associations'
  const [searchQuery, setSearchQuery] = useState('');
  const [inputText, setInputText] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'cra',
      text: "Bonjour. Merci pour votre intérêt pour la mission de reboisement à Oran. Êtes-vous toujours disponible pour y participer ?",
      time: '10:12'
    },
    {
      id: 2,
      sender: 'me',
      text: "Bonjour. Oui, je confirme ma présence. Prête à contribuer sur le terrain !",
      time: '10:15'
    },
    {
      id: 3,
      sender: 'cra',
      text: "Voici les informations utiles pour le déroulement de la journée :\n\n• Point de rassemblement : Forêt de Canastel, Oran\n• Horaire : 08h00 précises\n• Équipement : Prévoir des chaussures de marche\n• Matériel : Des gants et sacs vous seront fournis sur place.",
      time: '10:20'
    },
    {
      id: 4,
      sender: 'me',
      text: "Merci pour ces précisions. Est-il possible de partager ma position exacte le matin même ?",
      time: '10:22'
    },
    {
      id: 5,
      sender: 'cra',
      text: "Bien sûr. Vous pourrez la partager directement dans cette discussion pour faciliter la coordination.",
      time: '10:24'
    },
    {
      id: 6,
      sender: 'cra',
      isPhoto: true,
      photoUrl: assocMsgCanastel,
      text: "Aperçu de la zone d'intervention. À samedi !",
      time: '10:24'
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
  };

  const handleQuickAction = (actionText) => {
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: actionText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const filteredConversations = CONVERSATIONS.filter((c) => {
    if (filterTab === 'benevoles' && c.type !== 'benevole') return false;
    if (filterTab === 'associations' && c.type !== 'assoc') return false;
    if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. EN-TÊTE DE LA MESSAGERIE */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--assoc-emerald-light)', color: 'var(--assoc-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconMessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--assoc-navy)', margin: 0 }}>
            Messagerie associative
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--assoc-text-muted)', margin: '2px 0 0' }}>
            Communiquez en direct avec vos bénévoles et coordonnez vos opérations de terrain.
          </p>
        </div>
      </div>

      {/* 2. CONTENEUR PRINCIPAL DU CHAT */}
      <div className="assoc-msg-root">
        
        {/* PANNEAU GAUCHE : LISTE DES CONVERSATIONS */}
        <div className="assoc-msg-sidebar">
          
          {/* Recherche & Filtres */}
          <div className="assoc-msg-sidebar-header">
            <h2 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 800, color: 'var(--assoc-navy)' }}>
              Discussions
            </h2>
            
            <div className="assoc-msg-search-box">
              <IconSearch className="w-4 h-4" style={{ color: 'var(--assoc-text-muted)' }} />
              <input
                type="text"
                placeholder="Rechercher une discussion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
              <button
                type="button"
                onClick={() => setFilterTab('tous')}
                style={{
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: 'none',
                  background: filterTab === 'tous' ? 'var(--assoc-emerald)' : 'var(--assoc-bg-subtle)',
                  color: filterTab === 'tous' ? '#ffffff' : 'var(--assoc-text-muted)',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Tous
              </button>
              <button
                type="button"
                onClick={() => setFilterTab('benevoles')}
                style={{
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: 'none',
                  background: filterTab === 'benevoles' ? 'var(--assoc-emerald)' : 'var(--assoc-bg-subtle)',
                  color: filterTab === 'benevoles' ? '#ffffff' : 'var(--assoc-text-muted)',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Bénévoles
              </button>
              <button
                type="button"
                onClick={() => setFilterTab('associations')}
                style={{
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: 'none',
                  background: filterTab === 'associations' ? 'var(--assoc-emerald)' : 'var(--assoc-bg-subtle)',
                  color: filterTab === 'associations' ? '#ffffff' : 'var(--assoc-text-muted)',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Associations
              </button>
            </div>
          </div>

          {/* Liste des discussions */}
          <div className="assoc-msg-convos-list">
            {filteredConversations.map((conv) => {
              const isSelected = activeChatId === conv.id;
              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveChatId(conv.id)}
                  className={`assoc-msg-convo-item ${isSelected ? 'active' : ''}`}
                >
                  {/* Avatar */}
                  <div style={{ position: 'relative' }}>
                    {conv.isImg ? (
                      <img src={conv.avatar} alt={conv.name} className="assoc-msg-convo-avatar" />
                    ) : (
                      <div className="assoc-msg-convo-avatar">
                        {conv.avatar}
                      </div>
                    )}
                    {conv.online && (
                      <span style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', border: '2px solid #ffffff' }} />
                    )}
                  </div>

                  {/* Détails du message */}
                  <div className="assoc-msg-convo-info">
                    <div className="assoc-msg-convo-top">
                      <div className="assoc-msg-convo-name">{conv.name}</div>
                      <span className="assoc-msg-convo-time">{conv.time}</span>
                    </div>
                    <div className="assoc-msg-convo-snippet">{conv.lastMsg}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PANNEAU DROIT : ZONE DE CHAT */}
        <div className="assoc-msg-chat-pane">
          
          {/* En-tête de la conversation active */}
          <div className="assoc-msg-chat-header">
            <div className="assoc-msg-chat-header-user">
              <img src={assocCraLogo} alt="CRA" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--assoc-border)', objectFit: 'contain', padding: '2px', background: '#fff' }} />
              <div>
                <div className="assoc-msg-chat-header-name">Croissant Rouge Algérien</div>
                <div className="assoc-msg-chat-header-sub" style={{ color: '#16a34a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16a34a' }} />
                  <span>En ligne</span>
                </div>
              </div>
            </div>

            <div className="assoc-msg-chat-header-actions">
              <button type="button" className="assoc-msg-icon-btn" title="Appeler">
                <IconPhone className="w-4 h-4" />
              </button>
              <button type="button" className="assoc-msg-icon-btn" title="Vidéo">
                <IconVideo className="w-4 h-4" />
              </button>
              <button type="button" className="assoc-msg-icon-btn" title="Infos">
                <IconInfo className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carte de la mission rattachée */}
          <div style={{ padding: '14px 24px', background: '#ffffff', borderBottom: '1px solid var(--assoc-border-subtle)' }}>
            <div style={{ background: 'var(--assoc-bg-subtle)', borderRadius: '14px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                <img src={assocMsgCard} alt="Miniature mission" style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--assoc-emerald)', background: 'var(--assoc-emerald-tint)', padding: '2px 8px', borderRadius: '4px' }}>
                    Mission liée
                  </span>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--assoc-navy)', margin: '3px 0 2px' }}>
                    Plantation de 500 arbres à Oran
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--assoc-text-muted)', display: 'flex', gap: '10px' }}>
                    <span>Forêt de Canastel</span>
                    <span>·</span>
                    <span>Samedi 26 avril</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                style={{
                  border: '1px solid var(--assoc-emerald-border)',
                  background: '#ffffff',
                  color: 'var(--assoc-emerald)',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                Fiche mission
              </button>
            </div>
          </div>

          {/* Flux de messages */}
          <div className="assoc-msg-stream">
            {messages.map((msg) => {
              const isMe = msg.sender === 'me';
              return (
                <div key={msg.id} className={`assoc-msg-bubble-wrap ${isMe ? 'outgoing' : 'incoming'}`}>
                  <div className={`assoc-msg-bubble ${isMe ? 'outgoing' : 'incoming'}`}>
                    {msg.isPhoto && (
                      <div style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
                        <img src={msg.photoUrl} alt="Photo" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                      </div>
                    )}
                    <p style={{ margin: 0 }}>{msg.text}</p>
                  </div>
                  <span className="assoc-msg-bubble-time">{msg.time}</span>
                </div>
              );
            })}
          </div>

          {/* Raccourcis d'actions rapides sous forme de pills */}
          <div style={{ padding: '8px 24px', background: '#ffffff', borderTop: '1px solid var(--assoc-border-subtle)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => handleQuickAction("Je confirme ma présence pour la mission !")}
              style={{
                border: '1px solid var(--assoc-border)',
                background: 'var(--assoc-bg-subtle)',
                borderRadius: '999px',
                padding: '5px 12px',
                fontSize: '11.5px',
                fontWeight: 600,
                color: 'var(--assoc-text-body)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <IconCheck className="w-3.5 h-3.5" style={{ color: 'var(--assoc-emerald)' }} />
              <span>Confirmer ma présence</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickAction("Position actuelle partagée : Canastel, Oran")}
              style={{
                border: '1px solid var(--assoc-border)',
                background: 'var(--assoc-bg-subtle)',
                borderRadius: '999px',
                padding: '5px 12px',
                fontSize: '11.5px',
                fontWeight: 600,
                color: 'var(--assoc-text-body)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <IconMapPin className="w-3.5 h-3.5" style={{ color: '#2563eb' }} />
              <span>Partager ma position</span>
            </button>
          </div>

          {/* Formulaire de saisie du message */}
          <form onSubmit={handleSendMessage} className="assoc-msg-composer">
            <button
              type="button"
              style={{ border: 'none', background: 'none', color: 'var(--assoc-text-muted)', cursor: 'pointer', padding: '6px' }}
              title="Joindre un fichier"
            >
              <IconPaperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              className="assoc-msg-input"
              placeholder="Écrivez votre message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <button
              type="submit"
              className="assoc-msg-send-btn"
              title="Envoyer"
            >
              <IconSend className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
