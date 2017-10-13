// @flow

import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div>
    <Row className="justify-content-md-center">
      <Col className="app col-lg-4">
        <h1 className="mb-3">Welcome to Change.</h1>
        <h1>Your digital wallet.</h1>
        <div className="bottom">
          <Link to="/wallet">
            <Button color="primary" size="lg" block>
              Sign up
            </Button>
          </Link>
          <Link to="/wallet">
            <Button color="primary" size="lg" block btn-raised>
              Log in
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  </div>
);

export default App;
