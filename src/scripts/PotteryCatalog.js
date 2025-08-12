let sellablePottery = [];

//This module will separate the finished pottery into sellable and not sellable.
//Sellable items will placed into the sellablePottery array.

export const toSellOrNotToSell = (finishedPotteryPiece) => {
  if (
    finishedPotteryPiece.weight >= 6 &&
    finishedPotteryPiece.cracked === false
  ) {
    finishedPotteryPiece.price = 40.00;
    sellablePottery.push(finishedPotteryPiece);
    console.log(`The ${finishedPotteryPiece.shape} is for sale.`);
  } else if (
    finishedPotteryPiece.weight < 6 &&
    finishedPotteryPiece.cracked === false
  ) {
    finishedPotteryPiece.price = 20.00;
    sellablePottery.push(finishedPotteryPiece);
    console.log(`The ${finishedPotteryPiece.shape} is for sale.`);
  } 
};

export const usePottery = () => {
  let potteryForSale = structuredClone(sellablePottery);
  return potteryForSale;
};


// export const usePottery = () => {
//     const potteryCabinet = JSON.parse(JSON.stringify(sellablePottery))
//     return potteryCabinet
// }

// const testPotteryFunction = usePottery()
// console.log(testPotteryFunction)
