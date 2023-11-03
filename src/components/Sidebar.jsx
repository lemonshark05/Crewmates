import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ themes }) => {
  const navigate = useNavigate();

  const handleThemeClick = (url) => {
    navigate(url);
  };

  return (
    <div className="App-sidebar">
      <div className="Menu">
        {themes.map((theme, index) => (
          <li className="Menu-item" key={index}>
            <button className="Menu-title" onClick={() => handleThemeClick(theme.url)}>
              {theme.name}
            </button>
          </li>
        ))}
        <img src="./src/assets/peeking.7c0ab599.png" class = "single-crewmate"></img>
      </div>
    </div>
  );
};

export default Sidebar;