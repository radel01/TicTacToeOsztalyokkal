import Mezo from "./Mezo.js";
//annyi a dolga , hogy az aktuális állapotot megjeleníti, csak a kontrolleren keresztül beszélget a modellel
export default class Palya{

    #lista=[];
    #szE;

    constructor(lista, szE){
        this.#lista=lista
        this.#szE=szE
        this.#szE.empty();
        this.palyaKiir();
    }

    palyaKiir(){
        this.#lista.forEach((elem, index) => {
            new Mezo(elem, index, this.#szE) 
        });
    }
}

