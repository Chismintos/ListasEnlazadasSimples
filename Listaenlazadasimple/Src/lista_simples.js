
//Listas enlazadas simples 13/02/23
//Cristian Garcia

import Nodo from "./nodo.js";

export default class ListaEnlazadaSimple{   
       
    constructor(cabeza = null){
        this.cabeza = cabeza;
    }

   

    //Metodo para insertar nodos al inicio de la lista 

    insertarInicio(data){       
        const nuevo = new Nodo(data);  //creacion del nodo(data:1,enlace:null)
        nuevo.enlace = this.cabeza;    //conectamos el enlace del nuevo nodo a el nodo anterior´cabeza´
        this.cabeza = nuevo;           //hacemos que el nuevo nodo se convierta en la cabeza de la lista

    }

    insertarFinal(data){  //proximamente
        const nuevo = new Nodo(data);
        let temp = this.cabeza

        while (temp.enlace !== null) {
            temp = temp.enlace
        }

        temp.enlace = nuevo

    }

    //Metodo para insertar un nodo entre dos nodos de la lista

    insertarEntre(data,punto){
        const nuevo = new Nodo(data); 
        let temp = this.cabeza;           //copia de la cabeza

        //ciclo if para buscar el punto donde se declarar n1 y n2 para insertar el nodo, al no ser el nodo que buscamos se recorre temp a un nodo

        
        while (temp !== null) {

            //ciclo if para buscar y insertar nodo

            if (temp.enlace.data === punto ) {

                nuevo.enlace = temp.enlace
                temp.enlace = nuevo

                break
                
            } else {
                temp = temp.enlace; 
            }
            // console.log('ciclo');

        }
            
    }
    

    eliminar(eliminar){
        let temp = this.cabeza;
       
        while (temp !== null) {

            //ciclo if para buscar y insertar nodo

            if (temp.enlace.data === eliminar ) {

                temp.enlace = temp.enlace.enlace

                break
                
            } else {
                temp = temp.enlace; 
            }
            // console.log('ciclo');

        }
        
    }


    //Este método recorre la lista e imprime su contenido

    impresion(){
        let temp = this.cabeza;
        let valores = '';
        
        do{
            valores += `${temp.data} -> `;
            temp = temp.enlace;
            // console.log('cocos');


        }while(temp !== null);         //se cumple mientras el dato no sea nullo
        console.log(valores + 'null')
        
    }
    

}

