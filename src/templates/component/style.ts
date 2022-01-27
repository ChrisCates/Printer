export function StyleTemplate (prefix: string, name: string) {
  return `import styled from 'styled-components';

export const ${name}Style = styled.div\`

\`;`
}
