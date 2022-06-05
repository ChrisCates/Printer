export default `import { {{name}}Style } from './{{prefix}}.style'

export interface {{name}}I {}

export function {{name}}Component({}: {{name}}I) {
  return <{{name}}Style></{{name}}Style>
}
`
