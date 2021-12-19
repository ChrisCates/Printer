"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppTemplate = void 0;
exports.AppTemplate = "import App, { AppContext, AppInitialProps } from 'next/app';\nimport { wrapper } from '../redux/redux.wrapper';\n\nexport class AppComponent extends App<AppInitialProps> {\n  public static getInitialProps = async ({ Component, ctx }: AppContext) => {\n    return {\n      pageProps: { ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) },\n      appProp: ctx.pathname,\n    }\n  }\n\n  public render() {\n    const { Component, pageProps } = this.props;\n    return (<Component {...pageProps}/>);\n  }\n}\n\nexport default wrapper.withRedux(AppComponent);\n";
//# sourceMappingURL=_app.js.map