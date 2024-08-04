// jobListing.js
document.addEventListener('DOMContentLoaded', () => {
    const jobListingsContainer = document.getElementById('job-listings');
  
    // Récupérer les offres depuis l'API
    async function fetchOffres() {
      try {
        const response = await fetch('/offres');
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Erreur lors de la récupération des offres :', error);
        jobListingsContainer.innerHTML = '<p>Une erreur s\'est produite lors du chargement des offres.</p>';
        return [];
      }
    }
  
    // Créer un élément HTML pour chaque offre
    function createJobListingElement(offre) {
      const jobListing = document.createElement('div');
      jobListing.classList.add('job-listing');
  
      const jobHeader = document.createElement('div');
      jobHeader.classList.add('job-header');
  
      // Titre du poste
      const jobTitle = document.createElement('h2');
      jobTitle.textContent = offre.intitule;
      jobHeader.appendChild(jobTitle);
  
      // Métadonnées de l'offre
      const jobMeta = document.createElement('div');
      jobMeta.classList.add('job-meta');
  
      const company = document.createElement('p');
      company.classList.add('company');
      company.innerHTML = `<i class="fas fa-building"></i> ${offre.entreprise_nom}`;
  
      const location = document.createElement('p');
      location.classList.add('location');
      location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${offre.lieu_travail_libelle}`;
  
      const salary = document.createElement('p');
      salary.classList.add('salary');
      salary.innerHTML = `<i class="fas fa-money-bill-wave"></i> ${offre.salaire_libelle}`;
  
      const applyBtn = document.createElement('a');
      applyBtn.href = '#'; // Remplacez par le lien de candidature réel
      applyBtn.classList.add('apply-btn');
      applyBtn.textContent = 'Détails';
  
      jobMeta.appendChild(company);
      jobMeta.appendChild(location);
      jobMeta.appendChild(salary);
      jobMeta.appendChild(applyBtn);
  
      jobHeader.appendChild(jobMeta);
  
      // Description de l'offre
      const description = document.createElement('p');
      description.classList.add('description');
      description.textContent = offre.description;
  
      jobListing.appendChild(jobHeader);
      jobListing.appendChild(description);
  
      return jobListing;
    }
  
    // Mettre à jour la liste des offres
    async function updateJobListings() {
      const offres = await fetchOffres();
      jobListingsContainer.innerHTML = '';
      offres.forEach(offre => {
        const jobListing = createJobListingElement(offre);
        jobListingsContainer.appendChild(jobListing);
      });
    }
  
    // Charger les offres initiales
    updateJobListings();
  });
  

  