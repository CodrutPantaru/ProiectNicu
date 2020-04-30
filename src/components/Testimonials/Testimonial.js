import React from 'react';
import './Testimonial.scss';

function Testimonial(props) {
    return (
        <div className="testimonial">
            <div className="testimonial-description">
                {props.description}
            </div>
            <div className="testimonial-author">
                {props.author}
            </div>
            <div className="div-block-3">

            </div>
        </div>
    )
}

export default Testimonial;