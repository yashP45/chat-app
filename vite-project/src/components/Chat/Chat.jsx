import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from '../CustomHeader/Header'
import StandardMessageForm from '../CustomMessageForm/StandardMessageForm'
import Ai from '../CustomMessageForm/Ai'
const Chat = ({ user, secret }) => {

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret)
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />

      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

export default Chat