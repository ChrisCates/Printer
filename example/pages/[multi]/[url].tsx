import { useRouter } from 'next/router'
import { connect } from 'react-redux'

export interface urlI {}

export function url({}: urlI) {
  const router = useRouter()
  const { multi, url } = router.query

  return <h1>Welcome to Printer</h1>
}

export const urlState = (state) => ({})

export const urlActions = {}

export default connect(urlState, urlActions)(url)
