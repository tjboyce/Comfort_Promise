import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Resources from '../Resources/Resources';
import Feedback from '../Feedback/Feedback';
// import Admin from '../Admin/Admin';
import SelectAge from '../SelectAge/SelectAge';
import Thanks from '../Thanks/Thanks';
import XrayProcedure from '../Procedures/XrayProcedure/XrayProcedure'
import './App.css';
import Admin2 from '../Admin/Admin2';
import ProcedureMain from '../Procedures/ProcedureMain/ProcedureMain';

//import xray procedure links
import Xray1 from '../Procedures/XrayProcedure/Xray1';
import Xray2 from '../Procedures/XrayProcedure/Xray2';
import Xray3 from '../Procedures/XrayProcedure/Xray3';
import Xray4 from '../Procedures/XrayProcedure/Xray4';
import Completed from '../Procedures/Completed'

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
    // this.props.dispatch({ type: 'FETCH_FEEDBACK' })
  }

  render() {
    return (
      <Router>
        <div className="mainDiv">
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={Resources}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <ProtectedRoute
              exact
              path="/feedback"
              component={Feedback}
            />
            <ProtectedRoute
              exact
              path="/admin"
              component={Admin2}
            />
            <ProtectedRoute
              exact
              path="/age"
              component={SelectAge}
            />
            <Route
              exact
              path="/thanks"
              component={Thanks}
            />
            <ProtectedRoute
              exact path='/procedure/xray'
              component={XrayProcedure}
            />
            <ProtectedRoute 
            exact path='/procedure'
            component={ProcedureMain}
            />
          <ProtectedRoute 
          exact path='/procedure/xray1'
          component={Xray1} />
            <ProtectedRoute
              exact path='/procedure/xray2'
              component={Xray2} />
            <ProtectedRoute
              exact path='/procedure/xray3'
              component={Xray3} />
            <ProtectedRoute
              exact path='/procedure/xray4'
              component={Xray4} />
            <ProtectedRoute
              exact path='/procedure/completed'
              component={Completed} />


            <Route render={() => <h1>404</h1>} />

          </Switch>
          
        </div>
      </Router>
  )}
}

export default connect()(App);
