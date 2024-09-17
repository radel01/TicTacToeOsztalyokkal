export default class TTTModell{
    //csak az adatokkal foglalkozik, előállítja a program aktuális állapotát
    
    #LISTA=[" "," "," "," "," "," "," "," "," "]
    #lepes;
    #aktElem;
    constructor(){
        this.#lepes=0
        this.#setAktElem();
    }

    #setAktElem(){
        if (this.#lepes % 2 === 0) {
            this.#aktElem = "X";
          } else {
            this.#aktElem= "O";
          }
    }
/*     getAktElem(){
        return this.#aktElem
    } */
    //kontrollernek lesz szüksége rá
    getList(){
        return this.#LISTA;
    }
    //beírj az akt elemet, megnöveli egyel
    lepteto(index){
        this.#LISTA[index]=this.#aktElem
        this.#lepes++
        this.#setAktElem()
    }
    //ellenörzős metódust is lehetne ide(ki nyer)


}