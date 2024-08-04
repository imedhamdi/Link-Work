
require('dotenv').config(); // Ajoutez cette ligne au début de votre fichier principal (par exemple, index.js)
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Extraire le token du header

  if (!token) {
    return res.status(401).send('Token manquant');
  }

  try {
    const decoded = jwt.verify(token, 'JWT_SECRET'); // Vérifier le token
    req.user = decoded; // Stocker les informations de l'utilisateur dans la requête
    next();
  } catch (err) {
    res.status(403).send('Token invalide');
  }
}
module.exports = authMiddleware;