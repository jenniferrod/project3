import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import { List } from "../../components/List";
import API from "../../utils/API";
import Card from "../../components/Card";
import ConfirmedGuest from "../../components/ConfirmedGuest";

class Guestbook extends Component {
    state = {
        attendees: []
    };

    componentDidMount() {
        this.getAttendees();
    }

    getAttendees = () => {
        API.getAttendees()
            .then(res =>
                this.setState({
                    attendees: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleEntryDelete = id => {
        API.deleteGuestBookEntry(id).then(res => this.getAttendees());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>We're excited to have you - Please sign the guest book if you'll be attending!</strong>
                            </h1>
                            <h2 className="text-center">
                                And leave a comment
                            </h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Confirmed attendees">
                            {this.state.attendees.length ? (
                                <List>
                                    {this.state.attendees.map(entry => (
                                        <ConfirmedGuest
                                            key={entry._id}
                                            _id={entry._id}
                                            firstName={entry.firstName}
                                            handleClick={this.handleEntryDelete}
                                            buttonText="Delete Entry"
                                            saved
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center"></h2>
                                )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}


export default Guestbook;