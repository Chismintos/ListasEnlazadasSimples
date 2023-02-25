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


for (let i = 0; i < 100; i++) {

    lista.insertarInicio(Math.floor(Math.random() * 10000));
}

lista.ordenarBurbuja();
lista.impresion();


