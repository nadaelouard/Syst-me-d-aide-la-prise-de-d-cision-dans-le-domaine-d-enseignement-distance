const { MongoClient } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017/base'; // Assurez-vous que cela correspond à votre configuration

// Options de connexion (facultatif)
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Fonction pour se connecter à la base de données
async function connectToDatabase() {
    try {
        // Se connecter à MongoDB
        const client = await MongoClient.connect(url, options);
        console.log('Connected to MongoDB');

        // Retourner le client MongoDB pour effectuer des opérations
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Vous pouvez gérer l'erreur de manière appropriée dans votre application
    }
}

// Fonction pour récupérer les utilisateurs depuis la base de données et les afficher
async function getUsers() {
    try {
        // Se connecter à la base de données
        const client = await connectToDatabase();

        // Récupérer la collection "utilisateurs"
        const db = client.db();
        const collection = db.collection('utilisateurs');

        // Récupérer les utilisateurs
        const users = await collection.find({}).toArray();

        // Afficher les utilisateurs
        console.log('Users:');
        users.forEach(user => {
            console.log(`Nom: ${user.nom}, Email: ${user.email}`);
        });

        // Fermer la connexion
        client.close();
    } catch (error) {
        console.error('Error retrieving users:', error);
    }
    
}

// Appel de la fonction pour récupérer et afficher les utilisateurs
getUsers();
