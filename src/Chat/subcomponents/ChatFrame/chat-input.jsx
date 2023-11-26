import "katex/dist/katex.min.css"
import {useRef, useEffect} from "react"
import styles from "./Chat.module.scss"
import {Textarea} from "../Input"
import {useMSGStore} from "@/Chat/store/messages"

export function MessageInput({messageItem = null}) {
  const [setMessage] = useMSGStore((s) => [s.setMessage])
  const messageRef = useRef()

  const onMessageChanged = (e) => {
    let text = e.currentTarget.value

    if (text.includes('\n')) {
      setMessage({
        actor: "James",
        contents: [
          {
            contentType: "text",
            content: text,
          }
        ]
      })

      e.currentTarget.value = ''
    }
  }

  useEffect(() => {
    if (messageItem && messageItem.content) {
      messageRef.current.value = messageItem.content
    }

  }, [messageItem])

  return (
    <div>
      <Textarea
        ref={messageRef}
        className={styles.chat_input}
        maxLength="20000"
        placeholder={`Type a message`}
        onChange={onMessageChanged}
      />
    </div>
  )
}
