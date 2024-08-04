document.getElementById('articleForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const prompt = document.getElementById('prompt').value;
    
    try {
        const response = await fetch('/generate_article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, prompt })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert('Article généré et enregistré avec succès');
            location.reload();
        } else {
            alert('Erreur lors de la génération de l\'article');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de la requête à l\'API');
    }
});
