import React from 'react';

import './Event.css';

function Event(param) {
    return(
        <div>
            <span className="Title">{param.title}</span>
            <span className="Date">{param.date}</span>
            <span>{param.location}</span>
            <span className="Description">{param.description}</span>
        </div>
    )
}

export default Event;