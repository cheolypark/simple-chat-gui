import {useEffect, useRef, useState} from "react"
import styles from "./Chat.module.scss"
import AvatarFrame from "./chat-avatar-frame"
import MessageFrame from "./chat-message-frame"
import {IconButton} from "../Button"
import {useMSGStore} from "../../store/messages"
import {AddIcon, ClearIcon} from "../../resource/icons"

const ChatAvatarButtons = ({message}) => {
  return (
    <div className={styles.containerAvatarBtn}>
      <AvatarFrame message={message}/>
      <ChatBodyButtons message={message}/>
    </div>
  )
}

const ChatBodyButtons = ({message}) => {
  const onAddClick = (e) => {
    e.preventDefault()
  }

  const onDeleteClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.containerBtn}>
      <div>
        <IconButton
          className={styles.messageEditBtn}
          icon={<AddIcon/>}
          onClick={(e) => onAddClick(e)}
          bordered
          title={'Add'}/>
      </div>
      <div>
        <IconButton
          className={styles.messageEditBtn}
          icon={<ClearIcon/>}
          onClick={(e) => onDeleteClick(e)}
          bordered
          title={'Delete'}/>
      </div>
    </div>
  )
}

export default function ChatBody() {
  const [getMessages, isUser, getUpdatedCount] = useMSGStore((s) => [s.getMessages, s.isUser, s.getUpdatedCount])
  const [messages, setMessages] = useState([])
  const chatRef = useRef(null)

  useEffect(() => {
    if (getMessages()) {
      setMessages(getMessages())
    }

  }, [getMessages()])

  useEffect(() => {
    if (chatRef)
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [getUpdatedCount()])

  return (
    <div className={styles.chat_body} >
      {messages && messages.length > 0 ? messages.map((message, i) => {
          return (
            <div key={i} className={isUser(message) ? styles.chat_message_user : styles.chat_message}>
              <div className={styles.chat_message_container} ref={chatRef} >
                {isUser(message) ?
                  <div className={styles.chat_message_item_user}>
                    <MessageFrame message={message}/>
                    <ChatAvatarButtons message={message}/>
                  </div> :
                  <div className={styles.chat_message_item}>
                    <ChatAvatarButtons message={message}/>
                    <MessageFrame message={message}/>
                  </div>
                }
              </div>
            </div>
          )
        }) :
        <>
          {
            <div className={styles.no_dialogue}>
              <>No dialogues...</>
            </div>
          }
        </>
      }
    </div>
  )
}
