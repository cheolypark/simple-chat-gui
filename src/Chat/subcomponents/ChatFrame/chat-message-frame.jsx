import styles from "./Chat.module.scss"
import ReactPlayer from 'react-player'
import {Markdown} from "./markdown"
import {ChatMessage} from "./chat-message"


export default function MessageFrame({message, onRightClick, setUserInput, scrollRef, editMode = false}) {
  const messageItemClicked = (i) => {
    alert(message.contents[i].content)
  }

  return (
    <div className={styles.chat_message_sub_items}>
      {message.contents.map((item, i) => {

        if (item.contentType === 'text') {
          return (
            <div key={i} className={styles.chat_message_sub_item} onClick={() => {
              messageItemClicked(i)
            }}>
              {editMode ?
                <ChatMessage messageItem={item}/>
                :
                <Markdown
                  content={item.content}
                  loading={(message.loading || message.contents.length === 0)}
                  onContextMenu={(e) => onRightClick(e, message)}
                  onDoubleClickCapture={() => {
                    setUserInput(item.content)
                  }}

                  parentRef={scrollRef}
                />
              }
            </div>
          )
        } else if (item.contentType === 'video') {
          return (
            <div key={i} className={styles.chat_message_sub_item} onClick={() => {
              messageItemClicked(i)
            }}>
              <ReactPlayer url={item.content} width='100%' height='100%'/>
            </div>
          )
        } else if (item.contentType === 'image') {
          return (
            <div key={i} className={styles.chat_message_sub_item} onClick={() => {
              messageItemClicked(i)
            }}>
              <img src={item.content} alt="content image"/>
            </div>
          )
        }
      })}
    </div>
  )
}
