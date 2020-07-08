import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="user-info">
        <div className="search">
          <input type="search" placeholder="Digite o nome do usuário" />
        </div>
        <img src="https://avatars2.githubusercontent.com/u/56850413?v=4" alt="profile" />
        <h1>
          <a href="https://github.com/hedenica">Hedênica</a>
        </h1>

        <ul className="repos-info">
          <li>💜 Repositórios: 29</li>
          <li>💜 Seguidores: 121</li>
          <li>💜 Seguindo: 10</li>
        </ul>

        <div className="actions">
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className="repos">
          <h2>📝 Repositórios:</h2>
          <ul>
            <li><a href="/">Nome do repositório</a></li>
          </ul>
        </div>
        <div className="starred">
          <h2>⭐ Favoritos:</h2>
          <ul>
            <li><a href="/">Nome do repositório</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
