import React from 'react';
import './Notification.scss';
import './data.json';

const Notification = () => {
  return (
    <li className='feed__list-item'>
        <article className='notification'>
            <img src="" alt="" className='notification__avatar'/>
            <div className="notification__text">
              <div className="notification__info">
                <div className="notification__username"></div>
                <div className="notification__action"></div>
                <div className="notification__subject"></div>
                <div className="notification__flag"></div>
              </div>
            <div className="notification__time"></div>
            </div>
        </article>
    </li>
  )
}

export default Notification