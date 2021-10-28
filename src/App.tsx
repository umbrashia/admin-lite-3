import React from 'react';
import logo from './logo.svg';
import profileDummyImg from './assets/dist/img/user4-128x128.jpg';
import { Navbar, Container, Row, Col, Nav, Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Dashboard from './components/dashboard/Dashboard';
import UserList from './components/user/UserList';

class App extends React.Component<{}, { height: any, topHeaderHeight: any, mainPartHeight: any }> {

  constructor(props: any) {
    super(props);
    this.state = {
      height: 0,
      topHeaderHeight: 0,
      mainPartHeight: 0,
    };
  }


  componentDidMount() {
    this.setState({
      ...this.state, height: window.innerHeight - document.getElementsByClassName('header-nav')[0].clientHeight,
      topHeaderHeight: document.getElementsByClassName('header-nav')[0].clientHeight,
      mainPartHeight: window.innerHeight,
    });
  }

  render() {
    const jkl = { height: this.state.height, top: this.state.topHeaderHeight };
    return (
      <React.Fragment>
        <Navbar className="header-nav" bg="dark" variant="dark" fixed="top">
          {/* fixed="top" */}
          <Container fluid>
            <Navbar.Brand href="#home">
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
        <Container fluid>
          <BrowserRouter>
            <Row>
              <Col md={2} style={jkl} className="slide-panel" >

                <Card >
                  <Card.Img variant="top" src={profileDummyImg} />
                  <Card.Body>
                    {/* <Card.Title>Hello Admin</Card.Title> */}
                    <Accordion defaultActiveKey="0" >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Dashboard</Accordion.Header>
                        <Accordion.Body className="p-0">
                          <ListGroup >
                            {/* defaultActiveKey="#link1" */}
                            <ListGroup.Item href="/">
                              <Link to="/">Home</Link>
                            </ListGroup.Item>
                            <ListGroup.Item href="/users-list">
                              <Link to="/users-list">User Management</Link>
                            </ListGroup.Item>
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
              </Col>
              <Col md={10} style={{ height: this.state.height, overflow: "auto", marginTop: this.state.topHeaderHeight }}>

                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route exact path="/users-list">
                    <UserList />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </BrowserRouter>
        </Container>
      </React.Fragment>
    )
  }
}
export default App;
