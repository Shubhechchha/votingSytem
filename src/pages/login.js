import React from "react";
import {Form, Button} from 'react-bootstrap';

const Login = (props) => {
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
      <Button variant="primary" type="submit" onClick={props.onHide}>Save changes</Button>
      <Button variant="secondary" type="submit" onClick={props.onHide}>Close</Button>
      
   </Form> 
  )
}

export default Login