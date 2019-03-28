import React, { Component } from 'react';
import flexiblestraw from './flexiblestraw.jpeg'
// import './styles/styles.css'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV2 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv3')
    }
    handleBack = () => {
        this.props.history.push('/procedure')
    }


    render() {
        return (

           
            <div id="procedureDiv">
                <img src={flexiblestraw} alt="IV" id="IV" />

                <div id="feedback">
                    
                        <h1>  Sometimes kids need an IV, which is a small, soft tube-like tiny straw.
                               The IV goes into one of your veins, usually in your hand or arm.
                               An IV can be used to give your body fluids or medicine.
                            </h1>
                    <button className="buttonA" onClick={this.handleBack}>Back </button>        
                    <button className="buttonA" onClick={this.handleClick}>Next</button>
                </div>
            </div>
           
           
           
        )
    }


}

export default IV2;
