/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

/*

document.querySelector('#calcular-salario-mensual').onclick = function () {

    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector('#salario-mensual').value = salarioMensual;
}

function calcularSalarioMensual (salarioAnual) {

    
    const mesesDelAno = 12;

    return salarioAnual / mesesDelAno;
}

*/

//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

/*

document.querySelector('#ingresar').onclick = function () {

    const $nombreUsuario = document.querySelector('#nombre-usuario').value;
    const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const $edadUsuario = document.querySelector('#edad-usuario').value;

    document.querySelector('#resultado').textContent = `Nombre: ${$nombreUsuario}
    Apellido: ${$apellidoUsuario}
    Edad: ${$edadUsuario}`;

    document.querySelector('h1').textContent = `Bienvenido  +${$nombreUsuario}`;

    return false;

}

*/

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/*

let segundosCargados = 0;
let minutosCargados = 0;
let horasCargadas = 0;


document.querySelector('#calcular').onclick = function (){
   
    segundosCargados = segundosCargados + Number(document.querySelector('#segundos').value);
    minutosCargados = minutosCargados + Number(document.querySelector('#minutos').value);
    horasCargadas = horasCargadas + Number(document.querySelector('#horas').value);

    minutosCargados = minutosCargados + Math.floor(segundosCargados / 60);
    segundosCargados = segundosCargados % 60;
    horasCargadas = horasCargadas + Math.floor(minutosCargados / 60);
    minutosCargados = minutosCargados % 60;

    document.querySelector('#resultado').textContent = `La duración total de los videos es de ${horasCargadas}:${minutosCargados}:${segundosCargados}`;

}

document.querySelector('#resetear').onclick = function (){
    segundosCargados = 0;
    minutosCargados = 0;
    horasCargadas = 0;
    document.querySelector('#resultado').textContent = `La duración total de los videos es de ${horasCargadas}:${minutosCargados}:${segundosCargados}`;
}


*/

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numeros = document.querySelectorAll("li");

function calcularPromedio(numeros) {
  let sumaTotal = 0;
  const cantidadNumeros = numeros.length;

  for (i = 0; i < numeros.length; i++) {
    sumaTotal = sumaTotal + Number(numeros[i].textContent);
  }

  let promedio = sumaTotal / cantidadNumeros;

  return promedio;
}

function buscarNumeroPequeno(numeros) {
  let numeroMasPequeno = Number(numeros[0].textContent);

  for (i = 0; i < numeros.length; i++) {
    const numeroCalculado = Number(numeros[i].textContent);

    if (numeroCalculado < numeroMasPequeno) {
      numeroMasPequeno = numeroCalculado;
    }
  }
  return numeroMasPequeno;
}

function buscarNumeroGrande(numeros) {
  let numeroMasGrande = Number(numeros[0].textContent);

  for (i = 0; i < numeros.length; i++) {
    const numeroCalculado = Number(numeros[i].textContent)
    if (numeroCalculado > numeroMasGrande) {
      numeroMasGrande = numeroCalculado;
    }
  }
  return numeroMasGrande;
}

function buscarNumeroFrecuente(numeros) {
  let mayorFrecuencia = 1;
  let frecuencia = 0;
  let numeroMasFrecuente;

  for (i = 0; i < numeros.length; i++) {
    for (j = i; j < numeros.length; j++) {
      const numeroCalculado = Number(numeros[i].textContent);
      const numeroComparado = Number(numeros[j].textContent);
      
      if (numeroCalculado == numeroComparado)
        frecuencia++;

      if (frecuencia > mayorFrecuencia) {
        mayorFrecuencia = frecuencia;
        numeroMasFrecuente = Number(numeros[i].textContent);
      }
    }
    frecuencia = 0;
  }
  return numeroMasFrecuente;
}

function mostrarPromedio(promedio) {
  const $contenedorPromedio = document.querySelector("#promedio");

  $contenedorPromedio.textContent = `El promedio es ${promedio}`;
}

function mostrarNumeroPequeno(numeroMasPequeno) {
  const $contenedorNumeroPequeno = document.querySelector("#numero-pequeno");

  $contenedorNumeroPequeno.textContent = `El número más pequeño es ${numeroMasPequeno}`;
}

function mostrarNumeroGrande(numeroMasGrande) {
  const $contenedorNumeroGrande = document.querySelector("#numero-grande");

  $contenedorNumeroGrande.textContent = `El número más grande es ${numeroMasGrande}`;
}

function mostrarNumeroFrecuente(numeroMasFrecuente) {
  const $contenedorNumeroFrecuente =
    document.querySelector("#numero-frecuente");

  $contenedorNumeroFrecuente.textContent = `El número más frecuente es ${numeroMasFrecuente}`;
}

const promedioEncontrado = calcularPromedio(numeros);
const numeroFrecuenteEncontrado = buscarNumeroFrecuente(numeros);
const numeroPequenoEncontrado = buscarNumeroPequeno(numeros);
const numeroGrandeEncontrado = buscarNumeroGrande(numeros);

function mostrarNumeros() {
  mostrarPromedio(promedioEncontrado);
  mostrarNumeroPequeno(numeroPequenoEncontrado);
  mostrarNumeroGrande(numeroGrandeEncontrado);
  mostrarNumeroFrecuente(numeroFrecuenteEncontrado);
}

mostrarNumeros(numeros);
