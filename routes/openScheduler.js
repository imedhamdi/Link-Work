document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour afficher la fenêtre de planification
    function openScheduler() {
        document.getElementById('scheduler-modal').style.display = 'block';
    }

    // Fonction pour fermer la fenêtre de planification
    function closeScheduler() {
        document.getElementById('scheduler-modal').style.display = 'none';
    }

    // Fonction pour générer le fichier ICS et ouvrir le client de messagerie
    function generateICS() {
        const dateTime = document.getElementById('event-date').value;
        if (!dateTime) {
            alert('Veuillez sélectionner une date et une heure.');
            return;
        }

        const [date, time] = dateTime.split('T');
        const start = `${date}T${time}:00`;
        const end = new Date(new Date(start).getTime() + 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', 'T') + 'Z';

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${new Date().getTime()}@example.com
DTSTAMP:${start.replace(/[-:]/g, '')}Z
DTSTART:${start.replace(/[-:]/g, '')}Z
DTEND:${end.replace(/[-:]/g, '')}Z
SUMMARY:Entretien avec Jean Dupont
LOCATION:Bureau de l'entreprise
DESCRIPTION:Entretien pour le poste de Développeur Web
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);

        // Télécharger le fichier ICS
        const a = document.createElement('a');
        a.href = url;
        a.download = 'entretien.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Ouvrir le client de messagerie
        const subject = encodeURIComponent("Planification d'un entretien");
        const body = encodeURIComponent(`Bonjour,\n\nVeuillez trouver ci-joint le fichier ICS pour planifier l'entretien.\n\nCordialement,\n[Votre Nom]`);
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        // Fermer la fenêtre
        closeScheduler();
    }

    // Ajouter des écouteurs d'événements aux boutons
    document.querySelectorAll('.schedule-interview-btn').forEach(button => {
        button.addEventListener('click', openScheduler);
    });

    document.getElementById('generate-ics-btn').addEventListener('click', generateICS);
    document.getElementById('close-scheduler-btn').addEventListener('click', closeScheduler);
});
