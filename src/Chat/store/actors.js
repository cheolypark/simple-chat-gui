import {create} from "zustand"
import {persist} from "zustand/middleware"




export const useActorsStore = create()(
  persist(
    (set, get) => ({
      actors: {},

      resetActors() {
        set(() => ({
          actors: {},
        }))
      },

      setActors(actors) {
        set(() => ({actors}))
      },

      getActor(id) {
        return get().actors[id];
      },

    }),
    {
      name: "ActorsStore",
    },
  ),
);

