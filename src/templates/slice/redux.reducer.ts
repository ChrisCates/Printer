export function ReduxReducerTemplate (slices: string[]) {
  return `${slices.map(slice => `import { ${slice}Slice } from './slice/${slice}';\n`).join('')}
export const reducer = {
    ${slices.map(slice => `${slice}: ${slice}Slice.reducer,\n`).join('')}}
`
}
