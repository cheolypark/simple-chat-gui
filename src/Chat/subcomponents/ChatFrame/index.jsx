import styles from './Chat.module.scss'
import ChatBody from "./chat-body"
import {MessageInput} from "@/Chat/subcomponents/ChatFrame/chat-input"

const ChatFrame = () => {
  return (
    <div className={styles.containerChat}>
      <ChatBody className={styles.window_content}/>

      <div className={styles.chat_textarea_frame}>
        <MessageInput/>
      </div>
    </div>
  )
}

export default ChatFrame
