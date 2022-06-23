import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './pages/Signup';
import Login from './pages/login';
import Candidates from './pages/candidates';
import Layout from './components/layout/Layout';

function App() {
  return (
     <> 
       <Layout>
      <Routes>
        <Route path = "/" element = {<Candidates />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
