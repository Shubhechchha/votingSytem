import classes from './candidateItem.module.css';

function CandidateItem(props) {
    return <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.name} />
        </div>

        <div className={classes.content}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button>VOTE</button>
        </div>
    </li>
}

export default CandidateItem;