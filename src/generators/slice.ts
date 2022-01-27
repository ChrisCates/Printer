import { join } from 'path'
import { read, write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { SliceTemplate } from '../templates/slice/slice'
import { ReduxReducerTemplate } from '../templates/slice/redux.reducer'

export async function generateSlice (name: string) {
  const slicePath = join(process.cwd(), 'redux', 'slice', `slice.${name}.tsx`)
  const reducerPath = join(process.cwd(), 'redux', 'redux.reducer.tsx')
  const reducersPath = join(process.cwd(), 'redux', 'reducers.json')
  let reducers = []

  try {
    reducers = JSON.parse(read(reducersPath) as string) as string[]
    reducers.push(name)
    write(reducersPath, JSON.stringify(reducers, null, 2))
  } catch (error) {
    Log('    ❗  redux/reducers.json is invalid, please make sure it\'s a JSON Array'.red)
    process.exit()
  }

  write(slicePath, SliceTemplate(name))
  Log(`    ✅  Created redux/slice.${name}.tsx`.green)
  write(reducerPath, ReduxReducerTemplate(reducers))
  Log('    ✅  Updated redux/redux.reducer.tsx'.green)
}
