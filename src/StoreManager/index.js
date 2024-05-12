import { create } from 'zustand'

const useStore = create((set) => ({
  states: 'india',
  isOsm:0,
  isAdded:0,
  layerChanged:()=>set((state)=>({isAdded:!state.isAdded})),
  changeOsm: ()=>set((state)=>({isOsm:!state.isOsm})),
  changeState: (newState) => set(() => ({ states: newState})),
}))

export default useStore