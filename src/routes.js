import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

import { 
  Container,
  Pages
} from './styles/routeStyles';

function Routes() {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Header />
        <Pages>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />

            <Redirect to="/dashboard" />
          </Switch>
          <Footer />
        </Pages>
      </Router>
    </Container>
  );
}

export default Routes;