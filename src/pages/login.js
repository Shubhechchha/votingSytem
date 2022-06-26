import React from "react";
import {Form} from 'react-bootstrap';

const Login = () => {
  return (
   <Form>
      <Form.Group style= { { marginBottom: "20px"}}>
          <Form.Label> Enter your Fullname </Form.Label>
          <Form.Control type="text" placeholder="Enter your Fullname" />
      </Form.Group>
      <Form.Group style= { { marginBottom: "20px"}}>
          <Form.Label> Enter your citizen number </Form.Label>
          <Form.Control type="number" placeholder="Enter your Citizen number" />
      </Form.Group>
   </Form> 
  )
}

export default Login