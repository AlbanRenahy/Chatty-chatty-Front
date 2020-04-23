// == Import : npm
import React from "react";

// imports styles
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

// == Import : local
import "./homePage.scss";

// Import pictures:
import homePageMobile from "../../data/homePage-mobile.jpg";
import sideProject from "../../data/side-project.jpg";
import bangkokBreakfast from "../../data/bangkok-breakfast.jpg";
import pizza from "../../data/pizza.jpg";
import logo from "../../data/logo.png";

// == Composant
const HomePage = () => (
  <>
    <div id="home">
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid" src={logo} />
            <img
              className="img-responsive"
              src={homePageMobile}
              alt="first slide"
            />
            <Carousel.Caption>
              <h3>
                Connectes-toi aux Devs des internets (aussi infini que
                node-modules)
              </h3>
              <p>Montes en compétences</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="img-fluid" src={logo} />
            <img
              className="img-responsive"
              src={sideProject}
              alt="second slide"
            />
            <Carousel.Caption>
              <h3>
                Parce que la meilleure façon de monter en compétences est de
                pratiquer une techno sur un projet réel.
              </h3>
              <p>Staffes un side project</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="img-fluid" src={logo} />
            <img
              className="img-responsive"
              src={bangkokBreakfast}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>
                Tu veux rencontrer des Devs qui partagent la même passion, ou tu
                as une idée de projet en tête?
              </h3>
              <p>Élargis ton cercle de connaissances</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="img-fluid" src={logo} />
            <img className="img-responsive" src={pizza} alt="fourth slide" />
            <Carousel.Caption>
              <h3>
                Parce que tu veux manger des pizzas, ou pourquoi pas trouver
                l'amour?
              </h3>
              <p>Ou manges des pizzas.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="footerHome">
        <p>Trouves ici ton perfect Dev-Match pour staffer tes projets</p>
        <Button variant="info"> S'identifier via Github </Button>
    </div>
  </>
);

// == Export
export default HomePage;
