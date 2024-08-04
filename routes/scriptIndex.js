document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // Fonction pour vérifier si l'utilisateur est connecté
    function checkUserStatus() {
        const Token = localStorage.getItem('token');

        if (Token) {
            logoutBtn.style.display = 'block';
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
        } else {
            logoutBtn.style.display = 'none';
            loginBtn.style.display = 'block';
            signupBtn.style.display = 'block';
        }
    }

    // Appeler la fonction au chargement de la page
    checkUserStatus();

    // Fonction pour se déconnecter
    function logout() {
        localStorage.clear();
        window.location.href = 'index.html';
    }

    checkUserStatus();

    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});


document.getElementById('burger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});