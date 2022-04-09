import { createSlice} from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../app/store'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
  extraReducers: {}
})

export const { increment, decrement } = counterSlice.actions

export const selectCount = (state: AppState) => state.counter

export default counterSlice.reducer