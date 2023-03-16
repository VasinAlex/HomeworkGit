"use strict";

// HEADER fixed
document.addEventListener('scroll', function () {
  if (window.scrollY >= document.getElementById('header').offsetHeight) {
    document.getElementById('header').classList.add('fixed');
  } else {
    document.getElementById('header').classList.remove('fixed');
  }
}); // Hamburger

var hamburger = document.querySelector(".hamburger");
var hambMenu = document.querySelector("#hamb-menu");
var menuShadow = document.querySelector(".menu-shadow"); // On click

hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  hambMenu.classList.toggle("is-active");
  menuShadow.classList.toggle("is-active"); // Do something else, like open/close menu

  hambMenu.addEventListener("click", function () {
    // Toggle class "is-active"
    hambMenu.classList.remove("is-active");
    hamburger.classList.remove("is-active");
    menuShadow.classList.remove("is-active");
  });
}); // initModal----------------------
// function initModal(){
// 	document.body.insertAdjacentHTML("afterbegin", `<div class="menu-shadow"></div>`)
// }
// lightGallery

lightGallery(document.getElementById('selector'), {
  selector: '.item-gallery',
  thumbnail: true,
  thumbWidth: 20
});
$(function () {
  $('.first-screen').slick({
    lazyLoad: 'ondemand',
    vertical: true,
    verticalSwiping: true,
    dots: true,
    arrows: false
  }); // Scroll to

  $('.scrollto a').on('click', function () {
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 450,
      easing: "linear"
    });
    return false;
  });
}); // const API_KEY = "4ca2aa1b9f83415e860641a416df62b7";
// function getNews(){
// 	axios.get("https://newsapi.org/v2/everything", {
// 			params: {
// 				apiKey: API_KEY,
// 				q:"travel",
// 				searchIn: "title",
// 				language: "en",
// 				pageSize: 15,
// 				page: 1
// 			}
// 		})
// 		.then(resp=>{
// 			let list = '';
// 			resp.data.articles.forEach(news => {
// 				list += newsHTML(news);
// 			});
// 			$('.news-slider').html(list);
// 			$('.news-slider').slick({
// 				lazyLoad: 'ondemand',
// 				dots:true,
// 				slidesToShow: 3,
// 				slidesToScroll: 3,
// 				autoplay: true,
// 				autoplaySpeed: 4000,
// 				responsive: [
// 					{
// 						breakpoint: 1199,
// 						settings: {
// 							slidesToShow: 3,
// 						}
// 					},
// 					{
// 						breakpoint: 1024,
// 						settings: {
// 							slidesToShow: 2,
// 						}
// 					},
// 					{
// 						breakpoint: 767,
// 						settings: {
// 							slidesToShow: 1,
// 						}
// 					}
// 				]
// 			});
// 		})
// 	}
// 	getNews();
// function newsHTML(news){
// 		const d = new Date(news.publishedAt);
// 		const newsDate = d.getDate()+' '+(d.getMonth()+1)+' '+d.getFullYear();
// 		const newsImg = news.urlToImage ? news.urlToImage : `assets/images/noimage.jpg`
// 		return `
// <div class="news__item">
// 	<div class="news-image">
// 		<img data-lazy="${newsImg}" alt="Madrid architecture photographer Joel Filipe">
// 	</div>
// 	<div class="news-info">
// 		<div class="title">${news.title}</div>
// 		<div class="text"><p>${news.description}</p></div>
// 		<div class="author">
// 			<div class="author-image">
// 				<img data-lazy="${newsImg}" alt="Author name">
// 			</div>
// 			<div class="author-info">
// 				<span class="author-name">Author name</span>
// 				<time datetime="${news.publishedAt}" class="date">${newsDate}</time>
// 			</div>
// 		</div>
// 	</div>
// 	<a href="${news.url}" class="news-link" target="_blank"></a>
// </div>
// 	`
// }

var API_KEY = "5684706ccfcecf89d161cf52ec2a382d"; //gnews

function getNews() {
  axios.get("https://gnews.io/api/v4/search?q=technologies&lang=en&country=us&max=10&apikey=" + API_KEY).then(function (resp) {
    var list = "";
    resp.data.articles.forEach(function (news) {
      list += newsHTML(news);
    });
    $("#news-slider").html(list);
    $("#news-slider").slick({
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 4000,
      lazyLoad: "ondemand",
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  });
}

getNews();

function newsHTML(news) {
  var newsImg = news.image ? news.image : "assets/images/noimage.jpg";
  return "\n\t\t<div class=\"news__item\">\n\t\t\n\t\t\t<div class=\"news-image\">\n\t\t\t<img data-lazy=\"".concat(newsImg, "\" alt=\"Image\" />\n\t\t\t</div>\n\t\t\t<div class=\"news-info\">\n\t\t\n\t\t\t\t\t<h4 class=\"title\">").concat(news.title, "</h4>\n\t\t\t\t\t<p class=\"text\">").concat(news.content, "</p>\n\t\t\t\n\t\t\t\t<div class=\"author\">\n\t\t\t\t\t<div class=\"author-image\" >\n\t\t\t\t\t\t<img data-lazy=\"").concat(newsImg, "\" alt=\"img\" class=\"lazy\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"author-info\">\n\t\t\t\t\t\t<span class=\"author-name\">").concat(news.source.name, "</span>\n\t\t\t\t\t\t<time class=\"date\">").concat(news.publishedAt, "</time>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a href=\"").concat(news.url, "\" class=\"news-link\" target=\"_blank\"></a>\n\t\t</div>\n\t");
} // MAP ---------------------------------------


var marker = L.icon({
  iconUrl: 'assets/images/marker.png',
  // shadowUrl: 'leaf-shadow.png',
  iconSize: [100, 100]
});

function initMap() {
  var map = L.map('map').setView([40.67057930785901, -73.8960025297413], 13);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
  }).addTo(map);
  L.marker([40.67057930785901, -73.8960025297413], {
    icon: marker
  }).addTo(map);
}

document.querySelector('.mapmodal-btn').addEventListener('click', function () {
  document.querySelector('.map').classList.toggle('active-map');
  initMap();
}); // Form 

var toast = {
  style: {
    position: 'fixed',
    right: '15px',
    top: '80px',
    width: '350px',
    padding: '15px',
    color: '#fff',
    'border-radius': '5px',
    'z-index': '10000',
    'font-family': 'Montserrat',
    'font-weight': 400,
    'font-size': '22px',
    'text-align': 'center'
  },
  show: function show(text, type) {
    if (document.getElementById("my-toast")) {
      document.getElementById("my-toast").remove();
    }

    var styleString = '';

    for (var prop in this.style) {
      styleString += "".concat(prop, ":").concat(this.style[prop], ";");
    }

    switch (type) {
      case 'success':
        styleString += 'background-color: rgba(25, 135, 84, .8);';
        break;

      case 'danger':
        styleString += 'background-color: rgba(195, 22, 22, .8);';
        break;

      case 'warning':
        styleString += 'background-color: rgba(255, 184, 30, .8);';
        break;

      case 'info':
        styleString += 'background-color: rgba(30, 199, 255, 0.8);';
        break;
    }

    var html = "<div id=\"my-toast\" class=\"toast-".concat(type, "\" style=\"").concat(styleString, "\">\n      <div>").concat(text, "</div>\n    </div>");
    document.body.insertAdjacentHTML('afterbegin', html);
    setTimeout(function () {
      if (document.getElementById("my-toast")) {
        document.getElementById("my-toast").remove();
      }
    }, 3000);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'success');
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'danger');
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'warning');
  },
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.show(text, 'info');
  }
};
document.addEventListener('submit', function (e) {
  e.preventDefault();

  if (e.target.id === 'feedback-form') {
    submitFeedback();
  }
});

function submitFeedback() {
  var BOT_TOKEN = '6188121267:AAHycxhRmuVnOD-x4v_AnEzwmNbUeliyfB4';
  var CHAT_ID = '-1001857403518';
  var text = "\n<b>Name: </b> ".concat(document.getElementById('fb-name').value, "\n<b>Email: </b> ").concat(document.getElementById('fb-email').value, "\n\t");
  var name = document.getElementById('fb-name').value;
  var email = document.getElementById('fb-email').value;

  if (name !== '' & email !== '') {
    axios.post("https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage"), {
      chat_id: CHAT_ID,
      text: text,
      parse_mode: 'HTML'
    }).then(function (resp) {
      document.getElementById('fb-name').value = '';
      document.getElementById('fb-email').value = '';
      toast.success('Form send successfully');
    })["catch"](function (error) {
      toast.warning('AJAX error. Please try again later.');
    });
  } else {
    toast.danger('Enter your data');
  }
}

var lazyLoadInstance = new LazyLoad({// Your custom settings go here
});
var EMAIL_REGEXP = /^(((?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(\.(?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\.)+(?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})$/i;
var INPUT = document.querySelector('#fb-email');

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
  if (validateEmail(INPUT.value)) INPUT.style.borderColor = 'green';else INPUT.style.borderColor = 'red';
}

INPUT.addEventListener('input', updateInput);