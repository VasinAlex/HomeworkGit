

const FILMSAPI = '864e1763';

function getFilms(){
	axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${FILMSAPI}`, {
		params: {
			apiKey: FILMSAPI,
			q: 'terminator',
			searchIn:'title',
			page: 10
		}
	})
	.then(resp=> {
		console.log(resp.data);
	})
}