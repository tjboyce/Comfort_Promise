import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class ProcedureMain extends Component {
    handleClick=()=>{
        this.props.history.push('/procedure/xray')
    }
    handleIV = () => {
        this.props.history.push('/procedure/IV')
    }

    render() {
        return (
            <div>
                <div id="feedback">
                    <h1>Procedure Preparation</h1>
               
                </div>

                <div className="homeButtonDiv">

                    <div className="button-div">
                        <i class="fas fa-x-ray"></i>
                        <button className="buttonA" onClick = {this.handleClick}>Xray</button>
                    </div>

                    <div className="button-div">
                        <i class="fas fa-syringe"></i>
                        <button className="buttonA" onClick = {this.handleIV}>IV</button>
                    </div>

                    <div className="button-div">
                        <i class="fas fa-cut"></i>
                        <button className="buttonA">Stitches</button>
                    </div>
                    <div className="button-div">
                        <i class="fas fa-star-of-life"></i>
                        <button className="buttonA">Lab Draw</button>
                    </div>

                    <div className="button-div">
                        <i class="fas fa-user-md"></i>
                        <button className="buttonA">Surgery</button>
                    </div>

                    <div className="button-div">
                        <i class="fas fa-file-medical-alt"></i>
                        <button className="buttonA">Ultrasound</button>
                    </div>
                    <div className="button-div">
                        <i class="fas fa-radiation"></i>
                        <button className="buttonA">CT Scan</button>
                    </div>

                    <div className="button-div">
                        <i class="fas fa-laptop-medical"></i>
                        <button className="buttonA">MRI</button>
                    </div>

                </div> 

            </div>

        )
    }


}

export default ProcedureMain;
