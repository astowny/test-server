FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --production

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 7832

# Commande pour démarrer l'application
CMD ["npm", "start"]