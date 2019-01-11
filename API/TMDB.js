const API_TOKEN = "df2d1819de9c2faa1ff55a9dd2f75032";

export const getFilms = (text, page) => {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "#page=" +
    page;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export function getImagesApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}

export function getFilmDetail(id) {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=" +
      API_TOKEN +
      "&language=fr"
  )
    .then(response => response.json())
    .catch(error => console.error(error));
}
