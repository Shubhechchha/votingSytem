import React, {useRef} from 'react';
import {Form, Button} from 'react-bootstrap';

const Signup = () => {
    const firstnameInputRef= useRef();
    const lastnameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();


  
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredFirstname = firstnameInputRef.current.value;
        const enteredLastname = lastnameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword= passwordInputRef.current.value;   
        
        const signupData = {
            firstname : enteredFirstname,
            lastname : enteredLastname,
            email : enteredEmail,
            password : enteredPassword,
        };

    console.log(signupData);
    }
  
    return (

        <>
       
        <Form style={ {width: "80%", marginLeft:"10%", marginTop:"10%"}} onSubmit ={submitHandler}>
            <Form.Group style= { { marginBottom: "20px"}}>
                <Form.Label htmlFor='firstname'> Firstname </Form.Label>
                <Form.Control type = "text" placeholder="Enter your First name" required id ='firstname' ref={firstnameInputRef} />
            </Form.Group>

            <Form.Group style= { { marginBottom: "20px"}}>
                <Form.Label htmlFor='lastname'> Enter your lastname </Form.Label>
                <Form.Control type="text" placeholder="Enter your Last name"  required id ='lastname' ref={lastnameInputRef} />
            </Form.Group>

            <Form.Group style= { { marginBottom: "20px"}}>
                <Form.Label htmlFor='email'> Enter your email </Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required id='email' ref={emailInputRef}/>
            </Form.Group>

            <Form.Group style= { { marginBottom: "20px"}}>
                <Form.Label htmlFor='password'> Enter your password </Form.Label>
                <Form.Control type="password" placeholder="Enter your Password" required id='password' ref={passwordInputRef}/>
            </Form.Group>

             <p><Button type="Submit">Sign up</Button></p>   

            
        </Form>
        
        </>
   )
}

export default Signup