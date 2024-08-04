const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
  port:'5432',
  host:'dpg-cqnu9qrv2p9s73ahv7k0-a',
  user: 'job_finder_gyex_user',
  password:'Z3SW1aH3872xg2YdZN1wXGIC8U4xZTZ3',
  database:'job_finder_gyex',
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