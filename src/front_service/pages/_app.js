import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import initStore from "../src/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/HeroSection.css";

class EnhancedApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    );
  }
}

export default withRedux(initStore)(EnhancedApp);
