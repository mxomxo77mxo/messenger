import React, { Component } from 'react';
import { connect } from "react-redux";
import { sendMessage } from '../store/actions/socket';
import { getMessages, CLEAR_NOTIFY, clearNotify } from '../store/actions/messages';
import { toast, ToastContainer } from 'react-toastify'
import _ from 'lodash'

import { Wrapper, FormChat, Message, StartMessaging, UsersList, Avatar, Loading } from '../components';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      chatWith: {},
    }
    this.chatRef = React.createRef()
  }

  componentDidMount() {
    this.onChatSelect()
  }

  onChatSelect = (user, groupId) => {
    groupId = groupId || this.props.match.params.groupId
    this.setState({ chatWith: user })

    if (groupId)
      this.props.getMessages(groupId)
  }

  sendMsg = evt => {
    evt?.preventDefault()

    const { message } = this.state
    const { groupId, memberId } = this.props.match.params

    this.props.sendMessage({ message, groupId, memberId })
    this.setState({ message: '' })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length < this.props.messages.length) {
      const { notifyInfo, userId, match: { params: { groupId } } } = this.props
      if (
        !_.isEmpty(notifyInfo) &&
        +notifyInfo.user.id !== +userId &&
        +groupId !== +notifyInfo.groupId
      ) {
        const { firstName } = this.props.notifyInfo.user

        toast.info(`${firstName} send message`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });

        this.props.clearNotify({
          type: CLEAR_NOTIFY,
          payload: {},
        })
      }

      if (+prevProps.match.params.groupId === +groupId && groupId)
        this.chatRef.current.scrollTo(0, 999999)
    }
  }

  handleTyping = (evt) => {
    this.setState({ message: evt.target.value })
  }

  render() {
    const { message, chatWith } = this.state
    const { messages, userId, loading } = this.props
    const { memberId, groupId } = this.props.match.params

    return (
      <Wrapper>
        <ToastContainer
          position="top-right"
          autoClose={2700}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />

        <div className="container clearfix">
          <UsersList onChatSelect={this.onChatSelect}/>

          <div className="chat">
            {!_.isEmpty(chatWith) && (
              <div className="chat-header clearfix">
                <div className="chat--header">
                  <Avatar user={chatWith}/>

                  <div className="chat-about">
                    <div className="chat-with">Chat with {chatWith?.firstName}</div>
                    <div className="chat-num-messages">already {messages.length} messages</div>
                  </div>

                </div>
              </div>
            )}

            {memberId && !groupId && <StartMessaging memberId={memberId}/>}

            {groupId && !loading && (
              <>
                <div className="chat-history" ref={this.chatRef}>
                  {!_.isEmpty(messages) && (
                    <ul>
                      {messages.map(msg => <Message key={msg.id} msg={msg} userId={userId}/>)}
                    </ul>
                  )}
                </div>

                <div className="chat-message clearfix">
                  <FormChat onSubmit={this.sendMsg} value={message} onChange={this.handleTyping}/>
                </div>
              </>
            )}

            {loading && <Loading/>}
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.users.token,
  messages: state.messages.messagesList,
  userId: state.users.myAccount.id,
  notifyInfo: state.messages.notify,
  loading: state.messages.loading,
  usersList: state.users.usersList,
})

const mapDispatchToProps = {
  sendMessage,
  getMessages,
  clearNotify,
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
