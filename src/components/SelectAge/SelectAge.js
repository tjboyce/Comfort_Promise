import React, { Component } from 'react';
import { connect } from 'react-redux';


class SelectAge extends Component {

    componentDidMount = () => {
        
    }





    render() {
     

        return (
           <div>
            <h3>What age child are you working with? </h3>
                <select>
                    <option value = ''>Select Age Group Here</option>
                    <option value="1">Infant</option>
                    <option value="2">Toddler</option>
                    <option value="3">School Age</option>
                    <option value="4">Teens</option>
                </select>
           </div>
        )
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(SelectAge);
