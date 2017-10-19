// @flow

import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div>
    <Row className="justify-content-md-center">
      <Col className="app col-lg-4">
        <h1>Welcome to Change.</h1>
        <h2>Your gateway to the future of money</h2>
        <div className="bottom">
          <Link to="/signup">
            <Button color="primary" size="lg" block>
              Sign up
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" block>
              Log in
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  </div>
);

export default App;
