import {Modal} from 'react-bootstrap';
import Login from '../pages/login';


function VoterModal(props) {
    return <Modal show={props.show} onHide={props.onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Login onHide={props.onHide} />
            </Modal.Body>
           
    </Modal>
}

export default VoterModal;