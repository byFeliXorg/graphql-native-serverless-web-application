import React, { Component } from "react";
import { connect } from "react-redux";

import { AppWithAuthorization } from "../src/components/App";
import { db } from "../src/firebase";

import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/apollo-client";

import OfferList from "../src/components/data/offerList";

const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(fromObjectToList(snapshot.val()))
    );
  }

  render() {
    const { users } = this.props;

    return (
      <AppWithAuthorization>
        <ApolloProvider client={client}>
          <br/>
          <div>
            <OfferList />
          </div>
        </ApolloProvider>

        {!!users.length && <UserList users={users} />}
      </AppWithAuthorization>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of App User IDs (Saved on Sign Up in Firebase Database)</h2>
    {users.map(user => (
      <div key={user.index}>{user.index}</div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
