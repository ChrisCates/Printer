export const PackageTemplate = `{
    "name": "print-template",
    "version": "1.0.0",
    "scripts": {
        "dev": "next dev --port 4200",
        "build": "next build",
        "start": "next start",
        "prepare": "husky install",
        "lint": "eslint . --ext ts,tsx --resolve-plugins-relative-to ."
    },
    "husky": {
        "hooks": {
            "pre-commit": "npm run build"
        }
    },
    "dependencies": {
        "@reduxjs/toolkit": "^1.7.1",
        "iron-session": "^6.1.2",
        "next": "^12.0.7",
        "next-redux-wrapper": "^7.0.5",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-redux": "^7.2.6",
        "styled-components": "^5.3.3"
    },
    "devDependencies": {
        "@types/node": "^17.0.13",
        "@typescript-eslint/eslint-plugin": "^5.14.0",
        "@typescript-eslint/parser": "^5.14.0",
        "babel-plugin-styled-components": "^2.0.2",
        "eslint": "^8.10.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-config-standard": "^16.0.3",
        "eslint-plugin-import": "^2.25.4",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^4.0.0",
        "eslint-plugin-promise": "^5.2.0",
        "eslint-plugin-react": "^7.29.3",
        "husky": "^7.0.4",
        "prettier": "^2.5.1",
        "typescript": "^4.5.4"
    }
}
`
