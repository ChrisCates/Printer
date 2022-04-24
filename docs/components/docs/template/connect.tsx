export default `import { connect } from 'react-redux'
import { TestComponent } from './test.component'

export const TestState = (state) => ({})

export const TestActions = {}

export const Test = connect(TestState, TestActions)(TestComponent)
`