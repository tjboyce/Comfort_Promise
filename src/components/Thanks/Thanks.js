import React, { Component } from 'react';
import { connect } from 'react-redux';


class Thanks extends Component {

   

    
    
        render() {
            return (
            <div>
           
                <h3 className = "thanks">Thank you for your feedback!</h3>

            </div>

        )
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Thanks);
