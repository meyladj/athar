import React, { useState } from 'react';

const INITIAL_LEDGER_ENTRIES = [
  {
    id: 'ATHAR-TRC-2026-0842',
    entity_name: 'Centre de Transfusion Sanguine · CHU Mustapha',
    entity_type: 'Hôpital Public Universitaire',
    category: 'Don de Sang',
    wilaya: 'Alger',
    date: '18 Septembre 2026',
    quantity_delivered: '140 poches homologuées',
    beneficiaries: 'Services Réanimation, Hématologie & Pédiatrie',
    hash: '0x8F9B24...91C3E4',
    verifier: 'Dr. A. Benali · Validation Médicale CTS',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    notes: 'Campagne spéciale urgence jeunesse. 140 poches fractionnées en culots globulaires et plasma frais congelé.'
  },
  {
    id: 'ATHAR-TRC-2026-0839',
    entity_name: 'Association Green Future Algérie',
    entity_type: 'Association Écologique Nationale',
    category: 'Reforestation & Climat',
    wilaya: 'Alger (Zéralda)',
    date: '16 Septembre 2026',
    quantity_delivered: '450 arbres plantés & protégés',
    beneficiaries: 'Forêt récréative de Zéralda & Écosystème littoral',
    hash: '0x3C41D8...7A2E9F',
    verifier: 'Conservation des Forêts de la Wilaya d\'Alger',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    notes: 'Plants d\'arbres fournis par la pépinière nationale. Pose de tuteurs et arrosage de reprise validés.'
  },
  {
    id: 'ATHAR-TRC-2026-0831',
    entity_name: 'Association El Baraka Algérie',
    entity_type: 'Organisation Humanitaire Agréée',
    category: 'Aide Alimentaire & Dignité',
    wilaya: 'Médéa',
    date: '14 Septembre 2026',
    quantity_delivered: '250 couffins alimentaires complets',
    beneficiaries: '250 familles vulnérables en zones d\'ombre',
    hash: '0x99E2F1...11B0C5',
    verifier: 'Comité de Suivi Citoyen & Représentants Locaux',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    notes: 'Colis contenant farine, huile, semoule, légumineuses et conserves. Remise directe aux chefs de famille.'
  },
  {
    id: 'ATHAR-TRC-2026-0825',
    entity_name: 'Club Robotique & Tech USTHB',
    entity_type: 'Collectif Universitaire Bab Ezzouar',
    category: 'Éducation Jeunesse',
    wilaya: 'Alger',
    date: '12 Septembre 2026',
    quantity_delivered: '12 kits robotiques & 35 élèves formés',
    beneficiaries: 'Élèves du cycle moyen (Casbah d\'Alger)',
    hash: '0x55B7C2...33D8A1',
    verifier: 'Direction de l\'Établissement Scolaire Émîr Abdelkader',
    status: 'VERIFIED',
    proof_image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    notes: 'Matériel robotique financé par collecte solidaire tech. Logiciels open-source installés sur ordinateurs réhabilités.'
  }
];

export default function TraceabilityLedger({ currentLang = 'fr', isAssociation = false, onToast }) {
  const [entries, setEntries] = useState(INITIAL_LEDGER_ENTRIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('ALL');
  const [selectedProofModal, setSelectedProofModal] = useState(null);
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);

  // Formulaire nouvelle preuve (accessible aux associations)
  const [newTitle, setNewTitle] = useState('');
  const [newQty, setNewQty] = useState('');
  const [newBeneficiaries, setNewBeneficiaries] = useState('');
  const [newWilaya, setNewWilaya] = useState('Alger');
  const [newCategory, setNewCategory] = useState('Aide Alimentaire & Dignité');
  const [newNotes, setNewNotes] = useState('');

  const filteredEntries = entries.filter(e => {
    const matchSearch = e.entity_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        e.beneficiaries.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        e.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchWilaya = selectedWilaya === 'ALL' || e.wilaya.includes(selectedWilaya);
    return matchSearch && matchWilaya;
  });

  const handleAddNewProof = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newQty.trim()) return;

    const newRecord = {
      id: `ATHAR-TRC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      entity_name: newTitle,
      entity_type: 'Organisation Certifiée Athar',
      category: newCategory,
      wilaya: newWilaya,
      date: 'Aujourd\'hui',
      quantity_delivered: newQty,
      beneficiaries: newBeneficiaries || 'Bénéficiaires de la mission',
      hash: `0x${Math.random().toString(16).slice(2, 10).toUpperCase()}...${Math.random().toString(16).slice(2, 8).toUpperCase()}`,
      verifier: 'Validation Numérique Instantanée Athar',
      status: 'VERIFIED',
      proof_image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
      notes: newNotes || 'Action de terrain enregistrée et certifiée avec succès.'
    };

    setEntries(prev => [newRecord, ...prev]);
    setIsAddEntryModalOpen(false);
    setNewTitle('');
    setNewQty('');
    setNewBeneficiaries('');
    setNewNotes('');
    if (onToast) onToast("Preuve d'impact certifiée et inscrite dans le registre public ! 🛡️");
  };

  return (
    <div className="traceability-ledger-wrapper">
      {/* BANNIÈRE STATISTIQUES GLOBALES DE TRAÇABILITÉ */}
      <div className="traceability-stats-grid">
        <div className="traceability-stat-card">
          <div className="trace-stat-num">14 850 h</div>
          <div className="trace-stat-label">Bénévolat certifié</div>
        </div>
        <div className="traceability-stat-card">
          <div className="trace-stat-num" style={{ color: '#b91c1c' }}>1 420</div>
          <div className="trace-stat-label">Poches de sang tracées</div>
        </div>
        <div className="traceability-stat-card">
          <div className="trace-stat-num" style={{ color: 'var(--primary-teal)' }}>18 500</div>
          <div className="trace-stat-label">Arbres recensés</div>
        </div>
        <div className="traceability-stat-card">
          <div className="trace-stat-num" style={{ color: 'var(--accent-gold)' }}>32 000</div>
          <div className="trace-stat-label">Paniers & aides distribués</div>
        </div>
      </div>

      {/* EN-TÊTE DU REGISTRE AVEC RECHERCHE */}
      <div className="traceability-header-row">
        <div>
          <div className="traceability-badge-certified">
            <span className="trace-shield-icon">🛡️</span>
            <span>REGISTRE PUBLIC DE CONFIANCE & TRANSPARENCE</span>
          </div>
          <h3 className="traceability-main-title">
            Preuves d'impact & Traçabilité des dons
          </h3>
          <p className="traceability-main-desc">
            Chaque action menée sur le terrain par les associations, universités et hôpitaux est archivée avec ses justificatifs, volumes et signatures de validation.
          </p>
        </div>

        {isAssociation && (
          <button
            type="button"
            className="btn btn-green"
            onClick={() => setIsAddEntryModalOpen(true)}
            style={{ borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>+ Certifier une action</span>
          </button>
        )}
      </div>

      {/* BARRE DE RECHERCHE ET WILAYA */}
      <div className="traceability-filter-box">
        <div className="traceability-search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Rechercher une organisation, une cause ou un bénéficiaire..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="traceability-wilaya-select"
          value={selectedWilaya}
          onChange={(e) => setSelectedWilaya(e.target.value)}
        >
          <option value="ALL">Toutes les wilayas</option>
          <option value="Alger">Alger</option>
          <option value="Oran">Oran</option>
          <option value="Blida">Blida</option>
          <option value="Médéa">Médéa</option>
          <option value="Constantine">Constantine</option>
        </select>
      </div>

      {/* TABLEAU / CARTES DE TRAÇABILITÉ */}
      <div className="traceability-records-list">
        {filteredEntries.map(record => (
          <div key={record.id} className="traceability-record-card">
            <div className="trace-record-header">
              <div>
                <span className="trace-id-badge">{record.id}</span>
                <span className="trace-date">{record.date} · 📍 {record.wilaya}</span>
              </div>
              <div className="trace-status-pill">
                <span className="trace-dot-verified"></span>
                <span>Sceau Athar Vérifié</span>
              </div>
            </div>

            <div className="trace-record-content">
              <div className="trace-org-info">
                <h4>{record.entity_name}</h4>
                <div className="trace-org-type">{record.entity_type} · <strong>{record.category}</strong></div>
              </div>

              <div className="trace-metrics-box">
                <div className="trace-metric-item">
                  <span className="trace-metric-label">Volume certifié :</span>
                  <strong className="trace-metric-value">{record.quantity_delivered}</strong>
                </div>
                <div className="trace-metric-item">
                  <span className="trace-metric-label">Destinataires :</span>
                  <span className="trace-metric-benef">{record.beneficiaries}</span>
                </div>
              </div>

              <div className="trace-verifier-info">
                <span>Validation : <strong>{record.verifier}</strong></span>
                <code className="trace-hash-code">{record.hash}</code>
              </div>
            </div>

            <div className="trace-record-footer">
              <button
                type="button"
                className="btn-view-proof"
                onClick={() => setSelectedProofModal(record)}
              >
                <span>📜 Voir le dossier de preuve & photos</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL : DOSSIER DE PREUVE D'IMPACT DÉTAILLÉ */}
      {selectedProofModal && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setSelectedProofModal(null)}></div>
          <div className="modal-card" style={{ maxWidth: '620px', borderRadius: '20px', padding: '26px' }}>
            <button className="modal-x" onClick={() => setSelectedProofModal(null)}>✕</button>

            <div style={{ textAlign: 'left', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', background: '#dcfce7', color: '#166534', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                  CERTIFICAT DE TRAÇABILITÉ CITOYENNE
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedProofModal.id}</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-navy)', margin: '4px 0' }}>
                {selectedProofModal.entity_name}
              </h3>
              <div style={{ fontSize: '13px', color: '#64748b' }}>
                {selectedProofModal.category} · {selectedProofModal.wilaya} · {selectedProofModal.date}
              </div>
            </div>

            <div style={{ marginBottom: '16px', borderRadius: '14px', overflow: 'hidden', height: '230px', background: '#000' }}>
              <img
                src={selectedProofModal.proof_image}
                alt={selectedProofModal.entity_name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px 16px', marginBottom: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px', marginBottom: '10px' }}>
                <div><strong>Volume délivré :</strong> {selectedProofModal.quantity_delivered}</div>
                <div><strong>Statut :</strong> 100% Vérifié & conforme</div>
                <div><strong>Bénéficiaires :</strong> {selectedProofModal.beneficiaries}</div>
                <div><strong>Validé par :</strong> {selectedProofModal.verifier}</div>
              </div>
              <div style={{ fontSize: '12.5px', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
                {selectedProofModal.notes}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
              <div>Sceau cryptographique : <code>{selectedProofModal.hash}</code></div>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSelectedProofModal(null)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL : CERTIFIER UNE NOUVELLE ACTION (ASSOCIATION) */}
      {isAddEntryModalOpen && (
        <div className="modal on" role="dialog" aria-modal="true">
          <div className="modal-bg" onClick={() => setIsAddEntryModalOpen(false)}></div>
          <div className="modal-card" style={{ maxWidth: '540px', borderRadius: '18px', padding: '24px' }}>
            <button className="modal-x" onClick={() => setIsAddEntryModalOpen(false)}>✕</button>

            <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--primary-navy)', margin: '0 0 6px' }}>
              Publier une Preuve d'Impact Certifiée
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>
              Inscrivez votre mission accomplie au registre public pour garantir une transparence absolue à vos bénévoles et donateurs.
            </p>

            <form onSubmit={handleAddNewProof}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Nom de l'organisation / Établissement</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Croissant Rouge Algérien - Comité Alger"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Quantité / Volume aidé</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 120 couffins / 80 poches"
                    value={newQty}
                    onChange={(e) => setNewQty(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Wilaya</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Alger, Blida..."
                    value={newWilaya}
                    onChange={(e) => setNewWilaya(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Public bénéficiaire</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Enfants hospitalisés, familles démunies..."
                  value={newBeneficiaries}
                  onChange={(e) => setNewBeneficiaries(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Notes & détails de traçabilité</label>
                <textarea
                  rows={3}
                  placeholder="Détails du transport, bordereau de livraison, témoignage..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', resize: 'vertical' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setIsAddEntryModalOpen(false)}>Annuler</button>
                <button type="submit" className="btn btn-green" style={{ borderRadius: '9px' }}>Inscrire au Registre Public 🛡️</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
