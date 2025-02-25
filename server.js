const express = require('express');
const app = express();
const port = 7832;

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
