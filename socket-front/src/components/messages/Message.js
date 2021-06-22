import React from 'react';
import moment from 'moment';

const Message = ({ msg: { createdAt, data: text, user }, userId }) => {
  return (
    <>
      {userId === user.id ? (
        <li>
          <div className="message-data align-right">
              <span className="message-data-time">
                {moment(createdAt).calendar()}
              </span>&nbsp; &nbsp;

            <span className="message-data-name"><b>{user.firstName}</b></span>
          </div>

          <div className="message other-message float-right">
            {text}
          </div>
        </li>
      ) : (
        <li>
          <div className="message-data">
            <span className="message-data-name"> <b>{user.firstName}</b></span>
            <span className="message-data-time">{moment(createdAt).calendar()}</span>
          </div>
          <div className="message my-message">
            {text}
          </div>
        </li>
      )}
    </>
  )
}

export default Message;
