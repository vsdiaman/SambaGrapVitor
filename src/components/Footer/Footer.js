import React from "react";
import "./styles.css";
import Group1 from "../../images/Group1.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import APPSTORE from "../../images/APPSTORE.png";
import PLAYSTORE from "../../images/PLAYSTORE.png";

function Footer() {
  return (
    <div className="footer">
      {/* Container */}
      <div className="footer-itens">
        <div className="footer-logo">
          <div class="footer-logo">
            <img src={Group1} alt="logo" />
          </div>
        </div>
        <div className="footer-menu">
          <div>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Gêneros</li>
              <li>Favoritos</li>
              <li>Perfil</li>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
              <li>Quem somos</li>
              <li>Enviar HQ</li>
            </ul>
          </div>
        </div>
        <div className="footer-midia">
          <div>
            <ul className="footer-title">
              <li>Siga-nos nas redes sociais</li>
            </ul>

            <div>
              <ul className="list-midias">
                <li>
                  <a
                    id="footer-twitter"
                    href="https://twitter.com/VitorDiamantin3"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    id="footer-instagram"
                    href="https://www.instagram.com/vitor.diamantino/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    id="footer-facebook"
                    href="https://www.facebook.com/vitor.diamantino"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="footer-newlestter">
              <li>Assine a nossa Newlestter</li>
              <input type="text" id="submit" name="fname" />
            </ul>
          </div>
        </div>

        <div className="footer-app">
          <div>
            <h4>Baixe o App</h4>
            <ul className="list-app">
              <li>
                <img id="footer-app-store" src={APPSTORE} alt="appstore" />
              </li>
              <li>
                <img id="footer-play-store" src={PLAYSTORE} alt="playstore" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          {/* <div>
            <div class="footer-logo">
              <img src={Group1} alt="logo" />
            </div>
            Column 1
            <div>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Gêneros</li>
                <li>Favoritos</li>
                <li>Perfil</li>
                <li>Termos de uso</li>
                <li>Política de privacidade</li>
                <li>Quem somos</li>
                <li>Enviar HQ</li>
              </ul>
            </div>
            <div>
              <ul className="footer-title">
                <li>Siga-nos nas redes sociais</li>
              </ul>
              <div>
                <ul className="list-midias">
                  <li>
                    <a
                      id="twitter"
                      href="https://twitter.com/VitorDiamantin3"
                      size={16}
                      color="#fff"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      id="instagram"
                      href="https://www.instagram.com/vitor.diamantino/"
                      size={16}
                      color="#fff"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      id="facebook"
                      href="https://www.facebook.com/vitor.diamantino"
                      size={16}
                      color="#fff"
                    >
                      <FaFacebookSquare />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            Column 2
            <div>
              <div className="newsletter">
                <input class="input-newsletter" type="search" />
              </div>
            </div>
            Column 3
            <div>
              <h4>Baixe o App</h4>
              <ul className="list-app">
                <li>
                  <a href="/">App store</a>
                </li>
                <li>
                  <a href="/">GooglePlay</a>
                </li>
              </ul>
            </div>
          </div> */}
          {/* Footer Bottom*/}
          <div className="footer-bottom">
            <p className="text-xs-center">
              Termos e aviso de privacidade. Envi-nos seu feedback. ajuda.
              &copy;
              {new Date().getFullYear()}, Samba Graphics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
