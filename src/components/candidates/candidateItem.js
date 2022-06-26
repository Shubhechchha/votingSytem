import classes from './candidateItem.module.css';

function CandidateItem(props) {
    return (
        <>
            <div className={classes.image}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={classes.content}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={props.handleVoter}>VOTE</button>
            </div>
        </>
    ) 
}

export default CandidateItem;