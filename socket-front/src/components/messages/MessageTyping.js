import React from 'react';

const MessageTyping = () => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"/> Vincent</span>
        <span className="message-data-time">10:31 AM, Today</span>
      </div>
      <i className="fa fa-circle online"/>
      <i className="fa fa-circle online" style={{ color: "#AED2A6" }}/>
      <i className="fa fa-circle online" style={{ color: "#DAE9DA" }}/>
    </li>
  );
};

export default MessageTyping;