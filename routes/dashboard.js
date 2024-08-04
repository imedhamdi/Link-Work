document.addEventListener('DOMContentLoaded', () => {
    // Afficher le prénom et le nom de l'utilisateur
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if (firstName && lastName) {
        document.getElementById('user-first-name').textContent = firstName;
        document.getElementById('user-last-name').textContent = lastName;
    }

    // Récupérer et afficher les offres d'emploi
    const jobListElement = document.getElementById('job-list');

    fetch('http://127.0.0.1:3000/jobs') // Remplacez cette URL par celle qui correspond à votre backend
        .then(response => response.json())
        .then(jobs => {
            if (Array.isArray(jobs) && jobs.length > 0) {
                jobs.forEach(job => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${job.title} - ${job.company} - ${job.location}`;
                    jobListElement.appendChild(listItem);
                });
            } else {
                jobListElement.textContent = 'Aucune offre d\'emploi disponible pour le moment.';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des offres d\'emploi :', error);
            jobListElement.textContent = 'Erreur lors de la récupération des offres d\'emploi.';
        });
});
