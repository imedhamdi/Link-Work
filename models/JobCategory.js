const pool = require('../db/db'); // Votre configuration de connexion à MySQL

class JobCategory {
    static async create(categoryName) {
        try {
            const [result] = await pool.query(
                'INSERT INTO job_categories (category_name) VALUES (?)',
                [categoryName]
            );
            return result.insertId; // Retourner l'ID de la catégorie créée
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                throw new Error('Cette catégorie existe déjà');
            } else {
                throw err; // Renvoyer l'erreur pour une gestion ultérieure
            }
        }
    }
}

module.exports = JobCategory;
