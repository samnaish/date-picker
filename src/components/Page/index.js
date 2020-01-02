import React, {useState} from 'react';

import Header from './../Header';
import Days from './../Days';
import Months from './../Months';

import './style.scss';

const Page = () => {
    const [month, setMonth] = useState(0);
    
    return (
        <div className="page">
            <Header title="Calender"/>
            <div className="page__content">
                <Months onMonthClick={ setMonth } month={month}/>
                <Days month={month}/>
            </div>
        </div>
    )
};

export default Page;