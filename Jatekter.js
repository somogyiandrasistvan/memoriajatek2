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
      this.#kivalasztottKepekLista.push(event.detail)
      console.log(this.#kivalasztottKepekLista);
      if(this.#kivalasztottKepekLista.length == 2){
        this.#kivalasztottKepekLista = [];
      }
      //kep eleresi utja: event.detail.getAdat()
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
