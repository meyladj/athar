USE ather_db;

INSERT IGNORE INTO wilaya (id, nom) VALUES
(1,'Adrar'),(2,'Chlef'),(3,'Laghouat'),(4,'Oum El Bouaghi'),(5,'Batna'),(6,'Béjaïa'),(7,'Biskra'),(8,'Béchar'),(9,'Blida'),(10,'Bouira'),(11,'Tamanrasset'),(12,'Tébessa'),(13,'Tlemcen'),(14,'Tiaret'),(15,'Tizi Ouzou'),(16,'Alger'),(17,'Djelfa'),(18,'Jijel'),(19,'Sétif'),(20,'Saïda'),(21,'Skikda'),(22,'Sidi Bel Abbès'),(23,'Annaba'),(24,'Guelma'),(25,'Constantine'),(26,'Médéa'),(27,'Mostaganem'),(28,'M’Sila'),(29,'Mascara'),(30,'Ouargla'),(31,'Oran'),(32,'El Bayadh'),(33,'Illizi'),(34,'Bordj Bou Arréridj'),(35,'Boumerdès'),(36,'El Tarf'),(37,'Tindouf'),(38,'Tissemsilt'),(39,'El Oued'),(40,'Khenchela'),(41,'Souk Ahras'),(42,'Tipaza'),(43,'Mila'),(44,'Aïn Defla'),(45,'Naâma'),(46,'Aïn Témouchent'),(47,'Ghardaïa'),(48,'Relizane'),(49,'Timimoun'),(50,'Bordj Badji Mokhtar'),(51,'Ouled Djellal'),(52,'Béni Abbès'),(53,'In Salah'),(54,'In Guezzam'),(55,'Touggourt'),(56,'Djanet'),(57,'El Meghaier'),(58,'El Meniaa');
INSERT IGNORE INTO domaine (nom) VALUES ('Solidarité'),('Éducation'),('Environnement'),('Santé');
INSERT IGNORE INTO competence (nom) VALUES ('Informatique'),('Enseignement'),('Santé / Secourisme'),('Communication'),('Logistique'),('Traduction'),('Design'),('Animation'),('Photographie');
INSERT IGNORE INTO langue (nom) VALUES ('Arabe'),('Français'),('Anglais'),('Tamazight');

DELIMITER //
CREATE PROCEDURE sp_traiter_candidature(IN p_cand BIGINT, IN p_decision VARCHAR(10))
BEGIN
  DECLARE v_mission BIGINT;
  DECLARE v_statut VARCHAR(15);
  SELECT mission_id, statut INTO v_mission, v_statut FROM candidature WHERE id = p_cand;
  IF v_statut <> 'en_attente' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Candidature déjà traitée'; END IF;
  IF p_decision NOT IN ('acceptee','refusee') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Décision invalide'; END IF;
  UPDATE candidature SET statut = p_decision WHERE id = p_cand;
  IF p_decision = 'acceptee' THEN UPDATE mission SET places_restantes = GREATEST(places_restantes - 1, 0) WHERE id = v_mission; UPDATE mission SET statut = 'complete' WHERE id = v_mission AND places_restantes <= 0; END IF;
END//
DELIMITER ;
