import React, {useEffect} from 'react'
import ChatFrame from "./subcomponents/ChatFrame"
import {useMSGStore} from "@/Chat/store/messages"


const ChatInterface = ({}) => {
  const [resetMessages] = useMSGStore((s) => [s.resetMessages])

  useEffect(() => {
    resetMessages()
  }, [])

  return (
    <div>
      <ChatFrame/>
    </div>
  )
}

export default ChatInterface
