import React, { Component } from 'react';
import IV2 from './iv2.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV4 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv5')
    }

    render() {
        return (
            <div>
                <img src={IV2} alt="two-iv-pic" width="100%" />
                <div>
                    <h1>IV third step</h1>
                    <button onClick={this.handleClick}>Start Procedure</button>
                </div>
            </div>

        )
    }


}

export default IV4;
