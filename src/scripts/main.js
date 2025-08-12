// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 10)
let plate = makePottery("plate", 2, 3)
let bowl = makePottery("bowl", 2, 3)
let platter = makePottery("platter", 6, 4)
let vase = makePottery("vase", 8, 25)

// console.log(mug)
// console.log(plate)
// console.log(bowl)
// console.log(platter)
// console.log(vase)


// Fire each piece of pottery in the kiln

const firedMug = firePottery(mug, 2150)
const firedPlate = firePottery(plate, 2150)
const firedBowl = firePottery(bowl, 2300)
const firedPlatter = firePottery(platter, 2150)
const firedVase = firePottery(vase, 2200)

// console.log(firedMug)
// console.log(firedPlate)
// console.log(firedBowl)
// console.log(firedPlatter)
// console.log(firedVase)

// Determine which ones should be sold, and their price

const mugCheck = toSellOrNotToSell(firedMug)
const plateCheck = toSellOrNotToSell(firedPlate)
const bowlCheck = toSellOrNotToSell(firedBowl)
const platterCheck = toSellOrNotToSell(firedPlatter)
const vaseCheck = toSellOrNotToSell(firedVase)

// for (const each of potteryTable) {
//   console.log(`${each.shape} - ${each.height}cm  - ${each.weight}lbs. - ${each.id}`)
// }


// Invoke the component function that renders the HTML list

const dynamicPotteryHTML = potteryList();

let showMe = document.getElementById("potteryHTML")
showMe.innerHTML = dynamicPotteryHTML
