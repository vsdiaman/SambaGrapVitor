import React from "react";
import "./styles.css";
import Rectangle3 from "../../images/Rectangle3.png";
import { TbMessage } from "react-icons/tb";
import { CgAddR } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

function Card() {
  return (
    <body>
      <div class="title-card">
        <h1>LANÇAMENTOS</h1>
      </div>
      <div class="card">
        <div className="item">
          <div>
            <img id="card-img" src={Rectangle3} width="513" height="338" />
          </div>
          <div>
            <div class="rating">
              <div class="card-rating"></div>
              {/* <input class="card-rating" type="radio" name="rating" /> */}
              <h3 class="card-nota">4,5</h3>
              <h3 class="card-categorias">Categorias</h3>
              <i class="card-ponto">.</i>
            </div>
            <div></div>
          </div>
          <div class="card-info">
            <h2 class="card-title">Loren ipsum. </h2>
            <div class="card-add" style={{ color: "#f7a707" }}>
              <CgAddR size={30} />
            </div>
            <div class="card-close" style={{ color: "white" }}>
              <CgCloseO CgAddR size={30} />
            </div>
          </div>
          <div>
            <h4 class="card-autor">Nome do autor. </h4>
          </div>
          <div>
            <p class="card-descricao">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              lacinia eu tortor at finibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam lacinia eu tortor at finibus..{" "}
            </p>
          </div>
          <div class="card-informacao">
            <h5 class="card-data">2022</h5>
            <h5 class="card-comentarios">
              <div class="icon-message" style={{ color: "#f7a707" }}>
                <TbMessage size={30} />
              </div>
            </h5>
            <h5 class="card-idade">16</h5>
          </div>
          <div>
            <button class="card-button">leia agora</button>
          </div>
          <div>
            <h3 class="card-price">R$ 0,00</h3>
          </div>
        </div>
        <div className="item">
          <div className="item">
            <div>
              <img id="card-img" src={Rectangle3} width="513" height="338" />
            </div>
            <div>
              <div class="rating">
                <div class="card-rating"></div>
                {/* <input class="card-rating" type="radio" name="rating" /> */}
                <h3 class="card-nota">4,5</h3>
                <h3 class="card-categorias">Categorias</h3>
                <i class="card-ponto">.</i>
              </div>
              <div></div>
            </div>
            <div class="card-info">
              <h2 class="card-title">Loren ipsum. </h2>
              <div class="card-add" style={{ color: "#f7a707" }}>
                <CgAddR size={30} />
              </div>
              <div class="card-close" style={{ color: "white" }}>
                <CgCloseO CgAddR size={30} />
              </div>
            </div>
            <div>
              <h4 class="card-autor">Nome do autor. </h4>
            </div>
            <div>
              <p class="card-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia eu tortor at finibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam lacinia eu tortor at finibus..{" "}
              </p>
            </div>
            <div class="card-informacao">
              <h5 class="card-data">2022</h5>
              <h5 class="card-comentarios">
                <div class="icon-message" style={{ color: "#f7a707" }}>
                  <TbMessage size={30} />
                </div>
              </h5>
              <h5 class="card-idade">16</h5>
            </div>
            <div>
              <button class="card-button">leia agora</button>
            </div>
            <div>
              <h3 class="card-price">R$ 0,00</h3>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item">
            <div>
              <img id="card-img" src={Rectangle3} width="513" height="338" />
            </div>
            <div>
              <div class="rating">
                <div class="card-rating"></div>
                {/* <input class="card-rating" type="radio" name="rating" /> */}
                <h3 class="card-nota">4,5</h3>
                <h3 class="card-categorias">Categorias</h3>
                <i class="card-ponto">.</i>
              </div>
            </div>
            <div class="card-info">
              <h2 class="card-title">Loren ipsum. </h2>
              <div class="card-add" style={{ color: "#f7a707" }}>
                <CgAddR size={30} />
              </div>
              <div class="card-close" style={{ color: "white" }}>
                <CgCloseO CgAddR size={30} />
              </div>
            </div>
            <div>
              <h4 class="card-autor">Nome do autor. </h4>
            </div>
            <div>
              <p class="card-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia eu tortor at finibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam lacinia eu tortor at finibus..{" "}
              </p>
            </div>
            <div class="card-informacao">
              <h5 class="card-data">2022</h5>
              <h5 class="card-comentarios">
                <div class="icon-message" style={{ color: "#f7a707" }}>
                  <TbMessage size={30} />
                </div>
              </h5>
              <h5 class="card-idade">16</h5>
            </div>
            <div>
              <button class="card-button">leia agora</button>
            </div>
            <div>
              <h3 class="card-price">R$ 0,00</h3>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item">
            <div>
              <img id="card-img" src={Rectangle3} width="513" height="338" />
            </div>
            <div>
              <div class="rating">
                <div class="card-rating"></div>
                {/* <input class="card-rating" type="radio" name="rating" /> */}
                <h3 class="card-nota">4,5</h3>
                <h3 class="card-categorias">Categorias</h3>
                <i class="card-ponto">.</i>
              </div>
              <div></div>
            </div>
            <div class="card-info">
              <h2 class="card-title">Loren ipsum. </h2>
              <div class="card-add" style={{ color: "#f7a707" }}>
                <CgAddR size={30} />
              </div>
              <div class="card-close" style={{ color: "white" }}>
                <CgCloseO CgAddR size={30} />
              </div>
            </div>
            <div>
              <h4 class="card-autor">Nome do autor. </h4>
            </div>
            <div>
              <p class="card-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia eu tortor at finibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam lacinia eu tortor at finibus..{" "}
              </p>
            </div>
            <div class="card-informacao">
              <h5 class="card-data">2022</h5>
              <h5 class="card-comentarios">
                <div class="icon-message" style={{ color: "#f7a707" }}>
                  <TbMessage size={30} />
                </div>
              </h5>
              <h5 class="card-idade">16</h5>
            </div>
            <div>
              <button class="card-button">leia agora</button>
            </div>
            <div>
              <h3 class="card-price">R$ 0,00</h3>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item">
            <div>
              <img id="card-img" src={Rectangle3} width="513" height="338" />
            </div>
            <div>
              <div class="rating">
                <div class="card-rating"></div>
                {/* <input class="card-rating" type="radio" name="rating" /> */}
                <h3 class="card-nota">4,5</h3>
                <h3 class="card-categorias">Categorias</h3>
                <i class="card-ponto">.</i>
              </div>
              <div></div>
            </div>
            <div class="card-info">
              <h2 class="card-title">Loren ipsum. </h2>
              <div class="card-add" style={{ color: "#f7a707" }}>
                <CgAddR size={30} />
              </div>
              <div class="card-close" style={{ color: "white" }}>
                <CgCloseO CgAddR size={30} />
              </div>
            </div>
            <div>
              <h4 class="card-autor">Nome do autor. </h4>
            </div>
            <div>
              <p class="card-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia eu tortor at finibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam lacinia eu tortor at finibus..{" "}
              </p>
            </div>
            <div class="card-informacao">
              <h5 class="card-data">2022</h5>
              <h5 class="card-comentarios">
                <div class="icon-message" style={{ color: "#f7a707" }}>
                  <TbMessage size={30} />
                </div>
              </h5>
              <h5 class="card-idade">16</h5>
            </div>
            <div>
              <button class="card-button">leia agora</button>
            </div>
            <div>
              <h3 class="card-price">R$ 0,00</h3>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item">
            <div>
              <img id="card-img" src={Rectangle3} width="513" height="338" />
            </div>
            <div>
              <div class="rating">
                <div class="card-rating"></div>
                {/* <input class="card-rating" type="radio" name="rating" /> */}
                <h3 class="card-nota">4,5</h3>
                <h3 class="card-categorias">Categorias</h3>
                <i class="card-ponto">.</i>
              </div>
              <div></div>
            </div>
            <div class="card-info">
              <h2 class="card-title">Loren ipsum. </h2>
              <div class="card-add" style={{ color: "#f7a707" }}>
                <CgAddR size={30} />
              </div>
              <div class="card-close" style={{ color: "white" }}>
                <CgCloseO CgAddR size={30} />
              </div>
            </div>
            <div>
              <h4 class="card-autor">Nome do autor. </h4>
            </div>
            <div>
              <p class="card-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia eu tortor at finibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam lacinia eu tortor at finibus..{" "}
              </p>
            </div>
            <div class="card-informacao">
              <h5 class="card-data">2022</h5>
              <h5 class="card-comentarios">
                <div class="icon-message" style={{ color: "#f7a707" }}>
                  <TbMessage size={30} />
                </div>
              </h5>
              <h5 class="card-idade">16</h5>
            </div>
            <div>
              <button class="card-button">leia agora</button>
            </div>
            <div>
              <h3 class="card-price">R$ 0,00</h3>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Card;
