import React from 'react';
import loading_spinner from '../../../Assets/Images/loading_spinner.gif';

export const Preloader = () => {
    return (
        <img style={{width: '200px'}} src={loading_spinner} alt='preloader'/>
    );
};

