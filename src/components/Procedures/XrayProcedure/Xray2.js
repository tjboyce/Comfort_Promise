import React, { Component } from 'react';
import xray2 from '../XrayProcedure/xray2.jpeg'
import xray_procedure from '../XrayProcedure/xray_procedure.jpg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Xray1 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/xray3')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id="procedureDiv">
                <img src={xray_procedure} alt="handXray" />
                <div id = "feedback">
                    <h1>Depending on what the doctor needs a picture of, you may need to sit, stand, or lay down in different positions. This is one way we can take a picture of your chest. </h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className="buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default Xray1;
