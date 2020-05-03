import App from "next/app";
import Head from "next/head";
import { AppWrapper } from "bushido-strap";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import "./styles.css";
import "bushido-strap/css/main.css";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <AppWrapper bgSrc="/dark-bg.jpg" className="app">
          <Head>
            <title>The Artisans Platform</title>
          </Head>
          <Component {...pageProps} />
        </AppWrapper>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
