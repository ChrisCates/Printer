export function ConnectTemplate (prefix: string, name: string) {
  return `import { connect } from 'react-redux';
import { ${name}Component } from './${prefix}.component';

export const ${name}State = state => ({

});

export const ${name}Actions = ({

});

export const ${name} = connect(${name}State, ${name}Actions)(${name}Component);`
}
