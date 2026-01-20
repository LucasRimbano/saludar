document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("iniciar").addEventListener("click", iniciarCalculadora);
  document.getElementById("modo-oscuro").addEventListener("click", activarModoOscuro);
  document.getElementById("Mostrar-nombre").addEventListener("click", mostrartitulo);
});

function iniciarCalculadora() {
alert("Bienvenido a la calculadora♥!");


const nombre1 = prompt("Ingrese su nombre")
Imprimir("mensaje", "Su nombre es: " + nombre1);

function Imprimir(tipo, dato) {
  if (tipo === "nombre") {
    console.log("Hola " + dato + "!");
    alert("Hola " + dato + "!");
  } else if (tipo === "resultado") {
    console.log("El resultado es: " + dato);
    alert("El resultado es: " + dato);
  } else {
    console.log(dato);
    alert(dato);
  }
}



function sumar (a,b) {

    return a + b;
}

function pedirNumero(mensaje) {
  let n;

  while (true) {
    let entrada = prompt(mensaje);

    // Si cancela el prompt
    if (entrada === null) {
      alert("Cancelaste la carga. Ingresá un número para continuar.");
      continue;
    }

    // Convertimos a número
    n = Number(entrada);

    // Validación
    if (!Number.isNaN(n)) {
      return n;
    } else {
      alert("Error: ingresá un número válido.");
    }
  }
}

function ingresodatos() {
  let numero1 = pedirNumero("Ingresa el primer número:");
  let numero2 = pedirNumero("Ingresa el segundo número:");
  return [numero1, numero2];
}


let [numero1, numero2] = ingresodatos();

let resultadoSuma = sumar(numero1, numero2);




function restar(a,b) {
    return a - b;
}

let resultadoResta = restar(numero1, numero2);




function multiplicar(a,b) {
     return a * b;

}
let resultadoMultiplicacion = multiplicar(numero1, numero2);



function dividir(a,b) {
    return a / b;
}

let resultadoDivision = dividir(numero1, numero2);



function Promedio(a,b) {
    return (a + b) / 2;
}

let resultadoPromedio = Promedio(numero1, numero2);



let operacion = parseInt(prompt("Ingresa el número de la operación que deseas ver:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Promedio\n6. cambiar numeros \n7. Salir"),10);


while (operacion !== 7) {

  let resultadoSuma = numero1 + numero2;
  let resultadoResta = numero1 - numero2;
  let resultadoMultiplicacion = numero1 * numero2;
  let resultadoDivision = (numero2 === 0) ? "Error: división por 0" : (numero1 / numero2);
  let resultadoPromedio = (numero1 + numero2) / 2;
switch (operacion) {

    case 1 :

        Imprimir("resultado", resultadoSuma);
        break;
    case 2 :

        Imprimir("resultado", resultadoResta);
        break;
    case 3 :
        Imprimir("resultado", resultadoMultiplicacion);
        break; 
    case 4 :
        Imprimir("resultado", resultadoDivision);
        break;
    case 5:
        Imprimir("resultado", resultadoPromedio);
        break;
    case 6:
       [numero1, numero2] = ingresodatos();
       alert("Números actualizados.");
       break;
    case 7:
        alert("Gracias por usar la calculadora. ¡Hasta luego!");
        return;

    default:
        alert("Operación no válida, ingrese un numero del 1 al 5 solamente");

}
 operacion = parseInt(prompt("Ingresa el número de la operación que deseas ver:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Promedio\n6. cambiar numeros \n7. Salir"),10);
}
}



function activarModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
}

function actualizarTextoBoton() {
  const boton = document.getElementById("modo-oscuro");
  if (document.body.classList.contains("modo-oscuro")) {
    boton.textContent = "Modo Oscuro";
  } else {
    boton.textContent = "Modo claro";
  } 
}
  actualizarTextoBoton();


function mostrartitulo() {
  document.getElementById("titulo").textContent = "Bienvenido a la calculadora loca";

  const btn = document.getElementById("titulo");
  btn.classList.add("mover");
  setTimeout(() => btn.classList.remove("mover"), 700);
}

