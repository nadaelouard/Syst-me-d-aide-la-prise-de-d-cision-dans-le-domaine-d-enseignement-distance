const { MongoClient } = require('mongodb');

// URL de connexion MongoDB
const url = 'mongodb://localhost:27017/base?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongo'; // Remplacez localhost et le port si nécessaire

// Nom de la base de données
const dbName = 'base'; // Remplacez 'base' par le nom de votre base de données

// Fonction pour se connecter à MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connectez-vous au serveur MongoDB
        await client.connect();

        console.log('Connecté à la base de données MongoDB');

        // Sélectionnez la base de données
        const db = client.db(dbName);

        // Faites quelque chose avec la base de données ici...

    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
    } finally {
        // Assurez-vous de toujours fermer la connexion lorsque vous avez terminé
        await client.close();
        console.log('Déconnecté de MongoDB');
    }
}

// Appelez la fonction pour vous connecter à MongoDB
connectToMongoDB();