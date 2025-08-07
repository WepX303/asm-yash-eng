import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div className="landing-container">
      <h1 className="title">Bizim Projelerimiz</h1>
      <p className="subtitle">
        Yaptığımız çalışmaları keşfetmek için aşağıdan bir proje seçin.
      </p>
      <div className="buttons">
        <a href="/construction/index.html" className="project-button" target="_blank">
          🚧 Construction Şirketi Sitesi
        </a>
        <a href="/shipping/index.html" className="project-button" target="_blank">
          🚢 Kargo & Lojistik Sitesi
        </a>
      </div>
    </div>
  );
}

export default App;