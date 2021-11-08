import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import UserList from '../user/UserList';
import MyRightNavigation from '../../containers/sections/MyRightNavigation';
import MyHeaderNavigation from '../../containers/sections/MyHeaderNavigation';





class Dashboard extends React.Component<{}, { height: any, topHeaderHeight: any, mainPartHeight: any }> {

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
                <MyHeaderNavigation />
                <Container fluid>
                    <Row>
                        <Col md={2} style={jkl} className="slide-panel" >
                            <MyRightNavigation />
                        </Col>
                        <Col md={10} style={{ height: this.state.height, overflow: "auto", marginTop: this.state.topHeaderHeight }}>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/users-list">
                                    <UserList />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}


export default Dashboard;