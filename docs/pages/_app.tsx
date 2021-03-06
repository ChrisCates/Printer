import Head from 'next/head'
import App, { AppContext, AppInitialProps } from 'next/app'
import { wrapper } from 'redux/redux.wrapper'

export class AppComponent extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      },
      appProp: ctx.pathname
    }
  }

  public render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Printer</title>
          <meta name="author" content="Chris Cates" />
          <meta
            name="description"
            content="🖨️ Printer: A code generation tool for Next.js, Redux, Prisma Development."
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Printer" />
          <meta
            name="twitter:description"
            content="🖨️ Printer: A code generation tool for Next.js, Redux, Prisma Development."
          />
          <meta name="twitter:site" content="https://printer.chriscates.ca" />
          <meta property="og:title" content="Printer" />
          <meta
            property="og:image"
            content="https://printer.chriscates.ca/assets/image/og.image.jpg"
          />
          <meta
            property="og:description"
            content="🖨️ Printer: A code generation tool for Next.js, Redux, Prisma Development."
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default wrapper.withRedux(AppComponent)
