import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import Button from '@material-ui/core/Button'
import './Nav.css';
import stars from '../Nav/stars.jpeg'
const Nav = (props) => (


     <div className="nav">

  
  
   
      <div>
        {/* <img src={stars} alt="background-image" className="background-image" width="100%" height /> */}
  <Link to="/home">
        <h2 className="nav-title"><i class="fas fa-child"></i>  Comfort Promise</h2>
        </Link>
    <div className="nav-left">
    
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Resources
          </Link> */}
          <Link className="nav-link" to="/feedback">
            Feedback
          </Link>
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
          <Link className="nav-link" to="/age">
            Age 
          </Link>
          <Link className="nav-link" to="/procedure" > Procedure</Link>
          <LogOutButton className="nav-link"/>
          
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
        </div>
    </div>
  </div>
  
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
