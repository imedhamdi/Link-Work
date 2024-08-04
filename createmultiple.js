const fs = require('fs');
const mysql = require('mysql2/promise');

async function main() {
  // Configuration de la connexion à votre base de données MySQL
  const connection = await mysql.createConnection({
    host: 'localhost', // Ou l'adresse de votre serveur MySQL
    user: 'root',
    password: '',
    database: 'job_board'
  });

  // Lecture du fichier JSON
  fs.readFile('votre_fichier_cible.json', 'utf8', async (err, data) => {
    if (err) throw err;

    try {
      const offres = JSON.parse(data);

      // Préparation de la requête d'insertion
      const sql = `
        INSERT INTO offres (
          intitule, description, date_creation, date_actualisation, 
          lieu_travail_libelle, entreprise_nom, type_contrat, experience_libelle, 
          formation_niveauLibelle, competences_libelle, salaire_libelle, 
          duree_travail_Libelle, dureeTravailLibelleConverti, alternance, 
          nombre_postes, secteur_activite_Libelle
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      // Insertion des données dans la table
      for (const offre of offres) {
        const values = [
          offre.intitule,
          offre.description,
          offre.dateCreation,
          offre.dateActualisation,
          offre.lieuTravail?.libelle || null, // Gérer le cas où lieuTravail est absent
          offre.entreprise?.nom || null, // Gérer le cas où entreprise est absent
          offre.typeContrat,
          offre.experienceLibelle,
          offre.formations?.[0]?.niveauLibelle || null, // Prendre le premier élément de formations s'il existe
          offre.competences?.map(c => c.libelle).join(', ') || null, // Joindre les compétences en une chaîne
          offre.salaire?.libelle || null,
          offre.dureeTravailLibelle,
          offre.dureeTravailLibelleConverti,
          offre.alternance ? 'OUI' : 'NON', // Convertir le booléen en 'OUI' ou 'NON'
          offre.nombrePostes,
          offre.secteurActiviteLibelle
        ];

        try {
          await connection.execute(sql, values);
          console.log("Offre insérée avec succès !");
        } catch (insertError) {
          console.error("Erreur lors de l'insertion de l'offre :", insertError);
        }
      }

      // Fermer la connexion à la base de données
      await connection.end();
    } catch (parseError) {
      console.error("Erreur lors de l'analyse du JSON :", parseError);
    }
  });
}

// Appeler la fonction principale
main().catch(err => {
  console.error("Erreur lors de l'exécution du script :", err);
});
