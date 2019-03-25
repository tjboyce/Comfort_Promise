import React, { Component } from 'react';
import xray3 from '../XrayProcedure/xray3.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Xray3 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/xray4')
    }

    render() {
        return (
            <div>
                <img src={xray3} alt="handXray" width="100%" />
                <div>
                    <h1>More Xray Stuff</h1>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default Xray3;
