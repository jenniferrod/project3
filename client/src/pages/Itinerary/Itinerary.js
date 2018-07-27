import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


const Itinerary = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1 className="text-center">Details coming soon</h1>
          <p className="text-center"><small>
            Please check back later!</small>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Itinerary;
