import React, { Suspense, lazy } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import MyRightNavigation from '../../containers/sections/MyRightNavigation';
import MyHeaderNavigation from '../../containers/sections/MyHeaderNavigation';
import { RootState } from '../../store/store';
import { connect } from 'react-redux';
import { ICommonDashboard, setMobileMenuDisplay } from '../../store/slices/commonDashboardSlice';
const Home = lazy<any>(() => import("../home/Home"));
const UserList = lazy<any>(() => import("../user/UserList"));




class Dashboard extends React.Component<{ localCommonDashboardData: ICommonDashboard }, { [key: keyof any]: any }, { [key: keyof any]: any }> {

    constructor(props: any) {
        super(props);
        this.state = {
            height: 0,
            topHeaderHeight: 0,
            mainPartHeight: 0,
            notMobile:true,
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state, height: window.innerHeight - document.getElementsByClassName('header-nav')[0].clientHeight,
            topHeaderHeight: document.getElementsByClassName('header-nav')[0].clientHeight,
            notMobile:((window.innerWidth>=576)?true:false),
            mainPartHeight: window.innerHeight,
        });
        if(window.innerWidth<=576)
            (this.props as any).dispatch(setMobileMenuDisplay(false));
    }

    render() {

        const jkl = { height: this.state.height, top: this.state.topHeaderHeight };
        return (
            <React.Fragment>
                <MyHeaderNavigation />
                <Container fluid>
                    <Row>
                        {this.props.localCommonDashboardData.mobileMenuToggle && (
                            <Col lg={2} md={3} sm={4} style={jkl} className="slide-panel" >
                                <MyRightNavigation />
                            </Col>
                        )}
                        {(this.state.notMobile || this.props.localCommonDashboardData.mobileMenuToggle!==true) && (
                            <Col lg={10} md={9} sm={8} style={{ height: this.state.height, overflow: "auto", marginTop: this.state.topHeaderHeight }}>
                                <Suspense fallback={<span>loading</span>}>
                                    <Switch>
                                        <Route exact path="/">
                                            <Home />
                                        </Route>
                                        <Route exact path="/users-list">
                                            <UserList />
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </Col>
                        )}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}


export default connect((state: RootState) => ({
    localCommonDashboardData: state.commonDashboard
}))(Dashboard);