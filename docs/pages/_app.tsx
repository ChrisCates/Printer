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
          <meta name="author" content="Chris Cates"/>
          <meta name="description" content="A prescriptive, precision based approach to Next.js, Redux, Prisma Development."/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="Printer"/>
          <meta name="twitter:description" content="A prescriptive, precision based approach to Next.js, Redux, Prisma Development."/>
          <meta name="twitter:site" content="https://printer.chriscates.ca"/>
          <meta name="twitter:creator" content="@ninelamdas"/>

          <meta property="og:title" content="Printer"/>
          <meta property="og:image" content="https://printer.chriscates.ca/image/og.image.jpg"/>
          <meta property="og:description" content="A prescriptive, precision based approach to Next.js, Redux, Prisma Development."/>

          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps}/>
      </>
    );
  }
}

export default wrapper.withRedux(AppComponent);
