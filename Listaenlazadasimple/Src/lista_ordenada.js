
//Lista Ordenada Simple 23/02/23
//Cristian Garcia

import ListaEnlazadaSimple from "./lista_simples.js";

export default class ListaOrdenadaSimple extends ListaEnlazadaSimple{

    constructor(){
        super(null)
    }


    ordenarBurbuja(){
        
        let cat
        let copy = this.cabeza 

        while(copy !== null){

            while((cat = copy.enlace) !== null){
                
                if(copy.data > cat.data){
                
                let temp = copy.data;
                copy.data = cat.data;
                cat.data = temp;

                }else{
                    cat = cat.enlace;

                    console.log(`cocos`);

                }

            
            }
        
        }
    }

}