let pottery = 1;

/* The makePottery function should take the following parameters- shape, weight, height and return an object with
the following properties- shape, weight, height, and ID. */

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    const potteryPiece = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: pottery++,
        
    }
    return potteryPiece
}