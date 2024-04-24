import React, { useState, useEffect } from 'react';
import { getAllMovies } from '../../fetchData/api'

const Lst_movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const data = await getAllMovies();
            setMovies(data.message); // Supposons que le message contient le tableau de films
          } catch (error) {
            console.error('Erreur lors de la récupération des films :', error);
          }
        };
        fetchMovies();
      }, []);
    return (
        <>
            <div>
                <h1 style={{ color: 'red', paddingBottom: '10px' }}>Liste de films</h1>
            </div>

            <button>creer</button>

            
            <div>
                    {/* Affichage de la liste des films */}
                    {movies.map((movie) => (
                        <div key={movie._id} style={{padding: '10px'}}>
                            <h2>{movie.title}</h2>
                            <p>{movie.year}</p>
                            <button>supprimer</button>
                            <button>modifier</button>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Lst_movies;