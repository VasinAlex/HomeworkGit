document.addEventListener('scroll', function(){
	if(window.scrollY>=document.getElementById('first').offsetHeight){
		document.getElementById('header').classList.add('fixed');
	} 
	else {
		document.getElementById('header').classList.remove('fixed');
	}
})
