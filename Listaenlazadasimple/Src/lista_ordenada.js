
//Lista Ordenada Simple 23/02/23
//Cristian Garcia

import ListaEnlazadaSimple from "./lista_simples.js";

export default class ListaOrdenadaSimple extends ListaEnlazadaSimple{

    constructor(){
        super(null)
    }


    ordenarBurbuja(){
        
        let copy = this.cabeza;

        while(copy !== null){  //mientras el enlace no sea null

            let cat = copy.enlace;

            while(cat !== null){   //cat sera el siguiente de copy
                
                if(copy.data > cat.data){
                
                let temp = copy.data;
                copy.data = cat.data;
                cat.data = temp;

                }else{
                    cat = cat.enlace;

                }
            }  
            copy = copy.enlace;
        }
    }

    ordenarIntercambio(){
        
        let copy = this.cabeza;

        while (copy != null) {

            let cat = copy.enlace

            while (cat != null) {

                if (copy.data > cat.data) {

                    let temp = copy.data
                    copy.data = cat.data
                    cat.data = temp;

                    cat = cat.enlace;

                }else{
                        
                    cat = cat.enlace;

                }
            }
            copy = copy.enlace;
        }
    }   

    
}

//crear un metodo para poder medir el tiempo al ejecutar ordenarburbuja