import React, { Component } from 'react';
import hand from './hand.jpeg'
import './Procedure.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV1 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv2')
    }

    render() {
        return (
            <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hand})`,
                backgroundPosition:'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                backgroundSize: 'cover',
                position: 'absolute',
            }}>
                <div style={{
                    margin: '40px auto',
                    width: '80%',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '30px'
                    }}>
                        <span style={{
                            color: 'white',
                            opacity: '0.7',
                            fontWeight: '200',
                        }}>
                            Welcome to
                        </span>
                        <span style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '30px',
                            fontStyle:'italic',
                            fontFamily: 'serif'
                        }}>
                            IV
                        </span>
                        
                    </div>

                    <div onClick={this.handleClick} style={{
                        height: '50px',
                        lineHeight: '50px',
                        verticalAlign: 'middle',
                        textAlign: 'center',
                        fontSize: '15px',
                        color: '#fff',
                        backgroundColor: 'darkorange',
                        margin: '0px auto',
                        fontWeight: '300',
                        borderRadius: '3px',
                        cursor: 'pointer',
                    }}>
                        Start Procedure Preparation
                    </div>

                </div>
            </div>

        )
    }


}

export default IV1;