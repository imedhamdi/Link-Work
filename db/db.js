const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function checkConnection() {
  try {
    await pool.query('SELECT 1'); // Exécute une requête simple pour tester la connexion
    console.log('Connexion à la base de données réussie !');
    return true; // La connexion est OK
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
    return false; // La connexion a échoué
  }
}

// Exportez la fonction de vérification avec le pool
module.exports = {
  pool: pool.promise(),
  checkConnection
};
module.exports = pool.promise();