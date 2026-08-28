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
/* let numeroUsuario = prompt("Ingresa un número (máximo 50):");
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
} */

//ejercicio 9

// Recorremos los números del 1 al 500
/* for (let numero = 1; numero <= 500; numero++) {
  let mensaje = numero;

  // Verificamos si es múltiplo de 4 y/o de 9
  const esMultiplo4 = numero % 4 === 0;
  const esMultiplo9 = numero % 9 === 0;

  if (esMultiplo4 && esMultiplo9) {
    mensaje += " (Múltiplo de 4 y de 9)";
  } else if (esMultiplo4) {
    mensaje += " (Múltiplo de 4)";
  } else if (esMultiplo9) {
    mensaje += " (Múltiplo de 9)";
  }

  // Mostramos el número en consola
  console.log(mensaje);

  // Cada 5 números mostramos la línea horizontal
  if (numero % 5 === 0) {
    console.log("——————————————————————————————");
  }
} */

//ejercicio 10

// Pedimos los datos al usuario
/* let filas = parseInt(prompt("Ingresa el número de FILAS:"));
let columnas = parseInt(prompt("Ingresa el número de COLUMNAS:"));

// Validación básica
if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
  alert("⚠️ Debes ingresar números positivos mayores a cero.");
} else {
  // Calculamos el número mayor (total de celdas)
  let totalCeldas = filas * columnas;
  let numero = totalCeldas; // Empezamos desde el mayor

  // Creamos la tabla
  document.write("<table border='1' cellpadding='8' cellspacing='0'>");

  for (let f = 1; f <= filas; f++) {
    document.write("<tr>"); // Iniciamos fila
    for (let c = 1; c <= columnas; c++) {
      document.write("<td>" + numero + "</td>");
      numero--; // Disminuimos el número en cada celda
    }
    document.write("</tr>"); // Cerramos fila
  }

  document.write("</table>");
} */

//ejercicio 11

/* let nombre1 = prompt("ingresa el Nombre de la persona 1:");
let edad1 = parseInt(prompt("ingresa la Edad de " + nombre1 + ":"));

let nombre2 = prompt("ingresa el Nombre de la persona 2:");
let edad2 = parseInt(prompt("ingresa la Edad de " + nombre2 + ":"));

let nombre3 = prompt("ingresa el Nombre de la persona 3:");
let edad3 = parseInt(prompt("ingresa la Edad de " + nombre3 + ":"));

const edadMayor = Math.max(edad1, edad2, edad3);

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3) || edad1 <= 0 || edad1 <= 0 || edad2 <= 0 || edad3 <= 0) {
  alert("debes ingresar edades VALIDAS (numeros mayores a cero).");
} else {
  let nombreMayor;

   if (edadMayor === edad1) {
    nombreMayor = nombre1;
  } else if (edadMayor === edad2) {
    nombreMayor = nombre2;
  } else {
    nombreMayor = nombre3;
  }

  // Mostramos el resultado
  alert("✅ La persona mayor es: " + nombreMayor + " con " + edadMayor + " años.");
  document.write("<h3>✅ La persona mayor es: <strong>" + nombreMayor + "</strong> (" + edadMayor + " años)</h3>");
} */
 
  //ejercicio 11

  // Generamos un número aleatorio entre 1 y 99
const numeroAleatorio = Math.floor(Math.random() * 99) + 1;

// Mostramos el resultado
console.log("Número aleatorio generado:", numeroAleatorio);
alert("Número aleatorio: " + numeroAleatorio);
document.write("<h3>Número aleatorio entre 1 y 99: " + numeroAleatorio + "</h3>");