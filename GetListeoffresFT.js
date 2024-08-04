const fs = require('fs');


function transformerOffre(offreInitiale) {
  const offreCible = {
    intitule: offreInitiale.intitule || "",
    description: offreInitiale.description || "",
    dateCreation: offreInitiale.dateCreation || "",
    dateActualisation: offreInitiale.dateActualisation || "",
    lieuTravail: {
      libelle: offreInitiale.lieuTravail?.libelle || ""
    },
    entreprise: {
      nom: offreInitiale.entreprise?.nom || ""
    },
    typeContrat: offreInitiale.typeContrat || "",
    experienceLibelle: offreInitiale.experienceLibelle || "",
    formations: (offreInitiale.formations || []).map(formation => ({
      niveauLibelle: formation.niveauLibelle || ""
    })),
    competences: (offreInitiale.competences || []).map(competence => ({
      libelle: competence.libelle || ""
    })),
    salaire: {
      libelle: offreInitiale.salaire?.libelle || ""
    },
    dureeTravailLibelle: offreInitiale.dureeTravailLibelle || "",
    dureeTravailLibelleConverti: offreInitiale.dureeTravailLibelleConverti || "",
    alternance: offreInitiale.alternance ? "OUI" : "NON", // Conversion booléen -> chaîne
    nombrePostes: offreInitiale.nombrePostes || 1,
    secteurActiviteLibelle: offreInitiale.secteurActiviteLibelle || ""
  };
  return offreCible;
}

// Lecture du fichier JSON initial
fs.readFile('response.json', 'utf8', (err, data) => {
  if (err) throw err;

  try {
    const donneesInitiales = JSON.parse(data);
    const offresInitiales = donneesInitiales.resultats; // Accéder au tableau "resultats"

    // Filtrer les offres vides
    const offresNonVides = offresInitiales.filter(offre => {
      for (const key in offre) {
        if (
          (typeof offre[key] === "string" && offre[key].trim() !== "") ||
          (Array.isArray(offre[key]) && offre[key].length > 0) ||
          (typeof offre[key] === "object" && Object.keys(offre[key]).length > 0)
        ) {
          return true;
        }
      }
      return false;
    });

    const offresCibles = offresNonVides.map(transformerOffre);

    // Écriture des offres transformées dans un nouveau fichier (seulement si des offres non vides existent)
    if (offresCibles.length > 0) {
      fs.writeFile('votre_fichier_cible.json', JSON.stringify(offresCibles, null, 2), err => {
        if (err) throw err;
        console.log("Fichier(s) transformé(s) avec succès !");
      });
    } else {
      console.log("Aucune offre non vide trouvée.");
    }
  } catch (parseError) {
    console.error("Erreur lors de l'analyse du JSON :", parseError);
  }
});
