import React, { useState, useEffect, useRef } from 'react';

const INITIAL_CONVERSATIONS = [
  {
    id: 'conv-1',
    entity_name: 'CTS · CHU Mustapha Pacha',
    contact_person: 'Dr. Amina Benali',
    entity_badge: 'Hôpital Public',
    avatar: '🩸',
    online: true,
    unread_count: 1,
    mission_title: 'Collecte de Sang Urgence O- & A+',
    messages: [
      { id: 'm1', sender: 'them', text: 'Bonjour Nadia ! Merci pour votre engagement pour la collecte de sang.', time: 'Hier 14:20' },
      { id: 'm2', sender: 'them', text: 'Pourriez-vous vous présenter demain vers 10h au Pavillon Pasteur (porte 3) ?', time: 'Hier 14:21' },
      { id: 'm3', sender: 'me', text: 'Bonjour Dr. Benali ! Oui c\'est parfait pour moi, je serai présente à 10h précises.', time: 'Hier 15:05' },
      { id: 'm4', sender: 'them', text: 'Parfait ! Pensez à bien déjeuner et à boire de l\'eau avant de venir. À demain !', time: 'Aujourd\'hui 09:12' }
    ]
  },
  {
    id: 'conv-2',
    entity_name: 'Association El Baraka Algérie',
    contact_person: 'Yacine Mehdi',
    entity_badge: 'Organisation Agréée',
    avatar: '🤝',
    online: true,
    unread_count: 0,
    mission_title: 'Distribution Colis Solidarité Hiver',
    messages: [
      { id: 'm20', sender: 'them', text: 'Salam Nadia, nous avons validé votre candidature pour la mission de distribution à Médéa.', time: '14 Sep 11:30' },
      { id: 'm21', sender: 'me', text: 'Merci beaucoup ! Quel est le point de rendez-vous pour le départ des camionnettes ?', time: '14 Sep 11:45' },
      { id: 'm22', sender: 'them', text: 'Rendez-vous à 07h30 au siège de Kouba. Le déjeuner sur place est offert par l\'association.', time: '14 Sep 12:00' }
    ]
  },
  {
    id: 'conv-3',
    entity_name: 'Club Vert Universitaire USTHB',
    contact_person: 'Meriem Brahimi',
    entity_badge: 'Club Étudiant',
    avatar: '🌲',
    online: false,
    unread_count: 0,
    mission_title: 'Reboisement Participatif Zéralda',
    messages: [
      { id: 'm30', sender: 'them', text: 'Bienvenue dans l\'équipe de reboisement ! Les bus étudiants partiront de Bab Ezzouar à 08h00.', time: '10 Sep 18:20' },
      { id: 'm31', sender: 'me', text: 'Super, j\'ai mes gants et ma gourde prêts !', time: '10 Sep 19:10' }
    ]
  }
];

export default function DirectMessenger({ volunteerUser = null, currentLang = 'fr', onToast }) {
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
      time: 'À l\'instant'
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
        text: 'Bien reçu ! Nous avons noté votre message et nous vous remercions pour votre réactivité citoyenne. À très bientôt sur le terrain !',
        time: 'À l\'instant'
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

      if (onToast) onToast(`Nouveau message de ${activeConv.contact_person}`);
    }, 1400);
  };

  return (
    <div className="messenger-container">
      {/* COLONNE GAUCHE : LISTE DES CONVERSATIONS */}
      <div className="messenger-sidebar">
        <div className="messenger-sidebar-header">
          <div className="messenger-title-row">
            <h4>Messagerie Directe</h4>
            <span className="messenger-badge-count">
              {conversations.reduce((acc, c) => acc + c.unread_count, 0)} non lus
            </span>
          </div>
          <p className="messenger-sub">
            Échangez directement avec les coordinateurs des hôpitaux et associations.
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
                  <span className="messenger-conv-avatar-icon">{conv.avatar}</span>
                  {conv.online && <span className="messenger-online-dot"></span>}
                </div>

                <div className="messenger-conv-info">
                  <div className="messenger-conv-top-line">
                    <strong className="messenger-conv-name">{conv.entity_name}</strong>
                    <span className="messenger-conv-time">{lastMsg?.time.split(' ')[0]}</span>
                  </div>
                  <div className="messenger-conv-person">{conv.contact_person} · <span className="entity-tag">{conv.entity_badge}</span></div>
                  <div className="messenger-conv-last-snippet">
                    {lastMsg ? lastMsg.text : 'Démarrer la discussion...'}
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
              {activeConv.avatar}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--primary-navy)' }}>{activeConv.entity_name}</strong>
                <span style={{ fontSize: '11px', background: '#dbeafe', color: '#1e40af', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                  {activeConv.entity_badge}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                Contact : <strong>{activeConv.contact_person}</strong> · {activeConv.online ? <span style={{ color: '#16a34a', fontWeight: 700 }}>● En ligne</span> : 'Hors ligne'}
              </div>
            </div>
          </div>

          <div className="messenger-chat-header-right">
            <span style={{ fontSize: '11.5px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', color: '#475569', fontWeight: 600 }}>
              Mission : <strong>{activeConv.mission_title}</strong>
            </span>
          </div>
        </div>

        {/* FLUX DE MESSAGES */}
        <div className="messenger-messages-stream">
          <div className="messenger-encrypted-notice">
            🔒 Canal sécurisé Athar · Vos coordonnées sont protégées et partagées uniquement pour la logistique de mission.
          </div>

          {activeConv.messages.map(m => {
            const isMe = m.sender === 'me';
            return (
              <div key={m.id} className={`messenger-bubble-row ${isMe ? 'me' : 'them'}`}>
                <div className={`messenger-bubble ${isMe ? 'me' : 'them'}`}>
                  <div className="messenger-bubble-text">{m.text}</div>
                  <div className="messenger-bubble-time">{m.time} {isMe && '✓✓'}</div>
                </div>
              </div>
            );
          })}

          {isTypingSimulated && (
            <div className="messenger-bubble-row them">
              <div className="messenger-bubble them typing">
                <span>●</span> <span>●</span> <span>●</span> {activeConv.contact_person} écrit...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* SUGGESTIONS DE RÉPONSES RAPIDES */}
        <div className="messenger-quick-actions-bar">
          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700 }}>Réponses rapides :</span>
          <button
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage("Bonjour ! Je confirme ma présence pour la mission.")}
          >
            📍 Confirmer ma présence
          </button>
          <button
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage("Pourriez-vous m'envoyer le point GPS précis du lieu de rassemblement ?")}
          >
            🗺️ Demander localisation GPS
          </button>
          <button
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage("Je serai disponible dès 08h30 avec mon véhicule personnel si besoin d'aide transport.")}
          >
            🚗 Proposer transport
          </button>
        </div>

        {/* BARRE DE SAISIE DE MESSAGE */}
        <div className="messenger-input-bar">
          <input
            type="text"
            placeholder="Écrire un message à l'organisation..."
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
          >
            <span>Envoyer</span>
            <span>➤</span>
          </button>
        </div>
      </div>
    </div>
  );
}
