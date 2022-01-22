export function IndexTemplate(prefix: string, name: string) {
    return `import { ${name}Component } from './${prefix}.component';
import { ${name} } from './${prefix}.connect';
import { ${name}Style } from './${prefix}.style';

export { ${name}Component, ${name}, ${name}Style }

`;
}