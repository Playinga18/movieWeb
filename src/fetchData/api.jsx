// api.js

const API_URL = 'http://localhost:3001/api/v1'; // URL de votre API

// Fonction pour récupérer tous les films
export const getAllMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des films (fecthing)');
  }
  return await response.json();
};

// Fonction pour créer un nouveau film
export const createMovie = async (movieData) => {
  const response = await fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
  if (!response.ok) {
    throw new Error('Erreur lors de la création du film');
  }
  return await response.json();
};

// Fonction pour récupérer un film par son ID
export const getMovieById = async (id) => {
  const response = await fetch(`${API_URL}/movies/${id}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du film');
  }
  return await response.json();
};

// Fonction pour mettre à jour un film
export const updateMovie = async (id, movieData) => {
  const response = await fetch(`${API_URL}/movies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
  if (!response.ok) {
    throw new Error('Erreur lors de la mise à jour du film');
  }
  return await response.json();
};

// Fonction pour supprimer un film
export const deleteMovie = async (id) => {
  const response = await fetch(`${API_URL}/movies/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erreur lors de la suppression du film');
  }
  return await response.json();
};