alert("Bienvenido a la página de saludo y suma!");


const nombre1 = "Lucas";
const nombre2 = "María";
const nombre3 = "Pedro";

function Imprimir(dato) {
  if (typeof dato === "string") {
    console.log("Hola " + dato + "!");
    alert("Hola " + dato + "!");
  } else {
    console.log("El resultado de la suma es: " + dato);
    alert("El resultado de la suma es: " + dato);
  }
}



function sumar (a,b) {

    return a + b;
}

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

let resultadoSuma = sumar(numero1, numero2);

for (let i = 1; i <= 3; i++) {
    if (i === 1) {
        Imprimir(nombre1);
    } else if (i === 2) {
        Imprimir(nombre2);
    } else if (i === 3) {
        Imprimir(nombre3);
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


const operacion = parseInt(prompt("Ingresa el número de la operación que deseas ver:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));


switch (operacion) {

    case 1 :

        Imprimir(resultadoSuma);
        break;
    case 2 :
        
        Imprimir(resultadoResta);
        break;
    case 3 :
        Imprimir(resultadoMultiplicacion);
        break;
    case 4 :
        Imprimir(resultadoDivision);
        break;
    default:
        alert("Operación no válida");

}