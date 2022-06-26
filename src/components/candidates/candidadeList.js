import CandidateItem from './candidateItem';
import {Grid} from '@material-ui/core';

function CandidateList(props) {
    return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.candidates.map ( (candidate) => ( 
          <Grid item md={3}>
            <CandidateItem 
                key={candidate.id} 
                id={candidate.id} 
                image={candidate.image} 
                name ={candidate.name}
                description = {candidate.description}
            />
          </Grid> 
         ))} 
      </Grid> 
    );  
}

export default CandidateList;