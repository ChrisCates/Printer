export default `import { useRouter } from 'next/router'
import { connect } from 'react-redux'
  
export interface Url2I {

}

export function Url2({ }: Url2I) {
    const router = useRouter()
    const { url1, url2 } = router.query  

    return <h1>Welcome to Printer</h1>
}

export const Url2State = state => ({

})

export const Url2Actions = { }

export default connect(Url2State, Url2Actions)(Url2)
`