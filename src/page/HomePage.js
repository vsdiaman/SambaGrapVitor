import React from "react";
import Card from "../components/Card/Card";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Nav />
      <div class="wrapper">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
