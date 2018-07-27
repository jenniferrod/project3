import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import Nav from "./components/Nav";
import Card from "../../components/Card";
import ConfirmedGuest from "../../components/ConfirmedGuest";


class RSVP extends Component {
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
            email: this.state.email
        })
            .then(res =>
                this.setState({
                    attendees: res.data,
                    message: !res.data.length
                        ? "Hm, no one by that name has RSVP'd..."
                        : ""
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
                                <strong>We'd love  if you'd join us!</strong>
                            </h1>
                            <h2 className="text-center">
                                You're invited to the party! Please RSVP and sign the guest book to get everyone excited to see you!!
                            </h2>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        <Card title="RSVP">
                            <ConfirmedGuest
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                email={this.state.email}
                            />
                        </Card>
                    </Col>
                </Row>
               
                <Footer />
            </Container>
        );
    }
}

export default RSVP;

