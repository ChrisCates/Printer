export default `import { connect } from 'react-redux'

export interface TestI {}

export function Test({}: TestI) {
  return <h1>Welcome to Printer</h1>
}

export const TestState = (state) => ({})

export const TestActions = {}

export default connect(TestState, TestActions)(Test)
`
