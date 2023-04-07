import cn from 'classnames';
import React from 'react';
import './Notification.scss';


const Notification = ({avatar, username, action, subject, message, img, time, type, read}) => {
  
  return (
    <li className={cn('notification', {'notification_read': read})}>
      <div className="notification__left-wrapper">
        <img src={process.env.PUBLIC_URL + avatar} alt="" className='notification__avatar'/>
        <div className="notification__text">
          <div className="notification__info">
            <span className="notification__username"><a href="/">{username}</a></span>
            <span className="notification__action">{action}</span>
            <span className="notification__subject"><a href="/">{subject}</a></span>
            <span className="notification__flag">&#8226;</span>
          </div>
          <div className="notification__time">{time} ago</div>
          {(type === "message") && (<div className="notification__message"><a href="/">{message}</a></div>)}
        </div>
      </div>
      {(type === "picture") && (<a href='' className="notification__img"><img src={img} alt="" /></a>)}
    </li>
  )
}

export default Notification