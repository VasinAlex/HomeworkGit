"use strict";

var NEWSAPI_KEY = '4ca2aa1b9f83415e860641a416df62b7';

function getNews() {
  axios.get('https://newsapi.org/v2/everything', {
    params: {
      apiKey: NEWSAPI_KEY,
      // q: '',
      title: 'SEE THE UNMATCHED BEAUTY OF THE GREAT.',
      description: 'Free directories: directories are perfect for customers that are searching for...',
      publishedAt: '20 Jan 2020',
      author: 'ALJA BRUN'
    }
  }).then(function (resp) {
    console.log(resp.data);
    var list = '';
    resp.data.articles.forEach(function (news) {
      list += newsHTML(news);
    });
    document.getElementById('news-wrap').innerHTML = list;
  });
}

function newsHTML(news) {
  var d = new Date(news.publishedAt);
  var newsDate = d.getDate() + ' ' + (d.getMonth() + 1) + ' ' + d.getFullYear();
  return "\n\t\t<div class=\"news-item\">\n\t\t\t<h4>".concat(news.title, "</h4>\n\t\t\t<time datatime=\"").concat(news.publishedAt, "\">").concat(newsDate, "</time>\n\t\t\t<div>\n\t\t\t\t<p>").concat(news.title, "</p>\n\t\t\t\t<p>").concat(news.description, "</p>\n\t\t\t\t<p>").concat(news.author, "</p>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<a href=\"").concat(news.url, "\">").concat(news.source.name, "</a>\n\t\t\t<hr><br>\n\t\t</div>\n\t");
}