import { storageSlice } from './slice/storage'
import { secondSlice } from './slice/second'

export const reducer = {
  storage: storageSlice.reducer,
  second: secondSlice.reducer,
}
