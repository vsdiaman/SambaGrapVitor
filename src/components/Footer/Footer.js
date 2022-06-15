import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
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
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4 id="h4-2">Siga-nos nas redes sociais</h4>
              <ul className="list-unstyled">
                <li>
                  <a id="twitter" href="https://twitter.com/VitorDiamantin3">
                    Twiter
                  </a>
                </li>
                <li>
                  <a
                    id="instagram"
                    href="https://www.instagram.com/vitor.diamantino/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    id="facebook"
                    href="https://www.facebook.com/vitor.diamantino"
                  >
                    facebook
                  </a>
                </li>
              </ul>
              <div className="newsletter">
                <input class="input-newsletter" type="search" />
              </div>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4 id="h4-3">Baixe o App</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">App store</a>
                </li>
                <li>
                  <a href="/">GooglePlay</a>
                </li>
              </ul>
            </div>
          </div>
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