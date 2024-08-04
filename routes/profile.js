document.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const currentPasswordInput = document.getElementById('password'); // Correction de l'ID du champ

    // Récupérer les informations de l'utilisateur depuis le localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');

    // Remplir les champs du formulaire avec les données stockées (après le chargement du DOM)
    if (firstName) { firstNameInput.value = firstName; }
    if (lastName) { lastNameInput.value = lastName; }
    if (phone) { phoneInput.value = phone; }
    if (email) { emailInput.value = email; }

    const form = document.getElementById('profileForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const updatedFirstName = firstNameInput.value;
        const updatedLastName = lastNameInput.value;
        const updatedPhone = phoneInput.value;
        const updatedEmail = emailInput.value; // Notez que l'email ne devrait pas être modifiable ici
        const currentPassword = currentPasswordInput.value; // Correction de l'ID du champ

        // Vérification des données (ajoutez vos propres règles ici)
        if (!currentPassword) {
            alert('Veuillez saisir votre mot de passe actuel.');
            return;
        }

        try {
            const response = await fetch(`/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    first_name: updatedFirstName,
                    last_name: updatedLastName,
                    phone: updatedPhone,
                    // email: updatedEmail,  // Ne pas envoyer l'email s'il n'est pas modifiable
                    currentPassword,
                }),
            });

            if (response.status === 401) {
                alert('Le mot de passe actuel est incorrect.');
            } else if (response.ok) {
                const result = await response.json();
                
                // Mettez à jour le localStorage avec les nouvelles données si nécessaire
                localStorage.setItem('firstName', updatedFirstName);
                localStorage.setItem('lastName', updatedLastName);
                localStorage.setItem('phone', updatedPhone);

                alert('Profil mis à jour avec succès !');
                window.location.href = 'dashboard.html'; // Redirigez après la mise à jour
            } else {
                console.error('Erreur lors de la mise à jour du profil:', response.statusText);
                alert('Une erreur est survenue lors de la mise à jour du profil.');
            }
        } catch (error) {
            console.error('Erreur réseau lors de la mise à jour du profil:', error);
            alert('Une erreur réseau est survenue. Veuillez réessayer plus tard.');
        }
    });
});
