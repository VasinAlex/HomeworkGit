"use strict";

var FILMSAPI = '864e1763';

function getFilms() {
  axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=".concat(FILMSAPI), {
    params: {
      apiKey: FILMSAPI,
      q: 'terminator',
      searchIn: 'title',
      page: 10
    }
  }).then(function (resp) {
    console.log(resp.data);
  });
}