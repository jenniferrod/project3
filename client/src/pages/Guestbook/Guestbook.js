import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import { List } from "../../components/List";
import API from "../../utils/API";
import Card from "../../components/Card";
import Comments from "../../components/Comments";
import "./Guestbook.css";
import Entry from "../../components/Entry";




class Guestbook extends Component {
    state = {
        entries: []
    };

    componentDidMount() {
        this.getGuestBookEntries();
    }

    getGuestBookEntries = () => {
        API.getGuestBookEntries()
            .then(res =>
                this.setState({
                    entries: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleEntryDelete = id => {
        API.deleteGuestBookEntry(id).then(res => this.getGuestBookEntries());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center display-4">
                                We're <strong>excited</strong> to see you!
                            </h1>
                            <hr />
                            <p className="text-center display-9">
                            <small>
                                sign our guest book &amp; let everyone know you'll be there
                            </small>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Entry>
                            <Card title="guestbook comments">
                                    {this.state.entries.length ? (
                                        <List>
                                            {this.state.entries.map(entry => (
                                                <Comments
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
                        </Entry>
                    </Col>
                </Row>
                
                <hr className="display-4" />
                
                <Row>
                
                </Row>
                
                <Footer />
            </Container>
        );
    }
}


export default Guestbook;