import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";
import { Accordion, Card, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import profileDummyImg from '../../assets/dist/img/user4-128x128.jpg';

const MyRightNavigation: FC<{ [key: keyof any]: any }> = (props: any): ReactElement => {
    return (<React.Fragment>
        <Card >
            <Card.Img variant="top" src={profileDummyImg} />
            <Card.Body>
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                        </Accordion.Header>
                        <Accordion.Body className="p-0">
                            <ListGroup >
                                {/* defaultActiveKey="#link1" */}
                                <Link to="/">
                                    <ListGroup.Item href="/">
                                        Home
                                    </ListGroup.Item>
                                </Link>
                                <Link to="/users-list">
                                    <ListGroup.Item href="/users-list">
                                        User Management
                                    </ListGroup.Item>
                                </Link>
                                <ListGroup.Item href="#!">
                                    Link 3
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Users Management</Accordion.Header>
                        <Accordion.Body>
                            <Nav color="red" defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    </React.Fragment>);
}

export default MyRightNavigation;