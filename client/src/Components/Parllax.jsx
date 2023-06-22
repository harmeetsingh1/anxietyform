import React from "react";
import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import orange from "./cherry1.jpg"

function Parllax() {
  return (
    <div>
      <h1 className="flex flex-row justify-content-center p-4" id="test">
        ANXIETY LEVEL TEST
      </h1>


      <Container className="parallax-container">
        <Parallax strength={300} blur={{min: 7, max:-8}} bgImage={orange} >
            <div className="context">
            <div className="text-context">
               <h1 className="test2">Listed below are 20 statements. Please read each one carefully and decide how much the statement describes how you have been feeling during the past week. Circle the appropriate number for each statement.</h1>
            </div>
            </div>
         </Parallax>

      </Container>
     
      {/* <div className="context1"></div> */}
    </div>
  );
}

export default Parllax;
