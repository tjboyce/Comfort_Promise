import React, { Component } from 'react';
import numbing from './numbing.jpeg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV6 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv7')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }

    render() {
        return (
            <div id= "procedureDiv">
                <img src={numbing} alt="two-iv-pic"  />
                <div id = "feedback">
                    <h1>The nurse can use either a lotion or a J-tip to numb your skin. This will help so that it doesnt bother you very much when the IV goes into your vein. 
                        The J-tip works right away. When the medicine sprays on your skin, it makes a noise like a loud pop can opening, but it shouldnt hurt. Most kids say it feels cool and wet.
                        The LMX cream has to stay on your skin for at least 20 minutes under a sticker. It still works, even after it is wiped off. </h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>
                    <button className = "buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>

        )
    }


}

export default IV6;
