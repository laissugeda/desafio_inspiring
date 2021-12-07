const jogosLista = document.getElementById("jogos-lista");

let ofertas = [
  {
    title: "RAGE 2",
    salePrice: "0,00",
    normalPrice: "199,00",
    thumb: "assets/imgs/548570.jpg",
  },
  {
    title: "Batman™: Arkham Knight",
    salePrice: "12,49",
    normalPrice: "49,99",
    thumb: "assets/imgs/208650.jpg",
  },
  {
    title: "The Sims™ 4",
    salePrice: "39,75",
    normalPrice: "159,00",
    thumb: "assets/imgs/1222670.jpg",
  },
  {
    title: "Street Fighter V",
    salePrice: "15,99",
    normalPrice: "39,99",
    thumb: "assets/imgs/310950.jpg",
  },
  {
    title: "Divinity: Original Sin 2 - Definitive Edition",
    salePrice: "36,39",
    normalPrice: "90,99",
    thumb: "assets/imgs/435150.jpg",
  },
  {
    title: "Planet Zoo",
    salePrice: "50,00",
    normalPrice: "100,00",
    thumb: "assets/imgs/703080.jpg",
  },
  {
    title: "Battlefield V",
    salePrice: "119,60",
    normalPrice: "299,00",
    thumb: "assets/imgs/1238810.jpg",
  },

  {
    title: "Arma 3",
    salePrice: "17,49",
    normalPrice: "69,99",
    thumb: "assets/imgs/107410.jpg",
  },
  {
    title: "Zombie Army 4: Dead War",
    salePrice: "84,59",
    normalPrice: "93,99",
    thumb: "assets/imgs/694280.jpg",
  },
  {
    title: "Sniper Ghost Warrior Contracts",
    salePrice: "34,99",
    normalPrice: "69,99",
    thumb: "assets/imgs/973580.jpg",
  },
  {
    title: "Jurassic World Evolution",
    salePrice: "19,99",
    normalPrice: "79,99",
    thumb: "assets/imgs/648350.jpg",
  },
  {
    title: "RollerCoaster Tycoon® 3: Complete Edition",
    salePrice: "22,79",
    normalPrice: "37,99",
    thumb: "assets/imgs/1368820.jpg",
  },
];

window.onload = () => {
  jogosLista.innerHTML = "";

  ofertas.map((oferta) => {
    jogosLista.innerHTML += `
      <article class="oferta">
        <header>
          <h4>
            ${oferta.title}
          </h4>
        </header>

        <figure>
          <img src="${oferta.thumb}" alt="${oferta.title}">
        </figure>

        <section>
          <small class="preco-normal">$ ${oferta.normalPrice}</small>
          <h5 class="preco-oferta">$ ${oferta.salePrice}</h5>
        </section> 
      </article>
      `;
  });
};
