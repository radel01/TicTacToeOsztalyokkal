import TTTModell from "../modell/ticTacToeModell.js";

import Palya from "../view/Palya.js";



export default class TTTController {
    //két feladat:
    //    1. pélányosítja a modellt és a viewt
    //    2. feliratkozik az eseménykezelőkre
    constructor() {
      this.taroloELEM = $(".jatekter");
      this.tttModell = new TTTModell();
      new Palya(this.tttModell.getList(), this.taroloELEM);
      this.#esemenyKezelo();
    }
  
  
    #esemenyKezelo() {
      $(window).on("katt", (event) => {
        console.log(event.detail);
        this.tttModell.lepteto(event.detail);
        new Palya(this.tttModell.getList(), this.taroloELEM);
      });
    }
  }
  
  
  