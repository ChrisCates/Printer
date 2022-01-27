export function PageTemplate (name: string) {
  return `export function ${name}() {
    return (<h1>Hello, from Printer</h1>);
}

export default ${name};`
}
