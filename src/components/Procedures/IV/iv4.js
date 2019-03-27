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

    render() {
        return (
            <div>
                <img src={band} alt="two-iv-pic" width="100%" />
                <div>
                    <h1>IV </h1>
                    <p>second step</p>
                    <span>This tight band, a tourniquet, helps the nurse see your vein very well 💉 </span>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV4;