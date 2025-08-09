let sellablePottery = [];

//This module will separate the finished pottery into sellable and not sellable.
//Sellable items will placed into the sellablePottery array.

export const toSellOrNotToSell = (finishedPotteryPiece) => {
  if (
    finishedPotteryPiece.weight >= 6 &&
    finishedPotteryPiece.cracked === false
  ) {
    finishedPotteryPiece.price = 40;
    sellablePottery.push(finishedPotteryPiece);
  } else if (
    finishedPotteryPiece.weight < 6 &&
    finishedPotteryPiece.cracked === false
  ) {
    finishedPotteryPiece.price = 20;
    sellablePottery.push(finishedPotteryPiece);
  }

  return sellablePottery;
};


export const usePottery = () => {
    const potteryCabinet = JSON.parse(JSON.stringify(sellablePottery))
    return potteryCabinet
}

// const testPotteryFunction = usePottery()
// console.log(testPotteryFunction)