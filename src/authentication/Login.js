import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class LoginForm extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header
            as="h1"
            textAlign="left"
            style={{
              marginLeft: "10px"
            }}
          >
            Sign In
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Header
                as="h5"
                textAlign="left"
                style={{
                  marginLeft: "10px",
                  paddingBottom: "8px"
                }}
              >
                <a href="#">Forgot Your Password</a>
              </Header>
              <Button
                color="teal"
                fluid
                size="large"
                style={{
                  borderRadius: "25px"
                }}
              >
                Sign In
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
