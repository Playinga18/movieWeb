// api.js

const API_URL = 'http://localhost:3001/api/v1'; // URL de votre API

// Fonction pour récupérer tous les films
export const getAllMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des films');
  }
  return await response.json();
};