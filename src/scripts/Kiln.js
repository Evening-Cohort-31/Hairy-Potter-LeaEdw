// This function will add a boolean property of 'fired' to the potteryPiece.

// The property of cracked should also be added- and set to true.
// If the temp is < 2200 then property should become false.

export const firePottery = (potteryPiece, temperature) => {
    potteryPiece.fired = true;

  if (temperature > 2200) {
    potteryPiece.cracked = true;
  } else {
    potteryPiece.cracked = false;
  }

  return potteryPiece;
};
