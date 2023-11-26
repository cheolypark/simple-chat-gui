import "katex/dist/katex.min.css"
import {useRef, useEffect} from "react"
import styles from "./Chat.module.scss"
import {Textarea} from "../Input"

export function ChatMessage({messageItem = null}) {
  const messageRef = useRef()

  useEffect(() => {
    if (messageItem && messageItem.content) {
      messageRef.current.value = messageItem.content
    }

  }, [messageItem])

  return (
    <div>
      <Textarea
        ref={messageRef}
        className={styles.chat_textarea}
        maxLength="20000"
      />
    </div>
  )
}
