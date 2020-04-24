// == Import : npm
import React from "react";
// this one generate warnings in the console because using componentWillReceiveProps()
import { Typeahead } from "react-bootstrap-typeahead";
// import PropTypes from 'prop-types';

// == Import : local
// import "./user-profil.scss";
import "./edit-profil.scss";
// css for the Typeahead
import "react-bootstrap-typeahead/css/Typeahead.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import Nav from '../../../Nav';
import Header from './Header';

// == Composant
class  UserProfilEdit extends React.Component {
  state = {
    avatar:
      "https://avatars1.githubusercontent.com/u/55736796?s=400&u=6ad4f03adfa6c177f7c5c91ef5bda749908f9145&v=4",
    firstName: "Alban",
    lastName: "Renahy",
    biography:
      "I'm a new fullstack js developer, ready to make new friends and find a co-worker to build nice projects together!",
    level: "0",
    technos: ["html", "php", "javascript"],
    sharedNewUrl: "",
    sharedNewTitleUrl: "",
    sharedUrl: [
      { id: 1, title: "Portfolio", url: "http://www.albanrenahy.com" },
      { id: 2, title: "museo", url: "http://www.museo-map.com" },
    ],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  removeInArrayFromId = (identifier) => (event) => {
    event.preventDefault();
    const { sharedUrl } = this.state;
    const remodedSharedUrl = sharedUrl.filter((url) => url.id !== identifier);
    this.setState({
      shareUrl: remodedSharedUrl,
    });
  };

  generateId = () => {
    const { sharedUrl } = this.state;
    const ids = sharedUrl.map((url) => url.id);
    const maxId = ids.length === 0 ? 0 : Math.max(...ids);
    const newId = maxId + 1;
    return newId;
  };

  handleAddUrl = () => {
    let { sharedNewUrl } = this.state;
    let { sharedNewTitleUrl } = this.state;
    const { sharedUrl } = this.state;
    const urlId = this.generateId();
    const updateSharedUrl = sharedUrl;

    if (sharedUrl && sharedNewTitleUrl) {
      updateSharedUrl.unshift({
        id: urlId,
        title: sharedNewTitleUrl,
        url: sharedNewUrl,
      });
      this.setState({
        sharedUrl: updateSharedUrl,
        sharedNewUrl: "",
        sharedNewTitleUrl: "",
      });
    }
  };

  render() {
    const userName = "myGithubName";
    const {
      avatar,
      firstName,
      lastName,
      biography,
      level,
      technos,
      sharedNewUrl,
      sharedNewTitleUrl,
      sharedUrl,
    } = this.state;
    return (
      <div className="edit-profil">
        <Nav nav="close-right" title="Éditer mon profil" />
        <Container className="text-left">
        <Header userName={userName} avatar={avatar} />
          <Row>
            <Col>
              <h2>Hello {userName}</h2>
              <p>Bienvenue sur l'édition de ton profil.</p>
            </Col>
          </Row>
          <Form>
            <h3>Les infos de ton profil</h3>
            <Form.Group controlId="formFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entre ton prénom"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entre ton nom"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBiography">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Petite description qui parle de toi..."
                name="biography"
                value={biography}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                Ici tu peux parler de toi, de tes side-projects et bien d'autre
                chose encore !
              </Form.Text>
            </Form.Group>
            <h3>Ton niveau d'XP en Dev.</h3>
            <Form.Group controlId="formLevel.ControlSelect">
              <Form.Label>Choisis ton niveau</Form.Label>
              <Form.Control
                as="select"
                value={level}
                name="level"
                onChange={this.handleChange}
              >
                <option value="0">Noobyist (1 ans et moins)</option>
                <option value="1">Noob éclairé (1 à 2 ans)</option>
                <option value="2">Stackover Pro (2 à 4 ans)</option>
                <option value="3">Ninja (4 à 6 ans)</option>
                <option value="4">Binary God (6 ans et plus)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Technos utilisées</Form.Label>
              <Typeahead
                className="technosChoiceField"
                multiple
                onChange={(technos) => {
                  this.setState({ technos });
                }}
                selected={technos}
                options={[
                  "php",
                  "javascript",
                  "JSX",
                  "Ruby",
                  "Python",
                  "MongoBD",
                ]}
                name="technos"
                id="formTechnos"
              />
            </Form.Group>

            <Form.Group controlId="formSharedUrls">
              <Form.Label>Si tu veux montrer une url sur ton profil</Form.Label>
              <FormControl
                className="mb-3"
                placeholder="Donnes un titre à ton url"
                value={sharedNewTitleUrl}
                name="sharedNewTitleUrl"
                onChange={this.handleChange}
              />
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="http://whatever.com/"
                  value={sharedNewUrl}
                  name="sharedNewUrl"
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="primary" onClick={this.handleAddUrl}>
                    Ajouter
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-muted">
                Ajouter des urls à votre profil
              </Form.Text>
              <ul className="edit-profil-url-list">
              {sharedUrl.map((url) => {
                    return (
                  <li key={url.id}>
                    <a className="link" href={url.url}>{url.title} <span className="edit-profil-url-list-url">({url.url})</span></a>
                      <a className="text-danger text-sm suppr" href="#delete" onClick={this.removeInArrayFromId(url.id)}>Supprimer</a>
                    </li>
                  );
                })}
              </ul>
            </Form.Group>

            <Button className="mb-10"
              onClick={(e) => {
                e.preventDefault();
                console.log(this.state);
              }}
              block
              variant="primary"
              type="submit"
            >
              Sauvegarder
            </Button>
          </Form>
          <Row>
            <Col className="mt-5">
              <h4 className="text-danger">Wow, zone dangereuse !</h4>
              <Button type="button" block variant="outline-danger">Supprimer mon compte</Button>
              <small className="text-muted">Toutes les informations de ton compte seront définitivement supprimées. Nous ne conservons aucune donnée.</small>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/*
 EditUserProfil.propTypes = {
  userName: PropTypes.string.isRequired,
};
 */

// == Export
export default UserProfilEdit;
