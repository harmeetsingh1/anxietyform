import Resultpage from './Resultpage';
import { TotalScoreProvider } from './TotalScoreContext';

function App() {
  return (
    <TotalScoreProvider>
      <Resultpage/>
    </TotalScoreProvider>
  );
}