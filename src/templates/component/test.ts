export function TestTemplate (prefix: string, name: string) {
  return `import { ${name}Component } from './${prefix}.component';
import { ${name} } from './${prefix}.connect';
`
}
