const express = require('express');
const app = express();
const port = 7832;

// Endpoint qui retourne "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});