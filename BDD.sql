CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `user_type` enum('job_seeker','employer') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_token_expires` datetime DEFAULT NULL,
  `view_count` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `offres` (
  `id_offre` int(11) NOT NULL,
  `intitule` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `date_creation` datetime DEFAULT NULL,
  `date_actualisation` datetime DEFAULT NULL,
  `lieu_travail_libelle` varchar(255) DEFAULT NULL,
  `entreprise_nom` varchar(255) DEFAULT NULL,
  `type_contrat` varchar(255) DEFAULT NULL,
  `experience_libelle` varchar(255) DEFAULT NULL,
  `formation_niveauLibelle` varchar(255) DEFAULT NULL,
  `competences_libelle` varchar(255) DEFAULT NULL,
  `salaire_libelle` varchar(255) DEFAULT NULL,
  `duree_travail_Libelle` varchar(50) DEFAULT NULL,
  `dureeTravailLibelleConverti` varchar(50) DEFAULT NULL,
  `alternance` tinyint(1) DEFAULT NULL,
  `nombre_postes` int(11) DEFAULT NULL,
  `secteur_activite_Libelle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `offres`
  ADD PRIMARY KEY (`id_offre`);