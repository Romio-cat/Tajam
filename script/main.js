// Изменение иконки меню
function menuIconChange(x) {
  x.classList.toggle("change");
};
// Открытие и закрытие меню при клике на крестик
var menu = document.getElementById("topMenu");
var hamburger = document.querySelector('.menu-icon');

function responsiveMenu() {
  menu.classList.toggle('responsive');
  if (menu.className === "menu") {
	  hamburger.style.position = "absolute";
	} else {
	  hamburger.style.position = "fixed";
	}
};

// Слайдер
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("header-slides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	};
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

	setTimeout(showSlides, 3000); 
};

// включение видео
$(document).on('click', '.fa-play-circle', function() {
  var $video = $('#video'),
      src = $video.attr('src');

  $video.attr('src', src + '?autoplay=1');
  $(".play").hide();
});