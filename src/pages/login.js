import React from "react";
import {Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Login = () => {
  return (
   <Form>
      <Form.Group style= { { marginBottom: "20px"}}>
                <Form.Label> Enter your name </Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group style= { { marginBottom: "20px"}}>
                <Form.Label> Enter your password </Form.Label>
                <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>

            <Button type="Submit">Login</Button>
            <p>New here?  <Button type= "Submit"> <Link to='/'>login here</Link></Button></p>

   </Form> 
  )
}

export default Login