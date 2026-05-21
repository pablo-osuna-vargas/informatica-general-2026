let nombre = "Pablo";
let apellido = "Osuna Vargas";
let nombreApellido = "Pablo Osuna Vargas";
let edad = 42;

const universidad = "UNA";

nombre = "Robert";
apellido = "Rodrigues";
nombreApellido = "Robert Rodrigues";
edad = 49;
universidad = "UBA";

console.log(nombre);

// la consola da ERROR porque encuentra un cambio de valor en la CONST antes de mostrar el console.log //
// si el console.log estuviera antes de la CONST muestra la variable pedida y LUEGO el error //