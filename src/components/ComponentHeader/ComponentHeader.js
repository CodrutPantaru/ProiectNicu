import React from 'react';
import './ComponentHeader.scss';

function ComponentHeader(props) {
    return (<div className="services-header">
        <div className="line-container">
            <div className="line-circle">
                <img src={props.thumbnail} width="26" alt="" className="image" />
            </div>
            <div className="line-border">
            </div>
            <div className="text-block-3">
                {props.title}
        </div>
        </div>
    </div>)
}

export default ComponentHeader;