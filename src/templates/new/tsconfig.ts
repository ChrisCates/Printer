export const TSConfigTemplate = `{
    "compilerOptions": {
        "target": "es5",
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "baseUrl": "./",
        "allowJs": true,
        "skipLibCheck": true,
        "strict": false,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "incremental": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve"
    },
    "include": [
        "next-env.d.ts",
        "**/*.ts",
        "**/*.tsx"
    ],
    "exclude": [
        "node_modules"
    ]
}
`;