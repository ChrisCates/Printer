import { useRouter } from 'next/router'
import { connect } from 'react-redux'
  
export interface UrlI {

}

export function Url({ }: UrlI) {
    const router = useRouter()
    const { multi, url } = router.query  

    return <h1>Welcome to Printer</h1>
}

export const UrlState = state => ({

})

export const UrlActions = { }

export default connect(UrlState, UrlActions)(Url)
