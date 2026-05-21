alert("Al aceptar cambia todo!");

let titulo = document.querySelector("h1");
titulo.style.fontFamily = "Federo";
titulo.style.color = "red";
titulo.innerText = "Cuantos cambios!";
titulo.style.background = "yellow";

let parrafo1 = document.querySelector(".uno");
parrafo1.style.fontFamily = "Federo";
parrafo1.style.color = "black";
parrafo1.innerText = "También cambia el contenido...";
parrafo1.style.background = "lightblue";
parrafo1.style.fontSize = "5rem";

let parrafo2 = document.querySelector(".dos");
parrafo2.style.fontFamily = "Federo";
parrafo2.style.color = "green";
parrafo2.innerText = "Y puedo esribir lo que quiera! incluso mas grande!";
parrafo2.style.background = "cyan";
parrafo2.style.fontSize = "5rem";