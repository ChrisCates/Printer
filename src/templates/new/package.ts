export const PackageTemplate = `{
    "name": "print-template",
    "version": "1.0.0",
    "scripts": {
        "dev": "next dev --port 4200",
        "build": "next build",
        "start": "next start"
    },
    "dependencies": {
        "@reduxjs/toolkit": "^1.7.1",
        "next": "^12.0.7",
        "next-redux-wrapper": "^7.0.5",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-redux": "^7.2.6",
        "styled-components": "^5.3.3"
    },
    "devDependencies": {
        "babel-plugin-styled-components": "^2.0.2",
        "typescript": "^4.5.4"
    }
}
`;
