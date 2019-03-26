import React, { Component } from 'react';
import accuvein from './accuvein.jpg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV3 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv4')
    }

    render() {
        return (
            <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${accuvein})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                backgroundSize: 'cover',
                position: 'absolute',
            }}>
                <div>
                    <h1>IV first step</h1>
                    <span>A nurse will look for the best place to put your IV. He or she might use an Accu Vein machine to find a good vein. </span>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV3;
