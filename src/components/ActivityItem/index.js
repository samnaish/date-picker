import React from 'react';

import './style.scss';

const ActivityItem = ({ task , handleChange }) => {
    return(
        <input className="item__input" value={task} onChange={handleChange}/>
    );
}

export default ActivityItem;