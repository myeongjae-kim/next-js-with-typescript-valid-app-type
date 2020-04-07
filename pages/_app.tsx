import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return <>
    <div>Valid MyApp type.</div>
    <Component {...pageProps} />
  </>
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default MyApp;