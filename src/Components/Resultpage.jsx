import React, { useContext, useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

import { useLocation, useNavigate } from "react-router-dom";
import TotalScoreContext from './TotalScoreContext';
import { useTotalScore } from './TotalScoreContext';

function Resultpage() {
  
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const updatedTotalScore = parseInt(queryParams.get('score'));
   console.log('Total Score:', updatedTotalScore);


  //  const [totalScore, setTotalScore] = useState(0);
   //   const totalScoreString = searchParams.get('score');
//const { totalScore } = useContext(ScoreContext);
//  //const totalScore1 = JSON.parse(decodeURIComponent(totalScoreString));
//  const totalScore = totalScoreString ? JSON.parse(totalScoreString) : null;
//const  updatedTotalScore  = useContext(TotalScoreContext);

const { setTotalScore1 } = useContext(TotalScoreContext);
const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();

useEffect(() => {
  if (isSubmitted && isNaN(updatedTotalScore)) {
    setTotalScore1(updatedTotalScore);
    navigate(`/result?score=${updatedTotalScore}`);
  }
}, [isSubmitted, navigate, setTotalScore1, updatedTotalScore])

const totalScoreValue = isNaN(updatedTotalScore) ? 0 : updatedTotalScore

// useEffect(() => {
//   if (updatedTotalScore) {
//     setTotalScore(parseInt(updatedTotalScore));
//   }
// }, [updatedTotalScore]);

  return (
    <div
      className="flex
     justify-center mt-24 "
    >
      <article class="container bg-[#e0ffff] shadow-2xl rounded-2xl p-5 flex justify-center mb-20">
        <ReactSpeedometer
          maxValue={80}
          value={totalScoreValue}

         
          needleHeightRatio={0.7}
          needleColor="red"
          // startColor="green"
          segments={5}
          // endColor="red"
          customSegmentStops={[0, 25, 40, 55, 80]}
          segmentColors={["green", "gold", "orange", "tomato"]}
          currentValueText="Anxiety Level"
          customSegmentLabels={[
            {
              text: "NORMAL",
              position: "OUTSIDE",
            },
            {
              text: "MILD",
              position: "OUTSIDE",
              //fontSize: "19px",
            },
            {
              text: "SEVERE",
              position: "OUTSIDE",
            },
            {
              text: "EXTREME",
              position: "OUTSIDE",
            },
          ]}
        />
        {console.log({updatedTotalScore})}
      </article>
      
    </div>
  );
}

export default Resultpage;
