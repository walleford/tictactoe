import React from "react";
import "./board.css";
import { useState, useEffect, useRef } from "react";

const Board = ({ reset, setReset, winner, setWinner }) => {
  const [turn, setTurn] = useState(0);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const boardRef = useRef(null);
  //give player option for Icon

  const draw = (event, index) => {
    if (data[index - 1] === "" && winner === "") {
      const current = turn === 0 ? "X" : "O";

      data[index - 1] = current;
      event.target.innerText = current;
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  useEffect(() => {
    // Clearing the data state
    setData(["", "", "", "", "", "", "", "", ""]);

    // Getting all the children(cells) of the board
    const cells = boardRef.current.children;

    // Clearing out the board
    for (let i = 0; i < 9; i++) {
      cells[i].innerText = "";
    }

    // Resetting the turn to player 0
    setTurn(0);

    // Resetting the winner
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  useEffect(() => {
    const checkRow = () => {
      let ans = false;
      for (let i = 0; i < 9; i += 3) {
        ans |=
          data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
        return ans;
      }
    };

    const checkCol = () => {
      let ans = false;
      for (let i = 0; i < 3; i++) {
        ans |=
          data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
      }
      return ans;
    };

    // Checks for the win condition in diagonals
    const checkDiagonal = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    // Checks if at all a win condition is present
    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal();
    };

    // Checks for a tie
    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell !== "") {
          count++;
        }
      });
      return count === 9;
    };
    // Setting the winner in case of a win
    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      // Setting the winner to tie in case of a tie
      setWinner("It's a Tie!");
    }
  });

  const checkFullBoard = () => {};

  return (
    <div>
      <table class="center" ref={boardRef}>
        <tr>
          <td id="1" onClick={(e) => draw(e, 1)}></td>
          <td id="2" onClick={(e) => draw(e, 2)}></td>
          <td id="3" onClick={(e) => draw(e, 3)}></td>
        </tr>
        <tr>
          <td id="4" onClick={(e) => draw(e, 4)}></td>
          <td id="5" onClick={(e) => draw(e, 5)}></td>
          <td id="6" onClick={(e) => draw(e, 6)}></td>
        </tr>
        <tr>
          <td id="7" onClick={(e) => draw(e, 7)}></td>
          <td id="8" onClick={(e) => draw(e, 8)}></td>
          <td id="9" onClick={(e) => draw(e, 9)}></td>
        </tr>
      </table>
    </div>
  );
};

export default Board;
