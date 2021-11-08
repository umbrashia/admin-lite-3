import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import ProtectedRoute from './containers/common/ProtectedRoute';

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

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          <Route path="*">
              <Redirect from="/" to="dashboard"/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
