import React, { Component } from 'react';
import xray4 from '../XrayProcedure/xray4.jpeg';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Xray4 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/completed')
    }

    render() {
        return (
            <div id="procedureDiv">
                <img src={xray4} alt="handXray"  />
                <div>
                    <h1>When you are having an x-ray taken, sometimes kids wear a heavy apron over the part of the body that does not need a picture. </h1>
                    <button onClick={this.handleClick}>Finish</button>
                </div>
            </div>

        )
    }


}

export default Xray4;
