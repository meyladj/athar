CREATE DATABASE IF NOT EXISTS ather_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ather_db;

CREATE TABLE IF NOT EXISTS utilisateur (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(150) UNIQUE NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL,
  type ENUM('benevole','association','admin') NOT NULL,
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS wilaya (id INT PRIMARY KEY, nom VARCHAR(60) NOT NULL) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS domaine (id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(60) UNIQUE NOT NULL) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS competence (id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(60) UNIQUE NOT NULL) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS langue (id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(40) UNIQUE NOT NULL) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS benevole (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  utilisateur_id BIGINT NOT NULL UNIQUE,
  prenom VARCHAR(80) NOT NULL, nom VARCHAR(80) NOT NULL,
  date_naissance DATE, genre VARCHAR(40), telephone VARCHAR(20),
  wilaya_id INT, commune VARCHAR(80), adresse VARCHAR(200),
  disponibilite VARCHAR(40), experience TEXT,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE,
  FOREIGN KEY (wilaya_id) REFERENCES wilaya(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS association (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  utilisateur_id BIGINT NOT NULL UNIQUE,
  nom VARCHAR(150) NOT NULL, num_agrement VARCHAR(60) NOT NULL,
  date_creation_association DATE, responsable VARCHAR(120), telephone VARCHAR(20),
  wilaya_id INT, commune VARCHAR(80), adresse VARCHAR(200), site_web VARCHAR(200),
  domaine_id INT, description TEXT, logo VARCHAR(255), document_agrement VARCHAR(255) NOT NULL,
  statut_verification ENUM('en_attente','verifiee','refusee') DEFAULT 'en_attente',
  date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE,
  FOREIGN KEY (wilaya_id) REFERENCES wilaya(id), FOREIGN KEY (domaine_id) REFERENCES domaine(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS mission (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  association_id BIGINT NOT NULL, titre VARCHAR(150) NOT NULL, description TEXT,
  domaine_id INT, wilaya_id INT, commune VARCHAR(80), date_mission DATE,
  heure_debut TIME, heure_fin TIME, places_total INT NOT NULL, places_restantes INT NOT NULL,
  statut ENUM('ouverte','complete','terminee','annulee') DEFAULT 'ouverte',
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (association_id) REFERENCES association(id) ON DELETE CASCADE,
  FOREIGN KEY (domaine_id) REFERENCES domaine(id), FOREIGN KEY (wilaya_id) REFERENCES wilaya(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS candidature (
  id BIGINT AUTO_INCREMENT PRIMARY KEY, mission_id BIGINT NOT NULL, benevole_id BIGINT NOT NULL,
  message TEXT, cv VARCHAR(255), statut ENUM('en_attente','acceptee','refusee') DEFAULT 'en_attente',
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP, UNIQUE KEY uq_candidature (mission_id,benevole_id),
  FOREIGN KEY (mission_id) REFERENCES mission(id) ON DELETE CASCADE,
  FOREIGN KEY (benevole_id) REFERENCES benevole(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS benevole_competence (benevole_id BIGINT NOT NULL, competence_id INT NOT NULL, PRIMARY KEY (benevole_id, competence_id), FOREIGN KEY (benevole_id) REFERENCES benevole(id) ON DELETE CASCADE, FOREIGN KEY (competence_id) REFERENCES competence(id));
CREATE TABLE IF NOT EXISTS benevole_langue (benevole_id BIGINT NOT NULL, langue_id INT NOT NULL, PRIMARY KEY (benevole_id, langue_id), FOREIGN KEY (benevole_id) REFERENCES benevole(id) ON DELETE CASCADE, FOREIGN KEY (langue_id) REFERENCES langue(id));
CREATE TABLE IF NOT EXISTS benevole_domaine (benevole_id BIGINT NOT NULL, domaine_id INT NOT NULL, PRIMARY KEY (benevole_id, domaine_id), FOREIGN KEY (benevole_id) REFERENCES benevole(id) ON DELETE CASCADE, FOREIGN KEY (domaine_id) REFERENCES domaine(id));
