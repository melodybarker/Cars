import {getInteriors, setInteriors} from "./database.js"

const interiors = getInteriors()

document.addEventListener("change",
(event) => {
	if (event.target.name === "interior") {
		setInteriors(parseInt(event.target.value))
	}
})

export const Interiors = () => {
	let interiorHTML = "<ul>"

const interiorArray = interiors.map(interior => {
	return `<li>
	<input type = "radio" name = "interior" value = "${interior.id}"/> ${interior.fabric}
	</li>`
		}
	)

	interiorHTML += interiorArray.join("")
	interiorHTML += "</ul>"
	return interiorHTML
}