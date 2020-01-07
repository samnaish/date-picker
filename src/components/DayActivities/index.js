import React, { useState } from 'react';
import ActivityList from '../ActivityList';

import './style.scss';

const DayActivities = ({day, month, activities, addNew, handleDelete}) => {

    const dayActivityList = activities[`${day}-${month}`] || [];

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addNew(day,month,event.target.value);
            event.target.value = '';
        }
    }

    return (
        <div className="activity">
            <input className="activity__input" type="text" placeholder="type here" onKeyDown={handleKeyDown}/>
            <div className="activity__list-container">
                <ActivityList title="Activity list" activities={dayActivityList} processes={{
                    onChange: () => console.log('change'),
                    onDelete: (index) => handleDelete(day, month, index)
                    
                }}/>
            </div>
        </div>
    );
}

export default DayActivities;