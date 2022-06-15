import React from "react";
import "./styles.css";
import group3 from "../../images/Group3.svg";

function Nav() {
  return (
    <nav class="container">
      <div class="navbar-logo">
        <a class="logo" href="#">
          <img src={group3} />
        </a>
      </div>
      <div class="navbar">
        <div>
          <ul>
            <li class="nav-item">
              <a class="nav-home" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="nav-item">
              <a class="nav-generos" href="#">
                Gêneros
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="nav-item">
              <a class="nav-idioma" href="#">
                Alterar idioma
              </a>
            </li>
          </ul>
        </div>
        <ul class="nav-list"></ul>
      </div>
      <div class="nav-btn">
        <button class="btn-criar-conta"></button>
      </div>
      <div class="nav-btn">
        <button class="btn-login"></button>
      </div>
      <div class="section-input">
        <form class="nav-input">
          <input class="input-search" type="search" />
        </form>
      </div>
    </nav>
  );
}

export default Nav;
