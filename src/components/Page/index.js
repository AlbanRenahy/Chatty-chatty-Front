// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

 // Import locaux
import HomePage from '../HomePage'
import MatrixContainer from '../../containers/Matrix'
import Location from '../Location'

 // == Composant
const Page = ({ logged }) => (
  <div>

     {!logged && (
      <>
        <HomePage />        
      </>
    )}
    {logged && (
      <>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/matrix" exact>
          <MatrixContainer />
        </Route>
        <Route path="/location" exact>
          <Location />
        </Route>
      </>
    )}

   </div>
);

 Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

 // == Export
export default Page;