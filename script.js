console.log(movies)
let korobka = document.querySelector('.korobka')


function generator(ParametrFunkcii){
  console.log(ParametrFunkcii);
  
  korobka.innerHTML = '';
  ParametrFunkcii.forEach(kajdiyElementMassiva => {
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    
          <img src=${kajdiyElementMassiva.ImageURL} alt="">
      <h2 class="kinoniOti">${kajdiyElementMassiva.Title}</h2>
      <p>Raiting: ${kajdiyElementMassiva.imdb_rating} | Year: 
      ${kajdiyElementMassiva.movie_year} | Time: ${kajdiyElementMassiva.runtime}</p>
      <p>${kajdiyElementMassiva.Categories}</p>
      <button>More info</button>
      `
      korobka.appendChild(div)
  });
}

generator(movies)