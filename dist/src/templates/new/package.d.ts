export declare const PackageTemplate = "{\n    \"name\": \"print-template\",\n    \"version\": \"1.0.0\",\n    \"scripts\": {\n        \"dev\": \"next dev --port 4200\",\n        \"build\": \"next build\",\n        \"start\": \"next start\",\n        \"prepare\": \"husky install\",\n        \"lint\": \"eslint . --ext ts,tsx --resolve-plugins-relative-to .\"\n    },\n    \"husky\": {\n        \"hooks\": {\n            \"pre-commit\": \"npm run build\"\n        }\n    },\n    \"dependencies\": {\n        \"@reduxjs/toolkit\": \"^1.7.1\",\n        \"next\": \"^12.0.7\",\n        \"next-redux-wrapper\": \"^7.0.5\",\n        \"react\": \"^17.0.2\",\n        \"react-dom\": \"^17.0.2\",\n        \"react-redux\": \"^7.2.6\",\n        \"styled-components\": \"^5.3.3\"\n    },\n    \"devDependencies\": {\n        \"@types/node\": \"^17.0.13\",\n        \"@typescript-eslint/eslint-plugin\": \"^5.14.0\",\n        \"@typescript-eslint/parser\": \"^5.14.0\",\n        \"babel-plugin-styled-components\": \"^2.0.2\",\n        \"eslint\": \"^8.10.0\",\n        \"eslint-config-prettier\": \"^8.5.0\",\n        \"eslint-config-standard\": \"^16.0.3\",\n        \"eslint-plugin-import\": \"^2.25.4\",\n        \"eslint-plugin-node\": \"^11.1.0\",\n        \"eslint-plugin-prettier\": \"^4.0.0\",\n        \"eslint-plugin-promise\": \"^5.2.0\",\n        \"eslint-plugin-react\": \"^7.29.3\",\n        \"husky\": \"^7.0.4\",\n        \"prettier\": \"^2.5.1\",\n        \"typescript\": \"^4.5.4\"\n    }\n}\n";
