import React from "react";
import "./players.css";
import TextField from "@mui/material/TextField";

const Players = () => {
  return (
    <div class="Players">
      <TextField
        required
        id="player1Name"
        label="Player 1"
        helperText="What would you like to be called?"
      />
      <TextField
        required
        id="player2Name"
        label="Player 2"
        helperText="What would you like to be called?"
      />
    </div>
  );
};

export default Players;
