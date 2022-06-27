import React from "react";
import {Form, Button} from 'react-bootstrap';
import { useState } from "react";


const initialFormData = Object.freeze({
  fullname : "",
  citizennumber: ""
});


const Vote = (props) => {

  const [formData, updateFormData] = useState(initialFormData);

  const handleNameChange = (e) => {
    let currentFullName = e.target.value; // extracting chenged fullname 
    let newFormNameData = {...formData}    //duplicating the form data
    newFormNameData.fullname = currentFullName;
    updateFormData(newFormNameData);
   
  }

  const handleCitizenChange = (e) => {
    let currentCitizenNumber = e.target.value;
    let newFormCitizenData = {...formData}
    newFormCitizenData.citizennumber = currentCitizenNumber;
    updateFormData(newFormCitizenData);
   
  }
  
  const handleVoterSubmission = (e) => {
    e.preventDefault();
    let prevVoterData = props.prevVoterData.map(voter => ({...voter}));
    prevVoterData.push(formData);
    props.setVoterData(prevVoterData);
  }

  return (
   <Form>
      <Form.Group style= { { marginBottom: "20px"}}>
          <Form.Label> Enter your Fullname </Form.Label>
          <Form.Control type="text" placeholder="Enter your Fullname" onChange={handleNameChange} />
      </Form.Group>
      <Form.Group style= { { marginBottom: "20px"}}>
          <Form.Label> Enter your citizen number </Form.Label>
          <Form.Control type="number" placeholder="Enter your Citizen number" onChange={handleCitizenChange} />
      </Form.Group>
      <Button type="submit" onClick={handleVoterSubmission}>Save changes</Button>
      <Button type="submit" onClick={props.onHide}>Close</Button> 
   </Form> 
  )
}

export default Vote