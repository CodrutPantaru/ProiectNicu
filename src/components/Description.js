import React from 'react';
import './Description.scss';

function Description(props) {
    return (
        <div className="description">
            {props.description}
        </div>
    )
}

export default Description;