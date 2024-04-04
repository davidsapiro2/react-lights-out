import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import {createInitialBoard, onOrOff, winCheck} from "./utils";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    return createInitialBoard(nrows, ncols, chanceLightStartsOn);
  }
  console.log(board);
  /** check the board in state to determine whether the player has won. */
  function hasWon(board) {
    return winCheck(board);
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      const boardCopy = structuredClone(oldBoard);

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y, x - 1, boardCopy);

      // TODO: return the copy

      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  return(
    hasWon(board)
    ? <p>You won</p>
    :

    board.forEach((row, i) => row.forEach((cell, j) => {<Cell flipCellsAroundMe={() => flipCellsAround(`${i}-${j}`)} isLit={cell}/>}))

  )

  // TODO

  // make table board

  // TODO
}

export default Board;
