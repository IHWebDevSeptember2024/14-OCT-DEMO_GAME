// 1. Crear el elemento y lo guardo en una variable (no se ve en el DOM todavia ten paciencia)
const headingElement = document.createElement("h1");

// 2. Añadir contenido al elemento
headingElement.innerText = "Mi título";

// 3. insertar en el dom
// document.body.prepend(headingElement);

// lo quiero en medio de otros dos h1
const secondTitleElement = document.querySelector("#second-title");
document.body.insertBefore(headingElement, secondTitleElement);
