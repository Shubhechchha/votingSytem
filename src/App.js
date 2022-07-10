import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Candidates from './pages/candidates';
import Layout from './components/layout/Layout';
import Statistic from './pages/statistic';


function App() {

  let candidateData = [
    {
        id: 'c1',
        name : 'Alexa Green',
        image: "/images/AlexaGreen.jpg",
        description: 'This is ABC party.'
    },
    
    {
        id:'c2',
        name : 'Carls Smith',
        image: '/images/CarlSmith.jpg',
        description : 'This is XYZ party.'
    },
    
    {
        id:'c3',
        name : 'Claire Buffay',
        image: '/images/ClaireBuffay.jpg',
        description : 'This is EFG party.'
    },
    
    {
        id:'c4',
        name : 'Hachiko Yang',
        image: '/images/HachikoYang.jpg',
        description : 'This is BGC party.'
    },
    
    {
        id:'c5',
        name : 'Harry Johnson',
        image: '/images/HarryJohnson.jpg',
        description : 'This is HJK party.'
    },
    
    {
        id:'c6',
        name : 'Johny Griffith',
        image: '/images/JohnyGriffith.jpg',
        description : 'This is LMN party.'
    },
    
    {
        id:'c7',
        name : 'Sarah Jolie',
        image: '/images/SarahJolie.jpg',
        description : 'This is OPQ party.'
    },
    
    {
        id:'c8',
        name : 'Tamara Geller',
        image: '/images/TamaraGeller.jpg',
        description : 'This is CVB party.'
    }
    
    ];

  const [voterData, setVoterData] = useState([]);
  console.log("Current Voter Data: " + JSON.stringify(voterData))

  return (
     <> 
      <Layout>
        <Routes>
          <Route path = "/" element = {<Candidates setVoterData={setVoterData} prevVoterData={voterData} candidateData={candidateData} />} /> 
          <Route path="/statistic" element={<Statistic voterInfo={voterData} candidateInfo={candidateData} />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
