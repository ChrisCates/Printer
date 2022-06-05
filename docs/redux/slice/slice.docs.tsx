import { createSlice } from '@reduxjs/toolkit'

export enum DocEnum {
  GettingStarted = 0,
  Structure = 1,
  Tips = 2,
  New = 3,
  Components = 4,
  Pages = 5,
  Api = 6,
  Slices = 7,
  Injectables = 8,
  Overwrites = 9,
  Themes = 10
}

export const docsInitialState = {
  selected: 0 as DocEnum
}

export const docsSlice = createSlice({
  name: 'docs',
  initialState: docsInitialState,
  reducers: {
    setSelected(state, action) {
      state.selected = action.payload as DocEnum
    }
  }
})

export const { setSelected } = docsSlice.actions
