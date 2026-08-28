/* let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
    alert("edad autorizada para conducir");
} else {
    alert("no tiene la edad suficiente para conducir");
} */

/* let nota = parseInt(prompt("ingrese su calificacion (0-10)"));

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
} */

/* let cadenas = [];
let entrada;

do {
  entrada = prompt("introduce una cadena de texto");

  if (entrada !== null) {
    cadenas.push(entrada);
  }
} while (entrada !== null && confirm("¿desea introducir otra cadena?"));

const resultado = cadenas.join("--");

if (resultado) {
  alert("resultado:\n" + resultado);
} else {
  alert("no se introdujo ninguna cadena.");
} */

/* let numero;
let entrada;
let sumaTotal = 0;

do {
  entrada = prompt("introduce un numero");

  if (entrada !== null) {
    numero = parseFloat(entrada);
  } else if (isNaN(numero)) {
    alert("no es un numero valido, intentalo de nuevo.");
  } else {
    sumaTotal += numero;
  }
} while (entrada !== null && confirm("¿desea introducir otra numero?"));

 alert("la suma total de los numeros introducidos es:"); */

/* const letras = "T-R-W-A-G-M-Y-F-P-D-X-B-N-J-Z-S-Q-V-H-L-C-K-E";

while (true) {
  // Pedir número de DNI al usuario
  let entrada = prompt("Introduce el número de DNI (sin letra):");

  // Si pulsa CANCELAR → terminamos el programa
  if (entrada === null) {
    break;
  }

  // Convertir a número entero
  let numeroDNI = parseInt(entrada, 10);

  // ✅ Validaciones
  if (isNaN(numeroDNI)) {
    alert("⚠️ Lo introducido NO es un número válido. Inténtalo de nuevo.");
    continue; // Volvemos a pedir
  }

  if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("⚠️ El número debe estar entre 0 y 99999999. Inténtalo de nuevo.");
    continue;
  }

  // ✅ Calcular resto de la división entre el número y 23
  let resto = numeroDNI % 23;

  // ✅ Obtener la letra correspondiente
  let letra = letras.charAt(resto);

  // ✅ Mostrar resultado
  alert(`✅ DNI completo: ${numeroDNI} ${letra}`);
} */

/* const pantalla = document.getElementById("pantalla");

  let contador = 1
  

  while (contador <= 30) {
    pantalla.innerHTML += `<p>${contador}</p>`
    contador ++
  } */

//ejercicio 7

//ejercicio 8

// Pedimos al usuario que ingrese un número
let numeroUsuario = prompt("Ingresa un número (máximo 50):");
numeroUsuario = parseInt(numeroUsuario);

// Validación: número entre 1 y 50
if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 50) {
  alert("⚠️ Por favor, ingresa un número VÁLIDO entre 1 y 50.");
} else {
  // Generamos la pirámide
  for (let fila = 1; fila <= numeroUsuario; fila++) {
    let linea = "";
    for (let digito = 1; digito <= fila; digito++) {
      linea += digito; // Concatenamos los números SIN espacios
    }
    console.log(linea); // Muestra en consola
    document.write(linea + "<br>"); // Muestra en página web
  }
}
