// @flow

import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import './App.css';

const App = () => (
  <div>
    <Row className="justify-content-md-center">
      <Col className="app col-lg-6">
        <h1 className="mb-3">Welcome to Change.</h1>
        <h1>Your digital wallet.</h1>
        <div className="bottom">
          <Button color="primary" size="lg" block>
            Sign up
          </Button>
          <Button color="primary" size="lg" block>
            Log in
          </Button>
        </div>
      </Col>
    </Row>
  </div>
);

export default App;
