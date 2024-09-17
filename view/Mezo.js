export default class Mezo{
//egy divet jelenít meg ennyit tud, saját eseményt itt tudjuk generálni, ogy megtudjuk melyik elemre kattintottunk
    #jel;
    #index;
    #szE;

    constructor(jel, index, szE){
        this.#jel=jel
        this.#index=index
        this.#szE=szE

        this.mezoKiir();
        this.gombELEM=$(".mezo:last-child")
        if(this.#jel===" "){
            this.gombKattint();
        }
    }

    mezoKiir(){
        this.#szE.append(`<div class="mezo">${this.#jel}</div>`)
    }

    gombKattint() {
        this.gombELEM.on("click", ()=>{
            const e= new CustomEvent("katt", {detail: this.#index});
            window.dispatchEvent(e)
        })
    }
}

