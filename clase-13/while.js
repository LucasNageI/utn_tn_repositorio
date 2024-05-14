/* 
DRY: Dont Repeat Yourself
while: hasta que se cumpla la condicion, el codigo dentro de el while se repite.
*/


let nombre = prompt("ingrese un nombre")

while (nombre === "pepe") {
    nombre = prompt("ingrese un nombre")
}
alert("ese nombre no lo conozco")


while(!nombre) {
    alert("error, dato no valido")
    nombre = prompt("ingrese un nombre")
}
alert("dato valido")
