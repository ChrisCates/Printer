export function ComponentTemplate(prefix: string, name: string) {
    return `import { ${name}Style } from './${prefix}.style';

export interface ${name}I {

}

export function ${name}Component({ }: ${name}I) {
    return(
        <${name}Style>

        </${name}Style>
    );
}
`;
}