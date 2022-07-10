import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Statistic(props) {
  let stats = () => {
    let counter ={};
    for(let i=0; i < props.voterInfo.length; i++) {
        let vote = props.voterInfo[i];
        // vote stores voter information 
        // candidate keys then extracts keys from counter which holds each voted candidateID 
        // 
          let candidateKeys = Object.keys(counter);
           if(candidateKeys.includes(vote.votedCandidateID)) {
             counter[vote.votedCandidateID] += 1;
          } else
              counter[vote.votedCandidateID] = 1;
        }
        return counter;
    }

    const [statData, setStatData] = useState(stats());

  let createRow = () => {
    let votedCandidateList=[];
    for(let obj in statData) { 
      let candidateId = Object.keys(obj)[0];
      let row = <tr key={candidateId}> 
        <td>{candidateId}</td>
        <td>{obj[candidateId]}</td>
      </tr>
      votedCandidateList.push(row);
      }
      return votedCandidateList;
    }

 console.log("Current Voter data: " + JSON.stringify(props.voterInfo));
 console.log(JSON.stringify(stats()));


  let candidateNameByID = (ID) => {
      for(let i = 0; i<= props.candidateInfo.length; i++) {
          if(ID === props.candidateInfo[i].id) {
            return props.candidateInfo[i].name;
          } 
      }
  }

  console.log("Current Candidate name: " + candidateNameByID('c8'));

 return (
    <Table striped bordered hover responsive="md">
    <thead>
      <tr>
        <th>CandidateID</th>
        <th>Vote count</th>
      </tr>
    </thead>
    <tbody>
      {createRow()}
    </tbody>
  </Table>
 )
 }

export default Statistic