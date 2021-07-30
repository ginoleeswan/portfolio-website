import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Gino Swanepoel</Icon>
          <FormContent>
            <Form>
              <FormH1>Contact Me</FormH1>
              <FormLabel htmlFor="for">Name:</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email:</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Tell me about the project:</FormLabel>
              <FormInput type="textarea" required />
              <FormButton type="submit">Send</FormButton>
              {/* <Text>Forgot Password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
