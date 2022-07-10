import { memo, useState } from "react";
import CandidateList from "../components/candidates/candidadeList";
import VoterModal from "../components/Modal";



function Candidates(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [votedCandidateID, setVotedCandidateID] = useState(null);


    const handleVoter =  (candidateID) => {
        setModalIsOpen(true);
        setVotedCandidateID(candidateID);
    }
    const handleClose = () => setModalIsOpen(false);
    
    return <>
        <section>
            <h1>List of Candidates</h1>
            <CandidateList 
                candidates={props.candidateData} 
                handleVoter={handleVoter} 
            />
        </section>
        <VoterModal 
            show={modalIsOpen} 
            onHide={handleClose} 
            setVoterData={props.setVoterData} 
            prevVoterData={props.prevVoterData} 
            votedCandidateID={votedCandidateID}
        />
    </> 
    

}

export default memo(Candidates);