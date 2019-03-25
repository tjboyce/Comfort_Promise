import React, { Component } from 'react';
import IV from './iv.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV1 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv2')
    }

    render() {
        return (
            <div>
                <img src={IV} alt="handXray" width="100%" />
                <div>
                    <h1>IV Procedure</h1>
                    <button onClick={this.handleClick}>Start Procedure</button>
                </div>
            </div>

        )
    }


}

export default IV1;