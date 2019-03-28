import React, { Component } from 'react';
import needleiv from './flexiblestraw.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV6 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv8')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id ="procedureDiv">
                <img src={needleiv} alt="two-iv-pic" />
                <div id = "feedback">
                    <h1>Your job is to hold very still. There are other things you can choose to do during the procedure;
                        such as playing the ISpy game, taking deep breaths, or watching. </h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className = "buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV6;
