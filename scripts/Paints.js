import {getPaints, setPaints} from "./database.js"

const paints = getPaints()

document.addEventListener(
  "change",
(event) => {
  if (event.target.name === "paint") {
  setPaints(parseInt(event.target.value))
    }
  }
)

export const Paints = () => {
  let paintHTML = "<ul>"

  const paintArray = paints.map(paint => {
    return `<li>
    <input type = "radio" name = "paint" value = "${paint.id}"/> ${paint.color}
    </li>`
    }
  )

    paintHTML += paintArray.join("")
    paintHTML += "</ul>"
    return paintHTML
  }


