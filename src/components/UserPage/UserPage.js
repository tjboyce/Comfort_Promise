import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Resources from '../Resources/Resources';




// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
   <Link to="/age">
   <h2>Resources
     </h2></Link>
    <Link to="/procedure">
      <h2>Procedure Prep
     </h2></Link>
    <Link to="/feedback">
      <h2>Feedback
     </h2></Link>
<Resources props={props} />
     {/* <Button onClick = {this.handleClick}>Test Button</Button> */}
   
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });


const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
