/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let botonConvertidor = document.getElementById("boton");
let inputCliente = document.getElementById("convertidor");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");


botonConvertidor.addEventListener("click", convertir);

function convertir() {
   length.textContent= inputCliente.value + " = " + (inputCliente.value* 3.28).toFixed(3) + " meters"
   volume.textContent=inputCliente.value + " = " + (inputCliente.value * 0.24).toFixed(3) + " liters"
   mass.textContent= inputCliente.value + " = " +(inputCliente.value * 2.20).toFixed(3) + " kilos"
   inputCliente.value = ""
}

