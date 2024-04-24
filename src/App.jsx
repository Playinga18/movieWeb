import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lst_movies from './pages/lst_movies/lst_movies';
import Error from './pages/error/error';


import './App.css'

function App() {

  return (
      <div className="App">
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Lst_movies />} />
              <Route path="/404" element={<Error />} />
              <Route path="*" element={<Lst_movies />}/>
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    );
}

export default App
