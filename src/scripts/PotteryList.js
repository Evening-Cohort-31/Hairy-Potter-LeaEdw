import { usePottery } from "./PotteryCatalog.js";

export const potteryList = () => {
  const potteryCabinet = usePottery();
  let itemCard = `<h2 class=\"pottery_title\"></h2>`;

  for (const pottery of potteryCabinet) {
    itemCard += `
   <section class="potteryList" id="${pottery.id}">
        <h2 class="pottery.shape">Ornate ${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
        <div class="pottery.price">Price: $${pottery.price}</div>
    </section>`;
  }
  return itemCard;
};
