import Avatar from "./chat-avatar"
import styles from "./Chat.module.scss"
import {capitalize} from "../../util/string_util.mjs"
import {useMSGStore} from "@/Chat/store/messages"


export default function AvatarFrame({message, avatarClicked}) {
  const [getActor] = useMSGStore((s) => [s.getActor])

  return (
    <div className={styles.chat_message_avatar}>
      <div className={styles.chat_message_avatar} onClick={() => avatarClicked}>

        <Avatar imgSource={getActor(message).image}/>

        <div className={styles.chat_message_avatar_name}>
          <div className={styles.chat_message_avatar_name_text}>
            {getActor(message).name ? capitalize(getActor(message).name) : capitalize('John doe')}
          </div>
        </div>
      </div>

      {(message.preview || message.streaming) && (
        <div className={styles.chat_message_status}>
          {'Typing'}
        </div>
      )}

    </div>
  )
}
