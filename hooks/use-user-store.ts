import { create } from 'zustand'

import { User } from '@/api/auth'

interface UserStoreState {
  userInfo: User | null
}

interface UserStoreActions {
  setUserInfo: (user: User) => void
}

export const useUserStore = create<UserStoreState & UserStoreActions>(
  (set) => ({
    userInfo: null,

    setUserInfo: (user) => set({ userInfo: user })
  })
)
