# Guide de contribution — ATHER

Ce guide explique **comment l'équipe travaille ensemble** sur ce dépôt. À lire par tous les membres.

##  Stratégie de branches
- **`main`** → branche stable (ne jamais coder directement dessus) 
- **`feature/<nom>`** → une branche par nouvelle fonctionnalité
  *(ex : `feature/inscription-benevole`, `feature/matching-ia`)*
- **`fix/<nom>`** → une branche par correction de bug
  *(ex : `fix/login-erreur`)*

##  Le workflow (à chaque fonctionnalité)
```bash
# 1. Partir de main à jour
git checkout main
git pull origin main

# 2. Créer sa branche
git checkout -b feature/ma-fonctionnalite

# 3. Coder, puis committer
git add .
git commit -m "feat: ajout du formulaire d'inscription bénévole"

# 4. Pousser sa branche
git push -u origin feature/ma-fonctionnalite

# 5. Ouvrir une Pull Request (PR) sur GitHub → faire relire → fusionner dans main
```

## ️ Convention de messages de commit
Format : `type: description courte`

| Type | Quand |
|------|-------|
| `feat` | nouvelle fonctionnalité |
| `fix` | correction de bug |
| `docs` | documentation |
| `style` | mise en forme (sans logique) |
| `refactor` | réorganisation du code |
| `test` | ajout de tests |

Exemples : `feat: page de recherche de missions` · `fix: filtre par wilaya`

##  Règles d'équipe
- **Toujours** passer par une **Pull Request** pour fusionner dans `main` (pas de push direct).
- **Faire relire** sa PR par au moins un autre membre.
- Committer **souvent** avec des messages clairs.
- Ne jamais committer de secrets (`.env`, mots de passe, clés).

##  Démarrer le projet
Voir le [README](./README.md) — sections Backend (Django) et Frontend (React).
