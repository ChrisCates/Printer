export default `import { useRouter } from 'next/router'
import { connect } from 'react-redux'

export interface {{name}}I {}

export function {{name}}({}: {{name}}I) {
  const router = useRouter()
  const { {{url}} } = router.query

  return <h1>Component {{name}}</h1>
}

export const {{name}}State = (state) => ({})

export const {{name}}Actions = {}

export default connect({{name}}State, {{name}}Actions)({{name}})
`
