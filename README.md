# Pokémon App

## Contexte

Cette application permet de gérer une liste de Pokémon. Les utilisateurs peuvent ajouter, éditer, supprimer, et visualiser des détails sur les Pokémon. L'application est construite en utilisant React pour le frontend et Node.js avec MongoDB pour le backend.

## Fonctionnalités

1. **Ajouter un Pokémon**

   - Formulaire pour saisir des informations sur un Pokémon.
   - Message de confirmation en cas de succès ou d'erreur.
2. **Lister des Pokémon**

   - Affichage de la liste des Pokémon avec pagination.
   - Système de recherche et tri.
3. **Afficher les détails d’un Pokémon**

   - Affichage des détails d'un Pokémon spécifique.
4. **Mettre à jour les informations d’un Pokémon**

   - Formulaire pour éditer les informations d'un Pokémon existant.

## Technologie

- **Frontend** : React
- **Backend** : Node.js, Express
- **Base de données** : MongoDB
- **Containerisation** : Docker

## Déploiement

1. **Backend**

   - Naviguez dans le répertoire `backend/`.
   - Construisez et lancez les conteneurs Docker :
     ```bash
     docker-compose up --build
     ```
   - L'API sera accessible à `http://localhost:5000`.
2. **Frontend**

   - Naviguez dans le répertoire `frontend/`.
   - Installez les dépendances et lancez l'application :
     ```bash
     npm install
     npm run dev
     ```
   - L'application frontend sera accessible à `http://localhost:5173`.

## Tests

Vous pouvez ajouter des tests pour vérifier les fonctionnalités de l'application et assurer la qualité du code.

## Choix Techniques

- **Docker** : Utilisé pour la conteneurisation afin d'assurer une réplicabilité facile.
- **React** : Framework pour le frontend pour une interface utilisateur réactive.
- **Node.js avec Express** : Pour le serveur backend.
- **MongoDB** : Base de données NoSQL pour le stockage des Pokémon.

## Documentation

- **Endpoints API** :
  - `POST /api/pokemons` : Ajouter un nouveau Pokémon.
  - `GET /api/pokemons` : Lister les Pokémon avec pagination.
  - `GET /api/pokemons/:numero` : Récupérer un Pokémon par son numéro.
  - `PUT /api/pokemons/:numero` : Mettre à jour les informations d'un Pokémon.
  - `DELETE /api/pokemons/:numero` : Supprimer un Pokémon par son numéro.
