import React from 'react';
import IconArrowDown from '../../../icons/iconArrow'
import './Expand.scss'

const ExpandDetails = ({ onClick }) => (
    <button onClick={onClick} className="show-details-button">
        <span>
            <IconArrowDown />
        </span>
    </button>
);

export default ExpandDetails;
