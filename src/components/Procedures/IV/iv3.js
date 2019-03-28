import React, { Component } from 'react';
import accuvein from './accuvein.jpg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV3 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv4')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id="procedureDiv">
                <img src={accuvein} alt="hand" id="hand" />

                <div id = "feedback">
                    <h1>A nurse will look for the best place to put your IV. He or she might use special light called an AccuVein to find a good vein.</h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className = "buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV3;
