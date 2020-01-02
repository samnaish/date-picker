import React from 'react';

import './style.scss';

const getMonths = (locale) => {
    const dateFormat = new Intl.DateTimeFormat(locale, { month: 'long' });
    const months = [];
    for (let month = 0; month < 12; month++) {
        const newDate = new Date(Date.UTC(2000, month, 1));
        months.push(dateFormat.format(newDate));        
    }
    return months;
}

const Months = ({ onMonthClick, month }) => {

    const months = getMonths('en-GB');

    return (
        <div className="months">
            {
                months.map((name, index) => {
                    return <button className={`months__button ${month === index ? 'months__button--active': ''}`} onClick={() => onMonthClick(index)} type="button" key={index}>{name}</button>
                })
            }
        </div>
    );
}

export default Months;