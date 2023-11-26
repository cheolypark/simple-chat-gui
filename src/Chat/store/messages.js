import {create} from "zustand"
import {persist} from "zustand/middleware"
import {useActorsStore} from './actors'


export const useMSGStore = create()(
  persist(
    (set, get) => ({
      messages: [],
      updatedCount: 0,

      resetMessages() {
        set(() => ({
          messages: [],
          updatedCount: 0,
        }))
      },

      setMessage(message) {
        let index = get().messages.push(message) - 1
        get().updateMessages()

        return index
      },

      updateMessage(index, message) {
        get().messages[index] = message
        get().updateMessages()
      },

      getMessages() {
        return get().messages;
      },

      isUser(message) {
        const actor = get().getActor(message)
        return actor.type.toLowerCase() === "user"
      },

      getActor(message) {
        const actor = useActorsStore.getState().getActor(message.actor)
        return actor
      },

      getUpdatedCount() {
        return get().updatedCount
      },

      updateMessages() {
        set((s) => ({messages: s.messages, updatedCount: get().updatedCount + 1}))
      },

    }),
    {
      name: "MessageStore",
    },
  ),
);
