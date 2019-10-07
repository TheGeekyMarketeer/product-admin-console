import React from 'react';
import IconArrow from '../../../icons/iconArrow'
import './SliderButton.scss'

const SliderButton = ({ onClick, type }) => (
    <button className={`slide-button slide-button--${type}`} onClick={onClick}>
        <span>
            <IconArrow />
        </span>
    </button>
);

export default SliderButton;