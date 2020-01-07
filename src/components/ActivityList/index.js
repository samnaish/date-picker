import React from 'react';
import ActivityItem from '../ActivityItem';

import './style.scss';

const ActivityList = ({title, activities = [], processes = {} }) => {
    return (
        <div className="activities">
            <div className="activites__title-box">
                <h1 className="activities__title">{title}</h1>
            </div>
            <div>
                {
                   activities.map((item, index) => {
                       return (
                           <div key={index}>

                               <ActivityItem task={item.task} handleChange={(event) => processes.onChange(event, index)}/>
                                {
                                    processes.onDelete && <button className="list__button" type="button" onClick={() => processes.onDelete(index)}>Delete</button>
                                }
                           </div>
                       )
                   }) 
                }
            </div>
        </div>
    );
}

export default ActivityList;