"use strict";

/** Returns true or false based on given probability */

function onOrOff(probability) {
  const randNum = Math.random()
  return randNum <= probability;
}


export {onOrOff};