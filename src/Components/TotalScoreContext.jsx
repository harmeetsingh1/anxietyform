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