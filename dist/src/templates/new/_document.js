"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTemplate = void 0;
exports.DocumentTemplate = "import NextDocument from 'next/document'\nimport { ServerStyleSheet } from 'styled-components'\n\nexport default class Document extends NextDocument {\n  static async getInitialProps(ctx) {\n    const sheet = new ServerStyleSheet()\n    const originalRenderPage = ctx.renderPage\n\n    try {\n      ctx.renderPage = () =>\n        originalRenderPage({\n          enhanceApp: (App) => (props) =>\n            sheet.collectStyles(<App {...props} />)\n        })\n\n      const initialProps = await NextDocument.getInitialProps(ctx)\n\n      return {\n        ...initialProps,\n        styles: (\n          <>\n            {initialProps.styles}\n            {sheet.getStyleElement()}\n          </>\n        )\n      }\n    } finally {\n      sheet.seal()\n    }\n  }\n}\n";
//# sourceMappingURL=_document.js.map