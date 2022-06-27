import {Modal} from 'react-bootstrap';
import Vote from '../pages/vote';


function VoterModal(props) {
    return <Modal show={props.show} onHide={props.onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Vote 
                onHide={props.onHide} 
                setVoterData={props.setVoterData} 
                prevVoterData={props.prevVoterData} 
                votedCandidateID={props.votedCandidateID}
               />
            </Modal.Body>
           
    </Modal>
}

export default VoterModal;