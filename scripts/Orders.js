import {
  getPaints,
  getInteriors,
  getTechnologies,
  getWheels,
  getCustomOrders,
} from "./database.js";

const paints = getPaints();
const interiors = getInteriors();
const technologies = getTechnologies();
const wheels = getWheels();

const customCarOrder = (order) => {
  const selectedPaint = paints.find((paint) => {
    return paint.id === order.paintId;
  });
  const selectedInterior = interiors.find((interior) => {
    return interior.id === order.interiorId;
  });
  const selectedTech = technologies.find((tech) => {
    return tech.id === order.techId;
  });
  const selectedWheel = wheels.find((wheel) => {
    return wheel.id === order.wheelId;
  });

  const totalCost =
    selectedPaint.price +
    selectedInterior.price +
    selectedTech.price +
    selectedWheel.price;

  const costString = totalCost.toLocaleString("en-US", {
    styles: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return `<li>
		Custom car order #${order.id} will have ${selectedPaint.color} paint, ${selectedInterior.fabric}, ${selectedTech.package}, and ${selectedWheel.wheel} wheels. The total cost will be $${costString}.
		</li>`;
};

export const Orders = () => {
  const orders = getCustomOrders();
  let orderHTML = "<ul>";

  const listOrders = orders.map(customCarOrder);

  orderHTML += listOrders.join("");
  orderHTML += "</ul>";
  return orderHTML;
};
