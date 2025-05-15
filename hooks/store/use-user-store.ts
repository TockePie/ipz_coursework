import { create } from 'zustand'

import { User } from '@/types/auth'
interface StoreState {
  userInfo: User | null
}

interface StoreActions {
  setUserInfo: (user: User) => void
}

const useUserStore = create<StoreState & StoreActions>((set) => ({
  userInfo: null,

  setUserInfo: (user) => set({ userInfo: user })
}))

export default useUserStore
