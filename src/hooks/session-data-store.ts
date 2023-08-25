import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSessionDataStore = create(
  persist(
    (set: any, get: any) => ({
      mediaID: "0",
      setMediaID: (id: string) => set({ mediaID: id }),
    }),
    {
      name: "data-session-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
