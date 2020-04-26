import React from 'react';
import './App.scss';
import image from '../../assets/images/image1.webp';

function App() {
  return (
    <main>
      <h1>Hello</h1>
      <img src={image} alt="Sample image" />
    </main>
  );
}

export default App;
