import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';
import router from 'next/router';

class App extends React.Component {

        static getInitialProps({store}) {}


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.incrementCounter}>Increment</button>
                    <button onClick={this.props.decrementCounter}>Decrement</button>
                    <h1>{this.props.counter}</h1>
                </div>
                <div>
                <button type="button" onClick={() => router.push('/nomber')} >pass</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
