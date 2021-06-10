const database = {
    paints: [
        { id: 1, color: "silver", price: 150.79 },
        { id: 2, color: "midnight blue", price: 199.99 },
        { id: 3, color: "firebrick red", price: 180.50 },
        { id: 4, color: "spring green", price: 179.99 },
    ],
    interiors: [
        { id: 1, fabric: "beige fabric", price: 200.00 },
        { id: 2, fabric: "charcoal fabric", price: 200.00 },
        { id: 3, fabric: "white leather", price: 349.99 },
        { id: 4, fabric: "black leather", price: 399.99 },
    ],
    technologies: [
        { id: 1, package: "basic package", price: 500.00 },
        { id: 2, package: "navigation package", price: 650.00 },
        { id: 3, package: "visibility package", price: 750.00 },
        { id: 4, package: "ultra package", price: 900.00 },
    ],
    wheels: [
        { id: 1, wheel: "17-inche pair radial", price: 300.79 },
        { id: 2, wheel: "17-inch pair radial black", price: 325.5 },
        { id: 3, wheel: "18-inch pair spoke silver", price: 400.79 },
        { id: 4, wheel: "18-inch pair spoke black", price: 425.50 },
    ],
    orderBuilder: [
      {
      id: 1,
      paintId: 1,
      interiorId: 2,
      techId: 3,
      wheelId: 4
    }
  ],
    customOrders: {}
  }

export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }));
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getCustomOrders = () => {
    return database.orderBuilder.map(order => ({...order}))
}


export const setPaints = (id) => {
    database.orderBuilder.paintId = id
}
export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnologies = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}


export const listOrderBuilder = () => {

    // copies current state of user choices
    const newOrder = {...database.customOrders}

    const lastIndex = database.orderBuilder.length -1

    newOrder.id = database.orderBuilder[lastIndex].id + 1

    newOrder.timestamp = Date.now();

    database.orderBuilder.push(newOrder)

    database.customOrders = {};

    document.dispatchEvent(new CustomEvent("stateChanged"))
}