// import React, { createContext, useState } from 'react';
// import handleOptionChange from './Forrm'

// export const TotalScoreContext = createContext();

// export const TotalScoreProvider = ({ children }) => {
//   const [totalScore, setTotalScore] = useState({ score: 1 });
  

//   return (
//     <TotalScoreContext.Provider value={{ setTotalScore}}>
//       {children}
//     </TotalScoreContext.Provider>
//   );
// };

// import { createContext } from 'react';

// const TotalScoreContext = createContext();

// export default TotalScoreContext;


import { createContext, useMemo, useState } from 'react';

const TotalScoreContext = createContext();

export const TotalScoreProvider = ({ children }) => {
  //const [updatedTotalScore, setUpdatedTotalScore] = useState(0);

  const [totalScore1, setTotalScore1] = useState(1)

  return (
    <TotalScoreContext.Provider value={{ totalScore1, setTotalScore1 }}>
      {children}
    </TotalScoreContext.Provider>
  );
};

export default TotalScoreContext;