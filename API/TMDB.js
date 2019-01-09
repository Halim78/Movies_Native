const API_TOKEN = "df2d1819de9c2faa1ff55a9dd2f75032";

 export const getFilms = (text, page) => {
    const url ='https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "#page=" + page
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export const getImages = (name) => {
    return 'https://image.tmdb.org/t/p/w300' + name
}