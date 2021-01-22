//next uses the App component to initialize pages. We created the "_app.jsx" file to override the default App Component.

//Similar to how Redux is connected to Client-side react apps, we can connect our server-side rendered application here.
//We use "Provider" provided by react-redux and connect our store
//getInitialProps allows the page to wait for data before rendering starts.
//Every page that has getInitialProps will be server-side rendered.

import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps, store} = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
