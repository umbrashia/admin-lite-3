import logo from '../../logo.svg';
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";
import { Container, Navbar } from "react-bootstrap";

const MyHeaderNavigation: FC<{ [key: keyof any]: any }> = (props: any): ReactElement => {
    return (<React.Fragment>
        <Navbar className="header-nav" bg="dark" variant="dark" fixed="top">
            {/* fixed="top" */}
            <Container fluid>
                <Navbar.Brand href="">
                    <FontAwesomeIcon icon={faBars} />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Bootstrap Dashboard
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="#home">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>);
}

export default MyHeaderNavigation;