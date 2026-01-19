document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("iniciar").addEventListener("click", iniciarCalculadora);
});

function iniciarCalculadora() {
alert("Bienvenido a la página de saludo y suma!");


const nombre1 = "Lucas";
const nombre2 = "María";
const nombre3 = "Pedro";

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

for (let i = 1; i <= 3; i++) {
    if (i === 1) {
        Imprimir("nombre", nombre1);
    } else if (i === 2) {
        Imprimir("nombre", nombre2);
    } else if (i === 3) {
        Imprimir("nombre", nombre3);
    }   
}





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


const operacion = parseInt(prompt("Ingresa el número de la operación que deseas ver:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Promedio"),10);


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
    default:
        alert("Operación no válida, ingrese un numero del 1 al 5 solamente");

}

}


