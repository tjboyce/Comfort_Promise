import React, { Component } from 'react';
import ivinhand from './ivinhand.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV6 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/completed')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id= "procedureDiv">
                <img src={ivinhand} alt="two-iv-pic" />
                <div id= "feedback">
                    <h1>After your IV is in, the nurse will check to make sure it is working well. Then they will 
                        put tape on it to make sure it stays where it needs to. A blue wrap can help make sure your IV stays safe.</h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className = "buttonA" onClick={this.handleClick}>Finish</button>
                </div>
            </div>

        )
    }


}

export default IV6;
