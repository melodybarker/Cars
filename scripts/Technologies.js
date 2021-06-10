import { getTechnologies, setTechnologies } from "./database.js";

const technologies = getTechnologies();

document.addEventListener("change", (event) => {
    if (event.target.name === "tech") {
        setTechnologies(parseInt(event.target.value));
    }
});

export const Technologies = () => {
    let techHTML = "<ul>";

    const techArray = technologies.map(tech => {
        return `<li>
        <input type = "radio" name = "tech" value = "${tech.id}"/>  ${tech.package}
        </li>`;
        }
    )

    techHTML += techArray.join("");
    techHTML += "</ul>";
    return techHTML

}