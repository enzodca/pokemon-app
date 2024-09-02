# Pokémon App

Bienvenue dans l'application Pokémon-app ! Ce projet est une application web full-stack permettant aux utilisateurs de gérer des Pokémon via une interface conviviale. Vous pouvez ajouter, lister, afficher les détails, et mettre à jour des Pokémon.

## Fonctionnalités

### 📝 Fonctionnalités principales

1. **Ajouter un nouveau Pokémon** :

   - Les utilisateurs peuvent ajouter un Pokémon avec des informations telles que le numéro de Pokédex, le nom, le type, la génération, le sexe, et une image.
   - Un message de confirmation est affiché en cas de succès ou d'erreur.
2. **Lister les Pokémon** :

   - Les utilisateurs peuvent voir une liste paginée des Pokémon avec des détails de base comme le nom, le type et la génération.
   - Un système de recherche permet de filtrer les Pokémon par nom.
3. **Afficher les détails d'un Pokémon** :

   - En cliquant sur un Pokémon, les utilisateurs peuvent voir des détails complets et mis à jour du Pokémon sélectionné.
4. **Mettre à jour les informations d'un Pokémon** :

   - Les utilisateurs peuvent modifier les informations d'un Pokémon et voir les changements sauvegardés.

### 💡 Fonctionnalités Bonus

- **Recherche de Pokémon** :
  - Les utilisateurs peuvent rechercher des Pokémon par nom à l'aide d'un système de recherche intégré.

## Architecture du projet

Le projet est divisé en deux parties principales : le frontend et le backend.

### Backend

Le backend est construit avec Node.js et expose une API REST. Les principales fonctionnalités sont :

- **Contrôleurs** : Gèrent les opérations CRUD pour les Pokémon.
- **Modèles** : Définissent le schéma de la base de données avec Mongoose.
- **Routes** : Définissent les endpoints de l'API pour interagir avec les Pokémon.
- **Dockerfile** : Contient les instructions pour construire l'image Docker du backend.
- **MongoDB** : Utilisé pour stocker les données des Pokémon.

### Frontend

Le frontend est une application React utilisant Vite pour la construction. Les fonctionnalités incluent :

- **Pages** : Composants pour ajouter, modifier, afficher, et lister les Pokémon.
- **App.jsx** : Le composant principal de l'application.
- **Router.jsx** : Configure les routes pour naviguer dans l'application.
- **Dockerfile** : Contient les instructions pour construire l'image Docker du frontend.

## Instructions pour exécuter le projet

### Prérequis

- Docker et Docker Compose doivent être installés sur votre machine.

### Déploiement avec Docker

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/enzodca/pokemon-app.git
   cd pokemon-app
   ```
2. Construisez et lancez les conteneurs :

   ```bash
   docker-compose up --build
   ```
3. Accédez à l'application via [http://localhost:80]() pour le frontend et [http://localhost:5000](http://localhost:5000) pour le backend.

## Choix techniques

* **Backend** : Utilisation de Node.js avec Express pour l'API REST. Mongoose est utilisé pour interagir avec MongoDB. Docker est utilisé pour le déploiement.
* **Frontend** : Utilisation de React avec Vite pour une expérience utilisateur fluide. La gestion des routes est faite avec React Router.

## Auteurs

* **Enzo D.** - [enzodca](https://github.com/enzodca)
