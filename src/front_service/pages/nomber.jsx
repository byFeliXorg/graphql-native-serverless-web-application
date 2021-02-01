import React from 'react';

import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

class Nomber extends React.Component {
    static getInitialProps({store}) {}


    render() {
      return (
        <div>
          <div>counter: {this.props.counter}</div>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    counter: state.counter.value
});

export default connect(mapStateToProps)(Nomber);