import './App.css';
import { Board, Players } from './components';

import { useState } from "react";
import Button from '@mui/material/Button';


function App() {
    //sets whether or not the board should be reset
    const [reset, setReset] = useState(false);
    //winner set
    const [winner, setWinner] = useState('');
  
    const resetBoard = () => {
      setReset(true);
    }

  return (
    <div className="App">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
        {/* Display the current winner */}
        <div className='winner-text'>{winner}</div>
        {/* Button used to reset the board */}
        <Button variant="contained" onClick={ () => {resetBoard()}}> Reset Board </Button>
      </div>
      <Players />
      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
    </div>
  );
}

export default App;
