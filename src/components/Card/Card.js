import React from "react";
import "./styles.css";
import Rectangle3 from "../../images/Rectangle3.png";

function Card() {
  return (
    <body>
      <div class="card">
        <div class="card-body">
          <img id="card-img" src={Rectangle3} />
          <h2 class="card-title">
            Aliquam porttitor vel eu placerat, mauris potenti senectus.{" "}
          </h2>
          <h4 class="card-title">Nome do autor. </h4>
          <p class="card-descricao">
            Lorem ipsum etiam aliquet eu bibendum arcu lectus lacinia eu viverra
            erat phasellus cursus, nisi platea orci nisl mollis per tincidunt
            lacus lobortis mauris sed. duis curabitur morbi vestibulum aenean
            eros blandit fringilla ipsum, sollicitudin donec id ad praesent
            malesuada amet, tincidunt cras faucibus hendrerit convallis tortor
            viverra.{" "}
          </p>
        </div>
        <button class="card-button"></button>
        <div class="card-price"></div>
      </div>
    </body>
  );
}

export default Card;
