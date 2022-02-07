
// Adding Elements
const b=document.body
// b.append("Hello World"," Bye"," javascript");

// Creating Elements

const div=document.createElement("div");
b.append(div);
div.innerText="Hello World";
div.textContent="Hello World 2"

//Modyfying Elements

const di=document.querySelector("div");
console.log(di.textContent); //shows hidden element
console.log(di.innerText);//text visible on html screen

