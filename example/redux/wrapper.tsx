import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { reducer } from 'redux/reducer'

export function makeStore() {
  return configureStore({ reducer })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
