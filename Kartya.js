class Kartya {
  #adat;
  #divElem;
  #imgElem;

  constructor(adat, szuloElem, hatter) {
    this.#adat = adat;
    szuloElem.append(`<div><img src="kepek/${hatter}" alt="kep"></div>`);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img:last-child");

    this.#divElem.on("click", () => {
      this.setKep(this.#adat);
      this.esemenyTrigger("megjelenit");
    });
  }

  getAdat() {
    return this.#adat;
  }

  setKep(kep) {
    this.#imgElem.attr("src", "kepek/"+kep);
  }

  esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(E);
  }
}

export default Kartya;
