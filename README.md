# ATHER

**Plateforme de mise en relation entre associations et bénévoles** — et d'organisation d'événements associatifs.

ATHER connecte les associations (qui cherchent des bénévoles / organisent des événements) avec des bénévoles (qui veulent s'engager), grâce à un **matching intelligent (IA)**.

## 🧱 Stack technique
- **Frontend** : React (Vite) → dossier [`Ather_UI/`](./Ather_UI)
- **Backend** : Django + Django REST Framework → dossier [`Ather_backend/`](./Ather_backend)
- **Base de données** : MySQL
- **Moteur IA** : Python (service de matching)

## 📁 Structure du dépôt
```
ATHER/
├── Ather_UI/         # Frontend React (Vite)
└── Ather_backend/    # Backend Django (API REST)
    ├── ather/        # Configuration du projet
    ├── core/         # Application principale
    ├── requirements.txt
    └── .env.example
```

## 🚀 Lancer le projet

### Backend (Django)
```bash
cd Ather_backend
python -m venv venv
venv\Scripts\activate        # Windows  (Linux/Mac : source venv/bin/activate)
pip install -r requirements.txt
copy .env.example .env       # puis remplir les identifiants MySQL
python manage.py migrate
python manage.py runserver   # http://127.0.0.1:8000
```
> Prérequis : un serveur **MySQL** actif + une base `ather_db` créée.

### Frontend (React / Vite)
```bash
cd Ather_UI
npm install
npm run dev                  # http://localhost:5173
```

## 🌿 Convention de travail (Git)
- Branche principale : `main`
- Créer une branche par fonctionnalité : `feature/nom-de-la-fonctionnalite`
- Faire des Pull Requests pour fusionner dans `main`

## 👥 Acteurs
Association · Bénévole · Administrateur · Visiteur
