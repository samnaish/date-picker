import React from 'react';

import './style.scss';

const Drawer = ({ open, onCloseClick, children }) => {
    return (
        <div className={`drawer ${open ? 'drawer--open': ''}`}>
            <button onClick={onCloseClick} className="drawer__button" type="button">X</button>
            <div className="drawer__content">{children}</div>
        </div>
    )
}

export default Drawer;