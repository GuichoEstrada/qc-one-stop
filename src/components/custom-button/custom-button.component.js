import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ inverted, ...otherProps }) => {
    return(
        <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}></button>
    )
}

export default CustomButton;