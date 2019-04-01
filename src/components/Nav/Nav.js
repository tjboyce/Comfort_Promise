import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

import './Nav.css';
import Nav2 from  './Nav2';

const Nav = (props) => (


     <div className="nav">
     <Nav2 />

  
  
  
      <div>
     
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
      {props.user.id >= 6 && (
        <>
          
          <Link className="nav-link" to="/age">
            Resources
          </Link>
          <Link className="nav-link" to="/procedure" > Procedure</Link>
            <Link className="nav-link" to="/feedback">
              Feedback
          </Link>
          <LogOutButton className="nav-link"/>
          
        </>
      )}

        {props.user.id === 5 && (
          <>
        <Link className="nav-link" to="/admin">
          Admin
          </Link>
          <LogOutButton className="nav-link" />
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
