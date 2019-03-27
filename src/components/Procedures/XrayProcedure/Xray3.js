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
            <div id="procedureDiv">
                <img src={xray3} alt="handXray"  />
                <div>
                    <h1>The camera shines a light before the picture is taken. </h1>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default Xray3;
