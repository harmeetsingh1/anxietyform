import "./App.css";
import Forrm from "./Components/Forrm";
import Forrmd from "./Components/Forrmd";
import Head1 from "./Components/Head1";
import Parllax from "./Components/Parllax";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import Resultpage from "./Components/Resultpage";
import totalScore from "./Components/Forrm"
import {TotalScoreProvider}from './Components/TotalScoreContext';
import { useState } from "react";

 

function App() {

  
    
  return (
    <>
      <Router>
        <Head1 />
        {/* <Parllax/>
     <Forrm/> */}
     <TotalScoreProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Parllax /> ,<Forrm />{" "}
              </>
            }
          />
          {/* <Route path="/" element={<Forrm/>}/> */}
          <Route
            path="/result"
            element={<Resultpage/>}
          />
        </Routes>
        </TotalScoreProvider>
      </Router>
      {/* <Forrmd/> */}
    </>
  );
}

export default App;
