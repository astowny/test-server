const express = require('express');
const app = express();
const port = process.env.PORT || 7832;

// Configuration des en-têtes CORS pour permettre les requêtes cross-origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permet l'accès depuis n'importe quelle origine
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // Gestion des requêtes OPTIONS (pre-flight)
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// Endpoint qui retourne "Hello World" en JSON avec des informations supplémentaires
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
