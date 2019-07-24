import React, { Component } from "react";
import { Button, Header, Image, Form, Checkbox, Modal } from "semantic-ui-react";

export class SignInModal extends Component {
    render() {
        return (
            <Modal
              size="tiny"
              trigger={<Button inverted style={{
                marginRight: '10px'
            }}>Sign In</Button>}
              centered={false}
              dimmer='blurring'
            >
              <div
                style={{
                  // backgroundColor: "teal",
                  padding: '25px'
                }}
              >
                <Modal.Header centered
                  style={{
                      fontSize: '1.5em',
                      paddingBottom: '15px'
                  }}
                >Log In</Modal.Header>
                <Modal.Content>
                <Form>
        
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
                  {/* <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                      We've found the following gravatar image associated with your e-mail
                      address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                  </Modal.Description> */}
                </Modal.Content>
              </div>
            </Modal>
          )
    }
} 
