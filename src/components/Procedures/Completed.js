import React, { Component } from 'react';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Completed extends Component {
    handleClick = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div>
                {/* <img src={xray4} alt="handXray" width="100%" /> */}
                <div>
                    <h1>Procedure Complete</h1>
                    <button onClick={this.handleClick}>Back to procedures list</button>
                </div>
            </div>

        )
    }


}

export default Completed;
