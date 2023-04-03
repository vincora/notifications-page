import cn from 'classnames';
import React from 'react';
import './Notification.scss';


const Notification = ({avatar, username, action, subject, message, img, time, type, status}) => {
  
  return (
    <li className='notification'>
      <div className="notification__left-wrapper">
        <img src={avatar} alt="" className='notification__avatar'/>
        <div className="notification__text">
          <div className="notification__info">
            <span className="notification__username">{username}</span>
            <span className="notification__action">{action}</span>
            { (subject) && (
              <span className={cn(
                {"notification__subject-post":(type === "post"),
                "notification__subject-group":(type === "group")}
                )}>
                  {subject}
              </span>
              )}
            <span className="notification__flag">&#8226;</span>
          </div>
          <div className="notification__time">{time} ago</div>
          {(type === "message") && (<div className="notification__message">{message}</div>)}
        </div>
      </div>
      {(type === "picture") && (<div className="notification__img"><img src={img} alt="" /></div>)}
    </li>
  )
}

export default Notification