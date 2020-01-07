import React, {useState} from 'react';

import Header from './../Header';
import Days from './../Days';
import Months from './../Months';
import Drawer from './../Drawer';
import DayActivities from './../DayActivities';

import './style.scss';

const Page = () => {
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(null);
    const [activities, setActivities] = useState({
        '10-0': [],
        '6-11': [{
            task: 'Alex\'s Birthday'
        }],
    });

    const addNewActivity = (day, month, task) => {
        const dayActivityList = activities[`${day}-${month}`] || [];
        const newActitivityList = [...dayActivityList, {  task: task }];
        const newActivities = {...activities};
        newActivities[`${day}-${month}`] = newActitivityList;
        setActivities(newActivities);
    }
    
    const deleteActivity = (day, month, index) => {
        const newActivities = {...activities};
        const dayActivityList = newActivities[`${day}-${month}`].filter((item, currentIndex) => index !== currentIndex);
        newActivities[`${day}-${month}`] = dayActivityList;
        setActivities(newActivities);
    }

    const handleDayClick = (dayNum) => {
        setDay(day === dayNum ? null : dayNum);
    }

    const onDrawerClose = () => {
        setDay(null);
    }

    const handleMonthClick = (index) => {
        setMonth(index);
        setDay(null);
    }

    return (
        <div className="page">
            <Header title="Calender"/>
            <div className="page__content">
                <Months onMonthClick={ handleMonthClick } month={month}/>
                <Days onDayClick={handleDayClick} month={month}/>
            </div>
            <Drawer open={!!day} onCloseClick={onDrawerClose}>
                <div>
                    <DayActivities day={day} month={month} activities={activities} addNew={addNewActivity} handleDelete={deleteActivity}/>
                </div>
            </Drawer>
        </div>
    )
};

export default Page;