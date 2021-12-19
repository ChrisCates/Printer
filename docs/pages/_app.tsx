import Head from 'next/head';
import App, { AppContext, AppInitialProps } from 'next/app';
import { wrapper } from '../redux/redux.wrapper';

export class AppComponent extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: { ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) },
      appProp: ctx.pathname,
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/css/app.css"/>
          <link rel="icon" type="image/png" href="/image/printer.png"/>
          <title>Printer</title>
        </Head>
        <Component {...pageProps}/>
      </>
    );
  }
}

export default wrapper.withRedux(AppComponent);
