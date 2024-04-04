"use strict";

/** Returns true or false based on given probability */

function onOrOff(probability) {
  const randNum = Math.random()
  return randNum <= probability;
}

function createInitialBoard(nrows, ncols, chanceLightStartsOn){
  let initialBoard = [];

  for (let i = 0; i < nrows; i++) {
    const row = [];
    for (let j = 0; j < ncols; j++) {
      row.push(onOrOff(chanceLightStartsOn));
    }
    initialBoard.push(row);
  }
  return initialBoard;
}

function winCheck(board){
  for (let row of board){
    for (let cell of row){
      if (cell === true){
        return false;
      }
    }
  }
  return true;
}

export {onOrOff, createInitialBoard, winCheck};