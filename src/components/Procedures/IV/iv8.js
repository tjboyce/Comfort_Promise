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

    render() {
        return (
            <div>
                <img src={ivinhand} alt="two-iv-pic" width="100%" />
                <div>
                    <h1>IV sixth step </h1>
                    <span>After your IV is in, the nurse will check to make sure it is working well. Then they will 
                        put tape on it to make sure it stays where it needs to. A blue wrap can help make sure your IV stays safe.
                    </span>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV6;
