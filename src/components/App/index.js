// == Imports

import React, { useEffect } from 'react';
import './App.scss';

// == Component

const App = ({movies, loadMovies}) => {
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);
  return (
    <div className="App">
      App
    </div>
  );
} 

// == Export

export default App;
