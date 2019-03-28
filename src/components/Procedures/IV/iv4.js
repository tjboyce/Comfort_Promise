import React, { Component } from 'react';
import band from './band.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV4 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv5')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id="procedureDiv">
                <img src={band} alt="two-iv-pic"  />
                <div id = "feedback">
                    <h1>This tight band, a tourniquet, helps the nurse see your vein very well </h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className = "buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV4;
