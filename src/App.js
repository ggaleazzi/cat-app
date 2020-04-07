import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState('');
  const [fact, setFact] = useState('');

  function getCatImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImage(data.message));
  }

  function getCatFact() {
    fetch("http://localhost:3001/random_cat_fact")
    .then(response => response.json())
    .then(data => setFact(data.text));
  }

  useEffect(() => {
    getCatImage();
    getCatFact();
  }, []);

  return (
    <div className="App">
      <h1>Cat facts</h1>
      <img src={image} alt="" />
      <p>{fact}</p>
    </div>
  );
}

export default App;