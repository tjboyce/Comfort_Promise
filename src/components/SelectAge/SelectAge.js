import React, { Component } from 'react';
import { connect } from 'react-redux';
import Resources from '../Resources/Resources';


class SelectAge extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_INFO' })
    }

    selectAge (){
        return this.props.projectReducer.map(item =>
            <Resources key = {item.id} item={item}/>)
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
                {this.selectAge()}
           </div>

        )
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(SelectAge);
