import { connect } from 'react-redux'

export interface IndexI {}

export function Index({}: IndexI) {
  return <h1>Welcome to Printer</h1>
}

export const IndexState = (state) => ({})

export const IndexActions = {}

export default connect(IndexState, IndexActions)(Index)
