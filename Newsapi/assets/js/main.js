const NEWSAPI_KEY = '4ca2aa1b9f83415e860641a416df62b7';

function getNews(){
	axios.get('https://newsapi.org/v2/everything', {
		params: {
			apiKey: NEWSAPI_KEY,
			// q: '',
			title:'SEE THE UNMATCHED BEAUTY OF THE GREAT.',
			description:'Free directories: directories are perfect for customers that are searching for...',
			publishedAt: '20 Jan 2020',
			author: 'ALJA BRUN'
		}
			
	})
	.then(resp => {
		console.log(resp.data);
		let list = '';
		resp.data.articles.forEach(news => {
			list += newsHTML(news);			
		})
		document.getElementById('news-wrap').innerHTML = list;
	})
}

function newsHTML (news){
	const d = new Date(news.publishedAt);
	const newsDate = d.getDate()+' '+(d.getMonth()+1)+' '+d.getFullYear();
	return `
		<div class="news-item">
			<h4>${news.title}</h4>
			<time datatime="${news.publishedAt}">${newsDate}</time>
			<div>
				<p>${news.title}</p>
				<p>${news.description}</p>
				<p>${news.author}</p>
				
			</div>
			<a href="${news.url}">${news.source.name}</a>
			<hr><br>
		</div>
	`
}