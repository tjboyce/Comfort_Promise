import React, { Component } from 'react';
import { connect } from 'react-redux';


class Thanks extends Component {

   

    
    
        render() {
            return (
            <div>
           
                <h1 id ="feedback"className = "thanks">Thank you for your feedback!</h1>

            </div>

        )
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Thanks);
