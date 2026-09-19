import React, { useState } from 'react';

// Données initiales des urgences de don de sang en milieu hospitalier
const INITIAL_BLOOD_DRIVES = [
  {
    id: 'blood-1',
    hospital_name: 'CHU Mustapha Pacha',
    service: 'Centre de Transfusion Sanguine (CTS Central)',
    wilaya: 'Alger',
    address: 'Place du 1er Mai, Sidi M\'Hamed, Alger',
    urgency_level: 'CRITIQUE', // CRITIQUE, ÉLEVÉ, MODÉRÉ
    blood_groups_needed: ['O-', 'O+', 'A-', 'B-'],
    poches_target: 60,
    poches_collected: 38,
    operating_hours: '08h00 – 19h30 (Continu)',
    contact_phone: '023 23 45 01',
    urgent_reason: 'Réserve critique pour chirurgie cardio-vasculaire et urgences pédiatriques.',
    pledges_count: 42
  },
  {
    id: 'blood-2',
    hospital_name: 'CHU Bab El Oued (Lamine Debaghine)',
    service: 'Service d\'Hémobiologie & Réanimation',
    wilaya: 'Alger',
    address: 'Avenue Colonel Lotfi, Bab El Oued',
    urgency_level: 'CRITIQUE',
    blood_groups_needed: ['O-', 'AB-', 'A+'],
    poches_target: 40,
    poches_collected: 19,
    operating_hours: '08h30 – 18h00',
    contact_phone: '021 96 05 05',
    urgent_reason: 'Besoin d\'urgence pour les nouveau-nés et les dialysés réguliers.',
    pledges_count: 27
  },
  {
    id: 'blood-3',
    hospital_name: 'EHS Frantz Fanon (Blida)',
    service: 'Banque de Sang de Traumatologie',
    wilaya: 'Blida',
    address: 'Boulevard des 20 Mètres, Blida',
    urgency_level: 'ÉLEVÉ',
    blood_groups_needed: ['B+', 'O+', 'A-'],
    poches_target: 50,
    poches_collected: 32,
    operating_hours: '08h00 – 17h00',
    contact_phone: '025 31 22 10',
    urgent_reason: 'Approvisionnement des blocs opératoires d\'urgence autoroutière.',
    pledges_count: 31
  },
  {
    id: 'blood-4',
    hospital_name: 'Établissement Hospitalier Universitaire (EHU Oran)',
    service: 'CTS – Centre Régional de Transfusion',
    wilaya: 'Oran',
    address: 'Bir El Djir, Oran',
    urgency_level: 'CRITIQUE',
    blood_groups_needed: ['O-', 'B-', 'AB+'],
    poches_target: 75,
    poches_collected: 44,
    operating_hours: '08h00 – 20h00',
    contact_phone: '041 42 11 00',
    urgent_reason: 'Appel d\'urgence pour le centre anti-cancer et chirurgie hépatobiliaire.',
    pledges_count: 53
  },
  {
    id: 'blood-5',
    hospital_name: 'CHU Benbadis (Constantine)',
    service: 'Unité Mobile & Fixe de Don de Sang',
    wilaya: 'Constantine',
    address: 'Rue Ben M\'hidi, Constantine',
    urgency_level: 'ÉLEVÉ',
    blood_groups_needed: ['A+', 'O-', 'B+'],
    poches_target: 45,
    poches_collected: 29,
    operating_hours: '08h30 – 17h30',
    contact_phone: '031 92 10 50',
    urgent_reason: 'Campagne spéciale jeunes étudiants & soutien aux services pédiatriques.',
    pledges_count: 35
  }
];

export default function BloodDonationCenter({ currentLang = 'fr', onOpenLogin, isVolunteer = false, volunteerUser = null }) {
  const [bloodDrives, setBloodDrives] = useState(INITIAL_BLOOD_DRIVES);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('ALL');
  const [selectedWilayaFilter, setSelectedWilayaFilter] = useState('ALL');
  const [selectedPledgeModal, setSelectedPledgeModal] = useState(null);
  const [pledgeConfirmedPass, setPledgeConfirmedPass] = useState(null);
  const [donorName, setDonorName] = useState(volunteerUser?.name || '');
  const [donorPhone, setDonorPhone] = useState(volunteerUser?.phone || '');
  const [donorBloodGroup, setDonorBloodGroup] = useState('O+');
  const [donorDate, setDonorDate] = useState('Demain matin (09h00 – 12h00)');

  const bloodGroupsList = ['ALL', 'O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];
  const wilayasList = ['ALL', 'Alger', 'Oran', 'Blida', 'Constantine'];

  // Filtrage dynamique
  const filteredDrives = bloodDrives.filter(drive => {
    const matchGroup = selectedGroupFilter === 'ALL' || drive.blood_groups_needed.includes(selectedGroupFilter);
    const matchWilaya = selectedWilayaFilter === 'ALL' || drive.wilaya === selectedWilayaFilter;
    return matchGroup && matchWilaya;
  });

  // Action d'engagement (Pledge)
  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    if (!donorName.trim() || !donorPhone.trim()) {
      alert(currentLang === 'ar' ? "يرجى ملء الاسم ورقم الهاتف" : "Veuillez renseigner votre nom et téléphone.");
      return;
    }

    const drive = selectedPledgeModal;
    // Incrémentation interactive du compteur
    setBloodDrives(prev => prev.map(d => {
      if (d.id === drive.id) {
        return {
          ...d,
          pledges_count: d.pledges_count + 1,
          poches_collected: Math.min(d.poches_target, d.poches_collected + 1)
        };
      }
      return d;
    }));

    // Création du Pass Donneur
    const pass = {
      id: `PASS-SANG-${Date.now().toString().slice(-6)}`,
      donorName,
      donorPhone,
      donorBloodGroup,
      donorDate,
      hospital: drive.hospital_name,
      service: drive.service,
      address: drive.address,
      contact: drive.contact_phone
    };

    setSelectedPledgeModal(null);
    setPledgeConfirmedPass(pass);
  };

  return (
    <div className="blood-donation-wrapper">
      {/* BANNIÈRE URGENCES EN DIRECT */}
      <div className="blood-alert-banner">
        <div className="blood-alert-pulse">
          <span className="blood-pulse-dot"></span>
          <span className="blood-alert-badge">
            {currentLang === 'ar' ? 'نداءات عاجلة للتبرع بالدم' : 'SOS HÔPITAUX · URGENCES DE TRANSFUSION'}
          </span>
        </div>
        <p className="blood-alert-text">
          {currentLang === 'ar'
            ? 'المستشفيات الجامعية في حاجة حرجة لفصائل (O-, A-, B-). التبرع بساعة من وقتك ينقذ حياة 3 مرضى.'
            : 'Les centres de transfusion sanguine (CTS) sont en tension critique sur les groupes O-, A- et B-. 1 don d\'1 heure sauve 3 vies.'}
        </p>
      </div>

      {/* FILTRES PAR WILAYA & GROUPE SANGUIN */}
      <div className="blood-filters-bar">
        <div className="blood-filter-section">
          <span className="blood-filter-label">
            {currentLang === 'ar' ? 'فصيلة الدم المطلوبة :' : 'Groupe sanguin recherché :'}
          </span>
          <div className="blood-pills-row">
            {bloodGroupsList.map(bg => (
              <button
                key={bg}
                type="button"
                className={`blood-pill-btn ${selectedGroupFilter === bg ? 'active' : ''}`}
                onClick={() => setSelectedGroupFilter(bg)}
              >
                {bg === 'ALL' ? (currentLang === 'ar' ? 'الكل' : 'Tous les groupes') : bg}
              </button>
            ))}
          </div>
        </div>

        <div className="blood-wilaya-select-wrap">
          <span className="blood-filter-label">
            {currentLang === 'ar' ? 'الولاية :' : 'Wilaya :'}
          </span>
          <select
            className="blood-select"
            value={selectedWilayaFilter}
            onChange={(e) => setSelectedWilayaFilter(e.target.value)}
          >
            {wilayasList.map(w => (
              <option key={w} value={w}>
                {w === 'ALL' ? (currentLang === 'ar' ? 'جميع الولايات' : 'Toutes les wilayas') : w}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* GRILLE DES CENTRES HOSPITALIERS & CTS */}
      <div className="blood-drives-grid">
        {filteredDrives.map(drive => {
          const percent = Math.round((drive.poches_collected / drive.poches_target) * 100);
          const isCritical = drive.urgency_level === 'CRITIQUE';

          return (
            <div key={drive.id} className={`blood-card ${isCritical ? 'critical' : ''}`}>
              <div className="blood-card-top">
                <div>
                  <span className={`blood-urgency-tag ${isCritical ? 'critical' : 'high'}`}>
                    {isCritical ? '⚡ URGENCE CRITIQUE' : '🚨 BESOIN ÉLEVÉ'}
                  </span>
                  <h3 className="blood-hospital-title">{drive.hospital_name}</h3>
                  <div className="blood-service-subtitle">{drive.service}</div>
                </div>
                <div className="blood-wilaya-badge">
                  📍 {drive.wilaya}
                </div>
              </div>

              {/* GROUPES RECHERCHÉS */}
              <div className="blood-groups-needed-box">
                <span className="blood-box-title">Groupes vitaux demandés :</span>
                <div className="blood-group-drops">
                  {drive.blood_groups_needed.map(bg => (
                    <span key={bg} className="blood-drop-tag">
                      🩸 <strong>{bg}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* MOTIF D'URGENCE */}
              <p className="blood-reason-text">
                {drive.urgent_reason}
              </p>

              {/* JAUGE DE PROGRESSION DES POCHES */}
              <div className="blood-progress-container">
                <div className="blood-progress-info">
                  <span><strong>{drive.poches_collected}</strong> / {drive.poches_target} poches atteintes</span>
                  <span className="blood-progress-percent">{percent}%</span>
                </div>
                <div className="blood-progress-bar">
                  <div
                    className={`blood-progress-fill ${isCritical ? 'critical' : ''}`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>

              {/* INFOS PRATIQUES */}
              <div className="blood-card-meta">
                <div>⏰ {drive.operating_hours}</div>
                <div>📞 {drive.contact_phone}</div>
                <div className="blood-pledges-stat">🤝 <strong>{drive.pledges_count}</strong> donneurs engagés</div>
              </div>

              {/* ACTION D'ENGAGEMENT */}
              <div className="blood-card-actions">
                <button
                  type="button"
                  className="btn-blood-pledge"
                  onClick={() => setSelectedPledgeModal(drive)}
                >
                  <span>🩸 Je m'engage à donner</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* CONSEILS & CONDITIONS DU DONNEUR */}
      <div className="blood-donor-guide-box">
        <div className="blood-guide-header">
          <div className="blood-guide-icon">💡</div>
          <div>
            <h4>Guide du Jeune Donneur Citoyen</h4>
            <p>Conditions simples : être âgé de 18 à 65 ans, peser plus de 50 kg, être bien hydraté et ne pas être à jeun.</p>
          </div>
        </div>
        <div className="blood-guide-badges">
          <span>✔️ Pièce d'identité requise</span>
          <span>✔️ Bilan sanguin & groupe offerts</span>
          <span>✔️ Collation réparatrice sur place</span>
          <span>✔️ 1 don = 3 vies sauvées</span>
        </div>
      </div>

      {/* MODAL : CONFIRMATION D'ENGAGEMENT DE DON */}
      {selectedPledgeModal && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setSelectedPledgeModal(null)}></div>
          <div className="modal-card" style={{ maxWidth: '520px', borderRadius: '18px', padding: '28px' }}>
            <button className="modal-x" onClick={() => setSelectedPledgeModal(null)}>✕</button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#fee2e2', color: '#b91c1c', display: 'grid', placeItems: 'center', margin: '0 auto 12px', fontSize: '24px' }}>
                🩸
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#b91c1c', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Engagement Solidaire Vital
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-navy)', margin: '4px 0 6px' }}>
                {selectedPledgeModal.hospital_name}
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                {selectedPledgeModal.service} · {selectedPledgeModal.address}
              </p>
            </div>

            <form onSubmit={handlePledgeSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Nom & Prénom</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Nadia Mansouri"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '9px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>N° Téléphone</label>
                  <input
                    type="tel"
                    required
                    placeholder="0550 12 34 56"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '9px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Votre groupe sanguin</label>
                  <select
                    value={donorBloodGroup}
                    onChange={(e) => setDonorBloodGroup(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '9px', border: '1px solid #cbd5e1', fontSize: '13.5px', background: '#fff' }}
                  >
                    {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'Je ne le connais pas'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Créneau envisagé</label>
                  <select
                    value={donorDate}
                    onChange={(e) => setDonorDate(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '9px', border: '1px solid #cbd5e1', fontSize: '13.5px', background: '#fff' }}
                  >
                    <option value="Aujourd'hui après-midi">Aujourd'hui après-midi</option>
                    <option value="Demain matin (09h00 – 12h00)">Demain matin (09h00 – 12h00)</option>
                    <option value="Ce samedi matin">Ce samedi matin</option>
                    <option value="En semaine prochaine">En semaine prochaine</option>
                  </select>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', fontSize: '12px', color: '#475569', marginBottom: '20px', borderLeft: '4px solid #b91c1c' }}>
                ⚠️ <strong>Rappel médical bienveillant :</strong> Veillez à boire au moins 500ml d'eau avant votre passage et évitez les efforts physiques intenses après le don.
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setSelectedPledgeModal(null)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{ background: '#b91c1c', color: '#fff', padding: '12px 24px', fontWeight: 700, borderRadius: '10px', border: 'none', cursor: 'pointer' }}
                >
                  Valider mon engagement & Obtenir mon Pass
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL : PASS DONNEUR OFFICIEL GÉNÉRÉ */}
      {pledgeConfirmedPass && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setPledgeConfirmedPass(null)}></div>
          <div className="modal-card" style={{ maxWidth: '480px', borderRadius: '20px', padding: '28px', textAlign: 'center', background: '#ffffff' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'grid', placeItems: 'center', margin: '0 auto 12px', fontSize: '28px' }}>
              ✓
            </div>
            <span style={{ background: '#fef2f2', color: '#991b1b', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
              PASS CITOYEN CONFIRMÉ
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-navy)', margin: '10px 0 4px' }}>
              Merci pour votre générosité, {pledgeConfirmedPass.donorName} !
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
              Votre engagement a été transmis au Centre de Transfusion Sanguine.
            </p>

            <div style={{ border: '2px dashed #cbd5e1', borderRadius: '14px', padding: '16px', background: '#fafaf9', textAlign: 'left', marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid #e7e5e4', paddingBottom: '6px' }}>
                <span style={{ fontSize: '12px', color: '#78716c' }}>Code Pass Donneur :</span>
                <strong style={{ fontSize: '13px', color: '#b91c1c' }}>{pledgeConfirmedPass.id}</strong>
              </div>
              <div style={{ fontSize: '13px', color: '#292524', marginBottom: '4px' }}>
                <strong>Établissement :</strong> {pledgeConfirmedPass.hospital}
              </div>
              <div style={{ fontSize: '12px', color: '#57534e', marginBottom: '4px' }}>
                <strong>Adresse :</strong> {pledgeConfirmedPass.address}
              </div>
              <div style={{ fontSize: '12px', color: '#57534e', marginBottom: '4px' }}>
                <strong>Créneau choisi :</strong> {pledgeConfirmedPass.donorDate}
              </div>
              <div style={{ fontSize: '12px', color: '#57534e' }}>
                <strong>Groupe déclaré :</strong> <span style={{ color: '#b91c1c', fontWeight: 700 }}>{pledgeConfirmedPass.donorBloodGroup}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setPledgeConfirmedPass(null)}
              >
                Fermer
              </button>
              <button
                type="button"
                className="btn"
                style={{ background: 'var(--primary-teal)', color: '#fff', borderRadius: '10px' }}
                onClick={() => {
                  if (typeof window !== 'undefined') window.print();
                }}
              >
                Imprimer mon Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
