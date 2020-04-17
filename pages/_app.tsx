import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

// Or alternatively: 
/*
import App from "next/app";
MyApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
*/
// https://github.com/isaachinman/next-i18next/issues/615#issuecomment-575578375

export default MyApp;