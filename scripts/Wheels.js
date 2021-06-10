import {getWheels, setWheels} from "./database.js"

const wheels = getWheels()

document.addEventListener("change",
  (event) => {
    if (event.target.name === "wheel") {
      setWheels(parseInt(event.target.value))
    }
  })

export const Wheels = () => {
  let wheelHTML = "<ul>";

  const wheelArray = wheels.map(wheel => {
    return `<li>
    <input type = "radio" name = "wheel" value = "${wheel.id}"/> ${wheel.wheel}
    </li>`
    }
  )

    wheelHTML += wheelArray.join("");
    wheelHTML += "</ul>"
    return wheelHTML
  }
