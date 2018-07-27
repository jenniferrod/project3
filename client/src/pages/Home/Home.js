import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import RsvpEntry from "../../components/RsvpEntry";


class Home extends Component {
  state = {
    attendees: [],
    firstName: "",
    lastName: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getAttendees = () => {
    API.getAttendees({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      comment: this.state.comment
    })
      .then(res =>
        this.setState({
          attendees: res.data,
          message: !res.data.length
            ? "Hm, no one by that name has RSVP'd..." : ""
          })
        )
        .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getAttendees();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>We're having a party and we'd love for you to come!</strong>
              </h1>
              <h2 className="text-center">
                Please RSVP if you can make it &amp; Don't forget to sign the guest book
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card>
              <RsvpEntry
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                plusOne={this.state.plusOne}

              />
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
