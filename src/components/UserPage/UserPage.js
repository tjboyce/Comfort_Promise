import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserPage.css'




// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  handleResources= ()=>{
    this.props.history.push('/age')
  }
  handleProcedure = () => {
    this.props.history.push('/procedure')
  }
  handleFeedback = () => {
    this.props.history.push('/feedback')
  }

  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
    </h1>
        <div className="homeButtonDiv">
          <div className="button-div">
            <i class="fas fa-user-md"></i>
            <button className="buttonA" onClick = {this.handleResources}>Resources</button>
          </div>

          <div className="button-div">
            <i class="fas fa-notes-medical"></i>
            <button className="buttonA" onClick = {this.handleProcedure}>Procedure Prep</button>
          </div>

          <div className="button-div">
            <i class="fas fa-comment-medical"></i>
            <button className="buttonA" onClick = {this.handleFeedback}>Feedback</button>
          </div>


        </div>
      </div>
    )
  }

}



const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
