import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SelectAge.css' 

class SelectAge extends Component {

    state = {
        selection: ''
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_INFO' })
    }

    handleChange = (event) =>{
        console.log('event value', event.target.value);
        
        this.setState({
            selection: event.target.value,
        })
    }



    render() {
        console.log('TONY',this.state.selection)



        return (
         
            <div className = "selectDiv">
                <h2>What age child are you working with? </h2>
                <select onChange = {this.handleChange}>
                    <option value=''>Select Age Group Here</option>
                    <option  value="1" className = "infant">Infant</option>
                    <option value="2" className="toddler">Toddler</option>
                    <option value="3" className="schoolAge">School Age</option>
                    <option  value="4" className="teens">Teens</option>
                </select>
     
             <div>
                 {this.props.projectReducer.filter(item => item.id === Number(this.state.selection)).map(item => 
                    <>
                    <div className="infoDiv"><h3>{item.age_group}</h3>
                    
                    <iframe className="videoDiv" key={item.id} src={item.video} title="infant video" />
                    <ul>
                        <li>{item.resource1}</li>
                        <li>{item.resource2}</li>
                        <li>{item.resource3}</li>
                        <li>{item.resource4}</li>
                        <li>{item.resource5}</li>
                    </ul>
                         </div>
                    </>
                 )}
                </div>


            </div>
       
        )
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(SelectAge);
