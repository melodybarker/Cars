import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { listOrderBuilder } from "./database.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
  listOrderBuilder();
  }
});
export const Cars = () => {
  return `
        <h1>Car-R-Us 🚗</h1>
        <article class = "choices">
        <section class = "paintChoices options">
            <h2>Paints</h2>
            ${Paints()}
        </section>
        <section class = "interiorChoices options">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>
        <section class = "packageChoices options">
            <h2>Technologies</h2>
            ${Technologies()}
        </section>
        <section class = "wheelChoices options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
        </article>

        <section>
            <button id = "orderButton" >Create Custom Order</button>
        </section>
        <section class = "orders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </section>
        </article>
    `
};
