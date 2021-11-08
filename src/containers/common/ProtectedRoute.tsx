import React from "react";
import { Redirect, Route, RouteProps } from "react-router";


export interface IPropProtectedRoute extends RouteProps {
    rest?: any;
}

class ProtectedRoute extends React.Component<IPropProtectedRoute, { [key: keyof any]: any }> {
   
    render() {
        //@ts-nocheck
        return (<Route {...this.props.rest} render={({ location }) =>
         (localStorage.getItem("token") ? (this.props.children) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />))
        } />);
    }

}


export default ProtectedRoute;