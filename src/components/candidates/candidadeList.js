import CandidateItem from './candidateItem';
import {Row, Col}  from "react-bootstrap";

function CandidateList(props) {
    return (
      <Row xs={1} md={3} className="g-4">
        {props.candidates.map ( (candidate) => (
          <Col>
            
              <CandidateItem 
                      key={candidate.id} 
                      id={candidate.id} 
                      image={candidate.image} 
                      name ={candidate.name}
                      description = {candidate.description}
                      handleVoter={props.handleVoter}  
                  />
           
              
          </Col>  
         ))} 
      </Row>
    );  
}

export default CandidateList;