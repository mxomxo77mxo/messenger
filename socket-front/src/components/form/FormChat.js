import React from 'react';

const FormChat = ({onSubmit, value, onChange, ...props}) => {
  const onKeyPress = evt => {
    if (evt.key === 'Enter')
      onSubmit()
  }

  return (
    <form onSubmit={onSubmit} {...props}>
      <textarea
        onKeyPress={onKeyPress}
        onChange={onChange}
        name="message-to-send"
        id="message-to-send"
        placeholder="Type your message"
        value={value}
        rows="3"
      />

      <i className="fa fa-file-o"/> &nbsp;&nbsp;&nbsp;
      <i className="fa fa-file-image-o"/>

      <button type="submit">Send</button>
    </form>
  );
};

export default FormChat;