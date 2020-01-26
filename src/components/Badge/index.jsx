import React from 'react';
import classNames from 'classnames';

import './badge.scss';

const Badge = ({ color, onClick }) => (
    <i
        onClick={onClick} 
        className={classNames('badge', {[`badge--${color}`]:color}, classNames)}
    ></i>
);


export default Badge;