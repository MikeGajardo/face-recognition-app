import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45} className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }}>
                <div className='inner-element pa4'>
                    <img style={{ paddingTop: '5px' }} alt='brain logo' src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;