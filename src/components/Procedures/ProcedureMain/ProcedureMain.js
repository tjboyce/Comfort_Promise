import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class ProcedureMain extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Procedures</h1>
                    <ul>
                        <li>
                            <Link to="/procedure/xray">Xray</Link>
                        </li>
                        <li>
                            <Link to="/procedure/IV">IV</Link>
                        </li>
                        <li>Stitches</li>
                        <li>Lab Draw</li>
                        <li>Surgery</li>
                        <li>Ultrasound</li>
                        <li>Flouro</li>
                        <li>CT Scan </li>
                        <li>MRI</li>
                    </ul>
                </div>
            </div>

        )
    }


}

export default ProcedureMain;
