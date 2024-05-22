import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/homeImg/logo.3jpg.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/number" activeClassName="active">
              Numbers
            </NavLink>
          </li>
          <li>
            <NavLink to="/color" activeClassName="active">
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink to="/animal" activeClassName="active">
              Animals
            </NavLink>
          </li>
        </ul>
      </nav>

      
        <div className="text">
          <h1>Welcome To Amharic-ish</h1>
          <h2>
            Here we're going to help you learn Amharic, a beautiful and widely
            spoken language in Ethiopia.
          </h2>
        </div>

        <div className="container">
        <div className="card">
          <h2>
            Numbers
          </h2>
          <a href="/number">
          <div className="card-content">
            <div className="img">   
            <img id="imgH" src="/images/homeImg/numbers.jpg" alt="Numbers img" /></div>
                <p>Learn numbers in Amharic and hear their pronunciation by clicking on
              them.</p>
          </div>
          </a>
        </div>

        <div className="card">
          <h2>Colors</h2>
          <a href="/color">
          <div className="card-content">
          <div className="img">
            <img id="imgH" src="/images/homeImg/rainbow-slide.jpg" alt="Colors img" /></div>            <p>
              Discover the vibrant colors in Amharic and their meanings. Click on
              each color to listen to its pronunciation.
            </p>
          </div>
          </a>
        </div>

        <div className="card">
          <h2>Animals</h2>
          <a href="/animal">
          <div className="card-content">
          <div className="img">
            <img id="imgH" src="/images/homeImg/animals.jpg" alt="Animals img" /></div>            <p>
              Explore the animal kingdom in Amharic. Listen to the names of
              different animals!
            </p>
          </div>
          </a>
        </div>
      </div>

      <h5 id="ltd">Powered By Maspan .LTD</h5>
    </div>
  );
};

export default Home;


