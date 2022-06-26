import {Button, Modal} from 'react-bootstrap';
import Login from '../pages/login';

function VoterModal(props) {
    return <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick ={props.onHide}>Save changes</Button>
            </Modal.Footer>
    </Modal>
}

export default VoterModal;