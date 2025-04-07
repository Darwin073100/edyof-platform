import { create } from 'zustand';

interface State{
    counter: number,
    
}

export const useCounterStore = create<State>()((set, get)=>({
    counter: 0,
    
}))