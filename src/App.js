import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Candidates from './pages/candidates';
import Layout from './components/layout/Layout';
import Statistic from './pages/Statistic';


function App() {
  const [voterData, setVoterData] = useState([]);

  console.log("Current Voter data: " + JSON.stringify(voterData));

  /* function onSubmittingVoterInfo(formData)  {
    fetch(
      'https://voting-system-aea72-default-rtdb.firebaseio.com/candidates.json',
      {
        method:'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
        );
    }
 */
  return (
     <> 
      <Layout>
        <Routes>
          <Route path = "/" element = {<Candidates setVoterData={setVoterData} prevVoterData={voterData} />} /> 
          <Route path="/statistic" element={<Statistic />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
