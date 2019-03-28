import React, { Component } from 'react';
import cleaner from './clean.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV5 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv6')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id = "procedureDiv">
                <img src={cleaner} alt="two-iv-pic" />
                <div id = "feedback">
                    <h1>It is very important that your skin is clean when you get an IV. The cleaner feels cool on your skin and smells like hand sanitizer.</h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className= "buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV5;
