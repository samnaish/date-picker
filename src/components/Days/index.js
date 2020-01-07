import React from 'react';

import './style.scss';

const getNumDays = (month) => {
    const today = new Date(Date.now());
    return new Date(today.getFullYear(), month + 1, 0).getDate();
}

const Days = ({month, onDayClick}) => {

    const numDays = getNumDays(month);
    
    return (
        <div className="days">
            {
                [...Array(numDays)].map((day, index) => {
                    return <button className="days__button" onClick={() => onDayClick(index + 1)} type="button" key={index}>{index + 1}</button>
                })
            }
        </div>
    );
};

export default Days;