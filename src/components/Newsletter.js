import React, { Component } from "react";
import { Segment, Form, Button, Image, Grid, Header } from "semantic-ui-react";

export default class Newsletter extends Component {
  render() {
    return (
      <Segment style={{ padding: "0em", backgroundColor: "#00AB9A" }} vertical>
        <Grid stackable>
          <Grid.Row textAlign="center">
            <Grid.Column
              style={{
                paddingBottom: "1.3em",
                paddingTop: "1.3em",
                marginLeft: "10em"
              }}
              width={4}
            >
              <Header
                as="h3"
                style={{
                  fontSize: "1.8em",
                  paddingTop: "7px",
                  color: "#003D79"
                }}
              >
                Sign Up for Our Newsletter
              </Header>
              {/* <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p> */}
            </Grid.Column>
            <Grid.Column
              style={{ paddingBottom: "1.3em", paddingTop: "1.3em" }}
              width={9}
            >
              {/* <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
              </Header> */}
              <Form>
                <Form.Group widths="equal">
                  <Form.Input size="big" fluid id="email" placeholder="Email" />
                  <Button
                    size="big"
                    fluid
                    inverted
                    style={{
                      marginLeft: "2em"
                    }}
                  >
                    Sign Up
                  </Button>
                  {/* <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
        placeholder='Last name'
      /> */}
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      //       <div>
      //         <Segment vertical style={{
      //             height: '15vh',
      //             justifyContent: 'center'
      //             // backgroundColor: '#85C81A'
      //         }}>
      //             <Grid>
      //                 <Grid.Column width={5}>
      //                     <Header>
      //                         Sign Up for our Newsletter
      //                     </Header>
      //                 </Grid.Column>
      //                 <Grid.Column width={10}>
      //                 <Form>
      //     <Form.Group widths='equal'>
      //       <Form.Input
      //         fluid
      //         id='email'
      //         placeholder='Email'
      //       />
      //        <Button fluid>Sign Up</Button>
      //       {/* <Form.Input
      //         fluid
      //         id='form-subcomponent-shorthand-input-last-name'
      //         label='Last name'
      //         placeholder='Last name'
      //       /> */}
      //     </Form.Group>
      //   </Form>
      //                 </Grid.Column>
      //             </Grid>
      //         </Segment>
      //       </div>
    );
  }
}
