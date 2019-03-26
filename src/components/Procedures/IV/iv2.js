import React, { Component } from 'react';
import handiv from './hand.jpeg'
import './styles/styles.css'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class IV2 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/iv3')
    }

    render() {
        return (
            <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${handiv})`,
                backgroundPosition: 'center',
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
                        <div style = {{
                             display: 'flex',
                             flexDirection: 'column' 
                             }} >
                            <span style={{
                                color: 'white',
                                opacity: '0.7',
                                fontWeight: '200',
                            }}>
                             Description
                            </span>
                            <span style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '30px',
                                fontStyle: 'italic',
                                fontFamily: 'serif'
                            }}>
                             IV
                            </span>

                        </div>
                    <p className="ivpage2" style={{
                        color: 'white',
                        opacity: '0.9',
                        fontWeight: '200'
                    }}>
                                Sometimes kids need an IV, which is a small, soft tube-like tiny straw. 
                                The IV goes into one of your veins, usually in your hand or arm. 
                                An IV can be used to give your body fluids or medicine.  
                            </p>
                        
                    <div onClick={this.handleClick} className='spicy-button🌶'>Next</div>
                        
                </div>
            </div>

        )
    }


}

export default IV2;
