import React, { Component } from 'react';
import { Form, Button, Card, Alert,Container } from "react-bootstrap";

import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "80vh" }}>
            
            <div className="w-100" style={{ maxWidth: "500px" }}>
            
            <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Change Password</h2>
                  
                  <Form onSubmit={this.onSubmit}>

                    <Form.Group id="newpassword">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control 
                        value={passwordOne}
                        onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                        type="password"
                        placeholder="New Password" />
                    </Form.Group>

                    <Form.Group id="confpassword">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control 
                        value={passwordTwo}
                        onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                        type="password"
                        placeholder="Confirm New Password" />
                    </Form.Group>

                    <Button disabled={isInvalid} className="w-100"  type="submit" style={{background:"#343a40",color:"#ffc107",border: "none"}}>
                        RESET PASSWORD
                    </Button>
                    { error && <p>{error.message}</p> }
                  </Form>
                </Card.Body>
              </Card>
            </div>
        </Container>
    );
  }
}

export default PasswordChangeForm;