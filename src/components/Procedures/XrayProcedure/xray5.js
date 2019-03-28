import React, { Component } from 'react';
import kid_doc_xray from '../XrayProcedure/kid_doc_xray.jpg';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Xray5 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/completed')
    }

    render() {
        return (
            <div id="procedureDiv">
                <img src={kid_doc_xray} alt="handXray" />
                <div id="feedback">
                   <h1>When you are all finished the doctor will look at your x-ray pictures and show you what your bones look like!  </h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className="buttonA" onClick={this.handleClick}>Finish</button>
                </div>
            </div>

        )
    }


}

export default Xray5;