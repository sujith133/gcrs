import { create } from 'zustand'

const useStore = create((set) => ({
  states: '',
  changeState: (newState) => set(() => ({ states: newState})),
}))

export default useStore