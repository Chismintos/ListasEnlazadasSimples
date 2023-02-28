// import ListaEnlazadaSimple from "./Src/lista_simples.js";
import ListaOrdenadaSimple from "./Src/lista_ordenada.js";

// let lista =new ListaEnlazadaSimple();
let lista =new ListaOrdenadaSimple();



// lista.insertarInicio(10);
// lista.insertarInicio(70);
// lista.insertarInicio(1);
// lista.insertarInicio(5);
// lista.impresion();          

// lista.eliminar(70);
// lista.impresion();

// lista.insertarEntre(200,1);
// lista.impresion();          

// lista.insertarInicio(500);
// lista.insertarInicio(600);
// lista.insertarInicio(700);
// lista.impresion();

// lista.insertarFinal(77);
// lista.impresion();

// lista.ordenarBurbuja();
// lista.impresion();


//insertar x datos randoms 
let entry = 100   //sin codigo como 21 segundos en ejecutar

for (let i = 0; i < entry; i++) {

    lista.insertarInicio(Math.floor(Math.random() * entry));
}

//metodo console.time() y console.timeEnd() para medir el tiempo de ejecucion

// console.time("loop")
// lista.ordenarBurbuja();
// lista.impresion();
// console.timeEnd("loop")



lista.ordenarIntercambio();
lista.impresion();


