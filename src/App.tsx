import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <p className="title">Hussein Amine</p>
        <button 
          className="btn"
          onClick={(e) => {
            window.location.href = 'mailto:contact@husseinamine.com';
            e.preventDefault();
          }}>Contact Me</button>
      </div>
      <div className="paragraph">
        <a className="social-link" href="https://github.com/shawarmaje">Github</a>
        <a className="social-link" href="https://discord.com/users/562895658361815040">Discord</a>
        <a className="social-link" href="https://instagram.com/husseinamine">Instagram</a>
      </div>

      <p className="title">About Me</p>
      <p className="paragraph">Hello. my name is Hussein, this is my website, still working on it, will finish soon!</p>
    </div>
  );
}

export default App;
