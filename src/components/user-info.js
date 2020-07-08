/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

const userInfo = () => {
  return (
    <div className="user-info">
      <img src="https://avatars2.githubusercontent.com/u/56850413?v=4" alt="profile" />
      <h1>
        <a href="https://github.com/hedenica">Hedênica</a>
      </h1>

      <ul className="repos-info">
        <li>💜 Repositórios: 29</li>
        <li>💜 Seguidores: 121</li>
        <li>💜 Seguindo: 10</li>
      </ul>
    </div>
  )
}

export default userInfo;
