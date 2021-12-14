import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { axiosInstance } from "../utils/axios";
import { AxiosError } from "axios";

export interface MyAppProps extends AppProps {
  types: any;
  host: string;
}

function MyApp({ Component, pageProps, types, host }: MyAppProps) {
  console.log("TYPES", types);
  console.log(host);
  return (
    <>
      <Head>
        <meta name="description" content={types.join(", ")}></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const param = appContext.ctx.req?.headers.host?.length;
  try {
    const { data } = await axiosInstance(
      `https://pokeapi.co/api/v2/type/${param}`
    );
    const typesList = [data.name];
    appProps.pageProps = { ...appProps.pageProps, types: typesList };
  } catch (error) {
    const { response } = error as AxiosError;
    if (response?.status === 404) {
      return { notFound: true };
    }
    throw Error(`Server Error: ${response?.status}`);
  }
  // Injecting props in the page
  appProps.pageProps = {
    ...appProps.pageProps,
    host: appContext.ctx.req?.headers.host,
  };
  // Return additional props also to the custom app page
  return {
    ...appProps,
    ...appProps.pageProps,
  };
};

export default MyApp;
