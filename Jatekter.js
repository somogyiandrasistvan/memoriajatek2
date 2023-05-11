import Kartya from "./Kartya.js";

class Jatekter {
  #kepekLista = [];
  #kivalasztottKepekLista = [];

  constructor(kepekLista) {
    this.#kepekLista = kepekLista;
    console.log(this.#kepekLista);
    this.#kartyaMegjelenito(this.#kepekLista);
    let index = 0
    $(window).on("megjelenit", (event) => {
      this.#kivalasztottKepekLista[index] = event.detail
        index++
      console.log(this.#kivalasztottKepekLista);
      if(index == 2){
        index = 0;
        this.#kivalasztottKepekLista = [];
      }
    });
  }

  #kartyaMegjelenito(lista) {
    let hatter = lista[0];
    const ARTICLE = $("article");
    for (let index = 1; index < lista.length; index++) {
      const KARTYA = new Kartya(lista[index], ARTICLE, hatter);
    }
  }
}

export default Jatekter;
