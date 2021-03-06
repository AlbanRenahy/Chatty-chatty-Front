// == Import : npm
import React from "react";
import { MdEdit, MdSettings } from "react-icons/md";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';

// == Import : local
import "./user-profil.scss";
import Nav from "../../Nav";

// == Composant
const UserProfil = () => {
  const userName = "myGithubName";
  return (
    <div className="user-profil">
      <Container className="user-profil-info">
        <Row>
          <Col>
            <h2 className="user-profil-info-user-name">{userName}</h2>
            <NavLink to="/profil/show">
              <Image
                className="user-profil-info-avatar"
                src="http://placeimg.com/100/100/people"
                roundedCircle
              />
            </NavLink>
            <p>
              <MdEdit />
              <a className="user-profil-info--edit-link" href="#">
                <NavLink to="/profil/edit">Édites ton profil</NavLink>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-navigation">
        <Row>
          <Col>
            <Button size="lg" variant="primary" block>
              <MdSettings className="icon" /> Préférences de match
            </Button>
            <Button size="lg" variant="outline-secondary" block>
              Aide et assistance
            </Button>
            <Button size="lg" variant="outline-secondary" block>
              Régles d'utilisation
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-disconnect">
        <Row>
          <Col>
            <Button size="lg" variant="danger" block>
              <NavLink to="/">Déconnexion</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

/*
UserProfil.propTypes = {
  userName: PropTypes.string.isRequired,
};
*/

// == Export
export default UserProfil;
