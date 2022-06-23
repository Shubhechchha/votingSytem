import CandidateItem from './candidateItem';
import classes from './candidateList.module.css';


function CandidateList(props) {
    return <ul className={classes.list}>
        {props.candidates.map ( (candidate) => ( 
            <CandidateItem 
                key={candidate.id} 
                id={candidate.id} 
                image={candidate.image} 
                name ={candidate.name}
                description = {candidate.description}
            />
           ))}
    </ul>
}

export default CandidateList;