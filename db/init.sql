CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `offres` (
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

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_token_expires` datetime DEFAULT NULL,
  `view_count` int(11) DEFAULT 0,
  `resume_path` varchar(255) DEFAULT NULL,
  `situation_actuelle` enum('en_poste','sans_emploi') DEFAULT NULL,
  `disponibilite` enum('immediate','a_convenir') DEFAULT NULL,
  `experience` enum('debutant','2-3_ans','4-10_ans','10_ans_et_plus') DEFAULT NULL,
  `qualification` enum('BEP/CAP','Bac','Bac+2','Bac+3/4','Bac+5','Cadre_dirigeant') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `offres`
  ADD PRIMARY KEY (`id_offre`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `offres`
  MODIFY `id_offre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
