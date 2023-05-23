import React from 'react';
import './App.css'
import HomePage from './components/Header'
import ImageGallery from './components/FetchData';


function App() {
  return (
    <div className="App">
      <HomePage />
      <ImageGallery />
    </div>
  );
}

export default App;
