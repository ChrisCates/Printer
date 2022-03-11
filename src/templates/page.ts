export function PageTemplate (name: string) {
  return `import { connect } from 'react-redux'

export interface ${name}I {

}

export function ${name}({ }: ${name}I) {
  return <h1>Welcome to Printer</h1>
}

export const ${name}State = state => ({

})

export const ${name}Actions = { }

export default connect(${name}State, ${name}Actions)(${name})
`
}
