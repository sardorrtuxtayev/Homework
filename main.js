let URL = "https://www.omdbapi.com/?s=marvel&apikey=86e5e7f3";

const elMoviesList = document.querySelector(".js-movies-list");


async function getMovies() {
  try {
    let req = await fetch(URL);
    let res = await req.json();

   
    HandlerenderMovies(res.Search);

  } catch (err) {
    console.log(err);
  }
}


function HandlerenderMovies(movies) {
  elMoviesList.innerHTML = ""; 

  movies.forEach(movie => {
    elMoviesList.innerHTML += `
      <li>
        <img src="${movie.Poster}" width="120">
        <h3><strong>Title: </strong>${movie.Title}</h3>
        <p><strong>Year: </strong>${movie.Year}</p>
        <p><strong>Type: </strong>${movie.Type}</p>
      </li>
    `;
  });
}



getMovies();







  