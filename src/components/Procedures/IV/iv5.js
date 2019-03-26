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

    render() {
        return (
            <div>
                <img src={cleaner} alt="two-iv-pic" width="100%" />
                <div>
                    <h1>IV third step</h1>
                    <span> It is very important that your skin is clean when you get an IV. The cleaner feels cool on your skin and smells like hand sanitizer.</span>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV5;
