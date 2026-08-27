/* let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
    alert("edad autorizada para conducir");
} else {
    alert("no tiene la edad suficiente para conducir");
} */

let nota = parseInt(prompt("ingrese su calificacion (0-10)"));

switch (true) {
    case nota > 10 || nota < 0:
     alert("numero erroneo");
    break;
  case nota >= 0 &&  nota <=2:
    alert("muy deficiente");
    break;
  case nota >= 3 &&  nota <=4:
    alert("insuficiente");
    break;
  case nota >= 5 &&  nota <=6:
    alert("suficiente");
    break;
  case nota === 7:
    alert("bien");
    break;
  case nota >= 8 &&  nota <=9:
    alert("notable");
    break;
  case nota === 10:
    alert("sobresaliente");
  default:
    alert("ingrese un numero valido")
    break;
}
