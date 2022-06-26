import {Card, Button}  from "react-bootstrap";
import classes from "./candidateItem.module.css";

function CandidateItem(props) {
    return (
        <>
           <Card>
                <Card.Img variant="top" src={props.image} alt={props.name}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary" className={classes.custombtn} onClick={props.handleVoter}>VOTE</Button>
                </Card.Body>
            </Card>  
        </>
    ) 
}

export default CandidateItem;